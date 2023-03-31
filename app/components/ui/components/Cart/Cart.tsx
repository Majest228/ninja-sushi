import Image from "next/image"
import styles from "./Cart.module.scss"
import close from "../../../../assets/close.png"
import shop from "../../../../assets/shop.png"
const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__container}>
        <div className={styles.cart__content}>
          <div className={styles.cart__content__title}>
            <h3>Ваш заказ</h3>
            <button>
              <Image src={close} alt='close' />
            </button>
          </div>
          <div className={styles.cart__content__block}>
            <Image src={shop} alt='shop' />
            <h3>В вашей корзине пока пусто</h3>
            <p>Тут появятся товары, которые вы закажите</p>
            <button>Авторизоваться</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
