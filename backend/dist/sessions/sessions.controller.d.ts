import { SessionsService } from "./sessions.service";
export declare class SessionsController {
    private readonly sessionsService;
    constructor(sessionsService: SessionsService);
    create(createSessionDto: any): void;
    findAll(): void;
    findOne(id: string): void;
    update(id: string, updateSessionDto: any): void;
    remove(id: string): void;
}
