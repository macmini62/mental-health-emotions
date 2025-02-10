import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { Seeker, SeekerSchema } from './schema/seeker.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SeekerController } from './seekers.controller';
import { SeekerService } from './seekers.service';
import { SeekersMiddleware } from './seekers.middleware';


@Module({
  controllers: [SeekerController],
  providers: [SeekerService],
  imports: [MongooseModule.forFeature([{name: Seeker.name, schema: SeekerSchema}])]
})
export class SeekersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(SeekersMiddleware)
        .forRoutes({path: "users/verify", method: RequestMethod.GET});
  }
}
