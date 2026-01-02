'use client';
import React from 'react';
import Link from 'next/link';
import { weeklyData } from './weeklyData';

export default function TeachersWeekly01Arabic() {
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

    const getStatusBadge = (status) => {
        switch (status) {
            case 'complete':
                return <span className="status-badge status-complete">✓ مكتمل</span>;
            case 'exemplary':
                return <span className="status-badge status-complete">✓ مكتمل ومميز</span>;
            case 'datadriven':
                return <span className="status-badge status-complete">✓ مكتمل (قائم على البيانات)</span>;
            case 'partial':
                return <span className="status-badge status-partial">⚠ جزئي</span>;
            default:
                return <span className="status-badge status-incomplete">✗ غير مكتمل</span>;
        }
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
                <span className="week-badge">📅 الأسبوع الأول: {weeklyData.dateRange.ar}</span>
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
                    <div className="stat-label">تقارير جزئية</div>
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
                        {getStatusBadge(teacher.status)}
                    </div>

                    <div className="teacher-content">
                        {/* Exemplary Note */}
                        {teacher.isExemplary && teacher.exemplaryNote && (
                            <div className="recommendation-box">
                                <h4>{teacher.exemplaryNote.title.ar}</h4>
                                <p>{teacher.exemplaryNote.description.ar}</p>
                            </div>
                        )}

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

                        {/* Scenarios (for exemplary teacher) */}
                        {teacher.scenarios && (
                            <>
                                <h3>📋 18 سيناريو محادثة مقترح</h3>
                                <div className="topics-list">
                                    {teacher.scenarios.ar.map((scenario, idx) => (
                                        <div key={idx} className="topic-item">{scenario}</div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Metrics */}
                        {teacher.metrics && (
                            <>
                                <h3>📈 تقدم المتدربين</h3>
                                <div className="metrics-grid">
                                    {teacher.metrics.map((metric, idx) => (
                                        <div key={idx} className="metric-item">
                                            <div className="metric-value">{metric.value}</div>
                                            <div className="metric-label">{metric.label.ar}</div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Quality Table */}
                        {teacher.qualityTable && (
                            <>
                                <h3>📊 تقييم الجودة</h3>
                                <table className="quality-table">
                                    <thead>
                                        <tr>
                                            <th>الفئة</th>
                                            <th>التقييم</th>
                                            <th>ملاحظات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {teacher.qualityTable.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row.category.ar}</td>
                                                <td>
                                                    <span className={`rating-${row.rating === 'excellent' || row.rating === 'high' ? 'star' : 'warning'}`}>
                                                        {row.rating === 'excellent' ? '⭐ ممتاز' : row.rating === 'high' ? '⭐ عالي' : row.rating}
                                                    </span>
                                                </td>
                                                <td>{row.note.ar}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}

                        {/* Challenge */}
                        {teacher.challenge && (
                            <div className="warning-box">
                                <h4>⚠️ {teacher.challenge.title.ar}</h4>
                                <p>{teacher.challenge.description.ar}</p>
                                <p><strong>التعديل:</strong> {teacher.challenge.adjustment.ar}</p>
                            </div>
                        )}

                        {/* Quote */}
                        {teacher.quote && (
                            <div className="highlight-box">
                                {teacher.quote.ar}
                            </div>
                        )}

                        {/* Evidence Screenshots */}
                        <h3>📸 الأدلة</h3>
                        <div className="screenshot-gallery">
                            {teacher.imagePaths ? (
                                teacher.imagePaths.map((path, idx) => (
                                    <div key={idx} className="screenshot-item">
                                        <img src={path} alt={`${teacher.name.ar} دليل ${idx + 1}`} />
                                        <div className="screenshot-caption">تقرير أسبوعي {idx + 1}</div>
                                    </div>
                                ))
                            ) : teacher.imagePath && (
                                <div className="screenshot-item">
                                    <img src={teacher.imagePath} alt={`${teacher.name.ar} تقرير أسبوعي`} />
                                    <div className="screenshot-caption">تقرير أسبوعي</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
