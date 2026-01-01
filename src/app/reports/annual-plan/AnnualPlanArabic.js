'use client';
import React from 'react';
import Link from 'next/link';
import './annual-plan.css';

export default function AnnualPlanArabic() {
    return (
        <div className="annual-plan-page">
            <article className="article-container">
                <Link href="/reports" className="back-nav"><span>→</span> العودة للتقارير</Link>

                <header className="schedule-header">
                    <h1>الخطة السنوية الشاملة 2026</h1>
                    <p className="subtitle">برنامج اللغة الإنجليزية المكثف | تأسيس (Phonics) + منهج New Headway</p>
                    <p className="date-range">4 يناير 2026 — 5 نوفمبر 2026</p>

                    <div className="meta-grid">
                        <div className="meta-item">
                            <div className="number">11 شهر</div>
                            <div className="label">إجمالي المدة</div>
                        </div>
                        <div className="meta-item">
                            <div className="number">شهر 1-2</div>
                            <div className="label">تأسيس (Foundation)</div>
                        </div>
                        <div className="meta-item">
                            <div className="number">شهر 3-11</div>
                            <div className="label">منهج Headway</div>
                        </div>
                        <div className="meta-item">
                            <div className="number">Saudi</div>
                            <div className="label">تقويم السعودية</div>
                        </div>
                    </div>
                </header>

                <div className="actions no-print">
                    <button onClick={() => window.print()} className="btn-print">🖨️ طباعة الخطة كاملة</button>
                </div>

                {/* Month 1: Foundation (Phonics Focus) */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>🌱 الشهر الأول: التأسيس الصوتي (Phonics & Basics)</h2>
                        <span className="month-meta">4 يناير - 29 يناير 2026</span>
                    </div>

                    {/* Week 1 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 1: الأصوات (Aa - Ee) والأرقام</span>
                            <span>4-8 يناير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">4 يناير (أحد)</td>
                                    <td className="topic-cell">Phonics: Aa (Sound /æ/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> Sound
                                        recognition (Apple, Ant). Writing Aa.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">5 يناير (اثنين)</td>
                                    <td className="topic-cell">Phonics: Bb & Cc (Sounds /b/, /k/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Ball, Bat, Cat,
                                        Cup). Auditory discrimination.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">6 يناير (ثلاثاء)</td>
                                    <td className="topic-cell">Phonics: Dd & Ee (Sounds /d/, /e/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Dog, Egg).
                                        Short E sound.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">7 يناير (أربعاء)</td>
                                    <td className="topic-cell">الأرقام 1-10 (Numbers)</td>
                                    <td className="details-cell"><span className="tag tag-vocab">أرقام</span> Counting & Writing
                                        (One...Ten).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">8 يناير (خميس)</td>
                                    <td className="topic-cell">مراجعة ودمج (Blending 1)</td>
                                    <td className="details-cell"><span className="tag tag-skills">قراءة</span> Blending CVC
                                        words (e.g., Dad, Bad).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 2 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 2: الأصوات (Ff - Jj) والتحيات</span>
                            <span>11-15 يناير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">11 يناير (أحد)</td>
                                    <td className="topic-cell">Phonics: Ff & Gg (Sounds /f/, /g/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Fish, Fan,
                                        Goat, Gift).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">12 يناير (اثنين)</td>
                                    <td className="topic-cell">Phonics: Hh & Ii (Sounds /h/, /i/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Hat, Hen, Ink,
                                        Igloo). Short I sound.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">13 يناير (ثلاثاء)</td>
                                    <td className="topic-cell">Phonics: Jj (Sound /dʒ/) & Greetings</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Jam, Jet).
                                        Basic Greetings (Hello).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">14 يناير (أربعاء)</td>
                                    <td className="topic-cell">الدمج والقراءة (Blending 2)</td>
                                    <td className="details-cell"><span className="tag tag-skills">قراءة</span> Reading words
                                        (Big, Dig, Fig).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">15 يناير (خميس)</td>
                                    <td className="topic-cell">نشاط صوتي (Phonics Game)</td>
                                    <td className="details-cell"><span className="tag tag-review">نشاط</span> Sound-Picture
                                        Matching.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 3 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 3: الأصوات (Kk - Tt) والألوان</span>
                            <span>18-22 يناير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">18 يناير (أحد)</td>
                                    <td className="topic-cell">Phonics: Kk - Nn</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Kite, Lamp,
                                        Moon, Net).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">19 يناير (اثنين)</td>
                                    <td className="topic-cell">Phonics: Oo - Tt & Blending</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Orange, Pen,
                                        Queen, Rat, Sun, Top). Reading (Pot, Hot).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">20 يناير (ثلاثاء)</td>
                                    <td className="topic-cell">الألوان (Colors)</td>
                                    <td className="details-cell"><span className="tag tag-vocab">مفردات</span> Red, Blue,
                                        Green... Object association.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">21 يناير (أربعاء)</td>
                                    <td className="topic-cell">الأرقام 11-20</td>
                                    <td className="details-cell"><span className="tag tag-vocab">أرقام</span> Eleven... Twenty.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">22 يناير (خميس)</td>
                                    <td className="topic-cell">قراءة جمل بسيطة</td>
                                    <td className="details-cell"><span className="tag tag-skills">قراءة</span> "The cat is on
                                        the mat."</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 4 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 4: إكمال الأصوات وتكوين الجمل</span>
                            <span>25-29 يناير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">25 يناير (أحد)</td>
                                    <td className="topic-cell">Phonics: Uu - Zz</td>
                                    <td className="details-cell"><span className="tag tag-phonics">أصوات</span> (Up, Van, Web,
                                        Box, Yo-yo, Zebra).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">26 يناير (اثنين)</td>
                                    <td className="topic-cell">Verb "To Be" (I am / He is)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> Basic sentences.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">27 يناير (ثلاثاء)</td>
                                    <td className="topic-cell">أيام الأسبوع (Days of Week)</td>
                                    <td className="details-cell"><span className="tag tag-vocab">مفردات</span> Sunday, Monday...
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">28 يناير (أربعاء)</td>
                                    <td className="topic-cell">مراجعة شاملة للأصوات (Review)</td>
                                    <td className="details-cell"><span className="tag tag-review">مراجعة</span> Mastering all
                                        basic sounds.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">29 يناير (خميس)</td>
                                    <td className="topic-cell">اختبار القراءة (Reading Test)</td>
                                    <td className="details-cell"><span className="tag tag-review">تقييم</span> Reading simple
                                        words and sentences.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 2: Foundation (Grammar & Structures) */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>🧱 الشهر الثاني: بناء الجمل (Grammar Basics)</h2>
                        <span className="month-meta">1 فبراير - 5 مارس 2026</span>
                    </div>

                    {/* Week 5 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 5: العائلة والملكية</span>
                            <span>1-5 فبراير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">1 فبراير (أحد)</td>
                                    <td className="topic-cell">أفراد العائلة (Family)</td>
                                    <td className="details-cell"><span className="tag tag-vocab">مفردات</span> Father, Mother...
                                        Reading words.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">2 فبراير (اثنين)</td>
                                    <td className="topic-cell">Possessive 's (الملكية)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> Ali's pen.
                                        Sara's bag.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">3 فبراير (ثلاثاء)</td>
                                    <td className="topic-cell">شجرة العائلة (Family Tree)</td>
                                    <td className="details-cell"><span className="tag tag-review">نشاط</span> Draw & Label your
                                        family tree.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">4 فبراير (أربعاء)</td>
                                    <td className="topic-cell">السؤال عن الأشخاص (Who is this?)</td>
                                    <td className="details-cell"><span className="tag tag-skills">تحدث</span> Q: Who is he? A:
                                        He is my brother.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">5 فبراير (خميس)</td>
                                    <td className="topic-cell">مراجعة واختبار قصير (Review & Quiz)</td>
                                    <td className="details-cell"><span className="tag tag-review">تقييم</span> Family vocabulary
                                        & Possessive 's.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 6 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 6: الأفعال والأوامر (Verbs & Imperatives)</span>
                            <span>8-12 فبراير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">8 فبراير (أحد)</td>
                                    <td className="topic-cell">أفعال الحركة (Common Verbs)</td>
                                    <td className="details-cell"><span className="tag tag-vocab">مفردات</span> Walk, Run, Eat,
                                        Drink, Sleep.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">9 فبراير (اثنين)</td>
                                    <td className="topic-cell">صيغة الأمر (Imperatives)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> Stand up, Sit
                                        down, Open your book.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">10 فبراير (ثلاثاء)</td>
                                    <td className="topic-cell">الاستطاعة (Can / Can't) - القدرة</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> I can swim. I
                                        can't fly.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">11 فبراير (أربعاء)</td>
                                    <td className="topic-cell">الاستطاعة (Can) - الطلب</td>
                                    <td className="details-cell"><span className="tag tag-skills">تحدث</span> Can I help you?
                                        Can I have water?</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">12 فبراير (خميس)</td>
                                    <td className="topic-cell">تطبيق عملي (Action Game)</td>
                                    <td className="details-cell"><span className="tag tag-review">نشاط</span> Simon Says (using
                                        imperatives).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 7 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 7: الجمع والإشارة (Plurals & This/That)</span>
                            <span>15-19 فبراير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">15 فبراير (أحد)</td>
                                    <td className="topic-cell">قواعد الجمع (Regular Plurals)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> Book/Books,
                                        Box/Boxes (s/es).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">16 فبراير (اثنين)</td>
                                    <td className="topic-cell">الجمع الشاذ (Irregular Plurals)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> Man/Men,
                                        Child/Children, Tooth/Teeth.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">17 فبراير (ثلاثاء)</td>
                                    <td className="topic-cell">أسماء الإشارة للمفرد (This/That)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> This is a pen.
                                        That is a star.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">18 فبراير (أربعاء)</td>
                                    <td className="topic-cell">أسماء الإشارة للجمع (These/Those)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">قواعد</span> These are books.
                                        Those are birds.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">19 فبراير (خميس)</td>
                                    <td className="topic-cell">تدريبات القواعد (Grammar Quiz)</td>
                                    <td className="details-cell"><span className="tag tag-review">تقييم</span> Plurals &
                                        Demonstratives.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 8 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 8: مراجعة المرحلة التأسيسية</span>
                            <span>22-26 فبراير</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell" style={{ color: '#ef9a9a' }}>22 فبراير (أحد)</td>
                                    <td className="topic-cell" style={{ background: 'rgba(198,40,40,0.1)' }}>إجازة يوم التأسيس
                                        (Founding Day)</td>
                                    <td className="details-cell"><span className="tag tag-holiday">عطلة</span> إجازة رسمية.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">23 فبراير (اثنين)</td>
                                    <td className="topic-cell">مراجعة عامة (General Review 1)</td>
                                    <td className="details-cell"><span className="tag tag-review">مراجعة</span> Sound/Letter
                                        Recap & Numbers.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">24 فبراير (ثلاثاء)</td>
                                    <td className="topic-cell">مراجعة القواعد (General Review 2)</td>
                                    <td className="details-cell"><span className="tag tag-review">مراجعة</span> Verb to be,
                                        Have/Has, Can.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">25 فبراير (أربعاء)</td>
                                    <td className="topic-cell">التقييم الشفهي (Oral Assessment)</td>
                                    <td className="details-cell"><span className="tag tag-review">اختبار</span> Introduce
                                        yourself & Describe pictures.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">26 فبراير (خميس)</td>
                                    <td className="topic-cell">الاختبار النهائي للتأسيس (Final Test)</td>
                                    <td className="details-cell"><span className="tag tag-review">اختبار</span> Foundation Level
                                        Final Exam.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 3: Headway Start (Detailed) */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر الثالث: انطلاق منهج New Headway (Units 1 & 2)</h2>
                        <span className="month-meta">1 مارس - 26 مارس 2026 | رمضان / عيد الفطر</span>
                    </div>

                    {/* Week 9 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 9: Unit 1 (Hello) - البداية</span>
                            <span>1-5 مارس</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">1 مارس (أحد)</td>
                                    <td className="topic-cell">Introductions: am/is, my/your</td>
                                    <td className="sb-cell"><span className="text-gold">p.8:</span> <span className="text-green">Starter</span>. Read & listen "I'm Serena". <span className="text-purple">Grammar Spot</span> (I'm).
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.4:</span> <span className="text-blue">Ex 1 & 2</span> (Conversations).<br /><span className="text-gold">p.5:</span> <span className="text-blue">Ex 4</span> (Names).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">2 مارس (اثنين)</td>
                                    <td className="topic-cell">Meeting People: "Nice to meet you"</td>
                                    <td className="sb-cell"><span className="text-gold">p.9:</span> "This is Carlos". Practise in groups.</td>
                                    <td className="wb-cell"><span className="text-gold">p.5:</span> <span className="text-blue">Ex 3</span> ("Nice to meet you").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">3 مارس (ثلاثاء)</td>
                                    <td className="topic-cell">Greetings: "How are you?"</td>
                                    <td className="sb-cell"><span className="text-gold">p.10:</span> "How are you?". <span className="text-purple">Grammar Spot</span> ('m, is, are).<br /><span className="text-gold">p.11:</span> "Good
                                        morning!".</td>
                                    <td className="wb-cell"><span className="text-gold">p.5:</span> <span className="text-blue">Ex 5</span> (Order conversation).<br /><span className="text-gold">p.8:</span> <span className="text-blue">Ex 11 & 12</span>.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">4 مارس (أربعاء)</td>
                                    <td className="topic-cell">Vocabulary: Everyday Objects, a/an</td>
                                    <td className="sb-cell"><span className="text-gold">p.12:</span> Match words & pictures (book, apple...). <span className="text-purple">Grammar Spot</span>
                                        (a/an).</td>
                                    <td className="wb-cell"><span className="text-gold">p.6:</span> <span className="text-blue">Ex 6</span> (Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">5 مارس (خميس)</td>
                                    <td className="topic-cell">Vocabulary: Numbers 1-10 & Plurals</td>
                                    <td className="sb-cell"><span className="text-gold">p.13:</span> Practise numbers. <span className="text-purple">Grammar Spot</span> (Plurals s/es). Listen &
                                        repeat.</td>
                                    <td className="wb-cell"><span className="text-gold">p.6:</span> <span className="text-blue">Ex 7</span> (Numbers).<br /><span className="text-gold">p.7:</span> <span className="text-blue">Ex 9 & 10</span> (Plurals).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 10 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 10: Unit 1 Review & Unit 2 Start</span>
                            <span>8-12 مارس</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">8 مارس (أحد)</td>
                                    <td className="topic-cell">Unit 1 Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.14:</span> Review Grammar Reference (1.1-1.5). Review
                                        Wordlist.<br />Quiz: Objects, Plurals, Greetings.</td>
                                    <td className="wb-cell"><span className="text-gold">p.9:</span> "Don't forget!" (Revision 13-17).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">9 مارس (اثنين)</td>
                                    <td className="topic-cell">Unit 2: Countries</td>
                                    <td className="sb-cell"><span className="text-gold">p.15:</span> <span className="text-green">Starter</span> (Earth & Moon).<br /><span className="text-gold">p.16:</span> Countries map, listen &
                                        repeat.</td>
                                    <td className="wb-cell"><span className="text-gold">p.10:</span> <span className="text-blue">Ex 1 & 2</span> (Countries crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">10 مارس (ثلاثاء)</td>
                                    <td className="topic-cell">Grammar: He/She, His/Her</td>
                                    <td className="sb-cell"><span className="text-gold">p.16:</span> Read & Listen (Antonio/Nuwa). <span className="text-purple">Grammar Spot</span>.<br />Practice
                                        sentences.</td>
                                    <td className="wb-cell"><span className="text-gold">p.11:</span> <span className="text-blue">Ex 3, 4, 5, 6</span> (Practice pronouns).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">11 مارس (أربعاء)</td>
                                    <td className="topic-cell">Grammar: Where's he/she from?</td>
                                    <td className="sb-cell"><span className="text-gold">p.17:</span> Listen & repeat questions. Ask & answer (Map
                                        photos).<br /><span className="text-purple">Grammar Spot</span> ("Where's").</td>
                                    <td className="wb-cell"><span className="text-gold">p.12:</span> <span className="text-blue">Ex 8</span> (Listening) & <span className="text-blue">Ex 9</span> (Match Q&A).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">12 مارس (خميس)</td>
                                    <td className="topic-cell">Practice: Cities & Countries</td>
                                    <td className="sb-cell"><span className="text-gold">p.18:</span> "Where's Venice?". Pair work (Student A/B).<br />Ask about
                                        students.</td>
                                    <td className="wb-cell"><span className="text-gold">p.14:</span> <span className="text-blue">Ex 13 & 14</span> (Listening: Berlin).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 11 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 11: Unit 2 (Continued) & Reading</span>
                            <span>15-19 مارس</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">15 مارس (أحد)</td>
                                    <td className="topic-cell">Practice: Questions & Answers</td>
                                    <td className="sb-cell"><span className="text-gold">p.18:</span> "Talking about you" (Ask students).<br /><span className="text-gold">p.19:</span> Practice Q&A
                                        (<span className="text-blue">Ex 4, 6</span>) & Check it.</td>
                                    <td className="wb-cell"><span className="text-gold">p.12:</span> <span className="text-blue">Ex 9</span> (Match) & <span className="text-blue">Ex 10</span> (Adjectives).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">16 مارس (اثنين)</td>
                                    <td className="topic-cell">Reading: Holiday in New York</td>
                                    <td className="sb-cell"><span className="text-gold">p.20:</span> Read & Listen. Answer Qs.<br />Vocab: Adjectives (awful,
                                        amazing).</td>
                                    <td className="wb-cell"><span className="text-gold">p.13:</span> <span className="text-blue">Ex 11 & 12</span> (Reading: Where are they?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">17 مارس (ثلاثاء)</td>
                                    <td className="topic-cell">Everyday English: Numbers 11-30</td>
                                    <td className="sb-cell"><span className="text-gold">p.21:</span> Numbers 11-30. Listen & tick.<br />Practice writing numbers.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.14:</span> <span className="text-blue">Ex 15 & 16</span> (Writing numbers).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: '#ef9a9a' }}>18 مارس (أربعاء)</td>
                                    <td className="topic-cell">Practice: "How old is...?"</td>
                                    <td className="sb-cell"><span className="text-gold">p.21:</span> <span className="text-blue">Ex 7</span> ("How old is she?").<br /><span className="text-gold">p.22:</span> Review Grammar Ref
                                        (2.1-2.3).</td>
                                    <td className="wb-cell" style={{ color: '#ef9a9a' }}>بداية إجازة عيد الفطر (متوقع).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: '#ef9a9a' }}>19 مارس (خميس)</td>
                                    <td className="topic-cell">Unit 2 Review (Consolidation)</td>
                                    <td className="sb-cell">Speaking games ("Guess the person").<br />Review Unit 2 Questions.
                                    </td>
                                    <td className="wb-cell" style={{ color: '#ef9a9a' }}>إجازة عيد الفطر (تابع).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Week 12: Eid Vacation */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 12: إجازة عيد الفطر</span>
                            <span>22-26 مارس</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>المناسبة</th>
                                    <th>الملاحظات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell" style={{ color: '#ef9a9a' }}>22-26 مارس</td>
                                    <td className="topic-cell" style={{ background: 'rgba(198,40,40,0.1)' }}>إجازة عيد الفطر
                                        المبارك</td>
                                    <td className="details-cell" style={{ textAlign: 'center', color: '#ef9a9a' }}>عيدكم مبارك
                                        (Happy Eid)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 4: Units 3 & 4 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر الرابع: New Headway - Units 3 & 4</h2>
                        <span className="month-meta">29 مارس - 23 أبريل 2026</span>
                    </div>

                    {/* Week 15 (Annual) -> Headway Week 6 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 15: Unit 4 (Practice) & The Alphabet</span>
                            <span>12-16 أبريل</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">12 أبريل (أحد)</td>
                                    <td className="topic-cell">Unit 4: Practice</td>
                                    <td className="sb-cell"><span className="text-gold">p.33:</span> Listening "An Australian family".<br /><span className="text-gold">p.34:</span>
                                        "Talking about you" (Family Q&A).</td>
                                    <td className="wb-cell"><span className="text-gold">p.24:</span> <span className="text-blue">Ex 5 & 6</span> (Listening - Alfie).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">13 أبريل (اثنين)</td>
                                    <td className="topic-cell">Grammar: have/has</td>
                                    <td className="sb-cell"><span className="text-gold">p.35:</span> Common verbs (have/has, love, like).<br />Read
                                        about the Beckhams.</td>
                                    <td className="wb-cell"><span className="text-gold">p.24:</span> <span className="text-blue">Ex 4</span> (Practice has/have).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">14 أبريل (ثلاثاء)</td>
                                    <td className="topic-cell">Practice: have/has</td>
                                    <td className="sb-cell"><span className="text-gold">p.35:</span> <span className="text-purple">Grammar Spot</span>. Practice sentences.<br /><span className="text-gold">p.36:</span>
                                        Complete sentences & Check it.</td>
                                    <td className="wb-cell"><span className="text-gold">p.25:</span> <span className="text-blue">Ex 8</span> (Reading: "Who's happy?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">15 أبريل (أربعاء)</td>
                                    <td className="topic-cell">Reading & Writing</td>
                                    <td className="sb-cell"><span className="text-gold">p.36-37:</span> Reading "My e-pal". Answer Qs.<br /><span className="text-gold">p.37:</span>
                                        Writing: "Write about a friend".</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 9</span> (Vocabulary Revision).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">16 أبريل (خميس)</td>
                                    <td className="topic-cell">Unit 4: Vocabulary: The Alphabet</td>
                                    <td className="sb-cell"><span className="text-gold">p.38:</span> Listen & practice alphabet.<br />Spelling names
                                        & countries (<span className="text-blue">Ex 6</span>).</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 11</span> (The Alphabet).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 16 (Annual) -> Headway Week 7 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 16: Unit 4 Everyday English & Unit 5 Start</span>
                            <span>19-23 أبريل</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">19 أبريل (أحد)</td>
                                    <td className="topic-cell">Unit 4: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.39:</span> "On the phone". Practice email
                                        addresses.<br />Roleplay phone calls.</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 12</span> ("On the phone").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">20 أبريل (اثنين)</td>
                                    <td className="topic-cell">Unit 4: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.40:</span> Review Grammar Ref & Wordlist.<br />Unit 4 Quiz
                                        (Family, Possessives).</td>
                                    <td className="wb-cell"><span className="text-gold">p.27:</span> "Don't forget!" (Revision 13-17).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">21 أبريل (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 5: Likes & Dislikes</td>
                                    <td className="sb-cell"><span className="text-gold">p.41:</span> <span className="text-green">Starter</span>. <span className="text-gold">p.42:</span> Vocab (Food,
                                        Drinks).<br />Practice "I like...".</td>
                                    <td className="wb-cell"><span className="text-gold">p.28:</span> <span className="text-blue">Ex 1</span> (Crossword). <span className="text-gold">p.29:</span> <span className="text-blue">Ex 2</span>.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">22 أبريل (أربعاء)</td>
                                    <td className="topic-cell">Unit 5: Present Simple</td>
                                    <td className="sb-cell"><span className="text-gold">p.43:</span> Present Simple pos/neg (I like/don't
                                        like).<br />Listen to Dexter.</td>
                                    <td className="wb-cell"><span className="text-gold">p.30:</span> <span className="text-blue">Ex 4 & 7</span> (Reading: Michael Phelps).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">23 أبريل (خميس)</td>
                                    <td className="topic-cell">Unit 5: Grammar Questions</td>
                                    <td className="sb-cell"><span className="text-gold">p.43:</span> Questions (Do you like...?).<br />Listen to
                                        Daisy & Dexter.</td>
                                    <td className="wb-cell"><span className="text-gold">p.29:</span> <span className="text-blue">Ex 3</span> (Do you like...?).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </section>

                {/* Month 5: Units 5 & 6 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر الخامس: Consolidation & Mid-Term</h2>
                        <span className="month-meta">26 أبريل - 21 مايو 2026</span>
                    </div>
                    {/* Week 17 (Annual) -> Headway Week 8 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 17: Unit 4 Consolidation (Review Week)</span>
                            <span>26-30 أبريل</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">26 أبريل (أحد)</td>
                                    <td className="topic-cell">Unit 4: The Alphabet</td>
                                    <td className="sb-cell"><span className="text-gold">p.38:</span> Listen & practice alphabet.<br />Spelling names &
                                        countries.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 11</span> (The Alphabet).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">27 أبريل (اثنين)</td>
                                    <td className="topic-cell">Unit 4: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.39:</span> "On the phone". Practice email addresses.<br />Roleplay
                                        (Ex
                                        8).</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 12</span> ("On the phone").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">28 أبريل (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 4: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.40:</span> Review Grammar Ref. Spelling bee.</td>
                                    <td className="wb-cell"><span className="text-gold">p.27:</span> "Don't forget!" (Revision 13-17).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">29 أبريل (أربعاء)</td>
                                    <td className="topic-cell">Unit 4: Consolidation</td>
                                    <td className="sb-cell">Reread "My e-pal" & "Beckhams".<br />Describe family and
                                        friends.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.25:</span> <span className="text-blue">Ex 8</span> (Reading: "Who's happy?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">30 أبريل (خميس)</td>
                                    <td className="topic-cell">Unit 4: Quiz & Wrap-up</td>
                                    <td className="sb-cell">Quiz (Family, Possessives, Have/Has).<br />Roleplay: Book a
                                        taxi/hotel.</td>
                                    <td className="wb-cell">Catch up on unfinished Workbook.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 18 (Annual) -> Headway Week 9 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 18: Mid-Term Review & Exams</span>
                            <span>3-7 مايو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">3 مايو (أحد)</td>
                                    <td className="topic-cell">Review: Units 1-2</td>
                                    <td className="sb-cell">Grammar: am/is/are, my/your.<br />Vocab: Countries, Objects.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.9</span> & 15: "Don't forget!" (Unit 1 & 2).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">4 مايو (اثنين)</td>
                                    <td className="topic-cell">Review: Units 3-4</td>
                                    <td className="sb-cell">Grammar: Negatives, Possessives.<br />Vocab: Jobs, Family.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.21</span> & 27: "Don't forget!" (Unit 3 & 4).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: '#D4AF37' }}>5 مايو (ثلاثاء)</td>
                                    <td className="topic-cell" style={{ borderLeft: '3px solid #D4AF37' }}>Mid-Term 1:
                                        Written
                                    </td>
                                    <td className="sb-cell">Assessment: Written test covering Units 1-4.</td>
                                    <td className="wb-cell">Study for Speaking Test.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: '#D4AF37' }}>6 مايو (أربعاء)</td>
                                    <td className="topic-cell" style={{ borderLeft: '3px solid #D4AF37' }}>Mid-Term 1:
                                        Speaking
                                    </td>
                                    <td className="sb-cell">Assessment: Spoken interviews (Units 1-4).</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">7 مايو (خميس)</td>
                                    <td className="topic-cell">Unit 5: Likes & Dislikes (Resume)</td>
                                    <td className="sb-cell"><span className="text-gold">p.41:</span> <span className="text-green">Starter</span>. <span className="text-gold">p.42:</span> Vocab (Sports, Food).<br />Practice "I
                                        like...".</td>
                                    <td className="wb-cell"><span className="text-gold">p.28:</span> <span className="text-blue">Ex 1</span>. <span className="text-gold">p.29:</span> <span className="text-blue">Ex 2</span>.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 19 (Annual) -> Headway Week 10 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 19: Unit 5: Reading & Vocabulary</span>
                            <span>10-14 مايو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">10 مايو (أحد)</td>
                                    <td className="topic-cell">Unit 5: Reading "Alek's life"</td>
                                    <td className="sb-cell"><span className="text-gold">p.44:</span> Read about Alek Brosko. Check answers.</td>
                                    <td className="wb-cell"><span className="text-gold">p.30:</span> <span className="text-blue">Ex 4, 5, 6, 7</span> (Reading: Michael Phelps).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">11 مايو (اثنين)</td>
                                    <td className="topic-cell">Unit 5: Practice Present Simple</td>
                                    <td className="sb-cell"><span className="text-gold">p.45:</span> Listen & complete conversation with Alek.<br />Practice
                                        Q&A.</td>
                                    <td className="wb-cell"><span className="text-gold">p.31:</span> <span className="text-blue">Ex 8, 9, 10</span> (Listening: Gracie).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">12 مايو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 5: Listening & Speaking</td>
                                    <td className="sb-cell"><span className="text-gold">p.45:</span> Listening "Where is Alek?".<br /><span className="text-gold">p.45:</span> <span className="text-blue">Ex 6 & 7</span> (Talking
                                        about you).</td>
                                    <td className="wb-cell">Review SB <span className="text-gold">p.45</span> exercises.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">13 مايو (أربعاء)</td>
                                    <td className="topic-cell">Unit 5: Vocab: Languages</td>
                                    <td className="sb-cell"><span className="text-gold">p.46:</span> Match countries & nationalities.<br />Listen & repeat
                                        (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell"><span className="text-gold">p.31:</span> <span className="text-blue">Ex 11 & 12</span> (Languages).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">14 مايو (خميس)</td>
                                    <td className="topic-cell">Unit 5: Vocab: Adjective + noun</td>
                                    <td className="sb-cell"><span className="text-gold">p.47:</span> Adjective + noun. Complete sentences.<br /><span className="text-purple">Grammar Spot</span>.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.32:</span> <span className="text-blue">Ex 16</span> (Listening - Prices).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 20 (Annual) -> Headway Week 11 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 20: Unit 5: Listening, Speaking & Prices</span>
                            <span>17-21 مايو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">17 مايو (أحد)</td>
                                    <td className="topic-cell">Unit 5: Listening</td>
                                    <td className="sb-cell"><span className="text-gold">p.48:</span> "Party time". Listen to Daniel & Tam.<br />Practice
                                        conversation.</td>
                                    <td className="wb-cell"><span className="text-gold">p.31:</span> <span className="text-blue">Ex 8, 9, 10</span> (Listening).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">18 مايو (اثنين)</td>
                                    <td className="topic-cell">Unit 5: Speaking Roleplay</td>
                                    <td className="sb-cell"><span className="text-gold">p.48:</span> Roleplay "You meet at a party" (<span className="text-blue">Ex 3</span>).<br />New identity
                                        Q&A.</td>
                                    <td className="wb-cell">Review vocabulary for "Party time".</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">19 مايو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 5: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.49:</span> "How much is it?". Numbers 10-100.<br />Practice prices
                                        (<span className="text-blue">Ex 4</span>,5).</td>
                                    <td className="wb-cell"><span className="text-gold">p.32:</span> <span className="text-blue">Ex 13 & 14</span> (Numbers and prices).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">20 مايو (أربعاء)</td>
                                    <td className="topic-cell">Unit 5: Practice with Prices</td>
                                    <td className="sb-cell"><span className="text-gold">p.49:</span> Listen and tick prices (<span className="text-blue">Ex 6</span>).<br />Ask & answer about
                                        photos.</td>
                                    <td className="wb-cell"><span className="text-gold">p.32:</span> <span className="text-blue">Ex 15 & 16</span> (Listening to prices).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">21 مايو (خميس)</td>
                                    <td className="topic-cell">Unit 5: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.50:</span> Review Grammar Ref (5.1-5.2) & Wordlist.<br />Unit 5
                                        Quiz.</td>
                                    <td className="wb-cell"><span className="text-gold">p.33:</span> "Don't forget!" (Revision <span className="text-blue">Ex 17</span>-22).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 6: Unit 7 & Review & Eid al-Adha */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر السادس: Unit 6 & 7 + إجازة عيد الأضحى</h2>
                        <span className="month-meta">24 مايو - 18 يونيو 2026</span>
                    </div>

                    {/* Week 21 (Annual): Eid al-Adha Holiday */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 21: إجازة عيد الأضحى المبارك</span>
                            <span>24-28 مايو</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell" style={{ color: '#ef9a9a' }}>24 - 28 مايو</td>
                                    <td className="topic-cell" style={{ background: 'rgba(198,40,40,0.1)' }}>إجازة عيد الأضحى
                                        المبارك</td>
                                    <td className="details-cell" colSpan="2"
                                        style={{ textAlign: 'center', color: '#ef9a9a', fontWeight: 'bold' }}>
                                        <span className="tag tag-holiday">عطلة</span> وقفة عرفة وأيام عيد الأضحى
                                        المبارك.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 22 (Annual) -> Headway Week 12 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 22: Unit 6: The Time & Present Simple</span>
                            <span>31 مايو - 4 يونيو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">31 مايو (أحد)</td>
                                    <td className="topic-cell">Unit 6: The Time</td>
                                    <td className="sb-cell"><span className="text-gold">p.51:</span> <span className="text-green">Starter</span> (Daily routine).<br /><span className="text-gold">p.52:</span> Vocab "What time is
                                        it?".</td>
                                    <td className="wb-cell"><span className="text-gold">p.34:</span> <span className="text-blue">Ex 1, 2, 3</span> (The time).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">1 يونيو (اثنين)</td>
                                    <td className="topic-cell">Unit 6: Present Simple I/you</td>
                                    <td className="sb-cell"><span className="text-gold">p.53:</span> Listen to Felipe's day.<br />Practice sentences & Q&A.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">2 يونيو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 6: Present Simple he/she</td>
                                    <td className="sb-cell"><span className="text-gold">p.54:</span> "Anna's day". Read & find times.<br /><span className="text-purple">Grammar Spot</span>
                                        (verbs +s).</td>
                                    <td className="wb-cell"><span className="text-gold">p.35:</span> <span className="text-blue">Ex 4, 5, 6</span> (Cathy and George).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">3 يونيو (أربعاء)</td>
                                    <td className="topic-cell">Unit 6: Adverbs of Frequency</td>
                                    <td className="sb-cell"><span className="text-gold">p.54:</span> <span className="text-purple">Grammar Spot</span>: always/sometimes/never.<br /><span className="text-gold">p.55:</span>
                                        Practice Qs.</td>
                                    <td className="wb-cell"><span className="text-gold">p.36:</span> <span className="text-blue">Ex 8, 9</span> (Cathy's bedroom - likes).<br /><span className="text-gold">p.37:</span> <span className="text-blue">Ex 12</span>
                                        (Prepositions).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">4 يونيو (خميس)</td>
                                    <td className="topic-cell">Unit 6: Questions & Negatives</td>
                                    <td className="sb-cell"><span className="text-gold">p.55:</span> <span className="text-purple">Grammar Spot</span> (doesn't, does she?).<br />Practice Q&A.
                                        Negative sentences.</td>
                                    <td className="wb-cell"><span className="text-gold">p.35:</span> <span className="text-blue">Ex 7</span> (Questions).<br /><span className="text-gold">p.36:</span> <span className="text-blue">Ex 10</span> (do/does/am/is/are).
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 23 (Annual) -> Headway Week 13 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 23: Unit 6: Reading, Listening & Skills</span>
                            <span>7-11 يونيو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">7 يونيو (أحد)</td>
                                    <td className="topic-cell">Unit 6: Reading</td>
                                    <td className="sb-cell"><span className="text-gold">p.56:</span> "Toby McMann". Read & complete text.<br />True/False
                                        questions.</td>
                                    <td className="wb-cell"><span className="text-gold">p.38:</span> <span className="text-blue">Ex 14</span>-17 (Reading: Barack Obama).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">8 يونيو (اثنين)</td>
                                    <td className="topic-cell">Unit 6: Listening</td>
                                    <td className="sb-cell"><span className="text-gold">p.57:</span> "Anna and Toby". Complete conversation.<br />Practice
                                        conversation.</td>
                                    <td className="wb-cell"><span className="text-gold">p.38:</span> Reread Barack Obama text & check.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">9 يونيو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 6: Speaking</td>
                                    <td className="sb-cell"><span className="text-gold">p.57:</span> "Talking about you". Q&A family/friends.<br />Correct
                                        sentences.</td>
                                    <td className="wb-cell"><span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Crossword - review).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">10 يونيو (أربعاء)</td>
                                    <td className="topic-cell">Unit 6: Vocab & Speaking</td>
                                    <td className="sb-cell"><span className="text-gold">p.58:</span> "Words that go together".<br />"Lifestyle
                                        questionnaire".</td>
                                    <td className="wb-cell"><span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Finish crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">11 يونيو (خميس)</td>
                                    <td className="topic-cell">Unit 6: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.59:</span> "Days of the week". Listen & practice.<br />Prepositions
                                        in/on/at.</td>
                                    <td className="wb-cell"><span className="text-gold">p.39:</span> <span className="text-blue">Ex 18</span> (Days). <span className="text-gold">p.37:</span> <span className="text-blue">Ex 12</span> (Preps).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 24 (Annual) -> Headway Week 14 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 24: Unit 6 Review & Unit 7 Start</span>
                            <span>14-18 يونيو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">14 يونيو (أحد)</td>
                                    <td className="topic-cell">Unit 6: Vocab & Speaking</td>
                                    <td className="sb-cell"><span className="text-gold">p.58:</span> "Words that go together" (<span className="text-blue">Ex 1</span>).<br />Lifestyle
                                        questionnaire (<span className="text-blue">Ex 3</span>,4).</td>
                                    <td className="wb-cell"><span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">15 يونيو (اثنين)</td>
                                    <td className="topic-cell">Unit 6: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.59:</span> "Days of the week". Q&A.<br />Prepositions in/on/at.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.39:</span> <span className="text-blue">Ex 18</span> (Days). <span className="text-gold">p.37:</span> <span className="text-blue">Ex 12</span> (Preps).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">16 يونيو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 6: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.60:</span> Review Grammar Ref (6.1-6.4) & Wordlist.<br />Unit 6
                                        Quiz.</td>
                                    <td className="wb-cell"><span className="text-gold">p.39:</span> "Don't forget!" (Revision <span className="text-blue">Ex 19</span>-23).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">17 يونيو (أربعاء)</td>
                                    <td className="topic-cell">Unit 7: Favourite Things</td>
                                    <td className="sb-cell"><span className="text-gold">p.61:</span> <span className="text-green">Starter</span> (Favourite day, food).<br /><span className="text-gold">p.62:</span> "Things I
                                        love!". Grammar "Question words".</td>
                                    <td className="wb-cell"><span className="text-gold">p.40:</span> <span className="text-blue">Ex 1</span> (Reading: Johnny Depp).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">18 يونيو (خميس)</td>
                                    <td className="topic-cell">Unit 7: Practice Qs</td>
                                    <td className="sb-cell"><span className="text-gold">p.62-63:</span> Questions about Alfio.<br /><span className="text-purple">Grammar Spot</span> (Question
                                        words & Pronouns).</td>
                                    <td className="wb-cell"><span className="text-gold">p.41:</span> <span className="text-blue">Ex 2, 3, 4</span> (Question words).<br /><span className="text-gold">p.41:</span> <span className="text-blue">Ex 5</span> (Why...
                                        Because).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 7: Finals */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر السابع: Unit 7 & المراجعة النهائية والاختبارات</h2>
                        <span className="month-meta">21 يونيو - 9 يوليو 2026</span>
                    </div>

                    {/* Week 25 (Annual) -> Headway Week 15 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 25: Unit 7: Object Pronouns & Adjectives</span>
                            <span>21-25 يونيو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">21 يونيو (أحد)</td>
                                    <td className="topic-cell">Unit 7: Object Pronouns</td>
                                    <td className="sb-cell"><span className="text-gold">p.63:</span> <span className="text-purple">Grammar Spot</span> (Object Pronouns).<br /><span className="text-gold">p.65:</span> Practice "I
                                        like you!" (<span className="text-blue">Ex 1</span>).</td>
                                    <td className="wb-cell"><span className="text-gold">p.42:</span> <span className="text-blue">Ex 6, 7, 8</span> (Pronouns me/him, my/his).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">22 يونيو (اثنين)</td>
                                    <td className="topic-cell">Unit 7: Grammar this/that</td>
                                    <td className="sb-cell"><span className="text-gold">p.64:</span> "this and that". Complete conversations.<br />Practice:
                                        "Test the other students" (<span className="text-blue">Ex 2</span>).</td>
                                    <td className="wb-cell"><span className="text-gold">p.42:</span> <span className="text-blue">Ex 9</span> (this/that).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">23 يونيو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 7: Practice & Vocab</td>
                                    <td className="sb-cell"><span className="text-gold">p.65:</span> Practice Q&A (Why do you...?) (<span className="text-blue">Ex 2</span>).<br /><span className="text-gold">p.66:</span> Vocab:
                                        "Adjectives". Match words.</td>
                                    <td className="wb-cell"><span className="text-gold">p.43:</span> <span className="text-blue">Ex 10</span> (Adjectives - happy/miserable).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">24 يونيو (أربعاء)</td>
                                    <td className="topic-cell">Unit 7: Reading</td>
                                    <td className="sb-cell"><span className="text-gold">p.67:</span> "An email from Dubai". Read & listen.<br />Answer
                                        questions (<span className="text-blue">Ex 2</span>). Find adjectives.</td>
                                    <td className="wb-cell"><span className="text-gold">p.45:</span> "Don't forget!" (Revision <span className="text-blue">Ex 12, 13, 14</span>).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">25 يونيو (خميس)</td>
                                    <td className="topic-cell">Unit 7: Writing & Everyday</td>
                                    <td className="sb-cell"><span className="text-gold">p.67:</span> Writing: "Write an email to a friend".<br /><span className="text-gold">p.68:</span> "Can
                                        I...?". Match places & activities.</td>
                                    <td className="wb-cell"><span className="text-gold">p.44:</span> <span className="text-blue">Ex 11</span> ("Can I...?").</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 26 (Annual) -> Headway Week 16 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 26: Unit 7 Review & Consolidation</span>
                            <span>28 يونيو - 2 يوليو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">28 يونيو (أحد)</td>
                                    <td className="topic-cell">Unit 7: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.68:</span> "Can I...?". Match places & activities.<br /><span className="text-gold">p.69:</span>
                                        Listening "Iveta in town".</td>
                                    <td className="wb-cell"><span className="text-gold">p.44:</span> <span className="text-blue">Ex 11</span> ("Can I...?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">29 يونيو (اثنين)</td>
                                    <td className="topic-cell">Unit 7: Roleplay</td>
                                    <td className="sb-cell"><span className="text-gold">p.69:</span> Roleplay (<span className="text-blue">Ex 4</span>). Practice conversations<br />(shop,
                                        cafe, etc.).</td>
                                    <td className="wb-cell">Review vocabulary from SB p. 68-69.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">30 يونيو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 7: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.70:</span> Review Grammar Ref (7.1-7.4) & Wordlist.<br />Unit 7
                                        Quiz.</td>
                                    <td className="wb-cell"><span className="text-gold">p.45:</span> "Don't forget!" (Revision <span className="text-blue">Ex 12, 13, 14</span>).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">1 يوليو (أربعاء)</td>
                                    <td className="topic-cell">Consolidation: Units 5-7</td>
                                    <td className="sb-cell">Review: Reread "Alek's life" & "Email from
                                        Dubai".<br />Speaking: Pair work Q&A.</td>
                                    <td className="wb-cell">Catch up on any unfinished Workbook exercises.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">2 يوليو (خميس)</td>
                                    <td className="topic-cell">Consolidation: Writing</td>
                                    <td className="sb-cell">Writing: "Write an email from your holiday".<br />Present
                                        emails to the class.</td>
                                    <td className="wb-cell">Study for Semester 1 Final Exams (Units 1-7).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 27 (Annual) -> Headway Week 17 (Finals) */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 27: الاختبارات النهائية (Final Exams)</span>
                            <span>5-9 يوليو</span>
                        </div>
                        <table className="plan-table" style={{ border: '2px solid #D4AF37' }}>
                            <thead>
                                <tr>
                                    <th style={{ background: 'rgba(212,175,55,0.2)' }}>اليوم / التاريخ</th>
                                    <th style={{ background: 'rgba(212,175,55,0.2)' }}>الاختبار (Exam Subject)</th>
                                    <th style={{ background: 'rgba(212,175,55,0.2)' }}>تفاصيل الاختبار (Details)</th>
                                    <th style={{ background: 'rgba(212,175,55,0.2)' }}>ملاحظات (Notes)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">5 يوليو (أحد)</td>
                                    <td className="topic-cell" style={{ fontWeight: 'bold', color: '#ffab91' }}>Final Exam:
                                        Grammar & Vocab</td>
                                    <td className="sb-cell">Written Test: Grammar & Vocabulary from Units 1-7.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">6 يوليو (اثنين)</td>
                                    <td className="topic-cell" style={{ fontWeight: 'bold', color: '#ffab91' }}>Final Exam:
                                        Reading & Writing</td>
                                    <td className="sb-cell">Reading Passages + Writing Task (e.g. Family/Routine).</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">7 يوليو (ثلاثاء)</td>
                                    <td className="topic-cell" style={{ fontWeight: 'bold', color: '#ffab91' }}>Final Exam:
                                        Listening</td>
                                    <td className="sb-cell">Audio tracks + comprehension questions.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">8 يوليو (أربعاء)</td>
                                    <td className="topic-cell" style={{ fontWeight: 'bold', color: '#ffab91' }}>Final Exam:
                                        Speaking</td>
                                    <td className="sb-cell">1-on-1 Interviews. Q&A from Units 1-7.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">9 يوليو (خميس)</td>
                                    <td className="topic-cell">Exam Review / Project Intro</td>
                                    <td className="sb-cell">Return exams, review mistakes.<br />Intro to "Project Week".
                                    </td>
                                    <td className="wb-cell" style={{ fontWeight: 'bold', color: '#D4AF37' }}>Relax!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 8: Project Week & Unit 8 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر الثامن: Project Week & Unit 8 (Home)</h2>
                        <span className="month-meta">12 يوليو - 30 يوليو 2026</span>
                    </div>

                    {/* Week 28 (Annual) -> Headway Week 18 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 28: أسبوع المشروع & بدء الوحدة 8 (Project & Unit 8)</span>
                            <span>12-16 يوليو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">12 يوليو (أحد)</td>
                                    <td className="topic-cell">Semester Break / Admin</td>
                                    <td className="sb-cell">No classes (Semester Break).</td>
                                    <td className="wb-cell">-</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">13 يوليو (اثنين)</td>
                                    <td className="topic-cell">Project Week: Drafting</td>
                                    <td className="sb-cell">Writing Draft: First draft of presentation script.<br />Focus:
                                        Grammar Units 1-7.</td>
                                    <td className="wb-cell">Writing: Create "rough draft" of project script.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">14 يوليو (ثلاثاء)</td>
                                    <td className="topic-cell">Project Week: Peer Review</td>
                                    <td className="sb-cell">Practice presentations with partner.<br />Peer feedback on
                                        grammar.</td>
                                    <td className="wb-cell">Project: Create visual aids (poster/slides).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">15 يوليو (أربعاء)</td>
                                    <td className="topic-cell">Project Week: Presentations</td>
                                    <td className="sb-cell">Speaking: 3-5 min presentation to class.<br />Q&A from
                                        classmates.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">16 يوليو (خميس)</td>
                                    <td className="topic-cell">Start Unit 8: Home</td>
                                    <td className="sb-cell"><span className="text-gold">p.71:</span> <span className="text-green">Starter</span> (House/Flat).<br /><span className="text-gold">p.72:</span> Vocab "Rooms and
                                        furniture".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.46:</span> <span className="text-blue">Ex 1, 2, 3</span> (Rooms and furniture).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 29 (Annual) -> Headway Week 19 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 29: Unit 8 - There is/are & Prepositions</span>
                            <span>19-23 يوليو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">19 يوليو (أحد)</td>
                                    <td className="topic-cell">Unit 8: There is/are</td>
                                    <td className="sb-cell"><span className="text-gold">p.72:</span> Grammar "There is/There are".<br />Practice with house
                                        picture.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.47:</span> <span className="text-blue">Ex 4, 5, 6, 7</span> (There is/There are).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">20 يوليو (اثنين)</td>
                                    <td className="topic-cell">Unit 8: Negatives</td>
                                    <td className="sb-cell"><span className="text-gold">p.73:</span> "Two student flats". Read descriptions.<br />Grammar
                                        Spot (isn't/aren't).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.46:</span> <span className="text-blue">Ex 1, 2, 3</span> (Rooms and furniture).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">21 يوليو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 8: Practice Q&A</td>
                                    <td className="sb-cell"><span className="text-gold">p.73:</span> Practice Q&A (Is there...? Are there...?).<br />"Talking
                                        about you" (<span className="text-blue">Ex 6</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.48:</span> <span className="text-blue">Ex 8</span> (Prepositions on/under...).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">22 يوليو (أربعاء)</td>
                                    <td className="topic-cell">Unit 8: Prepositions</td>
                                    <td className="sb-cell"><span className="text-gold">p.74:</span> Grammar "Prepositions". "Jack's bedroom".<br />Grammar
                                        Spot (some/any).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.48:</span> <span className="text-blue">Ex 9</span> (Vocab Revision Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">23 يوليو (خميس)</td>
                                    <td className="topic-cell">Unit 8: Listening</td>
                                    <td className="sb-cell"><span className="text-gold">p.75:</span> Listening "Phone call with Jack's mum".<br />Practice
                                        "Two different kitchens".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.49:</span> <span className="text-blue">Ex 10, 11, 12</span> (Everyday English).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 30 (Annual) -> Headway Week 20 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 30: Unit 8 - Skills & Review</span>
                            <span>26-30 يوليو</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">26 يوليو (أحد)</td>
                                    <td className="topic-cell">Unit 8: Reading</td>
                                    <td className="sb-cell"><span className="text-gold">p.76-77:</span> Read "Cape Town". Answer questions.<br />Find
                                        adjectives (<span className="text-blue">Ex 5</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.50:</span> <span className="text-blue">Ex 13</span> (Reading: Berkhamsted).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">27 يوليو (اثنين)</td>
                                    <td className="topic-cell">Unit 8: Listening</td>
                                    <td className="sb-cell"><span className="text-gold">p.78:</span> Listen to Ben ("My home town").<br />Listen to
                                        conversations (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.48:</span> <span className="text-blue">Ex 9</span> (Vocab Revision).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">28 يوليو (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 8: Writing</td>
                                    <td className="sb-cell"><span className="text-gold">p.78:</span> "Talking about you".<br />Writing: "Write about a town
                                        you know".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.51:</span> "Don't forget!" (Revision).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">29 يوليو (أربعاء)</td>
                                    <td className="topic-cell">Unit 8: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.79:</span> "Directions". Find places on map.<br />Listen & follow
                                        directions.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.49:</span> <span className="text-blue">Ex 10, 11, 12</span> (Directions).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">30 يوليو (خميس)</td>
                                    <td className="topic-cell">Unit 8: Review & Roleplay</td>
                                    <td className="sb-cell"><span className="text-gold">p.79:</span> Roleplay giving directions.<br /><span className="text-gold">p.80:</span> Review Grammar
                                        Ref & Wordlist.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.51:</span> "Don't forget!" (Revision).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 9: Units 9 & 10 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر التاسع: Headway Units 9 & 10</h2>
                        <span className="month-meta">16 أغسطس - 10 سبتمبر 2026</span>
                    </div>

                    {/* Week 31 (Annual) -> Headway Week 21 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 31: Unit 9: Past Times</span>
                            <span>16-20 أغسطس</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">16 أغسطس (أحد)</td>
                                    <td className="topic-cell">Unit 9: Past Times</td>
                                    <td className="sb-cell">SB p. 81: <span className="text-green">Starter</span> (Old street scene).<br />SB p. 82: "Saying
                                        years". Grammar: was/were born. Practice Q&A.</td>
                                    <td className="wb-cell">WB p. 52: <span className="text-blue">Ex 1, 2, 3, 4</span> (Saying years, Dates Quiz).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">17 أغسطس (اثنين)</td>
                                    <td className="topic-cell">Unit 9: was/were</td>
                                    <td className="sb-cell">SB p. 83: <span className="text-purple">Grammar Spot</span> (was/were). Listening: "Rolf Ackman".
                                        Practice Q&A about Rolf's family.</td>
                                    <td className="wb-cell">WB p. 53: <span className="text-blue">Ex 5, 6, 7, 8</span> (was/were, Questions, Negatives).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">18 أغسطس (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 9: Practice</td>
                                    <td className="sb-cell">SB p. 84: Practice: was/were negatives. "Today and
                                        yesterday" (<span className="text-blue">Ex 6</span>).<br />SB p. 84-85: Reading: "Who were they?".</td>
                                    <td className="wb-cell">WB p. 54: <span className="text-blue">Ex 9</span> (Reading: Andy Warhol & Princess Diana).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">19 أغسطس (أربعاء)</td>
                                    <td className="topic-cell">Unit 9: Irregular Verbs</td>
                                    <td className="sb-cell">SB p. 86: "Reading: "Oh no! What bad luck!". Grammar: Past
                                        Simple (irregular verbs).</td>
                                    <td className="wb-cell">WB p. 55: <span className="text-blue">Ex 10 & 11</span> (Irregular verbs).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">20 أغسطس (خميس)</td>
                                    <td className="topic-cell">Unit 9: Speaking</td>
                                    <td className="sb-cell">SB p. 87: Read news article "The Lottery Ticket".<br />SB p.
                                        87: Speaking: "Tell the story again" (<span className="text-blue">Ex 5</span>).</td>
                                    <td className="wb-cell">WB p. 56: <span className="text-blue">Ex 12</span> (Vocab: have/do/go crossword).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 32 (Annual) -> Headway Week 22 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 32: Unit 9 Review & Unit 10 Start</span>
                            <span>23-27 أغسطس</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">23 أغسطس (أحد)</td>
                                    <td className="topic-cell">Unit 9: Vocab have/do/go</td>
                                    <td className="sb-cell">SB p. 88: "Common verbs (2)". Complete exercises. Practice
                                        went/had/did (<span className="text-blue">Ex 4</span>).</td>
                                    <td className="wb-cell">WB p. 56: <span className="text-blue">Ex 12</span> (have/do/go crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">24 أغسطس (اثنين)</td>
                                    <td className="topic-cell">Unit 9: Everyday English</td>
                                    <td className="sb-cell">SB p. 89: "Months and dates". Practice ordinal numbers. Q&A
                                        "When's your birthday?".</td>
                                    <td className="wb-cell">WB p. 56: <span className="text-blue">Ex 13, 14, 15</span> (Months and dates).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">25 أغسطس (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 9: Review</td>
                                    <td className="sb-cell">SB p. 90: Review Grammar Reference (9.1-9.2) and
                                        Wordlist.<br />Activity: Unit 9 Quiz (Past Simple was/were, irregular verbs,
                                        dates).</td>
                                    <td className="wb-cell">WB p. 57: "Don't forget!" (Revision <span className="text-blue">Ex 16</span>-20).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">26 أغسطس (أربعاء)</td>
                                    <td className="topic-cell">Unit 10: Past Simple</td>
                                    <td className="sb-cell">SB p. 91: <span className="text-green">Starter</span> (Holiday selfie).<br />SB p. 92: Grammar:
                                        "Past Simple (regular & irregular)". Listen to Kristin. <span className="text-purple">Grammar Spot</span>
                                        (pronunciation).</td>
                                    <td className="wb-cell">WB p. 58: <span className="text-blue">Ex 1 & 2</span> (Regular verbs & pronunciation /t/ /d/
                                        /id/).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">27 أغسطس (خميس)</td>
                                    <td className="topic-cell">Unit 10: Past Simple Q&A</td>
                                    <td className="sb-cell">SB p. 93: Grammar: "Questions and negatives". Listen to
                                        Kristin & Dave. <span className="text-purple">Grammar Spot</span>. Practice conversation.</td>
                                    <td className="wb-cell">WB p. 59: <span className="text-blue">Ex 5, 6, 7, 8</span> (Reading & Q&A: "Kevin's week").
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 33 (Annual) -> Headway Week 23 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 33: Unit 10: Sport & Leisure</span>
                            <span>30 أغسطس - 3 سبتمبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">30 أغسطس (أحد)</td>
                                    <td className="topic-cell">Unit 10: Practice</td>
                                    <td className="sb-cell">SB p. 94: "Did you have a good weekend?". Complete
                                        questionnaire (<span className="text-blue">Ex 2</span>). Ask teacher & partner (<span className="text-blue">Ex 3, 4</span>).</td>
                                    <td className="wb-cell">WB p. 60: <span className="text-blue">Ex 9</span> (Making conversation).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">31 أغسطس (اثنين)</td>
                                    <td className="topic-cell">Unit 10: Time Expressions</td>
                                    <td className="sb-cell">SB p. 94: Practice "Time expressions" (<span className="text-blue">Ex 5</span>).<br />SB p. 95:
                                        Practice "Making conversation" (<span className="text-blue">Ex 1, 2</span>).</td>
                                    <td className="wb-cell">WB p. 60: <span className="text-blue">Ex 10</span> (Time expressions in/at/on).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">1 سبتمبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 10: Vocab: Sport</td>
                                    <td className="sb-cell">SB p. 96: "Sport and leisure". Match activities to photos.
                                        play/go (<span className="text-blue">Ex 2</span>). Practice Q&A (<span className="text-blue">Ex 3, 4</span>).</td>
                                    <td className="wb-cell">WB p. 61: <span className="text-blue">Ex 11 & 12</span> (Sport and leisure crossword, go/play).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">2 سبتمبر (أربعاء)</td>
                                    <td className="topic-cell">Unit 10: Listening</td>
                                    <td className="sb-cell">SB p. 97: "Gary and Cathy's holidays". Listen & practice.
                                        Practice Q&A about their holidays (<span className="text-blue">Ex 4</span>).</td>
                                    <td className="wb-cell">WB p. 62: <span className="text-blue">Ex 13 & 14</span> (Reading: A holiday in Disneyland).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">3 سبتمبر (خميس)</td>
                                    <td className="topic-cell">Unit 10: Writing</td>
                                    <td className="sb-cell">SB p. 98: Grammar ago.<br />SB p. 98: Writing: "My last
                                        holiday". Write about your last holiday (<span className="text-blue">Ex 4</span>).</td>
                                    <td className="wb-cell">WB p. 63: "Don't forget!" (Revision <span className="text-blue">Ex 16</span>-18).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 34 (Annual) -> Headway Week 24 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 34: Unit 10 Review & Start Unit 11</span>
                            <span>6-10 سبتمبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">6 سبتمبر (أحد)</td>
                                    <td className="topic-cell">Unit 10: Everyday English</td>
                                    <td className="sb-cell">SB p. 99: "Going sightseeing". Match places & signs. Listen
                                        & practice conversations.</td>
                                    <td className="wb-cell">WB p. 63: <span className="text-blue">Ex 15</span> (Going sightseeing).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">7 سبتمبر (اثنين)</td>
                                    <td className="topic-cell">Unit 10: Review</td>
                                    <td className="sb-cell">SB p. 100: Review Grammar Reference (10.1-10.4) &
                                        Wordlist.<br />Activity: Unit 10 Quiz (Past Simple, sport vocab).</td>
                                    <td className="wb-cell">WB p. 63: "Don't forget!" (Revision <span className="text-blue">Ex 16</span>-18).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">8 سبتمبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 11: I can do that!</td>
                                    <td className="sb-cell">SB p. 101: <span className="text-green">Starter</span> (What can you do?).<br />SB p. 102:
                                        Grammar: "can/can't". Match verbs & photos.</td>
                                    <td className="wb-cell">WB p. 64: <span className="text-blue">Ex 1 & 2</span> (can/can't abilities).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">9 سبتمبر (أربعاء)</td>
                                    <td className="topic-cell">Unit 11: Practice</td>
                                    <td className="sb-cell">SB p. 103: Practice Q&A "Can you...?".<br />Pronunciation:
                                        can/can't (weak/strong forms).</td>
                                    <td className="wb-cell">WB p. 65: <span className="text-blue">Ex 3 & 4</span> (Questions and short answers).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">10 سبتمبر (خميس)</td>
                                    <td className="topic-cell">Unit 11: Adverbs</td>
                                    <td className="sb-cell">SB p. 104: Grammar: "Adverbs. "Tilly's computer".<br />Grammar
                                        Spot (regular/irregular adverbs).</td>
                                    <td className="wb-cell">WB p. 66: <span className="text-blue">Ex 5, 6, 7</span> (Adverbs).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 10: Units 11 & 12 (Mid-Term 2) */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 الشهر العاشر: Headway Units 11 & 12 (Term 2)</h2>
                        <span className="month-meta">13 سبتمبر - 8 أكتوبر 2026</span>
                    </div>

                    {/* Week 35 (Annual) -> Headway Week 25 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 35: Mid-Term 2 Exams & Start Unit 11</span>
                            <span>13-17 سبتمبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">13 سبتمبر (أحد)</td>
                                    <td className="topic-cell">Review: Unit 8</td>
                                    <td className="sb-cell">Grammar: There is/are, some/any, Prepositions.<br />Vocab:
                                        Rooms, Furniture. Speaking: Describe your room.</td>
                                    <td className="wb-cell">WB p. 51: "Don't forget!" (Unit 8 Rev.)</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">14 سبتمبر (اثنين)</td>
                                    <td className="topic-cell">Review: Units 9 & 10</td>
                                    <td className="sb-cell">Grammar: was/were, Past Simple
                                        (regular/irregular).<br />Vocab: Dates, have/do/go. Speaking: "What did you do
                                        yesterday?".</td>
                                    <td className="wb-cell">WB p. 57: (Unit 9 Rev.) & p. 63: (Unit 10 Rev.)</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: '#D4AF37' }}>15 سبتمبر (ثلاثاء)</td>
                                    <td className="topic-cell" style={{ borderRight: '3px solid #D4AF37' }}>Mid-Term 2:
                                        Written</td>
                                    <td className="sb-cell">Assessment: Written test covering Grammar & Vocabulary from
                                        Units 8-10.</td>
                                    <td className="wb-cell">Study for Speaking Test.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: '#D4AF37' }}>16 سبتمبر (أربعاء)</td>
                                    <td className="topic-cell" style={{ borderRight: '3px solid #D4AF37' }}>Mid-Term 2:
                                        Speaking</td>
                                    <td className="sb-cell">Assessment: Spoken interviews (pairs). Ask & answer Past
                                        Simple questions.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">17 سبتمبر (خميس)</td>
                                    <td className="topic-cell">Unit 11: can/can't</td>
                                    <td className="sb-cell">SB p. 101: <span className="text-green">Starter</span> (Talk about your abilities).<br />SB p.
                                        102: Grammar: can/can't. Listen & repeat.</td>
                                    <td className="wb-cell">WB p. 64: <span className="text-blue">Ex 1 & 2</span> (Practice can/can't).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 36 (Annual) -> Headway Week 26 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 36: Unit 11 & National Day</span>
                            <span>20-24 سبتمبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">20 سبتمبر (أحد)</td>
                                    <td className="topic-cell">Unit 11: Requests & Offers</td>
                                    <td className="sb-cell">SB p. 105: Grammar: "Requests and offers" (Can I...?, Can
                                        you...?). Practice Q&A (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 66: <span className="text-blue">Ex 7 & 8</span> (Requests and offers).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">21 سبتمبر (اثنين)</td>
                                    <td className="topic-cell">Unit 11: Reading</td>
                                    <td className="sb-cell">SB p. 106: "The smartphone". Read & answer
                                        questions.<br />Vocab: "Verb + noun" (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 67: <span className="text-blue">Ex 9 & 10</span> (Reading: "Meet ASIMO").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">22 سبتمبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 11: Listening</td>
                                    <td className="sb-cell">SB p. 107: Listening: "What do you do on your
                                        smartphone?".<br />Speaking: Practice Q&A (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 67: Reread "ASIMO" and check answers.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: '#ef9a9a' }}>23 سبتمبر (أربعاء)</td>
                                    <td className="topic-cell" style={{ background: 'rgba(198,40,40,0.1)' }}>اليوم الوطني
                                        (National Day)</td>
                                    <td className="details-cell" colSpan="2"
                                        style={{ textAlign: 'center', color: '#ef9a9a', fontWeight: 'bold' }}>
                                        <span className="tag tag-holiday">إجازة (Holiday)</span> اليوم الوطني السعودي
                                        (Saudi National Day).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">24 سبتمبر (خميس)</td>
                                    <td className="topic-cell">Unit 11: Everyday English</td>
                                    <td className="sb-cell">SB p. 109: "Everyday problems". Listen & complete
                                        conversations. Practice with a partner.</td>
                                    <td className="wb-cell">WB p. 68: <span className="text-blue">Ex 12</span> (Everyday problems).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 37 (Annual) -> Headway Week 27 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 37: Unit 11 Review & Start Unit 12</span>
                            <span>27 سبتمبر - 1 أكتوبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">27 سبتمبر (أحد)</td>
                                    <td className="topic-cell">Unit 11: Review</td>
                                    <td className="sb-cell">SB p. 110: Review Grammar Reference (11.1-11.2) and
                                        Wordlist.<br />Activity: Unit 11 Quiz (can/can't, adverbs).</td>
                                    <td className="wb-cell">WB p. 69: "Don't forget!" (Revision <span className="text-blue">Ex 13</span>-16).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">28 سبتمبر (اثنين)</td>
                                    <td className="topic-cell">Unit 12: Thank you</td>
                                    <td className="sb-cell">SB p. 111: <span className="text-green">Starter</span> (Talk about food/drink).<br />SB p. 112:
                                        Vocab: "Places in town". Grammar: would like.</td>
                                    <td className="wb-cell">WB p. 70: <span className="text-blue">Ex 1, 2, 3</span> (Practice some/any).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">29 سبتمبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 12: some/any</td>
                                    <td className="sb-cell">SB p. 112: Grammar: some/any. <span className="text-purple">Grammar Spot</span>.<br />SB p. 113:
                                        Practice: "I'd like...". "Offer food and drink".</td>
                                    <td className="wb-cell">WB p. 71: <span className="text-blue">Ex 4 & 5</span> (I'd like... / Would you like...?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">30 سبتمبر (أربعاء)</td>
                                    <td className="topic-cell">Unit 12: Listening & Speaking</td>
                                    <td className="sb-cell">SB p. 114: Listening: "Birthday wishes".<br />SB p. 115:
                                        Grammar: like vs. would like. Practice.</td>
                                    <td className="wb-cell">WB p. 72: <span className="text-blue">Ex 6 & 7</span> (like vs would like).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">1 أكتوبر (خميس)</td>
                                    <td className="topic-cell">Unit 12: Reading</td>
                                    <td className="sb-cell">SB p. 116: Reading: "Meal times around the world". Answer
                                        questions.</td>
                                    <td className="wb-cell">WB p. 74: <span className="text-blue">Ex 11</span> (Reading: "English food").</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 38 (Annual) -> Headway Week 28 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 38: Unit 12 Continued</span>
                            <span>4-8 أكتوبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">4 أكتوبر (أحد)</td>
                                    <td className="topic-cell">Unit 12: Everyday English</td>
                                    <td className="sb-cell">SB p. 118: "In a café". Listen & complete. Practice the
                                        roleplay (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 73: <span className="text-blue">Ex 8 & 9</span> (Pronunciation & Rhyming)<br />WB p. 73: Ex
                                        10 (Food crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">5 أكتوبر (اثنين)</td>
                                    <td className="topic-cell">Unit 12: Writing</td>
                                    <td className="sb-cell">SB p. 119: Writing: "Write a conversation". Listen & read.
                                        Practice. Write your own conversation.</td>
                                    <td className="wb-cell">WB p. 74: <span className="text-blue">Ex 11</span> (Reading: "English food").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">6 أكتوبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 12: Review</td>
                                    <td className="sb-cell">SB p. 120: Review Grammar Reference (12.1-12.3) and
                                        Wordlist.<br />Activity: Unit 12 Quiz (would like, some/any).</td>
                                    <td className="wb-cell">WB p. 75: "Don't forget!" (Revision <span className="text-blue">Ex 12</span>-15).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">7 أكتوبر (أربعاء)</td>
                                    <td className="topic-cell">Unit 13: What's happening?</td>
                                    <td className="sb-cell">SB p. 121: <span className="text-green">Starter</span> (Look at the picture).<br />SB p. 122:
                                        Vocab: "Colours and Clothes". Listen & repeat.</td>
                                    <td className="wb-cell">WB p. 76: <span className="text-blue">Ex 1 & 2</span> (Colours and clothes crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">8 أكتوبر (خميس)</td>
                                    <td className="topic-cell">Unit 13: Present Continuous</td>
                                    <td className="sb-cell">SB p. 123: Grammar: "Present Continuous". Listen & repeat.
                                        Practice Q&A (What's he/she wearing?).</td>
                                    <td className="wb-cell">WB p. 77: <span className="text-blue">Ex 3 & 4</span> (Present Continuous Q&A).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 11: Final Review */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>🎓 الشهر الحادي عشر: Headway Units 13 & 14 (Final Review)</h2>
                        <span className="month-meta">11 أكتوبر - 5 نوفمبر 2026</span>
                    </div>

                    {/* Week 39 (Annual) -> Headway Week 30 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 39: Unit 13 Grammar & Reading</span>
                            <span>11-15 أكتوبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">11 أكتوبر (أحد)</td>
                                    <td className="topic-cell">Unit 13: Vocab & Grammar</td>
                                    <td className="sb-cell">SB p. 121: <span className="text-green">Starter</span> (Picture).<br />SB p. 122: "Colours and
                                        Clothes".<br />SB p. 123: Grammar: "Present Continuous". Practice Q&A.</td>
                                    <td className="wb-cell">WB p. 76: <span className="text-blue">Ex 1 & 2</span> (Colours and clothes crossword).<br />WB p.
                                        77: <span className="text-blue">Ex 3 & 4</span> (Present Continuous Q&A).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">12 أكتوبر (اثنين)</td>
                                    <td className="topic-cell">Unit 13: Grammar</td>
                                    <td className="sb-cell">SB p. 124: Grammar: "Present Simple and Present Continuous".
                                        <span className="text-purple">Grammar Spot</span>.</td>
                                    <td className="wb-cell">WB p. 78: <span className="text-blue">Ex 5</span> (Negatives) & <span className="text-blue">Ex 6</span> (Present Simple or
                                        Continuous?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">13 أكتوبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 13: Practice</td>
                                    <td className="sb-cell">SB p. 125: Practice: Complete sentences (<span className="text-blue">Ex 3</span>). Q&A (<span className="text-blue">Ex 4</span>).
                                        Check it (<span className="text-blue">Ex 5</span>).</td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 7</span> (Reading: "Today's different").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">14 أكتوبر (أربعاء)</td>
                                    <td className="topic-cell">Unit 13: Reading</td>
                                    <td className="sb-cell">SB p. 126: Reading: "Today's different!". Read & listen.
                                        Answer questions (<span className="text-blue">Ex 2</span>).</td>
                                    <td className="wb-cell">WB p. 79: Reread text and check answers.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">15 أكتوبر (خميس)</td>
                                    <td className="topic-cell">Unit 13: Vocab</td>
                                    <td className="sb-cell">SB p. 128: "Opposite verbs". Listen & complete. Practice.
                                    </td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 8</span> (Opposite verbs).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 40 (Annual) -> Headway Week 31 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 40: Unit 13 Review & Start Unit 14</span>
                            <span>18-22 أكتوبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">18 أكتوبر (أحد)</td>
                                    <td className="topic-cell">Unit 13: Reading & Speaking</td>
                                    <td className="sb-cell">SB p. 126: Reading: "Today's different!". Answer
                                        questions.<br />SB p. 127: Speaking: "Talk about your photo" (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 7</span> (Reading: "Today's different").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">19 أكتوبر (اثنين)</td>
                                    <td className="topic-cell">Unit 13: Vocab</td>
                                    <td className="sb-cell">SB p. 128: "Opposite verbs". Listen & complete. Practice.
                                    </td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 8</span> (Opposite verbs).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">20 أكتوبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 13: Everyday English</td>
                                    <td className="sb-cell">SB p. 129: "What's the matter?". Listen & complete. Practice
                                        conversations.</td>
                                    <td className="wb-cell">WB p. 80: <span className="text-blue">Ex 9 & 10</span> ("What's the matter?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">21 أكتوبر (أربعاء)</td>
                                    <td className="topic-cell">Unit 13: Review</td>
                                    <td className="sb-cell">SB p. 130: Review Grammar Reference (13.1-13.2) and
                                        Wordlist.<br />Activity: Unit 13 Quiz (Pres. Continuous vs. Pres. Simple).
                                    </td>
                                    <td className="wb-cell">WB p. 81: "Don't forget!" (Revision <span className="text-blue">Ex 11</span>-16).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">22 أكتوبر (خميس)</td>
                                    <td className="topic-cell">Unit 14: Let's go!</td>
                                    <td className="sb-cell">SB p. 131: <span className="text-green">Starter</span> (Talk about plans).<br />SB p. 132: Vocab:
                                        "Forms of transport". Grammar: "Future plans - going to".</td>
                                    <td className="wb-cell">WB p. 82: <span className="text-blue">Ex 1, 2, 3</span> (Future plans going to).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 41 (Annual) -> Headway Week 32 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 41: Unit 14 Continued</span>
                            <span>25-29 أكتوبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">25 أكتوبر (أحد)</td>
                                    <td className="topic-cell">Unit 14: Future Plans</td>
                                    <td className="sb-cell">SB p. 131: <span className="text-green">Starter</span>.<br />SB p. 132: Vocab: "Forms of
                                        transport". Grammar: going to, Present Continuous.</td>
                                    <td className="wb-cell">WB p. 82: <span className="text-blue">Ex 1, 2, 3</span> (Future plans going to).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">26 أكتوبر (اثنين)</td>
                                    <td className="topic-cell">Unit 14: Listening</td>
                                    <td className="sb-cell">SB p. 133: Listening: "Ready, steady, go". Answer questions.
                                    </td>
                                    <td className="wb-cell">WB p. 83: <span className="text-blue">Ex 4</span> (What are you doing tomorrow?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">27 أكتوبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 14: Speaking</td>
                                    <td className="sb-cell">SB p. 134: Practice Q&A Are you going to...?. "Talk about
                                        your future plans" (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 84: <span className="text-blue">Ex 5</span> (Grammar revision - All tenses).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">28 أكتوبر (أربعاء)</td>
                                    <td className="topic-cell">Unit 14: Reading</td>
                                    <td className="sb-cell">SB p. 136: Reading: "Life's big events". Read & listen.
                                        Answer questions.</td>
                                    <td className="wb-cell">WB p. 85: <span className="text-blue">Ex 7</span> (Vocabulary lists).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">29 أكتوبر (خميس)</td>
                                    <td className="topic-cell">Unit 14: Speaking & Writing</td>
                                    <td className="sb-cell">SB p. 137: Speaking: "Talk about your past, present and
                                        future".<br />SB p. 137: Writing: "Write sentences about your life" (<span className="text-blue">Ex 3</span>).
                                    </td>
                                    <td className="wb-cell">WB p. 86: <span className="text-blue">Ex 9</span> (Form filling).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 42 (Annual) -> Headway Week 33 (Modified) */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>الأسبوع 42: Unit 14 Finish & Final Review</span>
                            <span>1-5 نوفمبر</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>اليوم / التاريخ</th>
                                    <th>موضوع الدرس (Lesson Focus)</th>
                                    <th>كتاب الطالب (Class Activities)</th>
                                    <th>كتاب التمارين (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">1 نوفمبر (أحد)</td>
                                    <td className="topic-cell">Unit 14: Grammar Revision</td>
                                    <td className="sb-cell">SB p. 138: "Grammar revision" (<span className="text-blue">Ex 1 & 2</span>).<br />SB p. 139:
                                        "Vocabulary revision" (<span className="text-blue">Ex 1 & 2</span>).</td>
                                    <td className="wb-cell">WB p. 86: <span className="text-blue">Ex 9</span> (Form filling).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">2 نوفمبر (اثنين)</td>
                                    <td className="topic-cell">Unit 14: Everyday English</td>
                                    <td className="sb-cell">SB p. 139: "Social expressions (2)". Listen & complete.
                                        Practice.</td>
                                    <td className="wb-cell">WB p. 87: <span className="text-blue">Ex 10</span> (Social expressions 2).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">3 نوفمبر (ثلاثاء)</td>
                                    <td className="topic-cell">Unit 14: Review</td>
                                    <td className="sb-cell">SB p. 140: Review Grammar Reference (14.1-14.2) and
                                        Wordlist.<br />Activity: Unit 14 Quiz (going to, future plans).</td>
                                    <td className="wb-cell">WB p. 87: "Don't forget!" (Revision <span className="text-blue">Ex 11 & 12</span>).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">4 نوفمبر (أربعاء)</td>
                                    <td className="topic-cell">General Revision</td>
                                    <td className="sb-cell">Final General Revision (Units 1-14). focus on Grammar &
                                        Vocabulary.</td>
                                    <td className="wb-cell">Study for Final Exams.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">5 نوفمبر (خميس)</td>
                                    <td className="topic-cell">Final Revision & Exams</td>
                                    <td className="sb-cell">Final Revision Session / Preparation for Written Exam.</td>
                                    <td className="wb-cell">Good Luck!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="page-footer no-print">
                    <p>قسم اللغة الإنجليزية - معهد بلاك جولد العالي للتدريب</p>
                    <p>&copy; 2026</p>
                </div>
            </article>


        </div >
    );
}