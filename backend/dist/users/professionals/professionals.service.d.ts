import { Professional } from "./schema/professional.schema";
import { Model } from "mongoose";
import { professional } from "./interface/professionals.interface";
export declare class ProfessionalService {
    private ProfessionalModel;
    constructor(ProfessionalModel: Model<Professional>);
    addUser(data: professional): Promise<string>;
    getUser(email: string): Promise<Professional>;
    getAllUsers(): Promise<Array<Professional>>;
    deleteUser(userId: string): Promise<import("mongodb").DeleteResult>;
    updateUser(userId: string, data: object): Promise<import("mongoose").UpdateWriteOpResult>;
    verifyUser(data: professional): Promise<object>;
}
