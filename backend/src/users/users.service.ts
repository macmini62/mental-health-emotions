import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { user } from "./interface/user";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>
  ) {}
  
  async addUser(data: user): Promise<string>{
    try{
      const userId: string = uuidv4();
      const exUserEmail = await this.UserModel.exists({ email: data.email });
      console.log(exUserEmail);

      if(!exUserEmail){
        const user = await new this.UserModel({ _id: userId, ...data }).save();
        if(!user){
          throw new Error("Error creating user!");
        }
        return userId;
      }else{
        throw new Error("User with the email exists!!")
      }
    }
    catch(e){
      console.log(e);
    }    
  }

  async getUser(userId: string): Promise<User>{
    console.log("userId:", userId);
    const user = await this.UserModel.findById({ _id: userId });

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

  async deleteUser(userId: string){
    const users = await this.UserModel.deleteOne({ _id: userId });

    console.log(users);
    return users;
  }

  async updateUser(userId: string, data: object ){
    console.log(userId);
    console.log(data);
    return await this.UserModel.updateOne(
      { _id: userId },
      { ...data }
    );
  }

  async verifyUser(data: user): Promise<object>{    
    try{
      console.log(data);
      const userId = await this.UserModel.exists({...data});
      console.log(userId);
      
      if(!userId){
        throw new Error();
      }else{
        return userId;
      }

    }catch(e){
      console.log(e)
    }
  }
}
