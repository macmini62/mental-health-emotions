import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from "./Resources/topics/topics.module";
import { ProfessionalsModule } from "./Users/professionals/professionals.module";
import { SeekersModule } from "./Users/seekers/seekers.module";
import { SessionsModule } from "./sessions/sessions.module";
import "dotenv/config";

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URL_LOCAL, { autoIndex: false }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TopicsModule,
    ProfessionalsModule,
    SeekersModule,
    SessionsModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
