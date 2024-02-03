import { AxiosResponse } from "axios";
import { CrudRepository } from "../repository/crud.repository";
import { http } from "../services/http.service";
import { ProductsDTO } from "../dto/products.dto";

export class ProductsDAO<T = ProductsDTO> implements CrudRepository<T> {
    private path: string = "/products";

    create(): Promise<T> {
        throw new Error("Method not implemented.");
    }
    async find(): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async findAll(pagination: number): Promise<T> {
        const response: AxiosResponse = await http.get(this.path + "/" + pagination);
        return response.data;
    }

    update(): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async payment(products: ProductsDTO[]): Promise<string> {
        const response: AxiosResponse<string> = await http.post("/shopping/link", products);
        return response.data;
    } 
}