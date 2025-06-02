"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>react</li>
        <li>Next.Js</li>
        <li>Machine Learning Algorithm</li>
        <li>OpenCV</li>
        <li>Pandas, NumPy</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.E. Computer Science – St. Joseph's College Of Engineering (2022–2026) – CGPA: 8.96</li>
        <li>Higher Secondary – Vallalar Matriculation School (2020–2022) – Score: 90.8%</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>NPTEL: Programming in C (64%)</li>
        <li>NPTEL: DBMS(61%)</li>
        <li>NPTEL: Software Testing(67%)</li>
        <li>Coursera: Supervised Machine Learning</li>
        <li>Coursera: Unsupervised Machine Learning</li>
        <li>Coursera: Applied Machine Learning in Python</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm Saranya G, a passionate Computer Science undergraduate focused on AI and machine learning. 
            I specialize in building intelligent systems like real-time glass-break detection and student attention monitoring. 
            With strong foundations in Python, Java, OpenCV, and ML algorithms, I aim to solve real-world problems using technology. 
            I’m driven by curiosity, continuous learning, and the impact of intelligent systems on daily life.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
