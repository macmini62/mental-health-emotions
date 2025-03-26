import { Article } from "./schema/article.schema";
import { Model } from "mongoose";
import { article } from "./interface/article.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";
import { SeekerService } from "src/users/seekers/seekers.service";
import { UsersService } from "src/users/users.service";
import { TopicsService } from "src/topics/topics.service";
import { ContentItem } from "src/types/types";
export declare class ArticlesService {
    private articleModel;
    private professionalService;
    private seekerService;
    private userService;
    private topicService;
    constructor(articleModel: Model<Article>, professionalService: ProfessionalService, seekerService: SeekerService, userService: UsersService, topicService: TopicsService);
    create(data: {
        creatorId: string;
        title: string;
        overview: string;
        content: Array<ContentItem>;
        tags: Array<string>;
        thumbnail: {
            imageURL: string;
        };
    }): Promise<import("mongoose").Document<unknown, {}, Article> & Article & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(p: number): Promise<Array<article>>;
    findOne(id: string): Promise<article>;
    findCreators(id: string, p: number): Promise<Array<article>>;
    findArticleTags(tagId: string, p: number): Promise<Article[]>;
    update(id: string, article: article): Promise<article>;
    deleteOne(id: string): Promise<boolean>;
}
