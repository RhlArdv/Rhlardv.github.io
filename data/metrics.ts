import { Activity, Code2, Gauge, LucideIcon } from 'lucide-react';

export interface MetricItem {
    label: string;
    value: string;
    icon: LucideIcon;
    trend: string;
    color: string;
}

/**
 * Calculate years of experience from start year
 */
const START_YEAR = 2022;
const calculateYearsExperience = (): string => {
    const currentYear = new Date().getFullYear();
    const years = currentYear - START_YEAR;
    return `${years}+`;
};

/**
 * Quick stats - auto-calculated where possible
 */
export const quickStats: MetricItem[] = [
    {
        label: 'Years Experience',
        value: calculateYearsExperience(),
        icon: Activity,
        trend: 'Full-stack',
        color: 'text-purple-500'
    },
    {
        label: 'Projects Delivered',
        value: '5',
        icon: Code2,
        trend: 'Production',
        color: 'text-indigo-500'
    },
    {
        label: 'Lighthouse Score',
        value: '100',
        icon: Gauge,
        trend: 'Performance',
        color: 'text-green-500'
    },
];
