import Head from "next/head";
import Image from "next/image";
import main from "@/assets/images/main.png";
import banda from "@/assets/images/banda.svg";

export default function Home() {
  return (
    <div className=" flex 1  relative -mt-40 -z-10">
      <div className="flex 1 lg:mt-[400px] md:mt-[190px] text-white absolute  z-10    ">
        <div className="lg:ml-[250px] md:ml-[150px]">
          <span className="lg:text-5xl md:text-3xl font-semibold ">Become</span>
          <br />
          <span className="lg:text-5xl md:text-3xl font-semibold text-[#11AD8E]">Certified Web 3.0 </span> <span className="lg:text-5xl md:text-3xl font-semibold "> and </span>
          <br />
          <span className="lg:text-5xl md:text-3xl font-semibold text-[#11AD8E]">Metaverse Developer</span>
          <br />

          <p className="lg:mt-5 md:mt-2 lg:text-xl md:text-sm">Launch Your Dev Career With Web 3 and Metaverse <br /> Getting Ready for the Next Generation of the Internet</p>
          <div className="lg:mt-10 md:mt-5">
            <a
              href="#"
              className="px-5 py-3  hover:text-gray-800 font-semibold bg-[#11AD8E] text-white rounded-lg"
            >
              Apply Now !
            </a>
          </div>
        </div>
        <div className="lg:ml-[380px] lg:-mt-20 md:ml-[50px] md:mt-1  ">
          <Image className="md:h-[300px] lg:h-[600px]" src={banda} alt={"banda"}></Image>
        </div>
      </div>

      <Image className="  w-screen    " src={main} alt={"Main"} />
    </div>
  );
}
