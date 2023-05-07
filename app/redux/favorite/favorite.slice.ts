import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      let isCheck = false
      state.favorite.forEach((item: any) => {
        if (item.id == action.payload.id) {
          isCheck = true
        }
      })
      if (isCheck) {
        state.favorite = state.favorite.filter((item: any) => item.id !== action.payload.id)
      } else {
        state.favorite.push(action.payload)
      }
    },
  },
})

export const { toggleFavorite } = favoriteSlice.actions

export const favoriteReducer = favoriteSlice.reducer
