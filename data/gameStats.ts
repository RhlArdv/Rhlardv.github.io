import { Trophy, Zap, Users, Star, LucideIcon } from 'lucide-react';

/**
 * Game stat item structure
 */
export interface GameStatItem {
    label: string;
    value: string;
    icon: LucideIcon;
    color: string;
}

/**
 * Game development page statistics
 */
export const gameStats: GameStatItem[] = [
    { label: 'Learning Journey', value: 'Started', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Hours in Godot', value: '20+', icon: Zap, color: 'text-purple-400' },
    { label: 'Projects in Progress', value: '1', icon: Users, color: 'text-green-400' },
    { label: 'Tutorials Completed', value: '10+', icon: Star, color: 'text-cyan-400' },
];
