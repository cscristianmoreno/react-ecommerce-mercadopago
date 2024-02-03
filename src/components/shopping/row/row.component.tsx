import { AddCircle, DeleteRounded, RemoveCircle } from "@mui/icons-material";
import { Box, Button } from "@mui/joy";
import { FC, ReactElement, useEffect, useState } from "react";
import { numberPointerFormat } from "../../../utils/number-pointer.util";
import { ProductsDTO } from "../../../dto/products.dto";
import { HookModelStruct } from "../../../models/hook.model";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setDeleteProduct, setUpdateProduct } from "../../../redux/slice/product.slice";
import { SnackbarHookModelStruct } from "../../../models/snackbar.model";
import { useSnackbar } from "../../../hooks/useSnackbar";

const RowComponent: FC<{ product: ProductsDTO }> = ({ product }: { product: ProductsDTO }): ReactElement => {

    const dispatch: Dispatch<UnknownAction> = useDispatch<Dispatch<UnknownAction>>();

    const [quantity, setQuantity]: HookModelStruct<number> = useState<number>(1); 

    const { snackbarSuccess }: SnackbarHookModelStruct = useSnackbar();

    useEffect((): void => {
        const newProduct: ProductsDTO = { ...product };
        newProduct.quantity = quantity;

        dispatch(setUpdateProduct(newProduct));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    function onAddPrice(): void {
        setQuantity(quantity + 1);
    }
    
    function onRestPrice(): void {
        if (quantity === 1) {
            return;
        }

        setQuantity(quantity - 1);
    }

    function onDeletProduct(): void {
        dispatch(setDeleteProduct(product));
        
        snackbarSuccess("EL producto fue eliminado");
    }

    return(
        <tr>
            <td>
                <Box sx={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    height: 125
                }}>
                    <img style={{ width: 50 }} src={product.image}/>
                    <span style={ {marginLeft: "20px" }}>{product.title}</span>
                </Box>
            </td>
            <td>
                <Button onClick={(): void => onAddPrice()} color="primary" variant="outlined"><AddCircle/></Button>
                <span className="class_shopping_item_amount">{quantity}</span>
                <Button onClick={(): void => onRestPrice()} color="danger" variant="outlined"><RemoveCircle/></Button>
            </td> 
            <td>{numberPointerFormat(product.price * quantity)}</td> 
            <td><Button onClick={(): void => onDeletProduct()} color="danger" variant="soft"><DeleteRounded/></Button></td>
        </tr>
    );
};

export default RowComponent;
