import Image from "next/image";
import { Button } from "../button";

export default function Promotions() {
  return (
    <div className="-mt-[150px]">
      <div className="text-center">
        <h1 className="text-xs text-blue-600 font-bold"> PROMOTIONS</h1>
        <h1 className="m-3 text-4xl font-bold font-sans">
          Our Promotions Events
        </h1>
      </div>
      <section className="grid lg:grid-cols-5 space-x-4">
        <div className="violet lg:col-span-3 space-y-5">
          <div className=" bg-[#d6d6d8] flex items-center place-content-between ">
            <div className="p-10 ">
              <h1 className="text-3xl font-extrabold">
                GET UP TO <span className="text-4xl font-extrabold">60%</span>{" "}
              </h1>

              <h2 className="text-xl ">For the summer season </h2>
            </div>
            <div className=" ">
              <Image
                src={"/event1.webp"}
                alt="event1"
                height={218}
                width={282}
                className=" "
              />
            </div>
          </div>
          <div className="bg-[#212121] text-white p-10 text-center space-y-2">
            <h1 className="text-4xl font-extrabold">GET 30% Off</h1>
            <h2>USE PROMO CODE </h2>
            <div className=" ">
              <Button className="text-xl rounded-lg bg-[#474747] p-3 pr-7 pl-7 ">
                DINEWEEKENDSALE
              </Button>
            </div>{" "}
          </div>
        </div>
        <div className="violet lg:col-span-2 flex space-x-5">
          <div className="bg-[#efe1c7] ">
            <div className="mt-5 ml-5">
              <h1>Flex Sweatshirt</h1>
              <div className="flex space-x-2">
                <h2 className="text-base">$100.00 </h2>
                <h2 className="text-base font-semibold">$75.00</h2>
              </div>
            </div>

            <div className=" ">
              <Image
                src={"/event2.webp"}
                alt="event2"
                width={282}
                height={362}
                className=""
              />
            </div>
          </div>
          <div className="bg-[#d7d7d9] ">
            <div className="mt-5 ml-5">
              <h1>Flex Push Button Bomber</h1>
              <div className="flex space-x-2">
                <h2 className="text-base">$225.00 </h2>
                <h2 className="text-base font-semibold">$190.00</h2>
              </div>
            </div>
            <div className=" h-max w-max">
              <Image
                src={"/event3.webp"}
                alt="event3"
                width={282}
                height={368}
                className=" h-max w-max"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
