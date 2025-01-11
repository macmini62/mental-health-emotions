import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Seeker } from './schema/seekers.schema';
import { Model } from 'mongoose';

@Injectable()
export class SeekersService {
  constructor(@InjectModel(Seeker.name) private seekerModel: Model<Seeker>){}

  async addSeeker(data: object){
    console.log("data", data);
    return new this.seekerModel(data).save();
  }

  async getSeeker(seekerId: string): Promise<Seeker>{
    console.log("seekerId:", seekerId);
    const seeker = await this.seekerModel.findById({ _id: seekerId });

    console.log("seeker:", seeker);
    return seeker;
  }

  async getAllSeekers(): Promise<Array<Seeker>>{
    const seekers: Seeker[] = [];
    for await (const p of this.seekerModel.find()){
      seekers.push(p);
    }

    console.log(seekers);
    return seekers;
  }

  async deleteSeeker(seekerId: string){
    const seeker = await this.seekerModel.deleteOne({ _id: seekerId });

    console.log(seeker);
    return seeker;
  }

  async updateSeeker(seekerId: string, data: object ){
    return await this.seekerModel.updateOne(
      { _id: seekerId },
      { ...data }
    );
  }
}
