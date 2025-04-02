import { Module } from "@nestjs/common";
import { VideosService } from "./videos.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from "src/topics/topics.module";
import { ProfessionalsModule } from "src/users/professionals/professionals.module";
import { SeekersModule } from "src/users/seekers/seekers.module";
import { UsersModule } from "src/users/users.module";
import { Video, VideoSchema } from "./schema/video.schema";

@Module({
  controllers: [],
  providers: [VideosService],
  imports: [
    MongooseModule.forFeature([{name: Video.name, schema: VideoSchema}]),
    UsersModule,
    ProfessionalsModule,
    SeekersModule,
    TopicsModule
  ],
  exports: [VideosService]
})
export class VideosModule {}
