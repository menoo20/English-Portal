'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ShortagesEnglish from './ShortagesEnglish';
import ShortagesArabic from './ShortagesArabic';
import './shortages.css';

export default function ShortagesPage() {
    const { language } = useLanguage();

    if (language === 'ar') {
        return <ShortagesArabic />;
    }

    return <ShortagesEnglish />;
}
