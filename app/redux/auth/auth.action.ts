import { useSaveToStorage } from '@/app/hooks/useSaveToStorage'
import { AuthService } from "@/app/services/auth.service"
import { IAuth, IAuthForm } from "@/app/types/auth.interface"
import { createAsyncThunk } from "@reduxjs/toolkit"
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
