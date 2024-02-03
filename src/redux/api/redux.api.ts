import { EndpointDefinitions, createApi } from "@reduxjs/toolkit/query/react";
import { http } from "../../services/http.service";

// eslint-disable-next-line @typescript-eslint/typedef
export const reduxApi = createApi({
    reducerPath: "reducerApi",
    baseQuery: http,
    endpoints: (): EndpointDefinitions => ({})
});