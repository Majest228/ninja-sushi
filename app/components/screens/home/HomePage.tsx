import React from "react"
import styles from "./HomePage.module.scss"
import banner from "../../../assets/banner1.jpg"
import CircleIco from "@/app/components/ui/Circle"
import Products from "@/app/components/screens/home/products/Products"
import sushiBanner from "../../../assets/sushi.png"
import Image from "next/image"
import map from "../../../assets/map.jpg"
import app from "../../../assets/appstore.png"
import gp from "../../../assets/gp.png"
import Link from "next/link"
import mobile from "../../../assets/mobile.png"
import ArrowGreenIco from "@/app/components/ui/ArrowGren"
import Navigation from "@/app/components/Navigation/Navigation"

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Navigation />
      <div className={styles.home__container}>
        <div
          className={styles.home__slider}
          style={{
            backgroundImage: `url(${banner.src})`,
            width: "100%",
            height: "100%",
          }}
        >
          <div className={styles.home__slider__content}>
            <h3>Ninja Sushi в Киеве! Пока только на левом берегу</h3>
            <p>Доставку делаем с 10:00 до 19:30</p>
            <button>Перейти к новости</button>
          </div>
          <div className={styles.home__slider__controller}>
            {[...new Array(4).keys()].map((i) => (
              <button key={i} className={styles.home__slider__controller__button}>
                <CircleIco />
              </button>
            ))}
          </div>
        </div>
        <Products type={"homepage"} title='Суши' />
        <Products type={"homepage"} title='Роллы' />
        <Products type={"homepage"} title='Сеты' />
        <div className={styles.home__offer}>
          <div className={styles.home__offer__content}>
            <h3 className={styles.home__offer__content__title}>
              Филадельфия с лососем
            </h3>
            <p className={styles.home__offer__content__desc}>
              Сир вершковий, шиітаке теріякі, краб-крем, лосось
            </p>
            <div className={styles.home__offer__content__buttons}>
              <button className={styles.home__offer__content__buttons__basket}>
                В корзину
              </button>
              <p className={styles.home__offer__content__buttons__price}>
                190 <span>грн</span>
              </p>
            </div>
          </div>
          <div className={styles.home__offer__banner}>
            <Image src={sushiBanner} alt='sushiBanner' />
          </div>
          <div className={styles.home__offer__best}>
            <button>Лучшее предложение недели!</button>
          </div>
        </div>
        <div className={styles.home__offer__best__controls}>
          {[...new Array(4).keys()].map((i) => (
            <button key={i} className={styles.home__slider__controller__button}>
              <CircleIco />
            </button>
          ))}
        </div>
        <Products type={"homepage"} title='Закуски' />
        <Products type={"homepage"} title='Напитки' />

        <div className={styles.home__maps}>
          <h3 className={styles.home__maps__title}>
            Каждая кухня работает со своей зоной доставки, чтобы привезти еду
            максимально быстро
          </h3>
          <div className={styles.home__maps__type}>
            <div className={styles.home__maps__type__item}>
              <div className={styles.home__maps__type__item__green}></div>
              <span>—</span>
              <p>Бесплатная доставка</p>
            </div>
            <div className={styles.home__maps__type__item}>
              <div className={styles.home__maps__type__item__yellow}></div>
              <span>—</span>
              <p>Бесплатная доставка</p>
            </div>
            <div className={styles.home__maps__type__item}>
              <div className={styles.home__maps__type__item__red}></div>
              <span>—</span>
              <p>Бесплатная доставка</p>
            </div>
          </div>
          <div className={styles.home__maps__map}>
            <Image src={map} alt='map' />
          </div>
        </div>
        <div className={styles.home__download}>
          <div className={styles.home__download__mobile}>
            <Image src={mobile} alt='mobile' />
          </div>
          <div className={styles.home__download__content}>
            <h3 className={styles.home__download__content__title}>
              Ниндзя - это семья. Скачивайте наше приложение
            </h3>
            <p className={styles.home__download__content__desc}>
              Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться
              голодным.
            </p>
            <div className={styles.home__download__buttons}>
              <a href=''>
                <Image src={app} alt='app' />
              </a>
              <a href=''>
                <Image src={gp} alt='app' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// @ts-ignore
export default HomePage
