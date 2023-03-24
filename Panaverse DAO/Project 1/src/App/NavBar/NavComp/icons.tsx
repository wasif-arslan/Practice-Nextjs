import { BiBell } from "react-icons/bi";
import { FiMoon } from "react-icons/fi";

export default function Icons() {
  return (
    <div className="text-white text-2xl   flex gap-5">
      <BiBell className="hover:text-teal-100"></BiBell>
      <p className="-mt-2">|</p>
      <FiMoon className="hover:text-teal-100"></FiMoon>
    </div>
  );
}
