import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ArticlesService } from "./articles.service";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create() {
    return this.articlesService.create();
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string) {
    return this.articlesService.update(+id, );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articlesService.remove(+id);
  }
}
