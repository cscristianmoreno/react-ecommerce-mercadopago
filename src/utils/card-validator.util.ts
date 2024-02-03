import { FieldValidationModelStruct } from "../models/field.model";

export const fieldCarNumber: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 18, message: "El campo requiere 18 carácteres" }},
    { maxLength: { value: 20, message: "El campo no debe superar los 19 carácteres" }}
];

export const fieldExpirationDate: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { pattern: { value: /^(0[1-9]|1[0-2])\/(2[4-9]{1}|[3-9][0-9]{1})$/g,  message: "El año debe ser mayor o igual al actual"} },
];

export const fieldSecurityCode: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 3, message: "El campo requiere 3 carácteres" }},
    { maxLength: { value: 3, message: "El campo no debe superar los 3 carácteres" }}
];

export const fieldCardHolderName: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 3, message: "El campo requiere 3 carácteres" }},
    { maxLength: { value: 30, message: "El campo no debe superar los 30 carácteres" }}
];

export const fieldIdentificationNumber: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 8, message: "El campo requiere 8 carácteres" }},
    { maxLength: { value: 8, message: "El campo no debe superar los 8 carácteres" }}
];