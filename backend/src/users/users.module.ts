import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProfessionalsModule } from './professionals/professionals.module';
import { SeekersModule } from './seekers/seekers.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [ProfessionalsModule, SeekersModule],
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes();
  }
}
