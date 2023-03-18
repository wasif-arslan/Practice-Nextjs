import Head from "next/head";
import Image from "next/image";
import main from "@/assets/images/main.png";
import banda from "@/assets/images/banda.svg";

export default function Home() {
  return (
    <div className=" flex 1  relative -mt-40 -z-10">
      <div className="flex 1 mt-[400px] text-white absolute  z-10    ">
        <div className="ml-[250px] ">
          <span className="text-5xl font-semibold ">Become</span>
          <br />
          <span className="text-5xl  font-semibold text-[#11AD8E]">Certified Web 3.0 </span> <span className="text-5xl font-semibold "> and </span>
          <br />
          <span className="text-5xl  font-semibold text-[#11AD8E]">Metaverse Developer</span>
          <br />

          <p className="mt-5  text-xl">Launch Your Dev Career With Web 3 and Metaverse <br /> Getting Ready for the Next Generation of the Internet</p>
          <div className="mt-10">
            <a
              href="#"
              className="px-5 py-3 hover:text-gray-800 font-semibold bg-[#11AD8E] text-white rounded-lg"
            >
              Apply Now !
            </a>
          </div>
        </div>
        <div className="ml-[380px] -mt-20">
          <Image  src={banda} alt={"banda"}></Image>
        </div>
      </div>

      <Image className="  w-screen   " src={main} alt={"Main"} />
    </div>
  );
}
