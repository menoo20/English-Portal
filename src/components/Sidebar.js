"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { language, toggleLanguage } = useLanguage();

    const t = {
        ar: {
            brandName: "قسم اللغة الإنجليزية",
            brandSub: "معهد بلاك جولد العالي",
            mainMenu: "القائمة الرئيسية",
            home: "الرئيسية",
            content: "المحتوى",
            reports: "التقارير الأسبوعية",
            articles: "المقالات",
            resources: "الموارد",
            language: "عربي"
        },
        en: {
            brandName: "English Department",
            brandSub: "Black Gold Institute",
            mainMenu: "Main Menu",
            home: "Home",
            content: "Content",
            reports: "Weekly Reports",
            articles: "Articles",
            resources: "Resources",
            language: "English"
        }
    };

    const text = t[language];

    // Close sidebar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close sidebar on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const isActive = (path) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <Image
                        src="/logo/image2.png"
                        alt="Blackgold Logo"
                        width={50}
                        height={50}
                        className="sidebar-logo"
                        priority
                    />
                    <div className="sidebar-brand">
                        <h1>{text.brandName}</h1>
                        <span>{text.brandSub}</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    {/* Main Navigation */}
                    <div className="nav-section">
                        <div className="nav-section-title">{text.mainMenu}</div>
                        <Link href="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>
                            <span className="nav-icon">🏠</span>
                            <span className="nav-text">{text.home}</span>
                        </Link>
                    </div>

                    {/* Content Navigation */}
                    <div className="nav-section">
                        <div className="nav-section-title">{text.content}</div>
                        <Link
                            href="/reports"
                            className={`nav-item ${isActive("/reports") ? "active" : ""}`}
                        >
                            <span className="nav-icon">📝</span>
                            <span className="nav-text">{text.reports}</span>
                        </Link>
                        <Link
                            href="/blog"
                            className={`nav-item ${isActive("/blog") ? "active" : ""}`}
                        >
                            <span className="nav-icon">📚</span>
                            <span className="nav-text">{text.articles}</span>
                        </Link>
                        <Link href="/resources" className={`nav-item ${isActive("/resources") ? "active" : ""}`}>
                            <span className="nav-icon">📂</span>
                            <span className="nav-text">{text.resources}</span>
                        </Link>
                    </div>
                </nav>

                {/* Language Toggle */}
                <div className="sidebar-footer">
                    <div className="language-toggle">
                        <button
                            className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('ar')}
                        >
                            عربي
                        </button>
                        <button
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('en')}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </aside>

            {/* Sidebar Overlay (Mobile) */}
            {isOpen && (
                <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
            )}

            {/* Mobile Menu Toggle */}
            <button
                className="mobile-menu-toggle"
                aria-label="Toggle Menu"
                onClick={toggleSidebar}
            >
                ☰
            </button>
        </>
    );
}
