import { Checkbox, FormControl } from "@mui/joy";
import { FC, ReactElement } from "react";
import { FieldModelStruct } from "../../../models/field.model";

const CheckboxComponent: FC<FieldModelStruct> = ({ register, errors }: FieldModelStruct): ReactElement => {

    return (
        <FormControl error={errors["checkbox"] ? true : false}>
            <Checkbox label="Acepto los términos y condiciones" size="sm" color="danger" {...register("checkbox", { required: true })} sx={{
                color: (errors["checkbox"] ? "red" : "initial")
            }}/>
        </FormControl>
    );
};

export default CheckboxComponent;