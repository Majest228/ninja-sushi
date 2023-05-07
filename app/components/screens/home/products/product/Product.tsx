import Favourite from "@/app/components/ui/Favourite"
import PlusIco from "@/app/components/ui/Plus"
import Image from "next/image"
import styles from "./Product.module.scss"
import Link from "next/link"
import { useAppDispatch } from "@/app/hooks/useAppDispatch"
import { toggleFavorite } from "@/app/redux/favorite/favorite.slice"
const Product = ({ product }: any) => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.product}>
      <Image
        className={styles.product__image}
        src={`http://localhost:8080/api/files/${product.productPath}`}
        width={331}
        height={270}
        alt='product'
      />
      <Link href={`/products/product/${product.id}`} className={styles.product__title}>
        {product.name}
      </Link>
      <p className={styles.product__weight}>Вес: {product.weight} г</p>
      <p className={styles.product__desc}>{product.description}</p>
      <div className={styles.product__footer}>
        <p className={styles.product__footer__price}>
          {product.price} <span>грн</span>
        </p>
        <div className={styles.product__footer__buttons}>
          <button
            onClick={() => {
              console.log("хз чо")
              dispatch(toggleFavorite(product))
            }}
            className={styles.product__footer__buttons__favourite}
          >
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
