'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
    Home,
    Layers,
    Sun,
    Moon,
    Github,
    BarChart3,
    MessageCircle,
    Briefcase,
} from 'lucide-react';
import { NavigationLink, SocialLink } from '@/types';
import DockIcon from './dock/DockIcon';

/** Scroll offset for section navigation */
const SCROLL_OFFSET = 100;

/** WhatsApp contact URL */
const WHATSAPP_URL = 'https://wa.me/6282134807621';

/**
 * Hybrid Floating Dock
 * - Desktop: Left vertical sidebar
 * - Mobile: Bottom horizontal bar
 */
const FloatingDock: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const mouseX = useMotionValue(Infinity);

    const links: NavigationLink[] = [
        { id: 'hero', icon: <Home className="w-full h-full" />, label: "Home" },
        { id: 'projects', icon: <Layers className="w-full h-full" />, label: "Projects" },
        { id: 'experience', icon: <Briefcase className="w-full h-full" />, label: "Experience" },
        { id: 'metrics', icon: <BarChart3 className="w-full h-full" />, label: "Metrics" },
    ];

    const socialLinks: SocialLink[] = [
        { url: "https://github.com/RhlArdv", icon: <Github className="w-full h-full" />, label: "GitHub" },
        { url: WHATSAPP_URL, icon: <MessageCircle className="w-full h-full" />, label: "WhatsApp" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
            window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const openExternalLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {/* DESKTOP: Left Vertical Dock */}
            <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onMouseMove={(e) => {
                        requestAnimationFrame(() => mouseX.set(e.pageY));
                    }}
                    onMouseLeave={() => mouseX.set(Infinity)}
                    className="flex flex-col items-center gap-1 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-2 rounded-full shadow-xl"
                >
                    {/* Navigation Links */}
                    {links.map((link) => (
                        <DockIcon key={link.id} mouseX={mouseX} label={link.label} onClick={() => scrollToSection(link.id)}>
                            {link.icon}
                        </DockIcon>
                    ))}

                    <div className="w-8 h-px bg-slate-200 dark:bg-slate-700 my-1"></div>

                    {/* Social Links */}
                    {socialLinks.map((link) => (
                        <DockIcon key={link.label} mouseX={mouseX} label={link.label} onClick={() => openExternalLink(link.url)}>
                            {link.icon}
                        </DockIcon>
                    ))}

                    <div className="w-8 h-px bg-slate-200 dark:bg-slate-700 my-1"></div>

                    {/* Theme Toggle */}
                    <DockIcon
                        mouseX={mouseX}
                        label="Theme"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {!mounted ? (
                            <div className="w-full h-full bg-transparent" />
                        ) : (
                            theme === 'dark' ? <Sun className="w-full h-full" /> : <Moon className="w-full h-full" />
                        )}
                    </DockIcon>
                </motion.div>
            </div>

            {/* MOBILE: Bottom Horizontal Dock */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onMouseMove={(e) => {
                        requestAnimationFrame(() => mouseX.set(e.pageX));
                    }}
                    onMouseLeave={() => mouseX.set(Infinity)}
                    className="flex items-center gap-1 bg-white/90 dark:bg-black/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-1.5 rounded-full shadow-xl"
                >
                    {/* Navigation Links */}
                    {links.map((link) => (
                        <DockIcon key={link.id} mouseX={mouseX} label={link.label} onClick={() => scrollToSection(link.id)}>
                            {link.icon}
                        </DockIcon>
                    ))}

                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

                    {/* Social Links */}
                    {socialLinks.map((link) => (
                        <DockIcon key={link.label} mouseX={mouseX} label={link.label} onClick={() => openExternalLink(link.url)}>
                            {link.icon}
                        </DockIcon>
                    ))}

                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

                    {/* Theme Toggle */}
                    <DockIcon
                        mouseX={mouseX}
                        label="Theme"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {!mounted ? (
                            <div className="w-full h-full bg-transparent" />
                        ) : (
                            theme === 'dark' ? <Sun className="w-full h-full" /> : <Moon className="w-full h-full" />
                        )}
                    </DockIcon>
                </motion.div>
            </div>
        </>
    );
};

export default FloatingDock;