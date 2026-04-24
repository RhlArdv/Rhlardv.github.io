'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { careers, education, certifications, awards } from '@/data/experience';
import CareerCard from './experience/CareerCard';

/**
 * Experience section component
 * Follows OCP: Add new careers/certifications via data file, not code changes
 */
const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Title - Centered */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-sm md:text-base tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase font-mono text-center">
                        Professional Chronology
                    </h2>
                    <div className="h-[2px] w-12 bg-indigo-500 mt-2"></div>
                </div>

                {/* Main Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">

                    {/* LEFT COLUMN: Professional Careers */}
                    <div className="space-y-12">
                        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-12">
                            <h3 className="text-xl font-bold uppercase tracking-tight">Professional Careers</h3>
                        </div>

                        <div className="flex flex-col gap-12">
                            {careers.map((career) => (
                                <CareerCard key={career.id} career={career} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Education, Certs, & Honors */}
                    <div className="space-y-24">

                        {/* Education */}
                        <div>
                            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Education</h3>
                            </div>
                            <div className="pl-6 border-l border-slate-100 dark:border-slate-800">
                                <h4 className="text-lg font-black uppercase tracking-tighter">{education.degree}</h4>
                                <p className="text-sm text-slate-500 mt-1 font-medium">{education.institution}</p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Certifications</h3>
                            </div>
                            <div className="space-y-8 pl-6 border-l border-slate-100 dark:border-slate-800">
                                {certifications.map((cert, index) => (
                                    <div key={index}>
                                        <h4 className="text-base font-black uppercase tracking-tighter">{cert.title}</h4>
                                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1">
                                            {cert.issuer} • {cert.year}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Honors & Awards */}
                        <div>
                            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Honors & Awards</h3>
                            </div>
                            <div className="space-y-8 pl-6 border-l border-slate-100 dark:border-slate-800">
                                {awards.map((award, index) => (
                                    <div key={index}>
                                        <h4 className="text-lg font-black uppercase tracking-tighter">{award.title}</h4>
                                        <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                                            {award.organization} • {award.year}
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">
                                            {award.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;