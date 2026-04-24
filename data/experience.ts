import { LucideIcon } from 'lucide-react';

/**
 * Career/Work Experience Item
 */
export interface CareerItem {
    id: string;
    period: string;
    title: string;
    company: string;
    location: string;
    description: string;
}

/**
 * Education Item
 */
export interface EducationItem {
    degree: string;
    institution: string;
}

/**
 * Certification Item
 */
export interface CertificationItem {
    title: string;
    issuer: string;
    year: string;
}

/**
 * Award/Honor Item
 */
export interface AwardItem {
    title: string;
    organization: string;
    year: string;
    description: string;
}

// ===========================================
// Career Data
// ===========================================
export const careers: CareerItem[] = [
    {
        id: 'career-1',
        period: 'Jan 2025 — Present',
        title: 'Full-Stack Developer',
        company: 'Quadrant Co.',
        location: 'Remote (Contract)',
        description: 'Architected scalable web solutions using Next.js and Laravel. Collaborated with the team to translate business needs into production code.'
    },
    {
        id: 'career-2',
        period: 'Oct 2024 — Feb 2025',
        title: 'Program Development (Data Analyst)',
        company: 'PT Surya Citra Media (SCM)',
        location: 'Jakarta',
        description: 'Synthesized complex viewership data into actionable insights. Collaborated with cross-functional teams to optimize content strategy.'
    },
    {
        id: 'career-3',
        period: 'Aug 2022 — Aug 2023',
        title: 'Co-Founder & Tech Lead',
        company: 'Inclue Indonesia',
        location: 'Yogyakarta',
        description: 'Led technical strategy for a sociopreneurship startup. Secured "Top 3 The Gade" award by aligning tech product with social impact goals.'
    },
    {
        id: 'career-4',
        period: 'Feb 2022 — Jun 2022',
        title: 'Assistant Lecturer (Python/OOP)',
        company: 'Universitas Muhammadiyah Yogyakarta',
        location: 'Yogyakarta',
        description: 'Mentored students in Object-Oriented Programming (OOP) and Python. Debugged complex code logic and facilitated lab sessions.'
    }
];

// ===========================================
// Education Data
// ===========================================
export const education: EducationItem = {
    degree: 'Bachelor of Information Technology',
    institution: 'Universitas Muhammadiyah Yogyakarta'
};

// ===========================================
// Certifications Data
// ===========================================
export const certifications: CertificationItem[] = [
    {
        title: 'Web Developer (BNSP)',
        issuer: 'National Prof. Certification',
        year: '2024'
    },
    {
        title: 'IT Specialist - Software Dev',
        issuer: 'Certiport',
        year: '2024'
    }
];

// ===========================================
// Awards Data
// ===========================================
export const awards: AwardItem[] = [
    {
        title: 'Top 3 The Gade Sociopreneurship',
        organization: 'PT. Pegadaian',
        year: '2023',
        description: 'Developed an innovative business solution with the Inclue Indonesia team.'
    },
    {
        title: 'Business Acumen Program',
        organization: 'Tanoto Foundation',
        year: '2022',
        description: 'Selected as a finalist in a prestigious future business leaders program.'
    }
];
