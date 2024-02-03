
export type MercadopagoModelStruct = {
    createCardToken: (props: CardTokenModelStruct) => Promise<CardTokenResponseModelStruct>,
    getPaymentMethods: (props: PaymentMethodsModelStruct) => Promise<PaymentMethodsResponseModelStruct>,
    getInstallments: (props: InstallmentsModelStruct) => Promise<InstallmentsResponseModelStruct[]>,
    getIdentificationTypes: () => Promise<IdentificationTypesResponseModelStruct[]>,
    getIssuers: (props: IssuersModelStruct) => Promise<IssuersResponseModelStruct[]>;
};

export type CardTokenModelStruct = {
    cardNumber: string,
    cardholderName: string,
    securityCode: string,
    cardExpirationMonth?: string,
    cardExpirationYear?: string,
    identificationType?: string, 
    identificationNumber?: string, 
    cardId?: string
};

export type CardTokenResponseModelStruct = {
    id: string,
    public_key: string,
    first_six_digits: string,
    expiration_month: number,
    expiration_year: number,
    last_four_digits: string,
    cardholder: {
        identification: {
            number: string,
            type: string
        },
        name: string
    },
    status: string,
    date_created: string,
    date_last_updated: string,
    date_due: string,
    luhn_validation: boolean,
    live_mode: boolean,
    require_esc: boolean,
    card_number_length: number,
    security_code_length: number
};

export type IssuersModelStruct = {
    paymentMethodId: string,
    bin: string
}

export type PaymentMethodsModelStruct = {
    bin: string,
    proccessingMode?: "aggregator" | "gateway"
};  

export type InstallmentsModelStruct = {
    amount: string,
    bin: string,
    locale?: string,
    processingMode?: "aggregator" | "always"
}

export type InstallmentsResponseModelStruct = {
    payment_method_id: string,
    payment_type_id: string,
    issuer: {
        id: string,
        name: string,
        secure_thumbnail: string,
        thumbnail: string
    },
    processing_mode: string,
    merchant_account_id: string | null,
    payer_costs: PayerCostsModelStruct[],
    agreements: string | null
};

export type PayerCostsModelStruct = {
    installments: number,
    installment_rate: number,
    discount_rate: number,
    labels: string[],
    installment_rate_collector: string[],
    min_allowed_amount: number,
    max_allowed_amount: number,
    recommended_message: string,
    installment_amount: number,
    total_amount: number,
    payment_method_option_id: string
}
export type PaymentMethodsResponseModelStruct = {
    paging: {
        total: number,
        limit: number,
        offset: number,
    },
    results: [{
        secure_thumbnail: string,
        min_accreditation_days: number,
        max_accreditation_days: number,
        id: string,
        payment_type_id: string,
        accreditation_time: number,
        thumbnail: string,
        marketplace: string,
        deferred_capture: string,
        labels: string[],
        name: string,
        site_id: string,
        processing_mode: string,
        additional_info_needed: string[],
        status: string,
        settings: [{
            security_code: {
                mode: string,
                card_location: string,
                length: number
            },
            card_number: {
                length: number,
                validation: string
            },
            bin: {
                pattern: string,
                installments_pattern: string,
                exclusion_pattern: string,
            }
        }],
        issuer: {
            default: boolean,
            name: string,
            id: number
        },
        payer_costs: PayerCostsModelStruct[]
    }]
};

export type IdentificationTypesResponseModelStruct = {
    id: string,
    name: string,
    type: string,
    min_length: number,
    max_length: number
};

export type IssuersResponseModelStruct = {
    id: string,
    name: string,
    secure_thumbnail: string,
    thumbnail: string,
    processing_mode: string,
    merchant_account_id: string | null,
    status: string
};