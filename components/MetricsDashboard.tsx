'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, TrendingUp, Star, Code2, Activity, Users, LucideIcon } from 'lucide-react';
import { GitHubStats, ContributionStats, ContributionDay } from '@/types';
import { quickStats, MetricItem } from '@/data/metrics';
import { generateContributionCellData, HEATMAP_CONFIG } from '@/lib/contribution-utils';
import SiteFooter from './layout/SiteFooter';

// ============================================
// Types
// ============================================
interface MetricsDashboardProps {
    githubStats: GitHubStats | null;
    contributionStats: ContributionStats | null;
    contributionData: ContributionDay[];
}

interface MetricCardProps {
    icon: LucideIcon;
    label: string;
    value: string | number;
    trend: string;
    color: string;
    loading: boolean;
}

// ============================================
// Sub-Components
// ============================================
const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, label, value, trend, color, loading }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative p-4 md:p-6 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300"
    >
        <div className="flex items-start justify-between mb-4">
            <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color}`} />
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">{trend}</span>
        </div>
        <div>
            <p className={`text-2xl md:text-4xl font-black tracking-tighter ${loading ? 'animate-pulse bg-slate-200 dark:bg-slate-800 rounded w-20 h-8' : ''}`}>
                {!loading && value}
            </p>
            <p className="text-[10px] md:text-xs tracking-wider text-slate-500 dark:text-slate-400 uppercase mt-2 font-medium">
                {label}
            </p>
        </div>
    </motion.div>
);

/**
 * Live visitor indicator - subtle version
 */
const LiveIndicator: React.FC = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => Math.max(1, Math.min(prev + (Math.random() > 0.5 ? 1 : -1), 4)));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
                {count} viewing
            </span>
        </div>
    );
};

/**
 * Contribution heatmap legend
 */
const HeatmapLegend: React.FC = () => (
    <div className="flex items-center gap-2 mt-4 justify-end">
        <span className="text-[9px] text-slate-400 font-mono">Less</span>
        <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-slate-100 dark:bg-slate-800"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-200 dark:bg-emerald-900"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-300 dark:bg-emerald-700"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400 dark:bg-emerald-500"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500 dark:bg-emerald-400"></div>
        </div>
        <span className="text-[9px] text-slate-400 font-mono">More</span>
    </div>
);

// ============================================
// Main Component
// ============================================
const MetricsDashboard: React.FC<MetricsDashboardProps> = ({
    githubStats,
    contributionStats,
    contributionData
}) => {
    const loading = !githubStats || !contributionStats;

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const contributionCells = useMemo(
        () => isMounted ? generateContributionCellData(contributionData) : [],
        [contributionData, isMounted]
    );

    return (
        <section id="metrics" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Title */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex flex-col">
                        <h2 className="text-xs md:text-base tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase font-mono">
                            Live Metrics
                        </h2>
                        <div className="h-[2px] w-8 md:w-12 bg-indigo-500 mt-1 md:mt-2"></div>
                    </div>
                    {isMounted && <LiveIndicator />}
                </div>

                {/* GitHub Contributions - Primary Focus */}
                <div className="mb-12 md:mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                        <h3 className="text-sm md:text-base font-bold uppercase tracking-tight">GitHub Activity</h3>
                        {loading && <span className="text-[9px] text-slate-400 animate-pulse">Loading...</span>}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        <MetricCard
                            icon={Activity}
                            label="Total Contributions"
                            value={contributionStats?.totalContributions.toLocaleString() || '—'}
                            trend="Last Year"
                            color="text-indigo-500"
                            loading={loading}
                        />
                        <MetricCard
                            icon={TrendingUp}
                            label="Current Streak"
                            value={contributionStats?.currentStreak.toString() || '—'}
                            trend="Days"
                            color="text-green-500"
                            loading={loading}
                        />
                        <MetricCard
                            icon={Star}
                            label="Longest Streak"
                            value={contributionStats?.longestStreak.toString() || '—'}
                            trend="Record"
                            color="text-yellow-500"
                            loading={loading}
                        />
                        <MetricCard
                            icon={Code2}
                            label="Avg Commits"
                            value={contributionStats?.avgPerDay.toString() || '—'}
                            trend="Per Day"
                            color="text-blue-500"
                            loading={loading}
                        />
                    </div>

                    {/* Contribution Heatmap */}
                    {!loading && contributionStats && (
                        <div className="mt-8 p-4 md:p-6 border border-slate-200 dark:border-slate-800 overflow-x-auto">
                            <div className="mb-4">
                                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    Activity Heatmap • Last 12 Months
                                </p>
                            </div>

                            <div className="inline-block min-w-full">
                                <svg width="100%" height="120" className="contribution-graph">
                                    {contributionCells.map((cell) => (
                                        <rect
                                            key={cell.key}
                                            x={cell.x}
                                            y={cell.y}
                                            width={HEATMAP_CONFIG.CELL_SIZE}
                                            height={HEATMAP_CONFIG.CELL_SIZE}
                                            className={`${cell.colorClass} transition-all hover:stroke-indigo-500 hover:stroke-2 cursor-pointer`}
                                            rx="2"
                                        >
                                            <title>{cell.count} contributions on {cell.date}</title>
                                        </rect>
                                    ))}
                                </svg>
                            </div>

                            <HeatmapLegend />
                        </div>
                    )}
                </div>

                {/* Quick Stats - Simplified */}
                <div className="mb-12 md:mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="w-4 h-4 text-slate-900 dark:text-white" />
                        <h3 className="text-sm md:text-base font-bold uppercase tracking-tight">Quick Stats</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {quickStats.map((metric, idx) => (
                            <MetricCard key={idx} {...metric} loading={false} />
                        ))}
                    </div>
                </div>

                {/* Site Footer */}
                <SiteFooter />

            </div>
        </section>
    );
};

export default MetricsDashboard;
