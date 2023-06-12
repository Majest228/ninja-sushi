import ArrowIco from "@/app/components/ui/Arrow"
import BasketIco from "@/app/components/ui/Basket"
import FavouriteIco from "@/app/components/ui/Favourite"
import NoticeIco from "@/app/components/ui/Notice"
import PhoneIco from "@/app/components/ui/Phone"
import UserIco from "@/app/components/ui/User"
import { useAuth } from "@/app/hooks/useAuth"
import Image from "next/image"
import Link from "next/link"
import country from "../../../assets/kz.png"
import logo from "../../../assets/logo.png"
import useravatar from "../../../assets/user.png"
import Cart from "../../ui/components/Cart/Cart"
import styles from "./Header.module.scss"
import { useAppSelector } from "@/app/hooks/useAppSelector"
import { useGetFavoriteByIdQuery } from "@/app/redux/rtk-query/favorite.api"
import classNames from "classnames"
import dynamic from "next/dynamic"
import { useState, useRef } from "react"
import { toast } from "react-toastify"

const CityModal = dynamic(() => import("../../ui/components/city-modal/CityModal"), { ssr: false })

const Header = ({ setIsShow, isShow, outside, setIsShowModal, isShowModal }: any) => {
  const { user } = useAuth()
  const { favorite: favoriteState } = useAppSelector((state) => state.favorite)
  const { data: favoriteFetch, isLoading: favoriteLoading } = useGetFavoriteByIdQuery("")
  const [isShowCityModal, setIsShowCityModal] = useState(false)
  const [copyText, setCopyText] = useState("")
  const textFromCopy = useRef()

  const copyToClick = (e) => {
    try {
      setCopyText(textFromCopy.current.innerText)
      toast.success(`Вы успешно копировали номер телефона - ${copyText}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    } catch (error) {}
  }

  console.log("copy - ", copyText)
  return (
    <header className={styles.header}>
      {isShowCityModal ? <div className={styles.header__overlay}></div> : ""}
      {isShowCityModal ? <CityModal setIsShowCityModal={setIsShowCityModal} /> : ""}

      <div className={styles.header__container}>
        <div className={styles.header__content}>
          {/*logo*/}
          <div className={styles.header__content__logo}>
            <Link href='/'>
              <Image src={logo} alt='logo' />
            </Link>
            <button className={styles.header__content__logo__button}>
              <ArrowIco />
            </button>
          </div>
          {/*menu*/}
          <div className={styles.header__content__menu}>
            <Image width={20} height={16} src={country} alt='country' />
            <button
              onClick={() => setIsShowCityModal(true)}
              className={styles.header__content__menu__country}
            >
              {typeof window !== "undefined" ? (
                localStorage.getItem("cityName") ? (
                  <p>{localStorage.getItem("cityName")}</p>
                ) : (
                  <p>Выберите город</p>
                )
              ) : (
                ""
              )}
            </button>
            <span>|</span>
            <p className={styles.header__content__menu__value}>RU</p>
          </div>
          {/*navigation*/}
          <nav className={styles.header__content__navigation}>
            <ul className={styles.header__content__navigation__list}>
              <li className={styles.header__content__navigation__list__item}>
                <Link href='/'>Главная</Link>
              </li>
              <li className={styles.header__content__navigation__list__item}>
                <Link href='/delivery'>Доставка</Link>
              </li>
              <li className={styles.header__content__navigation__list__item}>
                <Link href='/'>О нас</Link>
              </li>
              <li className={styles.header__content__navigation__list__item}>
                <Link href='/news'>Новости</Link>
              </li>
            </ul>
          </nav>
          {/*phone*/}
          <div className={styles.header__content__phone}>
            <PhoneIco />
            <p
              onClick={() => copyToClick()}
              ref={textFromCopy}
              className={styles.header__content__phone__number}
            >
              +7 778 425 99 76
            </p>
          </div>
          {/*buttons*/}
          <div className={styles.header__content__buttons}>
            <ul className={styles.header__content__buttons__list}>
              <button className={styles.header__content__buttons__list__notice}>
                <NoticeIco />
              </button>
              <Link
                href={"/profile/favorite"}
                className={styles.header__content__buttons__list__favourite}
              >
                <FavouriteIco />
                {user ? (
                  favoriteLoading ? (
                    ""
                  ) : favoriteFetch?.length == 0 ? (
                    ""
                  ) : (
                    <div className={styles.header__content__buttons__list__favourite__span}>
                      <span>{favoriteFetch?.length}</span>
                    </div>
                  )
                ) : favoriteState?.length == 0 ? (
                  ""
                ) : (
                  <div className={styles.header__content__buttons__list__favourite__span}>
                    <span>{favoriteState?.length}</span>
                  </div>
                )}
              </Link>
              {user ? (
                <Link
                  href={"/profile/address"}
                  className={styles.header__content__buttons__list__profile}
                >
                  <Image src={useravatar} alt='user' width={36} height={36} />
                </Link>
              ) : (
                <button
                  onClick={() => setIsShowModal(!isShowModal)}
                  className={styles.header__content__buttons__list__user}
                >
                  <UserIco />
                </button>
              )}

              <button
                onClick={() => setIsShow(true)}
                className={styles.header__content__buttons__list__basket}
              >
                <p>Корзина</p>
                <BasketIco />
              </button>
            </ul>
            {isShow ? (
              <>
                <Cart
                  setIsShowModal={setIsShowModal}
                  isShowModal={isShowModal}
                  outside={outside}
                  setIsShow={setIsShow}
                />
              </>
            ) : (
              ""
            )}
          </div>
          <div className={styles.header__burger}></div>
        </div>
      </div>
    </header>
  )
}

export default Header
