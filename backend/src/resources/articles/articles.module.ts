import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Article, ArticleSchema } from "./schema/article.schema";
import { ProfessionalsModule } from "src/users/professionals/professionals.module";
import { ArticlesService } from "./articles.service";
import { SeekersModule } from "src/users/seekers/seekers.module";
import { UsersModule } from "src/users/users.module";
import { TopicsModule } from "src/topics/topics.module";

@Module({
  controllers: [],
  providers: [ArticlesService],
  imports: [
    MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}]),
    UsersModule,
    ProfessionalsModule,
    SeekersModule,
    TopicsModule
  ],
  exports: [ArticlesService]
})
export class ArticlesModule {}
