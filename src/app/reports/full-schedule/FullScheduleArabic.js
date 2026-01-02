'use client';
import React from 'react';
import Link from 'next/link';
import { scheduleData } from './scheduleData';

export default function FullScheduleArabic() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="schedule-container" dir="rtl">
            <Link href="/reports/conversational-program" className="back-nav">
                <span>→</span>
                <span>العودة</span>
            </Link>

            {/* Header */}
            <header className="schedule-header" dir="ltr">
                <div className="experimental-badge">🧪 برنامج تجريبي</div>
                <h1>📅 برنامج المحادثة - 3 أشهر</h1>
                <p className="subtitle">الجدول التفصيلي - معهد بلاك جولد العالي</p>
                <p className="date-range">📆 4 يناير 2026 — 2 أبريل 2026</p>

                <div className="meta-grid">
                    <div className="meta-item">
                        <div className="number">12</div>
                        <div className="label">أسبوع</div>
                    </div>
                    <div className="meta-item">
                        <div className="number">13</div>
                        <div className="label">موضوع</div>
                    </div>
                    <div className="meta-item">
                        <div className="number">62</div>
                        <div className="label">يوم</div>
                    </div>
                    <div className="meta-item">
                        <div className="number">أحد-خميس</div>
                        <div className="label">الجدول</div>
                    </div>
                </div>
            </header>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button onClick={handlePrint} className="btn-schedule primary">
                    🖨️ طباعة / حفظ PDF
                </button>
                <Link href="/reports/conversational-program" className="btn-schedule secondary">
                    → العودة للتقرير
                </Link>
            </div>

            {/* Monthly Sections */}
            {scheduleData.months.map((month) => (
                <section key={month.id} className="month-section">
                    <div className="month-header" dir="ltr">
                        <h2>{month.titleEn}</h2>
                        <span className="duration">{month.durationEn}</span>
                    </div>

                    {month.weeks.map((week) => (
                        <div key={week.week} className="week-card">
                            <div className="week-header" dir="ltr">
                                <div>
                                    <span className="week-title">Week {week.week}</span>
                                    <span className="week-topic">{week.topic}</span>
                                </div>
                                <span className="week-dates">{week.dates} | {week.days} Days</span>
                            </div>
                            <table className="schedule-table" dir="ltr">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Day</th>
                                        <th>Focus</th>
                                        <th>Key Objectives</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {week.schedule.map((day, idx) => (
                                        <tr key={idx}>
                                            <td className="day-date">{day.date}</td>
                                            <td className="day-name">{day.day}</td>
                                            <td><span className="focus-badge">{day.focus}</span></td>
                                            <td className="objectives">{day.objectives}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </section>
            ))}

            {/* Quick Reference */}
            <div className="quick-ref">
                <h3>📋 مرجع سريع: العبارات الأساسية حسب الموضوع</h3>
                <div className="phrases-grid" dir="ltr">
                    {scheduleData.quickReference.map((item) => (
                        <div key={item.num} className="phrase-item">
                            <div className="phrase-number">{item.num}</div>
                            <div className="phrase-content">
                                <div className="phrase-topic">{item.topic}</div>
                                <div className="phrase-text">{item.phrase}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Teacher Notes */}
            <div className="teacher-notes">
                <h3>📢 ملاحظات هامة للمعلمين</h3>
                <ul>
                    {scheduleData.teacherNotes.ar.map((note, idx) => (
                        <li key={idx}>{note}</li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <footer className="page-footer">
                <p>قسم اللغة الإنجليزية - معهد بلاك جولد العالي | الفصل الثاني - 2025/2026</p>
            </footer>
        </div>
    );
}
