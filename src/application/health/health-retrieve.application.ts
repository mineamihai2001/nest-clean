import { Inject, Injectable } from "@nestjs/common";
import { HealthCheckCommand } from "./command/health-check.command";
import { IHealthService } from "../../domain/services/IHealthService";

@Injectable()
export class HealthRetrieveApplication {
    public constructor(@Inject(IHealthService) private readonly healthService: IHealthService) {}

    public retrieve(command: HealthCheckCommand) {
        return this.healthService.retrieveChecks();
    }
}
