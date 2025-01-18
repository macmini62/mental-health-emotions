import { NestMiddleware } from '@nestjs/common';
export declare class ArticlesMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
