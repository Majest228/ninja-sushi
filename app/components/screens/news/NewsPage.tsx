import React from "react"
import styles from "./NewsPage.module.scss"
import search from "../../../assets/search.png"
import Image from "next/image"
const NewsPage = () => {
  return (
    <div className={styles.news}>
      <h3 className={styles.news__title}>Новости</h3>
      <div className={styles.news__header}>
        <ul className={styles.news__header__left}>
          <button className={styles.news__header__left__link}>Все</button>
          <button className={styles.news__header__left__link}>
            Обновления в меню
          </button>
          <button className={styles.news__header__left__link}>SushiKino</button>
        </ul>
        <div className={styles.news__header__right}>
          <Image src={search} alt='search' />
          <input
            className={styles.news__header__right__input}
            type='text'
            placeholder='Введите ключевые слова'
          />
        </div>
      </div>
    </div>
  )
}

export default NewsPage
