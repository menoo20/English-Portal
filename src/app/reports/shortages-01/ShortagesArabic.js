'use client';
import React from 'react';
import Link from 'next/link';
import { shortagesData } from './shortagesData';

export default function ShortagesArabic() {
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
        <div className="shortages-report" dir="rtl">
            <Link href="/reports" className="back-nav">
                <span>→</span>
                <span>العودة</span>
            </Link>

            {/* Header */}
            <header className="shortages-header">
                <span className="category">تقرير النواقص</span>
                <h1>📦 نواقص المدربين</h1>
                <div className="meta">
                    <span>📅 8 ديسمبر 2025</span>
                    <span>👥 قسم اللغة الإنجليزية</span>
                </div>
            </header>

            {/* Actions */}
            <div className="shortages-actions">
                <button onClick={handlePrint} className="btn-report secondary">
                    🖨️ طباعة
                </button>
                <button onClick={handleShare} className="btn-report secondary">
                    📤 مشاركة
                </button>
            </div>

            {/* Content */}
            <div className="shortages-content">
                <p>
                    يوضح هذا التقرير النواقص في المواد والمستلزمات المتوفرة في فصول المدربين. الجدول التالي يبين العناصر المطلوبة والكميات المحددة.
                </p>

                {/* Shortages Table */}
                <table className="shortages-table">
                    <thead>
                        <tr>
                            <th>الفرع</th>
                            <th>النواقص</th>
                            <th>عدد</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shortagesData.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.branch.ar}</td>
                                <td>
                                    <span className="shortage-icon">{item.icon}</span>
                                    {item.item.ar}
                                </td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Note */}
                <div className="note-box">
                    <p>
                        <strong>ملاحظة:</strong> الرمز (~) يعني أن الكمية المطلوبة غير محددة بعد وتحتاج إلى تقييم.
                    </p>
                </div>
            </div>
        </div>
    );
}
