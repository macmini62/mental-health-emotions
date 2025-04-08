import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";
import { SeekerService } from "src/users/seekers/seekers.service";
import { UsersService } from "src/users/users.service";
import { user } from "src/users/interface/user.interface";
import { topic } from "src/topics/interface/topic.interface";
import { TopicsService } from "src/topics/topics.service";
import { ContentItem } from "src/types/types";
import { createArticle } from "../resources.interface";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
    private professionalService: ProfessionalService,
    private seekerService: SeekerService,
    private userService: UsersService,
    private topicService: TopicsService
  ){}

  async create(data: {
    creatorId: string;
    title: string;
    overview: string;
    content: Array<ContentItem>;
    tags: Array<string>;
    thumbnail: {
      imageURL: string;
    }
  }){
    try{
      const d = {
        ...data,
        stats: {
          likes: new Array<string>,
          comments: new Array<string>
        }
      }
      return await new this.articleModel(d).save();
    }
    catch(e){
      console.log(e);
    }
  }

  async findAll(p: number): Promise<Array<article>>{
    try{
      const total = p * 5;
      const articles: Array<article> = new Array();
      for await (const a of this.articleModel.find()){
        articles.push(a);
      }
      
      return articles.slice(0, total);
      
    }catch(e){
      console.log(e);
    }
  }

  async findOne(id: string): Promise<article>{
    try{
      let a: article = await this.articleModel.findOne({ _id: id });
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
        throw new Error("No article found with the id!!");
      }
    }catch(e){
      console.log(e);
    }
  }

  async findCreators(id: string, p: number): Promise<Array<article>> {
    try{
      const creators: Array<string> = await this.seekerService.findFollowing(id)
      const total = p * 5;
      let articles: Array<article> = new Array();
      // console.log(creators)
      
      for (let i = 0; i < creators.length; i++){
        if (await this.professionalService.userExists(creators[i])){
          const article: Array<article> = await this.articleModel.find({ creatorId: creators[i] });
          articles = [...article]
        }
      }

      // console.log(articles);
      return articles.slice(0, total);
    }
    catch(e){
      console.log(e);
    }
  }

  async findArticleTags(tagId: string, p: number){
    try{
      const articles: Array<Article> = Array();
      for(let i = 0; i < p; i++){
        for await(const a of this.articleModel.find({ tags: tagId })){
          articles.push(a);
        }
      }
      // console.log(articles);

      return articles;
    }
    catch(e){
      console.log(e);
    }
  }

  async update(id: string, article: article): Promise<article>{
    try{
      const a = this.articleModel.findById({ _id: id });
      if(a){
        const results = this.articleModel.findByIdAndUpdate({ _id: id }, article);
        if(results !== null){
          return results;
        }else{
          throw new Error("Article was not updated");
        }
      }else{
        throw new Error("No article found with the id!!");
      }
    }catch(e){
      console.log(e);
    }
  }

  async deleteOne(id: string): Promise<boolean>{
    try{
      const results = this.articleModel.deleteOne({ _id: id });
      if(results !== null){
        return true;
      }
    }catch(e){
      console.log(e);
    }
  }
}