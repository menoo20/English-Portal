'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import MeetingEnglish from './MeetingEnglish';
import MeetingArabic from './MeetingArabic';
import './meeting.css';

export default function MeetingPage() {
    const { language } = useLanguage();

    if (language === 'ar') {
        return <MeetingArabic />;
    }

    return <MeetingEnglish />;
}
