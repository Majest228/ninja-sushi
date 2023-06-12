import Success from "../../Success"
import styles from "./Notification.module.scss"

const Notification = () => {
  return (
    <div className={styles.notification}>
      <div className={styles.notification__content}>
        <Success />
        <div className={styles.notification__content__text}>
          <h3>Выполнено</h3>
          <p>Какой-то текст</p>
        </div>
      </div>
    </div>
  )
}

export default Notification
