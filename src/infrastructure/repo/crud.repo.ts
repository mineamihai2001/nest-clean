import { MongoRepository, ObjectLiteral } from "typeorm";
import { IRepository } from "../../domain/repo/IRepository";

export class CrudRepository<T extends ObjectLiteral> implements IRepository<T> {
    public constructor(private readonly repository: MongoRepository<T>) {}

    public async insert(entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    public async update(id: string, entity: T): Promise<T> {
        return this.repository.findOneAndUpdate({ _id: id }, entity) as Promise<T>;
    }

    public async delete(entity: T): Promise<T | null> {
        return this.repository.remove([entity]).then((res: T[]) => res.at(0) ?? null);
    }

    public async deleteMany(entities: T[]): Promise<T[]> {
        return this.repository.remove(entities);
    }

    public async findById(id: string): Promise<T | null> {
        return this.repository.findOne({ where: { _id: id } });
    }

    public async findAll(): Promise<T[]> {
        return this.repository.find();
    }
}
