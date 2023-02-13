import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <Link href={"/"}>Home</Link>     
  <Link href={"/Contact"}>Contact</Link>
  <Link href={"/About"}>About</Link>
  <br />
  
  <Image src="/image.jpg" alt="image" width={"500"} height={"500"}/>
  </>
  )
}
