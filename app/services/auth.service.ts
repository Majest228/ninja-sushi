import Cookies from "js-cookie"
import { axiosWithAuth, axiosWithoutAuth } from "../api/api"
import { IAuth } from "../types/auth.interface"
import { useSaveToStorage } from "../hooks/useSaveToStorage"

export const AuthService = {
  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken")

    const response = await axiosWithAuth.post("auth/login/access-token", { refreshToken })

    if (response.data.accessToken) useSaveToStorage(response.data)

    return response
  },
  async register(email: string, password: string, login: string) {
    const res = await axiosWithoutAuth.post<IAuth>("/auth/register", {
      email,
      password,
      login,
    })
    return res
  },
  async login(email: string, password: string) {
    const res = await axiosWithoutAuth.post<IAuth>("/auth/login", {
      email,
      password,
    })

    return res
  },
}
