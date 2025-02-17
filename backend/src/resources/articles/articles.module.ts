import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Article, ArticleSchema } from "./schema/article.schema";
import { ProfessionalsModule } from "src/users/professionals/professionals.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}]),
    ProfessionalsModule
  ],
  exports: [ArticlesModule]
})
export class ArticlesModule {}
