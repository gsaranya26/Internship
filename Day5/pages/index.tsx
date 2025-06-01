import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Saranya | Portfolio</title>
        <meta name="description" content="Portfolio of Saranya" />
      </Head>

      <main className="bg-gray-100 min-h-screen text-gray-800">
        <header className="bg-white shadow-md p-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Saranya G</h1>
            <a
              href="/Saranya_Resume.pdf"
              download
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </header>

        <section className="max-w-6xl mx-auto p-6">
          
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              I am a passionate Computer Science student with interests in front-end development, machine learning,
              and real-time systems. I enjoy building responsive and interactive web applications.
            </p>
         

            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p className="mb-2">B.Tech - Computer Science and Engineering (2022-2026)</p>
            <ul className="list-disc list-inside pl-2">
              <li>St.Joseph'S College of Engineering</li>
              <li>CGPA: 8.95</li>
            </ul>
         

       
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside pl-2">
              <li>Languages: Python, Java, JavaScript, C</li>
              <li>Tools: React.js, Next.js, Tailwind CSS, OpenCV, TensorFlow</li>
            
            </ul>
         

          
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside pl-2">
              <li>Real-Time Broken Glass Detection </li>
              <li>Student Monitoring System with Expression and Gaze Tracking</li>
            
            </ul>
          

         
            <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc list-inside pl-2">
              <li>NPTEL - The Joy of Computing Using Python</li>
              
              <li>Frontend Development - Great Learning</li>
            </ul>
         

          
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>Email: saranya.cs21@ritchennai.edu.in</p>
            <p>Phone: +91-XXXXXXXXXX</p>
      
        </section>
      </main>
    </>
  );
}
