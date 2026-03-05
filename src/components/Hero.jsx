import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Mypic from '../assets/new.png';

const Hero = () => {
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
        <section id="home" className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-background overflow-hidden px-6 transition-colors duration-300">
            {/* 3D Background Element */}
            <div className="absolute inset-0 z-0 opacity-30 md:opacity-50 pointer-events-none">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} intensity={1} />
                    <Suspense fallback={null}>
                        <Sphere visible args={[1, 100, 200]} scale={2.5}>
                            <MeshDistortMaterial
                                color="#6366f1"
                                attach="material"
                                distort={0.5}
                                speed={2}
                                roughness={0}
                            />
                        </Sphere>
                    </Suspense>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="z-10 flex flex-col md:flex-row items-center max-w-7xl w-full mx-auto gap-12">
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Good {wish}, <br />
                        I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Uttej Terlapu</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-muted mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Software Engineer | Backend & Cloud Specialist
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <a
                            href="#projects"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="ml-4 inline-block px-8 py-3 border border-muted text-foreground font-semibold rounded-full hover:bg-surface-hover transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center md:justify-end relative perspective-1000">
                    <Card3D />
                </div>
            </div>
        </section>
    );
};

const Card3D = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className="relative w-80 h-80 md:w-96 md:h-96 cursor-grab"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Glowing Background Blob */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-60 animate-pulse animate-morph -z-10"
            ></div>

            {/* Glassmorphism Container */}
            <div
                className="relative w-full h-full p-2 bg-surface/30 backdrop-blur-sm border border-border/50 shadow-2xl overflow-hidden animate-morph"
            >
                <motion.img
                    src={Mypic}
                    alt="Uttej Terlapu"
                    className="w-full h-full object-cover pointer-events-none animate-morph"
                    style={{ z: 50 }}
                />

                {/* Shine Effect */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-surface-hover/40 to-transparent pointer-events-none animate-morph"
                ></div>
            </div>
        </motion.div>
    );
};

export default Hero;
