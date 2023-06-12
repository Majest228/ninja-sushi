import Image from "next/image"
import styles from "./Cart.module.scss"
import close from "../../../../assets/close.png"
import shop from "../../../../assets/shop.png"
import { useAuth } from "@/app/hooks/useAuth"
import { useGetCartByIdQuery } from "@/app/redux/rtk-query/cart.api"
import dynamic from "next/dynamic"
import classNames from "classnames"

const CartItem = dynamic(() => import("./CartItem"), { ssr: false })

const Cart = ({ setIsShow, outside, setIsShowModal, isShowModal }: any) => {
  const { user } = useAuth()
  const { data: cartItems, isLoading: cartIsLoading } = useGetCartByIdQuery("")
  console.log("cartItems", cartItems)
  return (
    <div className={styles.cart} ref={outside}>
      <div className={styles.cart__container}>
        <div className={styles.cart__content}>
          <div className={styles.cart__content__title}>
            <h3>Ваш заказ</h3>
            <button onClick={() => setIsShow(false)}>
              <Image src={close} alt='close' />
            </button>
          </div>
          <div
            className={classNames(
              user && cartItems.length != 0
                ? [styles.cart__content__blocks]
                : [styles.cart__content__block]
            )}
          >
            {cartIsLoading ? (
              []
            ) : cartItems.length == 0 ? (
              <>
                <Image src={shop} alt='shop' />
                <h3 className={styles.cart__content__block__text}>В вашей корзине пока пусто</h3>
              </>
            ) : (
              cartItems.map((cart) => <CartItem cart={cart} />)
            )}
            {/* <p className={styles.cart__content__block__desc}>Тут появятся товары, которые вы закажите</p> */}
            {user ? (
              ""
            ) : (
              <button
                onClick={() => {
                  setIsShowModal(!isShowModal)
                  setIsShow(false)
                }}
              >
                Авторизоваться
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
