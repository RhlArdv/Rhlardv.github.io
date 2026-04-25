'use client';

import { useEffect, useState } from 'react';

const Greeting: React.FC = () => {
    const [text, setText] = useState('Loading...');
    const [icon, setIcon] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setText('Good Morning'); setIcon('🌅');
        } else if (hour >= 12 && hour < 18) {
            setText('Good Afternoon'); setIcon('☀️');
        } else {
            setText('Good Evening'); setIcon('🌙');
        }
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <span className="font-medium">{text}</span>
        </div>
    );
};

export default Greeting;