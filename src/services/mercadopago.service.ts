import { loadMercadoPago } from "@mercadopago/sdk-js";

const PUBLIC_KEY: string = "";
export const mp: unknown = await loadMercadoPago();
export const mercadopago: any = new (<any> window).MercadoPago(PUBLIC_KEY, {
    locale: "es-US"
});