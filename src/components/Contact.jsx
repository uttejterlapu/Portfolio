import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-surface relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">Let's Talk</h3>
                        <p className="text-muted mb-8 text-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:uttejterlapu@gmail.com" className="flex items-center gap-4 text-muted hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-surface-hover rounded-full flex items-center justify-center border border-border">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg">uttejterlapu@gmail.com</span>
                            </a>

                            <div className="flex gap-4 mt-8">
                                <a href="https://linkedin.com/in/uttej-terlapu" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface-hover rounded-full flex items-center justify-center border border-border hover:bg-primary hover:border-primary transition-all duration-300 text-foreground hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/uttejterlapu" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface-hover rounded-full flex items-center justify-center border border-border hover:bg-primary hover:border-primary transition-all duration-300 text-foreground hover:text-white">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-surface-hover/50 p-8 rounded-2xl border border-border shadow-lg"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
