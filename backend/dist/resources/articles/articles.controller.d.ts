import { ArticlesService } from "./articles.service";
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string): string;
    remove(id: string): string;
}
