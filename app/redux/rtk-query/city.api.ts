import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"

export const cityApi = createApi({
  reducerPath: "api/city",
  tagTypes: ["City"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getRegions: builder.query({
      query: () => "/city/get-regions",
      providesTags: ["City"],
    }),
    getCities: builder.query({
      query: (id: number) => `/city/get-cities/${id}`,
    }),
  }),
})

export const { useGetRegionsQuery, useGetCitiesQuery } = cityApi
