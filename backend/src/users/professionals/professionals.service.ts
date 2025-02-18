import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Professional } from "./schema/professional.schema";
import { Model } from "mongoose";
import { professional } from "./interface/professionals.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectModel(Professional.name) private ProfessionalModel: Model<Professional>
  ) {}
  
  async addUser(data: professional): Promise<professional>{
    try{
      const results = await new this.ProfessionalModel(data).save();
      if(!results){
        throw new Error("Error creating professional!");
      }
      return results;
    }
    catch(e){
      console.log(e);
    }    
  }

  async getUser(email: string): Promise<professional>{
    console.log("email:", email);
    const professional = await this.ProfessionalModel.findById({ email: email });

    console.log("professional:", professional);
    return professional;
  }

  async getAllUsers(): Promise<Array<professional>>{
    const users: Professional[] = [];
    for await (const p of this.ProfessionalModel.find()){
      users.push(p);
    }

    console.log(users);
    return users;
  }

  async deleteUser(userId: string){
    const users = await this.ProfessionalModel.deleteOne({ _id: userId });

    console.log(users);
    return users;
  }

  async updateUser(userId: string, data: object ){
    try{
      console.log(userId);
      console.log(data);
      return await this.ProfessionalModel.findOneAndUpdate(
        { userId: userId },
        { $set: {...data} },
        { runValidators: true, new: false }
      );
    }
    catch(e){
      console.log(e);
    }
  }

  async userExists(id: string): Promise<boolean>{    
    try{
      const results = await this.ProfessionalModel.exists({ _id: id });
      console.log(results);

      if(results){
        return false;
      }else{
        return true;
      }
    }catch(e){
      console.log(e)
    }
  }
}
