'use client';

import React from 'react';
import PortalButton from '../PortalButton';

/**
 * Site footer with copyright, portal button, and API credits
 * Following SRP: This component only handles footer display
 */
const SiteFooter: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mt-16 md:mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center">
                {/* Left: Copyright & Built With */}
                <div className="space-y-2 text-center md:text-left">
                    <p className="text-[10px] md:text-xs font-bold tracking-wider text-slate-900 dark:text-white">
                        © {currentYear} Rahul Ardiva Luthfi
                    </p>
                    <p className="text-[9px] md:text-[10px] font-mono text-slate-500 leading-relaxed">
                        Built with Next.js & Framer Motion
                    </p>
                </div>

                {/* Center: Easter Egg Portal Button */}
                <div className="flex justify-center">
                    <PortalButton />
                </div>

                {/* Right: API Credits */}
                <div className="text-center md:text-right">
                    <p className="text-[9px] md:text-[10px] font-mono text-slate-400 tracking-wider">
                        METRICS UPDATED IN REAL-TIME
                    </p>
                    <p className="text-[8px] md:text-[9px] font-mono text-slate-400 mt-1">
                        Powered by GitHub API & Vercel Analytics
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SiteFooter;
