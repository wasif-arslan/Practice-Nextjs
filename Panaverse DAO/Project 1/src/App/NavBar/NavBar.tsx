import Head from "next/head";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black opacity-80  sticky top-0">
        <header className="flex items-center bg-transparent  justify-between w-full py-4 px-6 md:px-12 lg:px-24 text-white">
          <div className="flex items-center">
            <Image src={Logo} alt="image1" height={60}></Image>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-lg hover:text-red-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-red-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-red-800">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-red-800">
                  Blog
                </a>
              </li>
              <li>
                <a href="./ContactUs" className="text-lg hover:text-red-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a
              href="#"
              className="px-5 py-3 hover:text-gray-800 font-semibold bg-[#11AD8E] text-white rounded-lg"
            >
              Apply Now !
            </a>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </header>
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 items-center">
            <li>
              <a href="#" className="text-lg hover:text-red-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-red-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-red-800">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-red-800">
                Blog
              </a>
            </li>
            <li>
              <a href="./ContactUs" className="text-lg hover:text-red-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
