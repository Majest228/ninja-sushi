import { useState } from "react"
import Profile from "../Profile"
import styles from "../Profile.module.scss"
import Image from "next/image"
import history from "../../../../assets/history.png"
import orderArrow from "../../../../assets/order-arrow.png"
import order from "../../../../assets/item.png"
import orderItem from "../../../../assets/orderitem.png"
const History = () => {
  const [active, setActive] = useState("histore-order")
  return (
    <Profile active={active}>
      <h3 className={styles.profile__content__right__text__title}>История заказов</h3>
      <div className={styles.profile__content__history}>
        <div className={styles.profile__content__history__block}>
          <Image src={history} alt='history' />
          <div className={styles.profile__content__history__block__right}>
            <h3>У вас нет заказов</h3>
            <p>Переходите в интересующую вас категорию и сделайте свой первый заказ</p>
          </div>
        </div>
        <h3 className={styles.profile__content__history__title}>Готовятся</h3>
        <div className={styles.profile__content__history__process}>
          <div className={styles.profile__content__history__process__header}>
            <div className={styles.profile__content__history__process__header__left}>
              <button className={styles.profile__content__history__process__header__arrow}>
                <Image src={orderArrow} alt='order-arrow' width={20} height={11} />
              </button>
              <div className={styles.profile__content__history__process__header__date}>
                <span>20 мая 2020</span>
                <p># 86352</p>
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
            </div>
            <div className={styles.profile__content__history__process__header__right}>
              <div className={styles.profile__content__history__process__header__right__count}>
                <span>Кол-во</span>
                <p>7</p>
              </div>
              <div className={styles.profile__content__history__process__header__right__end}>
                <span
                  className={styles.profile__content__history__process__header__right__end__title}
                >
                  Итого
                </span>
                <p className={styles.profile__content__history__process__header__right__end__price}>
                  338 <span>грн</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.profile__content__history__process__data}>
            <div className={styles.profile__content__history__process__data__item}>
              <p className={styles.profile__content__history__process__data__item__left}>Адрес:</p>
              <p className={styles.profile__content__history__process__data__item__right}>
                проспект Науки, 13 До двери, кв 10 этаж 5
              </p>
            </div>
            <div className={styles.profile__content__history__process__data__item}>
              <p className={styles.profile__content__history__process__data__item__left}>Время:</p>
              <p className={styles.profile__content__history__process__data__item__right}>
                12 июля 12:00
              </p>
            </div>
            <div className={styles.profile__content__history__process__data__item}>
              <p className={styles.profile__content__history__process__data__item__left}>
                Способ оплаты:
              </p>
              <p className={styles.profile__content__history__process__data__item__right}>
                Наличными курьеру
              </p>
            </div>
            <div className={styles.profile__content__history__process__data__item}>
              <p className={styles.profile__content__history__process__data__item__left}>
                Сумма к оплате:
              </p>
              <p className={styles.profile__content__history__process__data__item__right}>
                338 грн
              </p>
            </div>
            <div className={styles.profile__content__history__process__data__item}>
              <p className={styles.profile__content__history__process__data__item__left}>Сдача с</p>
              <p className={styles.profile__content__history__process__data__item__right}>
                500 грн
              </p>
            </div>
            <div className={styles.profile__content__history__process__data__item}>
              <p className={styles.profile__content__history__process__data__item__left}>
                Кол-во человек:
              </p>
              <p className={styles.profile__content__history__process__data__item__right}>4</p>
            </div>
            <div className={styles.profile__content__history__process__data__note}>
              <p className={styles.profile__content__history__process__data__note__left}>
                Примечание:
              </p>
              <p className={styles.profile__content__history__process__data__note__right}>
                Не звонить в дверь
              </p>
            </div>
          </div>
          <div className={styles.profile__content__history__process__order}>
            <div className={styles.profile__content__history__process__order__item}>
              <div className={styles.profile__content__history__process__order__item__left}>
                <Image src={orderItem} height={64} width={64} alt='orderItem' />
                <div className={styles.profile__content__history__process__order__item__info}>
                  <h3
                    className={styles.profile__content__history__process__order__item__info__name}
                  >
                    Филадельфия с угрем
                  </h3>
                  <div
                    className={styles.profile__content__history__process__order__item__info__weight}
                  >
                    <span>Вес: </span>
                    <p>40 г</p>
                  </div>
                </div>
              </div>
              <div className={styles.profile__content__history__process__order__item__right}>
                <div
                  className={styles.profile__content__history__process__order__item__right__price}
                >
                  <span
                    className={
                      styles.profile__content__history__process__order__item__right__price__title
                    }
                  >
                    Цена
                  </span>
                  <p
                    className={
                      styles.profile__content__history__process__order__item__right__price__sum
                    }
                  >
                    850 <span>грн</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Profile>
  )
}

export default History
