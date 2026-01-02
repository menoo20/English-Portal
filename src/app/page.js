'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    ar: {
      reportsTitle: "التقارير الأسبوعية",
      articlesTitle: "المقالات والمدونة",
      viewAll: "عرض الكل",
      readMore: "←",
      emptyArticles: {
        title: "لا توجد مقالات حتى الآن",
        text: "سيتم إضافة محتوى جديد قريباً"
      },
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
        }
      ]
    },
    en: {
      reportsTitle: "Weekly Reports",
      articlesTitle: "Articles & Blog",
      viewAll: "View All",
      readMore: "→",
      emptyArticles: {
        title: "No Articles Yet",
        text: "New content will be added soon."
      },
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
        }
      ]
    }
  };

  const t = content[language];

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-decoration"></div>
        <div className="hero-decoration"></div>
        <Image
          src="/English-Portal/logo/image2.png"
          alt="Blackgold High Institute"
          width={150}
          height={150}
          className="hero-logo"
          priority
        />
      </section>

      {/* Latest Reports Section */}
      <section className="content-section">
        <div className="section-header">
          <h2 className="section-title">{t.reportsTitle}</h2>
          <Link href="/reports" className="view-all-link">
            <span>{t.viewAll}</span>
            <span>{language === 'ar' ? '←' : '→'}</span>
          </Link>
        </div>

        <div className="cards-grid" id="latest-reports">
          {t.cards.map((card) => (
            <React.Fragment key={card.id}>
              {card.isInternal ? (
                <Link href={card.link} className="content-card">
                  <div className="card-content">
                    <span className="card-category" style={card.color ? { color: card.color } : {}}>{card.category}</span>
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
                    <span className="card-category" style={card.color ? { color: card.color } : {}}>{card.category}</span>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-excerpt">{card.excerpt}</p>
                    <div className="card-meta">
                      <span className="card-date">{card.date}</span>
                      <span className="card-arrow">{t.readMore}</span>
                    </div>
                  </div>
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="content-section">
        <div className="section-header">
          <h2 className="section-title">{t.articlesTitle}</h2>
          <Link href="/blog" className="view-all-link">
            <span>{t.viewAll}</span>
            <span>{language === 'ar' ? '←' : '→'}</span>
          </Link>
        </div>

        <div className="cards-grid" id="latest-articles">
          {/* Empty State */}
          <div className="empty-state" style={{ gridColumn: "1 / -1" }}>
            <div className="empty-icon">📰</div>
            <h3 className="empty-title">{t.emptyArticles.title}</h3>
            <p className="empty-text">{t.emptyArticles.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}
