import { ReactNode } from "react";

export type ModalModelStruct = {
    open: boolean,
    children?: ReactNode,
    icon?: string
};