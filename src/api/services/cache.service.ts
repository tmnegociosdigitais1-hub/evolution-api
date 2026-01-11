import { ICache } from '@api/abstract/abstract.cache';

export class CacheService {
    constructor(private readonly engine: ICache) { }

    public async get(key: string): Promise<any> {
        return this.engine.get(key);
    }

    public async hGet(key: string, field: string): Promise<any> {
        return this.engine.hGet(key, field);
    }

    public set(key: string, value: any, ttl?: number): void {
        return this.engine.set(key, value, ttl);
    }

    public async hSet(key: string, field: string, value: any): Promise<void> {
        return this.engine.hSet(key, field, value);
    }

    public async has(key: string): Promise<boolean> {
        return this.engine.has(key);
    }

    public async keys(appendCriteria?: string): Promise<string[]> {
        return this.engine.keys(appendCriteria);
    }

    public async delete(key: string | string[]): Promise<number> {
        return this.engine.delete(key);
    }

    public async hDelete(key: string, field: string): Promise<any> {
        return this.engine.hDelete(key, field);
    }

    public async deleteAll(appendCriteria?: string): Promise<number> {
        return this.engine.deleteAll(appendCriteria);
    }
}
