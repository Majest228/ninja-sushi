import { useAppDispatch } from "@/app/hooks/useAppDispatch"
import { login, register } from "@/app/redux/auth/auth.action"
import Image from "next/image"
import { useState } from "react"
import apple from "../../../../assets/apple.png"
import close from "../../../../assets/closemodal.png"
import facebook from "../../../../assets/facebooklogin.png"
import google from "../../../../assets/google.png"
import styles from "./AuthModal.module.scss"

const AuthModal = ({ isShowModal, setIsShowModal }: any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [type, setType] = useState("login")
  const dispatch = useAppDispatch()
  const onSubmit = () => {

    try {
      if (type == "login") {
        dispatch(login({ email, password }))
      } else {
        dispatch(register({ email, password, login: name }))
      }
      setIsShowModal(!isShowModal)

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className={styles.auth}
    >
      <button onClick={() => setIsShowModal(!isShowModal)} className={styles.auth__close}>
        <Image src={close} alt='close' />
      </button>
      <div className={styles.auth__content}>
        {type == "login" ? (
          <h3 className={styles.auth__content__title}>Авторизация</h3>
        ) : (
          <h3 className={styles.auth__content__title}>Регистрация</h3>
        )}
        <p className={styles.auth__content__desc}>Введите вашу почту и пароль</p>
        <div className={styles.auth__content__block}>
          {type == "login" ? (
            <>
              <div className={styles.auth__content__block__item}>
                <label htmlFor=''>Почта</label>
                <input onChange={(e) => setEmail(e.target.value)} type='email' />
              </div>

              <div className={styles.auth__content__block__item}>
                <label htmlFor=''>Пароль</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' />
              </div>
            </>
          ) : (
            <>
              <div className={styles.auth__content__block__item}>
                <label htmlFor=''>Почта</label>
                <input onChange={(e) => setEmail(e.target.value)} type='email' />
              </div>
              <div className={styles.auth__content__block__item}>
                <label htmlFor=''>Имя</label>
                <input onChange={(e) => setName(e.target.value)} type='text' />
              </div>
              <div className={styles.auth__content__block__item}>
                <label htmlFor=''>Пароль</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' />
              </div>
            </>
          )}
          {type == "login" ? (
            <button type='submit' className={styles.auth__content__block__button}>
              Войти в систему
            </button>
          ) : (
            <button type='submit' className={styles.auth__content__block__button}>
              Создать аккаунт
            </button>
          )}

          <span className={styles.auth__content__block__span}>Или</span>
          <div className={styles.auth__content__block__buttons}>
            <button className={styles.auth__content__block__buttons__google}>
              <Image src={google} alt='google' />
              <p>Google</p>
            </button>
            <button className={styles.auth__content__block__buttons__facebook}>
              <Image src={facebook} alt='facebook' />
              <p>Facebook</p>
            </button>
            <button className={styles.auth__content__block__buttons__apple}>
              <Image src={apple} alt='apple' />
              <p>Войти через Apple id</p>
            </button>
          </div>
          {type == 'login' ?
            <button type='button' onClick={() => setType("")}>Нет аккаунта?</button>
            : <button type='button' onClick={() => setType("login")}>Есть аккаунт?</button>}
        </div>
      </div>
    </form>
  )
}

export default AuthModal
