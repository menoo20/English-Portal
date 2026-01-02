'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TeachersWeekly01English from './TeachersWeekly01English';
import TeachersWeekly01Arabic from './TeachersWeekly01Arabic';
import './teachers-weekly.css';

export default function TeachersWeekly01Page() {
    const { language } = useLanguage();

    if (language === 'ar') {
        return <TeachersWeekly01Arabic />;
    }

    return <TeachersWeekly01English />;
}
