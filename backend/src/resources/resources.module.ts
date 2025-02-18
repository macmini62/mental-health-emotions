import { Module } from "@nestjs/common";
import { ResourcesController } from "./resources.controller";
import { ArticlesModule } from "./articles/articles.module";
import { VideosModule } from "./videos/videos.module";
import { ProfessionalsModule } from "src/users/professionals/professionals.module";
import { SeekersModule } from "src/users/seekers/seekers.module";

@Module({
  imports:[
    ArticlesModule,
    VideosModule,
    ProfessionalsModule,
    SeekersModule
  ],
  controllers: [ResourcesController],
  providers: [],
})
export class ResourcesModule {}
