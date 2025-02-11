import { Controller, Get, Post, Param, Delete, Put, Body } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { article } from "./interface/article.interface";
import { response } from "express";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() article: article) {
    return this.articlesService.create(article);
  }

  @Get()
  findAll() {
    const res = this.articlesService.findAll();
    console.log(res);

    if(typeof(res) === "string"){
      return response.status(200).json(res);
    }
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const result = this.articlesService.findOne(id);
    if(!result){
      return response.status(500).send({ message: "Error in the server!" });
    }
    
    return response.status(200).json(result);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() article: article) {
    return this.articlesService.update(id, article);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articlesService.deleteOne(id);
  }
}
