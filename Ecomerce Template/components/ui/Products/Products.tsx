import Image from "next/image";
import { Button } from "../button";

export default function Products() {
  return (
    <div className="mt-[150px]">
      <div className="text-center">
        <h1 className="text-xs text-blue-600 font-bold"> PRODUCTS</h1>
        <h1 className="m-3 text-4xl font-bold font-sans">Check What We Have</h1>
      </div>
      <div>
        <div className="w-auto  my-8 mx-auto flex flex-col">
          <Image src="/p1.png" alt="p1" height={370} width={394} />
          <h3 className="mt-2 font-bold text-x ">Brushed Raglan Sweatshirt</h3>
          <span className="block mt-5 font-bold text-2xl text-cyan-800">
            $220
          </span>

          <button className="self-end mt-2 bg-cyan-600 text-white py-2 px-4 rounded-md text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
