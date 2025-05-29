import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path='experience' element={<Experience/>}/>
        <Route path='education' element={<Education/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
        {/* Add more <Route> paths here */}
      </Routes>
    </div>
  );
};

export default Routing;
