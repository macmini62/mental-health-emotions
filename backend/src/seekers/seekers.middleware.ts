import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SeekersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Hello seeker")
    next();
  }
}
