import { MiddlewareConsumer, NestModule } from "@nestjs/common";
import "dotenv/config";
export declare class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
