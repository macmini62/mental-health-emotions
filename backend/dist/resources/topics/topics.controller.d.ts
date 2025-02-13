import { TopicsService } from "./topics.service";
import { Response } from "express";
export declare class TopicsController {
    private topicService;
    constructor(topicService?: TopicsService);
    add(data: string[], res: Response): Promise<void>;
    fetch(size: number, res: Response): Promise<void>;
}
