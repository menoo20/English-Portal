'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children, initialLanguage }) {
    // Initialize with the prop passed from server component (or default 'ar')
    const [language, setLanguage] = useState(initialLanguage || 'ar');
    const [direction, setDirection] = useState(initialLanguage === 'en' ? 'ltr' : 'rtl');

    useEffect(() => {
        // Update direction based on language
        const newDir = language === 'ar' ? 'rtl' : 'ltr';
        setDirection(newDir);

        // Update HTML attributes directly
        document.documentElement.dir = newDir;
        document.documentElement.lang = language;

        // Persist to cookie for Server Components
        document.cookie = `language=${language}; path=/; max-age=31536000`; // 1 year expiry

        // Also persist to localStorage as backup
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
