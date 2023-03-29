import styles from './Profile.module.scss'
import histore from '../../../assets/histore.png'
import favorite from '../../../assets/favorite.png'
import gps from '../../../assets/gps.png'
import sun from '../../../assets/sun.png'
import Image from 'next/image'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__container}>
                <div className={styles.profile__content}>
                    <div className={styles.profile__content__left}>
                        <ul className={styles.profile__content__left__list}>
                            <button className={styles.profile__content__left__list__button}>
                                <div className={styles.profile__content__left__list__button__img}>
                                    <Image src={histore} alt={`${histore}`} />
                                </div>
                                <p className={styles.profile__content__left__list__button__text}>История заказов</p>
                            </button>
                            <button className={styles.profile__content__left__list__button}>
                                <div className={styles.profile__content__left__list__button__img}>
                                    <Image src={favorite} alt={`${favorite}`} />
                                </div>
                                <p className={styles.profile__content__left__list__button__text}>Избранные товары</p>
                            </button>
                            <button className={styles.profile__content__left__list__button}>
                                <div className={styles.profile__content__left__list__button__img}>
                                    <Image src={gps} alt={`${gps}`} />
                                </div>
                                <p className={styles.profile__content__left__list__button__text}>Адрес доставки</p>
                            </button>
                            <button className={styles.profile__content__left__list__button}>
                                <div className={styles.profile__content__left__list__button__img}>
                                    <Image src={sun} alt={`${sun}`} />
                                </div>
                                <p className={styles.profile__content__left__list__button__text}>Тема сайта</p>
                            </button>
                        </ul>
                    </div>
                    <div className={styles.profile__content__right}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
