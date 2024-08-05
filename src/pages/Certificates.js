import React, { useState } from 'react';

// Import local image assets
import cssCertificate from '../assets/certificates/1.jpg';
import ibmCertificate from '../assets/certificates/2.jpg';
import javascriptCertificate from '../assets/certificates/3.jpg';
import awsCertificate from '../assets/certificates/4.jpg';
import problemSolvingCertificate from '../assets/certificates/5.jpg';
import pythonCertificate from '../assets/certificates/6.jpg';

// Certificates data including local images and iframes
const certificates = [
  { src: 'https://codekaro.in/workshop-certificate/d2b8664712bc1882', type: 'iframe' },
  { src: 'https://codekaro.in/course-certificate/be8451787bdb31d5', type: 'iframe' },
  { src: cssCertificate, type: 'image' },
  { src: ibmCertificate, type: 'image' },
  { src: javascriptCertificate, type: 'image' },
  { src: awsCertificate, type: 'image' },
  { src: problemSolvingCertificate, type: 'image' },
  { src: pythonCertificate, type: 'image' }
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <div id="certificates" className="bg-gray-900 text-gray-100 py-8 min-h-screen flex items-center justify-center overflow-hidden p-5">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {certificates.map((certificate, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full flex items-center justify-center rounded-md">
                {certificate.type === 'iframe' ? (
                  <iframe
                    src={certificate.src}
                    title={`Certificate ${index}`}
                    className="w-full h-full border-none rounded-md"
                    style={{ border: 'none' }}
                    allowFullScreen

                  ></iframe>
                ) : (
                  <img
                    src={certificate.src}
                    alt={`Certificate ${index}`}
                    className="w-full h-full object-contain rounded-md"
                    style={{ border: 'none' }}
                  />
                )}
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
            &lt;
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
            &gt;
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {certificates.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-teal-500' : 'bg-gray-500'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
