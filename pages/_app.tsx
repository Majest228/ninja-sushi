import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "@/app/components/layout/Layout"
import Header from "@/app/components/layout/Header/Header"
import React from "react"
import styles from "@/app/components/layout/Layout.module.scss"
import Footer from "@/app/components/layout/Footer/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
