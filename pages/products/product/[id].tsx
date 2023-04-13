import { ProductService } from '@/app/services/product.service'
import Product from "../../../app/components/screens/single/Single"

const ProductPage = ({ product }: any) => {
  return <Product product={product} />
}

export async function getStaticProps({ params }) {

  const { data: product } = await ProductService.getById(String(params.id))
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

export default ProductPage
