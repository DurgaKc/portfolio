import React from "react";

const Experience = () => {
  return (
    <div id="experience"
      className="relative bg-white/90 items-center justify-center min-h-screen bg-cover bg-center"
     style={{
  width: "100%",
  backgroundImage: "url('/durgaa.jpg')",

}}

    >
      <div className=" absolute inset-0 bg-white/90 p-8">
        <h1 className="text-5xl mb-5 text-gray-600 font-semibold">
          EXPERIENCE
        </h1>
        <div className="flex justify-between">
          <span className="text-3xl font-bold text-gray-800">
            {" "}
            WEB DEVELOPMENT INTERNSHIP{" "}
          </span>
          <span className="mr-5 text-teal-900">April 2024- June 2024</span>
        </div>
        <p className="text-2xl my-3 font-semibold text-gray-600">
          NINJA INFOSYS PVT.LTD
        </p>
        <p className="mb-3">
          Ninja Infosys is an IT development company based in Nepal, situated at
          Nepalgunj,Banke.I have worked their as intern on PHP and PHP based
          framework specially in Laravel.
        </p>
        <p className="mb-3">
          Ninja Infosys is one of the best IT development company in Nepal that
          works in a flexible environment for the best IT development services
          in Nepalgunj and in Kathmandu both.Ninja Infosys is an IT technical
          solution provider. Technical professionals offer their clients
          services in the field of IT Consultancy, Software Development,
          Web/Mobile Application Development, Project-based Solutions and IT
          System Maintenance.
        </p>
        <div className="flex justify-between">
          <span className="text-3xl font-bold text-gray-800 mt-6">
            {" "}
            WEB DEVELOPMENT INTERNSHIP{" "}
          </span>
          <span className="mr-5 mt-6 text-teal-900">April 2025- Present</span>
        </div>
        <p className="text-2xl my-2 font-semibold text-gray-600">
          DEBUGSOFT PVT.LTD
        </p>
        <p className="mb-3">I am at traineeships at DeBugSoft Pvt. Ltd.</p>
        <p className="mb-5">
          DeBugSoft Pvt. Ltd. is a software development company. DeBugSoft Pvt.
          Ltd. have dedicated and hardworking team working in the field of IT
          industry in Nepal.
        </p>
      </div>
    </div>
  );
};

export default Experience;
