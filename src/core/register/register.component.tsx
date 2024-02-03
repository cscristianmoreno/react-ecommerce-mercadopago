import { Button } from "@mui/joy";
import { FC, MouseEventHandler, ReactElement, useEffect } from "react";
import CheckboxComponent from "../../components/form/checkbox/checkbox.component";
import FieldComponent from "../../components/form/field/field.component";
import FormComponent from "../../components/form/form.component";
import ModalComponent from "../../components/modal/modal.component";
import { useRegister } from "../../hooks/useRegister";
import { useSelect } from "../../hooks/useSelect";
import { CustomFormModelStruct } from "../../models/form.model";
import { modalSlice } from "../../redux/slice/modal.slice";
import { SnackbarHookModelStruct } from "../../models/snackbar.model";
import { useSnackbar } from "../../hooks/useSnackbar";
import { fieldEmail, fieldLastname, fieldName, fieldPassword, fieldRequired } from "../../utils/form-validator.util";

const RegisterComponent: FC<{ onClick: MouseEventHandler }> = ({ onClick }: { onClick: MouseEventHandler }): ReactElement => {

    const modal: boolean = useSelect(modalSlice.name);

    const { snackbarError, snackbarSuccess }: SnackbarHookModelStruct = useSnackbar();

    const { handleSubmit, onSubmit, register, errors, result }: CustomFormModelStruct = useRegister();

    useEffect((): void => {
        console.log(result);

        if (result.isError) {
            snackbarError("Este usuario ya está registrado");
            return;
        }

        if (result.isSuccess) {
            snackbarSuccess("Te has registrado con exito");
        }
    }, [result.isSuccess, result.isError]);

    return (
        <>
            <ModalComponent open={modal}>
                <FormComponent onSubmit={handleSubmit(onSubmit)} style={{
                    display: "grid",
                    gridGap: "20px"
                }}>
                    <FieldComponent
                        title="Nombre"
                        type="text"
                        name="name"
                        register={register}
                        validators={fieldName}
                        errors={errors}
                    />

                    <FieldComponent
                        title="Apellido"
                        type="text"
                        name="lastname"
                        register={register}
                        validators={fieldLastname}
                        errors={errors}
                    />

                    <FieldComponent
                        title="Correo electrónico"
                        type="text"
                        name="email"
                        register={register}
                        validators={fieldEmail}
                        errors={errors}
                    />

                    <FieldComponent
                        title="Contraseña"
                        type="password"
                        name="password"
                        register={register}
                        validators={fieldPassword}
                        errors={errors}
                    />
                    
                    <CheckboxComponent
                        name="checkbox"
                        register={register}
                        validators={fieldRequired}
                        errors={errors}
                    />

                    <Button type="submit" color="primary">Registrarme</Button>
                </FormComponent>

                <small>¿No tienes una cuenta? <a style={{color: "blue", cursor: "pointer"}} onClick={onClick}>Inicia sesión</a></small>
            </ModalComponent>
        </>
    );
};

export default RegisterComponent;