import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ){}

  async logIn(email: string, password: string): Promise<{ accessToken: string }>{
    try{
      const user = await this.userService.findOne(email);
      if (user?.password !== password){
        throw new UnauthorizedException();
      }
      
      const payload = { sub: user.id, email: user.email };
      return {
        accessToken: await this.jwtService.signAsync(payload),
      };
    }catch(e){
      console.log(e);
    }
  }
}
