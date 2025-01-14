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
        const user = await new this.UserModel(data).save();
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
