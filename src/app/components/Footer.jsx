import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-[#33353F] text-white bg-[#0f0f0f]">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © {currentYear} Saranya. All rights reserved.
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="/" className="hover:text-primary-500">Home</Link>
          <Link href="/#projects" className="hover:text-primary-500">Projects</Link>
          <Link href="/#contact" className="hover:text-primary-500">Contact</Link>
          <Link href="/resume.pdf" className="hover:text-primary-500" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
