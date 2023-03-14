import React, { useState } from "react"
import styles from "./AllProducts.module.scss"

import Products from "@/app/components/screens/home/products/Products"
import Navigation from "@/app/components/Navigation/Navigation"

const AllProducts = () => {
  return (
    <div className={styles.all}>
      <Navigation />
      <Products type={"single"} title={"Суши"} />
      <button className={styles.all__show}>Показать больше</button>
    </div>
  )
}

export default AllProducts
