import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import MainContent from './Components/Maincontent'
import Navigation from './Components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar/>
    <MainContent/>
    <Navigation/>
    <Footer/>
    </>
  )
}
