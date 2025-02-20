import { Seeker } from "./schema/seeker.schema";
import { Model } from "mongoose";
import { seeker } from "./interface/seekers.interface";
export declare class SeekerService {
    private SeekerModel;
    constructor(SeekerModel: Model<Seeker>);
    addUser(userId: string, data: {
        topics: string[];
    }): Promise<any>;
    getUser(userId: string): Promise<Seeker>;
    getAllUsers(): Promise<Array<Seeker>>;
    deleteUser(userId: string): Promise<import("mongodb").DeleteResult>;
    updateUser(userId: string, data: object): Promise<import("mongoose").UpdateWriteOpResult>;
    verifyUser(data: seeker): Promise<object>;
}
