import { FC, ReactElement } from "react";
import { FormModelStruct } from "../../models/form.model";

const FormComponent: FC<FormModelStruct> = ({ children, style, onSubmit }: FormModelStruct): ReactElement => {

    return (
        <>
            <form style={style} onSubmit={onSubmit}>
                {/* <Stack gap={3}> */}
                    {children}
                {/* </Stack> */}
            </form>
        </>
    );
};

export default FormComponent;