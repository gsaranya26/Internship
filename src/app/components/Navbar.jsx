"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClose = () => setNavbarOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-[#33353F] backdrop-blur-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          {/* Replace with your logo or styled name */}
          Saranya_portfolio
        </Link>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 border border-gray-600 rounded text-gray-300 hover:text-white hover:border-white"
            aria-label={navbarOpen ? "Close Menu" : "Open Menu"}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay Menu */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} onClose={handleClose} />
      )}
    </nav>
  );
};

export default Navbar;
