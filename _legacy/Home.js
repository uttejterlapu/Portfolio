import React, { useState, useEffect } from 'react';
import Mypic from '../assets/Mypic.jpg'; // Ensure path is correct
import { motion } from 'framer-motion';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const date = new Date();
    const hrs = date.getHours();
    let wish = '';

    if (hrs >= 1 && hrs <= 11) {
        wish = 'Morning';
    } else if (hrs >= 12 && hrs <= 15) {
        wish = 'Afternoon';
    } else if (hrs >= 16 && hrs <= 19) {
        wish = 'Evening';
    } else {
        wish = 'Night';
    }

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center min-h-[90vh] bg-[#222831]">
                    <div className="loader"></div>
                </div>
            ) : (
                <div id="home" className="flex items-center justify-center min-h-[90vh] bg-[#222831]">
                    <div className="flex flex-col md:flex-row items-center justify-center p-6 max-w-screen-xl mx-auto">
                        <div className="text-center md:text-left mb-6 md:mb-0 md:mr-8">
                            <motion.h1
                                className="text-4xl font-bold text-[#EEEEEE] mb-4"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Hi!! Good {wish}
                                <br />
                                Welcome to My Portfolio
                                <br />
                                I’m
                                <span className="text-[#00ADB5]"> Uttej Terlapu</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl text-[#EEEEEE]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                Web Developer
                            </motion.p>
                            <motion.a
                                href="#about"
                                className="mt-6 inline-block px-6 py-3 bg-[#00ADB5] text-[#EEEEEE] text-lg font-semibold rounded-lg shadow-lg hover:bg-[#00a4a0] transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                            >
                                Know More About Me
                            </motion.a>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <motion.img
                                    className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#00ADB5] shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                                    src={Mypic}
                                    alt="Uttej Terlapu"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-[#393E46] pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
