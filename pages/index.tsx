import HomePage from "@/app/components/screens/home/HomePage"
import { ProductService } from '@/app/services/product.service'

const Home = ({sushies,sets,rolls}: any) => {
  return <HomePage sushies={sushies} sets={sets} rolls={rolls}/>
}

export async function getStaticProps() {
  try {
    const {data: sushies} = await ProductService.getAll("Суши")
    const {data: sets} = await ProductService.getAll("Сеты")
    const {data: rolls} = await ProductService.getAll("Ролы")
    return {
      props: {
        sushies,
        sets,
        rolls
      },
      revalidate: 10,
   
    }
  } catch (error) {
    return {
      props: {
        sushies : [],
        sets: [],
        rolls: []
      },
      revalidate: 10,
   
    }
  }
 
}


export default Home
