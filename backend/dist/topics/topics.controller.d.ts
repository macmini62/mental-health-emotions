import { TopicsService } from "./topics.service";
import { Response } from "express";
import { topic } from "./interface/topic.interface";
export declare class TopicsController {
    private topicService;
    constructor(topicService: TopicsService);
    add(data: topic[], res: Response): Promise<void>;
    fetch(size: number, res: Response): Promise<void>;
    fetchTopics(data: topic[], userId: {
        id: string;
    }, res: Response): Promise<void>;
}
