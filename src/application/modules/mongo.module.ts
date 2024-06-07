import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Environment } from "../../infrastructure/helper/environment";
import { DataSource } from "typeorm";

const config = Environment.getInstance().app.db;

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mongodb",
            url: `mongodb://${config.host}:${config.port}/${config.database}`,
            entities: ["dist/domain/models/**/*.entity.js"],
            synchronize: false,
        }),
    ],
})
export class MongoModule {}
