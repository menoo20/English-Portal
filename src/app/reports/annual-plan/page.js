'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnnualPlanArabic from './AnnualPlanArabic';
import AnnualPlanEnglish from './AnnualPlanEnglish';
import './annual-plan.css';

export default function AnnualPlanPage() {
    const { language } = useLanguage();

    if (language === 'en') {
        return <AnnualPlanEnglish />;
    }

    return <AnnualPlanArabic />;
}