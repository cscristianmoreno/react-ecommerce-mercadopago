import { SxProps } from "@mui/joy/styles/types";
import { ReactNode } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

export type FieldValidationModelStruct = {
    minLength?: {
        value: number,
        message: string
    },
    maxLength?: {
        value: number,
        message: string
    },
    min?: {
        value: number,
        message: string
    },
    max?: {
        value: number,
        message: string
    },
    required?: {
        value: boolean,
        message: string
    },
    pattern?: {
        value: RegExp,
        message: string
    }
};
export type FieldModelStruct = {
    title?: string,
    name: string
    register?: any,
    errors: FieldErrors<FieldValues>,
    validators: FieldValidationModelStruct[],
    sx?: SxProps,
    startDecorator?: ReactNode
    endDecorator?: ReactNode,
};

export type FieldValidationError<T> = {
    [T: string]: T
};