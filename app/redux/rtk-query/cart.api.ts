import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"

export const cartApi = createApi({
  reducerPath: "api/cart",
  tagTypes: ["Cart", "Order"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({ body: data, url: "/cart/add", method: "POST" }),
      invalidatesTags: ["Cart"],
    }),
    getCartById: builder.query({
      query: () => ({ url: "/cart" }),
      providesTags: ["Cart"],
    }),
    incrementCartItem: builder.mutation({
      query: (data: QueryArg) => ({ body: data, url: "cart/increment", method: "PUT" }),
      invalidatesTags: ["Cart"],
    }),
    decrementCartItem: builder.mutation({
      query: (data: QueryArg) => ({ body: data, url: "cart/decrement", method: "PUT" }),
      invalidatesTags: ["Cart"],
    }),
    createOrderByCart: builder.mutation({
      query: () => ({ url: "order/add", method: "POST" }),
      invalidatesTags: ["Order", "Cart"],
    }),
    deleteById: builder.mutation({
      query: (data) => ({
        body: data,
        url: "cart/delete-by-id",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteAll: builder.mutation({
      query: (data) => ({
        body: data,
        url: "cart/delete-all",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
})

export const {
  useGetCartByIdQuery,
  useLazyGetCartByIdQuery,
  useAddToCartMutation,
  useIncrementCartItemMutation,
  useDecrementCartItemMutation,
  useCreateOrderByCartMutation,
  useDeleteByIdMutation,
  useDeleteAllMutation,
} = cartApi
