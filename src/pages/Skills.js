import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Ensure the carousel styles are imported

// Sample skill data
const skills = [
  { 
    category: 'Web Development', 
    skills: ['HTML', 'CSS', 'JavaScript', 'Jquery' ,'React', 'Angular'],
    description: 'Proficient in building responsive and interactive web applications using modern web technologies.'
  },
  { 
    category: 'DATABASES', 
    skills: ['SQL', 'MongoDB'],
    description: 'Experienced in designing, managing, and querying relational and non-relational databases.'
  },
  { 
    category: 'Full Stack Development', 
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js (MERN Stack)'],
    description: 'Skilled in developing complete web applications from frontend to backend using the MERN stack.'
  },
  { 
    category: 'Programming Languages', 
    skills: ['Python', 'C', 'Java', 'JavaScript'],
    description: 'Versatile in multiple programming languages with a strong foundation in problem-solving and algorithm development.'
  },
  { 
    category: 'Software Testing', 
    skills: ['Automated Testing'],
    description: 'Experienced in implementing automated tests to ensure software reliability and performance.'
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  const cardStyle = {
    width: '300px',
    height: '400px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#00ADB5',
    color: '#EEEEEE',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    margin: '10px',
    cursor: 'pointer',
    perspective: '1000px',
  };

  const cardInnerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transformStyle: 'preserve-3d',
  };

  const cardFrontStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.6s ease-in-out',
    background: 'linear-gradient(135deg, #00ADB5 0%, #00A3A6 100%)',
    borderRadius: '15px',
  };

  const cardBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
    color: '#00ADB5',
    borderRadius: '15px',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const handleMouseEnter = e => {
    e.currentTarget.querySelector('.skill-card-inner').style.transform = 'rotateY(180deg)';
  };

  const handleMouseLeave = e => {
    e.currentTarget.querySelector('.skill-card-inner').style.transform = 'rotateY(0deg)';
  };

  return (
    <div id="skills" style={{ backgroundColor: '#222831', color: '#EEEEEE', sssssspadding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Technical Skills</h1>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000} // Adjust this value to control the speed
          keyBoardControl
          customTransition="transform 0.5s ease-in-out"
          transitionDuration={500}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="skill-card"
            >
              <div style={cardInnerStyle} className="skill-card-inner">
                <div style={cardFrontStyle} className="skill-card-front">
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{skill.category}</h2>
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
                      {skill.skills.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={cardBackStyle} className="skill-card-back">
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
