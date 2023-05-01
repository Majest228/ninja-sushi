import {
  useDeleteAddressMutation,
  useGetAdreesForUserQuery,
} from "@/app/redux/rtk-query/address.api"
import { useState } from "react"
import styles from "../Profile.module.scss"
import Image from "next/image"
import AddressModal from "@/app/components/ui/components/address-modal/AddressModal"
import { IAddress } from "@/app/components/ui/components/address-modal/address.interface"
import AddressIco from "@/app/components/ui/Address"
import plus from "../../../../assets/plus.png"
import basket from "../../../../assets/basket.png"
import map from "../../../../assets/map.png"
import Profile from "../Profile"

const Address = () => {
  const [showAddressModal, setShowAdressModal] = useState(false)

  const [deleteAddress] = useDeleteAddressMutation()

  const { isLoading: isLoadingAddress, refetch, data: address } = useGetAdreesForUserQuery("")
  const [active, setActive] = useState("address")
  return (
    <Profile active={active} setActive={setActive}>
      {showAddressModal ? <div className={styles.profile__overlay}></div> : ""}
      <div className={styles.profile__content__right__text}>
        <h3 className={styles.profile__content__right__text__title}>Адрес доставки</h3>
        <button
          onClick={() => setShowAdressModal(true)}
          className={styles.profile__content__right__text__button}
        >
          <p>Новый адрес</p>
          <Image src={plus} alt='plus' />
        </button>
      </div>
      {showAddressModal ? <AddressModal setShowAdressModal={setShowAdressModal} /> : ""}
      {isLoadingAddress ? (
        0
      ) : address?.length !== 0 ? (
        address?.map((item: IAddress) => (
          <div className={styles.profile__content__right__item}>
            <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
            <div className={styles.profile__content__right__item__address}>
              <p>
                {item.street}, {item.streetNumber}
              </p>
              <span>
                Подьезд {item.entrance}, этаж {item.flat}, квартира {item.floor}
              </span>
            </div>
            <button
              onClick={() => {
                deleteAddress(+item?.id)
                refetch()
              }}
              className={styles.profile__content__right__item__button}
            >
              <Image src={basket} alt='basket' />
            </button>
          </div>
        ))
      ) : (
        <div className={styles.profile__content__right__block}>
          <AddressIco />
          <div className={styles.profile__content__right__block__text}>
            <h3>У вас нет сохраненных адресов</h3>
            <p>
              Переходите в интересующую вас категорию и сделайте свой первый заказ и адрес
              сохранится автоматически
            </p>
          </div>
        </div>
      )}
    </Profile>
  )
}

export default Address
