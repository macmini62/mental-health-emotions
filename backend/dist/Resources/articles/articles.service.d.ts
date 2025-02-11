import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ArticlesModule } from "./articles.module";
export declare class ArticlesService {
    private ArticleModel;
    constructor(ArticleModel: Model<Article>);
    create(article: article): Promise<ArticlesModule>;
    findAll(): Promise<article[]>;
    findOne(id: string): Promise<article>;
    update(id: string, article: article): Promise<article>;
    deleteOne(id: string): Promise<boolean>;
}
