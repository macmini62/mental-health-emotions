import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
export declare class SessionsService {
    create(createSessionDto: CreateSessionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSessionDto: UpdateSessionDto): string;
    remove(id: number): string;
}
