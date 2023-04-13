import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./root-reducer"

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: true,
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<RootStore["getState"]>

export type AppDipsatch = typeof store.dispatch

export default store
