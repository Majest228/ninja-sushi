import Image from "next/image"
import styles from "./ProfileModal.module.scss"
import close from "../../../../assets/closemodal.png"
import { useEffect, useState } from "react"
import { useGetProfileQuery, useUpdateProfileMutation } from "@/app/redux/rtk-query/profile.api"
const ProfileModal = ({ setIsShow }: any) => {
  const {
    isLoading: isLoadingProfile,
    refetch: refetchProfile,
    data: profile,
  } = useGetProfileQuery("")

  const [name, setName] = useState(profile?.name)
  const [email, setEmail] = useState(profile?.email)
  const [login, setLogin] = useState(profile?.login)
  const [phone, setPhone] = useState(profile?.phone)
  const [mutation] = useUpdateProfileMutation()

  const submitDate = () => {
    mutation({ name, login, email })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submitDate()
        refetchProfile()
        setIsShow(false)
      }}
      className={styles.profile}
    >
      <button onClick={() => setIsShow(false)} className={styles.profile__close}>
        <Image src={close} alt='close' />
      </button>
      <div className={styles.profile__content}>
        <h3 className={styles.profile__content__title}>Личные данные</h3>
        {/* <p className={styles.profile__content__desc}>
          Пользователь с таким номером телефона не обнаружен. Пожалуйста введите ваши данные
        </p> */}
        <div className={styles.profile__content__search}>
          <label className={styles.profile__content__label} htmlFor=''>
            Имя
          </label>
          <div className={styles.profile__content__main}>
            <input
              defaultValue={profile.name}
              onChange={(e) => setName(e.target.value)}
              type='text'
            />
          </div>
          <label className={styles.profile__content__label} htmlFor=''>
            Email
          </label>
          <div className={styles.profile__content__main}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={profile.email}
              type='email'
            />
          </div>
          <label className={styles.profile__content__label} htmlFor=''>
            Логин
          </label>
          <div className={styles.profile__content__main}>
            <input
              onChange={(e) => setLogin(e.target.value)}
              defaultValue={profile.login}
              type='text'
            />
          </div>
          <div className={styles.profile__content__main}></div>
        </div>
        <button type='submit' className={styles.profile__content__button}>
          Сохранить изменения
        </button>
      </div>
    </form>
  )
}

export default ProfileModal
