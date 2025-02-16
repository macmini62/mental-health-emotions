import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Get, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { user } from "src/users/interface/user.interface";
import { AuthGuard } from "../guards/auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK) 
  @Post("login")
  logIn(@Body() userData: user) {
    return this.authService.logIn(userData.email, userData.password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Req() req: any){
    return { user: "name", password: "pass" };
  }
}
