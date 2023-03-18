import About from "@/App/About/About";
import Contact from "@/App/Contact/Contact";
import Footer from "@/App/Footer/Footer";
import HeroSec from "@/App/HeroSec/HeroSec";
import Home from "@/App/Home/Home";
import NavBar from "@/App/NavBar/NavBar";
import { Head } from "next/document";

export default function Page() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <HeroSec />
      <About />
      <Contact />
      <Footer />
      </div>
  );
}
