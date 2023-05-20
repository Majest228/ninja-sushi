import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"

export const favoriteApi = createApi({
  reducerPath: "api/favorite",
  tagTypes: ["Favorite"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    createFavorite: builder.mutation({
      query: (data) => ({ body: data, url: "/favorite/create", method: "POST" }),
      invalidatesTags: ["Favorite"],
    }),
    getFavoriteById: builder.query({
      query: () => ({ url: "/favorite/by-id" }),
      providesTags: ["Favorite"],
    }),
  }),
})

export const { useCreateFavoriteMutation, useGetFavoriteByIdQuery } = favoriteApi
