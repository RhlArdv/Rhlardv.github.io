import { ContributionDay } from '@/types';

/**
 * Contribution heatmap cell configuration
 */
export const HEATMAP_CONFIG = {
    CELL_SIZE: 10,
    CELL_GAP: 3,
    ROWS: 7,
} as const;

/**
 * Get the color class for a contribution cell based on count
 * @param count - Number of contributions for the day
 * @returns Tailwind CSS fill classes for light and dark mode
 */
export const getContributionColor = (count: number): string => {
    if (count === 0) return 'fill-slate-100 dark:fill-slate-800';
    if (count <= 2) return 'fill-emerald-200 dark:fill-emerald-900';
    if (count <= 5) return 'fill-emerald-300 dark:fill-emerald-700';
    if (count <= 10) return 'fill-emerald-400 dark:fill-emerald-500';
    return 'fill-emerald-500 dark:fill-emerald-400';
};

/**
 * Generate contribution heatmap cell data
 * @param contributionData - Array of contribution days from GitHub API
 * @returns Array of cell objects with position and color data
 */
export interface ContributionCell {
    key: string;
    x: number;
    y: number;
    count: number;
    date: string;
    colorClass: string;
}

export const generateContributionCellData = (contributionData: ContributionDay[]): ContributionCell[] => {
    const { CELL_SIZE, CELL_GAP, ROWS } = HEATMAP_CONFIG;
    const totalDays = contributionData.length;
    const weeks = Math.ceil(totalDays / 7);
    const cells: ContributionCell[] = [];

    for (let week = 0; week < weeks; week++) {
        for (let day = 0; day < ROWS; day++) {
            const dayIndex = week * 7 + day;

            if (dayIndex < totalDays) {
                const contribution = contributionData[dayIndex];
                const count = contribution?.count || 0;
                const date = contribution?.date || '';

                cells.push({
                    key: `${week}-${day}`,
                    x: week * (CELL_SIZE + CELL_GAP),
                    y: day * (CELL_SIZE + CELL_GAP),
                    count,
                    date,
                    colorClass: getContributionColor(count),
                });
            }
        }
    }
    return cells;
};
