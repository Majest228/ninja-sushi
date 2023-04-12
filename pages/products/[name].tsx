import AllProducts from "@/app/components/screens/products/AllProducts"
import { CategoryService } from '@/app/services/category.service'
import { ProductService } from '@/app/services/product.service'

const ProductsPage = ({ products, categories }) => {
  return <AllProducts products={products} categories={categories} />
}

export async function getStaticProps({ params }) {

  const { data: products } = await ProductService.getManyByIdCategory(String(params.name))
  const { data: categories } = await CategoryService.getAll()
  return {
    props: {
      products,
      categories
    }
  }
}

export async function getStaticPaths() {
  const { data } = await CategoryService.getAll()


  const paths = data.map(category => ({
    params: { name: String(category.name) },
  }))

  return { paths, fallback: false }

}

export default ProductsPage
