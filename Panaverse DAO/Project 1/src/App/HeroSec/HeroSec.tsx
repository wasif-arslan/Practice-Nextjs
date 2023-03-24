import Head from "next/head";
import Image from "next/image";

import bandasitted from "@/assets/images/bandasitted.svg";

export default function HeroSec() {
  return (
    <>
      <div className="flex 1 m-40">
        <div className="mt-20">
          <Image src={bandasitted} alt="sittedbanda"></Image>
        </div>
        <div className="bg-gray-800 w-[714px] h-[416px] text-center p-10  text-[#11AD8E] rounded-3xl">
            <span className="text-[48px]">The Program in a Nutshell</span>
          <br />
          <p className="text-[32px] text-underline mt-[10px]">Earn While You Learn</p>
          <p className="text-white mt-[20px] text-[20px]">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </p>
        </div>
      </div>
    </>
  );
}
