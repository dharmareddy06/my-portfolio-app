'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import '../app/education.css';

const educationData = [
    {
        id: 1,
        degree: 'Bachelor of Technology (B.Tech)',
        school: 'Artificial Intelligence',
        institution: 'G. Pullaiah College of Engineering and Technology',
        shortDesc: 'Specializing in AI, Machine Learning, Deep Learning, NLP, and Computer Vision.',
        longDesc: 'Building a strong foundation in both theoretical concepts and practical application of intelligent systems. Relevant coursework includes Advanced algorithms, Neural Networks, Database Systems, and Robotics. Participating actively in technical symposiums and AI hackathons.'
    },
    {
        id: 2,
        degree: 'Secondary Education',
        school: 'MPC',
        institution: 'Sri Chaitanya Junior College',
        shortDesc: 'Focused on Mathematics, Physics, and Chemistry, laying a strong analytical foundation.',
        longDesc: 'Completed intensive coursework in advanced mathematics and physical sciences, developing rigorous analytical and problem-solving skills essential for studying artificial intelligence and complex computer science algorithms.'
    }
];

type EducationType = typeof educationData[0];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedItem, setSelectedItem] = useState<EducationType | null>(null);
    const [showAll, setShowAll] = useState(false);

    const visibleItems = showAll ? educationData : educationData.slice(0, 4);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedItem(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedItem]);

    return (
        <section id="education" className="section" ref={ref}>
            <div className="container" style={{ position: 'relative' }}>
                <motion.div
                    className="education-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-label">Education</div>
                    <h2 className="section-title">
                        Academic <span className="gradient-text">Foundation</span>
                    </h2>
                </motion.div>

                <div className="education-list">
                    {visibleItems.map((item, i) => (
                        <motion.button
                            key={item.id}
                            className="project-list-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            onClick={() => setSelectedItem(item)}
                            whileHover={{ scale: 1.01, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                        >
                            <div className="project-list-header" style={{ alignItems: 'flex-start' }}>
                                <div className="education-icon">🎓</div>
                                <div>
                                    <h3 className="project-list-title">{item.degree}</h3>
                                    <p className="education-school">{item.school}</p>
                                    <p className="education-detail">{item.institution}</p>
                                </div>
                            </div>

                            <p className="project-list-desc">{item.shortDesc}</p>

                            <div className="project-list-bottom">
                                <div />
                                <div className="project-list-arrow">
                                    <span>Details</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {educationData.length > 4 && (
                    <motion.div
                        className="show-all-container"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            className="btn-secondary"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Show Less' : 'Show All Education'}
                        </button>
                    </motion.div>
                )}

                <AnimatePresence>
                    {selectedItem && (
                        <div className="modal-portal">
                            <motion.div
                                className="modal-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedItem(null)}
                            />
                            <motion.div
                                className="modal-content-wrapper"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            >
                                <div className="modal-card">
                                    <button
                                        className="modal-close"
                                        onClick={() => setSelectedItem(null)}
                                        aria-label="Close modal"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>

                                    <div className="modal-body-scroll">
                                        <div className="modal-header">
                                            <div className="project-number">EDUCATION {selectedItem.id}</div>
                                            <h3 className="modal-title">{selectedItem.degree}</h3>
                                            <p className="education-school">{selectedItem.school}</p>
                                            <p className="education-detail">{selectedItem.institution}</p>
                                        </div>

                                        <div className="modal-body">
                                            <p className="modal-desc">{selectedItem.shortDesc}</p>

                                            <div className="modal-section">
                                                <h4>Details</h4>
                                                <p className="modal-long-desc">{selectedItem.longDesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
