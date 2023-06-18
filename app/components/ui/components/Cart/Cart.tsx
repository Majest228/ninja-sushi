import Image from "next/image"
import styles from "./Cart.module.scss"
import close from "../../../../assets/close.png"
import shop from "../../../../assets/shop.png"
import { useAuth } from "@/app/hooks/useAuth"
import {
  useAddToCartMutation,
  useCreateOrderByCartMutation,
  useDeleteAllMutation,
  useGetCartByIdQuery,
  useIncrementCartItemMutation,
  useLazyGetCartByIdQuery,
} from "@/app/redux/rtk-query/cart.api"
import dynamic from "next/dynamic"
import classNames from "classnames"
import { useRouter } from "next/router"
import { toggleSwitchModal } from "@/app/redux/cart/cart.slice"
import { useAppDispatch } from "@/app/hooks/useAppDispatch"

export interface ITotal {
  total: number
  item: {
    id: number
    product: {
      price: number
    }
    quantity: number
  }
}

const CartItem = dynamic(() => import("./CartItem"), { ssr: false })

const Cart = ({ setIsShow, outside, setIsShowModal, isShowModal }: any) => {
  const { user } = useAuth()
  const router = useRouter()
  const { data: cartItems, isLoading: cartIsLoading, refetch } = useGetCartByIdQuery("")
  // const result = useGetCartByIdQuery("")
  const [createOrderByCart] = useCreateOrderByCartMutation()
  const totalSum = cartIsLoading
    ? []
    : cartItems?.reduce((total, item) => {
        return total + Number(item?.product.price) * Number(item?.quantity)
      }, 0)
  const dispatch = useAppDispatch()
  console.log("cartItems", cartItems, "totalSum", totalSum)
  const [deleteAll] = useDeleteAllMutation()
  return (
    <div className={styles.cart} ref={outside}>
      <div className={styles.cart__container}>
        <div className={styles.cart__content}>
          <div className={styles.cart__content__title}>
            <h3>Ваш заказ</h3>
            <button onClick={() => dispatch(toggleSwitchModal())}>
              <Image src={close} alt='close' />
            </button>
          </div>
          <div
            className={classNames(
              user && cartItems?.length != 0
                ? [styles.cart__content__blocks]
                : [styles.cart__content__block]
            )}
          >
            {cartIsLoading ? (
              []
            ) : cartItems?.length == 0 ? (
              <>
                <Image src={shop} alt='shop' />
                <h3 className={styles.cart__content__block__text}>В вашей корзине пока пусто</h3>
              </>
            ) : (
              cartItems.map((cart) => <CartItem key={cart.id} cart={cart} />)
            )}
            {/* <p className={styles.cart__content__block__desc}>Тут появятся товары, которые вы закажите</p> */}
            {user ? (
              ""
            ) : (
              <button
                onClick={() => {
                  setIsShowModal(!isShowModal)
                }}
              >
                Авторизоваться
              </button>
            )}
          </div>
        </div>
        <button onClick={() => deleteAll()} className={styles.cart__deleteAll}>
          Очистить корзину
        </button>
        {user ? (
          <div className={styles.cart__footer}>
            <div className={styles.cart__footer__content}>
              <div className={styles.cart__footer__content__left}>
                <span className={styles.cart__footer__content__left__title}>Итого:</span>
                <p className={styles.cart__footer__content__left__price}>
                  {totalSum}
                  <span>тг</span>
                </p>
              </div>
              <div className={styles.cart__footer__content__right}>
                <button
                  onClick={() => {
                    refetch()
                    router.push("/profile/histore-order")
                    createOrderByCart().unwrap()
                    dispatch(toggleSwitchModal())
                  }}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Cart
