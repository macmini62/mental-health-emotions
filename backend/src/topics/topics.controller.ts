import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { topic } from './interface/topic';
import { Response } from 'express';

@Controller('topics')
export class TopicsController {
  constructor(private topicService: TopicsService = new TopicsService){}

  @Post("")
  async add(@Body() data: topic, @Res() res: Response){
    const topic = await this.topicService.createTopic(data);

    if(topic){
      res.status(201).send(topic);
    }else{
      res.status(500).send({ message: "Failed to add the topic!!" });
    }
  }

  @Get("")
  async fetch(@Res() res: Response){
    const topics = await this.topicService.fetchTopics();

    if(topics){
      res.send(topics);
    }else{
      res.status(500).send({ message: "Failed to fetch topics!!" });
    }
  }
}
