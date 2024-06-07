import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "../application/modules/app.module";
import { Environment } from "../infrastructure/helper/environment";

async function bootstrap() {
    const env = Environment.getInstance();

    const app = await NestFactory.create(AppModule);
    await app.listen(env.app.port, () => {
        console.log(`Server started on http://[::1]:${env.app.port}`);
    });
}

bootstrap();
