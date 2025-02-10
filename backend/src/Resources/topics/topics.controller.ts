import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Response } from 'express';

@Controller('topics')
export class TopicsController {
  constructor(private topicService: TopicsService = new TopicsService){}

  @Post("")
  async add(@Body() data: string[], @Res() res: Response){
    const topic = await this.topicService.createTopic(data);

    if(topic.at(0) !== undefined){
      res.status(201).send(topic);
    }else{
      res.status(500).send({ message: "Failed to add the topic!!" });
    }
  }

  @Get("")
  async fetch(@Query("size") size: number, @Res() res: Response){
    const topics = await this.topicService.fetchTopics(size);

    if(topics){
      res.send(topics);
    }else{
      res.status(500).send({ message: "Failed to fetch topics!!" });
    }
  }
}
