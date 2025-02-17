import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { TopicsService } from "./topics.service";
import { Response } from "express";
import { SkipAuth } from "src/decorators/auth.decorator";

@Controller("topics")
export class TopicsController {
  constructor(
    private topicService: TopicsService
  ){}

  @SkipAuth()
  @Post("")
  async add(@Body() data: string[], @Res() res: Response){
    const topic = await this.topicService.createTopic(data);

    console.log(topic);

    if(topic !== undefined){
      res.status(201).send(topic);
    }else{
      res.status(500).send({ message: "Failed to add the topic!!" });
    }
  }

  @SkipAuth()
  @Get("")
  async fetch(@Query("size") size: number, @Res() res: Response){
    const topics = await this.topicService.fetchTopics(size);

    if(topics){
      res.send(topics);
    }else{
      res.status(500).send({ message: "Failed to fetch topics!!" });
    }
  }

  @SkipAuth()
  @Post("/:id")
  async fetchTopics(@Body() data: string[], @Param() userId: {id: string}, @Res() res: Response){
    const topics = await this.topicService.fetchUserTopics(data, userId);

    if(topics){
      res.send(topics);
    }else{
      res.status(500).send({ message: "Failed to fetch topics!!" });
    }
  }
}
