import { api } from "../api/api";

export const globalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGlobal: builder.query({
      query: () => ({
        url: "/global",
        method: "GET",
        params: "?populate[0]=Favicon&populate[1]=DefaultSeo&populate[2]=DefaultSeo.ShareImage",
      }),
      // providesTags: ["Global"],
    }),
  }),
});

export const { useGetGlobalQuery } = globalApi;
