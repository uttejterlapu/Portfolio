import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
        color: 'from-yellow-400 to-yellow-600'
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'Fastify.js', 'REST APIs'],
        color: 'from-green-400 to-green-600'
    },
    {
        category: 'Frontend',
        skills: ['React.js', 'HTML5', 'CSS3', 'Vite.js', 'Tailwind CSS'],
        color: 'from-blue-400 to-blue-600'
    },
    {
        category: 'Cloud & DevOps',
        skills: ['GCP', 'Cloud Run', 'Kubernetes', 'Docker', 'Jenkins', 'CI/CD'],
        color: 'from-purple-400 to-purple-600'
    },
    {
        category: 'Cyber Security',
        skills: ['OWASP', 'Burp Suite', 'Wireshark', 'Nmap'],
        color: 'from-red-400 to-red-600'
    },
    {
        category: 'Databases & Tools',
        skills: ['SQL', 'MongoDB', 'GitHub', 'Postman', 'Firebase', 'Workday'],
        color: 'from-pink-400 to-pink-600'
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-background relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface rounded-2xl p-6 border border-border hover:border-border/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group shadow-md"
                        >
                            <div className={`h-2 w-12 rounded-full bg-gradient-to-r ${category.color} mb-6 group-hover:w-full transition-all duration-500`}></div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-surface-hover text-muted rounded-full text-sm font-medium border border-border group-hover:bg-surface-hover/80 group-hover:text-foreground transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
