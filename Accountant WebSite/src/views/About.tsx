import Image from "next/image";
import logo from "/public/logo.svg";

export default function About() {
  return (
    <section className=" mt-[190px] ml-[215px] w-[1480px] text-[#018596]">
      <div className="flex justify-between h-17 mt-10">
        <div className="w-[300px] ">
          <Image src={logo} alt={""}></Image>
          <p className="mt-10">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Company</h1>
          <p>About</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>How it Works</p>
          <p>Contact Us</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Support</h1>
          <p>Support Carrer</p>
          <p>24h Service</p>
          <p>Quick Chat</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Contact</h1>
          <p>Whatsapp</p>
          <p>24 Hour Support</p>
        </div>
      </div>
    </section>
  );
}
