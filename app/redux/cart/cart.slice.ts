import { createSlice } from "@reduxjs/toolkit"
import { favoriteApi } from "@/app/redux/rtk-query/favorite.api"

const initialState = {
  isShowCart: false,
}

export const cartSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleSwitchModal(state, action) {
      state.isShowCart = !state.isShowCart
    },
  },
})

export const { toggleSwitchModal } = cartSlice.actions
export const cartReducer = cartSlice.reducer
