export interface CrudRepository<T> {
    create(data?: T): Promise<T>;

    find(data?: T): Promise<T>;

    findAll(...data: any): Promise<T>;

    update(data?: T): Promise<T>;

    delete(data?: T): Promise<T>;
}