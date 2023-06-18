import styles from "./OrderingPage.module.scss"
import Navigation from "@/app/components/Navigation/Navigation"
import Image from "next/image"
import info from "../../../assets/info.png"
import { useEffect, useState } from "react"
import { DeliveryTypes } from "@/app/components/screens/ordering/enum"
import { useGetAdreesForUserQuery } from "@/app/redux/rtk-query/address.api"
import AddressIco from "@/app/components/ui/Address"
import map from "@/app/assets/map.png"
const OrderingPage = () => {
  const [selectedOption, setSelectedOption] = useState(DeliveryTypes[0].key)
  const { isLoading: isLoadingAddress, refetch, data: address } = useGetAdreesForUserQuery("")
  useEffect(() => console.log(selectedOption, "address", address), [selectedOption, address])
  return (
    <div className={styles.ordering}>
      <Navigation />
      <div className={styles.ordering__container}>
        <div className={styles.ordering__content}>
          <div className={styles.ordering__content__left}>
            <h3 className={styles.ordering__content__left__title}>Оформление заказа</h3>
            <div className={styles.ordering__content__left__personal}>
              <h3 className={styles.ordering__content__left__personal__title}>Личные данные</h3>
              <div className={styles.ordering__content__left__personal__content}>
                <div className={styles.ordering__content__left__personal__content__input}>
                  <label>Имя</label>
                  <input type='text' />
                </div>
                <div className={styles.ordering__content__left__personal__content__input}>
                  <label>Телефон</label>
                  <input type='text' />
                </div>
              </div>
            </div>
            <div className={styles.ordering__content__left__delivery}>
              <div className={styles.ordering__content__left__delivery__header}>
                <div className={styles.ordering__content__left__delivery__header__info}>
                  <h3>Доставка</h3>
                </div>
                <div className={styles.ordering__content__left__delivery__header__zone}>
                  <p>Зона доставки</p>
                  <button>
                    <Image src={info} alt='info' />
                  </button>
                </div>
              </div>
              <p className={styles.ordering__content__left__delivery__header__desc}>
                Зона бесплатной доставки уточняется у оператора
              </p>
              <div className={styles.ordering__content__left__delivery__types}>
                {DeliveryTypes.map((type) => (
                  <div className={styles.ordering__content__left__delivery__types__item}>
                    <input
                      onChange={(e) => setSelectedOption(e.target.value)}
                      id={type.key}
                      type='radio'
                      name='radio'
                      value={type.key}
                      checked={selectedOption == type.key}
                    />
                    <label key={type.key} htmlFor={type.key}>
                      {type.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className={styles.ordering__content__left__delivery__address}>
                <div className={styles.ordering__content__left__delivery__address__items}>
                  {isLoadingAddress
                    ? []
                    : address.map((addres) => (
                        <div
                          className={styles.ordering__content__left__delivery__address__items__item}
                        >
                          <label htmlFor='01'>
                            <div
                              className={
                                styles.ordering__content__left__delivery__address__items__item__block
                              }
                            >
                              <div
                                className={
                                  styles.ordering__content__left__delivery__address__items__item__block__left
                                }
                              >
                                <Image src={map} alt='map' />
                                <div
                                  className={
                                    styles.ordering__content__left__delivery__address__items__item__block__left__desc
                                  }
                                >
                                  <p
                                    className={
                                      styles.ordering__content__left__delivery__address__items__item__block__left__desc__city
                                    }
                                  >
                                    {addres.street}, {addres.streetNumber}
                                  </p>
                                  <p
                                    className={
                                      styles.ordering__content__left__delivery__address__items__item__block__left__desc__floor
                                    }
                                  >
                                    Подьезд {addres.entrance}, этаж {addres.flat}, квартира{" "}
                                    {addres.floor}
                                  </p>
                                </div>
                              </div>
                              <div
                                className={
                                  styles.ordering__content__left__delivery__address__items__item__block__right
                                }
                              >
                                <div
                                  className={
                                    styles.ordering__content__left__delivery__address__items__item__block__right__dot
                                  }
                                ></div>
                              </div>
                            </div>
                          </label>
                          <input id='01' type='radio' name='r' value='1' checked />
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ordering__content__right}></div>
        </div>
      </div>
    </div>
  )
}

export default OrderingPage
