'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const certifications = [
    // Page 1
    {
        id: 1,
        title: "Data Analytics",
        issuer: "Skillshop",
        date: "2026",
        url: "https://skillshop.credential.net/f5a3458c-2acf-4798-959d-1afc2c31a5b7#acc.ZHbMewCn",
        type: "blue"
    },
    {
        id: 2,
        title: "ServiceNow Administration Fundamentals",
        issuer: "ServiceNow",
        date: "2026",
        url: "https://learning.servicenow.com/x_snc_nl_lxp_recog_ShareOnSocialMedia.do?lxp_sys_id=0a7c69ed47533a9895898641026d43c2&lxp_type=achievement",
        type: "maroon"
    },
    {
        id: 3,
        title: "Preparing for Your Associate Cloud Engineer",
        issuer: "Google Cloud",
        date: "2026",
        url: "https://www.skills.google/public_profiles/fd01468c-68b1-4538-854d-4c0e559ca9aa/badges/22762280?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        type: "red"
    },
    {
        id: 4,
        title: "Overview of Big Data Analytics",
        issuer: "FutureSkills Prime",
        date: "2026",
        url: "https://www.futureskillsprime.in/iDH/user/user_badge/view/32914_BG_29a9161e-feb3-11f0-bdec-005056b48b54",
        type: "orange"
    },
    // Page 2
    {
        id: 5,
        title: "AI Foundations",
        issuer: "Oracle",
        date: "2025",
        url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B3B369AE9D6C8DE318369B7974930F6914A16285A711D884E6BC0FFB723D9196",
        type: "blue"
    },
];

export default function Certifications() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [currentPage, setCurrentPage] = useState(0);
    
    const itemsPerPage = 4;
    const totalPages = Math.ceil(certifications.length / itemsPerPage);
    
    const nextBatch = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevBatch = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const currentCerts = certifications.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section id="certifications" className="section" ref={containerRef}>
            <div className="container" onClick={() => {}}>
                <motion.div
                    className="cert-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-label">Recognition</div>
                    <h2 className="section-title">
                        Expert <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle">
                        Validating my expertise through industry-recognized certifications and continuous learning.
                    </p>
                </motion.div>

                <div className="cert-grid-wrapper">
                    <div className="cert-grid">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentPage}
                                className="cert-grid-inner"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(2, 1fr)', 
                                    gap: '16px',
                                    width: '100%'
                                }}
                            >
                                {currentCerts.map((cert) => (
                                    <a 
                                        key={cert.id} 
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`cert-grid-card ${cert.type}`}
                                    >
                                        <div className="cert-ribbon"></div>
                                        <div className="cert-content">
                                            <h4 className="cert-grid-issuer">{cert.issuer}</h4>
                                            <h3 className="cert-grid-title">{cert.title}</h3>
                                            {/* <p className="cert-grid-desc">Validation of advanced skills in AI and engineering workflows.</p> */}
                                        </div>
                                    </a>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                        
                        <div className="cert-center-element">
                            <div className="cert-center-nav">
                                <button 
                                    className="cert-nav-btn central" 
                                    onClick={prevBatch}
                                    disabled={currentPage === 0}
                                    aria-label="Previous batch"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </button>
                                <div className="cert-nav-divider"></div>
                                <button 
                                    className="cert-nav-btn central" 
                                    onClick={nextBatch}
                                    disabled={currentPage === totalPages - 1}
                                    aria-label="Next batch"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
