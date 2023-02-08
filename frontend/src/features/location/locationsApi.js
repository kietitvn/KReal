import { api } from "../api/api";

export const locationsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => ({
        url: "/locations",
        method: "GET",
        params: "?populate=*", //high level: populate[location][populate]=*
      }),
      providesTags: ['Location'],
    }),
  }),
});

export const { useGetLocationsQuery } = locationsApi;
