'use client';
import React from 'react';
import Link from 'next/link';

const votingData = [
    { topic: '🍔 How to order food at a restaurant', votes: 7, selected: true },
    { topic: '📅 Talk about daily routine', votes: 7, selected: true },
    { topic: '🏙️ Talk about your country and city', votes: 7, selected: true },
    { topic: '🛠️ Technical tools (Specialization English)', votes: 6, selected: true },
    { topic: '🍕 What\'s your favorite food', votes: 6, selected: true },
    { topic: '🚑 Emergency phrases (Medical emergencies)', votes: 5, selected: true },
    { topic: '✈️ How to book a room/ticket (Travel)', votes: 5, selected: true },
    { topic: '💼 Prepare for an interview', votes: 5, selected: true },
    { topic: '👕 How to buy clothes in a shop', votes: 4, selected: true },
    { topic: '👨‍👩‍👧‍👦 Talk about your family', votes: 4, selected: true },
    { topic: '🚗 Understand your car (Car phrases)', votes: 4, selected: true },
    { topic: '📸 Describe a photo', votes: 3, selected: true },
    { topic: '👗 Describe your outfit', votes: 3, selected: false },
    { topic: '👤 Share personal information', votes: 3, selected: false },
    { topic: '🎒 Talk about a trip you made', votes: 3, selected: false },
    { topic: '⏳ Time phrases and expressions', votes: 3, selected: false },
    { topic: '🎬 Watch a movie and talk about it', votes: 3, selected: false },
    { topic: '❤️ How to share feelings and basic needs', votes: 2, selected: false },
    { topic: '🔢 Numbers and counting', votes: 2, selected: false },
    { topic: '➕ Numbers and counting (Supplementary)', votes: 2, selected: false },
    { topic: '🌟 Talk about a celebrity you like', votes: 2, selected: false },
];

const maxVotes = 7;

export default function ConversationalArabic() {
    return (
        <div className="report-container" dir="rtl">
            <Link href="/reports" className="back-nav">
                <span>→</span>
                <span>العودة</span>
            </Link>

            {/* Report Header */}
            <div className="report-header">
                <h1>برنامج المحادثة (3 أشهر)</h1>
                <p className="subtitle">خطة فصلية تشاركية مبنية على تصويت المعلمين</p>
            </div>

            {/* Statistics */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number">21</div>
                    <div className="stat-label">موضوع مقترح</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">9</div>
                    <div className="stat-label">معلمين صوتوا</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">87</div>
                    <div className="stat-label">إجمالي الأصوات</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">12</div>
                    <div className="stat-label">موضوع تم اختياره</div>
                </div>
            </div>

            {/* Process Section */}
            <div className="section-box">
                <h2 className="section-title">📋 منهجية الاختيار التشاركي</h2>
                <div className="process-steps">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-title">جمع المقترحات</div>
                        <div className="step-desc">21 موضوع محادثة تم اقتراحها</div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-title">تصويت المعلمين</div>
                        <div className="step-desc">9 معلمين شاركوا في التصويت</div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-title">تحليل النتائج</div>
                        <div className="step-desc">ترتيب حسب عدد الأصوات</div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">4</div>
                        <div className="step-title">اختيار الأفضل</div>
                        <div className="step-desc">أعلى 12 موضوع للخطة الفصلية</div>
                    </div>
                </div>
            </div>

            {/* Voting Results Chart */}
            <div className="section-box">
                <h2 className="section-title">📊 نتائج التصويت (21 موضوع)</h2>
                <div className="vote-chart">
                    {votingData.map((item, index) => (
                        <div key={index} className={`vote-item ${item.selected ? 'selected' : ''}`}>
                            <div className="vote-topic">{item.topic}</div>
                            <div className="vote-bar-container">
                                <div
                                    className={`vote-bar ${item.selected ? 'selected' : 'not-selected'}`}
                                    style={{ width: `${(item.votes / maxVotes) * 100}%` }}
                                />
                            </div>
                            <div className="vote-count">{item.votes}</div>
                        </div>
                    ))}
                </div>
                <div className="legend-box">
                    🏆 الموضوعات الذهبية = تم اختيارها للخطة الفصلية | الموضوعات الرمادية = احتياطي للفصول القادمة
                </div>
            </div>

            {/* 3-Month Schedule */}
            <div className="section-box">
                <h2 className="section-title">📅 الخطة الفصلية (3 أشهر - 13 موضوع)</h2>

                {/* Month 1 */}
                <div className="month-card">
                    <div className="month-header">
                        <div className="month-name">🗓️ الشهر الأول</div>
                        <div className="month-weeks">الأسابيع 1-4</div>
                    </div>
                    <div className="topic-list">
                        <div className="topic-item">
                            <div className="topic-number">1</div>
                            <div className="topic-name">🍔 How to order food at a restaurant</div>
                            <div className="topic-duration">5 أيام</div>
                            <div className="topic-votes">7 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">2</div>
                            <div className="topic-name">📅 Talk about daily routine</div>
                            <div className="topic-duration">4 أيام</div>
                            <div className="topic-votes">7 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">3</div>
                            <div className="topic-name">🏙️ Talk about your country and city</div>
                            <div className="topic-duration">4 أيام</div>
                            <div className="topic-votes">7 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">4</div>
                            <div className="topic-name">🛠️ Technical tools (Specialization English)</div>
                            <div className="topic-duration">7 أيام</div>
                            <div className="topic-votes">6 votes</div>
                        </div>
                    </div>
                </div>

                {/* Month 2 */}
                <div className="month-card">
                    <div className="month-header">
                        <div className="month-name">🗓️ الشهر الثاني</div>
                        <div className="month-weeks">الأسابيع 5-8</div>
                    </div>
                    <div className="topic-list">
                        <div className="topic-item">
                            <div className="topic-number">5</div>
                            <div className="topic-name">🍕 What's your favorite food</div>
                            <div className="topic-duration">3 أيام</div>
                            <div className="topic-votes">6 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">6</div>
                            <div className="topic-name">🚑 Emergency phrases (Medical emergencies)</div>
                            <div className="topic-duration">6 أيام</div>
                            <div className="topic-votes">5 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">7</div>
                            <div className="topic-name">✈️ How to book a room/ticket (Travel)</div>
                            <div className="topic-duration">6 أيام</div>
                            <div className="topic-votes">5 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">8</div>
                            <div className="topic-name">💼 Prepare for an interview</div>
                            <div className="topic-duration">7 أيام</div>
                            <div className="topic-votes">5 votes</div>
                        </div>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="month-card">
                    <div className="month-header">
                        <div className="month-name">🗓️ الشهر الثالث</div>
                        <div className="month-weeks">الأسابيع 9-12</div>
                    </div>
                    <div className="topic-list">
                        <div className="topic-item">
                            <div className="topic-number">9</div>
                            <div className="topic-name">👕 How to buy clothes in a shop</div>
                            <div className="topic-duration">5 أيام</div>
                            <div className="topic-votes">4 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">10</div>
                            <div className="topic-name">👨‍👩‍👧‍👦 Talk about your family</div>
                            <div className="topic-duration">4 أيام</div>
                            <div className="topic-votes">4 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">11</div>
                            <div className="topic-name">🚗 Understand your car (Car phrases)</div>
                            <div className="topic-duration">5 أيام</div>
                            <div className="topic-votes">4 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">12</div>
                            <div className="topic-name">📸 Describe a photo</div>
                            <div className="topic-duration">3 أيام</div>
                            <div className="topic-votes">3 votes</div>
                        </div>
                        <div className="topic-item" style={{ border: '1px dashed rgba(212, 175, 55, 0.5)' }}>
                            <div className="topic-number" style={{ background: '#888' }}>+</div>
                            <div className="topic-name">👗 Describe your outfit <span style={{ color: '#D4AF37', fontSize: '0.8rem' }}>(Bonus)</span></div>
                            <div className="topic-duration">3 أيام</div>
                            <div className="topic-votes">3 votes</div>
                        </div>
                    </div>
                </div>

                <div className="summary-box">
                    <span>📊 <strong>الشهر الأول:</strong> 20 يوم</span>
                    <span>📊 <strong>الشهر الثاني:</strong> 22 يوم</span>
                    <span>📊 <strong>الشهر الثالث:</strong> 20 يوم</span>
                    <span>📊 <strong>المجموع:</strong> 62 يوم (12.4 أسبوع)</span>
                </div>
            </div>

            {/* Teacher Notes */}
            <div className="section-box">
                <h2 className="section-title">📢 ملاحظات هامة للمعلمين</h2>
                <div className="note-card">
                    <h3>ℹ️ المرونة في الأهداف</h3>
                    <p>يمكن للمعلمين إضافة أو استبدال بعض الأهداف الرئيسية طالما أنهم على المسار الصحيح للموضوع الرئيسي.</p>
                </div>
                <div className="note-card important">
                    <h3>⚠️ التزام موحد</h3>
                    <p>يجب على جميع أعضاء قسم اللغة الإنجليزية العمل على نفس الخطة الأسبوعية كما هو مطلوب من الإدارة.</p>
                </div>
            </div>

            {/* Download Section */}
            <div className="download-section">
                <p style={{ color: '#a0a0a0', marginBottom: '1rem' }}>للاطلاع على التفاصيل الكاملة للخطة الفصلية:</p>
                <Link href="/reports/full-schedule" className="btn-download">
                    📅 عرض الجدول الكامل
                </Link>
            </div>
        </div>
    );
}
