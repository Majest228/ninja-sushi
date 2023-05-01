import dynamic from "next/dynamic"
import { FC, PropsWithChildren, useEffect } from "react"
import { TypeComponentAuthFields } from "./auth.provider.types"
import { useAuth } from "@/app/hooks/useAuth"
import { useActions } from "@/app/hooks/useActions"
import { useRouter } from "next/router"
import { useGetAccessToken } from "@/app/hooks/useGetAccessToken"
import Cookies from "js-cookie"
import { logout } from "@/app/redux/auth/auth.action"

const DynamicCheckRole = dynamic(() => import("./CheckRole"), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  const { user } = useAuth()
  const { checkAuth, logout } = useActions()

  const { pathname } = useRouter()

  useEffect(() => {
    const accessToken = useGetAccessToken()

    if (accessToken) checkAuth()
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken")
    if (!refreshToken && user) logout()
  }, [pathname])
  return !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  )
}

export default AuthProvider
