'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TypingEffect from './TypingEffect';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    const scrollToContact = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section className="hero" ref={sectionRef}>
            {/* Particle Background */}
            <ParticleCanvas />

            {/* Glow Effects */}
            <div className="hero-glow hero-glow-1" />
            <div className="hero-glow hero-glow-2" />

            {/* Content */}
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Open to Opportunities
                    </div>

                    <h1 className="hero-name">
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">Dharma Reddy</span>
                    </h1>

                    <div className="hero-typing-wrapper">
                        <TypingEffect
                            strings={[
                                'AI Developer',
                                'Machine Learning Engineer',
                                'Deep Learning Enthusiast',
                                'Data Scientist',
                                'NLP & Computer Vision Explorer',
                            ]}
                        />
                    </div>

                    <p className="hero-description">
                        Data Science and AI-focused Computer Science student with hands-on experience in Python, machine learning, data analysis, and visualization. Skilled in transforming data into actionable insights through predictive modeling and analytics. Proficient in Python, data preprocessing, exploratory data analysis, and building predictive models using real-world datasets.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            View Projects
                        </a>
                        <a href="#contact" className="btn-secondary" onClick={scrollToContact}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Get in Touch
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/dharmareddy06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/dharma-reddy-3529982ba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="mailto:dharmareddy2706@gmail.com" aria-label="Email">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="hero-avatar-wrapper">
                        <div className="hero-avatar-ring" />
                        <div className="hero-float-card">
                            <div className="float-icon cyan">🤖</div>
                            <span>AI & ML</span>
                        </div>
                        <div className="hero-avatar">
                            <Image 
                                src="/my-photo.jpeg" 
                                alt="Dharma Reddy" 
                                className="hero-avatar-img"
                                width={180}
                                height={180}
                                priority
                            />
                        </div>
                        <div className="hero-float-card">
                            <div className="float-icon purple">🧠</div>
                            <span>Full Stack Developer</span>
                        </div>
                        <div className="hero-float-card">
                            <div className="float-icon green">📊</div>
                            <span>Data Science</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
