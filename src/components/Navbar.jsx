import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed top-0 w-full starry-navbar z-50 py-4"
        >
            <div className="container mx-auto flex justify-between items-center px-6">
                <NavLink to="/">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-stellar-blue text-transparent bg-clip-text"
                    >
                        AstroX
                    </motion.div>
                </NavLink>
                <div className="flex space-x-8">
                    {['/', '/about', '/projects', '/contact'].map((path, idx) => (
                        <NavLink
                            key={idx}
                            to={path}
                            className={({ isActive }) =>
                                `relative text-star-white hover:text-cosmic-purple transition-all duration-300 ${isActive ? 'text-cosmic-purple' : ''
                                }`
                            }
                        >
                            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-stellar-blue"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </NavLink>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;