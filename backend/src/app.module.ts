import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from "./topics/topics.module";
import { SessionsModule } from "./sessions/sessions.module";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./guards/role.guard";
import { AppMiddleware } from "./app.middleware";
import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from "./guards/auth.guard";
import "dotenv/config";
import { ResourcesModule } from './resources/resources.module';
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URL_LOCAL, { autoIndex: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL, { autoIndex: true }),
    TopicsModule,
    SessionsModule,
    AuthModule,
    ResourcesModule,
    UsersModule,
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
  ],
  exports: [UsersModule, ResourcesModule]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes();
  }
}
