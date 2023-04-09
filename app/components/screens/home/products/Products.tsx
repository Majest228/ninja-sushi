import bottle from "@/app/assets/bottle.png"
import chilly from "@/app/assets/chilly.png"
import fish from "@/app/assets/fish.png"
import green from "@/app/assets/green.png"
import Product from "@/app/components/screens/home/products/product/Product"
import Image from "next/image"
import Link from "next/link"
import styles from "./Products.module.scss"

export type typeProducts = "homepage" | "single"

export interface IProducts {
  type: typeProducts
  title: string
  sushies: any
}

const Products = ({ title, type, data }: IProducts) => {
  const categories = [
    "Все",
    "Классические",
    "Маки",
    "Драконы",
    "Запеченные",
    "Феликсы",
    "Сладкие",
  ]

  const types = [
    {
      id: 0,
      name: "Острые",
      photo: chilly,
    },
    {
      id: 1,
      name: "Вегетарианские",
      photo: bottle,
    },
    {
      id: 2,
      name: "Безлактозные",
      photo: green,
    },
  ]

  const products = [
    {
      id: 0,
      name: "Лосось",
      photo: fish,
    },
    {
      id: 1,
      name: "Угорь",
      photo: fish,
    },
    {
      id: 2,
      name: "Тунец",
      photo: fish,
    },
    {
      id: 3,
      name: "Куриное филе",
      photo: fish,
    },
  ]
  return (
    <Link href={`/products/product/${1}`} className={styles.products}>
      {type == "homepage" ? (
        <div className={styles.products__header}>
          <h3 className={styles.products__header__title}>{title}</h3>
          <button className={styles.products__header__view}>
            Смотреть все
          </button>
        </div>
      ) : (
        <>
          <h3 className={styles.products__header__title}>Роллы</h3>
          <div className={styles.products__categories}>
            {categories.map((item) => (
              <div className={styles.products__categories__item}>{item}</div>
            ))}
          </div>
          <div className={styles.products__all__content}>
            <div className={styles.products__types}>
              {types.map((item) => (
                <div className={styles.products__types__item}>
                  <Image src={item.photo} alt='' />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <div className={styles.products__products}>
              {products.map((item) => (
                <div className={styles.products__products__item}>
                  <Image src={item.photo} alt='' />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <div className={styles.products__content}>
        {data?.map(product => <Product product={product}/>)}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </Link>
  )
}

export default Products
