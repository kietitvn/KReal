import { api } from "../api/api";

export const globalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGlobal: builder.query({
      query: () => ({
        url: "/global",
        method: "GET",
        params: "?populate=*", //high level: populate[feature][populate]=*
      }),
      providesTags: ["Global"],
    }),
  }),
});

export const { useGetGlobalQuery } = globalApi;
