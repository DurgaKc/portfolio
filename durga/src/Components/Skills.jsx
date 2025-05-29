import React from "react";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaWordpress } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


const Skills = () => {
  return (
   
      <div id="skills"
        className="relative bg-white/90 items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/campus.jpg')",
        }}
      >
        <div className=" absolute inset-0 bg-white/90 p-8">
          <h1 className="text-5xl mb-5 text-gray-600 font-semibold">SKILLS</h1>
          <p className="text-2xl font-semibold text-gray-500">
            PROGRAMMING LANGUAGES
          </p>
          <div className="flex flex-wrap">
            <FaPhp title="php" className="h-20 w-18 text-gray-500"/>
            <FaLaravel title="Laravel" className="h-20 w-18 text-gray-500 pl-6"/>
            <FaHtml5 title="HTML5" className="h-20 w-18 text-gray-500 pl-6"/>
            <FaCss3Alt title="CSS3" className="h-20 w-18 text-gray-500 pl-6"/>
             <FaJs title="Javascript/JQuery" className="h-20 w-18 text-gray-500 pl-6" />
             <GrMysql title="Mysql" className="h-20 w-18 text-gray-500 pl-6" />
             <FaWordpress title="Wordpress" className="h-20 w-18 text-gray-500 pl-6" />
             <FaBootstrap title="Bootstrap" className="h-20 w-18 text-gray-500 pl-6"/>
             <RiTailwindCssFill title="Tailwind" className="h-20 w-18 text-gray-500 pl-6 cursor-pointer"/>
             <FaNpm   title="NPM" className="h-20 w-18 text-gray-500 pl-6 cursor-pointer"/>
          </div>

           <p className="text-2xl mt-3 font-semibold text-gray-500">
            SOFTWARE SKILLS
          </p>
          <div className="flex">
           <FaGitAlt title="git" className="h-20 w-18 text-gray-500 pl-6"/>
           <VscVscode title="Visual Studio" className="h-20 w-18 text-gray-500 pl-6"/>
          </div>
        </div>
      </div>
    
  );
};

export default Skills;
