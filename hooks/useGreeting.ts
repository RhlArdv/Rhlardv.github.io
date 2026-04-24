import { useState, useEffect } from 'react';

type GreetingType = 'Good Morning' | 'Good Afternoon' | 'Good Evening' | 'Hello';

/**
 * Custom hook that returns a time-based greeting.
 * - 05:00 - 11:59 → "Good Morning"
 * - 12:00 - 17:59 → "Good Afternoon"
 * - 18:00 - 04:59 → "Good Evening"
 */
export const useGreeting = (): GreetingType => {
    const [greeting, setGreeting] = useState<GreetingType>('Hello');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setGreeting('Good Morning');
        } else if (hour >= 12 && hour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);

    return greeting;
};
