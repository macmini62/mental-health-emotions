import { TopicsService } from "./topics.service";
import { Response } from "express";
import { topic } from "./interface/topic.interface";
export declare class TopicsController {
    private topicService;
    constructor(topicService: TopicsService);
    add(data: Array<topic>, res: Response): Promise<void>;
    fetch(s: number, res: Response<Array<topic>>): Promise<void>;
    fetchTopics(data: Array<string>, userId: string, res: Response<Array<topic>>): Promise<void>;
}
