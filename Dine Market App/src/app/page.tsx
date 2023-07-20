import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/views/Hero";
import Products from "@/views/Products";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Products></Products>
    </div>
  );
}
