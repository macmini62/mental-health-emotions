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
  @Post("signup/completeRegistration/:userId")
  async completeSignUp(
    @Param("userId") userId: string,
    @Body() data: {
      role: string,
      title: string,
      topics: string[]
    }
  ){
    return await this.userService.addUserProfessional(userId, data);
  }

  @SkipAuth()
  @HttpCode(HttpStatus.OK) 
  @Post("login")
  async logIn(@Res() res: Response, @Body() userData: user) {
    const accessToken: object = await this.authService.logIn(userData.email, userData.password);
    if(accessToken){
      res.status(200).send(accessToken);
    }
    // res.status(500).send("Failed to login!!");
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Req() req: any){
    console.log(req.user);
    return req.user;
  }
}
