import Navigation from "@/app/components/Navigation/Navigation"
import Products from "@/app/components/screens/home/products/Products"
import CircleIco from "@/app/components/ui/Circle"
import Image from "next/image"
import Link from "next/link"
import app from "../../../assets/appstore.png"
import banner1 from "../../../assets/banner1.webp"
import banner2 from "../../../assets/banner2.webp"
import banner3 from "../../../assets/banner3.webp"
import banner4 from "../../../assets/banner4.webp"
import banner5 from "../../../assets/banner5.webp"
import banner6 from "../../../assets/banner6.webp"
import gp from "../../../assets/gp.png"
import map from "../../../assets/map.jpg"
import mobile from "../../../assets/mobile.png"
import sushiBanner from "../../../assets/sushi.png"
import styles from "./HomePage.module.scss"
import { useEffect, useState } from "react"

const sliders = [
  {
    id: 0,
    title: "Ninja на турнире по Valorant в Астане!",
    desciption: "Ниндзя-фанаты киберспорта",
    banner: banner1,
  },
  {
    id: 1,
    title: "Подарки от ниндзя в WAKE UP SHOW от DJ FM",
    desciption: "С понедельника по пятницу",
    banner: banner2,
  },
  {
    id: 2,
    title: "Подарки от ниндзя суши и плохого парня",
    desciption: "Подарок можно забрать до 30 мая",
    banner: banner3,
  },
  {
    id: 3,
    title: "Коллекция Ninja Sushi Spring Collection",
    desciption: "В тренде зеленый, розовый и оранжевый",
    banner: banner4,
  },
  {
    id: 4,
    title: "Что смотрели ниндзя в 2022?",
    desciption: "Определяйтесь с выбором",
    banner: banner5,
  },
  {
    id: 5,
    title: "Лимитированный дроп патриотической футболки от Ninja",
    desciption: "Придбати можна за 22000 тг",
    banner: banner6,
  },
]

const dots = [
  {
    id: 0,
    offset: 0,
  },
  {
    id: 1,
    offset: -1576,
  },
  {
    id: 2,
    offset: -3152,
  },
  {
    id: 3,
    offset: -4728,
  },
  {
    id: 4,
    offset: -6304,
  },
  {
    id: 5,
    offset: -7880,
  },
]

const HomePage = ({ sushies, rolls, sets }: any) => {
  const [sliderId, setSliderId] = useState(0)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      const maxOffset = dots[dots.length - 1]
      if (maxOffset.offset >= offset) {
        setOffset(0)
        setSliderId(0)
      } else {
        setOffset((prev) => prev - 1576)
        const currentIndex = dots.find((dot) => dot.offset == offset)
        setSliderId(currentIndex?.id + 1)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [offset])
  let test = dots[dots.length - 1]
  useEffect(() => {
    console.log("offset", offset, "maxOffset", test.offset, "id", sliderId)
  }, [offset, test, sliderId])
  return (
    <div className={styles.home}>
      <Navigation />
      <div className={styles.home__container}>
        <div className={styles.home__slide}>
          {sliders.map((slider) => (
            <div
              className={styles.home__slider}
              style={{
                backgroundImage: `url(${slider.banner.src})`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                transform: `translateX(${offset}px)`,
              }}
            >
              <div key={slider.desciption} className={styles.home__slider__content}>
                <h3>{slider.title}</h3>
                <p>{slider.desciption}</p>
                <Link className={styles.home__slider__content__link} href={"/news"}>
                  Перейти к новости
                </Link>
              </div>
            </div>
          ))}
          <div className={styles.home__slider__controller}>
            {dots.map((item) => (
              <button
                onClick={() => {
                  setOffset(item.offset)
                  setSliderId(item.id)
                }}
                key={item.id}
                className={styles.home__slider__controller__button}
              >
                <CircleIco fill={sliderId == item.id ? "#FF6633" : "#D2D2D7"} />
              </button>
            ))}
          </div>
        </div>
        <Products type={"homepage"} data={sushies} title='Суши' />
        <Products type={"homepage"} data={rolls} title='Роллы' />
        <Products type={"homepage"} data={sets} title='Сеты' />
        <div className={styles.home__offer}>
          <div className={styles.home__offer__content}>
            <h3 className={styles.home__offer__content__title}>Филадельфия с лососем</h3>
            <p className={styles.home__offer__content__desc}>
              Сир вершковий, шиітаке теріякі, краб-крем, лосось
            </p>
            <div className={styles.home__offer__content__buttons}>
              <button className={styles.home__offer__content__buttons__basket}>В корзину</button>
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
            Каждая кухня работает со своей зоной доставки, чтобы привезти еду максимально быстро
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
              Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться голодным.
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
