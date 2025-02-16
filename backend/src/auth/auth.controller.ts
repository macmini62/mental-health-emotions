import { Controller, Post, Body, HttpCode, HttpStatus, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { user } from "src/users/interface/user.interface";
import { SkipAuth } from "src/decorators/auth.decorator";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  @HttpCode(HttpStatus.OK) 
  @Post("login")
  async logIn(@Res() res: Response, @Body() userData: user) {
    const accessToken: object = await this.authService.logIn(userData.email, userData.password);
    if(accessToken){
      res.status(200).send(accessToken);
    }
    res.status(500).send("Failed to login!!");
  }

  // @UseGuards(AuthGuard)
  // @Get("profile")
  // getProfile(@Req() req: any){
  //   console.log(req.user);
  //   return req.user;
  // }
}
