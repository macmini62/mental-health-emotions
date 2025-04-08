import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Video } from "./schema/video.schema";
import { Model } from "mongoose";
import { video } from "./interface/video.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";
import { SeekerService } from "src/users/seekers/seekers.service";
import { UsersService } from "src/users/users.service";
import { user } from "src/users/interface/user.interface";
import { topic } from "src/topics/interface/topic.interface";
import { TopicsService } from "src/topics/topics.service";

@Injectable()
export class VideosService {
  constructor(
    @InjectModel(Video.name) private videoModel: Model<Video>,
    private professionalService: ProfessionalService,
    private seekerService: SeekerService,
    private userService: UsersService,
    private topicService: TopicsService
  ){}

  async create(data: {
    creatorId: string;
    title: string;
    URL: string;
    description: string;
    tags: Array<string>;
    duration: number;
    languages: Array<string>;
    thumbnail: string;
    license: string;
  }){
    try{
      const d = {
        ...data,
        stats: {
          likes: new Array<string>,
          comments: new Array<string>
        }
      }
      console.log(d)
      return await new this.videoModel(d).save();
    }
    catch(e){
      console.log(e);
    }
  }

  async findAll(p: number): Promise<Array<video>>{
    try{
      const total = p * 5;
      const videos: Array<video> = new Array();
      for await (const v of this.videoModel.find()){
        videos.push(v);
      }
      
      return videos.slice(0, total);
      
    }catch(e){
      console.log(e);
    }
  }

  async findOne(id: string): Promise<video>{
    try{
      let a: video = await this.videoModel.findOne({ _id: id });
      // console.log(a)
      if(a !== null){
        const creator: user["name"] = await this.userService.findName(a.creatorId);
        const tags: Array<topic["name"]> = await this.topicService.fetchArticleTopics(a.tags);
        if(creator !== null && tags.length > 0){
          a.creatorId = creator;
          a.tags = tags
          // console.log(a);
          return a;
        }

        throw new InternalServerErrorException;
      }else{
        throw new Error("No video found with the id!!");
      }
    }catch(e){
      console.log(e);
    }
  }

  async findCreators(id: string, p: number): Promise<Array<video>> {
    try{
      const creators: Array<string> = await this.seekerService.findFollowing(id)
      const total = p * 5;
      let videos: Array<video> = Array();
      // console.log(creators)
      
      for (let i = 0; i < creators.length; i++){
        if (await this.professionalService.userExists(creators[i])){
          const video: Array<video> = await this.videoModel.find({ creatorId: creators[i] });
          videos = [...video]
        }
      }

      // console.log(videos);
      return videos.slice(0, total);
    }
    catch(e){
      console.log(e);
    }
  }

  async findVideoTags (tagId: string, p: number){
    try{
      const videos: Array<Video> = new Array();
      for(let i = 0; i < p; i++){
        for await(const a of this.videoModel.find({ tags: tagId })){
          videos.push(a);
        }
      }
      // console.log(videos);

      return videos;
    }
    catch(e){
      console.log(e);
    }
  }

  async update(id: string, video: video): Promise<video>{
    try{
      const a = this.videoModel.findById({ id: id });
      if(a){
        const results = this.videoModel.findByIdAndUpdate({ _id: id }, video);
        if(results !== null){
          return results;
        }else{
          throw new Error("Video was not updated");
        }
      }else{
        throw new Error("No video found with the id!!");
      }
    }catch(e){
      console.log(e);
    }
  }

  async deleteOne(id: string): Promise<boolean>{
    try{
      const results = this.videoModel.deleteOne({ id: id });
      if(results !== null){
        return true;
      }
    }catch(e){
      console.log(e);
    }
  }
}