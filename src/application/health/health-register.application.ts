import { Inject, Injectable } from "@nestjs/common";
import { HealthCheckCommand } from "./command/health-check.command";
import { IHealthService } from "../../domain/services/IHealthService";

@Injectable()
export class HealthRegisterApplication {
    public constructor(@Inject(IHealthService) private readonly healthService: IHealthService) {}

    public register(command: HealthCheckCommand) {
        return this.healthService.registerCheck();
    }
}
