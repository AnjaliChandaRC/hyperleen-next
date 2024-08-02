'use client'
import { useEffect, useState } from 'react';
import { BackToTop } from './Icons';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const SCROLL_TO_TOP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={SCROLL_TO_TOP} className="fixed bottom-5 right-5 bg-blue-500 duration-300 hover:bg-blue-700 bg-blue font-bold py-1 px-1 md:py-2 md:px-2 rounded-full shadow-md z-40 hover:opacity-55">
                    <BackToTop />
                </button>
            )}
        </>
    );
};

export default BackToTopButton;