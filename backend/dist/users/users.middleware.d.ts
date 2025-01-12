import { NestMiddleware } from '@nestjs/common';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
export declare class VerifyUser implements NestMiddleware {
    private userModel;
    constructor(userModel: Model<User>);
    use(req: any, res: any, next: () => void): Promise<any>;
}
