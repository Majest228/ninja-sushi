import Favourite from "@/app/components/ui/Favourite"
import PlusIco from "@/app/components/ui/Plus"
import Image from "next/image"
import Link from 'next/link'
import styles from "./Product.module.scss"
const Product = ({product}: any) => {
  return (
    <Link href={`/products/product/${product.id}`} className={styles.product}>
      <Image className={styles.product__image} src={`http://localhost:8080/api/files/${product.productPath}`} width={331} height={270} alt='product' />
      <h3 className={styles.product__title}>{product.name}</h3>
      <p className={styles.product__weight}>Вес: {product.weight} г</p>
      <p className={styles.product__desc}>
        {product.description}
      </p>
      <div className={styles.product__footer}>
        <p className={styles.product__footer__price}>
          {product.price} <span>грн</span>
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
    </Link>
  )
}

export default Product
