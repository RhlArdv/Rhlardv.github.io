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
    },
    {
        id: 2,
        title: "LAVAS: Layanan Audio Visual Arsip Statis",
        description: "Web-based information management system for audiovisual archives and digital document services, built with Laravel 12 for managing institutional archives, media galleries, news, and profile information.",
        tech: ["Laravel", "PHP", "TailwindCSS", "AlpineJS", "MySQL", "Vite"],
        image: "/lavas.png",
        features: [
            "Implemented comprehensive digital archive system with flexible categorization for static and dynamic archives including catalog management and procedural guidelines.",
            "Built multi-media gallery supporting photos, videos, and YouTube integration with SEO-friendly URL structure and flexible content navigation.",
            "Developed full-featured content management system including news/CRUD, figure profiles with photos, infographics, and dynamic slider/carousel for homepage banners.",
            "Created institutional profile section with vision, mission, service listings, team/staff profiles, and activity gallery documentation.",
            "Integrated geographic information system for Padang area information with time lapse documentation and multimedia area documentation.",
            "Implemented role-based access control (RBAC) with flexible permission system for Administrator and Staff roles with secure authentication via Laravel Breeze.",
            "Added comprehensive security features including password hashing, CSRF protection, XSS prevention, SQL injection prevention, file upload validation, and rate limiting.",
            "Built public services section for PPID transparency information, service procedure guidelines, and accessible contact information.",
            "Implemented activity logging and visitor statistics tracking with admin dashboard for monitoring and analytics.",
            "Deployed with modern build tooling using Vite 6 for fast asset compilation and optimized performance with Intervention Image for image processing and Spatie PDF to Image conversion."
        ],
        links: {
            demo: null,
            repo: "https://github.com/RhlArdv/lavas"
        }
    }
];
