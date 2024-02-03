/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { reduxApi } from "./redux.api";
import { BaseQueryFn, EndpointBuilder } from "@reduxjs/toolkit/query";
import { QueryReturnValue } from "../../models/redux.model";
import { ProductsDAO } from "../../dao/products.dao";
import { ProductsDTO } from "../../dto/products.dto";
import { ResultModelStruct } from "../../models/result.model";

export const productApi = reduxApi.injectEndpoints({
    endpoints: (build: EndpointBuilder<BaseQueryFn, "never", "reducerApi">) => ({
        products: build.query({
            queryFn: async (page: number): Promise<QueryReturnValue<ResultModelStruct<ProductsDTO[]>>> => {
                const repository: ProductsDAO<ResultModelStruct<ProductsDTO[]>> = new ProductsDAO<ResultModelStruct<ProductsDTO[]>>();
                const result: ResultModelStruct<ProductsDTO[]> = await repository.findAll(page);
                
                return {
                    data: result
                };
            },
            serializeQueryArgs: ({ endpointName } ): string  => {
                return endpointName;
            },
            merge: (currentCacheData: ResultModelStruct<ProductsDTO[]>, responseData: ResultModelStruct<ProductsDTO[]>): void => {

                if (currentCacheData.number === responseData.number) {
                    return;
                }

                const { content } = responseData;
                currentCacheData.number = responseData.number;
                currentCacheData.content.push(...content);
            }
        }),
        payment: build.mutation<string, ProductsDTO[]>({
            queryFn: async (products: ProductsDTO[]): Promise<QueryReturnValue<string>> => {
                const repository: ProductsDAO<ProductsDTO> = new ProductsDAO<ProductsDTO>();
                const result: string = await repository.payment(products);

                return {
                    data: result
                };
            }
        })
    })
});

export const { useProductsQuery, usePaymentMutation } = productApi;