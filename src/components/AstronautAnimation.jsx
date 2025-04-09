import React from 'react';
import { motion } from 'framer-motion';

const AstronautAnimation = () => {
    return (
        <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
        >
            <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                {/* Helmet */}
                <circle cx="125" cy="80" r="40" fill="#E6E6FA" opacity="0.9" />
                <motion.circle
                    cx="125"
                    cy="80"
                    r="30"
                    fill="#6B48FF"
                    opacity="0.5"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Body */}
                <rect x="105" y="120" width="40" height="60" rx="20" fill="url(#nebula)" />
                {/* Arms */}
                <rect x="85" y="130" width="20" height="40" rx="10" fill="#00D4FF" />
                <rect x="145" y="130" width="20" height="40" rx="10" fill="#00D4FF" />
                {/* Gradient */}
                <defs>
                    <linearGradient id="nebula" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#6B48FF" />
                        <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                </defs>
            </svg>
            {/* Floating Stars */}
            <motion.div className="absolute top-0 left-0 w-full h-full">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-star-white rounded-full"
                        style={{ top: `${i * 20}%`, left: `${i * 15}%` }}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default AstronautAnimation;