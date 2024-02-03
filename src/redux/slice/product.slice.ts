/* eslint-disable @typescript-eslint/typedef */
import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsDTO } from "../../dto/products.dto";

export const productSlice = createSlice({
    name: "product",
    initialState: [] as ProductsDTO[],
    reducers: {
        setSaveProduct: (products: ProductsDTO[], action: PayloadAction<ProductsDTO>): void => {
            const item: ProductsDTO = action.payload;

            const exists: ProductsDTO | undefined = products.find((product: ProductsDTO): boolean => product.id === item.id);

            if (exists) {
                return;
            }

            products.push(item);
        },
        setDeleteProduct: (products: ProductsDTO[], action: PayloadAction<ProductsDTO>): ProductsDTO[] => {
            return products.filter((product: ProductsDTO): boolean => product.id !== action.payload.id);
        },
        setUpdateProduct: (products: ProductsDTO[], action: PayloadAction<ProductsDTO>): void => {
            const { id }: ProductsDTO = action.payload;

            const index: number = products.findIndex((product: ProductsDTO): boolean => product.id === id);
            products.splice(index, 1, action.payload);
        }
    }
});
export const { setSaveProduct, setDeleteProduct, setUpdateProduct }: CaseReducerActions<{ 
        setSaveProduct: (products: ProductsDTO[], action: PayloadAction<ProductsDTO>) => void,
        setDeleteProduct: (products: ProductsDTO[], action: PayloadAction<ProductsDTO>) => ProductsDTO[],
        setUpdateProduct: (products: ProductsDTO[], action: PayloadAction<ProductsDTO>) => void
    },
    "product"> = productSlice.actions;