// src/pages/AboutMe.js

import React from 'react';
import ThreeDModel from './components/ThreeDModel'; // Make sure the path is correct

const AboutMe = () => {
  return (
    <div id="about" className="bg-[#222831] text-[#EEEEEE] min-h-screen flex flex-col items-center py-12 justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-lg p-6 bg-[#393E46] rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
          <ThreeDModel />
        </div>
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <p className="text-lg leading-relaxed">
            Greetings! I'm Uttej Terlapu, a driven web developer and Cyber Security enthusiast currently pursuing my B.Tech in Computer Science at Gandhi Institute of Technology and Management. With a knack for crafting engaging digital solutions and a focus on cybersecurity, I'm committed to pushing boundaries and making a positive impact in the tech world. Let's collaborate and create something remarkable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
