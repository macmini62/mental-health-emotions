import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { TopicsService } from "./topics.service";
import { Response } from "express";
import { SkipAuth } from "src/decorators/auth.decorator";
import { topic } from "./interface/topic.interface";

@Controller("topics")
export class TopicsController {
  constructor(
    private topicService: TopicsService
  ){}

  @SkipAuth()
  @Post("")
  async add(@Body() data: Array<topic>, @Res() res: Response){
    const topic = await this.topicService.createTopic(data);

    if(topic !== undefined){
      res.status(201).send(topic);
    }else{
      res.status(500).send({ message: "Failed to add the topic!!" });
    }
  }

  @SkipAuth()
  @Get("")
  async fetch(@Query("s") s: number, @Res() res: Response<Array<topic>>){
    const topics: Array<topic> = await this.topicService.fetchTopics(s);

    if(topics){
      res.send(topics);
    }else{
      res.status(500);
    }
  }

  @SkipAuth()
  @Post("/:id")
  async fetchTopics(@Body() data: Array<string>, @Param("id") userId: string, @Res() res: Response<Array<string>>){
    const topics: Array<string> = await this.topicService.fetchUserTopics(data, userId);
    // console.log(data, userId)

    if(topics){
      res.send(topics);
    }else{
      res.status(500);
    }
  }
}
