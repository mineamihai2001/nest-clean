import { DataSource } from "typeorm";
import { Environment } from "../helper/environment";

export const mongoProviders = [
    {
        provide: "DB_CONNECTION",
        useFactory: async (): Promise<DataSource> => {
            const config = Environment.getInstance().app.db;

            return new DataSource({
                type: "mongodb",
                url: `mongodb://${config.host}:${config.port}/${config.database}`,
                entities: ["dist/domain/models/**/*.entity.js"],
                synchronize: false,
            }).initialize();
        },
    },
];
