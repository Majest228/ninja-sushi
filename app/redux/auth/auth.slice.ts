import { useGetStoreLocal } from '@/app/hooks/useGetStoreLocal'
import { createSlice } from "@reduxjs/toolkit"
import { register } from './auth.action'

const initialState = {
	user: useGetStoreLocal("user"),
	isLoading: true,
}

export const authSlice = createSlice({
	name: "auth", initialState, reducers: {}, extraReducers: (builder) => {
		builder.addCase(register.pending, (state) => {
			state.isLoading = true
		})
			.addCase(register.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
	},
})

export const authReducer = authSlice.reducer