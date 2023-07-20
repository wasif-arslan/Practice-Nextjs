import Image from "next/image";
import photo1 from "/public/photo1.svg";

export default function HeroSec() {
  return (
    <div className="-mt-[110px] relative  -z-5">
      <div className="absolute mt-[270px] w-[470px]  ml-[160px] text-white z-5">
        <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-5xl">
          Accountancy,{" "}
          <p className="font-extrabold">Bookkeeping & Tax Solutions.</p>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Our friendly and experienced team provide accountancy, bookkeeping and
          tax solutions for individuals and businesses throughout Hampshire,
          Surrey and Middlesex. Contact us today!
        </p>
        <button className=" text-lg mt-4 bg-white p-4 px-7  rounded-full text-[#018596] ">
          Get in Touch{" "}
        </button>
        <button className=" text-lg ml-4	 p-4 px-7 border-2 border-white  rounded-full text-white">
          Our Services
        </button>
      </div>

      <Image src={photo1} alt={""} className="h-screen  w-screen"></Image>
    </div>
  );
}
