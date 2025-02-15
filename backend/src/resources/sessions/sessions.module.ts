import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { SessionsService } from "./sessions.service";
import { SessionsController } from "./sessions.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { SessionSchema, Session } from "./schema/sessions.schema";
import { SessionsMiddleware } from "./sessions.middleware";

@Module({
  controllers: [SessionsController],
  providers: [SessionsService],
  imports: [MongooseModule.forFeature([{name: Session.name, schema: SessionSchema}])]
})

export class SessionsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionsMiddleware)
      .forRoutes({path: "professionals/", method: RequestMethod.GET}, {path: "seekers/", method: RequestMethod.GET})
  }
}
