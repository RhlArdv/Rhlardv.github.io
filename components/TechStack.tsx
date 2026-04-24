'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { coreStack, supportStack } from '@/data/techStack';
import { getLogoUrl } from '@/lib/logo-utils';
import { TechStackItem } from '@/types';

/**
 * Animated tech item component for the ticker
 * Performance: Uses loading="lazy" for images
 */
interface TechItemProps {
    tech: TechStackItem;
    size: 'large' | 'small';
}

const TechItem: React.FC<TechItemProps> = ({ tech, size }) => {
    const isLarge = size === 'large';

    return (
        <div className="flex items-center gap-16 group">
            <div className={`flex items-center ${isLarge ? 'gap-4' : 'gap-3'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={getLogoUrl(tech.slug)}
                    alt={`${tech.name} logo`}
                    width={isLarge ? 20 : 12}
                    height={isLarge ? 20 : 12}
                    loading="lazy"
                    decoding="async"
                    className={`${isLarge ? 'w-5 h-5' : 'w-3 h-3'} grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500`}
                />
                <span className={`${isLarge ? 'font-black italic' : 'font-medium'} hover:text-slate-900 dark:hover:text-white transition-colors cursor-default`}>
                    {tech.name}
                </span>
            </div>
            <span className="opacity-20 font-normal not-italic">•</span>
        </div>
    );
};

/**
 * Tech stack showcase with animated ticker
 * Follows OCP: Add new technologies via data file, not code changes
 * Performance: CSS-based animation, lazy loaded images
 */
const TechStack: React.FC = () => {
    return (
        <section className="py-12 border-y border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#0B1120]">

            {/* Section Title - Centered */}
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-sm md:text-base tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase font-mono">
                    Technical Tools
                </h2>
                <div className="h-[2px] w-12 bg-indigo-500 mt-2"></div>
            </div>

            <div className="flex flex-col gap-6 relative">

                {/* BARIS 1: CORE STACK */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                        className="flex gap-16 whitespace-nowrap font-mono text-sm md:text-lg uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600"
                    >
                        {[...coreStack, ...coreStack].map((tech, index) => (
                            <TechItem key={`core-${tech.slug}-${index}`} tech={tech} size="large" />
                        ))}
                    </motion.div>
                </div>

                {/* BARIS 2: SUPPORT STACK */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        className="flex gap-16 whitespace-nowrap font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-400/60 dark:text-slate-700"
                    >
                        {[...supportStack, ...supportStack].map((tech, index) => (
                            <TechItem key={`support-${tech.slug}-${index}`} tech={tech} size="small" />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default TechStack;