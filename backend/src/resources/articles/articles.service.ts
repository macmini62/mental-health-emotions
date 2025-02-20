import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
    private professionalService: ProfessionalService
  ){}

  async create(data: article): Promise<article>{
    try{
      return await new this.articleModel(data).save();
    }
    catch(e){
      console.log(e);
    }
  }

  async findAll(): Promise<article[]>{
    try{
      const a = this.articleModel.find();
      if(a !== null){
        return a;
      }
      else{
        throw new Error("No articles found!!");
      }
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

  async findCreators(creatorId: string): Promise<Array<article>> {
    try{
      if (await this.professionalService.userExists(creatorId)){
        const articles: Array<article> = Array();
        for await (const a of this.articleModel.find({ creatorId: creatorId })){
          articles.push(a);
        }

        return articles;
      }
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