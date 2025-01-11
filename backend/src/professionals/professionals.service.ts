import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Professional } from './schema/professional.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProfessionalsService {
  constructor(@InjectModel(Professional.name) private ProfessionalModel: Model<Professional>) {}
  
  async addProf(data: object){
    console.log("data", data);
    return new this.ProfessionalModel(data).save();
  }

  async getProf(profId: string): Promise<Professional>{
    console.log("profId:", profId);
    const prof = await this.ProfessionalModel.findById({ _id: profId });

    console.log("prof:", prof);
    return prof;
  }

  async getAllProfs(): Promise<Array<Professional>>{
    const profs: Professional[] = [];
    for await (const p of this.ProfessionalModel.find()){
      profs.push(p);
    }

    console.log(profs);
    return profs;
  }

  async deleteProf(profId: string){
    const profs = await this.ProfessionalModel.deleteOne({ _id: profId });

    console.log(profs);
    return profs;
  }

  async updateProf(profId: string, data: object ){
    return await this.ProfessionalModel.updateOne(
      { _id: profId },
      { ...data }
    );
  }
}
