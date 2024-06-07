import { HealthCheckResponse, HealthRecord } from "../models/health";

export interface IHealthService {
    check(): HealthCheckResponse;
    registerCheck(): Promise<HealthCheckResponse>;
    retrieveChecks(): Promise<HealthRecord[]>;
}

export const IHealthService = Symbol("IService");
