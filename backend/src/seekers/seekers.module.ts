import { Module } from '@nestjs/common';
import { SeekersController } from './seekers.controller';
import { SeekersService } from './seekers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Seeker, SeekerSchema } from './schema/seekers.schema';

@Module({
  providers: [SeekersService],
  controllers: [SeekersController],
  imports: [MongooseModule.forFeature([{name: Seeker.name, schema: SeekerSchema}])],
})

export class SeekersModule {}
