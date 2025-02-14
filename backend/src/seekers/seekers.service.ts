import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Seeker } from "./schema/seeker.schema";
import { Model } from "mongoose";
import { seeker } from "./interface/seekers.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class SeekerService {
  constructor(
    @InjectModel(Seeker.name) private SeekerModel: Model<Seeker>
  ) {}
  
  async addUser(data: seeker): Promise<string>{
    try{
      const userId: string = uuidv4();
      const exUserEmail = await this.SeekerModel.exists({ email: data.email });
      console.log(exUserEmail);

      if(!exUserEmail){
        const seeker = await new this.SeekerModel({ _id: userId, ...data }).save();
        if(!seeker){
          throw new Error("Error creating seeker!");
        }
        return userId;
      }else{
        throw new Error("Seeker with the email exists!!")
      }
    }
    catch(e){
      console.log(e);
    }    
  }

  async getUser(userId: string): Promise<Seeker>{
    console.log("userId:", userId);
    const seeker = await this.SeekerModel.findById({ _id: userId });

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
      { _id: userId },
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
