import { Dispatch, SetStateAction } from "react";
import { InstallmentsResponseModelStruct, IdentificationTypesResponseModelStruct } from "./mercadopago.model";

export type CardFormModelStruct = {
    cardNumber: string,
    expirationDate: string,
    securityCode: string,
    cardholderName: string,
    cardholderEmail: string,
    installments: number,
    paymentMethodId: string,
    identificationNumber: string,
    identificationType: string,
    issuerId: string 
};

export type CardHookModelStruct = {
    setCard: Dispatch<SetStateAction<string>>,
    installments: InstallmentsResponseModelStruct[],
    identifications: IdentificationTypesResponseModelStruct[],
    price: number,
    additional: number
};