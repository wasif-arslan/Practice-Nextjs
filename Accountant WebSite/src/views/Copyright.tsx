import Link from "next/link";


export default function Copyright() {
  return (
    <section>
      <div className="h-[2px] bg-black mt-10"></div>
      <div className="p-7 ml-[215px] w-[1480px] flex text-center justify-between">
        <p>Copyright © 2022. Designed by aethonint.digital</p>
        <div className=" flex space-x-5">
          <Link href={"/"}>Terms</Link>
          <Link href={"/"}>Support</Link>
          <Link href={"/"}>Privacy </Link>
        </div>
      </div>
    </section>
  );
}
