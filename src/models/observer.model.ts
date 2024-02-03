import { FuncModelStruct } from "./function.model";

export type ObserverModelStruct = {
    addElement: FuncModelStruct<any, void> 
    isIntersecting: boolean
};