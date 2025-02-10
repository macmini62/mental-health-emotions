import { ProfessionalService } from "./professionals.service";
import { professional } from "./interface/professionals.interface";
import { Response } from "express";
export declare class ProfessionalController {
    private usersService;
    constructor(usersService: ProfessionalService);
    getAll(): Promise<import("./schema/professional.schema").Professional[]>;
    get(userId: string): Promise<import("./schema/professional.schema").Professional>;
    add(data: professional, res: Response): Promise<Response<any, Record<string, any>>>;
    verify(data: professional, res: Response): Promise<Response<any, Record<string, any>>>;
    update(data: object, userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(userId: string): Promise<import("mongodb").DeleteResult>;
}
