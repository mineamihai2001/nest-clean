import { HealthRecord } from "../models/health";
import { IRepository } from "./IRepository";

export interface IHealthRecordsRepository extends IRepository<HealthRecord> {}

export const IHealthRecordsRepository = Symbol("IHealthRecordsRepository");
