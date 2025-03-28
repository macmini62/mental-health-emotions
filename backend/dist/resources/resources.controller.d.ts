import { Response } from "express";
import { article } from "./articles/interface/article.interface";
import { ArticlesService } from "./articles/articles.service";
import { VideosService } from "./videos/videos.service";
import { ContentItem } from "src/types/types";
export declare class ResourcesController {
    private articlesService;
    private videosService;
    constructor(articlesService: ArticlesService, videosService: VideosService);
    createArticle(data: {
        creatorId: string;
        title: string;
        overview: string;
        content: Array<ContentItem>;
        tags: Array<string>;
        thumbnail: {
            imageURL: string;
        };
    }, res: Response<article>): Promise<void>;
    findAllArticles(res: Response<Array<article>>, p: number): Promise<void>;
    findCreatorsArticles(id: string, p: number, res: Response<Array<article>>): Promise<void>;
    findOneArticle(id: string, res: Response<article>): Promise<void>;
    fetchArticlesTag(res: Response<Array<article>>, t: string, p: number): Promise<void>;
    updateArticle(id: string, article: article): Promise<article>;
    removeArticle(id: string): Promise<boolean>;
}
