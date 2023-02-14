import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseUrl + "/api",
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  //overrideExisting: true,
  tagTypes: ["Category", "Product", "Feature", "Location"],
  endpoints: (builder) => ({}),
});
