import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
export declare class ResourcesService {
    create(createResourceDto: CreateResourceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResourceDto: UpdateResourceDto): string;
    remove(id: number): string;
}
