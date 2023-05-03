import Image from "next/image"
import Profile from "../profile/Profile"
import styles from "../profile/Profile.module.scss"
import favoritecontent from "../../../assets/favoritecontent.png"
const Favorite = () => {
  return (
    <Profile>
      <div className={styles.profile__favorite}>
        <h3 className={styles.profile__favorite__tittle}>Избранные товары</h3>
      </div>
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
    </Profile>
  )
}

export default Favorite
