import React from "react"
import item from "../../../assets/item.png"
import styles from "./ProductPage.module.scss"
import Image from "next/image"
import nori from "../../../assets/nori.png"
import Switch from "@/app/components/ui/switch/Switch"

const ProductPage = () => {
  return (
    <div className={styles.product}>
      <div className={styles.product__content}>
        <Image src={item} alt='item' />
        <div className={styles.product__content__right}>
          <h3 className={styles.product__content__right__title}>
            Филадельфия с угрем
          </h3>
          <p className={styles.product__content__right__weight}>Вес: 320г</p>
          <p className={styles.product__content__right__consist}>Состав:</p>
          <div className={styles.product__content__right__consist__list}>
            {[...new Array(5).keys()].map((item) => (
              <div
                className={styles.product__content__right__consist__list__item}
              >
                <Image src={nori} alt='nori' />
                <p
                  className={
                    styles.product__content__right__consist__list__item__name
                  }
                >
                  Нори
                </p>
              </div>
            ))}
          </div>
          <Switch />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
