import { UsersDTO } from "../dto/users.dto";


export type AuthModelStruct = {
    token: string,
    user: UsersDTO
};