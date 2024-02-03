import { FieldValues } from "react-hook-form";
import { AuthModelStruct } from "../models/auth.model";
import { UsersDTO } from "../dto/users.dto";

export interface userRepository {
    login(data: FieldValues): Promise<AuthModelStruct>;

    authentication(): Promise<UsersDTO>;
}