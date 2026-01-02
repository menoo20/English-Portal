'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import FullScheduleEnglish from './FullScheduleEnglish';
import FullScheduleArabic from './FullScheduleArabic';
import './full-schedule.css';

export default function FullSchedulePage() {
    const { language } = useLanguage();

    if (language === 'ar') {
        return <FullScheduleArabic />;
    }

    return <FullScheduleEnglish />;
}
