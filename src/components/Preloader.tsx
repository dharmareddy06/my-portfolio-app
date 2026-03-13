'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 800);
                    return 100;
                }
                const increment = prev < 80 ? Math.floor(Math.random() * 15) + 2 : Math.floor(Math.random() * 5) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 120);

        return () => clearInterval(interval);
    }, []);

    const dataFragments = [
        "0x4F2A", "0xBD91", "10110", "IRIS_SCAN", "AUTH_REQ", "SYNCING", "0x7E3C"
    ];

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div 
                    className="preloader iris-mode"
                    exit={{ 
                        opacity: 0,
                        scale: 1.5,
                        filter: "blur(20px)"
                    }}
                    transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <div className="iris-container">
                        {/* Recursive Rotating Rings */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`iris-ring ring-${i}`}
                                animate={{ 
                                    rotate: i % 2 === 0 ? 360 : -360,
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ 
                                    rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        ))}

                        {/* Central Iris Eye */}
                        <motion.div 
                            className="iris-eye"
                            animate={{ 
                                scale: [0.95, 1.1, 0.95],
                                boxShadow: [
                                    "0 0 20px rgba(255,255,255,0.1)",
                                    "0 0 50px rgba(255,255,255,0.2)",
                                    "0 0 20px rgba(255,255,255,0.1)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="iris-pupil"></div>
                            <motion.div 
                                className="iris-scanner"
                                animate={{ top: ["-10%", "110%", "-10%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>

                        {/* Floating Data Readouts */}
                        {dataFragments.map((frag, i) => (
                            <motion.div
                                key={frag}
                                className={`iris-data data-${i}`}
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    opacity: [0, 0.8, 0],
                                    y: [0, -20, -40]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    delay: i * 0.7,
                                    ease: "linear"
                                }}
                            >
                                {frag}
                            </motion.div>
                        ))}
                    </div>

                    <div className="iris-footer">
                        <div className="iris-label">NEURAL_LINK_ESTABLISHED</div>
                        <div className="iris-progress-wrap">
                            <div className="iris-percentage">{percent}%</div>
                            <div className="iris-bar-bg">
                                <motion.div 
                                    className="iris-bar-fill"
                                    animate={{ width: `${percent}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="iris-grain"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
