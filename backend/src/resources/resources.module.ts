import { Module } from "@nestjs/common";
import { ResourcesService } from "./resources.service";
import { ResourcesController } from "./resources.controller";
import { ArticlesModule } from "./articles/articles.module";
import { VideosModule } from "./videos/videos.module";

@Module({
  imports:[
    ArticlesModule,
    VideosModule
  ],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
export class ResourcesModule {}
