import React from "react"
import styles from "./Navigation.module.scss"
import Link from "next/link"
import RollsIco from "@/app/components/ui/Rolls"
import SushiIco from "@/app/components/ui/Sushi"
import SettsIco from "@/app/components/ui/Setts"
import BoulsIco from "@/app/components/ui/Bouls"
import DrinksIco from "@/app/components/ui/Drinks"
import SousIco from "@/app/components/ui/Sous"
import UnkownIco from "@/app/components/ui/Unkown"

const Navigation = ({ status }: any) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__content}>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <RollsIco />
              </div>
              <p>Роллы</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <SushiIco />
              </div>

              <p>Суши</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <SettsIco />
              </div>
              <p>Сеты</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <BoulsIco />
              </div>
              <p>Боулы</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <DrinksIco />
              </div>
              <p>Напитки</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <SousIco />
              </div>
              <p>Соусы</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <UnkownIco />
              </div>
              <p>Неизв...</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href='/products/1'>
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <UnkownIco />
              </div>
              <p>Неизв...</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
