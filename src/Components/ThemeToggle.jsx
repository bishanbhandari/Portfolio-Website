import React, { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { cn } from "../lib/util";

const ThemeToggle = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setisDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setisDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setisDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setisDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}>
      {isDarkMode ? (
        <CiSun className="h-6 w-6 text-yellow-300" />
      ) : (
        <FaRegMoon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
