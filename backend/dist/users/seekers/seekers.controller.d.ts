import { SeekerService } from "./seekers.service";
import { seeker } from "./interface/seekers.interface";
import { Response } from "express";
export declare class SeekerController {
    private seekerService;
    constructor(seekerService: SeekerService);
    getAll(): Promise<import("./schema/seeker.schema").Seeker[]>;
    get(userId: string): Promise<import("./schema/seeker.schema").Seeker>;
    verify(data: seeker, res: Response): Promise<Response<any, Record<string, any>>>;
    update(data: object, userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(userId: string): Promise<import("mongodb").DeleteResult>;
}
