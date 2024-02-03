import { FormControl, FormHelperText, FormLabel, Option, Select } from "@mui/joy";
import { FC, ReactElement, SelectHTMLAttributes } from "react";
import { FieldModelStruct, } from "../../../models/field.model";

const SelectComponent: FC<FieldModelStruct & SelectHTMLAttributes<HTMLSelectElement>> = (props: FieldModelStruct & SelectHTMLAttributes<HTMLSelectElement>): ReactElement => {
    const { title, name, register, errors, onChange, disabled }: FieldModelStruct & Pick<SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "disabled"> = props;
    
    return (
        <FormControl error={(errors[name]) ? true : false}>
            <FormLabel>{title}</FormLabel>
            <Select disabled={disabled} onChange={onChange} defaultValue={0} {...props} {...register(name, { required: true })}>
                <Option disabled value={0}>Elegí una opción</Option>
                {props.children} 
            </Select>
            {errors[name] && <FormHelperText sx={{fontSize: 13}}>El campo es requerido</FormHelperText>}
        </FormControl>
    );
};

export default SelectComponent;