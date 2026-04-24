'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label="Toggle Theme"
        >
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
            ) : (
                <Moon className="w-6 h-6 text-indigo-600 group-hover:-rotate-12 transition-transform duration-500" />
            )}
        </button>
    );
}