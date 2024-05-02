"use client";

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
        return 'dark';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = document.documentElement;
            root.classList.remove('light', 'dark');
            root.classList.add(theme);

            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');

    return (
        <div
            className='cursor-pointer'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? <FaMoon size={24} className='text-gray-800' /> : <FaSun size={24} className='text-lightSalmon' />}
        </div>
    );
}
