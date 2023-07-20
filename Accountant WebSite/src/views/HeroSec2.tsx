import Image from "next/image";
import table from "/public/table.svg";
import hersec2a from "/public/hersec2a.svg";

export default function HeroSec2() {
  return (
    <section className="flex flex-col -mt-10 ">
      <div className="flex justify-center">
        <div className="w-80 m-8 p-8 bg-white drop-shadow-lg rounded border-black  h-96 flex flex-col">
          <Image src={table} alt=""></Image>
          <h2 className="font-bold mt-5 text-2xl">Advisory</h2>
          <p className="flex-grow mt-4">
            There’s no price for good advice – discuss ideas, developments and
            strategies with our team of industry experts.
          </p>
          <a
            href="#"
            className=" bg-teal-700 text-white px-2 py-2 rounded text-center text-sm"
          >
            Make A Enquiry
          </a>
        </div>
        <div className="w-80 m-8 p-8 bg-white drop-shadow-lg rounded border-black  h-96 flex flex-col">
          <Image src={table} alt=""></Image>
          <h2 className="font-bold mt-5 text-2xl">Admin</h2>
          <p className="flex-grow mt-4">
            There’s no price for good advice – discuss ideas, developments and
            strategies with our team of industry experts.
          </p>
          <a
            href="#"
            className=" bg-teal-700 text-white px-2 py-2 rounded text-center text-sm"
          >
            Make A Enquiry
          </a>
        </div>
        <div className="w-80 m-8 p-8 bg-white drop-shadow-lg rounded border-black  h-96 flex flex-col">
          <Image src={table} alt=""></Image>
          <h2 className="font-bold mt-5 text-2xl">Accounts</h2>
          <p className="flex-grow mt-4">
            There’s no price for good advice – discuss ideas, developments and
            strategies with our team of industry experts.
          </p>
          <a
            href="#"
            className=" bg-teal-700 text-white px-2 py-2 rounded text-center text-sm"
          >
            Make A Enquiry
          </a>
        </div>
        <div className="w-80 m-8 p-8 bg-white drop-shadow-lg rounded border-black  h-96 flex flex-col">
          <Image src={table} alt=""></Image>
          <h2 className="font-bold mt-5 text-2xl">Tax</h2>
          <p className="flex-grow mt-4">
            There’s no price for good advice – discuss ideas, developments and
            strategies with our team of industry experts.
          </p>
          <a
            href="#"
            className=" bg-teal-700 text-white px-2 py-2 rounded text-center text-sm"
          >
            Make A Enquiry
          </a>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="absolute w-[832px] right-0 mt-[110px] mr-[250px] h-[134px]">
          <h1 className=" text-xl font-semibold  ">
            Take the next step with Black & White chartered certified
            accountants
          </h1>
          <p className="mt-10">
            Become one of the many sole traders, start-ups, and companies that
            have chosen to make the Black and White difference by putting
            themselves and their passion first. Join the rest of our happy
            clients, and take the first step up the stairway to success.
          </p>
          <button className=" text-lg mt-10 text-white  p-4 px-7  rounded-full bg-[#018596] ">
            Get in Touch
          </button>
        </div>

        <Image
          src={hersec2a}
          alt=""
          className="ml-[215px]   w-[1480px] "
        ></Image>
      </div>
    </section>
  );
}
