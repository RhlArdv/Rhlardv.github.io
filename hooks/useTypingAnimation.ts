import { useState, useEffect } from 'react';

interface UseTypingAnimationProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export const useTypingAnimation = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
}: UseTypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(typingSpeed);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];

        const handleTyping = () => {
            if (isDeleting) {
                // Deleting logic
                setDisplayedText(prev => prev.substring(0, prev.length - 1));
                setSpeed(deletingSpeed);
            } else {
                // Typing logic
                setDisplayedText(prev => currentFullText.substring(0, prev.length + 1));
                setSpeed(typingSpeed);
            }

            if (!isDeleting && displayedText === currentFullText) {
                // Finished typing, wait before deleting
                setSpeed(pauseDuration);
                setIsDeleting(true);
            } else if (isDeleting && displayedText === "") {
                // Finished deleting, move to next text
                setIsDeleting(false);
                setCurrentTextIndex(prev => (prev + 1) % texts.length);
                setSpeed(typingSpeed);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration, speed]);

    return { displayedText, isDeleting };
};
