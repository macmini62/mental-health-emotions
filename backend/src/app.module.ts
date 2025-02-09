import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';
import { RegisteredUsersModule } from './registered-users/registered-users.module';
import "dotenv/config";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule,
    TopicsModule,
    RegisteredUsersModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
