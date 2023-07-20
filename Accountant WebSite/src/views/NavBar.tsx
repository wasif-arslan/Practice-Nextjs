import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import phone from "/public/phone.svg";

export default function NavBar() {
  return (
    <div className="flex sticky z-10 top-0 bg-white justify-between items-center py-6 px-[9rem] ">
      <div><Link href={"/"}>
        <Image src={logo} alt={""}></Image>
      </Link></div>
      <div className="flex gap-x-10 items-center text-lg">
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Sectors</Link>
        <Link href={"/"}>Structures</Link>
        <Link href={"/"}>Insight</Link>
      
      <div className="flex">
        <Image src={phone} alt={""}></Image>
        <span>+92316-7168682</span>
      </div>
      <button className=" text-lg bg-[#018596] p-4 px-7 rounded-full text-white ">
        Contact Us
      </button>
      </div>
    </div>
  );
}
