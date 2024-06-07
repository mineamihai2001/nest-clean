import { Module } from "@nestjs/common";
import { HealthModule } from "./health.module";
import { MongoModule } from "./mongo.module";

@Module({
    imports: [MongoModule, HealthModule],
})
export class AppModule {}
