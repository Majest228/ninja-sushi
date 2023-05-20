import { combineReducers } from "redux"
import { authReducer } from "./auth/auth.slice"
import { addressApi } from "./rtk-query/address.api"
import { userApi } from "./rtk-query/profile.api"
import { favoriteReducer } from "./favorite/favorite.slice"
import { favoriteApi } from "./rtk-query/favorite.api"
import { cityApi } from "./rtk-query/city.api"

export const rootReducer = combineReducers({
  auth: authReducer,
  favorite: favoriteReducer,
  [addressApi.reducerPath]: addressApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [favoriteApi.reducerPath]: favoriteApi.reducer,
  [cityApi.reducerPath]: cityApi.reducer,
})
