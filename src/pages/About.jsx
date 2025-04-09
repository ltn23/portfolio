import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="cosmic-background flex items-center justify-center px-6 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-purple to-stellar-blue text-transparent bg-clip-text">
                        About Me
                    </h2>
                    <p className="text-lg text-star-white opacity-80">
                        I'm a web developer with a passion for crafting stellar digital experiences. My journey started in [Year], and I've since mastered React, TailwindCSS, and beyond.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <img
                        src="https://wallpapers.com/images/high/astronaut-desktop-lgv3mb4u4rho6slt.webp"
                        alt="Astronaut"
                        className="rounded-xl shadow-lg border-2 border-cosmic-purple/50 object-cover w-full h-[400px]"
                    />
                    <motion.div
                        className="absolute -inset-4 bg-gradient-to-r from-cosmic-purple to-stellar-blue opacity-20 rounded-xl"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;