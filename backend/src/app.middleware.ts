import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.originalUrl === "/users/create") {
      if(req.body.user === "professionals"){
        res.send(req.body);
        res.redirect("/professionals/create");
      }
      else if(req.body.user === "seekers"){
        res.redirect("/seekers");
      }
      else{
        res.status(400).send({ message: "Invalid user role!!" });
      }
    } else {
      next();
    }
  }
}
