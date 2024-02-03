import { CSSProperties, FormEventHandler, ReactNode } from "react";
import { Control, FieldErrors, FieldValues, SubmitHandler, UseFormClearErrors, UseFormSetError, UseFormSetValue, } from "react-hook-form";
// import { FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type FormModelStruct = {
    children: ReactNode,
    style?: CSSProperties,
    onSubmit?: FormEventHandler<unknown>
}

export type CustomFormModelStruct = {
    register: any, 
    handleSubmit: any, 
    errors: FieldErrors<FieldValues>,
    result: any,
    onSubmit?: SubmitHandler<FieldValues>,
    setValue?: UseFormSetValue<FieldValues>,
    clearErrors?: UseFormClearErrors<FieldValues>,
    setError?: UseFormSetError<FieldValues>,
    control?: Control<FieldValues>
};