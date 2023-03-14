import { ILayout } from "@/app/components/layout/layout.interface"
import Footer from "@/app/components/layout/Footer/Footer"
import Header from "@/app/components/layout/Header/Header"
import styles from "./Layout.module.scss"
import Navigation from "@/app/components/Navigation/Navigation"
import ArrowGreenIco from "@/app/components/ui/ArrowGren"
import React from "react"
const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div>{children}</div>
        <div className={styles.desc}>
          <p>
            В Сети полно всевозможных сервисов учета, начиная от учета времени
            или калорий, заканчивая учетом финансов. А вот сервиса учета
            инструментов до сих пор не было. Теперь – есть. Вообще, конечно,
            идея учета рабочего инструмента, расходных материалов и комплект...
            Теперь – есть.
          </p>
          <button>
            <span>Читать больше</span> <ArrowGreenIco />
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
