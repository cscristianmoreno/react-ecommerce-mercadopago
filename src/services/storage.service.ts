export abstract class StorageService {

    static getStorage(): string | null {
        return localStorage.getItem("token");
    }

    static setStorage(value: string): void {
        return localStorage.setItem("token", value);
    }
}