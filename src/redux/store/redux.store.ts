/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slice/user.slice";
import { reduxApi } from "../api/redux.api";
import { modalSlice } from "../slice/modal.slice";
import { productSlice } from "../slice/product.slice";
import { notificationSlice } from "../slice/notification.slice";
import { productPageSlice } from "../slice/product-page.slice";

export const store: EnhancedStore = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer,
        [modalSlice.reducerPath]: modalSlice.reducer,
        [productSlice.reducerPath]: productSlice.reducer,
        [notificationSlice.reducerPath]: notificationSlice.reducer,
        [productPageSlice.reducerPath]: productPageSlice.reducer,
        [reduxApi.reducerPath]: reduxApi.reducer
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware().concat(reduxApi.middleware)
});