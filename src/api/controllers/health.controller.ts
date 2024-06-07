import { Controller, Get } from "@nestjs/common";
import {
    HealthCheckApplication,
    HealthCheckCommand,
    HealthRegisterApplication,
    HealthRetrieveApplication,
} from "../../application/health";

@Controller("/health")
export class HealthController {
    public constructor(
        private readonly healthCheckApplication: HealthCheckApplication,
        private readonly healthRegisterApplication: HealthRegisterApplication,
        private readonly healthRetrieveApplication: HealthRetrieveApplication,
    ) {}

    @Get()
    public check() {
        const command = new HealthCheckCommand();
        return this.healthCheckApplication.check(command);
    }

    @Get("register")
    public register() {
        const command = new HealthCheckCommand();
        return this.healthRegisterApplication.register(command);
    }

    @Get("retrieve")
    public retrieve() {
        const command = new HealthCheckCommand();
        return this.healthRetrieveApplication.retrieve(command);
    }
}
