import { RegisteredUsersService } from './registered-users.service';
import { CreateRegisteredUserDto } from './dto/create-registered-user.dto';
import { UpdateRegisteredUserDto } from './dto/update-registered-user.dto';
export declare class RegisteredUsersController {
    private readonly registeredUsersService;
    constructor(registeredUsersService: RegisteredUsersService);
    create(createRegisteredUserDto: CreateRegisteredUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRegisteredUserDto: UpdateRegisteredUserDto): string;
    remove(id: string): string;
}
