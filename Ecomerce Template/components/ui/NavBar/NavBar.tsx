import { ShoppingCart } from "lucide-react";
import { Button } from "../button";
import Image from "next/image";

export function NavBar() {
  return (
    <>
      <div className="flex justify-between ">
        <Image
          src={"/logo.png"}
          alt="Image"
          width={150}
          height={20}
          className="w-max h-max"
        ></Image>
        <div className="flex justify-between space-x-10">
          <h1>Female</h1>
          <h1>Male</h1>
          <h1>Kids</h1>
          <h1>All Products</h1>
        </div>
        <div className="relative rounded-lg border-neutral-700">
        <div className="absolute  pointer-events-auto ...">
          <svg
            className="absolute text-slate-400 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input type="text" placeholder="Search" className="absolute ml-4"></input>
        </div>

        <Button>
          {" "}
          <ShoppingCart className="mr-2 h-4 w-4" />{" "}
        </Button>
      </div>
    </>
  );
}
