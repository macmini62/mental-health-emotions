import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Response } from "express";
import { article } from "./articles/interface/article.interface";
import { ArticlesService } from "./articles/articles.service";
import { VideosService } from "./videos/videos.service";
import { SkipAuth } from "src/decorators/auth.decorator";
import { ContentItem } from "src/types/types";
import { createArticle } from "./resources.interface";
import { FileInterceptor } from "@nestjs/platform-express";
import { video } from "./videos/interface/video.interface";

@Controller("resources")
export class ResourcesController {
  constructor(
    private articlesService: ArticlesService,
    private videosService: VideosService
  ) {}

  // <--- ARTICLES SERVICES --->

  @SkipAuth()
  @Post("articles/create")
  async createArticle(@Body() data: {
    creatorId: string;
    title: string;
    overview: string;
    content: Array<ContentItem>;
    tags: Array<string>;
    thumbnail: {
      imageURL: string;
    }
  }, @Res() res: Response<article>){
    const results: article = await this.articlesService.create(data);
    if(results){
      res.status(201).send(results);
    }

    res.status(500).send();
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

  @SkipAuth()
  @Post("videos/create")
  async createVideo(@Body() data: {
    creatorId: string;
    title: string;
    URL: string;
    description: string;
    tags: Array<string>;
    duration: number;
    languages: Array<string>;
    thumbnail: string;
    license: string;
  }, @Res() res: Response<video>){
    const results: video = await this.videosService.create(data);
    if(results){
      res.status(201).send(results);
    }

    res.status(500).send();
  }
  
  @SkipAuth()
  @Get("videos")
  async findAllVideos(@Res() res: Response<Array<video>>, @Query("p") p: number) {
    const results: Array<video> =  await this.videosService.findAll(p);
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
  @Get("videos/seeker")
  async findCreatorsVideos(@Query("id") id: string,@Query("p") p: number, @Res() res: Response<Array<video>>){
    const results: Array<video> = await this.videosService.findCreators(id, p);

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
  @Get("/videos/read/:id")
  async findOneVideo(@Param("id") id: string, @Res() res: Response<video>) {
    const result: video = await this.videosService.findOne(id);
    // console.log(result);
    if(!result){
      res.status(500).send();
    }
    
    res.status(200).json(result);
  }

  @SkipAuth()
  @Get("videos/tag")
  async fetchVideosTag(@Res() res: Response<Array<video>>, @Query("t") t: string, @Query("p") p: number){
    const results = await this.videosService.findVideoTags(t, p);
    
    if(!results){
      res.status(404).send()
    }
   
    res.status(200).send(results);
  }

  @SkipAuth()
  @Put("/videos/:id")
  async updateVideo(@Param("id") id: string, @Body() video: video) {
    return await this.videosService.update(id, video);
  }

  @Delete("/videos/:id")
  async removeVideo(@Param("id") id: string) {
    return await this.videosService.deleteOne(id);
  }
}