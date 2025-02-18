import { Module } from "@nestjs/common";
import { VideosService } from "./videos.service";

@Module({
  controllers: [],
  providers: [VideosService],
  exports: [VideosService]
})
export class VideosModule {}
