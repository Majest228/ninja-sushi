import styles from "./Switch.module.scss"
import bottle from "../../../../assets/bootle.png"
const Switch = ({ label }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__switch}>
        <input
          type='checkbox'
          className={styles.checkbox}
          name={label}
          id={label}
        />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  )
}

export default Switch
