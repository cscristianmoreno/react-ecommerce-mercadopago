/* eslint-disable @typescript-eslint/typedef */
import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersDTO } from "../../dto/users.dto";

export const userSlice = createSlice({
    name: "user",
    initialState: {} as any,
    reducers: {
        info: (data: UsersDTO, action: PayloadAction<UsersDTO>): void => {
            const { id, name, lastname, email }: UsersDTO = action.payload;
            
            data.id = id;
            data.name = name;
            data.lastname = lastname;
            data.email = email;
        },
        logged: (_state: boolean, action: PayloadAction<boolean>): boolean => (
            action.payload    
        )
    }
});

export const { info }: CaseReducerActions<{ info: (data: UsersDTO, action: PayloadAction<UsersDTO>) => void }, "user">  = userSlice.actions;