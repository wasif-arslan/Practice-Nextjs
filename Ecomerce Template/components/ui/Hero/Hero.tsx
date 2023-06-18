import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Hero() {
    return (
        <>
            <div className="flex p-10 justify-between">
                <div className="w-[500px] m-9">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        An Industrial Take on Streetwear
                    </h1>
                    <h2 className="scroll-m-20 border-b pb-2 mt-5 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </h2>
                    <Button>
                        <ShoppingCart className="mr-2  h-4 w-4" /> Shopping Cart
                    </Button>
                </div>
                <div className="">
                    
                        <Image
                            src={"/img.jpg"}
                            alt="Photo by Drew Beamer"
                            height={400}
                            width={600}
                            className="rounded-md object-cover w-full "
                        />
                    
                </div>
            </div>
        </>
    )
}