'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion';

const projects = [
    {
        id: 'p1',
        number: '01',
        title: 'DOCTOR',
        subtitle: 'Virtual Doctor Assistant',
        description: 'An AI-powered application that analyzes user symptoms and provides preliminary health guidance and recommendations.',
        tech: ['PyTorch', 'CNN', 'MLP'],
        github: 'https://github.com/dharmareddy06/intelligent-virtual-doctor-assistant',
        details: {
            challenge: 'Designing accurate symptom analysis while ensuring reliable responses and handling diverse user inputs.',
            impact: 'Improved access to preliminary health advice and reduced the time users spend searching for medical information.',
        }
    },
    {
        id: 'p2',
        number: '02',
        title: 'FD',
        subtitle: 'Real Time Fraud Detection',
        description: 'Machine learning based system that detects fraudulent financial transactions in real time by analyzing transaction patterns.',
        tech: ['Python', 'Scikit-Learn', 'Pandas'],
        github: 'https://github.com/dharmareddy06/real-time-fraud-detection',
        details: {
            challenge: 'Handling imbalanced datasets and minimizing false positives while maintaining high fraud detection accuracy.',
            impact: 'Enhanced transaction security by identifying suspicious activities quickly and helping prevent financial losses.',
        }
    },
    {
        id: 'p3',
        number: '03',
        title: 'TRAFFIC',
        subtitle: 'Traffic Sign Classifier',
        description: 'Computer vision recognition system for autonomous driving with 98% accuracy.',
        tech: ['Computer Vision', 'TensorFlow', 'Keras'],
        github: 'https://github.com/dharmareddy06/Traffic-sign-classifier.git',
        details: {
            challenge: 'Object detection in varied lighting and weather conditions.',
            impact: 'Achieved SOTA performance on GTSRB dataset.',
        }
    },
    {
        id: 'p4',
        number: '04',
        title: 'RECIPE',
        subtitle: 'Recipe Finder',
        description: 'Smart discovery app leveraging NLP for semantic ingredient matching and scraping.',
        tech: ['NLP', 'Flask', 'BeautifulSoup'],
        github: 'https://github.com/dharmareddy06/Recipe-Finder.git',
        details: {
            challenge: 'Parsing unstructured recipe text from diverse websites.',
            impact: 'Reduced search friction by mapping synonymous ingredients.',
        }
    },
    {
        id: 'p5',
        number: '05',
        title: 'PHOTO',
        subtitle: 'Photo Colorization',
        description: 'Deep learning based application that automatically converts grayscale images into realistic colored images using convolutional neural networks.',
        tech: ['Python', 'Pytorch', 'OpenCV'],
        github: 'https://github.com/dharmareddy06/Photo-Colorization',
        details: {
            challenge: 'Accurately predicting natural colors from grayscale images by learning contextual features such as textures, shapes, and object patterns.',
            impact: 'Enabled automatic restoration and enhancement of monochrome images, making it useful for historical photo restoration and image processing applications.',
        }
    },
    {
        id: 'p6',
        number: '06',
        title: 'FINANCIAL',
        subtitle: 'Financial Analysis',
        description: 'Python-based financial analysis tool that fetches company financial data from external APIs, computes key metrics, and generates automated pros and cons insights for companies.',
        tech: ['Python', 'Pandas', 'NumPy', 'SQLAlchemy', 'MySQL', 'Requests'],
        github: 'https://github.com/dharmareddy06/Financial-Analyzer',
        details: {
            challenge: 'Processing inconsistent financial data from APIs and designing reliable growth and performance metrics (ROE, profit growth, debt levels) while ensuring accurate numerical handling and database integration.',
            impact: 'Enabled automated analysis of multiple companies and stored structured insights for dashboards, reports, and financial decision support systems.',
        }
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });
    const [selectedId, setSelectedId] = useState<string | null>(null);
    
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const toggleProject = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedId(selectedId === id ? null : id);
    };

    const springTransition = {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1
    } as const;

    return (
        <section id="projects" className="section" ref={containerRef}>
            <div className="container" onClick={() => setSelectedId(null)}>
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-label">Portfolio</div>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Scroll through my industrial solutions. Click any project for technical specs.
                    </p>
                </motion.div>

                <div className="projects-grid-wrapper">
                    <button 
                        className="projects-side-nav prev"
                        onClick={(e) => { e.stopPropagation(); scroll('left'); }}
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="projects-overflow-clip" ref={scrollRef}>
                        <LayoutGroup>
                            <motion.div 
                                className="projects-flex-view"
                                layout
                            >
                                {projects.map((project) => (
                                    <motion.div 
                                        key={project.id} 
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={springTransition}
                                        className={`project-node ${selectedId === project.id ? 'expanded' : ''}`}
                                        onClick={(e) => toggleProject(project.id, e)}
                                    >
                                        <div className="project-h-card">
                                            <div className="project-card-header">
                                                <div className="project-h-number">{project.number}</div>
                                                {/* <div className="project-card-label">Industrial Build</div> */}
                                            </div>
                                            
                                            <div className="project-visual-area">
                                                <div className="project-bg-title">{project.title}</div>
                                                <div className="project-subtitle-overlay">{project.subtitle}</div>
                                            </div>

                                            <div className="project-technical-block">
                                                <h3 className="project-h-headline">Description</h3>
                                                <p className="project-h-short-desc">{project.description}</p>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {selectedId === project.id && (
                                                <motion.div 
                                                    className="project-details-aside"
                                                    initial={{ opacity: 0, x: -30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ ...springTransition, delay: 0.05 }}
                                                >
                                                    <div className="aside-content-wrap">
                                                        <div className="detail-card-item tech">
                                                            <h4>Tech Stack</h4>
                                                            <div className="tech-tags">
                                                                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                                            </div>
                                                        </div>

                                                        <div className="detail-card-item challenge">
                                                            <h4>Technical Challenge</h4>
                                                            <p>{project.details.challenge}</p>
                                                        </div>

                                                        <div className="detail-card-item outcome">
                                                            <h4>Solution Impact</h4>
                                                            <p>{project.details.impact}</p>
                                                            <a href={project.github} target="_blank" rel="noreferrer" className="btn-source-link">
                                                                View Source
                                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </LayoutGroup>
                    </div>

                    <button 
                        className="projects-side-nav next"
                        onClick={(e) => { e.stopPropagation(); scroll('right'); }}
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
