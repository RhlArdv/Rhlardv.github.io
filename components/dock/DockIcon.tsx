'use client';

import React, { useRef } from 'react';
import { motion, useTransform, useSpring, MotionValue } from 'framer-motion';

interface DockIconProps {
    mouseX: MotionValue<number>;
    children: React.ReactNode;
    label: string;
    onClick: () => void;
}

/**
 * Individual dock icon with magnetic hover effect
 * Follows SRP: Only handles single dock icon behavior
 */
const DockIcon: React.FC<DockIconProps> = ({ mouseX, children, label, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40]);
    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height: width, minWidth: 40, minHeight: 40 }}
            onClick={onClick}
            className="group relative flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors duration-300 will-change-transform"
        >
            <div className="p-2.5 w-full h-full flex items-center justify-center">
                {children}
            </div>
            {/* Desktop tooltip - shows on right */}
            <span className="pointer-events-none absolute left-full ml-3 hidden lg:group-hover:block bg-slate-900 dark:bg-white px-2 py-1 text-xs text-white dark:text-slate-900 whitespace-nowrap font-mono uppercase tracking-wider rounded">
                {label}
            </span>
            {/* Mobile tooltip - shows above */}
            <span className="pointer-events-none absolute -top-10 block lg:hidden bg-slate-900 dark:bg-white px-2 py-1 text-xs text-white dark:text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-mono uppercase tracking-wider rounded">
                {label}
            </span>
        </motion.div>
    );
};

export default DockIcon;
