import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Hero() {
  return (
    <>
      <div className="container min-h-screen grid grid-cols-2  -ml-7  space-x-[150px] mt-10 ">
        <div className=" mt-[70px] ">
          <h1 className=" w-fit p-2 text-blue-600 font-bold border-2 rouded-lg mb-10">
      
            Sale 70%
          </h1>
          <h1 className="scroll-m-20 w-[600px] font-extrabold  tracking-tight lg:text-6xl">
            An Industrial Take on Streetwear
          </h1>
          <h2 className="scroll-m-20 w-[500px] mt-10 text-md tracking-tight transition-colors first:mt-0">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </h2>
          <Button className="border-2 mt-10  text-lg  p-7 pr-[50px] pl-[50px] text-white bg-gray-900">
            <ShoppingCart className="mr-2  h-max w-max" /> Start Shopping
          </Button>
          <div className=" h-max w-max flex space-x-[96px] mt-[90px] ">
            <Image
              src={"/Featured1.webp"}
              alt="Photo by Drew Beamer"
              height={30}
              width={98}
              className=" "
            ></Image>
            <Image
              src={"/Featured2.webp"}
              alt="Photo by Drew Beamer"
              height={30}
              width={98}
              className=" "
            ></Image>
            <Image
              src={"/Featured3.webp"}
              alt="Photo by Drew Beamer"
              height={30}
              width={98}
              className=""
            ></Image>
            <Image
              src={"/Featured4.webp"}
              alt="Photo by Drew Beamer"
              height={30}
              width={98}
              className=""
            ></Image>
          </div>
        </div>

        <Image
          src={"/img.jpg"}
          alt="Photo by Drew Beamer"
          height={428}
          width={404}
          className=" h-max w-screen "
        />
      </div>
    </>
  );
}
