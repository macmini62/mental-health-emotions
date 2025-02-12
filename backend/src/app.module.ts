import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from "./resources/topics/topics.module";
import { ProfessionalsModule } from "./users/professionals/professionals.module";
import { SeekersModule } from "./users/seekers/seekers.module";
import { SessionsModule } from "./sessions/sessions.module";
import { UsersModule } from './users/users.module';
import "dotenv/config";

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URL_LOCAL, { autoIndex: false }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TopicsModule,
    ProfessionalsModule,
    SeekersModule,
    SessionsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
