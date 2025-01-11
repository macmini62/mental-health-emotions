import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';
import { ProfessionalsController } from './professionals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionalSchema, Professional } from './schema/professional.schema';
import { ProfessionalsMiddleware } from './professionals.middleware';

@Module({
  imports: [MongooseModule.forFeature([{name: Professional.name, schema: ProfessionalSchema}])],
  providers: [ProfessionalsService],
  controllers: [ProfessionalsController]
})

export class ProfessionalsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProfessionalsMiddleware)
      .forRoutes("professionals");
  }
}
