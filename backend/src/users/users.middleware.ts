import { Injectable, NestMiddleware } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";

@Injectable()
export class VerifyUser implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}
  
  async use(req: any, res: any, next: () => void) {

    next();
  }
}
