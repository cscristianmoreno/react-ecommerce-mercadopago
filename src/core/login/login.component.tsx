import { FC, MouseEventHandler, ReactElement, useEffect } from "react";

import { useSelect } from "../../hooks/useSelect";
import { CustomFormModelStruct } from "../../models/form.model";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { info, userSlice } from "../../redux/slice/user.slice";
import { useLogin } from "../../hooks/useLogin";
import { modalSlice, setModal } from "../../redux/slice/modal.slice";
import { Button } from "@mui/joy";
import FieldComponent from "../../components/form/field/field.component";
import FormComponent from "../../components/form/form.component";
import ModalComponent from "../../components/modal/modal.component";
import { fieldRequired } from "../../utils/form-validator.util";
import { useSnackbar } from "../../hooks/useSnackbar";
import { SnackbarHookModelStruct } from "../../models/snackbar.model";
import { UsersDTO } from "../../dto/users.dto";

const LoginComponent: FC<{ onClick: MouseEventHandler }> = ({ onClick }: { onClick: MouseEventHandler}): ReactElement => {

    const modal: boolean = useSelect(modalSlice.name);
    const userInfo: UsersDTO = useSelect(userSlice.name);

    const { onSubmit, handleSubmit, register, errors, result }: CustomFormModelStruct = useLogin();

    const dispatch: Dispatch = useDispatch();

    const { snackbarError, snackbarSuccess }: SnackbarHookModelStruct = useSnackbar();

    useEffect((): void => {
    }, [info]);

    useEffect((): void => {
        if (result.isError) {
            snackbarError(result.error.message);
            return;
        }
        
        if (result.isSuccess) {
            dispatch(setModal(false));
            snackbarSuccess(`Has iniciado sesión. Bienvenido ${result.data.user.name}`);
            dispatch(info(result.data.user));
        }
    }, [result]);

    return (
        <>
            <ModalComponent open={modal}>
                <FormComponent onSubmit={handleSubmit(onSubmit)} style={{
                   display: "grid",
                   gridGap: "15px 20px", 
                }}>
                    <FieldComponent
                        title="Correo electrónico"
                        type="text"
                        name="email"
                        register={register}
                        validators={fieldRequired}
                        errors={errors}
                    />

                    <FieldComponent
                        title="Contraseña"
                        type="password"
                        name="password"
                        register={register}
                        validators={fieldRequired}
                        errors={errors}
                    />

                    {
                        (Object.entries(userInfo).length) ?
                            <Button type="submit" color="primary">Cerrar sesión</Button>
                        :
                            <Button type="submit" color="primary">Ingresar</Button>
                    }
                </FormComponent>

                <small>¿No tienes una cuenta? <a style={{color: "blue", cursor: "pointer"}} onClick={onClick}>Regístrate</a></small>
            </ModalComponent>
        </>
    );
};

export default LoginComponent;