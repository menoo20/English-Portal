'use client';
import React from 'react';
import Link from 'next/link';
import { weeklyData } from './weeklyData';

export default function TeachersWeekly04English() {
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
            return <span className="status-badge status-partial">⚠ Missing</span>;
        }
        if (teacher.isAwaiting) {
            return <span className="status-badge status-partial">📋 Awaiting</span>;
        }
        if (teacher.isPartial) {
            return <span className="status-badge status-partial" style={{ backgroundColor: '#f0ad4e', color: 'white' }}>⚠ Partial</span>;
        }
        if (teacher.isExemplary) {
            return <span className="status-badge status-complete">⭐ Exemplary</span>;
        }
        return <span className="status-badge status-complete">✓ Complete</span>;
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
                <span className="week-badge">📅 Week 4: {weeklyData.dateRange.en}</span>
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
                    <div className="stat-label">Partial / Missing</div>
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
                        {getStatusBadge(teacher)}
                    </div>

                    <div className="teacher-content">
                        {/* Missing Note */}
                        {teacher.isMissing && (
                            <div className="warning-box">
                                <p>{teacher.missingNote.en}</p>
                            </div>
                        )}

                        {/* Awaiting Note */}
                        {teacher.isAwaiting && (
                            <div className="highlight-box">
                                <p>{teacher.awaitingNote.en}</p>
                            </div>
                        )}

                        {/* Exemplary Note */}
                        {teacher.isExemplary && teacher.exemplaryNote && (
                            <div className="highlight-box" style={{ borderLeftColor: '#D4AF37' }}>
                                <h4>{teacher.exemplaryNote.title.en}</h4>
                                <p>{teacher.exemplaryNote.description.en}</p>
                            </div>
                        )}

                        {/* For complete or partial teachers */}
                        {!teacher.isMissing && !teacher.isAwaiting && (
                            <>
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

                                {/* Materials */}
                                {teacher.materials && (
                                    <>
                                        <h3>📚 Teaching Materials</h3>
                                        <p style={{ color: '#a0a0a0' }}>{teacher.materials.en}</p>
                                    </>
                                )}

                                {/* Quality Note */}
                                {teacher.qualityNote && (
                                    <>
                                        <h3>📊 Quality Assessment</h3>
                                        <div className="recommendation-box">
                                            <h4>{teacher.qualityNote.title.en}</h4>
                                            <p>{teacher.qualityNote.description.en}</p>
                                        </div>
                                    </>
                                )}

                                {/* Strength Note */}
                                {teacher.strength && (
                                    <div className="highlight-box">
                                        <h4>{teacher.strength.title.en}</h4>
                                        <p>{teacher.strength.description.en}</p>
                                    </div>
                                )}

                                {/* Encouragement Note */}
                                {teacher.encouragement && (
                                    <div className="highlight-box">
                                        <h4>{teacher.encouragement.title.en}</h4>
                                        <p>{teacher.encouragement.description.en}</p>
                                        {teacher.encouragement.suggestion && (
                                            <p><strong>Suggestion:</strong> {teacher.encouragement.suggestion.en}</p>
                                        )}
                                    </div>
                                )}

                                {/* Evidence */}
                                {teacher.hasEvidence && (
                                    <>
                                        <h3>📸 Evidence</h3>
                                        <div className="screenshot-gallery">
                                            <div className="screenshot-item">
                                                <div style={{ padding: '2rem', textAlign: 'center', color: '#666', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}>
                                                    {teacher.evidenceType === 'video' ? '🎬 VIDEO' : teacher.evidenceType === 'audio' ? '🔊 AUDIO' : '🖼️ IMAGE'}
                                                </div>
                                                <div className="screenshot-caption">
                                                    {teacher.evidenceType === 'video' ? 'Video Evidence' : teacher.evidenceType === 'audio' ? 'Audio Evidence' : 'Image Evidence'}
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
