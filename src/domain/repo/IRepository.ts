export interface IRepository<T extends object> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    update(id: string, entity: T): Promise<T>; // TODO: create type
    delete(entity: T): Promise<T | null>; //TODO: create type
    deleteMany(entities: T[]): Promise<T[]>; // TODO: create type
    insert(entity: T): Promise<T>; // TODO: create type
}

export const IRepository = Symbol("IRepository");
