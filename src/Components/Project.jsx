import { Description } from "@radix-ui/react-toast";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
const projects = [
  {
    id: 1,
    title: "EduSphere",
    description:
      "EduSphere is a responsive university website built with React.js. It features smooth navigation, dynamic sections, and a contact form powered by Web3Forms. Designed with Flexbox and media queries for a clean, modern UI.",
    image: "/Pictures/EduSphere.png",
    tags: ["React", "CSS"],
    demo: "https://6850572fafb7df11722fcf74--voluble-semolina-4ab3b2.netlify.app/",
    github: "https://github.com/bishanbhandari/EduSphere",
  },

  {
    id: 2,
    title: "EV-olution",
    description:
      "A dynamic and interactive React landing page application featuring a continuously rotating background.",
    image: "/Pictures/Landing.png",
    tags: ["React", "CSS"],
    demo: "https://chimerical-chimera-609c44.netlify.app/",
    github: "https://github.com/bishanbhandari/Landing-Page",
  },

  {
    id: 3,
    title: "AmazonClone",
    description: "Amazon Clone Using HTML, CSS and JavaScript",
    image: "/Pictures/AmazonClone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://68552d63e037d56617ff95ec--radiant-banoffee-5c35db.netlify.app/",
    github: "https://github.com/bishanbhandari/Amazon-Clone",
  },

  {
    id: 4,
    title: "BrowserExtension",
    description: "This browser extension allows users to save the URLs and titles of their currently open tabs for later access.",
    image: "/Pictures/BrowserExtension.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://68552b127a97b56c7cff5da2--incandescent-douhua-efaca3.netlify.app/",
    github: "https://github.com/bishanbhandari/Browser-Extension",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my featured projects that I have worked on. You can
          find the source code and live demo links below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group  rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-bold rounded-full text-white ">
                      {tag}
                    </span>
                  ))}
                </div>
             
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href={project.demo} target="_blank"><FaExternalLinkAlt /></a>
                      <a href={project.github} target="_blank"><VscGithub /></a>
                    </div>
                    </div>
              </div>

            </div>
          ))}
        </div>
                <div className="text-center mt-12">
                  <a href="https://github.com/bishanbhandari"  target="_blank" className="cosmic-button">Check Out My Github for more</a>
                </div>
      </div>
    </section>
  );
};

export default Project;
