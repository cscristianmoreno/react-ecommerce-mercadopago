import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { http } from "../services/http.service";
import { StorageService } from "../services/storage.service";

export class HttpInterceptor {

    constructor() {
        this.interceptorInitialized();
    }

    public interceptorInitialized(): void {
        http.interceptors.request.use((req: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> => {
            const token: string | null = StorageService.getStorage();
            req.headers["Authorization"] = "Bearer " + token;
            req.headers["Content-Type"] = "application/json";
            
            return req;
        });

        http.interceptors.response.use(
            (res: AxiosResponse<any>): AxiosResponse<any> => {
                if (res.config.url === "/users/login") {
                    const token: string = res.data["token"];
                    StorageService.setStorage(token);
                }

                return res;
            },
            (error: AxiosError): AxiosError => {
                if (error.response) {
                    throw new AxiosError(error.response.data as string);
                }
                else {
                    throw new AxiosError("");
                }
            }
        );
    }
}