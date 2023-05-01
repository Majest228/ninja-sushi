import { FC, PropsWithChildren } from "react"
import { TypeComponentAuthFields } from "./auth.provider.types"
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/router"

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const { user } = useAuth()
  const router = useRouter()

  const Children = () => <>{children}</>

  if (user && isOnlyUser) return <Children />

  router.pathname !== "/" && router.replace("/")

  return null
}

export default CheckRole
