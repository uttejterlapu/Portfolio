import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        company: "Tata Consultancy Services (Lloyds Banking Group)",
        location: "Hyderabad, Telangana",
        position: "Systems Engineer",
        duration: "Jul 2025 – Present",
        type: "work",
        responsibilities: [
            "Built and maintained Node.js (Fastify) microservices powering secure banking workflows used by 300K+ customers.",
            "Implemented CI/CD pipelines (Jenkins + GCP Kubernetes) reducing deployment time by 30% and improving release reliability.",
            "Enhanced observability using logs/metrics tracing, improving incident resolution time by ~25%.",
            "Collaborated in Agile sprints to ship compliant, security-focused features for enterprise banking systems."
        ]
    },
    {
        company: "Accenture Solutions Private Ltd",
        location: "Bengaluru, India",
        position: "Packaged App Development Associate Intern",
        duration: "Feb 2025 – Jun 2025",
        type: "work",
        responsibilities: [
            "Worked on Workday’s HCM suite to build and configure scalable HR business processes.",
            "Developed and deployed EIB integrations for automated data import/export using custom layouts and transformation logic."
        ]
    },
    {
        company: "AARSFS",
        location: "Remote",
        position: "MERN Stack Web Developer Intern",
        duration: "Apr 2024 – July 2024",
        type: "work",
        responsibilities: [
            "Developed web interfaces and backend APIs with a focus on React.js and Express.js.",
            "Debugged and fixed UI/UX bugs to enhance usability and performance.",
            "Worked in Agile sprints, actively participating in reviews and stand-ups."
        ]
    },
    {
        company: "INVENSIS TECHNOLOGIES PRIVATE LIMITED",
        location: "Bengaluru, India",
        position: "MERN Stack Web Developer Intern",
        duration: "April 2024 – June 2024",
        type: "work",
        responsibilities: [
            "Built and optimized full-stack web applications using MongoDB, Express.js, React, Angular, and Node.js.",
            "Worked on improvements of the Angular web applications."
        ]
    },
    {
        company: "Farminno-Tech",
        location: "Visakhapatnam, India",
        position: "Web Dev Intern",
        duration: "Aug 2023 – Dec 2023",
        type: "work",
        responsibilities: [
            "Built responsive web components using React.js, HTML, and CSS, ensuring cross-browser support.",
            "Collaborated with designers to implement mobile-first layouts and intuitive UIs.",
            "Optimized frontend performance."
        ]
    },
    {
        company: "IEEE CS Student Club, GITAM",
        location: "Visakhapatnam",
        position: "Web Development Lead",
        duration: "Jul 2023 – Apr 2024",
        type: "education",
        responsibilities: [
            "Led web development initiatives, coordinated cross-functional teams, and conducted technical workshops.",
            "Managed project design, development, and presentation."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border rounded-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    } items-center md:justify-between`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>

                                {/* Content */}
                                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                                    <div className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors shadow-lg">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2 text-primary">
                                                {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                                                <span className="font-semibold text-sm uppercase tracking-wider">{exp.type === 'work' ? 'Work' : 'Activity'}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted text-sm">
                                                <Calendar size={16} />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                                        <h4 className="text-lg text-primary mb-2 flex items-center gap-2">
                                            {exp.company}
                                            <span className="text-muted text-sm font-normal flex items-center gap-1">
                                                <MapPin size={14} /> {exp.location}
                                            </span>
                                        </h4>

                                        <ul className="list-disc list-inside space-y-2 text-muted text-sm">
                                            {exp.responsibilities.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
