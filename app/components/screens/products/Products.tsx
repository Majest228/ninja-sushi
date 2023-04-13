import bottle from "@/app/assets/bottle.png"
import chilly from "@/app/assets/chilly.png"
import fish from "@/app/assets/fish.png"
import green from "@/app/assets/green.png"
import Image from "next/image"
import styles from "./AllProducts.module.scss"
import Product from "./product/Product"

const Products = ({ products }: any) => {
  console.log("products", products)
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

  const foods = [
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
    <div className={styles.all__products}>
      <h3 className={styles.all__products__header__title}>Роллы</h3>
      <div className={styles.all__products__categories}>
        {categories.map((item) => (
          <div className={styles.all__products__categories__item}>{item}</div>
        ))}
      </div>
      <div className={styles.all__products__all__content}>
        <div className={styles.all__products__types}>
          {types.map((item) => (
            <div className={styles.all__products__types__item}>
              <Image src={item.photo} alt='' />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.all__products__products}>
          {foods.map((food) => (
            <div className={styles.all__products__products__item}>
              <Image src={food.photo} alt='' />
              <p>{food.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.all__product__content}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
