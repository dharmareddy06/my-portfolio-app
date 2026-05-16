'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "GenAI Academy APACEdition",
        company: "Google Cloud & Hack2Skill",
        date: "April 2026 - Present",
        description: "Developed an AI agent using Google Cloud ADK during the Gen AI Academy APAC Edition by Hack2Skill and Google Cloud, focusing on real-world problem solving and autonomous AI workflows. Gained hands-on experience in agent orchestration, prompt engineering, and deploying scalable Generative AI applications on Google Cloud.",
        tech: ["Google Cloud ADK", "Agent Orchestration", "Prompt Engineering", "Generative AI Applications"]
    },
    {
        id: 2,
        role: "AWS AI&ML Scholars",
        company: "Udacity",
        date: "April 2026 - May 2026",
        description: "I developed AI-powered projects including EventFlow Pro Planning Assistant and a chatbot for analyzing dataset features and insights. Gained hands-on experience in machine learning workflows, conversational AI, data analysis, and building intelligent applications using modern AI/ML tools and cloud-based technologies.",
        tech: ["Python", "AWS", "Amazon party rock", "Data Analysis"]
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-label">Experience</div>
                    <h2 className="section-title">
                        My <span className="gradient-text">Professional Journey</span>
                    </h2>
                    <p className="section-subtitle">
                        A timeline of my work, internships, and major projects in AI, Data Science, and Software Development.
                    </p>
                </motion.div>

                <div className="experience-container">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={exp.id}
                            className="experience-item"
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                        >
                            <div className="experience-dot" />
                            <div className="experience-card">
                                <div className="experience-date">{exp.date}</div>
                                <h3 className="experience-role">{exp.role}</h3>
                                <div className="experience-company">{exp.company}</div>
                                <p className="experience-desc">{exp.description}</p>
                                <div className="experience-tech">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
