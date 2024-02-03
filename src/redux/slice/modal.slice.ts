import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/typedef
export const modalSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        setModal: (state: boolean, action: PayloadAction<boolean>): boolean => {
            state = action.payload;
            return state;
        }
    }
});

export const { setModal }: CaseReducerActions<{ setModal: (_state: boolean, action: PayloadAction<boolean>) => boolean }, "modal">  = modalSlice.actions;