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
    id: string;
    degree: string;
    institution: string;
    period?: string;
    description?: string;
}

/**
 * Certification Item
 */
export interface CertificationItem {
    title: string;
    issuer: string;
    year: string;
}

// Awards section removed - no award data provided

// ===========================================
// Career Data
// ===========================================
export const careers: CareerItem[] = [
    {
        id: 'career-1',
        period: 'Sep 2025 — Present',
        title: 'Full Stack Developer',
        company: 'Dinas Komunikasi dan Informatika Kota Padang',
        location: 'Padang (Onsite)',
        description: 'Architecting and managing system workflows with efficient database design using SQLyog and phpMyAdmin. Building robust server-side applications with Laravel following clean architecture principles, while crafting responsive and interactive web interfaces with Tailwind CSS and Bootstrap. Implementing dynamic user experiences via AJAX/jQuery and developing RESTful APIs for seamless system integration. Leveraging Git/GitHub/GitLab for version control, conducting thorough testing with Chrome DevTools, and producing comprehensive technical documentation to ensure maintainability and knowledge transfer.'
    },
];

// ===========================================
// Education Data
// ===========================================
export const education: EducationItem[] = [
    {
        id: 'edu-1',
        degree: 'Bachelor of Information Systems',
        institution: 'Universitas Metamedia'
    },
    {
        id: 'edu-2',
        degree: 'Exchange Student Batch 4',
        institution: 'Telkom University | Kampus Merdeka',
        period: '2024',
        description: 'Completed 20 credits with a 3.63 GPA through the Kampus Merdeka MBKM Student Exchange Program. Strengthened technical and managerial competencies through coursework in Social Media Analytics, ICT Project Management, User Experience, System Security, and Basic Software Engineering.'
    }
];

// ===========================================
// Certifications Data
// ===========================================
export const certifications: CertificationItem[] = [
    {
        title: 'Junior Web Programmer',
        issuer: 'BNSP | ID: 62019 2513 5 0028834 2025',
        year: 'Dec 2025 — Dec 2028'
    },
    {
        title: 'MTCNA',
        issuer: 'Mikrotik',
        year: 'Jun 2023'
    },
    {
        title: 'Java Foundation',
        issuer: 'Oracle',
        year: 'May 2023'
    },
    {
        title: 'Mentor Database',
        issuer: 'Kafekoding',
        year: '2023'
    },
    {
        title: 'Pertukaran Mahasiswa Merdeka Batch 4',
        issuer: 'Kampus Merdeka & Universitas Telkom',
        year: '2024'
    }
];

