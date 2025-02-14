import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from "./resources/topics/topics.module";
import { SessionsModule } from "./sessions/sessions.module";
import { ProfessionalsModule } from "./professionals/professionals.module";
import { SeekersModule } from "./seekers/seekers.module";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./guards/roles.guards";
import "dotenv/config";
import { AppMiddleware } from "./app.middleware";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL_LOCAL),
    // MongooseModule.forRoot(process.env.MONGODB_URL),
    TopicsModule,
    SessionsModule,
    ProfessionalsModule,
    SeekersModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes();
  }
}
