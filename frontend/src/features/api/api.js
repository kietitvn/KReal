import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseUrl + "/api", //  "http://localhost:1337/api",
  }),
  endpoints: (builder) => ({}),
});
