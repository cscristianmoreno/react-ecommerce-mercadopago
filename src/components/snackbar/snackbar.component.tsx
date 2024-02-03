import { Snackbar, SnackbarCloseReason } from "@mui/joy";
import { FC, ReactElement, useEffect, useState } from "react";
import { SnackbarModelStruct } from "../../models/snackbar.model";
import { HookModelStruct } from "../../models/hook.model";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setNotification } from "../../redux/slice/notification.slice";
import { CheckCircle, InfoRounded } from "@mui/icons-material";

const SnackbarComponent: FC<{ props: SnackbarModelStruct }> = ({ props }: { props: SnackbarModelStruct }): ReactElement => {

    const { open, color, duration = 3000, message}: SnackbarModelStruct = props;

    const [snack, setSnack]: HookModelStruct<boolean> = useState<boolean>(false);

    const dispatch: Dispatch<UnknownAction> = useDispatch<Dispatch<UnknownAction>>();

    useEffect((): void => {
        setSnack(open);
    }, [open]);

    useEffect((): void => {
        if (snack) {
            return;
        }

        dispatch(setNotification({
            open: false
        }));
    }, [snack, dispatch]);

    return (
        <Snackbar 
            open={snack}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            onClose={(_event: unknown, reason: SnackbarCloseReason): void => {
                if (reason === "timeout") {
                    setSnack(false);
                }
            }}
            autoHideDuration={duration}
            color={color}
            variant="solid"
            startDecorator={(props.color === "success") ?  <CheckCircle/> : <InfoRounded/>}
            sx={{
                marginTop: 13
            }}
        >
            {message}
        </Snackbar>
    );
};

export default SnackbarComponent;