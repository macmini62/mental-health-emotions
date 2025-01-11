import { Seeker } from './schema/seekers.schema';
import { Model } from 'mongoose';
export declare class SeekersService {
    private seekerModel;
    constructor(seekerModel: Model<Seeker>);
    addSeeker(data: object): Promise<import("mongoose").Document<unknown, {}, Seeker> & Seeker & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getSeeker(seekerId: string): Promise<Seeker>;
    getAllSeekers(): Promise<Array<Seeker>>;
    deleteSeeker(seekerId: string): Promise<import("mongodb").DeleteResult>;
    updateSeeker(seekerId: string, data: object): Promise<import("mongoose").UpdateWriteOpResult>;
}
