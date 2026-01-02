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

export default function ConversationalEnglish() {
    return (
        <div className="report-container" dir="ltr">
            <Link href="/reports" className="back-nav">
                <span>←</span>
                <span>Back</span>
            </Link>

            {/* Report Header */}
            <div className="report-header">
                <h1>Conversational Program (3 Months)</h1>
                <p className="subtitle">Collaborative semester plan based on teacher voting</p>
            </div>

            {/* Statistics */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number">21</div>
                    <div className="stat-label">Proposed Topics</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">9</div>
                    <div className="stat-label">Teachers Voted</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">87</div>
                    <div className="stat-label">Total Votes</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Topics Selected</div>
                </div>
            </div>

            {/* Process Section */}
            <div className="section-box">
                <h2 className="section-title">📋 Collaborative Selection Process</h2>
                <div className="process-steps">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-title">Collect Proposals</div>
                        <div className="step-desc">21 conversation topics proposed</div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-title">Teacher Voting</div>
                        <div className="step-desc">9 teachers participated in voting</div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-title">Analyze Results</div>
                        <div className="step-desc">Ranked by number of votes</div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">4</div>
                        <div className="step-title">Select Best</div>
                        <div className="step-desc">Top 12 topics for semester plan</div>
                    </div>
                </div>
            </div>

            {/* Voting Results Chart */}
            <div className="section-box">
                <h2 className="section-title">📊 Voting Results (21 Topics)</h2>
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
                    🏆 Gold topics = Selected for semester plan | Gray topics = Reserved for future semesters
                </div>
            </div>

            {/* 3-Month Schedule */}
            <div className="section-box">
                <h2 className="section-title">📅 Semester Plan (3 Months - 13 Topics)</h2>

                {/* Month 1 */}
                <div className="month-card">
                    <div className="month-header">
                        <div className="month-name">🗓️ Month 1</div>
                        <div className="month-weeks">Weeks 1-4</div>
                    </div>
                    <div className="topic-list">
                        <div className="topic-item">
                            <div className="topic-number">1</div>
                            <div className="topic-name">🍔 How to order food at a restaurant</div>
                            <div className="topic-duration">5 days</div>
                            <div className="topic-votes">7 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">2</div>
                            <div className="topic-name">📅 Talk about daily routine</div>
                            <div className="topic-duration">4 days</div>
                            <div className="topic-votes">7 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">3</div>
                            <div className="topic-name">🏙️ Talk about your country and city</div>
                            <div className="topic-duration">4 days</div>
                            <div className="topic-votes">7 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">4</div>
                            <div className="topic-name">🛠️ Technical tools (Specialization English)</div>
                            <div className="topic-duration">7 days</div>
                            <div className="topic-votes">6 votes</div>
                        </div>
                    </div>
                </div>

                {/* Month 2 */}
                <div className="month-card">
                    <div className="month-header">
                        <div className="month-name">🗓️ Month 2</div>
                        <div className="month-weeks">Weeks 5-8</div>
                    </div>
                    <div className="topic-list">
                        <div className="topic-item">
                            <div className="topic-number">5</div>
                            <div className="topic-name">🍕 What's your favorite food</div>
                            <div className="topic-duration">3 days</div>
                            <div className="topic-votes">6 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">6</div>
                            <div className="topic-name">🚑 Emergency phrases (Medical emergencies)</div>
                            <div className="topic-duration">6 days</div>
                            <div className="topic-votes">5 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">7</div>
                            <div className="topic-name">✈️ How to book a room/ticket (Travel)</div>
                            <div className="topic-duration">6 days</div>
                            <div className="topic-votes">5 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">8</div>
                            <div className="topic-name">💼 Prepare for an interview</div>
                            <div className="topic-duration">7 days</div>
                            <div className="topic-votes">5 votes</div>
                        </div>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="month-card">
                    <div className="month-header">
                        <div className="month-name">🗓️ Month 3</div>
                        <div className="month-weeks">Weeks 9-12</div>
                    </div>
                    <div className="topic-list">
                        <div className="topic-item">
                            <div className="topic-number">9</div>
                            <div className="topic-name">👕 How to buy clothes in a shop</div>
                            <div className="topic-duration">5 days</div>
                            <div className="topic-votes">4 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">10</div>
                            <div className="topic-name">👨‍👩‍👧‍👦 Talk about your family</div>
                            <div className="topic-duration">4 days</div>
                            <div className="topic-votes">4 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">11</div>
                            <div className="topic-name">🚗 Understand your car (Car phrases)</div>
                            <div className="topic-duration">5 days</div>
                            <div className="topic-votes">4 votes</div>
                        </div>
                        <div className="topic-item">
                            <div className="topic-number">12</div>
                            <div className="topic-name">📸 Describe a photo</div>
                            <div className="topic-duration">3 days</div>
                            <div className="topic-votes">3 votes</div>
                        </div>
                        <div className="topic-item" style={{ border: '1px dashed rgba(212, 175, 55, 0.5)' }}>
                            <div className="topic-number" style={{ background: '#888' }}>+</div>
                            <div className="topic-name">👗 Describe your outfit <span style={{ color: '#D4AF37', fontSize: '0.8rem' }}>(Bonus)</span></div>
                            <div className="topic-duration">3 days</div>
                            <div className="topic-votes">3 votes</div>
                        </div>
                    </div>
                </div>

                <div className="summary-box">
                    <span>📊 <strong>Month 1:</strong> 20 days</span>
                    <span>📊 <strong>Month 2:</strong> 22 days</span>
                    <span>📊 <strong>Month 3:</strong> 20 days</span>
                    <span>📊 <strong>Total:</strong> 62 days (12.4 weeks)</span>
                </div>
            </div>

            {/* Teacher Notes */}
            <div className="section-box">
                <h2 className="section-title">📢 Important Notes for Teachers</h2>
                <div className="note-card">
                    <h3>ℹ️ Flexibility in Objectives</h3>
                    <p>Teachers can add or replace some main objectives as long as they stay on track with the main topic.</p>
                </div>
                <div className="note-card important">
                    <h3>⚠️ Unified Commitment</h3>
                    <p>All English Department members must work on the same weekly plan as required by the administration.</p>
                </div>
            </div>

            {/* Download Section */}
            <div className="download-section">
                <p style={{ color: '#a0a0a0', marginBottom: '1rem' }}>To view the complete semester plan details:</p>
                <Link href="/reports/full-schedule" className="btn-download">
                    📅 View Full Schedule
                </Link>
            </div>
        </div>
    );
}
