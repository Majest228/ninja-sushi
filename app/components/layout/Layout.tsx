import { ILayout } from "@/app/components/layout/layout.interface"
import Footer from "@/app/components/layout/Footer/Footer"
import Header from "@/app/components/layout/Header/Header"
import styles from "./Layout.module.scss"
import ArrowGreenIco from "@/app/components/ui/ArrowGren"
import React, { useRef, useState } from "react"
import useOutsideClick from "@/app/hooks/useOutsideClick"

const Layout = ({ children }: ILayout): JSX.Element => {
  const [isShow, setIsShow] = useState(false)
  const outside = useRef<HTMLElement>(null)
  useOutsideClick(outside, () => {
    setIsShow(false)
    console.log("click")
  })
  return (
    <div className={styles.wrapper}>
      {isShow ? <div className={styles.overlay}></div> : ""}

      <Header outside={outside} isShow={isShow} setIsShow={setIsShow} />
      <main className={styles.main}>{children}</main>
      <div className={styles.desc}>
        <p>
          В Сети полно всевозможных сервисов учета, начиная от учета времени или
          калорий, заканчивая учетом финансов. А вот сервиса учета инструментов
          до сих пор не было. Теперь – есть. Вообще, конечно, идея учета
          рабочего инструмента, расходных материалов и комплект... Теперь –
          есть.
        </p>
        <button>
          <span>Читать больше</span> <ArrowGreenIco />
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
