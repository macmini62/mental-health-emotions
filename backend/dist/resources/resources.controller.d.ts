import { Response } from "express";
import { article } from "./articles/interface/article.interface";
import { ArticlesService } from "./articles/articles.service";
import { VideosService } from "./videos/videos.service";
export declare class ResourcesController {
    private articlesService;
    private videosService;
    constructor(articlesService: ArticlesService, videosService: VideosService);
    createArticle(article: article, res: Response<article>): Promise<Response<article, Record<string, any>>>;
    findCreatorsArticles(id: string, res: Response<article[]>): Promise<Response<article[], Record<string, any>>>;
    findAllArticles(res: Response): Promise<Response<any, Record<string, any>>>;
    findOneArticle(id: string, res: Response<article>): Promise<Response<article, Record<string, any>>>;
    updateArticle(id: string, article: article): Promise<article>;
    removeArticle(id: string): Promise<boolean>;
}
