import FavouriteIco from "@/app/components/ui/Favourite"
import PlusIco from "@/app/components/ui/Plus"
import Image from "next/image"
import Link from "next/link"
import styles from "./Product.module.scss"
import { useAppDispatch } from "@/app/hooks/useAppDispatch"
import { useAuth } from "@/app/hooks/useAuth"
import { useCreateFavoriteMutation } from "@/app/redux/rtk-query/favorite.api"
import { IProduct } from "@/app/types/product.interface"
//
const Product = ({ product }: any) => {
  const dispatch = useAppDispatch()
  const { user } = useAuth()
  const [createFavorite] = useCreateFavoriteMutation()
  const saveToFavorite = (product: IProduct) => {
    createFavorite({ productId: product.id })
  }
  return (
    <div className={styles.product}>
      <div className={styles.product__content}>
        <Image
          src={`http://localhost:8080/api/files/${product.productPath}`}
          width={331}
          height={290}
          alt='product'
        />
        <Link href={`/products/product/${product.id}`} className={styles.product__content__name}>
          {product.name}
        </Link>
        <span className={styles.product__content__weight}>Вес: {product.weight} г</span>
        <p className={styles.product__content__desc}>
          Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло
        </p>
        <div className={styles.product__content__buttons}>
          <div className={styles.product__content__price}>
            <p>
              {product.price}
              <span>тг</span>
            </p>
          </div>
          <div className={styles.product__content__buttons__items}>
            <button
              onClick={() => {
                console.log("хз чо")
                user ? saveToFavorite(product) : dispatch(toggleFavorite(product))
              }}
              className={styles.product__content__buttons__items__favorite}
            >
              <FavouriteIco />
            </button>
            <button className={styles.product__content__buttons__items__add}>
              <PlusIco />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
