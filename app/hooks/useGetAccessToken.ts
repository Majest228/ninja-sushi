import Cookies from "js-cookie"

export const useGetAccessToken = () => {
  const accessToken = Cookies.get("accessToken")

  return accessToken || null
}
