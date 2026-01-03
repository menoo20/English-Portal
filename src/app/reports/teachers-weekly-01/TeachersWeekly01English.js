'use client';
import React from 'react';
import Link from 'next/link';
import { weeklyData } from './weeklyData';

export default function TeachersWeekly01English() {
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
                return <span className="status-badge status-complete">✓ Complete</span>;
            case 'exemplary':
                return <span className="status-badge status-complete">✓ Complete & Exemplary</span>;
            case 'datadriven':
                return <span className="status-badge status-complete">✓ Complete (Data-driven)</span>;
            case 'partial':
                return <span className="status-badge status-partial">⚠ Partial</span>;
            default:
                return <span className="status-badge status-incomplete">✗ Incomplete</span>;
        }
    };

    return (
        <div className="teachers-report" dir="ltr">
            <Link href="/reports" className="back-nav">
                <span>←</span>
                <span>Back</span>
            </Link>

            {/* Report Header */}
            <div className="report-header">
                <h1>📊 Weekly Teachers Performance Report</h1>
                <p className="subtitle">English Department - Blackgold High Institute</p>
                <span className="week-badge">📅 Week 1: {weeklyData.dateRange.en}</span>
            </div>

            {/* Summary Statistics */}
            <div className="summary-stats">
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.teachersReviewed}</div>
                    <div className="stat-label">Teachers Reviewed</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.completeReports}</div>
                    <div className="stat-label">Complete Reports</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.partialReports}</div>
                    <div className="stat-label">Partial Reports</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{weeklyData.stats.totalFiles}</div>
                    <div className="stat-label">Total Files Submitted</div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons-report">
                <button onClick={handlePrint} className="btn-report secondary">
                    🖨️ Print
                </button>
                <button onClick={handleShare} className="btn-report secondary">
                    📤 Share
                </button>
            </div>

            {/* Google Drive Link */}
            <div className="drive-link-box">
                <div className="drive-info">
                    <span className="drive-icon">📂</span>
                    <div>
                        <strong className="drive-title">View Original Reports</strong>
                        <p className="drive-desc">Access all teacher work files on Google Drive</p>
                    </div>
                </div>
                <a href={weeklyData.driveLink} target="_blank" rel="noopener noreferrer" className="drive-btn">
                    📁 Open Google Drive
                </a>
            </div>

            {/* Teacher Cards */}
            {weeklyData.teachers.map((teacher) => (
                <div key={teacher.id} className="teacher-card">
                    <div className="teacher-header">
                        <div className="teacher-number">{teacher.id}</div>
                        <div className="teacher-info">
                            <h2>{teacher.name.en}</h2>
                            <span className="course">{teacher.course.en}</span>
                        </div>
                        {getStatusBadge(teacher.status)}
                    </div>

                    <div className="teacher-content">
                        {/* Exemplary Note */}
                        {teacher.isExemplary && teacher.exemplaryNote && (
                            <div className="recommendation-box">
                                <h4>{teacher.exemplaryNote.title.en}</h4>
                                <p>{teacher.exemplaryNote.description.en}</p>
                            </div>
                        )}

                        {/* Objectives */}
                        {teacher.objectives && (
                            <>
                                <h3>📋 Week Objectives</h3>
                                <ul>
                                    {teacher.objectives.en.map((obj, idx) => (
                                        <li key={idx}>{obj}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Topics */}
                        {teacher.topics && (
                            <>
                                <h3>📚 Topics Covered & Activities</h3>
                                <div className="topics-list">
                                    {teacher.topics.en.map((topic, idx) => (
                                        <div key={idx} className="topic-item">{topic}</div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Scenarios (for exemplary teacher) */}
                        {teacher.scenarios && (
                            <>
                                <h3>📋 18 Conversation Scenarios Proposed</h3>
                                <div className="topics-list">
                                    {teacher.scenarios.en.map((scenario, idx) => (
                                        <div key={idx} className="topic-item">{scenario}</div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Metrics */}
                        {teacher.metrics && (
                            <>
                                <h3>📈 Trainee Progress</h3>
                                <div className="metrics-grid">
                                    {teacher.metrics.map((metric, idx) => (
                                        <div key={idx} className="metric-item">
                                            <div className="metric-value">{metric.value}</div>
                                            <div className="metric-label">{metric.label.en}</div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Quality Table */}
                        {teacher.qualityTable && (
                            <>
                                <h3>📊 Quality Assessment</h3>
                                <table className="quality-table">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Rating</th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {teacher.qualityTable.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row.category.en}</td>
                                                <td>
                                                    <span className={`rating-${row.rating === 'excellent' || row.rating === 'high' ? 'star' : 'warning'}`}>
                                                        {row.rating === 'excellent' ? '⭐ Excellent' : row.rating === 'high' ? '⭐ High' : row.rating}
                                                    </span>
                                                </td>
                                                <td>{row.note.en}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}

                        {/* Challenge */}
                        {teacher.challenge && (
                            <div className="warning-box">
                                <h4>⚠️ {teacher.challenge.title.en}</h4>
                                <p>{teacher.challenge.description.en}</p>
                                <p><strong>Adjustment:</strong> {teacher.challenge.adjustment.en}</p>
                            </div>
                        )}

                        {/* Quote */}
                        {teacher.quote && (
                            <div className="highlight-box">
                                {teacher.quote.en}
                            </div>
                        )}

                        {/* Evidence Screenshots */}
                        <h3>📸 Evidence</h3>
                        <div className="screenshot-gallery">
                            {teacher.imagePaths ? (
                                teacher.imagePaths.map((path, idx) => (
                                    <div key={idx} className="screenshot-item">
                                        <img src={path} alt={`${teacher.name.en} Evidence ${idx + 1}`} />
                                        <div className="screenshot-caption">Weekly Report {idx + 1}</div>
                                    </div>
                                ))
                            ) : teacher.imagePath ? (
                                <div className="screenshot-item">
                                    <img src={teacher.imagePath} alt={`${teacher.name.en} Weekly Report`} />
                                    <div className="screenshot-caption">Weekly Report</div>
                                </div>
                            ) : (
                                <div className="screenshot-item no-image">
                                    <div className="no-image-placeholder">{teacher.evidenceIcon || "📄"}</div>
                                    <div className="screenshot-caption">{teacher.evidenceLabel?.en || "Weekly Report"}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
