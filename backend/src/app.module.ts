import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from "./resources/topics/topics.module";
import { SessionsModule } from "./resources/sessions/sessions.module";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./guards/role.guard";
import { AppMiddleware } from "./app.middleware";
import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from "./guards/auth.guard";
import "dotenv/config";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL_LOCAL, { autoIndex: true }),
    // MongooseModule.forRoot(process.env.MONGODB_URL, { autoIndex: true }),
    TopicsModule,
    SessionsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
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
