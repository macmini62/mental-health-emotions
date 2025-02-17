import { Professional } from "./schema/professional.schema";
import { Model } from "mongoose";
import { professional } from "./interface/professionals.interface";
export declare class ProfessionalService {
    private ProfessionalModel;
    constructor(ProfessionalModel: Model<Professional>);
    addUser(userId: string, data: professional): Promise<professional>;
    getUser(email: string): Promise<professional>;
    getAllUsers(): Promise<Array<professional>>;
    deleteUser(userId: string): Promise<import("mongodb").DeleteResult>;
    updateUser(userId: string, data: object): Promise<import("mongoose").UpdateWriteOpResult>;
    userExists(id: string): Promise<boolean>;
}
