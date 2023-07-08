import { Hero } from '@/components/ui/Hero/Hero'
import Products from '@/components/ui/Products/Products'
import Promotions from '@/components/ui/Promotions/Promotions'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <Hero></Hero>
   <Promotions/>
   <Products/>
   </>
  )
}
