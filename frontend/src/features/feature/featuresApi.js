import { api } from "../api/api";

export const featuresApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeatures: builder.query({
      query: () => ({
        url: "/features",
        method: "GET",
        params: "?populate=*", //high level: populate[feature][populate]=*
      }),
      //providesTags: ['Feature'],
    }),
  }),
});

export const { useGetFeaturesQuery } = featuresApi;
