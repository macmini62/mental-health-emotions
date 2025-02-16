import { HydratedDocument } from "mongoose";
export type ProfessionalDocument = HydratedDocument<Professional>;
export declare class Professional {
    _id: string;
    phoneNumber: string;
    profession: string;
    institution: string;
    lastActive: string;
    profile: {
        profileURL: string;
        imageURL: string;
    };
    contents: {
        topics: string[];
        bookmarks: {
            articles: string[];
            videos: string[];
        };
    };
}
export declare const ProfessionalSchema: import("mongoose").Schema<Professional, import("mongoose").Model<Professional, any, any, any, import("mongoose").Document<unknown, any, Professional> & Professional & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Professional, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Professional>> & import("mongoose").FlatRecord<Professional> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
