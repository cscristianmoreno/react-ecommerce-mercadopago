import { FuncModelStruct } from "../models/function.model";

export const randomNumber: FuncModelStruct<{ min: number, max: number }, number> = ({ min, max }: { min: number, max: number }): number => {
    const random: number = Math.floor(Math.random() * (max - min) + min);
    return random;
};