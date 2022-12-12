import { api } from "../api/api";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: "?populate=*",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
