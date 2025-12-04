import React from 'react';

const projects = [
  {
    title: 'My Portfolio',
    description: 'A personal portfolio built with React to showcase my projects and skills.',
    link: 'https://uttejterlapu.vercel.app/',
    github: 'https://github.com/uttejterlapu/Portfolio'

  },
  {
    title: 'Traveling Landing Page',
    description: 'A responsive landing page for travel enthusiasts. Built with Html, CSS and deployed on Vercel.',
    link: 'https://traveling-landing-page-kappa.vercel.app/',
    github: 'https://github.com/uttejterlapu/TravelingLandingPage'
  },
  
  {
    title: 'WelFare Landing Page',
    description: 'A responsive landing page for a Welfare Organization. Built with Html, CSS and deployed on Vercel.',
    link: 'https://uttejterlapu.github.io/Invensis/',
    github: 'https://github.com/uttejterlapu/Invensis'
  },
  {
    title: 'Drag and Drop Quiz App',
    description: 'A Drag and Drop Quiz App using Jquery. Built with Html, CSS, JQuery and deployed on Vercel.',
    link: 'https://uttejterlapu.github.io/dragandrop/',
    github: 'https://github.com/uttejterlapu/dragandrop'
  },
  {
    title: 'Real-Time Stock Market Dashboard',
    description: 'The Real-Time Stock Market Dashboard is a sophisticated web application designed to provide users with up-to-date stock market information. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the dashboard offers real-time trade data visualization and the latest stock market news. It leverages Chart.js for graphical data representation and d3.js for advanced data manipulation and visualization.',
    link: 'https://real-time-stock-market-dashboard.vercel.app/',
    github: 'https://github.com/uttejterlapu/Real-Time-Stock-Market-Dashboard'
  },
];

const Projects = () => {
  return (
    <div id='project' className="bg-[#222831] text-[#EEEEEE] py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-[#393E46] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full max-w-sm">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#00ADB5]">{project.title}</h2>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ADB5] hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ADB5] hover:underline"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
