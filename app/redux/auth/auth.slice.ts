import { useGetStoreLocal } from "@/app/hooks/useGetStoreLocal"
import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./auth.action"
import Cookies from "js-cookie"
import { useCreateCookies } from "@/app/hooks/useCreateCookies"

const initialState = {
  user: useGetStoreLocal("user"),
  isLoading: true,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = true
        state.user = payload.user
        useCreateCookies(payload.accessToken, payload.refreshToken)
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
  },
})

export const authReducer = authSlice.reducer
