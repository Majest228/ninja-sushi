import Image from "next/image"
import close from "../../../../assets/closemodal.png"
import styles from "./AddressModal.module.scss"
import search from "../../../../assets/search.png"
import { useForm, SubmitHandler } from "react-hook-form"
import { IAddress } from "./address.interface"
import {
  useCreateAddressMutation,
  useGetAdreesForUserQuery,
} from "@/app/redux/rtk-query/address.api"
import { useState } from "react"
const AddressModal = ({ setShowAdressModal }: any) => {
  const [createAddress] = useCreateAddressMutation()

  const [street, setStreet] = useState("")
  const [streetNumber, setStreetNumber] = useState(0)
  const [flat, setFlat] = useState(0)
  const [entrance, setEntrance] = useState(0)
  const [floor, setFloor] = useState(0)
  const { refetch } = useGetAdreesForUserQuery("")
  const submitDate = () => {
    createAddress({ entrance, flat, floor, street, streetNumber })
    refetch()
    setShowAdressModal(false)
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submitDate()
      }}
      className={styles.address}
    >
      <button onClick={() => setShowAdressModal(false)} className={styles.address__close}>
        <Image src={close} alt='close' />
      </button>
      <div className={styles.address__content}>
        <h3 className={styles.address__content__title}>Введите адрес или выберите на карте</h3>
        <div className={styles.address__content__search}>
          <div className={styles.address__content__main}>
            <Image src={search} alt='search' />
            <input onChange={(e) => setStreet(e.target.value)} type='text' />
          </div>
          {/* {errors?.street && <div>{errors.street.message}</div>} */}
        </div>
        <div className={styles.address__content__block}>
          <div className={styles.address__content__block__item}>
            <label htmlFor=''>Номер дома</label>
            <input onChange={(e) => setStreetNumber(+e.target.value)} type='number' />
          </div>
          <div className={styles.address__content__block__item}>
            <label htmlFor=''>Подъезд</label>
            <input onChange={(e) => setEntrance(+e.target.value)} type='text' />
          </div>
          <div className={styles.address__content__block__item}>
            <label htmlFor=''>Этаж</label>
            <input onChange={(e) => setFloor(+e.target.value)} type='text' />
          </div>
          <div className={styles.address__content__block__item}>
            <label htmlFor=''>Квартира</label>
            <input onChange={(e) => setFlat(+e.target.value)} type='text' />
          </div>
        </div>
        <button type='submit' className={styles.address__content__button}>
          Сохранить адрес
        </button>
      </div>
    </form>
  )
}

export default AddressModal
