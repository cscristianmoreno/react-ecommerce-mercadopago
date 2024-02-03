import { FuncModelStruct } from "../models/function.model";

export const findInArray: FuncModelStruct<any, unknown> = <T>(element: T[], item: any): T | undefined => {
    return element.find((elem: any): boolean => elem.id === item.id);
};