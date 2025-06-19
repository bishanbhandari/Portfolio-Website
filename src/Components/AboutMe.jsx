import React from "react";

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
                <a href="#contact" className="cosmic-button">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
