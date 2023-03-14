import React from "react"
import styles from "./Product.module.scss"
import product from "../../../../../assets/product.png"
import Image from "next/image"
import Favourite from "@/app/components/ui/Favourite"
import PlusIco from "@/app/components/ui/Plus"
const Product = () => {
  return (
    <div className={styles.product}>
      <Image className={styles.product__image} src={product} alt='product' />
      <h3 className={styles.product__title}>Гункан лосось</h3>
      <p className={styles.product__weight}>Вес: 40 г</p>
      <p className={styles.product__desc}>
        Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное
        масло
      </p>
      <div className={styles.product__footer}>
        <p className={styles.product__footer__price}>
          190 <span>грн</span>
        </p>
        <div className={styles.product__footer__buttons}>
          <button className={styles.product__footer__buttons__favourite}>
            <Favourite />
          </button>
          <button className={styles.product__footer__buttons__plus}>
            <PlusIco />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
