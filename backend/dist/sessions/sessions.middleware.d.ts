import { NestMiddleware } from '@nestjs/common';
export declare class SessionsMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
