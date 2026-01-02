'use client';
import React from 'react';
import Link from 'next/link';

export default function MeetingEnglish() {
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

    return (
        <div className="meeting-report" dir="ltr">
            <Link href="/reports" className="back-nav">
                <span>←</span>
                <span>Back</span>
            </Link>

            {/* Header */}
            <header className="meeting-header">
                <span className="category">First Meeting</span>
                <h1>📋 English Department Meeting Minutes</h1>
                <div className="meta">
                    <span>📅 December 4, 2025</span>
                    <span>👥 English Department</span>
                </div>
            </header>

            {/* Actions */}
            <div className="meeting-actions">
                <button onClick={handlePrint} className="btn-report secondary">
                    🖨️ Print
                </button>
                <button onClick={handleShare} className="btn-report secondary">
                    📤 Share
                </button>
            </div>

            {/* Content */}
            <div className="meeting-content">
                <h2>📚 New Teaching Methodology</h2>
                <p>
                    Teachers were informed about the new teaching methodology that encourages conversational English and interactive teaching. This approach aims to enhance students' communication skills through dialogue and direct interaction in the classroom.
                </p>

                <h2>📝 Weekly Reports</h2>
                <p>
                    Each teacher in the English Department must submit a weekly report on their work and student progress. All reports are saved in a single folder accessible via{' '}
                    <a href="https://drive.google.com/drive/folders/1MIcG7P2TQrUIWQ6ww6n7P-T8X6DWR82S?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Google Drive
                    </a>.
                </p>

                <h2>🎯 Classroom Materials</h2>
                <p>Teachers were asked to report any shortages in classroom materials such as:</p>
                <ul>
                    <li>Whiteboards</li>
                    <li>Screens</li>
                    <li>Notice boards</li>
                    <li>Pens</li>
                    <li>Other supplies...</li>
                </ul>

                <h2>💬 Teacher Participation</h2>
                <p>
                    Teachers were encouraged to share their opinions about the new teaching methodology and their expectations for how their students will respond to this new approach.
                </p>

                <div className="question-box">
                    <h2>❓ Questions That Need Answers</h2>
                    <ol>
                        <li>
                            In the first three months: Should we teach the same curriculum, or should each of us teach students to speak through conversations they find suitable for their students' needs?
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
