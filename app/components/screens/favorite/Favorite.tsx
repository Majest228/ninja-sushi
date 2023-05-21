import Image from "next/image"
import Profile from "../profile/Profile"
import styles from "../profile/Profile.module.scss"
import favoritecontent from "../../../assets/favoritecontent.png"
import { useAppSelector } from "@/app/hooks/useAppSelector"
import { useAuth } from "@/app/hooks/useAuth"
import { useGetFavoriteByIdQuery } from "@/app/redux/rtk-query/favorite.api"
import dynamic from "next/dynamic"
import { useState } from "react"

const Product = dynamic(() => import("../home/products/product/Product"), { ssr: false })
const Favorite = () => {
  const favoriteState = useAppSelector((state) => state.favorite.favorite)
  const { data: favoriteFetch, isLoading: favoriteLoading } = useGetFavoriteByIdQuery("")
  console.log("Store", favoriteState, "Fetch", favoriteFetch)
  const { user } = useAuth()
  const [active, setActive] = useState("favorite")
  return (
    <Profile active={active}>
      <div className={styles.profile__favorite}>
        <h3 className={styles.profile__favorite__tittle}>Избранные товары</h3>
      </div>
      {user ? (
        favoriteLoading ? (
          []
        ) : favoriteFetch?.length == 0 ? (
          <div className={styles.profile__favorite__content}>
            <Image alt='favoritecontent' src={favoritecontent} />
            <div className={styles.profile__favorite__content__block}>
              <p className={styles.profile__favorite__content__tittle}>
                Вы еще ничего не добавили в избанное
              </p>
              <p className={styles.profile__favorite__content__description}>
                Переходите в интересующую вас категорию и отмечайте понравившиеся
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.profile__favorite__content__products}>
            {favoriteFetch?.map((favorite: any) => (
              <Product
                product={favorite.product}
                favoriteCheck={
                  favoriteLoading
                    ? null
                    : favoriteFetch.some((item) => item.product.id == favorite.product.id)
                }
              />
            ))}
          </div>
        )
      ) : favoriteState?.length == 0 ? (
        <div className={styles.profile__favorite__content}>
          <Image alt='favoritecontent' src={favoritecontent} />
          <div className={styles.profile__favorite__content__block}>
            <p className={styles.profile__favorite__content__tittle}>
              Вы еще ничего не добавили в избанное
            </p>
            <p className={styles.profile__favorite__content__description}>
              Переходите в интересующую вас категорию и отмечайте понравившиеся
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </Profile>
  )
}

export default Favorite
