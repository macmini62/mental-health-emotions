import { Model } from "mongoose";
import { User } from "./schema/users.schema";
import { user } from "./interface/user.interface";
import { ProfessionalService } from "./professionals/professionals.service";
import { professional } from "./professionals/interface/professionals.interface";
import { seeker } from "./seekers/interface/seekers.interface";
import { SeekerService } from "./seekers/seekers.service";
export declare class UsersService {
    private UserModel;
    private professionalService;
    private seekerService;
    constructor(UserModel: Model<User>, professionalService: ProfessionalService, seekerService: SeekerService);
    create(user: user): Promise<user>;
    addUserProfessional(userId: string, userData: {
        role: string;
        title: string;
        topics: string[];
    }): Promise<professional>;
    addUserSeeker(userId: string, userData: {
        role: string;
        topics: string[];
    }): Promise<seeker>;
    findOne(email: string): Promise<User>;
    findName(userId: string): Promise<string>;
    userExists(userId: string): Promise<boolean>;
}
