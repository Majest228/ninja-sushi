import Cookies from "js-cookie"

export const useCreateCookies = (accessToken, refreshToken) => {
  Cookies.set("accessToken", accessToken)
  Cookies.set("refreshToken", refreshToken)
}
