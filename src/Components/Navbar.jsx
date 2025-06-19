import React, { useEffect, useState } from "react";
import { FiMonitor } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { cn } from "../lib/util";
import { TbXboxX } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled ? "py-3 backdrop-blur-md bg-transparent shadow-none" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero">
          <h1 className="flex justify-center items-center font-bold text-2xl">
            BishanPortfolio
            <FiMonitor />
          </h1>
        </a>
        {/*pc nav*/}
        <div className=" hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 z-50 cursor-pointer"
          >
          {isMenuOpen ? <TbXboxX size={24} /> : <IoMdMenu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className=" flex flex-col space-y-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
