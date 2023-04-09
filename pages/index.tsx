import HomePage from "@/app/components/screens/home/HomePage"
import { ProductService } from '@/app/services/product.service'

const Home = ({sushies}: any) => {
  return <HomePage sushies={sushies} />
}

export async function getStaticProps() {
  try {
    const {data: sushies} = await ProductService.getAll("sushi")
    return {
      props: {
        sushies
      },
      revalidate: 10,
   
    }
  } catch (error) {
    return {
      props: {
        sushies : []
      },
      revalidate: 10,
   
    }
  }
 
}


export default Home
