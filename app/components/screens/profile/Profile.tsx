import { UserService } from "@/app/services/user.service"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import basket from "../../../assets/basket.png"
import favorite from "../../../assets/favorite.png"
import gps from "../../../assets/gps.png"
import histore from "../../../assets/histore.png"
import map from "../../../assets/map.png"
import pencil from "../../../assets/pencil.png"
import plus from "../../../assets/plus.png"
import sun from "../../../assets/sun.png"
import user from "../../../assets/user.png"
import styles from "./Profile.module.scss"
const Profile = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () => UserService.getProfile(),
  })

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
                <p className={styles.profile__content__left__list__button__text}>
                  Избранные товары
                </p>
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
            <div className={styles.profile__content__left__user}>
              <Image className={styles.profile__content__left__user__img} src={user} alt='User' />
              <div className={styles.profile__content__left__user__info}>
                <div className={styles.profile__content__left__user__info__text}>
                  <h3 className={styles.profile__content__left__user__info__text__name}>
                    {isLoading ? "" : data.name}
                  </h3>
                  <button className={styles.profile__content__left__user__info__text__button}>
                    <Image src={pencil} alt='pencil' />
                  </button>
                </div>
                <p className={styles.profile__content__left__user__info__description}>
                  {isLoading ? "" : data.email}
                </p>
                <p className={styles.profile__content__left__user__info__phone}>
                  {isLoading ? "" : data.phone}
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

                    </div>
                </div>
            </div>

          </div> */}
          <div className={styles.profile__content__right}>
            <div className={styles.profile__content__right__text}>
              <h3 className={styles.profile__content__right__text__title}>Адрес доставки</h3>
              <button className={styles.profile__content__right__text__button}>
                <p>Новый адрес</p>
                <Image src={plus} alt='plus' />
              </button>
            </div>
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>{" "}
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>{" "}
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>{" "}
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>{" "}
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>{" "}
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>{" "}
            <div className={styles.profile__content__right__item}>
              <Image className={styles.profile__content__right__item__map} src={map} alt='map' />
              <div className={styles.profile__content__right__item__address}>
                <p>Киев, Николая Краснова, 16</p>
                <span>Подьезд 5, этаж 3, квартира 104</span>
              </div>
              <button className={styles.profile__content__right__item__button}>
                <Image src={basket} alt='basket' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
