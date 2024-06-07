import { Inject, Injectable } from "@nestjs/common";
import { HealthCheckCommand } from "./command/health-check.command";
import { IHealthService } from "../../domain/services/IHealthService";

@Injectable()
export class HealthCheckApplication {
    public constructor(@Inject(IHealthService) private readonly healthService: IHealthService) {}

    public check(command: HealthCheckCommand) {
        return this.healthService.check();
    }
}
