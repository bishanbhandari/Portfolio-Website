import React, { useState } from 'react';
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

const ThemeToggle = () => {

    const [isDarkMode,setisDarkMode]=useState(false);

    const toggleTheme=()=>{
        if(isDarkMode){
            setisDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            setisDarkMode(true);
        }
    }


  return (
    <button onClick={toggleTheme}>{isDarkMode?<CiSun className='h-6 w-6 text-yellow-300'/>:<FaRegMoon className='h-6 w-6 text-blue-300'/>}</button>
  )
}

export default ThemeToggle;