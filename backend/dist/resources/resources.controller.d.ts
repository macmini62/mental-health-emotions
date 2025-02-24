import { Response } from "express";
import { article } from "./articles/interface/article.interface";
import { ArticlesService } from "./articles/articles.service";
import { VideosService } from "./videos/videos.service";
export declare class ResourcesController {
    private articlesService;
    private videosService;
    constructor(articlesService: ArticlesService, videosService: VideosService);
    createArticle(article: article, res: Response<article>): Promise<void>;
    findCreatorsArticles(id: string, p: number, res: Response<Array<article>>): Promise<void>;
    findAllArticles(res: Response<Array<article>>, p: number): Promise<void>;
    findOneArticle(id: string, res: Response<article>): Promise<Response<article, Record<string, any>>>;
    updateArticle(id: string, article: article): Promise<article>;
    removeArticle(id: string): Promise<boolean>;
}
