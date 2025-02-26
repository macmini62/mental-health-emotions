import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";
import { SeekerService } from "src/users/seekers/seekers.service";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
    private professionalService: ProfessionalService,
    private seekerService: SeekerService
  ){}

  async create(data: article): Promise<article>{
    try{
      return await new this.articleModel(data).save();
    }
    catch(e){
      console.log(e);
    }
  }

  async findAll(p: number): Promise<Array<article>>{
    try{
      const total = p * 5;
      const articles: Array<article> = Array();
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
      const a = this.articleModel.findOne({ id: id });
      if(a !== null){
        return a;
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
      const articles: Array<article> = Array(total);

      for (let i = 0; i < creators.length; i++){
        if (await this.professionalService.userExists(creators[i])){
          for await (const a of this.articleModel.find({ creatorId: id })){
            articles.push(a);
          }
        }
      }

      console.log(articles)
      return articles.slice(0, total);
    }
    catch(e){
      console.log(e);
    }
  }

  async update(id: string, article: article): Promise<article>{
    try{
      const a = this.articleModel.findById({ id: id });
      if(a){
        const results = this.articleModel.findByIdAndUpdate({ id: id }, article);
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
      const results = this.articleModel.deleteOne({ id: id });
      if(results !== null){
        return true;
      }
    }catch(e){
      console.log(e);
    }
  }
}