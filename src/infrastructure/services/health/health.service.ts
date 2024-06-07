import { Inject, Injectable } from "@nestjs/common";
import { IHealthService } from "../../../domain/services/IHealthService";
import { HealthCheckResponse } from "../../../domain/models/health/HealthCheckResponse";
import { IRepository } from "../../../domain/repo/IRepository";
import { HealthRecord } from "../../../domain/models/health";
import { IHealthRecordsRepository } from "../../../domain/repo";

@Injectable()
export class HealthService implements IHealthService {
    public constructor(
        @Inject(IHealthRecordsRepository) private readonly healthRecordsRepository: IRepository<HealthRecord>,
    ) {}

    public check(): HealthCheckResponse {
        return {
            status: "OK",
            timestamp: new Date().valueOf(),
            service: "<current-service>",
        };
    }

    public async registerCheck(): Promise<HealthCheckResponse> {
        const record = await this.healthRecordsRepository.insert(new HealthRecord(Date.now()));
        return {
            status: "OK",
            timestamp: record.createdAt,
            service: "<current-service>",
        };
    }

    public async retrieveChecks(): Promise<HealthRecord[]> {
        return this.healthRecordsRepository.findAll();
    }
}
