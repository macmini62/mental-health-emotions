import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Article, ArticleSchema } from "./schema/article.schema";
import { ProfessionalsModule } from "src/users/professionals/professionals.module";
import { ArticlesService } from "./articles.service";

@Module({
  controllers: [],
  providers: [ArticlesService],
  imports: [
    MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}]),
    ProfessionalsModule
  ],
  exports: [ArticlesService]
})
export class ArticlesModule {}
