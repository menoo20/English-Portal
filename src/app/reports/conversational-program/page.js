'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ConversationalArabic from './ConversationalArabic';
import ConversationalEnglish from './ConversationalEnglish';
import './conversational.css';

export default function ConversationalProgramPage() {
    const { language } = useLanguage();

    if (language === 'en') {
        return <ConversationalEnglish />;
    }

    return <ConversationalArabic />;
}
