import { NestMiddleware } from '@nestjs/common';
export declare class ProfessionalsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void): void;
}
