import bottle from "@/app/assets/bottle.png"
import chilly from "@/app/assets/chilly.png"
import fish from "@/app/assets/fish.png"
import green from "@/app/assets/green.png"
import Product from "@/app/components/screens/home/products/product/Product"
import Link from "next/link"
import styles from "./Products.module.scss"

export type typeProducts = "homepage" | "single"

export interface IProducts {
  type: typeProducts
  title: string
  sushies: any
}

const Products = ({ title, type, data }: IProducts) => {
  const categories = ["Все", "Классические", "Маки", "Драконы", "Запеченные", "Феликсы", "Сладкие"]

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
    <div className={styles.products}>
      <div className={styles.products__header}>
        <Link href={`/products/rolls`} className={styles.products__header__title}>
          {title}
        </Link>
        <button className={styles.products__header__view}>Смотреть все</button>
      </div>
      <div className={styles.products__content}>
        {data?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
