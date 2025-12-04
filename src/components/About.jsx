import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-surface-hover/50 backdrop-blur-lg p-8 rounded-2xl border border-border shadow-xl"
                    >
                        <p className="text-lg text-muted leading-relaxed mb-6">
                            I am a <span className="text-primary font-semibold">Software Engineer</span> experienced in building reliable backend systems, scalable web applications, and cloud-native services using JavaScript/TypeScript, Node.js, React, and GCP.
                        </p>
                        <p className="text-lg text-muted leading-relaxed">
                            Strong in API design, distributed debugging, CI/CD, and secure system development. I ranked <span className="text-secondary font-semibold">Top 50 in TCS HackQuest</span> for cybersecurity excellence. Passionate about high-reliability engineering, developer tools, and building systems end-to-end.
                        </p>
                    </motion.div>

                    {/* Stats / Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            { icon: <Code size={32} />, title: "Backend Systems", desc: "Node.js & Fastify" },
                            { icon: <Terminal size={32} />, title: "Cyber Security", desc: "TCS HackQuest Top 50" },
                            { icon: <Database size={32} />, title: "Cloud Native", desc: "GCP & Kubernetes" },
                            { icon: <User size={32} />, title: "Leadership", desc: "Team Lead & Mentor" },
                        ].map((item, index) => (
                            <div key={index} className="bg-surface p-6 rounded-xl border border-border hover:border-primary/50 transition-colors group shadow-sm">
                                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
