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
import { useEffect, useState, useRef, useCallback, useLayoutEffect } from "react"
import Slider from "./slider/Slider"

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

const HomePage = ({ sushies, rolls, sets }: any) => {
  // const [sliderId, setSliderId] = useState(0)
  // const offset = useRef(0)
  // const [dots, setDots] = useState([-0, -1576, -3152, -4728, -6304, -7880])
  // const slide = useRef()
  // const sliderWidth = useRef(window.innerWidth > 1576 ? 1576 : window.innerWidth)
  // const [isResize, setIsResize] = useState(false)

  // let newDots = []
  // const checkResolution = async () => {
  //   sliderWidth.current = slide.current.offsetWidth
  //   console.log("currentResizeCheck", sliderWidth.current)
  //   for (let i = 0; i < sliders.length; i++) {
  //     newDots.push(-Math.abs(sliderWidth.current * i))
  //     setDots([...newDots])
  //   }
  // }
  // const handleWindowResize = () => {
  //   sliderWidth.current = slide.current.offsetWidth
  //   console.log("currentResizeHande", sliderWidth)
  //   setIsResize(true)
  //   for (let i = 0; i < sliders.length; i++) {
  //     newDots.push(-Math.abs(sliderWidth.current * i))
  //     setDots([...newDots])
  //   }
  //   // offset.current = -Math.abs(sliderWidth.current)
  //   offset.current = newDots[sliderId]
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowResize)
  //   window.addEventListener("load", checkResolution)
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize)
  //     window.removeEventListener("load", checkResolution)
  //   }
  // }, [checkResolution, handleWindowResize])

  // useEffect(() => {
  //   console.log(
  //     "width",
  //     sliderWidth.current,
  //     "dots",
  //     dots,
  //     "isResize",
  //     isResize,
  //     "offset",
  //     offset.current
  //   )
  // }, [sliderWidth.current, dots, isResize])

  return (
    <div className={styles.home}>
      <Navigation />
      <div className={styles.home__container}>
        <Slider />
        {/* <div className={styles.home__slide} ref={slide}>
          {sliders.map((slider) => (
            <div
              className={styles.home__slider}
              style={{
                backgroundImage: `url(${slider.banner.src})`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                transform: `translateX(${offset.current}px)`,
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
            {dots.map((item, index) => (
              <button
                onClick={() => {
                  offset.current = item
                  setSliderId(index)
                }}
                // key={item.id}
                className={styles.home__slider__controller__button}
              >
                <CircleIco fill={sliderId == index ? "#FF6633" : "#D2D2D7"} />
              </button>
            ))}
          </div>
        </div> */}
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
