import { api } from "../api/api";

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
        params: "?populate=*",
      }),
      providesTags: ['Category'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
