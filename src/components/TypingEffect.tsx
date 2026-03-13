'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypingEffectProps {
    strings: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
}

export default function TypingEffect({
    strings,
    typeSpeed = 80,
    deleteSpeed = 40,
    pauseTime = 2000,
}: TypingEffectProps) {
    const [displayText, setDisplayText] = useState('');
    const [stringIndex, setStringIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const tick = useCallback(() => {
        const currentString = strings[stringIndex];

        if (!isDeleting) {
            // Typing
            if (charIndex < currentString.length) {
                setDisplayText(currentString.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), pauseTime);
                return;
            }
        } else {
            // Deleting
            if (charIndex > 0) {
                setDisplayText(currentString.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else {
                setIsDeleting(false);
                setStringIndex(prev => (prev + 1) % strings.length);
            }
        }
    }, [charIndex, isDeleting, pauseTime, stringIndex, strings]);

    useEffect(() => {
        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, deleteSpeed, typeSpeed]);

    return (
        <span>
            {`> `}{displayText}
            <span className="typing-cursor" />
        </span>
    );
}
