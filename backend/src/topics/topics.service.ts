import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './schema/topic.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { topic } from './interface/topic.interface';

@Injectable()
export class TopicsService {
  constructor(
    @InjectModel(Topic.name) private TopicModel = Model<Topic>,
    private userService: UsersService
  ){}

  async createTopic(data: topic[]): Promise<topic[]>{
   try{
    const createdTopics: topic[] = [];
    for(var i = 0; i < data.length; i++){
      // console.log(data[i])
      const exTopic = await this.TopicModel.exists({ name: data[i] });
      if(!exTopic){
        await new this.TopicModel(data[i]).save();
        createdTopics.push(data[i]);
      }else{
        throw new ConflictException;
      }
    }

    return createdTopics;
   }
   catch(e){
    console.log(e);
   }
  }

  async fetchTopics(size: number): Promise<topic[]>{
    try{
      const topics: Array<topic> = [];
      for await (const p of this.TopicModel.find()){
        topics.push(p);
      }

      if(size <= topics.length){
        const tp: topic[] = [];
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

  async fetchUserTopics(data: topic[], userId: {id: string}): Promise<Array<string>>{
    try{
      if(await this.userService.userExists(userId.id)){
        const topics: Array<string> = [];
        for(let i = 0; i < data.length; i++){
          // console.log(data[i])
          const topic: topic = await this.TopicModel.findById({ _id: data[i] });
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
