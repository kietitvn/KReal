import { api } from "../api/api";

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
        params: "?populate=*",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
