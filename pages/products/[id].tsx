import AllProducts from "@/app/components/screens/products/AllProducts"
import { CategoryService } from '@/app/services/category.service'

const ProductsPage = () => {
  return <AllProducts />
}

export async function getStaticProps({ params }) {

  const { data: product } = await CategoryService.getById(String(params.id))
  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  const { data } = await ProductService.getAll("")


  const paths = data.map(product => ({
    params: { id: String(product.id) },
  }))

  return { paths, fallback: false }

}

export default ProductsPage
