import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schema/users.schema";
import { user } from "./interface/user.interface";
import { ProfessionalService } from "./professionals/professionals.service";
import { professional } from "./professionals/interface/professionals.interface";
import { seeker } from "./seekers/interface/seekers.interface";
import { SeekerService } from "./seekers/seekers.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    private professionalService: ProfessionalService,
    private seekerService: SeekerService
  ){}

  async create(user: user): Promise<user>{
    try{
      const results = await new this.UserModel(user).save();
      // console.log(results);
      if(results){
        return results;
      }
      throw new Error("User not added!!");
    }
    catch(e){
      console.log(e);
    }
  }

  // called once the user completes registering account. After uploading additional information.
  async addUserProfessional(
    userId: string,
    userData: {
      role: string,
      title: string,
      topics: string[]
    }
  ): Promise<professional>{
    try{
      const exists = await this.userExists(userId);
      if(exists){
        // updates the user with the specified role.
        const results = await this.UserModel.findOneAndUpdate({ _id: userId },
          {$set: {
            "role": userData?.role
          }},
          { new: true, runValidators: true }
        );
        if(results){
          return await this.professionalService.addUser(userId, userData);
        }
        else{
          throw new Error("Failed to update the user!!");
        }
      }

      throw new NotFoundException;
    }
    catch(e){
      console.log(e);
    }
  }

  async addUserSeeker(
    userId: string,
    userData: {
      role: string,
      topics: string[]
    }
  ): Promise<seeker>{
    try{
      const exists = await this.userExists(userId);
      if(exists){
        // updates the user with the specified role.
        const results = await this.UserModel.findOneAndUpdate({ _id: userId },
          {$set: {
            "role": userData?.role
          }},
          { new: true, runValidators: true }
        );
        if(results){
          return await this.seekerService.addUser(userId, userData);
        }
        else{
          throw new Error("Failed to update the user!!");
        }
      }

      throw new NotFoundException;
    }
    catch(e){
      console.log(e);
    }
  }

  async findOne(email: string): Promise<User> {
    try{
      return await this.UserModel.findOne({ email: email });
    }
    catch(e){
      console.log(e);
    }
  }

  async findName(userId: string): Promise<string>{
    try{
      const user = await this.UserModel.findOne({ _id: userId });
      if(user){
        return user.name;
      }

      throw new NotFoundException;
    }
    catch(e){
      console.log(e);
    }
  }

  async userExists(userId: string): Promise<boolean> {
    try{
      const exists = await this.UserModel.exists({ _id: userId });
      // console.log(exists);
      if(exists){
        return true;
      }

      throw new NotFoundException;
    }
    catch(e){
      console.log(e);
    }
  }
}
