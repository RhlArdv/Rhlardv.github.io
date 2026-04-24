'use client';

import { motion } from 'framer-motion';
import { Youtube, Twitch, Bell } from 'lucide-react';

interface StreamWidgetProps {
    status?: 'live' | 'offline' | 'coming-soon';
    streamUrl?: string;
}

const StreamWidget = ({ status = 'coming-soon', streamUrl }: StreamWidgetProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-16"
        >
            <h2 className="text-2xl font-black uppercase mb-6">Live Development Streams</h2>

            <div className="relative p-8 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-20">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20"
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </div>

                <div className="relative z-10 text-center">
                    {status === 'coming-soon' && (
                        <>
                            {/* Coming Soon Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full mb-6">
                                <Bell className="w-4 h-4 text-yellow-400 animate-pulse" />
                                <span className="text-sm font-mono text-yellow-400 uppercase tracking-wider">
                                    Coming Soon
                                </span>
                            </div>

                            {/* Message */}
                            <h3 className="text-2xl md:text-3xl font-black mb-4">
                                Development Streams Starting Soon! 🎮
                            </h3>
                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                Setting up live coding sessions where I'll build games, experiment with engines,
                                and share game development tips & tricks.
                            </p>

                            {/* Platform Icons */}
                            <div className="flex items-center justify-center gap-6 mb-6">
                                <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded">
                                    <Youtube className="w-6 h-6 text-red-400" />
                                    <span className="text-sm font-mono">YouTube</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded">
                                    <Twitch className="w-6 h-6 text-purple-400" />
                                    <span className="text-sm font-mono">Twitch</span>
                                </div>
                            </div>

                            {/* Placeholder for notify button */}
                            <p className="text-xs text-slate-400 font-mono">
                                Follow my social media to get notified when streams go live! 🔔
                            </p>
                        </>
                    )}

                    {status === 'live' && streamUrl && (
                        <>
                            {/* Live indicator */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-6">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </div>
                                <span className="text-sm font-mono text-red-400 uppercase tracking-wider font-bold">
                                    LIVE NOW
                                </span>
                            </div>

                            {/* Stream embed (iframe will go here) */}
                            <div className="aspect-video bg-black/50 rounded border border-white/10 flex items-center justify-center">
                                <p className="text-slate-400">Stream embed placeholder</p>
                                {/* Future: <iframe src={streamUrl} ... /> */}
                            </div>
                        </>
                    )}

                    {status === 'offline' && (
                        <>
                            <h3 className="text-xl font-black mb-4 text-slate-400">
                                Stream Offline
                            </h3>
                            <p className="text-slate-500">
                                Check back later for live coding sessions!
                            </p>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default StreamWidget;
