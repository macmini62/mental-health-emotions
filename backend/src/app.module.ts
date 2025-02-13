import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from "./resources/topics/topics.module";
import { SessionsModule } from "./sessions/sessions.module";
import { UsersModule } from './users/users.module';
import "dotenv/config";

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URL_LOCAL),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TopicsModule,
    SessionsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
