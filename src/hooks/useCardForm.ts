import { UseFormReturn, FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { CustomFormModelStruct } from "../models/form.model";
import { FuncModelStruct } from "../models/function.model";
import { useCardTokenMutation } from "../redux/api/card.api";
import { CardDTO } from "../dto/card.dto";
import { CardTokenResponseModelStruct, IdentificationTypesResponseModelStruct, InstallmentsResponseModelStruct, MercadopagoModelStruct } from "../models/mercadopago.model";
import { useMercadopago } from "./useMercadopago";
import { CardFormModelStruct, CardHookModelStruct } from "../models/card-form.model";
import { useEffect, useState } from "react";
import { PriceHookModelStruct } from "../models/price.model";
import { usePrice } from "./usePrice";
import { HookModelStruct } from "../models/hook.model";


export const useCardForm: FuncModelStruct<CustomFormModelStruct & CardHookModelStruct> = (): CustomFormModelStruct & CardHookModelStruct => {
    const { register, handleSubmit, setValue, setError, clearErrors, formState: { errors } }: UseFormReturn<FieldValues> = useForm();

    const { createCardToken, getInstallments, getIdentificationTypes }: MercadopagoModelStruct = useMercadopago();
    const [payment, result]: any = useCardTokenMutation();

    const [card, setCard]: HookModelStruct<string> = useState<string>("");
    const [installments, setInstallments]: HookModelStruct<InstallmentsResponseModelStruct[]> = useState<InstallmentsResponseModelStruct[]>([]);
    const [identifications, setIdentifications]: HookModelStruct<IdentificationTypesResponseModelStruct[]> = useState<IdentificationTypesResponseModelStruct[]>([]);

    const { price, additional }: PriceHookModelStruct = usePrice();

    useEffect((): void  => {
        const cardFunction: FuncModelStruct<Promise<void>> = async (): Promise<void> => {
            const arrayDigits: string[] = card.split(" ");

            if (arrayDigits.length < 4) {
                setInstallments([]);
                setIdentifications([]);
                 return;
            }
            
            const result: InstallmentsResponseModelStruct[] = await getInstallments({
                amount: (price + additional).toString(),
                bin: arrayDigits[0] + arrayDigits[1]
            });
            
            setInstallments(result);
    
            const identification: IdentificationTypesResponseModelStruct[] = await getIdentificationTypes();
            setIdentifications(identification);
        };

        cardFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [card, price]);

    const onSubmit: SubmitHandler<FieldValues> = async (fields: FieldValues): Promise<void> => {
        const { 
            cardNumber, 
            expirationDate,
            securityCode, 
            cardholderName,
            cardholderEmail,
            installments, 
            paymentMethodId,
            identificationNumber,
            identificationType,
            issuerId
         }: CardFormModelStruct = fields as CardFormModelStruct;

        const number: string = cardNumber.replace(/\s/g, "");
        const expire: string[] = expirationDate.split("/");
        
        const expirationMonth: string = expire[0];
        const expirationYear: string = expire[1];
        
        const result: CardTokenResponseModelStruct = await createCardToken({
            cardNumber: number,
            cardExpirationMonth: expirationMonth,
            cardExpirationYear: expirationYear,
            securityCode: securityCode,
            cardholderName: cardholderName,
            identificationNumber: identificationNumber,
            identificationType: identificationType
        });

        const card: CardDTO = {
            amount: price + additional,
            cardHolderName: result.cardholder.name,
            cardHolderEmail: cardholderEmail,
            installments: installments,
            identificationNumber: result.cardholder.identification.number,
            identificationType: identificationType,
            merchantAccountId: "",
            paymentMethodId: paymentMethodId,
            token: result.id,
            proccessingMode: "aggregator",
            issuerId: issuerId
        };

        payment(card);
    };

    return {
        register,
        onSubmit,
        handleSubmit,
        setValue,
        setError,
        clearErrors,
        setCard,
        errors,
        result,
        additional,
        identifications,
        installments,
        price
    };
};