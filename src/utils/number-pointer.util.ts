import { FuncModelStruct } from "../models/function.model";

export const numberPointerFormat: FuncModelStruct<number, string> = (value: number): string => {
    return "$" + new Intl.NumberFormat("en-US", { maximumFractionDigits: 0}).format(value);
};