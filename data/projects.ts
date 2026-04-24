import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 1,
        title: "DIKOMETA: Digital Koperasi",
        description: "Digital cooperative management platform for campus cooperatives in Padang City, built in collaboration with faculty members to digitize and streamline cooperative operations.",
        tech: ["PHP Native", "MySQL", "JavaScript", "CSS3", "HTML5"],
        image: "/dikometa.png",
        features: [
            "Architected and implemented core application features in collaboration with faculty team for comprehensive digital transformation of campus cooperatives.",
            "Designed scalable database schema using MySQL to manage member data, transactions, savings, loans, and cooperative financial operations.",
            "Built modular PHP native architecture following clean code principles for maintainability and ease of feature additions.",
            "Implemented member management system with registration, profile updates, and membership tier handling.",
            "Developed transaction processing module for savings deposits, loan applications, and repayments with automated calculation of interest and profit sharing (SHU).",
            "Created admin dashboard for cooperative management with real-time analytics, member monitoring, and financial reporting.",
            "Integrated secure authentication system with role-based access control (RBAC) for members, admins, and super-admins.",
            "Built responsive user interface optimized for desktop and mobile devices to ensure accessibility across all user segments.",
            "Deployed across multiple cooperatives in Padang City, serving hundreds of active members with daily transaction processing.",
            "Documented system architecture and API endpoints for seamless knowledge transfer to cooperative staff and future developers."
        ],
        links: {
            demo: null,
            repo: null
        }
    }
];
