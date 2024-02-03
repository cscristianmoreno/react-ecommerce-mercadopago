import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SnackbarModelStruct } from "../../models/snackbar.model";

// eslint-disable-next-line @typescript-eslint/typedef
export const notificationSlice = createSlice({
    name: "notificationSlice",
    initialState: { } as SnackbarModelStruct,
    reducers: {
        setNotification: (notify: SnackbarModelStruct, action: PayloadAction<SnackbarModelStruct>): void => {
            const { open, message, duration, icon, color }: SnackbarModelStruct = action.payload;

            notify.open = open;
            notify.message = message;
            notify.duration = duration;
            notify.icon = icon;
            notify.color = color;
        }
    }
});

export const { setNotification }: CaseReducerActions<{ setNotification: (notify: SnackbarModelStruct, action: PayloadAction<SnackbarModelStruct>) => void }, "notificationSlice"> = notificationSlice.actions;