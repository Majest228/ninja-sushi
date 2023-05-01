import { combineReducers } from "redux"
import { authReducer } from "./auth/auth.slice"
import { addressApi } from "./rtk-query/address.api"
import { userApi } from "./rtk-query/profile.api"

export const rootReducer = combineReducers({
  auth: authReducer,
  [addressApi.reducerPath]: addressApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
})
