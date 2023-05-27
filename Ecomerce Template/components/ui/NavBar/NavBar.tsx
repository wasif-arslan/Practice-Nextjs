import { ShoppingCart } from "lucide-react";
import { Button } from "../button";
import Image from "next/image"

export function NavBar() {
    return (
        <>
        <div className="flex justify-between h-17 p-8">
            <Image src={"/logo.png"} alt="Image" width={60} height={40}></Image>
            <h1>Female</h1>
            <h1>Male</h1>
            <h1>Kids</h1>
            <h1>All Products</h1>
            <p>Search Bar</p>
            <Button> <ShoppingCart className="mr-2 h-4 w-4" /> </Button>
        </div>
        </>
    )
}
