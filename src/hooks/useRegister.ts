import { FieldValues, SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import { FuncModelStruct } from "../models/function.model";
import { CustomFormModelStruct } from "../models/form.model";
import { useRegisterMutation } from "../redux/api/user.api";

export const useRegister: FuncModelStruct<CustomFormModelStruct> = (): CustomFormModelStruct => {
    const { register, handleSubmit, formState: { errors } }: UseFormReturn<FieldValues> = useForm();

    const [trigger, result]: any = useRegisterMutation();

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues): void => {
        trigger(data);
    };

    return {
        register,
        onSubmit,
        handleSubmit,
        errors,
        result
    };
};