'use client';
import React from 'react';
import Link from 'next/link';
import { weeklyData } from './weeklyData';

export default function TeachersWeekly02Arabic() {
    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({ title: document.title, url: window.location.href });
        } else {
            alert('Copy: ' + window.location.href);
        }
    };

    const getStatusBadge = (teacher) => {
        if (teacher.isMissing) {
            return <span className="status-badge status-partial">⚠ مفقود</span>;
        }
        if (teacher.isAwaiting) {
            return <span className="status-badge status-partial">📋 في الانتظار</span>;
        }
        return <span className="status-badge status-complete">✓ مكتمل</span>;
    };

    return (
        <div className="teachers-report" dir="rtl">
            <Link href="/reports" className="back-nav">
                <span>→</span>
                <span>العودة</span>
            </Link>

            {/* Report Header */}
            <div className="report-header">
                <h1>📊 تقرير أداء المعلمين الأسبوعي</h1>
                <p className="subtitle">قسم اللغة الإنجليزية - معهد الذهب الأسود العالي</p>
                <span className="week-badge">📅 الأسبوع الثاني: {weeklyData.dateRange.ar}</span>
            </div>

            {/* Summary Statistics */}
            <div className="summary-stats">
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.teachersReviewed}</div>
                    <div className="stat-label">معلمين تمت مراجعتهم</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.completeReports}</div>
                    <div className="stat-label">تقارير مكتملة</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.partialReports}</div>
                    <div className="stat-label">تقارير جزئية / مفقودة</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.totalFiles}</div>
                    <div className="stat-label">إجمالي الملفات المقدمة</div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons-report">
                <button onClick={handlePrint} className="btn-report secondary">
                    🖨️ طباعة
                </button>
                <button onClick={handleShare} className="btn-report secondary">
                    📤 مشاركة
                </button>
            </div>

            {/* Google Drive Link */}
            <div className="drive-link-box">
                <div className="drive-info">
                    <span className="drive-icon">📂</span>
                    <div>
                        <strong className="drive-title">عرض التقارير الأصلية</strong>
                        <p className="drive-desc">الوصول إلى جميع ملفات عمل المعلمين على Google Drive</p>
                    </div>
                </div>
                <a href={weeklyData.driveLink} target="_blank" rel="noopener noreferrer" className="drive-btn">
                    📁 فتح Google Drive
                </a>
            </div>

            {/* Teacher Cards */}
            {weeklyData.teachers.map((teacher) => (
                <div key={teacher.id} className="teacher-card">
                    <div className="teacher-header">
                        <div className="teacher-number">{teacher.id}</div>
                        <div className="teacher-info">
                            <h2>{teacher.name.ar}</h2>
                            <span className="course">{teacher.course.ar}</span>
                        </div>
                        {getStatusBadge(teacher)}
                    </div>

                    <div className="teacher-content">
                        {/* Missing Note */}
                        {teacher.isMissing && (
                            <div className="warning-box">
                                <p>{teacher.missingNote.ar}</p>
                            </div>
                        )}

                        {/* Awaiting Note */}
                        {teacher.isAwaiting && (
                            <div className="highlight-box">
                                <p>{teacher.awaitingNote.ar}</p>
                            </div>
                        )}

                        {/* For complete teachers */}
                        {!teacher.isMissing && !teacher.isAwaiting && (
                            <>
                                {/* Objectives */}
                                {teacher.objectives && (
                                    <>
                                        <h3>📋 أهداف الأسبوع</h3>
                                        <ul>
                                            {teacher.objectives.ar.map((obj, idx) => (
                                                <li key={idx}>{obj}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {/* Topics */}
                                {teacher.topics && (
                                    <>
                                        <h3>📚 المواضيع المغطاة والأنشطة</h3>
                                        <div className="topics-list">
                                            {teacher.topics.ar.map((topic, idx) => (
                                                <div key={idx} className="topic-item">{topic}</div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Materials */}
                                {teacher.materials && (
                                    <>
                                        <h3>📚 المواد التعليمية</h3>
                                        <p style={{ color: '#a0a0a0' }}>{teacher.materials.ar}</p>
                                    </>
                                )}

                                {/* Quality Note */}
                                {teacher.qualityNote && (
                                    <>
                                        <h3>📊 تقييم الجودة</h3>
                                        <div className="recommendation-box">
                                            <h4>{teacher.qualityNote.title.ar}</h4>
                                            <p>{teacher.qualityNote.description.ar}</p>
                                        </div>
                                    </>
                                )}

                                {/* Strength Note */}
                                {teacher.strength && (
                                    <div className="highlight-box">
                                        <h4>{teacher.strength.title.ar}</h4>
                                        <p>{teacher.strength.description.ar}</p>
                                    </div>
                                )}

                                {/* Encouragement Note */}
                                {teacher.encouragement && (
                                    <div className="highlight-box">
                                        <h4>{teacher.encouragement.title.ar}</h4>
                                        <p>{teacher.encouragement.description.ar}</p>
                                        {teacher.encouragement.suggestion && (
                                            <p><strong>اقتراح:</strong> {teacher.encouragement.suggestion.ar}</p>
                                        )}
                                    </div>
                                )}

                                {/* Evidence */}
                                {teacher.hasEvidence && (
                                    <>
                                        <h3>📸 الأدلة</h3>
                                        <div className="screenshot-gallery">
                                            <div className="screenshot-item">
                                                <div style={{ padding: '2rem', textAlign: 'center', color: '#666', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}>
                                                    {teacher.evidenceType === 'video' ? '🎬 فيديو' : '🖼️ صورة'}
                                                </div>
                                                <div className="screenshot-caption">
                                                    {teacher.evidenceType === 'video' ? 'دليل فيديو' : 'دليل صورة'}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
