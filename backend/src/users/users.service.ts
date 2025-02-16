import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schema/users.schema";
import { user } from "./interface/user.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>
  ){}

  async create(user: user): Promise<user>{
    try{
      const id = uuidv4();
      const results = await new this.UserModel({ _id: id, ...user }).save();
      console.log(results);
      if(!results){
        throw new Error("User not added!!");
      }

      return results;
    }
    catch(e){
      console.log(e);
    }
  }

  async findOne(email: string):  Promise<User> {
    try{
      const user: user = await this.UserModel.findOne({ email: email });
      return user;
    }
    catch(e){
      console.log(e);
    }
  }
}
