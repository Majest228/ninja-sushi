import React from "react"
import styles from "./Cart.module.scss"
import Image from "next/image"
const CartItem = ({ cart }: any) => {
  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item__left}>
        <Image
          src={`http://localhost:8080/api/files/${cart.product.productPath}`}
          alt={cart.product.productPath}
          width={128}
          height={117}
          sizes={"100vh"}
        />
        <div className={styles.cart__item__left__desc}>
          <h3 className={styles.cart__item__left__desc__title}>{cart.product.name}</h3>
          <p className={styles.cart__item__left__desc__weight}>Вес: {cart.product.weight}</p>
        </div>
      </div>
      <div className={styles.cart__item__right}>
        <p className={styles.cart__item__right__price}>{cart.product.price} тг</p>
        <div className={styles.cart__item__right__controllers}>
          <button className={styles.cart__item__right__controllers__btn}>-</button>
          <p className={styles.cart__item__right__controllers__count}>{cart.quantity}</p>
          <button className={styles.cart__item__right__controllers__btn}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
