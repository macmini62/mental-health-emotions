import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ArticlesModule } from "./articles.module";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private ArticleModel: Model<Article>
  ){}

  async create(article: article): Promise<ArticlesModule>{
    return await new this.ArticleModel(article).save();
  }

  async findAll(): Promise<article[]>{
    try{
      const a = this.ArticleModel.find();
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
      const a = this.ArticleModel.findOne({ id: id });
      if(a !== null){
        return a;
      }else{
        throw new Error("No article found with the id!!");
      }
    }catch(e){
      console.log(e);
    }
  }

  async update(id: string, article: article): Promise<article>{
    try{
      const a = this.ArticleModel.findById({ id: id });
      if(a){
        const results = this.ArticleModel.findByIdAndUpdate({ id: id }, article);
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
      const results = this.ArticleModel.deleteOne({ id: id });
      if(results !== null){
        return true;
      }
    }catch(e){
      console.log(e);
    }
  }
}