import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class VerifyUser implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}
  
  async use(req: any, res: any, next: () => void) {
    const data = {email: req.query.email, password: req.query.password}
    
    const user = await this.userModel.exists({ ...data });
    console.log(user);

    if(user === null){
      return res.status(401).send({ message: "Not verified" });
    }
    
    res.status(200).send({...user});

    next();
  }
}
