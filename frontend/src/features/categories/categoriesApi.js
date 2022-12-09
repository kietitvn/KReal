import { api } from "../api/api";

export const categoriesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: "/categories",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApi;
