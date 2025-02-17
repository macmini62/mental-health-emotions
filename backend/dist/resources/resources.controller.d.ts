import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
export declare class ResourcesController {
    private readonly resourcesService;
    constructor(resourcesService: ResourcesService);
    create(createResourceDto: CreateResourceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResourceDto: UpdateResourceDto): string;
    remove(id: string): string;
}
