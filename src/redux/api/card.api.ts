/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
import { BaseQueryFn, EndpointBuilder } from "@reduxjs/toolkit/query";
import { reduxApi } from "./redux.api";
import { AxiosRequestConfig } from "axios";
import { CardDTO } from "../../dto/card.dto";

export const cardApi = reduxApi.injectEndpoints({
    endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) =>({
        cardToken: build.mutation<void, CardDTO>({
            query: (card: CardDTO): AxiosRequestConfig => {
                
                return {
                    method: "POST",
                    url: "/cards/payment",
                    data: card
                };
            }
        })
    })
});

export const { useCardTokenMutation } = cardApi;