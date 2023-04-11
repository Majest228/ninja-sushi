import { ProductService } from '@/app/services/product.service'
import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@/app/components/screens/home/HomePage'), {
  ssr: false,
})

const Home = ({ sushies, sets, rolls }: any) => {
  return <HomePage sushies={sushies} sets={sets} rolls={rolls} />
}

export async function getStaticProps() {
  try {
    const { data: sushies } = await ProductService.getAll("sushies")
    const { data: sets } = await ProductService.getAll("sets")
    const { data: rolls } = await ProductService.getAll("rolls")
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
        sushies: [],
        sets: [],
        rolls: []
      },
      revalidate: 10,
    }
  }

}


export default Home
