import Link from "next/link";
import Logo from "/public/logo.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-[9rem]">
      <Link href="/">
        <Image src={Logo} alt="Logo"></Image>
      </Link>
      <ul className="flex gap-x-10 text-lg">
        <li>
          <Link href="/Category/Female">Female</Link>
        </li>
        <li>
          <Link href="/Category/Male">Male</Link>
        </li>
        <li>
          <Link href="/Category/Kids">Kids</Link>
        </li>
        <li>
          <Link href="/Category/SportsWear">SportsWear</Link>
        </li>
        <li>
          <Link href="/AllProducts">All Products</Link>
        </li>
      </ul>
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
        <ShoppingCart className="h-6 w-6"></ShoppingCart>
      </div>
    </div>
  );
}
