import { Module } from '@nestjs/common';
import { RegisteredUsersService } from './registered-users.service';
import { RegisteredUsersController } from './registered-users.controller';

@Module({
  controllers: [RegisteredUsersController],
  providers: [RegisteredUsersService],
})
export class RegisteredUsersModule {}
