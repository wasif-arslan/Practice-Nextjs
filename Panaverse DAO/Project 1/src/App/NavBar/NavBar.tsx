import Head from "next/head";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import { BiBell } from "react-icons/bi";
import Icons from "./NavComp/icons";

export default function NavBar() {
  return (
    <div className="grid grid-cols-4 bg-black opacity-70  sticky top-0   justify-between w-full p-5  ">
      <div className="ml-[87px] ">
        <Image src={Logo} alt="image1" height={60}></Image>
      </div>
      <div className="flex col-span-2  items-center text-white gap-10">
        <a href="#" className="text-lg hover:text-teal-100">
          Home
        </a>

        <a href="#" className="text-lg hover:text-teal-100">
          About
        </a>

        <a href="#" className="text-lg hover:text-teal-100">
          Products
        </a>

        <a href="#" className="text-lg hover:text-teal-100">
          Blog
        </a>

        <a href="./ContactUs" className="text-lg hover:text-teal-100">
          Contact
        </a>
      </div>
      <div className="flex items-center hover:text-teal-100 space-x-10">
        <Icons></Icons>
      
        <a
          href="#"
          className="px-5 py-3 hover:text-gray-900 font-semibold bg-[#11AD8E] text-white rounded-lg"
        >
          Apply Now !
        </a>
      </div>
    </div>
  );
}
