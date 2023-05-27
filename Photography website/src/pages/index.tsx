import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero
        heading={"Capture Now"}
        message={"Capture Moments and keep them Alive"}
      ></Hero>
     
    </div>
  );
}
