import { ColorPaletteProp } from "@mui/joy";
export type SnackbarModelStruct = {
    open: boolean,
    message?: string,
    duration?: number,
    icon?: string,
    color?: ColorPaletteProp
};

export type SnackbarHookModelStruct = {
    snackbarSuccess: (message: string) => void,
    snackbarError: (message: string) => void
};