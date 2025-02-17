import { Session } from "./schema/sessions.schema";
import { Model } from "mongoose";
export declare class SessionsService {
    private SessionModel;
    constructor(SessionModel: Model<Session>);
    create(): void;
    findAll(): void;
    findOne(id: number): void;
    update(id: number): void;
    remove(id: number): void;
}
