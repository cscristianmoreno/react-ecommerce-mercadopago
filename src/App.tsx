import { FC, ReactNode, useEffect } from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexSection from "./sections/index/index.section";
import LoginSection from "./sections/login/login.section";
import ProductSection from "./sections/product/product.section";
import ShoppingSection from "./sections/shopping/shopping.section";
import { notificationSlice } from "./redux/slice/notification.slice";
import { useSelect } from "./hooks/useSelect";
import SnackbarComponent from "./components/snackbar/snackbar.component";
import { SnackbarModelStruct } from "./models/snackbar.model";
import { HttpInterceptor } from "./interceptors/http.interceptor";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useAuthenticationQuery } from "./redux/api/user.api";
import { info } from "./redux/slice/user.slice";

new HttpInterceptor();  

const App: FC = (): ReactNode => {
    const notify: SnackbarModelStruct = useSelect(notificationSlice.name);

    // eslint-disable-next-line @typescript-eslint/typedef
    const { data } = useAuthenticationQuery();
    const dispatch: Dispatch<UnknownAction> = useDispatch<Dispatch<UnknownAction>>();

    useEffect((): void => {
        if (!data) {
            return;
        }
        
        dispatch(info(data));
    }, [data]);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="*" element={<IndexSection/>}/>
                    <Route path="/products" element={<ProductSection/>}/>
                    <Route path="/login" element={<LoginSection/>}/>
                    <Route path="/shopping" element={<ShoppingSection/>}/>
                </Routes>
            </Router>

            <SnackbarComponent props={notify}/>
        </>
    );
};

export default App;