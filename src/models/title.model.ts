import { TypographySystem } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { ReactElement } from "react";

export type TitleModelStruct = {
    level?: keyof TypographySystem | 'inherit',
    startDecorator?: ReactElement,
    endDecorator?: ReactElement,
    title: string,
    marginTop?: number,
    sx?: SxProps
};