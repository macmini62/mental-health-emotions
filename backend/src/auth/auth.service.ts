import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
  ){}

  async logIn(email: string, password: string): Promise<any>{
    try{
      const user = await this.userService.findOne(email);
      if (user?.password !== password){
        throw new UnauthorizedException();
      }
      
      console.log(user);
    }catch(e){
      console.log(e);
    }
  }
}
