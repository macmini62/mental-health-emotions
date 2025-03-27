import { Controller, Post, Body, HttpCode, HttpStatus, Res, Get, Req, UseGuards, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { user } from "src/users/interface/user.interface";
import { SkipAuth } from "src/decorators/auth.decorator";
import { Response } from "express";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersService } from "src/users/users.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @SkipAuth()
  @Post("signup")
  async signUp(@Res() res: Response, @Body() userData: user){
    const accessToken = await this.authService.signUp(userData);
    if(accessToken){
      res.status(201).send(accessToken);
    }
    res.status(500).send("User email already in user!!");
  }

  @SkipAuth()
  // @UseGuards(AuthGuard)
  @Post("signup/completeRegistration/:userId")
  async completeSignUp(
    @Res() res: Response,
    @Param("userId") userId: string,
    @Body() data: {
      role: string,
      title: string,
      topics: string[]
    }
  ){
    console.log(userId);
    console.log(data);
    if(data.role === "professional"){
      const results = await this.userService.addUserProfessional(userId, data);
      if(results){
        res.status(201).send(results);
      }
      else{
        res.status(500);
      }
    }
    else if(data.role === "seeker"){
      const results = await this.userService.addUserSeeker(userId, data);
      if(results){
        res.status(400).send(results);
      }
      else{
        res.status(500);
      }
    }
  }

  @SkipAuth()
  @HttpCode(HttpStatus.OK) 
  @Post("login")
  async logIn(@Res() res: Response, @Body() userData: user) {
    const accessToken: object = await this.authService.logIn(userData.email, userData.password);
    if(accessToken){
      res.status(200).send(accessToken);
    }
    else{
      res.status(500).send();
    }
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Req() req: any){
    console.log(req.user);
    return req.user;
  }
}
