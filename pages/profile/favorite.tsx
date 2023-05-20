import dynamic from "next/dynamic"

const Favorite = dynamic(() => import("@/app/components/screens/favorite/Favorite"), {
  ssr: false,
})

const favorite = () => {
  return <Favorite />
}

export default favorite
