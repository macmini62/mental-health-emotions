import { ProfessionalsService } from './professionals.service';
export declare class ProfessionalsController {
    private professionalService;
    constructor(professionalService: ProfessionalsService);
    getAll(): Promise<import("./schema/professional.schema").Professional[]>;
    get(profId: string): Promise<import("./schema/professional.schema").Professional>;
    add(data: object): Promise<import("mongoose").Document<unknown, {}, import("./schema/professional.schema").Professional> & import("./schema/professional.schema").Professional & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    update(data: object, profId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(profId: string): Promise<import("mongodb").DeleteResult>;
}
