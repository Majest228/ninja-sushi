import Image from "next/image"
import styles from "./ProfileModal.module.scss"
import close from "../../../../assets/closemodal.png"

const ProfileModal = ({ setIsShow }: any) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        // submitDate()
      }}
      className={styles.profile}
    >
      <button onClick={() => setIsShow(false)} className={styles.profile__close}>
        <Image src={close} alt='close' />
      </button>
      <div className={styles.profile__content}>
        <h3 className={styles.profile__content__title}>Личные данные</h3>
        <div className={styles.profile__content__search}>
          <label htmlFor=''>Имя</label>
          <div className={styles.profile__content__main}>
            <input type='text' />
          </div>
          <label htmlFor=''>Email</label>
          <div className={styles.profile__content__main}>
            <input type='text' />
          </div>
        </div>
        <button type='submit' className={styles.profile__content__button}>
          Сохранить изменения
        </button>
      </div>
    </form>
  )
}

export default ProfileModal
