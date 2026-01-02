'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TeachersWeekly02English from './TeachersWeekly02English';
import TeachersWeekly02Arabic from './TeachersWeekly02Arabic';
import '../teachers-weekly-01/teachers-weekly.css';

export default function TeachersWeekly02Page() {
    const { language } = useLanguage();

    if (language === 'ar') {
        return <TeachersWeekly02Arabic />;
    }

    return <TeachersWeekly02English />;
}
