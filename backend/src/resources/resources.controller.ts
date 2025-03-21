import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Response } from "express";
import { article } from "./articles/interface/article.interface";
import { ArticlesService } from "./articles/articles.service";
import { VideosService } from "./videos/videos.service";
import { SkipAuth } from "src/decorators/auth.decorator";
import { ContentItem } from "src/types/types";
import { createArticle } from "./resources.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("resources")
export class ResourcesController {
  constructor(
    private articlesService: ArticlesService,
    private videosService: VideosService
  ) {}

  // <--- ARTICLES SERVICES --->

  @SkipAuth()
  @UseInterceptors(
    FileInterceptor("file")
  )
  @Post("articles/create")
  async createArticle(@UploadedFile() file: Express.Multer.File, @Body() data: any, @Res() res: Response<article>){
    // const results: article = await this.articlesService.create(data);
    // if(results){
    //   res.status(201).send(results);
    // }

    // res.status(500).send();
    console.log(data)
    console.log(file)
    // const results = await this.articlesService.create(file);
  }
  
  @SkipAuth()
  @Get("articles")
  async findAllArticles(@Res() res: Response<Array<article>>, @Query("p") p: number) {
    const results: Array<article> =  await this.articlesService.findAll(p);
    // console.log(results.length)

    if(!results){
      res.status(404).send();
    }
    else if (results.length < p * 5 && p > 2){
      res.status(204).send();
    }
    else{
      res.status(200).send(results);
    }
  }

  @SkipAuth()
  @Get("articles/seeker")
  async findCreatorsArticles(@Query("id") id: string,@Query("p") p: number, @Res() res: Response<Array<article>>){
    const results: Array<article> = await this.articlesService.findCreators(id, p);

    if(!results){
      res.status(404).send();
    }
    else if (results.length < p * 5 && p > 2){
      res.status(204).send();
    }
    else{
      res.status(200).send(results);
    }
  }

  @SkipAuth()
  @Get("/articles/read/:id")
  async findOneArticle(@Param("id") id: string, @Res() res: Response<article>) {
    const result: article = await this.articlesService.findOne(id);
    // console.log(result);
    if(!result){
      res.status(500).send();
    }
    
    res.status(200).json(result);
  }

  @SkipAuth()
  @Get("articles/tag")
  async fetchArticlesTag(@Res() res: Response<Array<article>>, @Query("t") t: string, @Query("p") p: number){
    const results = await this.articlesService.findArticleTags(t, p);
    
    if(!results){
      res.status(404).send()
    }
   
    res.status(200).send(results);
  }

  @SkipAuth()
  @Put("/articles/:id")
  async updateArticle(@Param("id") id: string, @Body() article: article) {
    return await this.articlesService.update(id, article);
  }

  @Delete("/articles/:id")
  async removeArticle(@Param("id") id: string) {
    return await this.articlesService.deleteOne(id);
  }


  // <--- VIDEOS SERVICES --->

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

