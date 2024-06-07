export type TApp = {
    readonly port: number;
    readonly db: TDb;
};

export type TDb = {
    readonly host: string;
    readonly port: string;
    readonly database: string;
};

export interface IEnvironment {
    readonly app: TApp;
}
