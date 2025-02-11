import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
export declare class SessionsController {
    private readonly sessionsService;
    constructor(sessionsService: SessionsService);
    create(createSessionDto: CreateSessionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSessionDto: UpdateSessionDto): string;
    remove(id: string): string;
}
