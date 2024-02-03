import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { FuncModelStruct } from "../models/function.model";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/slice/notification.slice";
import { SnackbarHookModelStruct } from "../models/snackbar.model";

export const useSnackbar: FuncModelStruct<SnackbarHookModelStruct> = (): SnackbarHookModelStruct => {
    const dispatch: Dispatch<UnknownAction> = useDispatch<Dispatch<UnknownAction>>();

    const snackbarSuccess: FuncModelStruct<string, void> = (message: string): void => {
        dispatch(setNotification({
            open: true,
            message: message,
            color: "success",
            icon: "CheckCircleOutline"
        }));
    };

    const snackbarError: FuncModelStruct<string, void> = (message: string): void => {
        dispatch(setNotification({
            open: true,
            message: message,
            color: "danger",
            icon: "InfoRounded"
        }));
    };

    return {
        snackbarSuccess,
        snackbarError
    };
};