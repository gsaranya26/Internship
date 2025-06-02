"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gsaranya26/Internship/tree/main/Day5",
    previewUrl: "https://your-portfolio.vercel.app",
  },
  {
    id: 2,
    title: "Glass-Broken Detection System",
    description: "Real-time glass breakage detection using OpenCV and ML with 85% accuracy, optimized for fast response in varying light.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gsaranya26",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Student Monitoring System",
    description: "Developed a student monitoring system that detects distraction by analyzing facial expressions using AI techniques.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gsaranya26/student-monitorning-during-online-class1",
    previewUrl: "",
  },

 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My Projects
      </h2>

      

      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

