import Layout from "@/app/components/layout/Layout"
import { store } from '@/app/redux/store'
import "@/styles/globals.scss"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from "next/app"
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  )
}
