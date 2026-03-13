'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-label">About Me</div>
                    <h2 className="section-title">
                        Crafting Intelligence, <span className="gradient-text">One Model at a Time</span>
                    </h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="about-image-card">
                            <div className="about-code-block">
                                <div><span className="comment">{'// dharma_reddy.py'}</span></div>
                                <br />
                                <div><span className="keyword">class</span> <span className="property">DharmaReddy</span><span className="bracket">:</span></div>
                                <div>&nbsp;&nbsp;<span className="keyword">def</span> <span className="property">__init__</span><span className="bracket">(self):</span></div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="property">name</span> = <span className="string">&quot;Dharma Reddy Ponguru&quot;</span></div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="property">role</span> = <span className="string">&quot;AI Developer&quot;</span></div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="property">education</span> = <span className="string">&quot;B.Tech in AI&quot;</span></div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="property">interests</span> = <span className="bracket">[</span></div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">&quot;Deep Learning&quot;</span>,</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">&quot;NLP&quot;</span>,</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">&quot;Computer Vision&quot;</span>,</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">&quot;Generative AI&quot;</span>,</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span></div>
                                <br />
                                <div>&nbsp;&nbsp;<span className="keyword">def</span> <span className="property">say_hello</span><span className="bracket">(self):</span></div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">&quot;Let&apos;s build the future!&quot;</span></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <h3>Building the Future with AI</h3>
                        <p>
                            I&apos;m a B.Tech student specializing in Artificial Intelligence, passionate about
                            pushing the boundaries of what machines can learn and create. With intermediate
                            expertise across the full AI stack — from data analytics and web scraping to
                            deep learning and generative models — I build projects that solve real-world
                            problems.
                        </p>
                        <p>
                            My journey spans machine learning, natural language processing, computer vision,
                            transformer architectures, and RAG models. I believe in learning by building,
                            and every project in my portfolio represents a step toward mastering the craft
                            of intelligent systems.
                        </p>

                        <div className="about-stats">
                            <motion.div
                                className="about-stat"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="about-stat-number">6+</div>
                                <div className="about-stat-label">Projects</div>
                            </motion.div>
                            <motion.div
                                className="about-stat"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="about-stat-number">10+</div>
                                <div className="about-stat-label">Tech Skills</div>
                            </motion.div>
                            <motion.div
                                className="about-stat"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="about-stat-number">∞</div>
                                <div className="about-stat-label">Curiosity</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
