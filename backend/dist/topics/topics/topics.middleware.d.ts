import { NestMiddleware } from '@nestjs/common';
export declare class TopicsMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
