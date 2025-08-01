import React from "react";
import { FaCode } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              I specialize in creating responsive, accessible, and performance
              web interfaces using modern frontend technologies
            </p>
            <p className="text-muted-foreground">
              I'm a frontend developer with a passion for creating responsive,
              user-friendly interfaces and bringing modern web experiences to
              life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/BishanCV.pdf"
                download
                className="px-6 py-2 rounded-full border border-indigo-800 text-indigo-100 bg-indigo-900 hover:bg-indigo-800 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gardient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-violet-800/20">
                  <FaCode />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold ">Frontend Devlopment</h4>
                  <p>
                    crafting responsive, accessible, and visually engaging user
                    interfaces with modern frontend technologies like React and 
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            <div className="gardient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-800/20">
                  <FaRegUserCircle />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold  ">UI/UX Design</h4>
                  <p>
                   Designing intuitive user interface and seamless use 
                   experiences that meet the needs of users and businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="gardient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-800/20">
                  <FaBriefcase />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold  ">Project Experience</h4>
                  <p>
                    Building and deploying real-world web applications, focusing on performance,
          usability, and clean, maintainable code.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutMe;
