import React from 'react';
import { FiMonitor } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <h1 className='flex justify-center items-center font-bold text-2xl'>BishanPortfolio<FiMonitor/></h1>
        </div>
    </nav>
  )
}

export default Navbar;