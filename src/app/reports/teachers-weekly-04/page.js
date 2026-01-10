'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TeachersWeekly04English from './TeachersWeekly04English';
import TeachersWeekly04Arabic from './TeachersWeekly04Arabic';
import '../teachers-weekly-01/teachers-weekly.css';

export default function TeachersWeekly04Page() {
    const { language } = useLanguage();

    if (language === 'ar') {
        return <TeachersWeekly04Arabic />;
    }

    return <TeachersWeekly04English />;
}
