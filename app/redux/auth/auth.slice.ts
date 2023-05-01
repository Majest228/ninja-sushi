import { createSlice } from "@reduxjs/toolkit"
import { checkAuth, login, logout, register } from "./auth.action"

const initialState = {
  user:
    typeof window !== "undefined"
      ? localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null
      : null,
  isLoading: false,
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
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
  },
})

export const authReducer = authSlice.reducer
