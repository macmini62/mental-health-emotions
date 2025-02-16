import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schema/users.schema";
import { user } from "./interface/user.interface";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>
  ){}

  async findOne(email: string):  Promise<User> {
    const user: user = await this.UserModel.findOne({ email: email });
    return user;
  }
}
