import { FuncModelStruct } from "../models/function.model";
import { CardTokenModelStruct, PaymentMethodsModelStruct, InstallmentsModelStruct, MercadopagoModelStruct, InstallmentsResponseModelStruct, PaymentMethodsResponseModelStruct, CardTokenResponseModelStruct, IdentificationTypesResponseModelStruct, IssuersModelStruct, IssuersResponseModelStruct } from "../models/mercadopago.model";
import { mercadopago } from "../services/mercadopago.service";

export const useMercadopago: FuncModelStruct<MercadopagoModelStruct> = (): MercadopagoModelStruct => {

    const createCardToken: FuncModelStruct<CardTokenModelStruct, Promise<CardTokenResponseModelStruct>> = async (props: CardTokenModelStruct): Promise<CardTokenResponseModelStruct> => {
        return await mercadopago.createCardToken(props);
    };
    const getPaymentMethods: FuncModelStruct<PaymentMethodsModelStruct, Promise<PaymentMethodsResponseModelStruct>> = async (props: PaymentMethodsModelStruct): Promise<PaymentMethodsResponseModelStruct> => {
        return mercadopago.getPaymentMethods(props);
    };

    const getInstallments: FuncModelStruct<InstallmentsModelStruct, Promise<InstallmentsResponseModelStruct[]>> = async (props: InstallmentsModelStruct): Promise<InstallmentsResponseModelStruct[]> => {
        return mercadopago.getInstallments(props);
    };

    const getIdentificationTypes: FuncModelStruct<void, Promise<IdentificationTypesResponseModelStruct[]>> = async (): Promise<IdentificationTypesResponseModelStruct[]> => {
        return await mercadopago.getIdentificationTypes();
    };

    const getIssuers: FuncModelStruct<IssuersModelStruct, Promise<IssuersResponseModelStruct[]>> = async (props: IssuersModelStruct): Promise<IssuersResponseModelStruct[]> => {
        return await mercadopago.getIssuers(props);
    };

    return {
        createCardToken,
        getPaymentMethods,
        getInstallments,
        getIdentificationTypes,
        getIssuers
    };
};