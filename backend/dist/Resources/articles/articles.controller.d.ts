import { ArticlesService } from "./articles.service";
import { article } from "./interface/article.interface";
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(article: article): Promise<import("./articles.module").ArticlesModule>;
    findAll(): import("express").Response<any, Record<string, any>>;
    findOne(id: string): import("express").Response<any, Record<string, any>>;
    update(id: string, article: article): Promise<article>;
    remove(id: string): Promise<boolean>;
}
