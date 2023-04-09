import Footer from "@/app/components/layout/Footer/Footer"
import Header from "@/app/components/layout/Header/Header"
import { ILayout } from "@/app/components/layout/layout.interface"
import ArrowGreenIco from "@/app/components/ui/ArrowGren"
import useOutsideClick from "@/app/hooks/useOutsideClick"
import { useEffect, useRef, useState } from "react"
import AuthModal from "../ui/components/auth-modal/AuthModal"
import styles from "./Layout.module.scss"

const Layout = ({ children }: ILayout): JSX.Element => {
  const [isShow, setIsShow] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const outside = useRef<HTMLElement>(null)
  useOutsideClick(outside, () => {
    setIsShow(false)
    console.log("click")
  })

  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = 'hidden'
      document.body.style.top = `-${window.scrollY}px`;
    }
    else {
      document.body.style.overflow = "";
      window.onscroll = () => { window.scroll(); };
    }
  }, [isShowModal])
  
  return (
    <div className={styles.wrapper}>
      {isShow ? <div className={styles.overlay}></div> : ""}
      {isShowModal ? <div className={styles.overlay__modal}></div> : ""}
      {isShowModal ? <AuthModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} /> : ""}
      <Header outside={outside} isShow={isShow} setIsShowModal={setIsShowModal} isShowModal={isShowModal} setIsShow={setIsShow} />
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
