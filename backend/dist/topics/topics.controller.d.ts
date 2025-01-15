import { TopicsService } from './topics.service';
import { topic } from './interface/topic';
import { Response } from 'express';
export declare class TopicsController {
    private topicService;
    constructor(topicService?: TopicsService);
    add(data: topic, res: Response): Promise<void>;
    fetch(res: Response): Promise<void>;
}
