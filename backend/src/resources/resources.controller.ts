import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from "@nestjs/common";
import { Response } from "express";
import { article } from "./articles/interface/article.interface";
import { ArticlesService } from "./articles/articles.service";
import { VideosService } from "./videos/videos.service";
import { SkipAuth } from "src/decorators/auth.decorator";

@Controller("resources")
export class ResourcesController {
  constructor(
    private articlesService: ArticlesService,
    private videosService: VideosService
  ) {}

  // Articles Services
  @SkipAuth()
  @Post("articles/create")
  createArticle(@Body() article: article, @Res() res: Response) {
    const results = this.articlesService.create(article);
    if(results){
      res.status(400);
    }

    return res.status(500);
  }
  
  @Post("articles/:id")
  findCreatorsArticles(@Param() id: string, @Res() res: Response){
    const results = this.articlesService.findCreators(id);

    if(results){
      return res.status(400).send(results);
    }

    return res.status(404).send({ message: "Creator has not created an article!!" });
  }

  @Get("articles")
  findAllArticles(@Res() res: Response) {
    const results = this.articlesService.findAll();
    console.log(results);

    if(typeof(results) === "string"){
      return res.status(200).json(results);
    }
  }

  @Get("/articles/:id")
  findOneArticle(@Param("id") id: string,  @Res() res: Response) {
    const result = this.articlesService.findOne(id);
    if(!result){
      return res.status(500).send({ message: "Error in the server!" });
    }
    
    return res.status(200).json(result);
  }

  @SkipAuth()
  @Put("/articles/:id")
  updateArticle(@Param("id") id: string, @Body() article: article) {
    return this.articlesService.update(id, article);
  }

  @Delete("/articles/:id")
  removeArticle(@Param("id") id: string) {
    return this.articlesService.deleteOne(id);
  }


  // Videos Services
  // @SkipAuth()
  // @Post("create")
  // createVideo(@Body() article: article) {
  //   return this.videosService.create(article);
  // }

  // @Post("/:id")
  // findCreatorsVideos(@Param() id: string, @Res() res: Response){
  //   const results = this.videosService.findCreators(id);

  //   if(results){
  //     return res.status(400).send(results);
  //   }

  //   return res.status(404).send({ message: "Creator has not created an article!!" });
  // }

  // @Get()
  // findAllVideos(@Res() res: Response) {
  //   const results = this.videosService.findAll();
  //   console.log(results);

  //   if(typeof(results) === "string"){
  //     return res.status(200).json(results);
  //   }
  // }

  // @Get("/:id")
  // findOneVideo(@Param("id") id: string,  @Res() res: Response) {
  //   const result = this.videosService.findOne(id);
  //   if(!result){
  //     return res.status(500).send({ message: "Error in the server!" });
  //   }
    
  //   return res.status(200).json(result);
  // }

  // @Put("/:id")
  // updateVideo(@Param("id") id: string, @Body() article: article) {
  //   return this.videosService.update(id, article);
  // }

  // @Delete("/:id")
  // removeVideo(@Param("id") id: string) {
  //   return this.videosService.deleteOne(id);
  // }
}

