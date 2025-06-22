import React from "react";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/ThemeToggle";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 ">
     <div className="fixed inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> 
      <Navbar/>
      <main>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
