import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Get, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/users/users.service";
import { AuthGuard } from "../guards/auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK) 
  @Post("login")
  logIn(@Body() userData: User) {
    return this.authService.logIn(userData.email, userData.password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Req() req: any){
    return { user: "name", password: "pass" };
  }
}
