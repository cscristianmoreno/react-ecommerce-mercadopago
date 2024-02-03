import { CrudRepository } from "./crud.repository";
import { userRepository } from "./user.repository";

export interface ApiRepository<T> extends CrudRepository<T>, userRepository {
}