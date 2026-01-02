'use client';
import React from 'react';
import Link from 'next/link';
import { scheduleData } from './scheduleData';

export default function FullScheduleEnglish() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="schedule-container" dir="ltr">
            <Link href="/reports/conversational-program" className="back-nav">
                <span>←</span>
                <span>Back</span>
            </Link>

            {/* Header */}
            <header className="schedule-header">
                <div className="experimental-badge">🧪 Experimental Program</div>
                <h1>📅 3-Month Conversational Program</h1>
                <p className="subtitle">Full Schedule - Blackgold High Institute</p>
                <p className="date-range">📆 January 4, 2026 — April 2, 2026</p>

                <div className="meta-grid">
                    <div className="meta-item">
                        <div className="number">12</div>
                        <div className="label">Weeks</div>
                    </div>
                    <div className="meta-item">
                        <div className="number">13</div>
                        <div className="label">Topics</div>
                    </div>
                    <div className="meta-item">
                        <div className="number">62</div>
                        <div className="label">Days</div>
                    </div>
                    <div className="meta-item">
                        <div className="number">Sun-Thu</div>
                        <div className="label">Schedule</div>
                    </div>
                </div>
            </header>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button onClick={handlePrint} className="btn-schedule primary">
                    🖨️ Print / Save as PDF
                </button>
                <Link href="/reports/conversational-program" className="btn-schedule secondary">
                    ← Back to Report
                </Link>
            </div>

            {/* Monthly Sections */}
            {scheduleData.months.map((month) => (
                <section key={month.id} className="month-section">
                    <div className="month-header">
                        <h2>{month.titleEn}</h2>
                        <span className="duration">{month.durationEn}</span>
                    </div>

                    {month.weeks.map((week) => (
                        <div key={week.week} className="week-card">
                            <div className="week-header">
                                <div>
                                    <span className="week-title">Week {week.week}</span>
                                    <span className="week-topic">{week.topic}</span>
                                </div>
                                <span className="week-dates">{week.dates} | {week.days} Days</span>
                            </div>
                            <table className="schedule-table">
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
                <h3>📋 Quick Reference: Key Phrases by Topic</h3>
                <div className="phrases-grid">
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
                <h3>📢 Important Notes for Teachers</h3>
                <ul>
                    {scheduleData.teacherNotes.en.map((note, idx) => (
                        <li key={idx}>{note}</li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <footer className="page-footer">
                <p>English Department - Blackgold High Institute | Term 2 - 2025/2026</p>
            </footer>
        </div>
    );
}
