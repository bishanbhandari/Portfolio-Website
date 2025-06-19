import React from "react";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/ThemeToggle";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 ">
     <div className="fixed inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> 
      <Navbar/>
      <main>
      <HeroSection/>
      <AboutMe/>
      </main>
    </div>
  );
};

export default App;
