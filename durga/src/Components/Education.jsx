import React from 'react'

const Education = () => {
  return (
   <div id="education"
      className="relative bg-white/90 items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        width: "100%",
        backgroundImage: "url('/durga.jpg')",
      }}
    >
      <div className=" absolute inset-0 bg-white/90 p-8">
        <h1 className="text-5xl mb-5 text-gray-600 font-semibold">
          EDUCATION
        </h1>
        <div className="flex justify-between">
          <span className="text-2xl font-semibold text-gray-800">
            MAHENDRA MULTIPLE CAMPUS, TRIBHUVAN UNIVERSITY
          </span>
          <span className="mr-5 text-teal-900">Passed Year 2023</span>
        </div>
        <p className="text-xl mt-3  font-semibold text-gray-600 w-4/5">
          BACHELOR OF SCIENCE IN COMPUTER SCIENCE AND INFORMATION TECHNOLOGY (BSC.CSIT)
        </p>
       
        <p className="my-3 text-xl">
          Percentage: 75.93
        </p>
{/* +2 level */}
         <div className="flex justify-between mt-18">
          <span className="text-2xl font-semibold text-gray-800">
            MODERN PUBLIC SECONDARY SCHOOL, NEB
          </span>
          <span className="mr-5 text-teal-900">Passed Year 2019</span>
        </div>
        <p className="text-xl mt-3  font-semibold text-gray-600 w-4/5">
         +2 SCIENCE 
        </p>
       
        <p className="my-3 text-xl">
          CGPA: 2.97
        </p>
        {/* SCHOOL LEVEL */}
        <div className="flex justify-between mt-18">
          <span className="text-2xl font-semibold text-gray-800">
            SHREE JANABIKAS SECONDARY SCHOOL, 
          </span>
          <span className="mr-5 text-teal-900">Passed Year 2017</span>
        </div>
        <p className="text-xl mt-3  font-semibold text-gray-600 w-4/5">
        SEE
        </p>
       
        <p className="my-3 text-xl">
          CGPA: 3.30
        </p>
        
      </div>
    </div>
  )
}

export default Education