import { FieldValidationModelStruct } from "../models/field.model";

export const fieldName: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 3, message: "El campo requiere 3 carácteres" }},
    { maxLength: { value: 75, message: "El campo no debe superar los 75 carácteres" }},
    { pattern: { value: /^[^\s][a-zA-Z\s]+[^\s]$/, message: "El campo contiene carácteres especiales" }}
];

export const fieldLastname: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 3, message: "El campo requiere 3 carácteres" }},
    { maxLength: { value: 75, message: "El campo no debe superar los 75 carácteres" }},
    { pattern: { value: /^[^\s][a-zA-Z\s]+[^\s]$/, message: "El campo contiene carácteres especiales" }}
];



export const fieldEmail: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 3, message: "El campo requiere 3 carácteres" }},
    { maxLength: { value: 75, message: "El campo no debe superar los 75 carácteres" }}
];

export const fieldPassword: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
    { minLength: { value: 5, message: "El campo requiere 5 carácteres" }},
];

export const fieldRequired: FieldValidationModelStruct[] = [
    { required: { value: true, message: "El campo es requerido" }},
];