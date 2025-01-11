import { Module } from "@nestjs/common";
import { ProfessionalsModule } from "./professionals/professionals.module";
import { SeekersModule } from './seekers/seekers.module';
import { MongooseModule } from "@nestjs/mongoose";
import "dotenv/config";

@Module({
  imports: [
    ProfessionalsModule,
    SeekersModule,
    MongooseModule.forRoot(process.env.MONGODB_URL)
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
