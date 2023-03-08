import About from "@/App/About";
import Contact from "@/App/Contact";
import Footer from "@/App/Footer";
import HeroSec from "@/App/HeroSec";
import Home from "@/App/Home";
import NavBar from "@/App/NavBar";

export default function Page() {
  return (
    <>
    <NavBar/>
    <Home/>
    <HeroSec/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}