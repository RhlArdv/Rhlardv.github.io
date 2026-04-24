import { Code2, Zap, Cpu, Gamepad2, Paintbrush, Music, LucideIcon } from 'lucide-react';

/**
 * Skill node structure for SkillTree component
 */
export interface SkillNode {
    name: string;
    level: 'mastered' | 'learning' | 'locked';
    icon: LucideIcon;
    description: string;
    projects?: string[];
}

/**
 * Game development skills data
 */
export const skills: Record<string, SkillNode> = {
    'Godot': {
        name: 'Godot Engine',
        level: 'learning',
        icon: Zap,
        description: 'Currently learning open-source game engine & GDScript',
        projects: ['Project Alpha (In Progress)']
    },
    'Unity': {
        name: 'Unity',
        level: 'locked',
        icon: Gamepad2,
        description: '3D/2D game engine - Planning to learn after Godot',
        projects: []
    },
    'C#': {
        name: 'C# Scripting',
        level: 'locked',
        icon: Code2,
        description: 'Object-oriented programming - Future learning goal',
        projects: []
    },
    'Game Design': {
        name: 'Game Design',
        level: 'locked',
        icon: Cpu,
        description: 'Level design, mechanics, player experience - Exploring fundamentals',
        projects: []
    },
    '2D Art': {
        name: '2D Art',
        level: 'locked',
        icon: Paintbrush,
        description: 'Sprite creation, pixel art - Future skill development',
        projects: []
    },
    'Audio': {
        name: 'Audio Design',
        level: 'locked',
        icon: Music,
        description: 'Sound effects, music integration - Future learning',
        projects: []
    },
};
