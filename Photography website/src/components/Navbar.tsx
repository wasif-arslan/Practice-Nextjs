import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div>
        <Link href="/">
          <h1>Capture</h1>
        </Link>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div>
            <AiOutlineMenu size={20}/>
        </div>

        {/* Mobile Menu */}
        <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
