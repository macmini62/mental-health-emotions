import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";
export declare class ArticlesService {
    private articleModel;
    private professionalService;
    constructor(articleModel: Model<Article>, professionalService: ProfessionalService);
    create(data: article): Promise<article>;
    findAll(): Promise<article[]>;
    findOne(id: string): Promise<article>;
    findCreators(creatorId: string): Promise<Array<article>>;
    update(id: string, article: article): Promise<article>;
    deleteOne(id: string): Promise<boolean>;
}
