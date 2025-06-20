import { Description } from "@radix-ui/react-toast";
import React from "react";
const projects = [
  {
    id: 1,
    title: "EduSphere",
    description:
      "EduSphere is a responsive university website built with React.js. It features smooth navigation, dynamic sections, and a contact form powered by Web3Forms. Designed with Flexbox and media queries for a clean, modern UI.",
      image:"/Pictures/EduSphere.png",
      tags:["React","CSS"],
      demo:"https://6850572fafb7df11722fcf74--voluble-semolina-4ab3b2.netlify.app/",
      github:"https://github.com/bishanbhandari/EduSphere",
  },

  {
    id: 2,
    title: "EV-olution",
    description:
      "A dynamic and interactive React landing page application featuring a continuously rotating background.",
      image:"/Pictures/EV-olution.png",
      tags:["React","CSS"],
      demo:"https://chimerical-chimera-609c44.netlify.app/",
      github:"https://github.com/bishanbhandari/Landing-Page",
  },

  {
    id: 3,
    title: "AmazonClone",
    description:
      "Amazon Clone Using HTML, CSS and JavaScript",
      image:"/Pictures/AmazonClone.png",
      tags:["HTML","CSS","JavaScript"],
      demo:"https://68552d63e037d56617ff95ec--radiant-banoffee-5c35db.netlify.app/",
      github:"https://github.com/bishanbhandari/Amazon-Clone",
  },
  
  {
    id: 4,
    title: "BrowserExtension",
    description:
      "Amazon Clone Using HTML, CSS and JavaScript",
      image:"/Pictures/BrowserExtension.png",
      tags:["HTML","CSS","JavaScript"],
      demo:"https://68552b127a97b56c7cff5da2--incandescent-douhua-efaca3.netlify.app/",
      github:"https://github.com/bishanbhandari/Browser-Extension",
  },
];

const Project = () => {
  return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects</span>
        </h2>
    </div>
  </section>;
};

export default Project;
