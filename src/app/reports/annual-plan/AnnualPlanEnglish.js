'use client';
import React from 'react';
import Link from 'next/link';
import './annual-plan.css';

export default function AnnualPlanEnglish() {
    return (
        <div className="annual-plan-page">
            <article className="article-container">
                <Link href="/reports" className="back-nav"><span>←</span> Back to Reports</Link>



                <header className="schedule-header">
                    <h1>Comprehensive Annual Plan 2026</h1>
                    <p className="subtitle">Intensive English Program | Foundation (Phonics) + New Headway</p>
                    <p className="date-range">January 4, 2026 — November 5, 2026</p>

                    <div className="meta-grid">
                        <div className="meta-item">
                            <div className="number">11 Months</div>
                            <div className="label">Total Duration</div>
                        </div>
                        <div className="meta-item">
                            <div className="number">M 1-2</div>
                            <div className="label">Foundation</div>
                        </div>
                        <div className="meta-item">
                            <div className="number">M 3-11</div>
                            <div className="label">New Headway</div>
                        </div>
                        <div className="meta-item">
                            <div className="number">Saudi</div>
                            <div className="label">Calendar</div>
                        </div>
                    </div>
                </header>

                <div className="actions no-print">
                    <button onClick={() => window.print()} className="btn-print">🖨️ Print Full Plan</button>
                </div>

                {/* Month 1: Foundation (Phonics Focus) */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>🌱 Month 1: Foundation (Phonics & Basics)</h2>
                        <span className="month-meta">Jan 4 - Jan 29, 2026</span>
                    </div>

                    {/* Week 1 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 1: Sounds (Aa - Ee) & Numbers</span>
                            <span>Jan 4 - 8</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jan 4 (Sun)</td>
                                    <td className="topic-cell">Phonics: Aa (Sound /æ/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> Sound
                                        recognition (Apple, Ant). Writing Aa.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 5 (Mon)</td>
                                    <td className="topic-cell">Phonics: Bb & Cc (Sounds /b/, /k/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Ball, Bat,
                                        Cat, Cup). Auditory discrimination.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 6 (Tue)</td>
                                    <td className="topic-cell">Phonics: Dd & Ee (Sounds /d/, /e/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Dog, Egg).
                                        Short E sound.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 7 (Wed)</td>
                                    <td className="topic-cell">Numbers 1-10</td>
                                    <td className="details-cell"><span className="tag tag-vocab">Numbers</span> Counting &
                                        Writing (One...Ten).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 8 (Thu)</td>
                                    <td className="topic-cell">Review & Blending 1</td>
                                    <td className="details-cell"><span className="tag tag-skills">Reading</span> Blending CVC
                                        words (e.g., Dad, Bad).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 2 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 2: Sounds (Ff - Jj) & Greetings</span>
                            <span>Jan 11 - 15</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jan 11 (Sun)</td>
                                    <td className="topic-cell">Phonics: Ff & Gg (Sounds /f/, /g/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Fish, Fan,
                                        Goat, Gift).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 12 (Mon)</td>
                                    <td className="topic-cell">Phonics: Hh & Ii (Sounds /h/, /i/)</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Hat, Hen,
                                        Ink, Igloo). Short I sound.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 13 (Tue)</td>
                                    <td className="topic-cell">Phonics: Jj (Sound /dʒ/) & Greetings</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Jam, Jet).
                                        Basic Greetings (Hello).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 14 (Wed)</td>
                                    <td className="topic-cell">Blending & Reading 2</td>
                                    <td className="details-cell"><span className="tag tag-skills">Reading</span> Reading words
                                        (Big, Dig, Fig).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 15 (Thu)</td>
                                    <td className="topic-cell">Phonics Game</td>
                                    <td className="details-cell"><span className="tag tag-review">Activity</span> Sound-Picture
                                        Matching.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 3 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 3: Sounds (Kk - Tt) & Colors</span>
                            <span>Jan 18 - 22</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jan 18 (Sun)</td>
                                    <td className="topic-cell">Phonics: Kk - Nn</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Kite, Lamp,
                                        Moon, Net).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 19 (Mon)</td>
                                    <td className="topic-cell">Phonics: Oo - Tt & Blending</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Orange, Pen,
                                        Queen, Rat, Sun, Top). Reading (Pot, Hot).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 20 (Tue)</td>
                                    <td className="topic-cell">Colors</td>
                                    <td className="details-cell"><span className="tag tag-vocab">Vocab</span> Red, Blue,
                                        Green... Object association.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 21 (Wed)</td>
                                    <td className="topic-cell">Numbers 11-20</td>
                                    <td className="details-cell"><span className="tag tag-vocab">Numbers</span> Eleven...
                                        Twenty.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 22 (Thu)</td>
                                    <td className="topic-cell">Reading Simple Sentences</td>
                                    <td className="details-cell"><span className="tag tag-skills">Reading</span> "The cat is on
                                        the mat."</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 4 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 4: Final Sounds & Sentences</span>
                            <span>Jan 25 - 29</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jan 25 (Sun)</td>
                                    <td className="topic-cell">Phonics: Uu - Zz</td>
                                    <td className="details-cell"><span className="tag tag-phonics">Phonics</span> (Up, Van, Web,
                                        Box, Yo-yo, Zebra).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 26 (Mon)</td>
                                    <td className="topic-cell">Verb "To Be" (I am / He is)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> Basic
                                        sentences.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 27 (Tue)</td>
                                    <td className="topic-cell">Days of the Week</td>
                                    <td className="details-cell"><span className="tag tag-vocab">Vocab</span> Sunday, Monday...
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 28 (Wed)</td>
                                    <td className="topic-cell">Comprehensive Phonics Review</td>
                                    <td className="details-cell"><span className="tag tag-review">Review</span> Mastering all
                                        basic sounds.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jan 29 (Thu)</td>
                                    <td className="topic-cell">Reading Test</td>
                                    <td className="details-cell"><span className="tag tag-review">Assessment</span> Reading
                                        simple words and sentences.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 2: Foundation (Grammar & Structures) */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>🧱 Month 2: Grammar Basics</h2>
                        <span className="month-meta">Feb 1 - Mar 5, 2026</span>
                    </div>

                    {/* Week 5 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 5: Family & Possession</span>
                            <span>Feb 1 - 5</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">Feb 1 (Sun)</td>
                                    <td className="topic-cell">Family Members</td>
                                    <td className="details-cell"><span className="tag tag-vocab">Vocab</span> Father, Mother...
                                        Reading words.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 2 (Mon)</td>
                                    <td className="topic-cell">Possessive 's</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> Ali's pen.
                                        Sara's bag.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 3 (Tue)</td>
                                    <td className="topic-cell">Family Tree Activity</td>
                                    <td className="details-cell"><span className="tag tag-review">Activity</span> Draw & Label
                                        your family tree.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 4 (Wed)</td>
                                    <td className="topic-cell">Asking about People (Who is this?)</td>
                                    <td className="details-cell"><span className="tag tag-skills">Speaking</span> Q: Who is he?
                                        A: He is my brother.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 5 (Thu)</td>
                                    <td className="topic-cell">Review & Quiz</td>
                                    <td className="details-cell"><span className="tag tag-review">Assessment</span> Family
                                        vocabulary & Possessive 's.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 6 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 6: Verbs & Imperatives</span>
                            <span>Feb 8 - 12</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">Feb 8 (Sun)</td>
                                    <td className="topic-cell">Common Verbs</td>
                                    <td className="details-cell"><span className="tag tag-vocab">Vocab</span> Walk, Run, Eat,
                                        Drink, Sleep.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 9 (Mon)</td>
                                    <td className="topic-cell">Imperatives</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> Stand up, Sit
                                        down, Open your book.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 10 (Tue)</td>
                                    <td className="topic-cell">Can / Can't (Ability)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> I can swim. I
                                        can't fly.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 11 (Wed)</td>
                                    <td className="topic-cell">Can (Requests)</td>
                                    <td className="details-cell"><span className="tag tag-skills">Speaking</span> Can I help
                                        you? Can I have water?</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 12 (Thu)</td>
                                    <td className="topic-cell">Action Game</td>
                                    <td className="details-cell"><span className="tag tag-review">Activity</span> Simon Says
                                        (using imperatives).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 7 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 7: Plurals & Demonstratives</span>
                            <span>Feb 15 - 19</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell">Feb 15 (Sun)</td>
                                    <td className="topic-cell">Regular Plurals</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> Book/Books,
                                        Box/Boxes (s/es).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 16 (Mon)</td>
                                    <td className="topic-cell">Irregular Plurals</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> Man/Men,
                                        Child/Children, Tooth/Teeth.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 17 (Tue)</td>
                                    <td className="topic-cell">This / That (Singular)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> This is a pen.
                                        That is a star.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 18 (Wed)</td>
                                    <td className="topic-cell">These / Those (Plural)</td>
                                    <td className="details-cell"><span className="tag tag-grammar">Grammar</span> These are
                                        books. Those are birds.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 19 (Thu)</td>
                                    <td className="topic-cell">Grammar Quiz</td>
                                    <td className="details-cell"><span className="tag tag-review">Assessment</span> Plurals &
                                        Demonstratives.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 8 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 8: Foundation Review</span>
                            <span>Feb 22 - 26</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell" style={{ color: "#ef9a9a" }}>Feb 22 (Sun)</td>
                                    <td className="topic-cell" style={{ background: "rgba(198,40,40,0.1)" }}>Founding Day Holiday
                                    </td>
                                    <td className="details-cell"><span className="tag tag-holiday">Holiday</span> Official
                                        Holiday.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 23 (Mon)</td>
                                    <td className="topic-cell">General Review 1</td>
                                    <td className="details-cell"><span className="tag tag-review">Review</span> Sound/Letter
                                        Recap & Numbers.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 24 (Tue)</td>
                                    <td className="topic-cell">General Review 2</td>
                                    <td className="details-cell"><span className="tag tag-review">Review</span> Verb to be,
                                        Have/Has, Can.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 25 (Wed)</td>
                                    <td className="topic-cell">Oral Assessment</td>
                                    <td className="details-cell"><span className="tag tag-review">Assessment</span> Introduce
                                        yourself & Describe pictures.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Feb 26 (Thu)</td>
                                    <td className="topic-cell">Foundation Final Exam</td>
                                    <td className="details-cell"><span className="tag tag-review">Assessment</span> Foundation
                                        Level Final Exam.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 3: Headway Start (Detailed) */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 Month 3: Start of New Headway (Units 1 & 2)</h2>
                        <span className="month-meta">Mar 1 - Mar 26, 2026 | Ramadan / Eid al-Fitr</span>
                    </div>

                    {/* Week 9 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 9: Unit 1 (Hello) - Basics</span>
                            <span>Mar 1 - 5</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Mar 1 (Sun)</td>
                                    <td className="topic-cell">Introductions: am/is, my/your</td>
                                    <td className="sb-cell"><span className="text-gold">p.8:</span> <span className="text-green">Starter</span>. Read & listen "I'm Serena". <span className="text-purple">Grammar Spot</span> (I'm).
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.4:</span> <span className="text-blue">Ex 1 & 2</span> (Conversations).<br /><span className="text-gold">p.5:</span> <span className="text-blue">Ex 4</span> (Names).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 2 (Mon)</td>
                                    <td className="topic-cell">Meeting People: "Nice to meet you"</td>
                                    <td className="sb-cell"><span className="text-gold">p.9:</span> "This is Carlos". Practise in groups.</td>
                                    <td className="wb-cell"><span className="text-gold">p.5:</span> <span className="text-blue">Ex 3</span> ("Nice to meet you").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 3 (Tue)</td>
                                    <td className="topic-cell">Greetings: "How are you?"</td>
                                    <td className="sb-cell"><span className="text-gold">p.10:</span> "How are you?". <span className="text-purple">Grammar Spot</span> ('m, is, are).<br /><span className="text-gold">p.11:</span> "Good
                                        morning!".</td>
                                    <td className="wb-cell"><span className="text-gold">p.5:</span> <span className="text-blue">Ex 5</span> (Order conversation).<br /><span className="text-gold">p.8:</span> <span className="text-blue">Ex 11 & 12</span>.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 4 (Wed)</td>
                                    <td className="topic-cell">Vocabulary: Everyday Objects, a/an</td>
                                    <td className="sb-cell"><span className="text-gold">p.12:</span> Match words & pictures (book, apple...). <span className="text-purple">Grammar Spot</span>
                                        (a/an).</td>
                                    <td className="wb-cell"><span className="text-gold">p.6:</span> <span className="text-blue">Ex 6</span> (Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 5 (Thu)</td>
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
                            <span>Week 10: Unit 1 Review & Unit 2 Start</span>
                            <span>Mar 8 - 12</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Mar 8 (Sun)</td>
                                    <td className="topic-cell">Unit 1 Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.14:</span> Review Grammar Reference (1.1-1.5). Review
                                        Wordlist.<br />Quiz: Objects, Plurals, Greetings.</td>
                                    <td className="wb-cell"><span className="text-gold">p.9:</span> "Don't forget!" (Revision 13-17).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 9 (Mon)</td>
                                    <td className="topic-cell">Unit 2: Countries</td>
                                    <td className="sb-cell"><span className="text-gold">p.15:</span> <span className="text-green">Starter</span> (Earth & Moon).<br /><span className="text-gold">p.16:</span> Countries map, listen &
                                        repeat.</td>
                                    <td className="wb-cell"><span className="text-gold">p.10:</span> <span className="text-blue">Ex 1 & 2</span> (Countries crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 10 (Tue)</td>
                                    <td className="topic-cell">Grammar: He/She, His/Her</td>
                                    <td className="sb-cell"><span className="text-gold">p.16:</span> Read & Listen (Antonio/Nuwa). <span className="text-purple">Grammar Spot</span>.<br />Practice
                                        sentences.</td>
                                    <td className="wb-cell"><span className="text-gold">p.11:</span> <span className="text-blue">Ex 3, 4, 5, 6</span> (Practice pronouns).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 11 (Wed)</td>
                                    <td className="topic-cell">Grammar: Where's he/she from?</td>
                                    <td className="sb-cell"><span className="text-gold">p.17:</span> Listen & repeat questions. Ask & answer (Map
                                        photos).<br /><span className="text-purple">Grammar Spot</span> ("Where's").</td>
                                    <td className="wb-cell"><span className="text-gold">p.12:</span> <span className="text-blue">Ex 8</span> (Listening) & <span className="text-blue">Ex 9</span> (Match Q&A).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 12 (Thu)</td>
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
                            <span>Week 11: Unit 2 (Continued) & Reading</span>
                            <span>Mar 15 - 19</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Mar 15 (Sun)</td>
                                    <td className="topic-cell">Practice: Questions & Answers</td>
                                    <td className="sb-cell"><span className="text-gold">p.18:</span> "Talking about you" (Ask students).<br /><span className="text-gold">p.19:</span> Practice Q&A
                                        (<span className="text-blue">Ex 4, 6</span>) & Check it.</td>
                                    <td className="wb-cell"><span className="text-gold">p.12:</span> <span className="text-blue">Ex 9</span> (Match) & <span className="text-blue">Ex 10</span> (Adjectives).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 16 (Mon)</td>
                                    <td className="topic-cell">Reading: Holiday in New York</td>
                                    <td className="sb-cell"><span className="text-gold">p.20:</span> Read & Listen. Answer Qs.<br />Vocab: Adjectives (awful,
                                        amazing).</td>
                                    <td className="wb-cell"><span className="text-gold">p.13:</span> <span className="text-blue">Ex 11 & 12</span> (Reading: Where are they?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 17 (Tue)</td>
                                    <td className="topic-cell">Everyday English: Numbers 11-30</td>
                                    <td className="sb-cell"><span className="text-gold">p.21:</span> Numbers 11-30. Listen & tick.<br />Practice writing numbers.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.14:</span> <span className="text-blue">Ex 15 & 16</span> (Writing numbers).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: "#ef9a9a" }}>Mar 18 (Wed)</td>
                                    <td className="topic-cell">Practice: "How old is...?"</td>
                                    <td className="sb-cell"><span className="text-gold">p.21:</span> <span className="text-blue">Ex 7</span> ("How old is she?").<br /><span className="text-gold">p.22:</span> Review Grammar Ref
                                        (2.1-2.3).</td>
                                    <td className="wb-cell" style={{ color: "#ef9a9a" }}>Eid al-Fitr Vacation (Starts).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: "#ef9a9a" }}>Mar 19 (Thu)</td>
                                    <td className="topic-cell">Unit 2 Review (Consolidation)</td>
                                    <td className="sb-cell">Speaking games ("Guess the person").<br />Review Unit 2 Questions.
                                    </td>
                                    <td className="wb-cell" style={{ color: "#ef9a9a" }}>Eid al-Fitr Vacation (Cont).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Week 12: Eid Vacation */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 12: Eid al-Fitr Vacation</span>
                            <span>Mar 22 - 26</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Event</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell" style={{ color: "#ef9a9a" }}>Mar 22-26</td>
                                    <td className="topic-cell" style={{ background: "rgba(198,40,40,0.1)" }}>Eid al-Fitr Vacation
                                    </td>
                                    <td className="details-cell" style={{ textAlign: "center", color: "#ef9a9a" }}>Happy Eid!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 4: Units 3 & 4 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 Month 4: New Headway - Units 3 & 4</h2>
                        <span className="month-meta">Mar 29 - Apr 23, 2026 | Post-Eid Classes</span>
                    </div>

                    {/* Week 13 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 13: Unit 3 (Jobs) & Negatives</span>
                            <span>Mar 29 - Apr 2</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Mar 29 (Sun)</td>
                                    <td className="topic-cell">Unit 3: Jobs</td>
                                    <td className="sb-cell"><span className="text-gold">p.23:</span> <span className="text-green">Starter</span> (Personal Info).<br /><span className="text-gold">p.24:</span> Match jobs & photos. Q&A
                                        ("What's his job?").</td>
                                    <td className="wb-cell"><span className="text-gold">p.16:</span> <span className="text-blue">Ex 1</span> (Jobs crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 30 (Mon)</td>
                                    <td className="topic-cell">Grammar: Negatives (he/she isn't)</td>
                                    <td className="sb-cell"><span className="text-gold">p.25:</span> "He isn't a teacher". <span className="text-purple">Grammar Spot</span>.<br />Practice positive &
                                        negative.</td>
                                    <td className="wb-cell"><span className="text-gold">p.16:</span> <span className="text-blue">Ex 2</span> (Practice is/isn't).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Mar 31 (Tue)</td>
                                    <td className="topic-cell">Grammar: Questions & Answers</td>
                                    <td className="sb-cell"><span className="text-gold">p.25:</span> Adam's ID card. Practice Q&A.<br />Is he from...? Yes/No.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.17:</span> <span className="text-blue">Ex 3, 4, 5, 6</span> (Questions about Paul).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 1 (Wed)</td>
                                    <td className="topic-cell">Grammar: Negatives (I'm not, they aren't)</td>
                                    <td className="sb-cell"><span className="text-gold">p.26:</span> Scottish Rovers interview. <span className="text-purple">Grammar Spot</span>.<br />Short answers
                                        practice.</td>
                                    <td className="wb-cell"><span className="text-gold">p.18:</span> <span className="text-blue">Ex 7 & 8</span> (Practice I'm not/they aren't).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 2 (Thu)</td>
                                    <td className="topic-cell">Practice: "Talking about you"</td>
                                    <td className="sb-cell"><span className="text-gold">p.26:</span> Pair work Q&A.<br /><span className="text-gold">p.27:</span> Diego & Isabella's info.</td>
                                    <td className="wb-cell"><span className="text-gold">p.19:</span> <span className="text-blue">Ex 10 & 11</span> (Listening - Ella).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 14 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 14: Unit 3 Review & Unit 4 Start</span>
                            <span>Apr 5 - 9</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Apr 5 (Sun)</td>
                                    <td className="topic-cell">Unit 3: Reading</td>
                                    <td className="sb-cell"><span className="text-gold">p.28:</span> "We're in Paris!". Read & Answer.<br />Correct info (<span className="text-blue">Ex 3</span>).
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.19:</span> <span className="text-blue">Ex 12</span> (Vocabulary Revision).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 6 (Mon)</td>
                                    <td className="topic-cell">Unknown (Check Source)</td>
                                    <td className="sb-cell"><span className="text-gold">p.28:</span> Roleplay (<span className="text-blue">Ex 6</span>).<br /><span className="text-gold">p.29:</span> Social expressions (1).</td>
                                    <td className="wb-cell"><span className="text-gold">p.20:</span> <span className="text-blue">Ex 13</span> (Social expressions).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 7 (Tue)</td>
                                    <td className="topic-cell">Unit 3: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.30:</span> Review Grammar Ref (3.1-3.2) & Wordlist.<br />Unit 3 Quiz.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.21:</span> "Don't forget!" (Revision <span className="text-blue">Ex 14</span>-16).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 8 (Wed)</td>
                                    <td className="topic-cell">Unit 4: The Family</td>
                                    <td className="sb-cell"><span className="text-gold">p.31:</span> <span className="text-green">Starter</span> (Family tree).<br /><span className="text-gold">p.32:</span> Grammar: "Possessive
                                        adjectives/ 's".</td>
                                    <td className="wb-cell"><span className="text-gold">p.22:</span> <span className="text-blue">Ex 1</span> (Possessive 's).<br /><span className="text-gold">p.23:</span> <span className="text-blue">Ex 2</span> (Possessive
                                        adjectives).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 9 (Thu)</td>
                                    <td className="topic-cell">Unit 4: Vocabulary</td>
                                    <td className="sb-cell"><span className="text-gold">p.33:</span> Vocab: "Who are they?". Listen & complete.<br />Practice Q&A
                                        (<span className="text-blue">Ex 5</span>).</td>
                                    <td className="wb-cell"><span className="text-gold">p.23:</span> <span className="text-blue">Ex 3</span> (Family tree crossword).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 15 (Annual) -> Headway Week 6 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 15: Unit 4 (Practice) & The Alphabet</span>
                            <span>Apr 12 - 16</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Apr 12 (Sun)</td>
                                    <td className="topic-cell">Unit 4: Practice</td>
                                    <td className="sb-cell"><span className="text-gold">p.33:</span> Listening "An Australian family".<br /><span className="text-gold">p.34:</span> "Talking about
                                        you" (Family Q&A).</td>
                                    <td className="wb-cell"><span className="text-gold">p.24:</span> <span className="text-blue">Ex 5 & 6</span> (Listening - Alfie).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 13 (Mon)</td>
                                    <td className="topic-cell">Grammar: have/has</td>
                                    <td className="sb-cell"><span className="text-gold">p.35:</span> Common verbs (have/has, love, like).<br />Read about the
                                        Beckhams.</td>
                                    <td className="wb-cell"><span className="text-gold">p.24:</span> <span className="text-blue">Ex 4</span> (Practice has/have).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 14 (Tue)</td>
                                    <td className="topic-cell">Practice: have/has</td>
                                    <td className="sb-cell"><span className="text-gold">p.35:</span> <span className="text-purple">Grammar Spot</span>. Practice sentences.<br /><span className="text-gold">p.36:</span> Complete
                                        sentences & Check it.</td>
                                    <td className="wb-cell"><span className="text-gold">p.25:</span> <span className="text-blue">Ex 8</span> (Reading: "Who's happy?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 15 (Wed)</td>
                                    <td className="topic-cell">Reading & Writing</td>
                                    <td className="sb-cell"><span className="text-gold">p.36-37:</span> Reading "My e-pal". Answer Qs.<br /><span className="text-gold">p.37:</span> Writing: "Write
                                        about a friend".</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 9</span> (Vocabulary Revision).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 16 (Thu)</td>
                                    <td className="topic-cell">Unit 4: Vocabulary: The Alphabet</td>
                                    <td className="sb-cell"><span className="text-gold">p.38:</span> Listen & practice alphabet.<br />Spelling names & countries
                                        (<span className="text-blue">Ex 6</span>).</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 11</span> (The Alphabet).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 16 (Annual) -> Headway Week 7 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 16: Everyday English & Unit 5 Start</span>
                            <span>Apr 19 - 23</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Apr 19 (Sun)</td>
                                    <td className="topic-cell">Unit 4: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.39:</span> "On the phone". Practice email addresses.<br />Roleplay
                                        phone calls.</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 12</span> ("On the phone").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 20 (Mon)</td>
                                    <td className="topic-cell">Unit 4: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.40:</span> Review Grammar Ref & Wordlist.<br />Unit 4 Quiz (Family,
                                        Possessives).</td>
                                    <td className="wb-cell"><span className="text-gold">p.27:</span> "Don't forget!" (Revision 13-17).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 21 (Tue)</td>
                                    <td className="topic-cell">Unit 5: Likes & Dislikes</td>
                                    <td className="sb-cell"><span className="text-gold">p.41:</span> <span className="text-green">Starter</span>. <span className="text-gold">p.42:</span> Vocab (Food, Drinks).<br />Practice "I
                                        like...".</td>
                                    <td className="wb-cell"><span className="text-gold">p.28:</span> <span className="text-blue">Ex 1</span> (Crossword). <span className="text-gold">p.29:</span> <span className="text-blue">Ex 2</span>.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 22 (Wed)</td>
                                    <td className="topic-cell">Unit 5: Present Simple</td>
                                    <td className="sb-cell"><span className="text-gold">p.43:</span> Present Simple pos/neg (I like/don't like).<br />Listen to
                                        Dexter.</td>
                                    <td className="wb-cell"><span className="text-gold">p.30:</span> <span className="text-blue">Ex 4 & 7</span> (Reading: Michael Phelps).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 23 (Thu)</td>
                                    <td className="topic-cell">Unit 5: Grammar Questions</td>
                                    <td className="sb-cell"><span className="text-gold">p.43:</span> Questions (Do you like...?).<br />Listen to Daisy & Dexter.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.29:</span> <span className="text-blue">Ex 3</span> (Do you like...?).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 5: Units 5 & 6 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 Month 5: Consolidation & Mid-Term</h2>
                        <span className="month-meta">Apr 26 - May 21, 2026</span>
                    </div>
                    {/* Week 17 (Annual) -> Headway Week 8 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 17: Unit 4 Consolidation & Review</span>
                            <span>Apr 26 - 30</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Apr 26 (Sun)</td>
                                    <td className="topic-cell">Unit 4: The Alphabet</td>
                                    <td className="sb-cell"><span className="text-gold">p.38:</span> Listen & practice alphabet.<br />Spelling names & countries.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 11</span> (The Alphabet).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 27 (Mon)</td>
                                    <td className="topic-cell">Unit 4: Everyday English</td>
                                    <td className="sb-cell"><span className="text-gold">p.39:</span> "On the phone". Practice email addresses.<br />Roleplay (Ex
                                        8).</td>
                                    <td className="wb-cell"><span className="text-gold">p.26:</span> <span className="text-blue">Ex 12</span> ("On the phone").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 28 (Tue)</td>
                                    <td className="topic-cell">Unit 4: Review</td>
                                    <td className="sb-cell"><span className="text-gold">p.40:</span> Review Grammar Ref. Spelling bee.</td>
                                    <td className="wb-cell"><span className="text-gold">p.27:</span> "Don't forget!" (Revision 13-17).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 29 (Wed)</td>
                                    <td className="topic-cell">Unit 4: Consolidation</td>
                                    <td className="sb-cell">Reread "My e-pal" & "Beckhams".<br />Describe family and friends.
                                    </td>
                                    <td className="wb-cell"><span className="text-gold">p.25:</span> <span className="text-blue">Ex 8</span> (Reading: "Who's happy?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Apr 30 (Thu)</td>
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
                            <span>Week 18: Mid-Term Review & Exams</span>
                            <span>May 3 - 7</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">May 3 (Sun)</td>
                                    <td className="topic-cell">Review: Units 1-2</td>
                                    <td className="sb-cell">Grammar: am/is/are, my/your.<br />Vocab: Countries, Objects.</td>
                                    <td className="wb-cell"><span className="text-gold">p.9</span> & 15: "Don't forget!" (Unit 1 & 2).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 4 (Mon)</td>
                                    <td className="topic-cell">Review: Units 3-4</td>
                                    <td className="sb-cell">Grammar: Negatives, Possessives.<br />Vocab: Jobs, Family.</td>
                                    <td className="wb-cell"><span className="text-gold">p.21</span> & 27: "Don't forget!" (Unit 3 & 4).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: "#D4AF37" }}>May 5 (Tue)</td>
                                    <td className="topic-cell" style={{ borderLeft: "3px solid #D4AF37" }}>Mid-Term 1: Written
                                    </td>
                                    <td className="sb-cell">Assessment: Written test covering Units 1-4.</td>
                                    <td className="wb-cell">Study for Speaking Test.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: "#D4AF37" }}>May 6 (Wed)</td>
                                    <td className="topic-cell" style={{ borderLeft: "3px solid #D4AF37" }}>Mid-Term 1: Speaking
                                    </td>
                                    <td className="sb-cell">Assessment: Spoken interviews (Units 1-4).</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 7 (Thu)</td>
                                    <td className="topic-cell">Unit 5: Likes & Dislikes (Start)</td>
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
                            <span>Week 19: Unit 5: Reading & Vocabulary</span>
                            <span>May 10 - 14</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">May 10 (Sun)</td>
                                    <td className="topic-cell">Unit 5: Reading "Alek's life"</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.44:</span> Read about Alek Brosko. Check answers.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.30:</span> <span className="text-blue">Ex 4, 5, 6, 7</span> (Reading: Michael Phelps).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 11 (Mon)</td>
                                    <td className="topic-cell">Unit 5: Practice Present Simple</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.45:</span> Listen & complete conversation with Alek.<br />Practice
                                        Q&A.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.31:</span> <span className="text-blue">Ex 8, 9, 10</span> (Listening: Gracie).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 12 (Tue)</td>
                                    <td className="topic-cell">Unit 5: Listening & Speaking</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.45:</span> Listening: "Where is Alek?".<br />Practice "Talking about
                                        you".</td>
                                    <td className="wb-cell">Review SB <span className="text-gold">p.45</span> exercises.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 13 (Wed)</td>
                                    <td className="topic-cell">Unit 5: Vocab: Languages</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.46:</span> Match countries & nationalities.<br />Listen & repeat (Ex
                                        3).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.31:</span> <span className="text-blue">Ex 11 & 12</span> (Languages).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 14 (Thu)</td>
                                    <td className="topic-cell">Unit 5: Vocab: Adjective + noun</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.47:</span> "Adjective + noun". Complete sentences.<br />Grammar
                                        Spot.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.32:</span> <span className="text-blue">Ex 16</span> (Listening - Prices).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 20 (Annual) -> Headway Week 11 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 20: Unit 5: Listening, Speaking & Prices</span>
                            <span>May 17 - 21</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">May 17 (Sun)</td>
                                    <td className="topic-cell">Unit 5: Listening</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.48:</span> "Party time". Listen to Daniel & Tam.<br />Practice
                                        conversation.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.31:</span> <span className="text-blue">Ex 8, 9, 10</span> (Listening).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 18 (Mon)</td>
                                    <td className="topic-cell">Unit 5: Speaking Roleplay</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.48:</span> Roleplay "You meet at a party" (<span className="text-blue">Ex 3</span>).<br />New identity
                                        Q&A.</td>
                                    <td className="wb-cell">Review vocabulary for "Party time".</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 19 (Tue)</td>
                                    <td className="topic-cell">Unit 5: Everyday English</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.49:</span> "How much is it?". Numbers 10-100.<br />Practice prices.
                                    </td>
                                    <td className="wb-cell">WB <span className="text-gold">p.32:</span> <span className="text-blue">Ex 13 & 14</span> (Numbers and prices).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 20 (Wed)</td>
                                    <td className="topic-cell">Unit 5: Practice with Prices</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.49:</span> Listen and tick prices (<span className="text-blue">Ex 6</span>).<br />Ask & answer about
                                        photos.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.32:</span> <span className="text-blue">Ex 15 & 16</span> (Listening to prices).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">May 21 (Thu)</td>
                                    <td className="topic-cell">Unit 5: Review</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.50:</span> Review Grammar Ref (5.1-5.2) & Wordlist.<br />Unit 5
                                        Quiz.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.33:</span> "Don't forget!" (Revision <span className="text-blue">Ex 17</span>-22).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 6: Unit 7 & Review & Eid al-Adha */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 Month 6: Unit 6 & 7 + Eid al-Adha</h2>
                        <span className="month-meta">May 24 - Jun 18, 2026</span>
                    </div>

                    {/* Week 21 (Annual): Eid al-Adha Holiday */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 21: Eid al-Adha Holiday</span>
                            <span>May 24 - 28</span>
                        </div>
                        <table className="plan-table">
                            <tbody>
                                <tr>
                                    <td className="date-cell" style={{ color: "#ef9a9a" }}>May 24 - 28</td>
                                    <td className="topic-cell" style={{ background: "rgba(198,40,40,0.1)" }}>Eid al-Adha Holiday
                                    </td>
                                    <td className="details-cell" colSpan="2"
                                        style={{ textAlign: "center", color: "#ef9a9a", fontWeight: "bold" }}>
                                        <span className="tag tag-holiday">Holiday</span> Arafat Day & Eid al-Adha.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 22 (Annual) -> Headway Week 12 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 22: Unit 6: The Time & Present Simple</span>
                            <span>May 31 - Jun 4</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">May 31 (Sun)</td>
                                    <td className="topic-cell">Unit 6: The Time</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.51:</span> <span className="text-green">Starter</span> (Daily routine).<br />SB <span className="text-gold">p.52:</span> Vocab "What time
                                        is it?".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.34:</span> <span className="text-blue">Ex 1, 2, 3</span> (The time).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 1 (Mon)</td>
                                    <td className="topic-cell">Unit 6: Present Simple I/you</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.53:</span> Listen to Felipe's day.<br />Practice sentences. "Talking
                                        about you".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 2 (Tue)</td>
                                    <td className="topic-cell">Unit 6: Present Simple he/she</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.54:</span> "Anna's day". Read & find times.<br /><span className="text-purple">Grammar Spot</span> (verbs
                                        +s).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.35:</span> <span className="text-blue">Ex 4, 5, 6</span> (Cathy and George).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 3 (Wed)</td>
                                    <td className="topic-cell">Unit 6: Adverbs of Frequency</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.54:</span> <span className="text-purple">Grammar Spot</span>: always/sometimes/never.<br />SB <span className="text-gold">p.55:</span>
                                        Practice Qs.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.36:</span> <span className="text-blue">Ex 8, 9</span> (Cathy's bedroom).<br />WB <span className="text-gold">p.37:</span> <span className="text-blue">Ex 12</span>
                                        (Prepositions).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 4 (Thu)</td>
                                    <td className="topic-cell">Unit 6: Questions & Negatives</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.55:</span> <span className="text-purple">Grammar Spot</span> (doesn't, does she?).<br />Practice Q&A.
                                        Negative sentences.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.35:</span> <span className="text-blue">Ex 7</span> (Questions).<br />WB <span className="text-gold">p.36:</span> <span className="text-blue">Ex 10</span>
                                        (do/does/am/is/are).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 23 (Annual) -> Headway Week 13 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 23: Unit 6: Reading, Listening & Skills</span>
                            <span>Jun 7 - 11</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jun 7 (Sun)</td>
                                    <td className="topic-cell">Unit 6: Reading</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.56:</span> "Toby McMann". Read & complete text.<br />Answer
                                        true/false questions.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.38:</span> <span className="text-blue">Ex 14</span>-17 (Reading: Barack Obama).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 8 (Mon)</td>
                                    <td className="topic-cell">Unit 6: Listening</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.57:</span> "Anna and Toby". Complete conversation.<br />Practice
                                        conversation.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.38:</span> Reread Barack Obama text & check.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 9 (Tue)</td>
                                    <td className="topic-cell">Unit 6: Speaking</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.57:</span> "Talking about you". Q&A family/friends.<br />Correct
                                        sentences.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 10 (Wed)</td>
                                    <td className="topic-cell">Unit 6: Vocab & Speaking</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.58:</span> "Words that go together".<br />"Lifestyle questionnaire".
                                    </td>
                                    <td className="wb-cell">WB <span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Finish crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 11 (Thu)</td>
                                    <td className="topic-cell">Unit 6: Everyday English</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.59:</span> "Days of the week". Listen & practice.<br />Prepositions
                                        in/on/at.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.39:</span> <span className="text-blue">Ex 18</span> (Days). WB <span className="text-gold">p.37:</span> <span className="text-blue">Ex 12</span> (Preps).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 24 (Annual) -> Headway Week 14 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 24: Unit 6 Review & Unit 7 Start</span>
                            <span>Jun 14 - 18</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jun 14 (Sun)</td>
                                    <td className="topic-cell">Unit 6: Vocab & Speaking</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.58:</span> "Words that go together" (<span className="text-blue">Ex 1</span>).<br />Lifestyle
                                        questionnaire (<span className="text-blue">Ex 3</span>,4).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.37:</span> <span className="text-blue">Ex 13</span> (Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 15 (Mon)</td>
                                    <td className="topic-cell">Unit 6: Everyday English</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.59:</span> "Days of the week". Q&A.<br />Prepositions in/on/at.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.39:</span> <span className="text-blue">Ex 18</span> (Days). WB <span className="text-gold">p.37:</span> <span className="text-blue">Ex 12</span> (Preps).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 16 (Tue)</td>
                                    <td className="topic-cell">Unit 6: Review</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.60:</span> Review Grammar Ref (6.1-6.4) & Wordlist.<br />Unit 6
                                        Quiz.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.39:</span> "Don't forget!" (Revision <span className="text-blue">Ex 19</span>-23).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 17 (Wed)</td>
                                    <td className="topic-cell">Unit 7: Favourite Things</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.61:</span> <span className="text-green">Starter</span> (Favourite day, food).<br />SB <span className="text-gold">p.62:</span> "Things I
                                        love!". Grammar "Question words".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.40:</span> <span className="text-blue">Ex 1</span> (Reading: Johnny Depp).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 18 (Thu)</td>
                                    <td className="topic-cell">Unit 7: Practice Qs</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.62-63:</span> Questions about Alfio.<br /><span className="text-purple">Grammar Spot</span> (Question
                                        words & Pronouns).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.41:</span> <span className="text-blue">Ex 2, 3, 4</span> (Question words).<br />WB <span className="text-gold">p.41:</span> <span className="text-blue">Ex 5</span> (Why...
                                        Because).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 7: Finals */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 Month 7: Unit 7 & Final Exams</h2>
                        <span className="month-meta">Jun 21 - Jul 9, 2026</span>
                    </div>

                    {/* Week 25 (Annual) -> Headway Week 15 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 25: Unit 7: Object Pronouns & Adjectives</span>
                            <span>Jun 21 - 25</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jun 21 (Sun)</td>
                                    <td className="topic-cell">Unit 7: Object Pronouns</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.63:</span> <span className="text-purple">Grammar Spot</span> (Object Pronouns).<br />SB <span className="text-gold">p.65:</span> Practice "I
                                        like you!" (<span className="text-blue">Ex 1</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.42:</span> <span className="text-blue">Ex 6, 7, 8</span> (Pronouns me/him, my/his).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 22 (Mon)</td>
                                    <td className="topic-cell">Unit 7: Grammar this/that</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.64:</span> "this and that". Complete conversations.<br />Practice:
                                        "Test the other students" (<span className="text-blue">Ex 2</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.42:</span> <span className="text-blue">Ex 9</span> (this/that).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 23 (Tue)</td>
                                    <td className="topic-cell">Unit 7: Practice & Vocab</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.65:</span> Practice Q&A (Why do you...?) (<span className="text-blue">Ex 2</span>).<br />SB <span className="text-gold">p.66:</span>
                                        Vocab: "Adjectives". Match words.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.43:</span> <span className="text-blue">Ex 10</span> (Adjectives - happy/miserable).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 24 (Wed)</td>
                                    <td className="topic-cell">Unit 7: Reading</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.67:</span> "An email from Dubai". Read & listen.<br />Answer
                                        questions (<span className="text-blue">Ex 2</span>). Find adjectives.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.45:</span> "Don't forget!" (Revision <span className="text-blue">Ex 12, 13, 14</span>).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 25 (Thu)</td>
                                    <td className="topic-cell">Unit 7: Writing & Everyday</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.67:</span> Writing: "Write an email to a friend".<br />SB <span className="text-gold">p.68:</span> "Can
                                        I...?". Match places & activities.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.44:</span> <span className="text-blue">Ex 11</span> ("Can I...?").</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 26 (Annual) -> Headway Week 16 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 26: Unit 7 Review & Consolidation</span>
                            <span>Jun 28 - Jul 2</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jun 28 (Sun)</td>
                                    <td className="topic-cell">Unit 7: Everyday English</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.68:</span> "Can I...?". Match places & activs.<br />SB <span className="text-gold">p.69:</span>
                                        Listening "Iveta in town".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.44:</span> <span className="text-blue">Ex 11</span> ("Can I...?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 29 (Mon)</td>
                                    <td className="topic-cell">Unit 7: Roleplay</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.69:</span> Roleplay (<span className="text-blue">Ex 4</span>). Practice conversations<br />(shop, cafe,
                                        etc.).</td>
                                    <td className="wb-cell">Review vocabulary from SB p. 68-69.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jun 30 (Tue)</td>
                                    <td className="topic-cell">Unit 7: Review</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.70:</span> Review Grammar Ref (7.1-7.4) & Wordlist.<br />Unit 7
                                        Quiz.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.45:</span> "Don't forget!" (Revision <span className="text-blue">Ex 12, 13, 14</span>).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 1 (Wed)</td>
                                    <td className="topic-cell">Consolidation: Units 5-7</td>
                                    <td className="sb-cell">Review: Reread "Alek's life" & "Email from Dubai".<br />Speaking:
                                        Pair work Q&A.</td>
                                    <td className="wb-cell">Catch up on any unfinished Workbook exercises.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 2 (Thu)</td>
                                    <td className="topic-cell">Consolidation: Writing</td>
                                    <td className="sb-cell">Writing: "Write an email from your holiday".<br />Present emails
                                        to the class.</td>
                                    <td className="wb-cell">Study for Semester 1 Final Exams (Units 1-7).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 27 (Annual) -> Headway Week 17 (Finals) */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 27: Final Exams</span>
                            <span>Jul 5 - 9</span>
                        </div>
                        <table className="plan-table" style={{ border: "2px solid #D4AF37" }}>
                            <thead>
                                <tr>
                                    <th style={{ background: "rgba(212,175,55,0.2)" }}>Day / Date</th>
                                    <th style={{ background: "rgba(212,175,55,0.2)" }}>Exam Subject</th>
                                    <th style={{ background: "rgba(212,175,55,0.2)" }}>Exam Details</th>
                                    <th style={{ background: "rgba(212,175,55,0.2)" }}>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jul 5 (Sun)</td>
                                    <td className="topic-cell" style={{ fontWeight: "bold", color: "#ffab91" }}>Final Exam: Grammar &
                                        Vocab</td>
                                    <td className="sb-cell">Written Test: Grammar & Vocabulary from Units 1-7.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 6 (Mon)</td>
                                    <td className="topic-cell" style={{ fontWeight: "bold", color: "#ffab91" }}>Final Exam: Reading &
                                        Writing</td>
                                    <td className="sb-cell">Reading Passages + Writing Task (e.g. Family/Routine).</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 7 (Tue)</td>
                                    <td className="topic-cell" style={{ fontWeight: "bold", color: "#ffab91" }}>Final Exam: Listening
                                    </td>
                                    <td className="sb-cell">Audio tracks + comprehension questions.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 8 (Wed)</td>
                                    <td className="topic-cell" style={{ fontWeight: "bold", color: "#ffab91" }}>Final Exam: Speaking
                                    </td>
                                    <td className="sb-cell">1-on-1 Interviews. Q&A from Units 1-7.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 9 (Thu)</td>
                                    <td className="topic-cell">Exam Review / Project Intro</td>
                                    <td className="sb-cell">Return exams, review mistakes.<br />Intro to "Project Week".</td>
                                    <td className="wb-cell" style={{ fontWeight: "bold", color: "#D4AF37" }}>Relax!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 8: Project Week & Unit 8 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>📘 Month 8: Project Week & Unit 8 (Home)</h2>
                        <span className="month-meta">Jul 12 - Jul 30, 2026</span>
                    </div>

                    {/* Week 28 (Annual) -> Headway Week 18 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 28: Project Week & Start Unit 8</span>
                            <span>Jul 12 - 16</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jul 12 (Sun)</td>
                                    <td className="topic-cell">Semester Break / Admin</td>
                                    <td className="sb-cell">No classes (Semester Break).</td>
                                    <td className="wb-cell">-</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 13 (Mon)</td>
                                    <td className="topic-cell">Project Week: Drafting</td>
                                    <td className="sb-cell">Writing Draft: First draft of presentation script.<br />Focus:
                                        Grammar Units 1-7.</td>
                                    <td className="wb-cell">Writing: Create "rough draft" of project script.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 14 (Tue)</td>
                                    <td className="topic-cell">Project Week: Peer Review</td>
                                    <td className="sb-cell">Practice presentations with partner.<br />Peer feedback on
                                        grammar.</td>
                                    <td className="wb-cell">Project: Create visual aids (poster/slides).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 15 (Wed)</td>
                                    <td className="topic-cell">Project Week: Presentations</td>
                                    <td className="sb-cell">Speaking: 3-5 min presentation to class.<br />Q&A from classmates.
                                    </td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 16 (Thu)</td>
                                    <td className="topic-cell">Start Unit 8: Home</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.71:</span> <span className="text-green">Starter</span> (House/Flat).<br />SB <span className="text-gold">p.72:</span> Vocab "Rooms and
                                        furniture".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.46:</span> <span className="text-blue">Ex 1, 2, 3</span> (Rooms and furniture).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 29 (Annual) -> Headway Week 19 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 29: Unit 8 - There is/are & Prepositions</span>
                            <span>Jul 19 - 23</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jul 19 (Sun)</td>
                                    <td className="topic-cell">Unit 8: There is/are</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.72:</span> Grammar "There is/There are".<br />Practice with house
                                        picture.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.47:</span> <span className="text-blue">Ex 4, 5, 6, 7</span> (There is/There are).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 20 (Mon)</td>
                                    <td className="topic-cell">Unit 8: Negatives</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.73:</span> "Two student flats". Read descriptions.<br /><span className="text-purple">Grammar Spot</span>
                                        (isn't/aren't).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.46:</span> <span className="text-blue">Ex 1, 2, 3</span> (Rooms and furniture).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 21 (Tue)</td>
                                    <td className="topic-cell">Unit 8: Practice Q&A</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.73:</span> Practice Q&A (Is there...? Are there...?).<br />"Talking
                                        about you" (<span className="text-blue">Ex 6</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.48:</span> <span className="text-blue">Ex 8</span> (Prepositions on/under...).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 22 (Wed)</td>
                                    <td className="topic-cell">Unit 8: Prepositions</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.74:</span> Grammar "Prepositions". "Jack's bedroom".<br />Grammar
                                        Spot (some/any).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.48:</span> <span className="text-blue">Ex 9</span> (Vocab Revision Crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 23 (Thu)</td>
                                    <td className="topic-cell">Unit 8: Listening</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.75:</span> Listening "Phone call with Jack's mum".<br />Practice
                                        "Two different kitchens".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.49:</span> <span className="text-blue">Ex 10, 11, 12</span> (Everyday English).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 30 (Annual) -> Headway Week 20 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 30: Unit 8 - Skills & Review</span>
                            <span>Jul 26 - 30</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (SB)</th>
                                    <th>Workbook (WB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Jul 26 (Sun)</td>
                                    <td className="topic-cell">Unit 8: Reading</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.76-77:</span> Read "Cape Town". Answer questions.<br />Find
                                        adjectives (<span className="text-blue">Ex 5</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.50:</span> <span className="text-blue">Ex 13</span> (Reading: Berkhamsted).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 27 (Mon)</td>
                                    <td className="topic-cell">Unit 8: Listening</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.78:</span> Listen to Ben ("My home town").<br />Listen to
                                        conversations (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.48:</span> <span className="text-blue">Ex 9</span> (Vocab Revision).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 28 (Tue)</td>
                                    <td className="topic-cell">Unit 8: Writing</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.78:</span> "Talking about you".<br />Writing: "Write about a town
                                        you know".</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.51:</span> "Don't forget!" (Revision).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 29 (Wed)</td>
                                    <td className="topic-cell">Unit 8: Everyday English</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.79:</span> "Directions". Find places on map.<br />Listen & follow
                                        directions.</td>
                                    <td className="wb-cell">WB <span className="text-gold">p.49:</span> <span className="text-blue">Ex 10, 11, 12</span> (Directions).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Jul 30 (Thu)</td>
                                    <td className="topic-cell">Unit 8: Review & Roleplay</td>
                                    <td className="sb-cell">SB <span className="text-gold">p.79:</span> Roleplay giving directions.<br />SB <span className="text-gold">p.80:</span> Review Grammar
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
                        <h2>📘 Month 9: Headway Units 9 & 10</h2>
                        <span className="month-meta">August 16 - September 10, 2026</span>
                    </div>

                    {/* Week 31 (Annual) -> Headway Week 21 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 31: Unit 9: Past Times</span>
                            <span>August 16-20</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Aug 16 (Sun)</td>
                                    <td className="topic-cell">Unit 9: Past Times</td>
                                    <td className="sb-cell">SB p. 81: <span className="text-green">Starter</span> (Old street scene).<br />SB p. 82: "Saying
                                        years". Grammar: was/were born. Practice Q&A.</td>
                                    <td className="wb-cell">WB p. 52: <span className="text-blue">Ex 1, 2, 3, 4</span> (Saying years, Dates Quiz).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 17 (Mon)</td>
                                    <td className="topic-cell">Unit 9: was/were</td>
                                    <td className="sb-cell">SB p. 83: <span className="text-purple">Grammar Spot</span> (was/were). Listening: "Rolf Ackman".
                                        Practice Q&A about Rolf's family.</td>
                                    <td className="wb-cell">WB p. 53: <span className="text-blue">Ex 5, 6, 7, 8</span> (was/were, Questions, Negatives).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 18 (Tue)</td>
                                    <td className="topic-cell">Unit 9: Practice</td>
                                    <td className="sb-cell">SB p. 84: Practice: was/were negatives. "Today and yesterday"
                                        (<span className="text-blue">Ex 6</span>).<br />SB p. 84-85: Reading: "Who were they?".</td>
                                    <td className="wb-cell">WB p. 54: <span className="text-blue">Ex 9</span> (Reading: Andy Warhol & Princess Diana).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 19 (Wed)</td>
                                    <td className="topic-cell">Unit 9: Irregular Verbs</td>
                                    <td className="sb-cell">SB p. 86: "Reading: "Oh no! What bad luck!". Grammar: Past
                                        Simple (irregular verbs).</td>
                                    <td className="wb-cell">WB p. 55: <span className="text-blue">Ex 10 & 11</span> (Irregular verbs).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 20 (Thu)</td>
                                    <td className="topic-cell">Unit 9: Speaking</td>
                                    <td className="sb-cell">SB p. 87: Read news article "The Lottery Ticket".<br />SB p. 87:
                                        Speaking: "Tell the story again" (<span className="text-blue">Ex 5</span>).</td>
                                    <td className="wb-cell">WB p. 56: <span className="text-blue">Ex 12</span> (Vocab: have/do/go crossword).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 32 (Annual) -> Headway Week 22 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 32: Unit 9 Review & Unit 10 Start</span>
                            <span>August 23-27</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Aug 23 (Sun)</td>
                                    <td className="topic-cell">Unit 9: Vocab have/do/go</td>
                                    <td className="sb-cell">SB p. 88: "Common verbs (2)". Complete exercises. Practice
                                        went/had/did (<span className="text-blue">Ex 4</span>).</td>
                                    <td className="wb-cell">WB p. 56: <span className="text-blue">Ex 12</span> (have/do/go crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 24 (Mon)</td>
                                    <td className="topic-cell">Unit 9: Everyday English</td>
                                    <td className="sb-cell">SB p. 89: "Months and dates". Practice ordinal numbers. Q&A
                                        "When's your birthday?".</td>
                                    <td className="wb-cell">WB p. 56: <span className="text-blue">Ex 13, 14, 15</span> (Months and dates).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 25 (Tue)</td>
                                    <td className="topic-cell">Unit 9: Review</td>
                                    <td className="sb-cell">SB p. 90: Review Grammar Reference (9.1-9.2) and
                                        Wordlist.<br />Activity: Unit 9 Quiz (Past Simple was/were, irregular verbs,
                                        dates).</td>
                                    <td className="wb-cell">WB p. 57: "Don't forget!" (Revision <span className="text-blue">Ex 16</span>-20).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 26 (Wed)</td>
                                    <td className="topic-cell">Unit 10: Past Simple</td>
                                    <td className="sb-cell">SB p. 91: <span className="text-green">Starter</span> (Holiday selfie).<br />SB p. 92: Grammar: "Past
                                        Simple (regular & irregular)". Listen to Kristin. <span className="text-purple">Grammar Spot</span> (pronunciation).
                                    </td>
                                    <td className="wb-cell">WB p. 58: <span className="text-blue">Ex 1 & 2</span> (Regular verbs & pronunciation /t/ /d/ /id/).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 27 (Thu)</td>
                                    <td className="topic-cell">Unit 10: Past Simple Q&A</td>
                                    <td className="sb-cell">SB p. 93: Grammar: "Questions and negatives". Listen to Kristin
                                        & Dave. <span className="text-purple">Grammar Spot</span>. Practice conversation.</td>
                                    <td className="wb-cell">WB p. 59: <span className="text-blue">Ex 5, 6, 7, 8</span> (Reading & Q&A: "Kevin's week").</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 33 (Annual) -> Headway Week 23 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 33: Unit 10: Sport & Leisure</span>
                            <span>August 30 - September 3</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Aug 30 (Sun)</td>
                                    <td className="topic-cell">Unit 10: Practice</td>
                                    <td className="sb-cell">SB p. 94: "Did you have a good weekend?". Complete questionnaire
                                        (<span className="text-blue">Ex 2</span>). Ask teacher & partner (<span className="text-blue">Ex 3, 4</span>).</td>
                                    <td className="wb-cell">WB p. 60: <span className="text-blue">Ex 9</span> (Making conversation).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Aug 31 (Mon)</td>
                                    <td className="topic-cell">Unit 10: Time Expressions</td>
                                    <td className="sb-cell">SB p. 94: Practice "Time expressions" (<span className="text-blue">Ex 5</span>).<br />SB p. 95:
                                        Practice "Making conversation" (<span className="text-blue">Ex 1, 2</span>).</td>
                                    <td className="wb-cell">WB p. 60: <span className="text-blue">Ex 10</span> (Time expressions in/at/on).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 1 (Tue)</td>
                                    <td className="topic-cell">Unit 10: Vocab: Sport</td>
                                    <td className="sb-cell">SB p. 96: "Sport and leisure". Match activities to photos.
                                        play/go (<span className="text-blue">Ex 2</span>). Practice Q&A (<span className="text-blue">Ex 3, 4</span>).</td>
                                    <td className="wb-cell">WB p. 61: <span className="text-blue">Ex 11 & 12</span> (Sport and leisure crossword, go/play).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 2 (Wed)</td>
                                    <td className="topic-cell">Unit 10: Listening</td>
                                    <td className="sb-cell">SB p. 97: "Gary and Cathy's holidays". Listen & practice.
                                        Practice Q&A about their holidays (<span className="text-blue">Ex 4</span>).</td>
                                    <td className="wb-cell">WB p. 62: <span className="text-blue">Ex 13 & 14</span> (Reading: A holiday in Disneyland).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 3 (Thu)</td>
                                    <td className="topic-cell">Unit 10: Writing</td>
                                    <td className="sb-cell">SB p. 98: Grammar ago.<br />SB p. 98: Writing: "My last holiday".
                                        Write about your last holiday (<span className="text-blue">Ex 4</span>).</td>
                                    <td className="wb-cell">WB p. 63: "Don't forget!" (Revision <span className="text-blue">Ex 16</span>-18).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 34 (Annual) -> Headway Week 24 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 34: Unit 10 Review & Start Unit 11</span>
                            <span>September 6-10</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Sep 6 (Sun)</td>
                                    <td className="topic-cell">Unit 10: Everyday English</td>
                                    <td className="sb-cell">SB p. 99: "Going sightseeing". Match places & signs. Listen &
                                        practice conversations.</td>
                                    <td className="wb-cell">WB p. 63: <span className="text-blue">Ex 15</span> (Going sightseeing).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 7 (Mon)</td>
                                    <td className="topic-cell">Unit 10: Review</td>
                                    <td className="sb-cell">SB p. 100: Review Grammar Reference (10.1-10.4) &
                                        Wordlist.<br />Activity: Unit 10 Quiz (Past Simple, sport vocab).</td>
                                    <td className="wb-cell">WB p. 63: "Don't forget!" (Revision <span className="text-blue">Ex 16</span>-18).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 8 (Tue)</td>
                                    <td className="topic-cell">Unit 11: I can do that!</td>
                                    <td className="sb-cell">SB p. 101: <span className="text-green">Starter</span> (What can you do?).<br />SB p. 102: Grammar:
                                        "can/can't". Match verbs & photos.</td>
                                    <td className="wb-cell">WB p. 64: <span className="text-blue">Ex 1 & 2</span> (can/can't abilities).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 9 (Wed)</td>
                                    <td className="topic-cell">Unit 11: Practice</td>
                                    <td className="sb-cell">SB p. 103: Practice Q&A "Can you...?".<br />Pronunciation:
                                        can/can't (weak/strong forms).</td>
                                    <td className="wb-cell">WB p. 65: <span className="text-blue">Ex 3 & 4</span> (Questions and short answers).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 10 (Thu)</td>
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
                        <h2>📘 Month 10: Headway Units 11 & 12 (Term 2)</h2>
                        <span className="month-meta">Sep 13 - Oct 8, 2026</span>
                    </div>

                    {/* Week 35 (Annual) -> Headway Week 25 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 35: Mid-Term 2 Exams & Start Unit 11</span>
                            <span>September 13-17</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Sep 13 (Sun)</td>
                                    <td className="topic-cell">Review: Unit 8</td>
                                    <td className="sb-cell">Grammar: There is/are, some/any, Prepositions.<br />Vocab: Rooms,
                                        Furniture. Speaking: Describe your room.</td>
                                    <td className="wb-cell">WB p. 51: "Don't forget!" (Unit 8 Rev.)</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 14 (Mon)</td>
                                    <td className="topic-cell">Review: Units 9 & 10</td>
                                    <td className="sb-cell">Grammar: was/were, Past Simple (regular/irregular).<br />Vocab:
                                        Dates, have/do/go. Speaking: "What did you do yesterday?".</td>
                                    <td className="wb-cell">WB p. 57: (Unit 9 Rev.) & p. 63: (Unit 10 Rev.)</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: "#D4AF37" }}>Sep 15 (Tue)</td>
                                    <td className="topic-cell" style={{ borderRight: "3px solid #D4AF37" }}>Mid-Term 2: Written
                                    </td>
                                    <td className="sb-cell">Assessment: Written test covering Grammar & Vocabulary from
                                        Units 8-10.</td>
                                    <td className="wb-cell">Study for Speaking Test.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: "#D4AF37" }}>Sep 16 (Wed)</td>
                                    <td className="topic-cell" style={{ borderRight: "3px solid #D4AF37" }}>Mid-Term 2: Speaking
                                    </td>
                                    <td className="sb-cell">Assessment: Spoken interviews (pairs). Ask & answer Past Simple
                                        questions.</td>
                                    <td className="wb-cell">No homework.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 17 (Thu)</td>
                                    <td className="topic-cell">Unit 11: can/can't</td>
                                    <td className="sb-cell">SB p. 101: <span className="text-green">Starter</span> (Talk about your abilities).<br />SB p. 102:
                                        Grammar: can/can't. Listen & repeat.</td>
                                    <td className="wb-cell">WB p. 64: <span className="text-blue">Ex 1 & 2</span> (Practice can/can't).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 36 (Annual) -> Headway Week 26 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 36: Unit 11 & National Day</span>
                            <span>September 20-24</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Sep 20 (Sun)</td>
                                    <td className="topic-cell">Unit 11: Requests & Offers</td>
                                    <td className="sb-cell">SB p. 105: Grammar: "Requests and offers" (Can I...?, Can
                                        you...?). Practice Q&A (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 66: <span className="text-blue">Ex 7 & 8</span> (Requests and offers).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 21 (Mon)</td>
                                    <td className="topic-cell">Unit 11: Reading</td>
                                    <td className="sb-cell">SB p. 106: "The smartphone". Read & answer questions.<br />Vocab:
                                        "Verb + noun" (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 67: <span className="text-blue">Ex 9 & 10</span> (Reading: "Meet ASIMO").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 22 (Tue)</td>
                                    <td className="topic-cell">Unit 11: Listening</td>
                                    <td className="sb-cell">SB p. 107: Listening: "What do you do on your
                                        smartphone?".<br />Speaking: Practice Q&A (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 67: Reread "ASIMO" and check answers.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell" style={{ color: "#ef9a9a" }}>Sep 23 (Wed)</td>
                                    <td className="topic-cell" style={{ background: "rgba(198,40,40,0.1)" }}>National Day</td>
                                    <td className="details-cell" colSpan="2"
                                        style={{ textAlign: "center", color: "#ef9a9a", fontWeight: "bold" }}>
                                        <span className="tag tag-holiday">Holiday</span> Saudi National Day.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 24 (Thu)</td>
                                    <td className="topic-cell">Unit 11: Everyday English</td>
                                    <td className="sb-cell">SB p. 109: "Everyday problems". Listen & complete conversations.
                                        Practice with a partner.</td>
                                    <td className="wb-cell">WB p. 68: <span className="text-blue">Ex 12</span> (Everyday problems).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 37 (Annual) -> Headway Week 27 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 37: Unit 11 Review & Start Unit 12</span>
                            <span>Sep 27 - Oct 1</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Sep 27 (Sun)</td>
                                    <td className="topic-cell">Unit 11: Review</td>
                                    <td className="sb-cell">SB p. 110: Review Grammar Reference (11.1-11.2) and
                                        Wordlist.<br />Activity: Unit 11 Quiz (can/can't, adverbs).</td>
                                    <td className="wb-cell">WB p. 69: "Don't forget!" (Revision <span className="text-blue">Ex 13</span>-16).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 28 (Mon)</td>
                                    <td className="topic-cell">Unit 12: Thank you</td>
                                    <td className="sb-cell">SB p. 111: <span className="text-green">Starter</span> (Talk about food/drink).<br />SB p. 112: Vocab:
                                        "Places in town". Grammar: would like.</td>
                                    <td className="wb-cell">WB p. 70: <span className="text-blue">Ex 1, 2, 3</span> (Practice some/any).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 29 (Tue)</td>
                                    <td className="topic-cell">Unit 12: some/any</td>
                                    <td className="sb-cell">SB p. 112: Grammar: some/any. <span className="text-purple">Grammar Spot</span>.<br />SB p. 113:
                                        Practice: "I'd like...". "Offer food and drink".</td>
                                    <td className="wb-cell">WB p. 71: <span className="text-blue">Ex 4 & 5</span> (I'd like... / Would you like...?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Sep 30 (Wed)</td>
                                    <td className="topic-cell">Unit 12: Listening & Speaking</td>
                                    <td className="sb-cell">SB p. 114: Listening: "Birthday wishes".<br />SB p. 115: Grammar:
                                        like vs. would like. Practice.</td>
                                    <td className="wb-cell">WB p. 72: <span className="text-blue">Ex 6 & 7</span> (like vs would like).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 1 (Thu)</td>
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
                            <span>Week 38: Unit 12 Continued</span>
                            <span>October 4-8</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Oct 4 (Sun)</td>
                                    <td className="topic-cell">Unit 12: Everyday English</td>
                                    <td className="sb-cell">SB p. 118: "In a café". Listen & complete. Practice the roleplay
                                        (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 73: <span className="text-blue">Ex 8 & 9</span> (Pronunciation & Rhyming)<br />WB p. 73: <span className="text-blue">Ex 10</span>
                                        (Food crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 5 (Mon)</td>
                                    <td className="topic-cell">Unit 12: Writing</td>
                                    <td className="sb-cell">SB p. 119: Writing: "Write a conversation". Listen & read.
                                        Practice. Write your own conversation.</td>
                                    <td className="wb-cell">WB p. 74: <span className="text-blue">Ex 11</span> (Reading: "English food").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 6 (Tue)</td>
                                    <td className="topic-cell">Unit 12: Review</td>
                                    <td className="sb-cell">SB p. 120: Review Grammar Reference (12.1-12.3) and
                                        Wordlist.<br />Activity: Unit 12 Quiz (would like, some/any).</td>
                                    <td className="wb-cell">WB p. 75: "Don't forget!" (Revision <span className="text-blue">Ex 12</span>-15).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 7 (Wed)</td>
                                    <td className="topic-cell">Unit 13: What's happening?</td>
                                    <td className="sb-cell">SB p. 121: <span className="text-green">Starter</span> (Look at the picture).<br />SB p. 122: Vocab:
                                        "Colours and Clothes". Listen & repeat.</td>
                                    <td className="wb-cell">WB p. 76: <span className="text-blue">Ex 1 & 2</span> (Colours and clothes crossword).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 8 (Thu)</td>
                                    <td className="topic-cell">Unit 13: Present Continuous</td>
                                    <td className="sb-cell">SB p. 123: Grammar: "Present Continuous". Listen & repeat.
                                        Practice Q&A (What's he/she wearing?).</td>
                                    <td className="wb-cell">WB p. 77: <span className="text-blue">Ex 3 & 4</span> (Present Continuous Q&A).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Month 11: Headway Units 13 & 14 */}
                <section className="month-section">
                    <div className="month-header">
                        <h2>🎓 Month 11: Headway Units 13 & 14 (Final Review)</h2>
                        <span className="month-meta">Oct 11 - Nov 5, 2026</span>
                    </div>

                    {/* Week 39 (Annual) -> Headway Week 30 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 39: Unit 13 Grammar & Reading</span>
                            <span>October 11-15</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Oct 11 (Sun)</td>
                                    <td className="topic-cell">Unit 13: Vocab & Grammar</td>
                                    <td className="sb-cell">SB p. 121: <span className="text-green">Starter</span> (Picture).<br />SB p. 122: "Colours and
                                        Clothes".<br />SB p. 123: Grammar: "Present Continuous". Practice Q&A.</td>
                                    <td className="wb-cell">WB p. 76: <span className="text-blue">Ex 1 & 2</span> (Colours and clothes crossword).<br />WB p. 77:
                                        <span className="text-blue">Ex 3 & 4</span> (Present Continuous Q&A).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 12 (Mon)</td>
                                    <td className="topic-cell">Unit 13: Grammar</td>
                                    <td className="sb-cell">SB p. 124: Grammar: "Present Simple and Present Continuous".
                                        <span className="text-purple">Grammar Spot</span>.</td>
                                    <td className="wb-cell">WB p. 78: <span className="text-blue">Ex 5</span> (Negatives) & <span className="text-blue">Ex 6</span> (Present Simple or
                                        Continuous?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 13 (Tue)</td>
                                    <td className="topic-cell">Unit 13: Practice</td>
                                    <td className="sb-cell">SB p. 125: Practice: Complete sentences (<span className="text-blue">Ex 3</span>). Q&A (<span className="text-blue">Ex 4</span>).
                                        Check it (<span className="text-blue">Ex 5</span>).</td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 7</span> (Reading: "Today's different").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 14 (Wed)</td>
                                    <td className="topic-cell">Unit 13: Reading</td>
                                    <td className="sb-cell">SB p. 126: Reading: "Today's different!". Read & listen. Answer
                                        questions (<span className="text-blue">Ex 2</span>).</td>
                                    <td className="wb-cell">WB p. 79: Reread text and check answers.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 15 (Thu)</td>
                                    <td className="topic-cell">Unit 13: Vocab</td>
                                    <td className="sb-cell">SB p. 128: "Opposite verbs". Listen & complete. Practice.</td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 8</span> (Opposite verbs).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 40 (Annual) -> Headway Week 31 */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 40: Unit 13 Review & Start Unit 14</span>
                            <span>October 18-22</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Oct 18 (Sun)</td>
                                    <td className="topic-cell">Unit 13: Reading & Speaking</td>
                                    <td className="sb-cell">SB p. 126: Reading: "Today's different!". Answer
                                        questions.<br />SB p. 127: Speaking: "Talk about your photo" (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 7</span> (Reading: "Today's different").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 19 (Mon)</td>
                                    <td className="topic-cell">Unit 13: Vocab</td>
                                    <td className="sb-cell">SB p. 128: "Opposite verbs". Listen & complete. Practice.</td>
                                    <td className="wb-cell">WB p. 79: <span className="text-blue">Ex 8</span> (Opposite verbs).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 20 (Tue)</td>
                                    <td className="topic-cell">Unit 13: Everyday English</td>
                                    <td className="sb-cell">SB p. 129: "What's the matter?". Listen & complete. Practice
                                        conversations.</td>
                                    <td className="wb-cell">WB p. 80: <span className="text-blue">Ex 9 & 10</span> ("What's the matter?").</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 21 (Wed)</td>
                                    <td className="topic-cell">Unit 13: Review</td>
                                    <td className="sb-cell">SB p. 130: Review Grammar Reference (13.1-13.2) and
                                        Wordlist.<br />Activity: Unit 13 Quiz (Pres. Continuous vs. Pres. Simple).</td>
                                    <td className="wb-cell">WB p. 81: "Don't forget!" (Revision <span className="text-blue">Ex 11</span>-16).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 22 (Thu)</td>
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
                            <span>Week 41: Unit 14 Continued</span>
                            <span>October 25-29</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Oct 25 (Sun)</td>
                                    <td className="topic-cell">Unit 14: Future Plans</td>
                                    <td className="sb-cell">SB p. 131: <span className="text-green">Starter</span>.<br />SB p. 132: Vocab: "Forms of transport".
                                        Grammar: going to, Present Continuous.</td>
                                    <td className="wb-cell">WB p. 82: <span className="text-blue">Ex 1, 2, 3</span> (Future plans going to).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 26 (Mon)</td>
                                    <td className="topic-cell">Unit 14: Listening</td>
                                    <td className="sb-cell">SB p. 133: Listening: "Ready, steady, go". Answer questions.
                                    </td>
                                    <td className="wb-cell">WB p. 83: <span className="text-blue">Ex 4</span> (What are you doing tomorrow?).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 27 (Tue)</td>
                                    <td className="topic-cell">Unit 14: Speaking</td>
                                    <td className="sb-cell">SB p. 134: Practice Q&A Are you going to...?. "Talk about your
                                        future plans" (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 84: <span className="text-blue">Ex 5</span> (Grammar revision - All tenses).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 28 (Wed)</td>
                                    <td className="topic-cell">Unit 14: Reading</td>
                                    <td className="sb-cell">SB p. 136: Reading: "Life's big events". Read & listen. Answer
                                        questions.</td>
                                    <td className="wb-cell">WB p. 85: <span className="text-blue">Ex 7</span> (Vocabulary lists).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Oct 29 (Thu)</td>
                                    <td className="topic-cell">Unit 14: Speaking & Writing</td>
                                    <td className="sb-cell">SB p. 137: Speaking: "Talk about your past, present and
                                        future".<br />SB p. 137: Writing: "Write sentences about your life" (<span className="text-blue">Ex 3</span>).</td>
                                    <td className="wb-cell">WB p. 86: <span className="text-blue">Ex 9</span> (Form filling).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Week 42 (Annual) -> Headway Week 33 (Modified) */}
                    <div className="week-block">
                        <div className="week-title">
                            <span>Week 42: Unit 14 Finish & Final Review</span>
                            <span>November 1-5</span>
                        </div>
                        <table className="plan-table headway-table">
                            <thead>
                                <tr>
                                    <th>Day / Date</th>
                                    <th>Lesson Focus</th>
                                    <th>Student's Book (Class Activities)</th>
                                    <th>Workbook (Homework)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="date-cell">Nov 1 (Sun)</td>
                                    <td className="topic-cell">Unit 14: Grammar Revision</td>
                                    <td className="sb-cell">SB p. 138: "Grammar revision" (<span className="text-blue">Ex 1 & 2</span>).<br />SB p. 139:
                                        "Vocabulary revision" (<span className="text-blue">Ex 1 & 2</span>).</td>
                                    <td className="wb-cell">WB p. 86: <span className="text-blue">Ex 9</span> (Form filling).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Nov 2 (Mon)</td>
                                    <td className="topic-cell">Unit 14: Everyday English</td>
                                    <td className="sb-cell">SB p. 139: "Social expressions (2)". Listen & complete.
                                        Practice.</td>
                                    <td className="wb-cell">WB p. 87: <span className="text-blue">Ex 10</span> (Social expressions 2).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Nov 3 (Tue)</td>
                                    <td className="topic-cell">Unit 14: Review</td>
                                    <td className="sb-cell">SB p. 140: Review Grammar Reference (14.1-14.2) and
                                        Wordlist.<br />Activity: Unit 14 Quiz (going to, future plans).</td>
                                    <td className="wb-cell">WB p. 87: "Don't forget!" (Revision <span className="text-blue">Ex 11 & 12</span>).</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Nov 4 (Wed)</td>
                                    <td className="topic-cell">General Revision</td>
                                    <td className="sb-cell">Final General Revision (Units 1-14). focus on Grammar &
                                        Vocabulary.</td>
                                    <td className="wb-cell">Study for Final Exams.</td>
                                </tr>
                                <tr>
                                    <td className="date-cell">Nov 5 (Thu)</td>
                                    <td className="topic-cell">Final Revision & Exams</td>
                                    <td className="sb-cell">Final Revision Session / Preparation for Written Exam.</td>
                                    <td className="wb-cell">Good Luck!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="page-footer no-print">
                    <p>English Department - Black Gold Higher Institute</p>
                    <p>&copy; 2026</p>
                </div>

            </article>
        </div>
    );
}
