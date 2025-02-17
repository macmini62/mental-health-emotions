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
  
  async addUser(userId: string, data: professional): Promise<professional>{
    try{
      const existingProfessional = await this.ProfessionalModel.exists({ userId: data.userId });
      // console.log(existingProfessional);

      if(!existingProfessional){
        const results = await new this.ProfessionalModel({ userId: userId, ...data }).save();
        if(!results){
          throw new Error("Error creating professional!");
        }
        return results;
      }else{
        throw new Error("Professional with the email exists!!")
      }
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
    console.log(userId);
    console.log(data);
    return await this.ProfessionalModel.updateOne(
      { _id: userId },
      { ...data }
    );
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
