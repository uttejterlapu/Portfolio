// src/pages/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer id='contact' className="bg-[#393E46] text-[#EEEEEE] py-4">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <p className="text-center text-lg">Connect with me:</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/uttejterlapu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ADB5] hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/uttejterlapu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ADB5] hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:uttejterlapu@gmail.com"
            className="text-[#00ADB5] hover:underline"
          >
            Email
          </a>
        </div>
        <p className="text-center text-sm mt-4">
          &copy; {new Date().getFullYear()} Uttej Terlapu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
