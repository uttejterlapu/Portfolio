import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Clear Home Intel',
        description: 'Full-stack document-analytics platform. Built a scalable PDF ingestion pipeline processing 1,000+ pages with LLM-based analysis. Deployed on Cloud Run, reducing latency by 25%.',
        tags: ['Vite.js', 'Node.js', 'MongoDB', 'OpenAI API'],
        link: null, // No link provided in resume
        github: null
    },
    {
        title: 'Proxy Bazzar',
        description: 'Full-stack e-commerce platform to buy/rent VPS, RDP, and proxies. Features responsive UI, secure APIs, admin panel, referral codes, and payment gateway.',
        tags: ['MERN Stack', 'MongoDB', 'React.js', 'Node.js'],
        link: null,
        github: null
    },
    {
        title: 'Mobile Wallet (Offline Support)',
        description: 'Android app with desktop-like UI using WebView. Built secure sync logic between Android client and web backend with offline support.',
        tags: ['Kotlin', 'Node.js', 'Express', 'MongoDB'],
        link: null,
        github: null
    },
    {
        title: 'Real-Time Stock Market Dashboard',
        description: 'Sophisticated web app for real-time stock market data. Offers trade data visualization and latest news using Chart.js and d3.js.',
        tags: ['MERN Stack', 'Socket.io', 'Chart.js'],
        link: 'https://real-time-stock-market-dashboard.vercel.app/',
        github: 'https://github.com/uttejterlapu/Real-Time-Stock-Market-Dashboard'
    },
    {
        title: 'Blockchain Certificate System',
        description: 'Decentralized certificate issuance system using Solidity & Ethereum. Ensures tamper-proof verification with Web3.js & IPFS storage.',
        tags: ['Solidity', 'Ethereum', 'Web3.js', 'IPFS'],
        link: null,
        github: null
    },
    {
        title: 'My Portfolio',
        description: 'This very portfolio! A showcase of my skills and projects, built with React and modern styling.',
        tags: ['React', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://uttejterlapu.vercel.app/',
        github: 'https://github.com/uttejterlapu/Portfolio'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col shadow-md"
                        >
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-muted mb-6 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-surface-hover text-xs text-muted rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
