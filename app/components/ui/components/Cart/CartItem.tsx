import React from "react"
import styles from "./Cart.module.scss"
import Image from "next/image"
import close from "../../../../assets/close.png"
import {
  useDecrementCartItemMutation,
  useDeleteByIdMutation,
  useIncrementCartItemMutation,
} from "@/app/redux/rtk-query/cart.api"
const CartItem = ({ cart }: any) => {
  const [increment] = useIncrementCartItemMutation()
  const [decrement] = useDecrementCartItemMutation()
  const [deleteById] = useDeleteByIdMutation()
  return (
    <div key={cart.id} className={styles.cart__item}>
      <button
        onClick={() => deleteById({ cartItemId: cart.id })}
        className={styles.cart__item__close}
      >
        <Image src={close} alt='close' />
      </button>
      <div className={styles.cart__item__left}>
        <Image
          src={`http://localhost:8080/api/files/${cart.product.productPath}`}
          alt={cart.product.productPath}
          width={58}
          height={47}
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
          <button
            onClick={() => decrement({ cartItemId: cart.id })}
            className={styles.cart__item__right__controllers__btn}
          >
            -
          </button>
          <p className={styles.cart__item__right__controllers__count}>{cart.quantity}</p>
          <button
            className={styles.cart__item__right__controllers__btn}
            onClick={() => increment({ cartItemId: cart.id })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
