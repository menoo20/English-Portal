'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TeachersWeekly03English from './TeachersWeekly03English';
import TeachersWeekly03Arabic from './TeachersWeekly03Arabic';
import '../teachers-weekly-01/teachers-weekly.css';

export default function TeachersWeekly03Page() {
    const { language } = useLanguage();

    if (language === 'ar') {
        return <TeachersWeekly03Arabic />;
    }

    return <TeachersWeekly03English />;
}
