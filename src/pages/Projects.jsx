import React, { useState, useEffect } from 'react';
import { Card, Spin } from 'antd';
import { motion } from 'framer-motion';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            let allRepos = [];
            let page = 1;
            const perPage = 100;

            try {
                while (true) {
                    const response = await fetch(
                        `https://api.github.com/users/ltn23/repos?per_page=${perPage}&page=${page}`
                    );
                    if (!response.ok) {
                        throw new Error('Failed to fetch repositories');
                    }
                    const data = await response.json();
                    if (data.length === 0) break;
                    allRepos = [...allRepos, ...data];
                    page++;
                }
                setRepos(allRepos);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    const AstronautIcon = () => (
        <motion.svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="text-stellar-blue"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <circle cx="20" cy="12" r="6" fill="currentColor" opacity="0.8" />
            <rect x="16" y="18" width="8" height="12" rx="4" fill="currentColor" />
            <rect x="12" y="20" width="4" height="6" rx="2" fill="currentColor" opacity="0.6" />
            <rect x="24" y="20" width="4" height="6" rx="2" fill="currentColor" opacity="0.6" />
        </motion.svg>
    );

    return (
        <div className="cosmic-background px-6 pt-20">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cosmic-purple to-stellar-blue text-transparent bg-clip-text mb-12"
            >
                My GitHub Projects
            </motion.h2>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spin size="large" />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {repos.map((repo, idx) => (
                        <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                        >
                            <Card
                                className="bg-space-black/90 border-2 border-cosmic-purple/20 shadow-lg hover:shadow-stellar-blue/50 transition-all rounded-xl p-4"
                            >
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cosmic-purple hover:text-stellar-blue text-lg font-semibold"
                                >
                                    {repo.name}
                                </a>
                                <p className="text-star-white opacity-80 mt-2">
                                    {repo.description || 'No description available.'}
                                </p>
                                <p className="text-sm text-star-white mt-2">
                                    ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                                </p>
                                <motion.div className="absolute bottom-4 left-4">
                                    <AstronautIcon />
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;