// import { Controller, Get, Post, Param, Delete, Put, Body, Res } from "@nestjs/common";
// import { ArticlesService } from "./articles.service";
// import { article } from "./interface/article.interface";
// import { Response } from "express";
// import { SkipAuth } from "src/decorators/auth.decorator";

// @Controller("articles")
// export class ArticlesController {
//   constructor(private readonly articlesService: ArticlesService) {}

//   @SkipAuth()
//   @Post("create")
//   create(@Body() article: article) {
//     return this.articlesService.create(article);
//   }

//   @Post("/:id")
//   findCreators(@Param() id: string, @Res() res: Response){
//     const response = this.articlesService.findCreators(id);

//     if(response){
//       return res.status(400).send(response);
//     }

//     return res.status(404).send({ message: "Creator has not created an article!!" });
//   }

//   @Get()
//   findAll(@Res() res: Response) {
//     const response = this.articlesService.findAll();
//     console.log(response);

//     if(typeof(response) === "string"){
//       return res.status(200).json(response);
//     }
//   }

//   @Get("/:id")
//   findOne(@Param("id") id: string,  @Res() res: Response) {
//     const result = this.articlesService.findOne(id);
//     if(!result){
//       return res.status(500).send({ message: "Error in the server!" });
//     }
    
//     return res.status(200).json(result);
//   }

//   @Put("/:id")
//   update(@Param("id") id: string, @Body() article: article) {
//     return this.articlesService.update(id, article);
//   }

//   @Delete("/:id")
//   remove(@Param("id") id: string) {
//     return this.articlesService.deleteOne(id);
//   }
// }
