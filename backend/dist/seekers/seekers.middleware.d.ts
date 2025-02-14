import { NestMiddleware } from '@nestjs/common';
export declare class SeekersMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
