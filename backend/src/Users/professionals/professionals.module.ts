import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { Professional, ProfessionalSchema } from "./schema/professional.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ProfessionalController } from "./professionals.controller";
import { ProfessionalService } from "./professionals.service";
import { ProfessionalsMiddleware } from "./professionals.middleware";


@Module({
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
  imports: [MongooseModule.forFeature([{name: Professional.name, schema: ProfessionalSchema}])]
})
export class ProfessionalsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(ProfessionalsMiddleware)
        .forRoutes({path: "users/verify", method: RequestMethod.GET});
  }
}
