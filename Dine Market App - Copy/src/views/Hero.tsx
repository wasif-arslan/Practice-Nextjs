import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import header from "/public/header.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 items-center py-6">
      <div className="flex-1 ">
        <Badge className="py-3 px-6  rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200">
          Sale 10% OFF
        </Badge>
        <h1 className="scroll-m-20 mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black h-12 px-8 mt-4"> Start Shopping</Button>
      </div>
      <div className="flex-1 ">
        <div className="z-10 ">
          <Image src={header} alt={"header"}></Image>
        </div>
        {/*<div className="h-full w-full -z-10 absolute rounded-full bg-gray-200 ">

        </div>*/}
      </div>
    </section>
  );
}
