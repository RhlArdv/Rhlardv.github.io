import { MotionValue } from 'framer-motion';

/**
 * Project data structure
 */
export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    features: string[];
    links: {
        demo: string | null;
        repo: string | null;
    };
}

/**
 * Dock icon component props
 */
export interface DockIconProps {
    mouseX: MotionValue<number>;
    children: React.ReactNode;
    label: string;
    onClick: () => void;
}

/**
 * Navigation link structure
 */
export interface NavigationLink {
    id: string;
    icon: React.ReactNode;
    label: string;
}

/**
 * Social link structure
 */
export interface SocialLink {
    url: string;
    icon: React.ReactNode;
    label: string;
}

/**
 * Tech stack item
 */
export interface TechStackItem {
    name: string;
    slug: string;
}

/**
 * GitHub Statistics Structure
 */
export interface GitHubStats {
    publicRepos: number;
    followers: number;
    following: number;
    totalStars: number;
    totalForks: number;
}

/**
 * Contribution Statistics Structure
 */
export interface ContributionStats {
    totalContributions: number;
    currentStreak: number;
    longestStreak: number;
    avgPerDay: number;
}

/**
 * Contribution Day Structure
 */
export interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

/**
 * GitHub Repository structure for API response
 */
export interface GitHubRepo {
    stargazers_count: number;
    forks_count: number;
    name: string;
}

