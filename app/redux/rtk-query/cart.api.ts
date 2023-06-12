import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"

export const cartApi = createApi({
  reducerPath: "api/cart",
  tagTypes: ["Cart"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    createFavorite: builder.mutation({
      query: (data) => ({ body: data, url: "/cart/add", method: "POST" }),
      invalidatesTags: ["Cart"],
    }),
    getCartById: builder.query({
      query: () => ({ url: "/cart" }),
      providesTags: ["Cart"],
    }),
  }),
})

export const { useGetCartByIdQuery, useCreateFavoriteMutation } = cartApi
