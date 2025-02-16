import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { user } from "src/users/interface/user.interface";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ){}

  async signUp(user: user): Promise<{ accessToken: string }>{
    try{
      const existingUser: user = await this.userService.findOne(user.email);
      if(existingUser){
        throw new ConflictException;
      }

      const results = await this.userService.create(user);
      if(!results){
        throw new Error("User not added!!");
      }

      const accessToken = await this.logIn(results.email, results.password);
      return accessToken;
    }
    catch(e){
      console.log(e);
    }
  }

  async logIn(email: string, password: string): Promise<{ user: user, accessToken: string }>{
    try{
      const user: user = await this.userService.findOne(email);
      console.log(user);
      if (user?.password !== password){
        throw new UnauthorizedException();
      }
      
      const payload = { sub: user._id, email: user.email };
      return {
        user: user,
        accessToken: await this.jwtService.signAsync(payload),
      };
    }catch(e){
      console.log(e);
    }
  }
}
