import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ['Product', 'Category'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseUrl + "/api", //  "http://localhost:1337/api",
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({}),
});
