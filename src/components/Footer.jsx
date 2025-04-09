import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-space-black py-8"
        >
            <div className="container mx-auto text-center text-star-white">
                <p className="text-sm">© 2025 [Your Name]. Exploring the digital cosmos.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                        <motion.a
                            key={social}
                            href="#"
                            whileHover={{ y: -5, color: '#00D4FF' }}
                            className="text-star-white hover:text-stellar-blue transition-colors"
                        >
                            {social}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;