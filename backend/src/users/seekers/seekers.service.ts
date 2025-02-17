import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Seeker } from "./schema/seeker.schema";
import { Model } from "mongoose";
import { seeker } from "./interface/seekers.interface";

@Injectable()
export class SeekerService {
  constructor(
    @InjectModel(Seeker.name) private SeekerModel: Model<Seeker>
  ) {}
  
  async addUser(userId: string, data: seeker): Promise<seeker>{
    try{
      const existingSeeker = await this.SeekerModel.exists({ userId: userId });
      // console.log(existingSeeker);
      if(!existingSeeker){
        const results = await new this.SeekerModel({ userId: userId, ...data }).save();
        if(!results){
          throw new Error("Error creating seeker!");
        }
        return results;
      }else{
        throw new Error("Seeker profile exists!!")
      }
    }
    catch(e){
      console.log(e);
    }    
  }

  async getUser(userId: string): Promise<Seeker>{
    console.log("userId:", userId);
    const seeker = await this.SeekerModel.findOne({ userId: userId });

    console.log("seeker:", seeker);
    return seeker;
  }

  async getAllUsers(): Promise<Array<Seeker>>{
    const users: Seeker[] = [];
    for await (const p of this.SeekerModel.find()){
      users.push(p);
    }

    console.log(users);
    return users;
  }

  async deleteUser(userId: string){
    const users = await this.SeekerModel.deleteOne({ _id: userId });

    console.log(users);
    return users;
  }

  async updateUser(userId: string, data: object ){
    console.log(userId);
    console.log(data);
    return await this.SeekerModel.updateOne(
      { userId: userId },
      { ...data }
    );
  }

  async verifyUser(data: seeker): Promise<object>{    
    try{
      console.log(data);
      const userId = await this.SeekerModel.exists({...data});
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
