import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from './schema/user.schema';
import { VerifyUser } from './users.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(VerifyUser)
        .forRoutes({path: "users/verify", method: RequestMethod.GET});
  }
}
