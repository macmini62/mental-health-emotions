import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Professional } from "./schema/professional.schema";
import { Model } from "mongoose";
import { professional } from "./interface/professionals.interface";

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectModel(Professional.name) private ProfessionalModel: Model<Professional>
  ) {}
  
  // async addUser(data: professional): Promise<professional>{
  //   try{
  //     const results = await new this.ProfessionalModel(data).save();
  //     if(!results){
  //       throw new Error("Error creating professional!");
  //     }
  //     return results;
  //   }
  //   catch(e){
  //     console.log(e);
  //   }    
  // }

  async addUser(
    userId: string,
    data: {
      title: string,
      topics: string[]
    }
  ): Promise<any>{
    let userCreatedId: string = ""
    try{
      // create a user before updating it with the uploaded data.
      const results = await new this.ProfessionalModel().save();
      userCreatedId = results._id;
      if(results){
        return await this.ProfessionalModel.updateOne({ _id: results._id },
          {$set: {
            "userId": userId,
            "profession": data?.title,
            "institution": "",
            "profile.profileURL": "",
            "profile.imageURL": "",
            "contents.topics": data?.topics,
            "contents.authored.articles": [],
            "contents.authored.videos": [],
            "contents.authored.liveSessions": []
          }},
          { new: true, runValidators: true }
        )
      }
      throw new Error("Error creating professional!");
    }
    catch(e){
      console.log(e);
      await this.ProfessionalModel.findOneAndDelete({ _id: userCreatedId });
    }    
  }

  async getUser(userId: string): Promise<professional>{
    // console.log("userId:", userId);
    const professional = await this.ProfessionalModel.findOne({ userId: userId });

    // console.log("professional:", professional);
    return professional;
  }

  async getAllUsers(): Promise<Array<professional>>{
    const users: Professional[] = [];
    for await (const p of this.ProfessionalModel.find()){
      users.push(p);
    }

    // console.log(users);
    return users;
  }

  async deleteUser(userId: string){
    const users = await this.ProfessionalModel.deleteOne({ userId: userId });

    console.log(users);
    return users;
  }

  async updateUser(userId: string, data: professional ){
    try{
     return await this.ProfessionalModel.findOneAndUpdate({ userId: userId },
      {$set: {
        "institution": data?.institution,
        "profession": data?.profession,
        "profile.imageURL": data?.profile?.imageURL,
        "profile.profileURL": data?.profile?.profileURL,
        "contents.topics": data?.contents?.topics,
        "contents.authored.articles": data?.contents?.authored?.articles,
        "contents.authored.videos": data?.contents?.authored?.videos,
        "contents.authored.liveSessions": data?.contents?.authored?.liveSessions,
      }},
      { new: true, runValidators: true }
     );
    }
    catch(e){
      console.log(e);
    }
  }

  // Checks the existence of a user in the database.
  async userExists(id: string): Promise<boolean>{
    try{
      // console.log(id);
      const results = await this.ProfessionalModel.exists({ userId: id });

      if(!results){
        return false;
      }else{
        return true;
      }
    }
    catch(e){
      console.log(e)
    }
  }
}
