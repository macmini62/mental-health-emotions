import { Professional } from "./schema/professional.schema";
import { Model } from "mongoose";
import { professional } from "./interface/professionals.interface";
export declare class ProfessionalService {
    private ProfessionalModel;
    constructor(ProfessionalModel: Model<Professional>);
    addUser(userId: string, data: {
        title: string;
        topics: string[];
    }): Promise<any>;
    getUser(userId: string): Promise<professional>;
    getAllUsers(): Promise<Array<professional>>;
    deleteUser(userId: string): Promise<import("mongodb").DeleteResult>;
    updateUser(userId: string, data: professional): Promise<import("mongoose").Document<unknown, {}, Professional> & Professional & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    userExists(id: string): Promise<boolean>;
}
