import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Article, ArticleSchema } from "./schema/article.schema";
import { ProfessionalsModule } from "src/users/professionals/professionals.module";
import { ArticlesService } from "./articles.service";
import { SeekersModule } from "src/users/seekers/seekers.module";

@Module({
  controllers: [],
  providers: [ArticlesService],
  imports: [
    MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}]),
    ProfessionalsModule,
    SeekersModule
  ],
  exports: [ArticlesService]
})
export class ArticlesModule {}
