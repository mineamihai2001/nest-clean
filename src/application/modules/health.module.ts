import { Module } from "@nestjs/common";
import { IHealthService } from "../../domain/services/IHealthService";
import { HealthService } from "../../infrastructure/services/health";
import { HealthCheckApplication, HealthRegisterApplication, HealthRetrieveApplication } from "../health";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HealthRecord } from "../../domain/models/health";
import { HealthRecordsRepository } from "../../infrastructure/repo/health-records.repo";
import { HealthController } from "../../api/controllers/health.controller";
import { IHealthRecordsRepository } from "../../domain/repo";

@Module({
    imports: [TypeOrmModule.forFeature([HealthRecord])],
    controllers: [HealthController],
    providers: [
        HealthCheckApplication,
        HealthRegisterApplication,
        HealthRetrieveApplication,
        {
            provide: IHealthService,
            useClass: HealthService,
        },
        {
            provide: IHealthRecordsRepository,
            useClass: HealthRecordsRepository,
        },
    ],
})
export class HealthModule {}
