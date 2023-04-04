import React from "react"
import styles from "./Product.module.scss"
import Navigation from "@/app/components/Navigation/Navigation"
import Image from "next/image"
import item from "../../../assets/item.png"
import fish from "@/app/assets/fish.png"
import arrow from "../../../assets/arrow-gray.png"
import cart from "../../../assets/cart.png"

const Product = () => {
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
    <div className={styles.product}>
      <Navigation />
      <div className={styles.product__container}>
        <div className={styles.product__content}>
          <div className={styles.product__content__left}>
            <Image src={item} alt={"item"} />
          </div>
          <div className={styles.product__content__right}>
            <div className={styles.product__content__right__tags}>
              <div className={styles.product__content__right__tags__hit}>
                <h3>Hit</h3>
              </div>
              <div className={styles.product__content__right__tags__new}>
                <h3>New</h3>
              </div>
            </div>
            <h3 className={styles.product__content__right__title}>
              Филадельфия с угрем
            </h3>
            <p className={styles.product__content__right__price}>Вес: 320г</p>
            <span className={styles.product__content__right__list}>
              Состав:
            </span>
            <div className={styles.product__content__right__list__items}>
              {products.map((product) => (
                <div
                  className={styles.product__content__right__list__items__item}
                >
                  <Image src={product.photo} alt='product' />
                  <p>{product.name}</p>
                </div>
              ))}
              <button
                className={styles.product__content__right__list__items__arrow}
              >
                <Image src={arrow} alt={"arrow"} />
              </button>
            </div>
            <div className={styles.product__content__right__footer}>
              <h3>
                290 <span>грн</span>
              </h3>
              <button>
                <p>В корзину</p>
                <Image src={cart} alt={"cart"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
