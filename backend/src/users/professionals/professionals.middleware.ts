import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ProfessionalsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req);
    next();
  }
}
