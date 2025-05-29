import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
    FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div   id="about"
      className="  relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
  width: "100%",
  backgroundImage: "url('/campus.jpg')",
  backgroundSize: "cover",         // Optional: makes image cover the entire area
  backgroundPosition: "center"     // Optional: centers the image
}}

    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 "></div>

      {/* Content */}
      <div className="relative mt-32 w-full max-w-6xl p-10 space-y-12 rounded-lg">
        <div className="mb-10">
          <div className="flex flex-wrap items-center space-x-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700">DURGA</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-teal-700">KHANAL</h1>
          </div>
          <p className="text-lg text-gray-700 mt-2">
            GOTHATAR, KATHMANDU NEPAL , (977)9866712490, (977) 9814555889,
          </p>
          <p className="text-lg text-teal-700 font-semibold mb-6">
            KCDURGA732@GMAIL.COM
          </p>
          <div>
            <h3 className="text-xl font-medium">Greetings.</h3>
            <p className="text-gray-800">
              I would like to introduce myself as a React Developer with a
              strong interest in building responsive and interactive
              applications.
            </p>
            <p className="text-amber-600 mt-2">
              Currently, I am working as a React Developer....
            </p>
          </div>

          <div className="flex flex-wrap gap-6 py-8">
            <Link
              to="https://www.linkedin.com/in/durga-khanal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl hover:bg-sky-700 transition"
            >
              <FaLinkedinIn />
            </Link>
             <Link
              to="https://www.instagram.com/durga42772?igsh=ZWJ0cHBidzl6Nm93"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://github.com/DurgaKc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl hover:bg-[#4267B2] transition"
            >
               <FaGithub />
            </Link>
          
             <Link
              to="https://www.facebook.com/dur.gaa.kc.438763"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl hover:bg-[#4267B2] transition"
            >
               <FaFacebookF />
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
