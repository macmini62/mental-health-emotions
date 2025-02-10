import { Module } from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicSchema, Topic } from './schema/topic.schema';

@Module({
  controllers: [TopicsController],
  providers: [TopicsService],
  imports: [MongooseModule.forFeature([{name: Topic.name, schema:TopicSchema}])]
})

export class TopicsModule {}
