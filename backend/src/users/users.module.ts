import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProfessionalsModule } from './professionals/professionals.module';
import { SeekersModule } from './seekers/seekers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/users.schema';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    ProfessionalsModule,
    SeekersModule,
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule {}
