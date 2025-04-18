import { ProfessionalService } from "./professionals.service";
import { professional } from "./interface/professionals.interface";
import { Request } from "express";
export declare class ProfessionalController {
    private usersService;
    constructor(usersService: ProfessionalService);
    getAll(): void;
    get(req: Request, userId: string): Promise<professional>;
    update(data: professional, userId: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/professional.schema").Professional> & import("./schema/professional.schema").Professional & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    delete(userId: string): Promise<import("mongodb").DeleteResult>;
}
