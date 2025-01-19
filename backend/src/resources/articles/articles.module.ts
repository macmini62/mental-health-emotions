import { Module } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Article, ArticleSchema } from "./schema/article.schema";
import { ArticlesController } from "./articles.controller";

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}])]
})
export class ArticlesModule {}
