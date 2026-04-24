'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { ArrowDownRight, MapPin, Circle } from 'lucide-react';

const Hero: React.FC = () => {
    const texts = React.useMemo(() => [
        "FULL-STACK DEVELOPER", "NEXTJS & LARAVEL", "BUILDING DIGITAL PRODUCTS"
    ], []);

    const { displayedText } = useTypingAnimation({
        texts,
        typingSpeed: 60,
        deletingSpeed: 30,
        pauseDuration: 2500
    });

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-white dark:bg-[#0B1120] overflow-hidden pt-20">

            {/* Background Gradient Mesh (Subtle Cinematic Atmosphere) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT COLUMN: The Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 lg:order-1 space-y-8 z-10"
                >
                    {/* Status Badge */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] tracking-widest font-bold text-slate-600 dark:text-slate-300 uppercase">
                                Available for Work
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-1.5 text-slate-400">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[10px] tracking-widest uppercase">Indonesia, ID</span>
                        </div>
                    </div>

                    {/* Headline - STATIC NAME */}
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
                            RAHUL ARDIVA<br className="hidden md:block" />
                            LUTHFI
                        </h1>

                        {/* Dynamic Subtitle */}
                        <div className="h-8 flex items-center">
                            <p className="text-lg md:text-xl font-mono text-indigo-600 dark:text-indigo-400">
                                {displayedText}
                                <span className="animate-pulse ml-1">_</span>
                            </p>
                        </div>
                    </div>

                    {/* Description - The "Pitch" */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                        I'm a developer who creates seamless digital experiences where <strong>Robust Logic</strong> meets <strong>Creative Design</strong>.
                        Specializing in modern web ecosystems built with <span className="font-semibold text-slate-900 dark:text-white">Next.js</span> and <span className="font-semibold text-slate-900 dark:text-white">Laravel</span>.
                    </p>

                    {/* Tech Pills (Tiered Strategy) */}
                    <div className="flex flex-wrap gap-2">
                        {["TypeScript", "Next.js", "Laravel", "Go"].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-mono border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <button
                            onClick={() => {
                                const el = document.getElementById('projects');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-indigo-500 transition-colors"
                        >
                            My Works
                            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: The Visual (Cinematic Image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="order-1 lg:order-2 relative h-[40vh] lg:h-[70vh] w-full overflow-hidden rounded-none lg:rounded-sm"
                >
                    <Image
                        src="/headpict1.png"
                        alt="Rahul Ardiva Luthfi"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        priority
                    />
                    {/* Overlay for text readability if image is busy */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#0B1120]/40 to-transparent mix-blend-overlay pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;