import { VideosService } from "./videos.service";
export declare class VideosController {
    private readonly videosService;
    constructor(videosService: VideosService);
    create(createVideoDto: any): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVideoDto: any): string;
    remove(id: string): string;
}
