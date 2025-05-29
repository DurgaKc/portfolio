import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative bg-white/90 items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/durgaa.jpg')",
      }}
    >
      <div className=" absolute inset-0 bg-white/90 p-8">
        <h1 className="text-5xl mb-5 text-gray-600 font-semibold">PROJECTS</h1>

        {/* seventh sem projects */}

        <div className=" justify-between">
          <span className="text-3xl font-semibold text-gray-800">
            ONLINE VOTING SYSTEM (CAMPUS PROJECT)
          </span>

          <p className="my-3">
            An Online Voting System allows users to securely cast votes online,
            with authentication and vote management features. It enhances
            accessibility and privacy while reducing the need for physical
            voting. The front end is built using HTML, CSS, JavaScript, and
            Bootstrap, while the back end is supported by PHP and XAMPP Server.
          </p>
          <Link to="https://github.com/DurgaKc/online_voting_system" className="mb-3 text-sky-600 cursor-pointer">
          https://github.com/DurgaKc/online_voting_system
          </Link>
         

          {/* internship project */}

          <div className="text-3xl font-semibold text-gray-800 mt-7">
            Ministry of Agriculture and Land Management web portal(Internship
            project)
          </div>

          <p className="my-3">
            A web portal is developed to provide a user-friendly platform for
            farmers, land managers, and other stakeholders, featuring an
            interface that provides an online space to access news, updates, and
            share challenges faced by farmers. It is built by using html, Css,
            Javascript, bootstrap and php laravel framework.{" "}
          </p>
          <Link to="https://github.com/DurgaKc/molmacgandaki-intern-" className="mb-3 text-sky-600 cursor-pointer">
         https://github.com/DurgaKc/molmacgandaki-intern-
          </Link>
        

          {/* react project */}

          <div className="text-3xl font-semibold text-gray-800 mt-7">
           A React project
          </div>

          <p className="my-3">
            A responsive website for a Tribhuvan University-affiliated college in Nepalgunj.
            It provides academic information, admission notices, curriculum
            details, student resources (HEMIS), and news updates. The site
            supports smooth navigation and user login for students and faculty.
            It is built by using Reactjs, Tailwind.
          </p>
          <Link to="https://github.com/DurgaKc/molmacgandaki-intern-" className="mb-3 text-sky-600 cursor-pointer">
         https://github.com/DurgaKc/molmacgandaki-intern-
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
