import { pageSize } from "../../utils/const";
import { api } from "../api/api";
export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, featured = false}) => ({
        url: "/products",
        method: "GET",
        params: `${featured? "filters[feature_ids][id][$gte]=1&": "?"}sort=id:desc&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`, //high level: populate[location][populate]=*
      }),
      // providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
