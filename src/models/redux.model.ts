import { store } from "../redux/store/redux.store";

export type RootState = ReturnType<typeof store.getState>; 

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> = {
    error: E;
    data?: undefined;
    meta?: M;
} | {
    error?: undefined;
    data: T;
    meta?: M;
};

