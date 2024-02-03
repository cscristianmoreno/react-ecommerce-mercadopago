import { FuncModelStruct } from "../models/function.model";
import { ProductsDTO } from "../dto/products.dto";
import { PriceHookModelStruct } from "../models/price.model";
import { useSelect } from "./useSelect";
import { productSlice } from "../redux/slice/product.slice";
import { useEffect, useState } from "react";
import { HookModelStruct } from "../models/hook.model";

export const usePrice: FuncModelStruct<PriceHookModelStruct> = (): PriceHookModelStruct => {
    
    const products: ProductsDTO[] = useSelect(productSlice.name);

    const [price, setPrice]: HookModelStruct<number> = useState<number>(0);
    const [additional, setAdditional]: HookModelStruct<number> = useState(0);
    

    useEffect((): void => {
        if (!products) {
            return;
        }

        let price: number = 0;
        let additional: number = 0;
        
        products.forEach((product: ProductsDTO): void => {
            price += product.price * product.quantity;
        });

        additional = price * (0.0015 * products.length);
        
        setPrice(price);
        setAdditional(additional);
    }, [products]);
    
    return {
        price,
        additional
    };
};