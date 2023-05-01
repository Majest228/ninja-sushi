import { useAppDispatch } from "@/app/hooks/useAppDispatch"
import { useSaveToStorage } from "@/app/hooks/useSaveToStorage"
import { removeTokensStorage } from "@/app/hooks/userRemoveCookies"
import { AuthService } from "@/app/services/auth.service"
import { IAuth, IAuthForm } from "@/app/types/auth.interface"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
export const register: any = createAsyncThunk<IAuth, IAuthForm>(
  "auth/register",
  async ({ email, password, login }: IAuth) => {
    try {
      const response = await AuthService.register(email, password, login)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
)

export const logout = createAsyncThunk("auth/logout", async () => {
  removeTokensStorage()
})

export const checkAuth = createAsyncThunk("auth/check-auth", async (_) => {
  try {
    const response = await AuthService.getNewTokens()

    return response.data
  } catch (error) {
    const dispatch = useAppDispatch()
    dispatch(logout())
  }
})

export const login: any = createAsyncThunk<IAuth, IAuthForm>(
  "auth/login",
  async ({ email, password }: IAuth) => {
    try {
      const response = await AuthService.login(email, password)
      useSaveToStorage(response.data)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
)
