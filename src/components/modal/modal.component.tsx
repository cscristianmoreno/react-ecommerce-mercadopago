import { DialogTitle, Divider, Modal, ModalDialog } from "@mui/joy";
import { FC, ReactElement } from "react";
import { ModalModelStruct } from "../../models/modal.model";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/slice/modal.slice";
import { WarningRounded } from "@mui/icons-material";

const ModalComponent: FC<ModalModelStruct> = ({ open, children }: ModalModelStruct): ReactElement => {
    
    const dispatch: Dispatch<UnknownAction> = useDispatch<Dispatch<UnknownAction>>();

    return (
        <Modal
            open={open}
            onClose={(): {
                payload: boolean;
                type: "modal/setModal";
            } => dispatch(setModal(false))}
        >
            <ModalDialog>
                <DialogTitle>
                    <WarningRounded/>
                    Ingresar
                </DialogTitle>

                <Divider/>

                {children}
            </ModalDialog>
        </Modal>
    );
};

export default ModalComponent;