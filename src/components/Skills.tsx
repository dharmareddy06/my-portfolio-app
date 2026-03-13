'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
    {
        title: 'Artificial Intelligence',
        className: 'ai',
        skills: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI'],
    },
    {
        title: 'Data Science',
        className: 'ds',
        skills: ['Python', 'SQL', 'Mathematics and Statistics', 'Machine Learning', 'Data Visualiation'],
    },
    {
        title: 'Development',
        className: 'dev',
        skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'MySQL'],
    },
    {
        title: 'Tools & Frameworks',
        className: 'tools',
        skills: ['numpy', 'pandas', 'matplotlib', 'scikit-learn', 'pytorch', 'n8n'],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-label">Skills</div>
                    <h2 className="section-title">
                        My <span className="gradient-text">Tech Arsenal</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit spanning the full AI development stack,
                        from data processing to deploying intelligent models.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            className={`skill-category-card ${cat.className}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                        >

                            <h3 className="skill-category-title">{cat.title}</h3>
                            <div className="skill-tags">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
