import { z } from "zod";
import { IEnvironment, TApp } from "./interfaces/IEnvironment";

export class Environment implements IEnvironment {
    private static instance: Environment | null = null;
    public readonly app: TApp;

    public static getInstance(): Environment {
        if (this.instance === null) {
            this.instance = new Environment();
        }
        return this.instance;
    }

    private constructor() {
        const env = this.parseEnvironment();
        this.app = {
            port: parseInt(env.APP_PORT),
            db: {
                host: env.APP_DB_HOST,
                port: env.APP_DB_PORT,
                database: env.APP_DB_DATABASE,
            },
        };
    }

    private parseEnvironment() {
        const schema = z.object({
            APP_PORT: z.string().min(1),
            APP_DB_HOST: z.string().min(1),
            APP_DB_PORT: z.string().min(1),
            APP_DB_DATABASE: z.string().min(1),
        });

        return schema.parse(process.env);
    }
}
