import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  
  async addUser(data: object){
    console.log("data", data);
    return new this.UserModel(data).save();
  }

  async getUser(profId: string): Promise<User>{
    console.log("profId:", profId);
    const user = await this.UserModel.findById({ _id: profId });

    console.log("user:", user);
    return user;
  }

  async getAllUsers(): Promise<Array<User>>{
    const users: User[] = [];
    for await (const p of this.UserModel.find()){
      users.push(p);
    }

    console.log(users);
    return users;
  }

  async deleteUser(profId: string){
    const users = await this.UserModel.deleteOne({ _id: profId });

    console.log(users);
    return users;
  }

  async updateUser(profId: string, data: object ){
    return await this.UserModel.updateOne(
      { _id: profId },
      { ...data }
    );
  }
}
