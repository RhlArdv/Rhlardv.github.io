'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import ProjectFun1 from './components/ProjectFun1';
import SkillTree from './components/SkillTree';
import StreamWidget from './components/StreamWidget';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useGreeting } from '@/hooks/useGreeting';
import { gameStats } from '@/data/gameStats';

export default function GameDevPage() {
    const router = useRouter();
    const [isReturning, setIsReturning] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const greeting = useGreeting();

    // Set dimensions on mount to avoid hydration mismatch
    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    // Texts for typing animation
    const texts = useMemo(() => [
        greeting,
        "WELCOME TO MY GAME UNIVERSE",
        "I'M XTRADA404"
    ], [greeting]);

    const { displayedText } = useTypingAnimation({
        texts,
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseDuration: 2000
    });

    // Optimized grid - memoized to prevent re-calculation on every render (especially during typing)
    const gridSize = useMemo(() => {
        if (dimensions.width === 0) return { cols: 12, rows: 8 }; // Default safe value
        return {
            cols: Math.ceil(dimensions.width / 120),
            rows: Math.ceil(dimensions.height / 120)
        };
    }, [dimensions]);

    const totalBlocks = gridSize.cols * gridSize.rows;

    // Memoize the grid blocks array to avoid regenerating it on every render
    const gridBlocks = useMemo(() => [...Array(totalBlocks)], [totalBlocks]);

    const handleReturn = () => {
        setIsReturning(true);
        setTimeout(() => {
            router.push('/');
        }, 1000);
    };

    // Diagonal wave pattern for smooth exit
    const getWaveDelay = (index: number) => {
        const row = Math.floor(index / gridSize.cols);
        const col = index % gridSize.cols;
        const diagonalDistance = row + col;
        return diagonalDistance * 0.03;
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Return Block Reveal Animation */}
            {isReturning && (
                <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-black">
                    <div
                        className="grid w-full h-full"
                        style={{
                            gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                            gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                        }}
                    >
                        {gridBlocks.map((_, index) => {
                            const row = Math.floor(index / gridSize.cols);
                            const col = index % gridSize.cols;
                            const diagonal = (row + col) / (gridSize.rows + gridSize.cols);

                            const getColor = () => {
                                if (diagonal < 0.3) return 'bg-indigo-600';
                                if (diagonal < 0.5) return 'bg-purple-600';
                                if (diagonal < 0.7) return 'bg-violet-600';
                                return 'bg-fuchsia-600';
                            };

                            return (
                                <motion.div
                                    key={index}
                                    className={`${getColor()}`}
                                    style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }}
                                    initial={{ scale: 1, opacity: 1 }}
                                    animate={{ scale: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: getWaveDelay(index),
                                        ease: [0.34, 1.56, 0.64, 1],
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Gradient overlay for smooth fade */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tl from-indigo-500/20 via-transparent to-purple-500/20 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />
                </div>
            )}

            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-16">
                {/* Return Button */}
                <motion.button
                    onClick={handleReturn}
                    className="group fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <ArrowLeft className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono uppercase tracking-wider">Exit Game Mode</span>
                </motion.button>

                {/* Hero Section */}
                <motion.div
                    className="text-center mb-20 mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Typing Animation Title */}
                    <motion.div
                        className="inline-block mb-6"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(99,102,241,0.5)',
                                '0 0 40px rgba(139,92,246,0.8)',
                                '0 0 20px rgba(99,102,241,0.5)',
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter min-h-[5rem] md:min-h-[7rem]">
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {displayedText}
                                <span className="animate-pulse ml-2">|</span>
                            </span>
                        </h1>
                    </motion.div>
                </motion.div>

                {/* Game Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {gameStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + idx * 0.1 }}
                        >
                            <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                            <p className="text-3xl font-black mb-2">{stat.value}</p>
                            <p className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Playable Game Demo - Project Fun1 */}
                <ProjectFun1 />

                {/* Interactive Skill Tree */}
                <SkillTree />

                {/* Live Stream Widget */}
                <StreamWidget status="coming-soon" />

                {/* Footer */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                        Powered by Coffee & Game Engines • Est. 2024
                    </p>
                </motion.div>
            </div>
        </div>
    );
}


