import styles from './Profile.module.scss'
import histore from '../../../assets/histore.png'
import favorite from '../../../assets/favorite.png'
import gps from '../../../assets/gps.png'
import sun from '../../../assets/sun.png'
import Image from 'next/image'

const Profile = () => {
<<<<<<< Updated upstream
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
=======
  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <div className={styles.profile__content}>
          <div className={styles.profile__content__left}>
            <ul className={styles.profile__content__left__list}>
              <button className={styles.profile__content__left__list__button}>
                <div
                  className={styles.profile__content__left__list__button__img}
                >
                  <Image src={histore} alt={`${histore}`} />
                </div>
                <p
                  className={styles.profile__content__left__list__button__text}
                >
                  История заказов
                </p>
              </button>
              <button className={styles.profile__content__left__list__button}>
                <div
                  className={styles.profile__content__left__list__button__img}
                >
                  <Image src={favorite} alt={`${favorite}`} />
                </div>
                <p
                  className={styles.profile__content__left__list__button__text}
                >
                  Избранные товары
                </p>
              </button>
              <button className={styles.profile__content__left__list__button}>
                <div
                  className={styles.profile__content__left__list__button__img}
                >
                  <Image src={gps} alt={`${gps}`} />
                </div>
                <p
                  className={styles.profile__content__left__list__button__text}
                >
                  Адрес доставки
                </p>
              </button>
              <button className={styles.profile__content__left__list__button}>
                <div
                  className={styles.profile__content__left__list__button__img}
                >
                  <Image src={sun} alt={`${sun}`} />
                </div>
                <p
                  className={styles.profile__content__left__list__button__text}
                >
                  Тема сайта
                </p>
              </button>
            </ul>
            <div className={styles.profile__content__left__user}>
              <Image src={user} alt='User' />
              <div className={styles.profile__content__left__user__info}>
                <div
                  className={styles.profile__content__left__user__info__text}
                >
                  <h3
                    className={
                      styles.profile__content__left__user__info__text__name
                    }
                  >
                    Ашот
                  </h3>
                  <button
                    className={
                      styles.profile__content__left__user__info__text__button
                    }
                  >
                    <Image src={pencil} alt='pencil' />
                  </button>
                </div>
                <p
                  className={
                    styles.profile__content__left__user__info__description
                  }
                >
                  Lifetv277@gmaIl.com
                </p>
                <p className={styles.profile__content__left__user__info__phone}>
                  +380976986848
                </p>
              </div>
            </div>
          </div>
          {/* <div className={styles.profile__content__right}>
            <div className={styles.profile__content__right__text}>
              <h3 className={styles.profile__content__right__text__title}>
                Адрес доставки
              </h3>
              <button className={styles.profile__content__right__text__button}>
                <p>Новый адрес</p>
                <Image src={plus} alt='plus' />
              </button>
            </div>
>>>>>>> Stashed changes

                    </div>
                </div>
            </div>
<<<<<<< Updated upstream
=======
          </div> */}
          <div className={styles.profile__content__right}>
            <div className={styles.profile__content__right__text}>
              <h3 className={styles.profile__content__right__text__title}>
                Адрес доставки
              </h3>
              <button className={styles.profile__content__right__text__button}>
                <p>Новый адрес</p>
                <Image src={plus} alt='plus' />
              </button>
            </div>

            <div className={styles.profile__content__right__item}>
              <Image
                className={styles.profile__content__right__item__map}
                src={map}
                alt='map'
              />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>

            <div className={styles.profile__content__right__item}>
              <Image
                className={styles.profile__content__right__item__map}
                src={map}
                alt='map'
              />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>

            <div className={styles.profile__content__right__item}>
              <Image
                className={styles.profile__content__right__item__map}
                src={map}
                alt='map'
              />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>
          </div>
>>>>>>> Stashed changes
        </div>
    )
}

export default Profile
