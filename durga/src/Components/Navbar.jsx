import React, { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import Projects from "./Projects";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleJump = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);          // close drawer on mobile after click
    }
  };

  return (
    <div className="flex h-screen">
      {/* ─────────────────────  Left sidebar  ───────────────────── */}
      <aside className="fixed top-0 left-0 w-full md:w-64 sm:h-auto md:h-screen
                        bg-teal-800 text-white flex flex-col md:items-center
                        py-10 px-4 z-10">
        {/* Avatar (hidden on small screens) */}
        <div className="w-40 h-40 border-4 border-teal-200 rounded-full
                        overflow-hidden mb-5 hidden md:block">
          <img
            src="/durga.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + burger icon (mobile only) */}
        <div className="flex justify-between items-center w-full md:hidden">
          <h1 className="text-4xl font-semibold">Durga Khanal</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <RxCross1 className="size-6" />
            ) : (
              <AiOutlineMenu className="size-6" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-col space-y-4 text-center mt-5 text-xl font-bold">
          <button onClick={() => handleJump("about")}      className="hover:text-teal-200">ABOUT</button>
          <button onClick={() => handleJump("experience")} className="hover:text-teal-200">EXPERIENCE</button>
          <button onClick={() => handleJump("education")}  className="hover:text-teal-200">EDUCATION</button>
          <button onClick={() => handleJump("skills")}     className="hover:text-teal-200">SKILLS</button>
          <button onClick={() => handleJump("projects")}  className="hover:text-teal-200">PROJECTS</button>
        </nav>

        {/* Mobile drawer navigation */}
        {isMenuOpen && (
          <nav className="flex flex-col space-y-4 mt-6 text-xl font-bold ">
            <button onClick={() => handleJump("about")}      className="hover:text-teal-200 text-start ml-2">ABOUT</button>
            <button onClick={() => handleJump("experience")} className="hover:text-teal-200 text-start ml-2">EXPERIENCE</button>
            <button onClick={() => handleJump("education")}  className="hover:text-teal-200 text-start ml-2">EDUCATION</button>
            <button onClick={() => handleJump("skills")}     className="hover:text-teal-200 text-start ml-2">SKILLS</button>
            <button onClick={() => handleJump("projects")}  className="hover:text-teal-200 text-start ml-2">PROJECTS</button>
          </nav>
        )}
      </aside>

      {/* ─────────────────────  Right content  ───────────────────── */}
      <main className="md:ml-64 flex-1 h-screen overflow-y-auto scroll-smooth">
        <About       />
        <Experience  />
        <Education   />
        <Skills      />
        <Projects    />
        {/* <Interests />  ← add this component if you have it */}
      </main>
    </div>
  );
};

export default Navbar;
