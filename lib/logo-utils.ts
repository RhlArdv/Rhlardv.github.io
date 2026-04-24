/**
 * Get Simple Icons CDN URL for a tech logo
 * @param slug - The Simple Icons slug (e.g., 'react', 'nextdotjs')
 * @returns CDN URL for the icon
 */
export const getLogoUrl = (slug: string): string => {
    return `https://cdn.simpleicons.org/${slug}`;
};

/**
 * Map tech display names to Simple Icons slugs
 * Used when tech names don't match their icon slugs
 */
export const techSlugMap: Record<string, string> = {
    'Next.js': 'nextdotjs',
    'TailwindCSS': 'tailwindcss',
    'Tailwind CSS': 'tailwindcss',
    'AmazonS3': 'amazons3',
    'S3 Storage': 'amazons3',
    'DigitalOcean': 'digitalocean',
    'Framer Motion': 'framer',
    'Framer': 'framer'
};

/**
 * Get logo URL from tech name, with automatic slug mapping
 * @param name - The technology display name
 * @returns CDN URL for the icon
 */
export const getLogoUrlByName = (name: string): string => {
    const slug = techSlugMap[name] || name.toLowerCase();
    return getLogoUrl(slug);
};
