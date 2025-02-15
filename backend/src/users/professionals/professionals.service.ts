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
  
  async addUser(data: professional): Promise<string>{
    try{
      const userId: string = uuidv4();
      const exUserEmail = await this.ProfessionalModel.exists({ email: data.email });
      console.log(exUserEmail);

      if(!exUserEmail){
        const professional = await new this.ProfessionalModel({ _id: userId, ...data }).save();
        if(!professional){
          throw new Error("Error creating professional!");
        }
        return userId;
      }else{
        throw new Error("Professional with the email exists!!")
      }
    }
    catch(e){
      console.log(e);
    }    
  }

  async getUser(email: string): Promise<Professional>{
    console.log("email:", email);
    const professional = await this.ProfessionalModel.findById({ email: email });

    console.log("professional:", professional);
    return professional;
  }

  async getAllUsers(): Promise<Array<Professional>>{
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

  async verifyUser(data: professional): Promise<object>{    
    try{
      console.log(data);
      const userId = await this.ProfessionalModel.exists({...data});
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
