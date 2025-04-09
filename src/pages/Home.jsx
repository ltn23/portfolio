import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import AstronautAnimation from '../components/AstronautAnimation';

const Home = () => {
    return (
        <div className="cosmic-background flex items-center justify-center px-6 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cosmic-purple to-stellar-blue text-transparent bg-clip-text">
                        Hello, I'm Le Tai Nhan
                    </h1>
                    <p className="text-lg text-star-white opacity-80">
                        A cosmic coder navigating the universe of web development with creativity and precision.
                    </p>
                    <Button
                        type="primary"
                        size="large"
                        className="bg-gradient-to-r from-cosmic-purple to-stellar-blue border-0 hover:scale-105 transition-transform"
                    >
                        Discover My Orbit
                    </Button>
                </motion.div>
                <AstronautAnimation />
            </div>
        </div>
    );
};

export default Home;