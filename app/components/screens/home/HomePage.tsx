import React from "react"
import styles from "./HomePage.module.scss"
import banner from "../../../assets/banner1.jpg"
import Image from "next/image"
const HomePage = () => {
  return (
    <div className={styles.home}>
      <div
        className={styles.home__slider}
        style={{
          backgroundImage: `url(${banner.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        123 3
      </div>
    </div>
  )
}

export default HomePage
