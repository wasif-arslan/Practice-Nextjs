import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/views/Hero";
import Products from "@/views/Products";
import ProductData from "@/utils/productdata";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Products></Products>
      <ProductData></ProductData>
    </div>
  );
}
