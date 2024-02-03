import { AxiosResponse } from "axios";
import { http } from "../services/http.service";
import { ApiRepository } from "../repository/api.repository";
import { AuthModelStruct } from "../models/auth.model";
import { FieldValues } from "react-hook-form";
import { UsersDTO } from "../dto/users.dto";

export class UsersDAO<T = void> implements ApiRepository<T> {
    private path: string = "/users";

    async create(data: T): Promise<T> {
        const response: AxiosResponse<T> = await http.post<T>(this.path + "/create", data);
        return response.data;
    }

    async find(data: T): Promise<T> {
        const response: AxiosResponse<T> = await http.get<T>(this.path + "/find", {
            params: data
        });

        return response.data;
    }

    async update(data: T): Promise<T> {
        const response: AxiosResponse<T> = await http.put<T>(this.path + "/create", data);
        return response.data;
    }
    async delete(data: T): Promise<T> {
        const response: AxiosResponse<T> = await http.delete<T>(this.path + "/delete", {
            params: data
        });
        
        return response.data;
    }

    async findAll(): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async login(data: FieldValues): Promise<AuthModelStruct> {
        const response: AxiosResponse<AuthModelStruct> = await http.post<AuthModelStruct>(this.path + "/login", data);
        return response.data;
    }

    async authentication(): Promise<UsersDTO> {
        const response: AxiosResponse<UsersDTO> = await http.post<UsersDTO>(this.path + "/authentication");
        return response.data;
    }
    
}