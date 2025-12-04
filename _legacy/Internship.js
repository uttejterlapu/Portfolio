import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const professionalExperiences = [
    {
        company: "AARSFS",
        location: "Remote",
        position: "MERN Stack Web Developer Intern",
        duration: "Apr 2024 – July 2024",
        responsibilities: [
            "Developed and tested web applications using the MERN stack, ensuring high performance and security.",
            "Conducted manual and automated testing to identify and fix bugs."
        ]
    },
    {
        company: "INVENSIS TECHNOLOGIES PRIVATE LIMITED",
        location: "Onsite",
        position: "MERN Stack Web Developer Intern",
        duration: "April 2024 – June 2024",
        responsibilities: [
            "Built and optimized full-stack web applications using MongoDB, Express.js, React, Angular and Node.js.",
            "Worked on improvements of the Angular web applications."
        ]
    },
    {
        company: "Farminno-Tech",
        location: "Remote",
        position: "Web Developer Intern",
        duration: "Aug 2023 – Dec 2023",
        responsibilities: [
            "Developed and maintained the frontend of the company website using HTML, CSS, JavaScript, and React.",
            "Collaborated with the design team to implement responsive and user-friendly web pages."
        ]
    }
];

const extracurricularActivities = [
    {
        company: "IEEE CS Student Club, GITAM",
        location: "Visakhapatnam",
        position: "Web Development Lead",
        duration: "Jul 2023 – Present",
        responsibilities: [
            "Lead web development projects and manage a team of developers."
        ]
    },
    {
        company: "ACM Student Club, GITAM",
        location: "Visakhapatnam",
        position: "Web Development Team Member",
        duration: "Oct 2023 – Present",
        responsibilities: [
            "Contributed to the development and maintenance of the club's website."
        ]
    }
];

const ExperienceRoadmap = () => {
    return (
        <div id='internship' className="experience-roadmap bg-[#222831] text-[#EEEEEE] p-6">
            <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
            <VerticalTimeline>
                {professionalExperiences.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#393E46', color: '#EEEEEE' }}
                        contentArrowStyle={{ borderRight: '7px solid  #393E46' }}
                        date={exp.duration}
                        iconStyle={{ background: '#00ADB5', color: '#EEEEEE' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-semibold">{exp.company}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-md text-[#00ADB5]">{exp.location}</h4>
                        <h4 className="vertical-timeline-element-subtitle text-md italic">{exp.position}</h4>
                        <ul className="list-disc list-inside mt-4">
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx} className="mt-2">{item}</li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

            <h2 className="text-3xl font-bold mt-10 mb-6">Extracurricular Activities</h2>
            <VerticalTimeline>
                {extracurricularActivities.map((activity, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#393E46', color: '#EEEEEE' }}
                        contentArrowStyle={{ borderRight: '7px solid  #393E46' }}
                        date={activity.duration}
                        iconStyle={{ background: '#00ADB5', color: '#EEEEEE' }}
                        icon={<FaGraduationCap />}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-semibold">{activity.company}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-md text-[#00ADB5]">{activity.location}</h4>
                        <h4 className="vertical-timeline-element-subtitle text-md italic">{activity.position}</h4>
                        <ul className="list-disc list-inside mt-4">
                            {activity.responsibilities.map((item, idx) => (
                                <li key={idx} className="mt-2">{item}</li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default ExperienceRoadmap;
