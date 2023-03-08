import Head from "next/head";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  relative">
        <header className="flex items-center bg-transparent  justify-between w-full py-4 px-6 shadow-md text-white ">
       
            <img src="Logo.png" alt="image 1" className="h-12 w-19"></img>
        
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className=" hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
