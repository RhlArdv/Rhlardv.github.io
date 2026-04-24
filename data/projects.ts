import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 1,
        title: "DIKOMETA: Digital Marketing Ecosystem",
        description: "Comprehensive digital marketing analytics platform for tracking and optimizing campaign performance across multiple channels.",
        tech: ["Laravel", "Vue.js", "MySQL", "TailwindCSS", "Chart.js"],
        image: "/dikometa.png",
        features: [
            "Real-time campaign analytics dashboard with interactive data visualization",
            "Multi-channel integration for social media, email, and web campaigns",
            "Automated reporting system with exportable PDF and Excel formats",
            "User role management with granular permission controls",
            "A/B testing framework for campaign optimization",
            "RESTful API architecture for seamless third-party integrations"
        ],
        links: {
            demo: null,
            repo: null
        }
    }
];
