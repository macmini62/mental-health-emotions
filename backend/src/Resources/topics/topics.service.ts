import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './schema/topic.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TopicsService {
  constructor(@InjectModel(Topic.name) private TopicModel = Model<Topic>){}

  async createTopic(data: string[]): Promise<string[]>{
   try{
    const createdTopics: string[] = [];
    for(var i = 0; i < data.length; i++){
      // console.log(data[i])
      const topicId = uuidv4();
      const exTopic = await this.TopicModel.exists({ name: data[i] });
      if(exTopic === null){
        await new this.TopicModel({ id: topicId, name: data[i] }).save();
        createdTopics.push(data[i]);
      }else{
        continue;
      }
    }

    return createdTopics;
   }
   catch(err){
    console.log(err);
   }
  }

  async fetchTopics(size: number): Promise<Topic[]>{
    try{
      const topics: Topic[] = [];
      for await (const p of this.TopicModel.find()){
        topics.push(p);
      }

      if(size <= topics.length){
        const tp: Topic[] = [];
        for(var i = 0; i < size; i++){
          tp.push(topics[i]);
        }
        return tp;
      }
      else{
        return topics;
      }
    }
    catch(err){
      console.log(err);
    }
  }
}
