import Favourite from "@/app/components/ui/Favourite"
import PlusIco from "@/app/components/ui/Plus"
import Image from "next/image"
import productimg from "../../../../../assets/product.png"
import styles from "./Product.module.scss"
const Product = ({product}: any) => {
  return (
    <div className={styles.product}>
      <Image className={styles.product__image} src={productimg} alt='product' />
      <h3 className={styles.product__title}>{product.name}</h3>
      <p className={styles.product__weight}>Вес: {product.weight} г</p>
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
