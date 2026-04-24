'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';

const ProjectFun1 = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const gameLoopRef = useRef<number | undefined>(undefined);
    const keysRef = useRef({ left: false, right: false });

    // Mobile control handlers
    const handleMobileLeft = (pressed: boolean) => {
        keysRef.current.left = pressed;
    };

    const handleMobileRight = (pressed: boolean) => {
        keysRef.current.right = pressed;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Game state
        let ship = { x: canvas.width / 2, y: canvas.height - 80, width: 40, height: 40, speed: 5 };
        let asteroids: Array<{ x: number; y: number; width: number; height: number; speed: number }> = [];
        let currentScore = 0;

        // Controls - use keysRef for both keyboard and mobile
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') keysRef.current.left = true;
            if (e.key === 'ArrowRight') keysRef.current.right = true;
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') keysRef.current.left = false;
            if (e.key === 'ArrowRight') keysRef.current.right = false;
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // Spawn asteroid
        const spawnAsteroid = () => {
            const size = 30 + Math.random() * 20;
            asteroids.push({
                x: Math.random() * (canvas.width - size),
                y: -size,
                width: size,
                height: size,
                speed: 2 + Math.random() * 3
            });
        };

        // Game loop
        const gameLoop = () => {
            if (gameState !== 'playing') return;

            // Clear canvas
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Grid background
            ctx.strokeStyle = 'rgba(99,102,241,0.1)';
            ctx.lineWidth = 1;
            for (let i = 0; i < canvas.width; i += 30) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.stroke();
            }
            for (let i = 0; i < canvas.height; i += 30) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.width, i);
                ctx.stroke();
            }

            // Move ship - using keysRef
            if (keysRef.current.left && ship.x > 0) ship.x -= ship.speed;
            if (keysRef.current.right && ship.x < canvas.width - ship.width) ship.x += ship.speed;

            // Draw ship (triangle)
            ctx.fillStyle = '#6366f1';
            ctx.beginPath();
            ctx.moveTo(ship.x + ship.width / 2, ship.y);
            ctx.lineTo(ship.x, ship.y + ship.height);
            ctx.lineTo(ship.x + ship.width, ship.y + ship.height);
            ctx.closePath();
            ctx.fill();

            // Ship glow
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#6366f1';
            ctx.fill();
            ctx.shadowBlur = 0;

            // Update asteroids
            asteroids.forEach((asteroid, index) => {
                asteroid.y += asteroid.speed;

                // Draw asteroid
                ctx.fillStyle = '#f43f5e';
                ctx.fillRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height);
                ctx.strokeStyle = '#ef4444';
                ctx.strokeRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height);

                // Remove if off screen
                if (asteroid.y > canvas.height) {
                    asteroids.splice(index, 1);
                    currentScore += 10;
                    setScore(currentScore);
                }

                // Collision detection
                if (
                    ship.x < asteroid.x + asteroid.width &&
                    ship.x + ship.width > asteroid.x &&
                    ship.y < asteroid.y + asteroid.height &&
                    ship.y + ship.height > asteroid.y
                ) {
                    setGameState('gameover');
                    if (currentScore > highScore) {
                        setHighScore(currentScore);
                    }
                }
            });

            // Spawn new asteroids
            if (Math.random() < 0.02) {
                spawnAsteroid();
            }

            // Draw score
            ctx.fillStyle = '#fff';
            ctx.font = '20px monospace';
            ctx.fillText(`Score: ${currentScore}`, 10, 30);

            gameLoopRef.current = requestAnimationFrame(gameLoop);
        };

        if (gameState === 'playing') {
            gameLoop();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, [gameState, highScore]);

    const startGame = () => {
        setScore(0);
        setGameState('playing');
    };

    const resetGame = () => {
        setGameState('idle');
        setScore(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mb-16"
        >
            <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <Play className="w-6 h-6 text-cyan-400" />
                Project Fun1: Asteroid Dodger
            </h2>

            <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6">
                {/* Game Canvas */}
                <div className="relative">
                    <canvas
                        ref={canvasRef}
                        width={600}
                        height={400}
                        className="w-full border border-white/10 bg-[#0a0a0a]"
                    />

                    {/* Overlay screens */}
                    {gameState === 'idle' && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                            <h3 className="text-3xl font-black mb-4 text-cyan-400">ASTEROID DODGER</h3>
                            <p className="text-slate-300 mb-1">Use Arrow Keys or Touch Buttons</p>
                            <p className="text-slate-400 text-sm mb-6">Dodge asteroids and survive!</p>
                            <button
                                onClick={startGame}
                                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider transition-colors"
                            >
                                <Play className="w-5 h-5" />
                                Start Game
                            </button>
                        </div>
                    )}

                    {gameState === 'gameover' && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                            <h3 className="text-3xl font-black mb-4 text-red-400">GAME OVER</h3>
                            <p className="text-2xl font-bold mb-2">Score: {score}</p>
                            <p className="text-slate-400 mb-6 flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-yellow-400" />
                                High Score: {highScore}
                            </p>
                            <button
                                onClick={resetGame}
                                className="flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-bold uppercase tracking-wider transition-colors"
                            >
                                <RotateCcw className="w-5 h-5" />
                                Play Again
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Control Buttons */}
                {gameState === 'playing' && (
                    <div className="mt-4 flex justify-center gap-4 md:hidden">
                        <button
                            onTouchStart={() => handleMobileLeft(true)}
                            onTouchEnd={() => handleMobileLeft(false)}
                            onMouseDown={() => handleMobileLeft(true)}
                            onMouseUp={() => handleMobileLeft(false)}
                            onMouseLeave={() => handleMobileLeft(false)}
                            className="px-8 py-6 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-xl rounded-lg touch-none select-none transition-colors"
                        >
                            ← LEFT
                        </button>
                        <button
                            onTouchStart={() => handleMobileRight(true)}
                            onTouchEnd={() => handleMobileRight(false)}
                            onMouseDown={() => handleMobileRight(true)}
                            onMouseUp={() => handleMobileRight(false)}
                            onMouseLeave={() => handleMobileRight(false)}
                            className="px-8 py-6 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-xl rounded-lg touch-none select-none transition-colors"
                        >
                            RIGHT →
                        </button>
                    </div>
                )}

                {/* Game Info */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-white/5 border border-white/10">
                        <p className="text-xs text-slate-400 mb-1">Technology</p>
                        <p className="text-sm font-bold">HTML5 Canvas</p>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10">
                        <p className="text-xs text-slate-400 mb-1">Language</p>
                        <p className="text-sm font-bold">TypeScript</p>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10">
                        <p className="text-xs text-slate-400 mb-1">Features</p>
                        <p className="text-sm font-bold">Collision Detection</p>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10">
                        <p className="text-xs text-slate-400 mb-1">Current Score</p>
                        <p className="text-sm font-bold text-cyan-400">{score}</p>
                    </div>
                </div>

                <p className="mt-4 text-xs text-slate-400 italic">
                    A simple arcade game demonstrating game physics, collision detection, and canvas rendering.
                    Built from scratch to showcase core game development fundamentals.
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectFun1;
