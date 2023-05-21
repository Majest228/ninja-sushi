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
import address from "../../../assets/address.svg"
import AddressIco from "../../ui/Address"
import { useState } from "react"
import AddressModal from "../../ui/components/address-modal/AddressModal"
import {
  useDeleteAddressMutation,
  useGetAdreesForUserQuery,
} from "@/app/redux/rtk-query/address.api"
import { IAddress } from "../../ui/components/address-modal/address.interface"
import { useGetProfileQuery } from "@/app/redux/rtk-query/profile.api"
import { ILayout } from "../../layout/layout.interface"
import Link from "next/link"
import { IProfile } from "./profile.interface"
import classNames from "classnames"
import ProfileModal from "../../ui/components/profile-modal/ProfileModal"
const Profile = ({ children, active }: IProfile) => {
  const [isShow, setIsShow] = useState(false)
  const {
    isLoading: isLoadingProfile,
    refetch: refetchProfile,
    data: profile,
  } = useGetProfileQuery("")
  console.log(active)
  return (
    <div className={styles.profile}>
      {isShow ? <div className={styles.profile__overlay}></div> : ""}
      <div className={styles.profile__container}>
        <div className={styles.profile__content}>
          <div className={styles.profile__content__left}>
            <ul className={styles.profile__content__left__list}>
              <Link
                href='/profile/histore-order'
                className={classNames(
                  active == "histore-order"
                    ? [styles.profile__content__left__list__active]
                    : [styles.profile__content__left__list__button]
                )}
              >
                <div
                  className={classNames(
                    active == "histore-order"
                      ? [styles.profile__content__left__list__active__img]
                      : [styles.profile__content__left__list__button__img]
                  )}
                >
                  <Image src={histore} alt={`${histore}`} />
                </div>
                <p
                  className={classNames(
                    active == "histore-order"
                      ? [styles.profile__content__left__list__active__text]
                      : [styles.profile__content__left__list__button__text]
                  )}
                >
                  История заказов
                </p>
              </Link>
              <Link
                href='/profile/favorite'
                className={classNames(
                  active == "favorite"
                    ? [styles.profile__content__left__list__active]
                    : [styles.profile__content__left__list__button]
                )}
              >
                <div
                  className={classNames(
                    active == "favorite"
                      ? [styles.profile__content__left__list__active__img]
                      : [styles.profile__content__left__list__button__img]
                  )}
                >
                  <Image src={favorite} alt={`${favorite}`} />
                </div>
                <p
                  className={classNames(
                    active == "favorite"
                      ? [styles.profile__content__left__list__active__text]
                      : [styles.profile__content__left__list__button__text]
                  )}
                >
                  Избранные товары
                </p>
              </Link>
              <Link
                href='/profile/address'
                className={classNames(
                  active == "address"
                    ? [styles.profile__content__left__list__active]
                    : [styles.profile__content__left__list__button]
                )}
              >
                <div
                  className={classNames(
                    active == "address"
                      ? [styles.profile__content__left__list__active__img]
                      : [styles.profile__content__left__list__button__img]
                  )}
                >
                  <Image src={gps} alt={`${gps}`} />
                </div>
                <p
                  className={classNames(
                    active == "address"
                      ? [styles.profile__content__left__list__active__text]
                      : [styles.profile__content__left__list__button__text]
                  )}
                >
                  Адрес доставки
                </p>
              </Link>
              <Link href='/profile/theme' className={styles.profile__content__left__list__button}>
                <div className={styles.profile__content__left__list__button__img}>
                  <Image src={sun} alt={`${sun}`} />
                </div>
                <p className={styles.profile__content__left__list__button__text}>Тема сайта</p>
              </Link>
            </ul>
            <div className={styles.profile__content__left__user}>
              <Image className={styles.profile__content__left__user__img} src={user} alt='User' />
              <div className={styles.profile__content__left__user__info}>
                <div className={styles.profile__content__left__user__info__text}>
                  <h3 className={styles.profile__content__left__user__info__text__name}>
                    {isLoadingProfile ? "" : profile?.name}
                  </h3>
                  <button
                    onClick={() => setIsShow(!isShow)}
                    className={styles.profile__content__left__user__info__text__button}
                  >
                    <Image src={pencil} alt='penFcil' />
                  </button>
                </div>
                <p className={styles.profile__content__left__user__info__description}>
                  {isLoadingProfile ? "" : profile?.email}
                </p>
                <p className={styles.profile__content__left__user__info__phone}>
                  {isLoadingProfile ? "" : profile?.phone}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.profile__content__right}>{children}</div>
        </div>
      </div>
      {isShow ? <ProfileModal setIsShow={setIsShow} /> : ""}
    </div>
  )
}

export default Profile
