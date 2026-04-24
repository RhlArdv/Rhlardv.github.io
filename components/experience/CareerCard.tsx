'use client';

import React from 'react';
import { CareerItem } from '@/data/experience';

interface CareerCardProps {
    career: CareerItem;
}

/**
 * Individual career/work experience card
 * Follows SRP: Only renders a single career item
 */
const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
    return (
        <div className="group text-left">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                {career.period}
            </p>
            <h4 className="text-xl font-black uppercase tracking-tighter mb-1">
                {career.title}
            </h4>
            <p className="text-[10px] tracking-[0.2em] font-bold text-indigo-500 uppercase mb-4">
                {career.company} • {career.location}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {career.description}
            </p>
        </div>
    );
};

export default CareerCard;
