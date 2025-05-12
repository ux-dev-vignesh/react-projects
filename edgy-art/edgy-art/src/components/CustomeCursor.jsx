import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoverState, setHoverState] = useState('default');

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = () => {
            const interactives = document.querySelectorAll('a, button, [data-hover]');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => setHoverState('hover'));
                el.addEventListener('mouseleave', () => setHoverState('default'));
            });
        };

        document.addEventListener('mousemove', moveCursor);
        handleHover();

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: hoverState === 'hover' ? 1.5 : 1
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            />

            {/* Following circle */}
            <motion.div
                className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    opacity: hoverState === 'hover' ? 0.7 : 0.4,
                    scale: hoverState === 'hover' ? 1.2 : 1
                }}
                transition={{
                    x: { type: 'spring', damping: 20, stiffness: 100 },
                    y: { type: 'spring', damping: 20, stiffness: 100 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                }}
            />

            {/* Make sure default cursor is visible */}
            <style jsx global>{`
                * {
                    cursor: default; /* Use default cursor for everything */
                }

                a, button, [data-hover] {
                    cursor: pointer; /* Reset cursor style for links, buttons, and interactive elements */
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
