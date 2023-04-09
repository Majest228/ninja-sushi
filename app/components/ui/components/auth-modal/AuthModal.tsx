import Image from 'next/image'
import apple from '../../../../assets/apple.png'
import close from '../../../../assets/closemodal.png'
import facebook from '../../../../assets/facebooklogin.png'
import google from '../../../../assets/google.png'
import styles from './AuthModal.module.scss'

const AuthModal = ({ isShowModal, setIsShowModal }: any) => {
    return (
        <div className={styles.auth}>
            <button onClick={() => setIsShowModal(!isShowModal)} className={styles.auth__close}>
                <Image src={close} alt="close" />
            </button>
            <div className={styles.auth__content}>
                <h3 className={styles.auth__content__title}>Авторизация</h3>
                <p className={styles.auth__content__desc}>Введите вашу почту и пароль</p>
                <div className={styles.auth__content__block}>
                    <div className={styles.auth__content__block__item}>
                        <label htmlFor="">Имя</label>
                        <input type="email" />
                    </div>
                    <div className={styles.auth__content__block__item}>
                        <label htmlFor="">Пароль</label>
                        <input type="password" />
                    </div>
                    <button className={styles.auth__content__block__button}>Войти по номеру телефона</button>
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
                </div>
            </div>
        </div>
    )
}

export default AuthModal