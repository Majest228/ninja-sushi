import { ILayout } from "@/app/components/layout/layout.interface"
import Footer from "@/app/components/layout/Footer/Footer"
import Header from "@/app/components/layout/Header/Header"
import styles from "./Layout.module.scss"
import Navigation from "@/app/components/Navigation/Navigation"
const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
