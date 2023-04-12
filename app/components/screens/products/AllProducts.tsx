import Navigation from "@/app/components/Navigation/Navigation"
import styles from "./AllProducts.module.scss"
import Products from "./Products"

const AllProducts = ({ products, categories }) => {
  return (
    <div className={styles.all}>
      <Navigation categories={categories} products={products} />
      <div className={styles.all__container}>
        <Products products={products} />
        <button className={styles.all__show}>Показать больше</button>
      </div>
    </div>
  )
}

export default AllProducts
