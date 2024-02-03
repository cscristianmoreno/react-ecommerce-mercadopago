import { FC, InputHTMLAttributes, ReactElement } from "react";
import { FieldModelStruct, FieldValidationModelStruct } from "../../../models/field.model";
import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";

const FieldComponent: FC<FieldModelStruct & InputHTMLAttributes<HTMLInputElement>> = (props: FieldModelStruct & InputHTMLAttributes<HTMLInputElement>): ReactElement => {
    const { title, name, register, errors, validators, sx }: FieldModelStruct = props;
    
    const entries: FieldValidationModelStruct = validators.reduce((previous: FieldValidationModelStruct, current: FieldValidationModelStruct): FieldValidationModelStruct => {
        return { ...previous, ...current };
    });

    return (
        <FormControl sx={sx} error={(errors[name]) ? true : false}>
            <FormLabel>{title}</FormLabel>
            <Input {...props} {...register(name, entries)}/>
            {<FormHelperText sx={{fontSize: 13}}>{errors[name]?.message as string}</FormHelperText>}
        </FormControl>
    );
};

export default FieldComponent;