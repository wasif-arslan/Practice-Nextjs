"use client";

import { useTheme } from "next-themes";
import { BiBell } from "react-icons/bi";
import { FiMoon } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";

export default function Icons() {
  const { systemTheme, theme, setTheme } = useTheme();
  let currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="text-white text-2xl   flex gap-5">
      <BiBell className="hover:text-teal-100"></BiBell>
      <p className="-mt-2">|</p>

      {currentTheme == "dark" ? (
        <BsFillSunFill className="hover:text-teal-100" onClick={() => setTheme("light")}></BsFillSunFill>
      ) : (
        <FiMoon className="hover:text-teal-100" onClick={() => setTheme("dark")}></FiMoon>
      )}
    </div>
  );
}
