import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './schema/topic.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from "uuid";
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TopicsService {
  constructor(
    @InjectModel(Topic.name) private TopicModel = Model<Topic>,
    private userService: UsersService
  ){}

  async createTopic(data: string[]): Promise<string[]>{
   try{
    const createdTopics: string[] = [];
    for(var i = 0; i < data.length; i++){
      // console.log(data[i])
      const topicId = uuidv4();
      const exTopic = await this.TopicModel.exists({ name: data[i] });
      if(exTopic === null){
        await new this.TopicModel({ _id: topicId, name: data[i] }).save();
        createdTopics.push(data[i]);
      }else{
        continue;
      }
    }

    return createdTopics;
   }
   catch(e){
    console.log(e);
   }
  }

  async fetchTopics(size: number): Promise<Topic[]>{
    try{
      const topics: Array<Topic> = [];
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
    catch(e){
      console.log(e);
    }
  }

  async fetchUserTopics(data: string[], userId: {id: string}): Promise<Array<string>>{
    try{
      if(await this.userService.userExists(userId.id)){
        const topics: Array<string> = [];
        for(let i = 0; i < data.length; i++){
          console.log(data[i])
          const topic: Topic = await this.TopicModel.findById({ _id: data[i] });
          topics.push(topic.name);
        }
        return topics;
      }
    }
    catch(e){
      console.log(e);
    }
  }
}
