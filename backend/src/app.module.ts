import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicsModule } from './Resources/topics/topics.module';
import { ProfessionalsModule } from './Users/professionals/professionals.module';
import { SeekersModule } from './Users/seekers/seekers.module';
import "dotenv/config";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TopicsModule,
    ProfessionalsModule,
    SeekersModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
