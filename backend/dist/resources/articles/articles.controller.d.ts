import { ArticlesService } from "./articles.service";
import { article } from "./interface/article.interface";
import { Response } from "express";
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(article: article): Promise<article>;
    findCreators(id: string, res: Response): Response<any, Record<string, any>>;
    findAll(res: Response): Response<any, Record<string, any>>;
    findOne(id: string, res: Response): Response<any, Record<string, any>>;
    update(id: string, article: article): Promise<article>;
    remove(id: string): Promise<boolean>;
}
