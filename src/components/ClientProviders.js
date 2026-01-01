'use client';

import { LanguageProvider } from '@/context/LanguageContext';

export default function ClientProviders({ children, initialLanguage }) {
    return (
        <LanguageProvider initialLanguage={initialLanguage}>
            {children}
        </LanguageProvider>
    );
}
