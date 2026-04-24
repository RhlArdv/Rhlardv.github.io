'use client';

import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';

/** Default grid size for SSR */
const DEFAULT_GRID = { cols: 12, rows: 8 };
/** Block size in pixels for grid calculation */
const BLOCK_SIZE = 120;

const PortalButton = () => {
    const router = useRouter();
    const [isRevealing, setIsRevealing] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Safe window access in useEffect to prevent hydration mismatch
    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    // Calculate grid size based on dimensions
    const gridSize = useMemo(() => {
        if (dimensions.width === 0) return DEFAULT_GRID;
        return {
            cols: Math.ceil(dimensions.width / BLOCK_SIZE),
            rows: Math.ceil(dimensions.height / BLOCK_SIZE)
        };
    }, [dimensions]);

    const totalBlocks = gridSize.cols * gridSize.rows;

    const handleClick = () => {
        setIsRevealing(true);

        // Navigate after smooth animation
        setTimeout(() => {
            router.push('/game-dev');
        }, 1000);
    };

    // Diagonal wave pattern for smooth connected flow
    const getWaveDelay = (index: number) => {
        const row = Math.floor(index / gridSize.cols);
        const col = index % gridSize.cols;
        // Diagonal wave from top-left to bottom-right
        const diagonalDistance = row + col;
        return diagonalDistance * 0.03; // Smooth stagger
    };

    return (
        <>
            {/* Portal Button */}
            <motion.button
                onClick={handleClick}
                className="group relative flex items-center gap-2 px-4 py-2 opacity-30 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Gamepad2 className="w-4 h-4 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
                <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-300 tracking-wider uppercase">
                    Enter Game Mode
                </span>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-indigo-500/10 rounded opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </motion.button>

            {/* Optimized Block Reveal Overlay */}
            {isRevealing && (
                <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-black">
                    <div
                        className="grid w-full h-full"
                        style={{
                            gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                            gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                        }}
                    >
                        {[...Array(totalBlocks)].map((_, index) => {
                            const row = Math.floor(index / gridSize.cols);
                            const col = index % gridSize.cols;

                            // Gradient color based on position for visual flow
                            const getColor = () => {
                                const diagonal = (row + col) / (gridSize.rows + gridSize.cols);
                                if (diagonal < 0.3) return 'bg-indigo-600';
                                if (diagonal < 0.5) return 'bg-purple-600';
                                if (diagonal < 0.7) return 'bg-violet-600';
                                return 'bg-fuchsia-600';
                            };

                            return (
                                <motion.div
                                    key={index}
                                    className={`${getColor()}`}
                                    style={{
                                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
                                    }}
                                    initial={{
                                        scale: 0,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: getWaveDelay(index),
                                        ease: [0.34, 1.56, 0.64, 1], // Smooth spring easing
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Smooth gradient overlay for depth */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />
                </div>
            )}
        </>
    );
};

export default PortalButton;
