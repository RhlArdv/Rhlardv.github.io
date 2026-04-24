'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types';
import { getLogoUrlByName } from '@/lib/logo-utils';

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


    return (
        <section id="projects" className="py-12 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] relative text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-12">

                {/* Section Title - Centered */}
                <div className="flex flex-col items-center mb-6 md:mb-12">
                    <h2 className="text-xs md:text-base tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase font-mono text-center">
                        My Works
                    </h2>
                    <div className="h-[2px] w-8 md:w-12 bg-indigo-500 mt-1 md:mt-2"></div>
                </div>

                {/* PROJECT GRID - 2 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer p-4 md:p-6 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 bg-slate-50/50 dark:bg-slate-900/50"
                        >

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter mt-3 group-hover:text-indigo-500 transition-colors duration-300">
                                {project.title}
                            </h3>

                            {/* Description Preview */}
                            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 font-medium">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex items-center gap-2 mt-4 flex-wrap">
                                {project.tech.slice(0, 7).map((t) => (
                                    <span key={t} className="text-[9px] md:text-[10px] font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase">
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 7 && (
                                    <span className="text-[9px] md:text-[10px] font-mono text-slate-400">
                                        +{project.tech.length - 7}
                                    </span>
                                )}
                            </div>

                            {/* Arrow indicator */}
                            <div className="flex justify-end mt-4">
                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* MODAL - Pas di Desktop & Mobile dengan Warna Asli */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
                        />

                        <div className="fixed inset-0 flex items-center justify-center z-[101] p-2 md:p-8 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="pointer-events-auto w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 overflow-y-auto overscroll-contain shadow-2xl scrollbar-hide will-change-transform"
                            >
                                {/* Modal Banner */}
                                <div className="relative aspect-video bg-slate-900">
                                    <Image
                                        src={selectedProject.image}
                                        alt="Cover"
                                        fill
                                        loading="lazy"
                                        className="object-cover transition-all duration-700 ease-in-out"
                                    />
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 md:p-2 bg-black/50 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all"
                                    >
                                        <X className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="p-4 md:p-10 space-y-4 md:space-y-10 text-left">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6 border-b border-slate-200 dark:border-slate-800 pb-4 md:pb-8">
                                        <div className="space-y-0.5 md:space-y-1">
                                            <p className="text-[9px] md:text-[10px] tracking-[0.3em] text-slate-400 font-mono font-bold uppercase">
                                                Case Studio / {String(selectedProject.id).padStart(2, '0')}
                                            </p>
                                            <h3 className="text-lg md:text-5xl font-black uppercase tracking-tighter leading-tight">
                                                {selectedProject.title}
                                            </h3>
                                        </div>
                                        <div className="flex gap-3 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-widest shrink-0">
                                            {selectedProject.links.demo && (
                                                <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 underline underline-offset-2 md:underline-offset-4 decoration-indigo-500/30 hover:decoration-indigo-500 transition-all">
                                                    Live Demo ↗
                                                </a>
                                            )}
                                            {selectedProject.links.repo && (
                                                <a href={selectedProject.links.repo} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 underline underline-offset-2 md:underline-offset-4 decoration-indigo-500/30 hover:decoration-indigo-500 transition-all">
                                                    Github ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 gap-4 md:gap-10">
                                        <div className="space-y-3 md:space-y-6">
                                            <div className="space-y-1.5 md:space-y-3">
                                                <p className="text-[9px] md:text-[10px] tracking-[0.3em] text-slate-400 font-mono font-bold uppercase italic">Synopsis</p>
                                                <p className="text-[11px] md:text-base text-slate-600 dark:text-slate-400 italic leading-relaxed font-medium">
                                                    {selectedProject.description}
                                                </p>
                                            </div>

                                            <div className="space-y-2 md:space-y-4">
                                                <p className="text-[9px] md:text-[10px] tracking-[0.3em] text-slate-400 font-mono font-bold uppercase italic">Key Features</p>
                                                <ul className="space-y-1.5 md:space-y-3">
                                                    {selectedProject.features?.map((f: string) => (
                                                        <li key={f} className="flex gap-2 md:gap-3 text-[10px] md:text-sm font-bold uppercase tracking-tight text-slate-800 dark:text-slate-200">
                                                            <span className="text-indigo-500">→</span>
                                                            <span>{f}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* TECHNICAL TOOLS - Moved here for mobile */}
                                            <div className="space-y-2 md:space-y-4 pt-3 md:pt-4 border-t border-slate-100 dark:border-slate-800 md:border-0 md:pt-0">
                                                <p className="text-[9px] md:text-[10px] tracking-[0.3em] text-slate-400 font-mono font-bold uppercase italic">Technical Tools</p>
                                                <div className="flex flex-wrap gap-2 md:gap-4">
                                                    {selectedProject.tech.map((t: string) => (
                                                        <div key={t} className="flex items-center gap-1.5 md:gap-2 group/icon">
                                                            <img
                                                                src={getLogoUrlByName(t)}
                                                                alt={t}
                                                                className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-70 group-hover/icon:opacity-100 transition-all"
                                                            />
                                                            <span className="text-[8px] md:text-[9px] font-black tracking-tighter uppercase">{t}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;