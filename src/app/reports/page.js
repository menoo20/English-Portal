'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ReportsPage() {
    const { language } = useLanguage();

    const content = {
        ar: {
            title: "التقارير الأسبوعية",
            description: "أرشيف التقارير الأسبوعية لقسم اللغة الإنجليزية",
            filter: { all: "الكل", recent: "الأحدث", oldest: "الأقدم" },
            back: "العودة",
            readMore: "←",
            cards: [
                {
                    id: 'annual-plan',
                    category: "خطة سنوية",
                    title: "📅 الخطة السنوية الشاملة 2026",
                    excerpt: "الخطة الدراسية الكاملة لمدة 11 شهراً (تأسيس + New Headway) مع التواريخ.",
                    date: "يناير 2026 - نوفمبر 2026",
                    link: "/reports/annual-plan",
                    color: "#D4AF37",
                    isInternal: true
                },
                {
                    id: 'conversational',
                    category: "خطة دراسية",
                    title: "برنامج المحادثة (3 أشهر)",
                    excerpt: "الخطة الأسبوعية الموحدة لقسم اللغة الإنجليزية، تشمل الأهداف والملاحظات الهامة.",
                    date: "ديسمبر 2025 - مارس 2026",
                    link: "/reports/conversational-program",
                    color: "#D4AF37",
                    isInternal: true
                },
                {
                    id: 'full-schedule',
                    category: "الخطة التفصيلية",
                    title: "📅 الخطة التفصيلية الكاملة",
                    excerpt: "جدول تفصيلي يومي لبرنامج المحادثة يشمل جميع المواضيع والأهداف والأنشطة.",
                    date: "ديسمبر 2025 - مارس 2026",
                    link: "/reports/full-schedule",
                    color: "#F4D03F",
                    isInternal: true
                },
                {
                    id: 'weekly-03',
                    category: "تقرير المعلمين الأسبوعي",
                    title: "📊 تقرير أداء المعلمين - الأسبوع 3",
                    excerpt: "تقييم أسبوعي شامل لـ 9 معلمين، يشمل الأهداف والأدلة وتقييم الجودة (نجمان متميزان)...",
                    date: "28 ديسمبر 2025 - 1 يناير 2026",
                    link: "/reports/teachers-weekly-03",
                    isInternal: true
                },
                {
                    id: 'weekly-02',
                    category: "تقرير المعلمين الأسبوعي",
                    title: "📊 تقرير أداء المعلمين - الأسبوع 2",
                    excerpt: "تقييم أسبوعي شامل لـ 9 معلمين، يشمل الأهداف والأدلة وتقييم الجودة...",
                    date: "21 - 25 ديسمبر 2025",
                    link: "/reports/teachers-weekly-02",
                    isInternal: true
                },
                {
                    id: 'weekly-01',
                    category: "تقرير المعلمين الأسبوعي",
                    title: "📊 تقرير أداء المعلمين الأسبوعي",
                    excerpt: "تقييم أسبوعي شامل لـ 8 معلمين، يشمل الأهداف والأدلة وتقييم الجودة...",
                    date: "7 - 11 ديسمبر 2025",
                    link: "/reports/teachers-weekly-01",
                    isInternal: true
                },
                {
                    id: 'shortages-01',
                    category: "تقرير النواقص",
                    title: "نواقص المدربين",
                    excerpt: "جدول يوضح النواقص في مستلزمات فصول المدربين",
                    date: "8 ديسمبر 2025",
                    link: "/reports/shortages-01",
                    isInternal: true
                },
                {
                    id: 'meeting-01',
                    category: "الاجتماع الأول",
                    title: "محضر اجتماع قسم اللغة الإنجليزية",
                    excerpt: "منهجية التدريس الجديدة، التقارير الأسبوعية، ومواد الفصل الدراسي...",
                    date: "4 ديسمبر 2025",
                    link: "/reports/meeting-01",
                    isInternal: true
                }
            ]
        },
        en: {
            title: "Weekly Reports",
            description: "Archive of weekly reports for the English Department",
            filter: { all: "All", recent: "Recent", oldest: "Oldest" },
            back: "Back",
            readMore: "→",
            cards: [
                {
                    id: 'annual-plan',
                    category: "Annual Plan",
                    title: "📅 Comprehensive Annual Plan 2026",
                    excerpt: "Full 11-month study plan (Foundation + New Headway) with dates.",
                    date: "Jan 2026 - Nov 2026",
                    link: "/reports/annual-plan",
                    color: "#D4AF37",
                    isInternal: true
                },
                {
                    id: 'conversational',
                    category: "Study Plan",
                    title: "Conversational Program (3 Months)",
                    excerpt: "Unified weekly plan for the English Department, covering goals and notes.",
                    date: "Dec 2025 - Mar 2026",
                    link: "/reports/conversational-program",
                    color: "#D4AF37",
                    isInternal: true
                },
                {
                    id: 'full-schedule',
                    category: "Detailed Plan",
                    title: "📅 Full Detailed Schedule",
                    excerpt: "Daily detailed schedule for the Conversational Program covering all topics.",
                    date: "Dec 2025 - Mar 2026",
                    link: "/reports/full-schedule",
                    color: "#F4D03F",
                    isInternal: true
                },
                {
                    id: 'weekly-03',
                    category: "Teachers Weekly",
                    title: "📊 Teachers Performance Report - Week 3",
                    excerpt: "Comprehensive evaluation of 9 teachers (2 Exemplary), including goals and quality assessment...",
                    date: "Dec 28, 2025 - Jan 1, 2026",
                    link: "/reports/teachers-weekly-03",
                    isInternal: true
                },
                {
                    id: 'weekly-02',
                    category: "Teachers Weekly",
                    title: "📊 Teachers Performance Report - Week 2",
                    excerpt: "Comprehensive evaluation of 9 teachers, including goals and quality assessment...",
                    date: "Dec 21 - 25, 2025",
                    link: "/reports/teachers-weekly-02",
                    isInternal: true
                },
                {
                    id: 'weekly-01',
                    category: "Teachers Weekly",
                    title: "📊 Teachers Performance Report",
                    excerpt: "Comprehensive evaluation of 8 teachers, including goals and quality assessment...",
                    date: "Dec 7 - 11, 2025",
                    link: "/reports/teachers-weekly-01",
                    isInternal: true
                },
                {
                    id: 'shortages-01',
                    category: "Shortages Report",
                    title: "Instructor Shortages",
                    excerpt: "Table showing shortages in instructor classroom supplies.",
                    date: "Dec 8, 2025",
                    link: "/reports/shortages-01",
                    isInternal: true
                },
                {
                    id: 'meeting-01',
                    category: "First Meeting",
                    title: "English Department Meeting Minutes",
                    excerpt: "New teaching methodology, weekly reports, and semester materials...",
                    date: "Dec 4, 2025",
                    link: "/reports/meeting-01",
                    isInternal: true
                }
            ]
        }
    };

    const t = content[language];

    return (
        <div className="reports-page">
            <header className="page-header">
                <Link href="/" className="back-nav">
                    <span>{language === 'ar' ? '←' : '→'}</span>
                    <span>{t.back}</span>
                </Link>
                <h1 className="page-title">{t.title}</h1>
                <p className="page-description">{t.description}</p>
            </header>

            <div className="filter-bar">
                <button className="filter-chip active">{t.filter.all}</button>
                <button className="filter-chip">{t.filter.recent}</button>
                <button className="filter-chip">{t.filter.oldest}</button>
            </div>

            <section className="content-section">
                <div className="cards-grid">
                    {t.cards.map((card) => (
                        <div key={card.id} className="content-card-wrapper">
                            {card.isInternal ? (
                                <Link href={card.link} className="content-card">
                                    <div className="card-content">
                                        <span className="card-category" style={{ color: card.color }}>{card.category}</span>
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-excerpt">{card.excerpt}</p>
                                        <div className="card-meta">
                                            <span className="card-date">{card.date}</span>
                                            <span className="card-arrow">{t.readMore}</span>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <a href={card.link} className="content-card">
                                    <div className="card-content">
                                        <span className="card-category" style={{ color: card.color }}>{card.category}</span>
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-excerpt">{card.excerpt}</p>
                                        <div className="card-meta">
                                            <span className="card-date">{card.date}</span>
                                            <span className="card-arrow">{t.readMore}</span>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
