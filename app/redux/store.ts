import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./root-reducer"
import { addressApi } from "./rtk-query/address.api"
import { userApi } from "./rtk-query/profile.api"
import { favoriteApi } from "./rtk-query/favorite.api"
import { cityApi } from "./rtk-query/city.api"

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        addressApi.middleware,
        userApi.middleware,
        favoriteApi.middleware,
        cityApi.middleware
      ),
    devTools: true,
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<RootStore["getState"]>

export type AppDipsatch = typeof store.dispatch

export default store
