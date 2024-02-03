/* eslint-disable @typescript-eslint/typedef */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const productPageSlice = createSlice({
    name: "productPage",
    initialState: 1, 
    reducers: {
        setSavePage: (page: number, action: PayloadAction<number>): number => {
            page = action.payload;
            return page;
        }        
    }
});

export const { setSavePage } = productPageSlice.actions;