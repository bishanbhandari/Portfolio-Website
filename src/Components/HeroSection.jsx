import React from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Bishan{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Bhandari
            </span>
          </h1>

          <p className="text-lg md:text-xl  text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a frontend developer with skills in HTML, CSS, JavaScript and
            React. I build clean, responsive, and interactive web interfaces,
            always aiming to learn and take on new challenges.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span>scroll</span>
            <FaRegArrowAltCircleDown />

      </div>
    </section>
  );
};

export default HeroSection;
