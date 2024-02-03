import { FC, ReactElement } from "react";
import { PaymentSuccessModelStruct } from "../../models/payment-success.model";
import { CardContent } from "@mui/joy";
import { PriceHookModelStruct } from "../../models/price.model";
import { numberPointerFormat } from "../../utils/number-pointer.util";

export const PaymentSuccessComponent: FC<{ status: PaymentSuccessModelStruct, price: PriceHookModelStruct }> = ({ status, price }: { status: PaymentSuccessModelStruct, price: PriceHookModelStruct }): ReactElement => {
    return (
        <CardContent sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3
        }}>
            <h4>Total: {numberPointerFormat(price.price)}</h4>
            <h4>Adicional: {numberPointerFormat(price.additional)}</h4>
            <h4>ID compra: {status.id}</h4>
            <h4>Detalles: {status.detail}</h4>
            <h4>Estado: {status.status}</h4>
        </CardContent>
    );
};

export default PaymentSuccessComponent;