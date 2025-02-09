import { CreateRegisteredUserDto } from './dto/create-registered-user.dto';
import { UpdateRegisteredUserDto } from './dto/update-registered-user.dto';
export declare class RegisteredUsersService {
    create(createRegisteredUserDto: CreateRegisteredUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRegisteredUserDto: UpdateRegisteredUserDto): string;
    remove(id: number): string;
}
