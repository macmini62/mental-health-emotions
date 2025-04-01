import { Video } from "./schema/video.schema";
import { Model } from "mongoose";
import { video } from "./interface/video.interface";
import { ProfessionalService } from "src/users/professionals/professionals.service";
import { SeekerService } from "src/users/seekers/seekers.service";
import { UsersService } from "src/users/users.service";
import { TopicsService } from "src/topics/topics.service";
export declare class VideosService {
    private videoModel;
    private professionalService;
    private seekerService;
    private userService;
    private topicService;
    constructor(videoModel: Model<Video>, professionalService: ProfessionalService, seekerService: SeekerService, userService: UsersService, topicService: TopicsService);
    create(data: {
        creatorId: string;
        title: string;
        URL: string;
        description: string;
        tags: Array<string>;
        duration: number;
        languages: Array<string>;
        thumbnail: string;
        license: string;
    }): Promise<import("mongoose").Document<unknown, {}, Video> & Video & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    findAll(p: number): Promise<Array<video>>;
    findOne(id: string): Promise<video>;
    findCreators(id: string, p: number): Promise<Array<video>>;
    findArticleTags(tagId: string, p: number): Promise<Video[]>;
    update(id: string, video: video): Promise<video>;
    deleteOne(id: string): Promise<boolean>;
}
