import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './schema/topic.schema';
import { Model } from 'mongoose';
import { topic } from './interface/topic';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TopicsService {
  constructor(@InjectModel(Topic.name) private TopicModel = Model<Topic>){}

  async createTopic(data: topic): Promise<Topic>{
   try{
    const topicId = uuidv4();
    const exTopic = await this.TopicModel.exists({ name: data.name });
    if(exTopic === null){
      const topic = await new this.TopicModel({ _id: topicId, ...data}).save();

      return topic;
    }else{
      throw new Error("Topic already exits!!");
    }
   }
   catch(err){
    console.log(err);
   }
  }

  async fetchTopics(): Promise<Topic[]>{
    try{
      const topics: Topic[] = [];
      for await (const p of this.TopicModel.find()){
        topics.push(p);
      }

      console.log(topics);
      return topics;
    }
    catch(err){
      console.log(err);
    }
  }
}
