import { ProfessionalService } from "./professionals.service";
import { professional } from "./interface/professionals.interface";
import { Request, Response } from "express";
export declare class ProfessionalController {
    private usersService;
    constructor(usersService: ProfessionalService);
    getAll(): void;
    get(req: Request, userId: string): Promise<professional>;
    add(id: string, data: professional, res: Response): Promise<Response<any, Record<string, any>>>;
    update(data: object, userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(userId: string): Promise<import("mongodb").DeleteResult>;
}
