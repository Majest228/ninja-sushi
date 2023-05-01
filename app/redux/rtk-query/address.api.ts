import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie"

export const addressApi = createApi({
  reducerPath: "api/address",
  tagTypes: ["Address"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAdreesForUser: builder.query({
      query: () => "/address/get-for-user",
    }),
    createAddress: builder.mutation({
      query: (data) => ({ body: data, url: "/address/create", method: "POST" }),
    }),
    deleteAddress: builder.mutation({
      query: (id) => ({ url: `/address/delete/${id}`, method: "DELETE" }),
    }),
  }),
})

export const { useGetAdreesForUserQuery, useCreateAddressMutation, useDeleteAddressMutation } =
  addressApi
