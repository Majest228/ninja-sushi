import React, { useState } from "react"
import styles from "./Header.module.scss"
import Image from "next/image"
import logo from "../../../assets/logo.png"
import country from "../../../assets/country.png"
import ArrowIco from "@/app/components/ui/Arrow"
import Link from "next/link"
import PhoneIco from "@/app/components/ui/Phone"
import NoticeIco from "@/app/components/ui/Notice"
import FavouriteIco from "@/app/components/ui/Favourite"
import UserIco from "@/app/components/ui/User"
import BasketIco from "@/app/components/ui/Basket"
import Cart from "../../ui/components/Cart/Cart"

const Header = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <header className={styles.header}>
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
            <Image src={country} alt='country' />
            <p className={styles.header__content__menu__country}>Киев</p>
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
            <p className={styles.header__content__phone__number}>
              +38 097 699 34 38
            </p>
          </div>
          {/*buttons*/}
          <div className={styles.header__content__buttons}>
            <ul className={styles.header__content__buttons__list}>
              <button className={styles.header__content__buttons__list__notice}>
                <NoticeIco />
              </button>
              <button
                className={styles.header__content__buttons__list__favourite}
              >
                <FavouriteIco />
              </button>
              <button className={styles.header__content__buttons__list__user}>
                <UserIco />
              </button>
              <button
                onClick={() => setIsShow(true)}
                className={styles.header__content__buttons__list__basket}
              >
                <p>Корзина</p>
                <BasketIco />
              </button>
            </ul>
            {isShow ? <Cart /> : ""}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
