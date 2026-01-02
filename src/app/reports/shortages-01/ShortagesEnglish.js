'use client';
import React from 'react';
import Link from 'next/link';
import { shortagesData } from './shortagesData';

export default function ShortagesEnglish() {
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
        <div className="shortages-report" dir="ltr">
            <Link href="/reports" className="back-nav">
                <span>←</span>
                <span>Back</span>
            </Link>

            {/* Header */}
            <header className="shortages-header">
                <span className="category">Shortages Report</span>
                <h1>📦 Teacher Material Shortages</h1>
                <div className="meta">
                    <span>📅 December 8, 2025</span>
                    <span>👥 English Department</span>
                </div>
            </header>

            {/* Actions */}
            <div className="shortages-actions">
                <button onClick={handlePrint} className="btn-report secondary">
                    🖨️ Print
                </button>
                <button onClick={handleShare} className="btn-report secondary">
                    📤 Share
                </button>
            </div>

            {/* Content */}
            <div className="shortages-content">
                <p>
                    This report outlines the shortages in materials and supplies available in teacher classrooms. The following table shows the required items and specified quantities.
                </p>

                {/* Shortages Table */}
                <table className="shortages-table">
                    <thead>
                        <tr>
                            <th>Branch</th>
                            <th>Item</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shortagesData.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.branch.en}</td>
                                <td>
                                    <span className="shortage-icon">{item.icon}</span>
                                    {item.item.en}
                                </td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Note */}
                <div className="note-box">
                    <p>
                        <strong>Note:</strong> The symbol (~) means the required quantity is not yet specified and needs assessment.
                    </p>
                </div>
            </div>
        </div>
    );
}
