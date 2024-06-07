import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class HealthRecord {
    @ObjectIdColumn({ name: "_id" })
    private readonly id!: ObjectId;

    @Column()
    public readonly createdAt: number;

    public constructor(createdAt: number) {
        this.createdAt = createdAt;
    }
}
