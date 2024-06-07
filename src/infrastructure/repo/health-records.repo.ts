import { InjectRepository } from "@nestjs/typeorm";
import { HealthRecord } from "../../domain/models/health";
import { CrudRepository } from "./crud.repo";
import { MongoRepository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthRecordsRepository extends CrudRepository<HealthRecord> {
    public constructor(@InjectRepository(HealthRecord) private readonly repo: MongoRepository<HealthRecord>) {
        super(repo);
    }
}
