import { pageSize } from "../../utils/const";
import { api } from "../api/api";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, filters = null }) => ({
        url: "/products",
        method: "GET",
        params: `${
          filters ? filters + "&" : "?"
        }sort=updatedAt:desc&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`, //high level: populate[location][populate]=*
      }),
      // providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
