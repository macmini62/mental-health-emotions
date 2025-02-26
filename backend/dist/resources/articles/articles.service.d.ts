import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";
import { SeekerService } from "src/users/seekers/seekers.service";
export declare class ArticlesService {
    private articleModel;
    private professionalService;
    private seekerService;
    constructor(articleModel: Model<Article>, professionalService: ProfessionalService, seekerService: SeekerService);
    create(data: article): Promise<article>;
    findAll(p: number): Promise<Array<article>>;
    findOne(id: string): Promise<article>;
    findCreators(id: string, p: number): Promise<Array<article>>;
    update(id: string, article: article): Promise<article>;
    deleteOne(id: string): Promise<boolean>;
}
