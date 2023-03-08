import Head from "next/head";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  relative">
        <header className="flex items-center bg-transparent  justify-between w-full py-4 px-6 shadow-md text-white ">
          <div className="flex">
            <img
              src="panaverse80_80.png"
              alt="image 1"
              className="h-12 w-19"
            ></img>
            <h1 className="my-2 font-semibold text-lg hover:text-red-800">Panaverse</h1>
          </div>
          <nav>
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
                <a href="#" className="text-lg hover:text-red-800">
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
