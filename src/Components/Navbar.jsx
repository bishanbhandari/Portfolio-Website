import React, { useEffect, useState } from "react";
import { FiMonitor } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { cn } from "../lib/util";


const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
      <a href="#hero">
         <h1
          className="flex justify-center items-center font-bold text-2xl"
        >
          BishanPortfolio
          <FiMonitor />
        </h1>
        </a>
        {/*pc*/}
        <div className=" hidden md:flex space-x-8">
          {navItems.map((item,key) => (
              <a key={key} href={item.href} className="hover:text-primary transition-colors duration-300">
                {item.name}
              </a>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
