import { api } from "../api/api";

export const globalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGlobal: builder.query({
      query: () => ({
        url: "/global",
        method: "GET",
        params: "?populate[0]=favicon&populate[1]=defaultSeo&populate[2]=defaultSeo.sharedImage",
      }),
      providesTags: ["Global"],
    }),
  }),
});

export const { useGetGlobalQuery } = globalApi;
