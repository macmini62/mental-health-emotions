import { SeekersService } from './seekers.service';
export declare class SeekersController {
    private seekerService;
    constructor(seekerService: SeekersService);
    getAll(): Promise<import("./schema/seekers.schema").Seeker[]>;
    get(seekerId: string): Promise<import("./schema/seekers.schema").Seeker>;
    add(data: object): Promise<import("mongoose").Document<unknown, {}, import("./schema/seekers.schema").Seeker> & import("./schema/seekers.schema").Seeker & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    update(data: object, seekerId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(seekerId: string): Promise<import("mongodb").DeleteResult>;
}
