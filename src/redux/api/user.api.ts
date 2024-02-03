import { BaseQueryFn, EndpointBuilder } from "@reduxjs/toolkit/query/react";
import { reduxApi } from "./redux.api";
import { User } from "../../entity/user.entity";
import { FieldValues } from "react-hook-form";
import { AxiosRequestConfig } from "axios";
import { QueryReturnValue } from "../../models/redux.model";
import { UsersDAO } from "../../dao/users.dao";
import { UsersDTO } from "../../dto/users.dto";

// eslint-disable-next-line @typescript-eslint/typedef
export const userApi = reduxApi.injectEndpoints({
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
        register: build.mutation({
            query: (user: User): AxiosRequestConfig => {
                return {
                    url: "/users/create",
                    method: "POST",
                    data: user
                };
            }
        }),
        login: build.mutation({
            query: (field: FieldValues): AxiosRequestConfig => {

                return {
                    url: "/users/login",
                    method: "POST",
                    data: field
                };
            }
        }),
        authentication: build.query<UsersDTO, void>({
            queryFn: async (): Promise<QueryReturnValue<UsersDTO>> => {
                const usersDAO: UsersDAO<UsersDTO> = new UsersDAO<UsersDTO>();
                const response: UsersDTO = await usersDAO.authentication();
                
                return { 
                    data: response
                };
            },
            keepUnusedDataFor: 0
        })
    })
});

// eslint-disable-next-line @typescript-eslint/typedef
export const { useRegisterMutation, useLoginMutation, useAuthenticationQuery } = userApi;