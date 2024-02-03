import { Button, Card, CardActions, CardContent, CircularProgress, Divider, Option } from "@mui/joy";
import { FC, MouseEventHandler, ReactElement, SyntheticEvent, useEffect } from "react";
import { CreditCard, CreditCardTwoTone, InfoOutlined } from "@mui/icons-material";
import { fieldCarNumber, fieldExpirationDate, fieldIdentificationNumber, fieldSecurityCode } from "../../utils/card-validator.util";
import FieldComponent from "../form/field/field.component";
import FormComponent from "../form/form.component";
import TitleComponent from "../title/title.component";
import { CustomFormModelStruct } from "../../models/form.model";
import { cardExpireFormat, cardNumberFormat } from "../../utils/card.util";
import { FuncModelStruct } from "../../models/function.model";
import { IdentificationTypesResponseModelStruct, InstallmentsResponseModelStruct, PayerCostsModelStruct } from "../../models/mercadopago.model";
import SelectComponent from "../form/select/select.component";
import { useCardForm } from "../../hooks/useCardForm";
import { CardHookModelStruct } from "../../models/card-form.model";
import { SnackbarHookModelStruct } from "../../models/snackbar.model";
import { useSnackbar } from "../../hooks/useSnackbar";
import { fieldEmail, fieldName, fieldRequired } from "../../utils/form-validator.util";
import PaymentSuccessComponent from "../payment-success/payment-success.component";

const CreditCardComponent: FC<{ onClick?: MouseEventHandler }> = ({ onClick }: { onClick?: MouseEventHandler }): ReactElement => {

    const { handleSubmit, onSubmit, register, errors, setValue, result, setCard, identifications, installments, price, additional }: CustomFormModelStruct & CardHookModelStruct = useCardForm();

    const { snackbarSuccess, snackbarError }: SnackbarHookModelStruct = useSnackbar();

    useEffect((): void => {

        if (result.isError) {
            snackbarError("Ocurrió un error en el pago");
            return;
        }
        
        if (result.isSuccess) {
            snackbarSuccess("El pago se realizó correctamente");
        }
    }, [result]);
    

    const cardNumberController: FuncModelStruct<SyntheticEvent<HTMLInputElement, Event>, void> = async (event: SyntheticEvent<HTMLInputElement, Event>): Promise<void> => {
        if (!event.currentTarget.value.length) {
            return;
        }

        event.currentTarget.value = cardNumberFormat(event.currentTarget.value);
        setCard(event.currentTarget.value);
    };

    if (result.isSuccess) {
        return (
            <Card sx={{
                width: 400,
                height: "100%",
                position: "sticky",
                top: 150,
                bottom: 150,
            }}>
                <TitleComponent startDecorator={<CreditCard/>} level="title-lg" title="Detalles de tu compra"/>
                <Divider/>
                <PaymentSuccessComponent status={result.data} price={{ price: price, additional: additional }}/>
            </Card>
        );
    }

    return (
        <Card sx={{
            width: 400,
            height: "100%",
            position: "sticky",
            top: 150,
            bottom: 150,
        }}>
            <TitleComponent startDecorator={<CreditCard/>} level="title-lg" title="Pagar"/>
            
            <CardContent>
                <FormComponent style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(80px, auto))",
                    gridGap: "10px 20px",
                }} onSubmit={handleSubmit(onSubmit)}>
                    <FieldComponent 
                        id="cardNumber"
                        title="Número de tarjeta"
                        name="cardNumber"
                        errors={errors} 
                        validators={fieldCarNumber}
                        register={register}
                        placeholder="5031 7557 3453 0604"
                        // value={card}
                        onKeyUp={cardNumberController}
                        sx={{
                            gridColumn: "1/-1"
                        }}
                        endDecorator={<CreditCard/>}
                        // placeholder="1234 5678 1234 5678"
                    />

                    <FieldComponent 
                        title="Expira"
                        name="expirationDate"
                        errors={errors} 
                        validators={fieldExpirationDate}
                        register={register}
                        onKeyUp={(event: SyntheticEvent<HTMLInputElement>): void => {
                            event.currentTarget.value = cardExpireFormat(event.currentTarget.value);
                        }}
                        sx={{
                            gridColumn: "1/-3"
                        }}
                        endDecorator={<CreditCardTwoTone/>}
                        // placeholder="11/25"
                    />

                    <FieldComponent 
                        title="Código de seguridad"
                        name="securityCode" 
                        type="password"
                        placeholder="***"
                        errors={errors} 
                        validators={fieldSecurityCode}
                        register={register}
                        endDecorator={<InfoOutlined/>}
                        // placeholder="123"
                    />

                    <FieldComponent 
                        title="Nombre completo"
                        placeholder="Cristian Moreno"
                        name="cardholderName" 
                        errors={errors} 
                        validators={fieldName}
                        register={register}
                        sx={{
                            gridColumn: "1/-1"
                        }}
                        // placeholder="Cristian Moreno"
                    />

                    <FieldComponent 
                        title="Correo electrónico"
                        name="cardholderEmail" 
                        type="email"
                        placeholder="email@hotmail.com"
                        errors={errors} 
                        validators={fieldEmail}
                        register={register}
                        sx={{
                            gridColumn: "1/-1"
                        }}
                        // placeholder="Cristian Moreno"
                    />

                    <FieldComponent 
                        title="N° de documento"
                        name="identificationNumber"
                        type="number" 
                        errors={errors} 
                        validators={fieldIdentificationNumber}
                        register={register}
                        placeholder="12345678"
                        // placeholder="12345678"
                    />

                    <SelectComponent
                        title="Tipo de documento"
                        name="identificationType"
                        validators={fieldRequired}
                        errors={errors} 
                        register={register}
                        disabled={(!identifications.length) ? true : false}
                        children={
                            identifications.map((identification: IdentificationTypesResponseModelStruct, index: number): ReactElement => {
                                return <Option key={index} value={identification.id}>{identification.name}</Option>;
                            })
                        } 
                    />

                    <SelectComponent
                        title="Medios de pago"
                        name="paymentMethodId"
                        validators={fieldRequired}
                        errors={errors} 
                        register={register}
                        disabled={(!installments.length) ? true : false}
                        children={
                            installments.map((installment: InstallmentsResponseModelStruct, index: number): ReactElement => {
                                return <Option onClick={(): void => setValue && setValue("issuerId", installment.issuer.id)} key={index} value={installment.payment_method_id}>{installment.issuer.name}</Option>;
                            })
                        } 
                        sx={{
                            gridColumn: "1/-1"
                        }}
                    />

                    <input type="hidden" {...register("issuerId")}/>

                    <SelectComponent
                        title="Métodos de pago"
                        name="installments"
                        validators={fieldRequired}
                        errors={errors} 
                        register={register}
                        disabled={(!installments.length) ? true : false}
                        children={
                            installments.map((installment: InstallmentsResponseModelStruct): ReactElement[] => {
                                return installment.payer_costs.map((payer: PayerCostsModelStruct, index: number): ReactElement => {
                                    return <Option key={index} value={payer.installments}>{payer.recommended_message}</Option>;
                                });
                            })
                        } 
                    />

                    <CardActions sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        gridColumn: "1/-1"
                    }}>
                        <Button onClick={onClick}>Volver atrás</Button>

                        {
                            (result.isLoading) ?
                                <Button disabled={true} startDecorator={<CircularProgress/>}>Pagar</Button>
                            :
                                <Button type="submit" startDecorator={<CreditCard/>}>Pagar</Button>
                        }
                    </CardActions>
                </FormComponent>
            </CardContent>
        </Card>
    );
};

export default CreditCardComponent;