import { Professional } from './schema/professional.schema';
import { Model } from 'mongoose';
export declare class ProfessionalsService {
    private ProfessionalModel;
    constructor(ProfessionalModel: Model<Professional>);
    addProf(data: object): Promise<import("mongoose").Document<unknown, {}, Professional> & Professional & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getProf(profId: string): Promise<Professional>;
    getAllProfs(): Promise<Array<Professional>>;
    deleteProf(profId: string): Promise<import("mongodb").DeleteResult>;
    updateProf(profId: string, data: object): Promise<import("mongoose").UpdateWriteOpResult>;
}
