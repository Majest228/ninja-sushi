import Layout from "@/app/components/layout/Layout"
import AuthProvider from "@/app/providers/auth-provider/AuthProvider"
import { TypeComponentAuthFields } from "@/app/providers/auth-provider/auth.provider.types"
import { store } from "@/app/redux/store"
import "@/styles/globals.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  )
}
