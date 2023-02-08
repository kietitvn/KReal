import { api } from "../api/api";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: "?populate=*", //high level: populate[location][populate]=*
      }),
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
