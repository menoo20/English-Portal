// Teachers Weekly 03 Data - Week 3 (Dec 28, 2025 - Jan 1, 2026)
// Teachers Evaluated

export const weeklyData = {
    weekNumber: 3,
    dateRange: {
        en: "December 28, 2025 - January 1, 2026",
        ar: "28 ديسمبر 2025 - 1 يناير 2026"
    },
    stats: {
        teachersReviewed: 9,
        completeReports: 7,
        partialReports: 2,
        totalFiles: "+28"
    },
    driveLink: "https://drive.google.com/drive/folders/1MIcG7P2TQrUIWQ6ww6n7P-T8X6DWR82S?usp=sharing",
    teachers: [
        {
            id: 1,
            name: { en: "Dr. Sharaf El-Deen", ar: "د. شرف الدين (شرف الدين عثمان)" },
            course: { en: "Everyday English | Saipem, Group 8", ar: "اللغة الإنجليزية اليومية | سايبم، المجموعة 8" },
            status: "awaiting",
            isAwaiting: true,
            awaitingNote: {
                en: "📋 Awaiting Submission - No report has been submitted for this week yet. We look forward to receiving the weekly documentation.",
                ar: "📋 في انتظار التسليم - لم يتم تقديم تقرير لهذا الأسبوع بعد. نتطلع إلى استلام التوثيق الأسبوعي."
            }
        },
        {
            id: 2,
            name: { en: "Mr. Ahmed El-Marhoom", ar: "أ. أحمد المرحوم" },
            course: { en: "Everyday English for Beginners", ar: "اللغة الإنجليزية اليومية للمبتدئين" },
            status: "awaiting",
            isAwaiting: true,
            awaitingNote: {
                en: "📋 Awaiting Submission - No report has been submitted for this week yet. We look forward to receiving the weekly documentation.",
                ar: "📋 في انتظار التسليم - لم يتم تقديم تقرير لهذا الأسبوع بعد. نتطلع إلى استلام التوثيق الأسبوعي."
            }
        },
        {
            id: 3,
            name: { en: "Mr. Ali Abd El-Salam", ar: "أ. علي عبدالسلام" },
            course: { en: "Grammar Structure & Situational Application", ar: "البنية النحوية والتطبيق المواقفي" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ Strong Pedagogical Alignment", ar: "⭐ توافق تربوي قوي" },
                description: { en: "Greatest strength: Moving grammar off the page and into action. The 'Re-order Sentences' exercise is highly effective—forces students to demonstrate understanding of sentence structure logic, not just vocabulary.", ar: "أعظم نقطة قوة: نقل القواعد من الورقة إلى التطبيق. تمرين 'إعادة ترتيب الجمل' فعال للغاية—يجبر الطلاب على إظهار فهم منطق بنية الجملة، وليس المفردات فقط." }
            },
            objectives: {
                en: [
                    "Grammar & Syntax: Parts of Speech (Nouns, Verbs, Pronouns)",
                    "Constructing 'Verb to Be' Yes/No Questions",
                    "Phonics & Literacy: Revising letters and sounds",
                    "Situational Application: Ordering food at a restaurant"
                ],
                ar: [
                    "القواعد والتركيب: أقسام الكلام (الأسماء، الأفعال، الضمائر)",
                    "بناء أسئلة 'فعل الكينونة' (نعم/لا)",
                    "الصوتيات والقراءة: مراجعة الحروف والأصوات",
                    "التطبيق المواقفي: طلب الطعام في المطعم"
                ]
            },
            topics: {
                en: [
                    "Parts of Speech (Nouns, Verbs, Pronouns)",
                    "Verb to Be (Yes/No Questions)",
                    "Re-Order Sentences Activity (Kinesthetic Grammar)",
                    "Restaurant Ordering Context"
                ],
                ar: [
                    "أقسام الكلام (الأسماء، الأفعال، الضمائر)",
                    "فعل الكينونة (أسئلة نعم/لا)",
                    "نشاط إعادة ترتيب الجمل (قواعد حركية)",
                    "سياق طلب الطعام في المطعم"
                ]
            },
            materials: {
                en: "Weekly Report, Video Evidence (Re-Order Sentences Activity)",
                ar: "التقرير الأسبوعي، دليل فيديو (نشاط إعادة ترتيب الجمل)"
            },
            qualityNote: {
                title: { en: "Quality Analysis", ar: "تحليل الجودة" },
                description: { en: "Tight loop between Plan and Execution: Taught 'Yes/No Questions' and 'Parts of Speech', then had students build sentences from scratch. Video evidence shows students successfully navigating 'Word Order' rules, verifying the Parts of Speech lesson was successful.", ar: "حلقة محكمة بين الخطة والتنفيذ: درّس 'أسئلة نعم/لا' و'أقسام الكلام'، ثم جعل الطلاب يبنون جملاً من الصفر. يُظهر دليل الفيديو نجاح الطلاب في تطبيق قواعد 'ترتيب الكلمات'، مما يؤكد نجاح درس أقسام الكلام." }
            },
            strength: {
                title: { en: "💡 Active Grammar & Gamification", ar: "💡 القواعد النشطة والتلعيب" },
                description: { en: "Moving grammar off the page and into action. The 'Re-order Sentences' exercise forces students to demonstrate understanding of English sentence structure logic, not just vocabulary. Gamifying the grammar lesson maintained student attention better than standard whiteboard lectures.", ar: "نقل القواعد من الورقة إلى التطبيق العملي. تمرين 'إعادة ترتيب الجمل' يجبر الطلاب على إظهار فهمهم لمنطق بنية الجملة الإنجليزية، وليس المفردات فقط. تحويل درس القواعد إلى لعبة حافظ على انتباه الطلاب أفضل من المحاضرات التقليدية." }
            },
            encouragement: {
                title: { en: "🚀 Recommendations", ar: "🚀 توصيات" },
                description: { en: "Continue this 'Gamified Grammar' approach. Next week, advance from 'Re-ordering words' to 'Fixing the Error' (finding the mistake in a sentence) to further test structural knowledge.", ar: "استمر في نهج 'القواعد التفاعلية'. الأسبوع القادم، انتقل من 'إعادة ترتيب الكلمات' إلى 'إصلاح الخطأ' (إيجاد الخطأ في الجملة) لاختبار المعرفة البنيوية بشكل أعمق." },
                suggestion: { en: "In future reports, note which specific sentence structures caused the most difficulty during the re-ordering exercise (e.g., 'Students struggled with placing adjectives before nouns').", ar: "في التقارير القادمة، اذكر تراكيب الجمل التي سببت أكبر صعوبة خلال تمرين إعادة الترتيب (مثل: 'واجه الطلاب صعوبة في وضع الصفات قبل الأسماء')." }
            },
            hasEvidence: true,
            evidenceType: "video"
        },
        {
            id: 4,
            name: { en: "Mr. Mostafa", ar: "أ. مصطفى" },
            course: { en: "General English | Samsung Cohort (All Groups)", ar: "اللغة الإنجليزية العامة | مجموعة سامسونج (جميع المجموعات)" },
            status: "complete",
            objectives: {
                en: [
                    "Prepositions of Place: in, on, under, next to, behind",
                    "Workplace Spatial Awareness (e.g., 'The files are on the server')",
                    "Listening Skills Development via Short Video",
                    "Gamified Assessment via Kahoot"
                ],
                ar: [
                    "حروف الجر المكانية: في، على، تحت، بجانب، خلف",
                    "الوعي المكاني في بيئة العمل (مثل: 'الملفات على الخادم')",
                    "تطوير مهارات الاستماع عبر فيديو قصير",
                    "التقييم التفاعلي عبر Kahoot"
                ]
            },
            topics: {
                en: [
                    "Prepositions of Place (in/on/under/next to/behind)",
                    "Visual Learning with Pictures",
                    "Kahoot Quiz (Gamification)",
                    "Short Movie/Video for Listening"
                ],
                ar: [
                    "حروف الجر المكانية",
                    "التعلم البصري بالصور",
                    "مسابقة Kahoot (التلعيب)",
                    "فيديو قصير للاستماع"
                ]
            },
            materials: {
                en: "Weekly Report (Evidence Pending: Kahoot screenshot & video file)",
                ar: "التقرير الأسبوعي (الأدلة معلقة: لقطة شاشة Kahoot وملف الفيديو)"
            },
            qualityNote: {
                title: { en: "The Gamifier Persona", ar: "شخصية المُلعِّب" },
                description: { en: "Sophisticated lesson flow: Visual Input (Pictures) → Digital Assessment (Kahoot) → Listening Practice (Movie). Understands that the Samsung group engages better with multimedia and tech than standard textbook drills.", ar: "تدفق درس متطور: مدخلات بصرية (صور) ← تقييم رقمي (Kahoot) ← ممارسة استماع (فيلم). يفهم أن مجموعة سامسونج تتفاعل بشكل أفضل مع الوسائط المتعددة والتكنولوجيا من التمارين الكتابية." }
            },
            strength: {
                title: { en: "💡 Digital Engagement Strategy", ar: "💡 استراتيجية التفاعل الرقمي" },
                description: { en: "Excellent classroom strategy using Kahoot for gamification and video content for listening practice. This is exactly the kind of engagement the Samsung corporate group needs.", ar: "استراتيجية صفية ممتازة باستخدام Kahoot للتلعيب ومحتوى الفيديو لممارسة الاستماع. هذا بالضبط نوع التفاعل الذي تحتاجه مجموعة سامسونج للشركات." }
            },
            encouragement: {
                title: { en: "🚀 Evidence Request", ar: "🚀 طلب أدلة" },
                description: { en: "Excellent work incorporating Kahoot and video content this week! To get full credit in the future, please take a screenshot of the Kahoot final score screen and upload it along with the Word document.", ar: "عمل ممتاز في دمج Kahoot ومحتوى الفيديو هذا الأسبوع! للحصول على التقييم الكامل في المستقبل، يرجى التقاط لقطة شاشة لنتيجة Kahoot النهائية ورفعها مع مستند Word." }
            }
        },
        {
            id: 5,
            name: { en: "Mr. Tawfeek Ibrahim", ar: "أ. توفيق إبراهيم" },
            course: { en: "Professional English & Situational Communication", ar: "الإنجليزية المهنية والتواصل المواقفي" },
            status: "complete",
            objectives: {
                en: [
                    "Professional Identity: Answering 'What do you do?', describing duties",
                    "Job Interview Role-Play Scenarios",
                    "Situational English: Restaurant Interactions (Ordering, Reservations)",
                    "Quantitative Assessment via Data Exports (CSV)"
                ],
                ar: [
                    "الهوية المهنية: الإجابة على 'ماذا تعمل؟'، وصف الواجبات",
                    "سيناريوهات لعب أدوار مقابلات العمل",
                    "الإنجليزية المواقفية: تفاعلات المطعم (الطلب، الحجوزات)",
                    "التقييم الكمي عبر تصدير البيانات (CSV)"
                ]
            },
            topics: {
                en: [
                    "Professional Identity & Job Descriptions",
                    "Restaurant English: Dining Out Master Class",
                    "50 Role-Play Conversations (A/B Dialogues)",
                    "Quizizz Assessment: Greetings & Introductions Review"
                ],
                ar: [
                    "الهوية المهنية ووصف الوظائف",
                    "إنجليزية المطاعم: دورة إتقان تناول الطعام",
                    "50 محادثة لعب أدوار (حوارات A/B)",
                    "تقييم Quizizz: مراجعة التحيات والتعارف"
                ]
            },
            materials: {
                en: "Weekly Report (PDF), Restaurant English Master Guide (PDF), 50 Role-Play Conversations (PDF), Assessment Data (CSV Exports)",
                ar: "التقرير الأسبوعي (PDF)، دليل إنجليزية المطاعم الشامل (PDF)، 50 محادثة لعب أدوار (PDF)، بيانات التقييم (تصدير CSV)"
            },
            qualityNote: {
                title: { en: "The Data-Driven Architect", ar: "المهندس المعتمد على البيانات" },
                description: { en: "Strongest in Curriculum Design. The PDFs provided are robust enough to be used as a textbook. He is the 'Content Lead' providing structure that other teachers rely on. Only teacher to submit Quantitative Evidence (CSVs) rather than qualitative (Videos).", ar: "الأقوى في تصميم المناهج. ملفات PDF المقدمة قوية بما يكفي لاستخدامها ككتاب دراسي. هو 'قائد المحتوى' الذي يوفر الهيكل الذي يعتمد عليه المعلمون الآخرون. المعلم الوحيد الذي قدم أدلة كمية (CSV) بدلاً من نوعية (فيديو)." }
            },
            strength: {
                title: { en: "💡 Superior Resource Curation", ar: "💡 تنسيق موارد متفوق" },
                description: { en: "Highest quality instructional assets of the cohort. Restaurant English Master Guide and 50 Role-Play Conversations are comprehensive, professionally formatted, and provide scaffolding for learners.", ar: "أعلى جودة للأصول التعليمية في المجموعة. دليل إنجليزية المطاعم الشامل و50 محادثة لعب أدوار شاملة ومنسقة باحتراف وتوفر سقالات للمتعلمين." }
            },
            encouragement: {
                title: { en: "⚠️ Data Reality Check", ar: "⚠️ فحص واقع البيانات" },
                description: { en: "Quiz Data shows 17% class accuracy on Greetings. While materials are Advanced/Intermediate, quiz shows students struggling at A1 level. Consider bridging exercises between high-level material and student proficiency.", ar: "بيانات الاختبار تظهر دقة 17% للفصل في التحيات. بينما المواد متقدمة/متوسطة، الاختبار يظهر صعوبة الطلاب في مستوى A1. فكر في تمارين ربط بين المواد المتقدمة ومستوى الطلاب." }
            },
            hasEvidence: true,
            evidenceType: "data"
        },
        {
            id: 6,
            name: { en: "Mr. Youssef Elfahem", ar: "أ. يوسف الفاهم" },
            course: { en: "General English | Black Gold 3 (New Intake - 8 Groups)", ar: "اللغة الإنجليزية العامة | بلاك جولد 3 (دفعة جديدة - 8 مجموعات)" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ Exceptional Diagnostic Skills", ar: "⭐ مهارات تشخيصية استثنائية" },
                description: { en: "The Calibration Expert: Recognized Pre-A level immediately and pivoted curriculum to 'Verbs vs. Nouns' and 'Days of the Week'. If he had taught advanced content, these students would have failed. His pivot saved the week.", ar: "خبير المعايرة: أدرك مستوى ما قبل A1 فوراً وحوّل المنهج إلى 'الأفعال مقابل الأسماء' و'أيام الأسبوع'. لو درّس محتوى متقدم، لكان هؤلاء الطلاب قد فشلوا. تحويله أنقذ الأسبوع." }
            },
            objectives: {
                en: [
                    "Strategic Pivot to Pre-A (Entry Level) curriculum",
                    "Mechanics: Verbs vs. Nouns, Action Verbs, Pronouns",
                    "Vocabulary: Days of the Week, Names of Objects",
                    "Sandwich Method: Start/End with Basic Conversation Group Work"
                ],
                ar: [
                    "تحول استراتيجي إلى منهج ما قبل A1 (مستوى مبتدئ)",
                    "الآليات: الأفعال مقابل الأسماء، أفعال الحركة، الضمائر",
                    "المفردات: أيام الأسبوع، أسماء الأشياء",
                    "طريقة الساندويتش: البدء/الانتهاء بعمل جماعي محادثة أساسية"
                ]
            },
            topics: {
                en: [
                    "Days of the Week (Choral Drilling & Sequencing)",
                    "Basic Conversation: Identity, Location, Time",
                    "Difference between Verbs/Nouns",
                    "Dialogue Simulations (Teacher-Student)"
                ],
                ar: [
                    "أيام الأسبوع (التدريب الجماعي والتسلسل)",
                    "المحادثة الأساسية: الهوية، الموقع، الوقت",
                    "الفرق بين الأفعال/الأسماء",
                    "محاكاة الحوار (المعلم-الطالب)"
                ]
            },
            materials: {
                en: "Weekly Report, Video Evidence (days of the week.mp4, basic convo 2.mp4)",
                ar: "التقرير الأسبوعي، دليل فيديو (أيام الأسبوع.mp4، محادثة أساسية 2.mp4)"
            },
            qualityNote: {
                title: { en: "The Realist Persona", ar: "شخصية الواقعي" },
                description: { en: "Most honest and grounded report of the week. Identified a problem (Low Level), created a solution (Back to Basics), and executed a routine (Start/End Conversations) to fix it. Video evidence perfectly aligns with report claims.", ar: "أصدق تقرير وأكثره واقعية هذا الأسبوع. حدد المشكلة (مستوى منخفض)، ابتكر حلاً (العودة للأساسيات)، ونفذ روتيناً (محادثات البداية/النهاية) لإصلاحها. دليل الفيديو يتطابق تماماً مع ادعاءات التقرير." }
            },
            strength: {
                title: { en: "💡 Diagnostic Agility", ar: "💡 المرونة التشخيصية" },
                description: { en: "Unlike teachers who would force standard lessons regardless of level, Youssef stripped the curriculum down to fundamentals. His 'Sandwich Method' builds confidence for Pre-A learners.", ar: "على عكس المعلمين الذين يفرضون دروساً قياسية بغض النظر عن المستوى، قام يوسف بتجريد المنهج إلى الأساسيات. 'طريقة الساندويتش' تبني الثقة للمتعلمين ما قبل A1." }
            },
            encouragement: {
                title: { en: "🚀 Expert Student Management", ar: "🚀 إدارة الطلاب المتميزين" },
                description: { en: "For next week, please include a specific note on how you are challenging the 'token expert' students. Consider using them as 'Table Captains' or 'Assistant Tutors' during group work to keep them engaged while you help beginners.", ar: "للأسبوع القادم، يرجى تضمين ملاحظة محددة عن كيفية تحديك للطلاب 'المتميزين'. فكر في استخدامهم كـ 'قادة طاولات' أو 'مساعدين تعليميين' خلال العمل الجماعي لإبقائهم منخرطين بينما تساعد المبتدئين." }
            },
            hasEvidence: true,
            evidenceType: "video"
        },
        {
            id: 7,
            name: { en: "Ms. Balsam", ar: "أ. بلسم" },
            course: { en: "Corporate English | Mixed Portfolio (Sinopec, Wison, Eleco)", ar: "إنجليزية الشركات | محفظة متنوعة (سينوبك، ويسون، إليكو)" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ The Holistic Educator", ar: "⭐ المعلمة الشاملة" },
                description: { en: "Pastoral Care & Thematic Teaching strength. By shifting from technical vocabulary to personal reflection (New Year Resolutions), she built strong rapport with students. Maintaining coherent theme across three diverse clients is impressive.", ar: "قوة الرعاية والتدريس الموضوعي. بالانتقال من المفردات التقنية إلى التأمل الشخصي (قرارات السنة الجديدة)، بنت علاقة قوية مع الطلاب. الحفاظ على موضوع متماسك عبر ثلاثة عملاء متنوعين مثير للإعجاب." }
            },
            objectives: {
                en: [
                    "University Vocabulary: Campus, Majors, Subjects",
                    "Conclusion of 'First Day at University' unit (Day 10 of 10)",
                    "New Year Thematic Lesson: Reflections & Goals",
                    "Managing Online (Wison) & Face-to-Face modalities"
                ],
                ar: [
                    "مفردات الجامعة: الحرم الجامعي، التخصصات، المواد",
                    "اختتام وحدة 'اليوم الأول في الجامعة' (اليوم 10 من 10)",
                    "درس موضوعي لرأس السنة: التأملات والأهداف",
                    "إدارة الوضعين عبر الإنترنت (ويسون) والحضوري"
                ]
            },
            topics: {
                en: [
                    "First Day at University (Final Lesson)",
                    "New Year Resolutions Speaking Activity",
                    "Sentence Starters: 'Last year, I learned...', 'This year, I want to be better at...'",
                    "Personal Reflection & Goal Setting"
                ],
                ar: [
                    "اليوم الأول في الجامعة (الدرس الأخير)",
                    "نشاط تحدث قرارات السنة الجديدة",
                    "بدايات الجمل: 'العام الماضي تعلمت...'، 'هذا العام أريد أن أكون أفضل في...'",
                    "التأمل الشخصي وتحديد الأهداف"
                ]
            },
            materials: {
                en: "Weekly Report, New Year Worksheet (PDF) with sentence starters",
                ar: "التقرير الأسبوعي، ورقة عمل رأس السنة (PDF) مع بدايات الجمل"
            },
            qualityNote: {
                title: { en: "The Holistic Educator", ar: "المعلمة الشاملة" },
                description: { en: "Strong Planning & Contextualization. Used the New Year calendar event to drive engagement with a 'relaxed' speaking lesson. Demonstrated strong pacing discipline by closing out the 10-day University unit before year-end.", ar: "تخطيط قوي ووضع في السياق. استخدمت حدث رأس السنة لتعزيز المشاركة بدرس تحدث 'مريح'. أظهرت انضباطاً قوياً في الإيقاع بإنهاء وحدة الجامعة من 10 أيام قبل نهاية العام." }
            },
            strength: {
                title: { en: "💡 Pastoral Care & Rapport", ar: "💡 الرعاية والعلاقة" },
                description: { en: "By shifting from technical vocabulary to personal reflection, she built strong rapport with students. Maintaining a coherent theme across three diverse clients (Sinopec, Wison, Eleco) is impressive classroom management.", ar: "بالانتقال من المفردات التقنية إلى التأمل الشخصي، بنت علاقة قوية مع الطلاب. الحفاظ على موضوع متماسك عبر ثلاثة عملاء متنوعين (سينوبك، ويسون، إليكو) هو إدارة صفية مثيرة للإعجاب." }
            },
            encouragement: {
                title: { en: "🚀 Student Output Request", ar: "🚀 طلب مخرجات الطلاب" },
                description: { en: "While we have the worksheet, we don't have student output. For next week, please include photos or samples of completed student worksheets to show how they answered the prompts.", ar: "بينما لدينا ورقة العمل، ليس لدينا مخرجات الطلاب. للأسبوع القادم، يرجى تضمين صور أو عينات من أوراق عمل الطلاب المكتملة لإظهار كيفية إجابتهم على الأسئلة." }
            }
        },
        {
            id: 8,
            name: { en: "Mrs. Khadija Tahir", ar: "أ. خديجة طاهر" },
            course: { en: "Situational English | 8 Groups (Ahmadia, Wison, Saipem, Eleco)", ar: "الإنجليزية المواقفية | 8 مجموعات (الأحمدية، ويسون، سايبم، إليكو)" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ Top Tier Performance", ar: "⭐ أداء من الدرجة الأولى" },
                description: { en: "The High-Volume Anchor: Managing 8 distinct groups and securing data from multiple online quizzes. Her slide deck is the best example of 'Localized Learning' with Arabic/English side-by-side translation.", ar: "المرتكز عالي الحجم: إدارة 8 مجموعات مختلفة وتأمين بيانات من اختبارات متعددة عبر الإنترنت. عرضها التقديمي أفضل مثال على 'التعلم المحلي' مع ترجمة عربية/إنجليزية جنباً إلى جنب." }
            },
            objectives: {
                en: [
                    "Situational English: Café & Restaurant Interactions",
                    "Bilingual Support: Arabic translation for key concepts",
                    "Context-Specific Phrases: Barista vs. Waiter terminology",
                    "Modality Comparison: Face-to-face vs. Online effectiveness"
                ],
                ar: [
                    "الإنجليزية المواقفية: تفاعلات المقهى والمطعم",
                    "الدعم ثنائي اللغة: ترجمة عربية للمفاهيم الرئيسية",
                    "عبارات خاصة بالسياق: مصطلحات الباريستا مقابل النادل",
                    "مقارنة الأنماط: فعالية الحضوري مقابل عبر الإنترنت"
                ]
            },
            topics: {
                en: [
                    "English for Cafés and Restaurants (PPT)",
                    "Barista vs. Waiter Context-Specific Vocabulary",
                    "Quiz A: EnglishConversationforbeginners (19 Students, 71% Accuracy)",
                    "Quiz B: conversationKhadija (14 Students, 74% Accuracy)"
                ],
                ar: [
                    "الإنجليزية للمقاهي والمطاعم (عرض تقديمي)",
                    "مفردات خاصة بسياق الباريستا مقابل النادل",
                    "الاختبار أ: محادثة إنجليزية للمبتدئين (19 طالباً، دقة 71%)",
                    "الاختبار ب: محادثة خديجة (14 طالباً، دقة 74%)"
                ]
            },
            materials: {
                en: "Weekly Report, English-for-Cafes-and-Restaurants.pptx (Bilingual), Quiz Data Exports (33 students assessed)",
                ar: "التقرير الأسبوعي، عرض تقديمي للمقاهي والمطاعم (ثنائي اللغة)، تصدير بيانات الاختبارات (33 طالباً تم تقييمهم)"
            },
            qualityNote: {
                title: { en: "The Workhorse of the Department", ar: "عمود القسم" },
                description: { en: "Managing 8 groups with data from multiple quizzes. Saipem group (face-to-face) demonstrated stronger fluency with immediate corrective feedback more effective in-person. Top performer: Maryam Taher (100% Score).", ar: "إدارة 8 مجموعات مع بيانات من اختبارات متعددة. مجموعة سايبم (حضورياً) أظهرت طلاقة أقوى مع تغذية راجعة تصحيحية فورية أكثر فعالية حضورياً. الأفضل أداءً: مريم طاهر (100%)." }
            },
            strength: {
                title: { en: "💡 Localized Learning", ar: "💡 التعلم المحلي" },
                description: { en: "Her bilingual slide deck ensures Pre-A students are not lost. Visual scaffolding breaks down specific phrases for different service contexts (Barista vs. Waiter).", ar: "عرضها التقديمي ثنائي اللغة يضمن عدم ضياع طلاب ما قبل A1. السقالات البصرية تفصّل العبارات المحددة لسياقات خدمة مختلفة (الباريستا مقابل النادل)." }
            },
            encouragement: {
                title: { en: "🚀 Quiz Alignment Note", ar: "🚀 ملاحظة توافق الاختبار" },
                description: { en: "Quiz B (conversationKhadija) contained Medical topic questions ('At a clinic') rather than Restaurant content. Consider aligning quiz content more closely with the week's lesson topic.", ar: "الاختبار ب (محادثة خديجة) احتوى على أسئلة موضوع طبي ('في العيادة') بدلاً من محتوى المطاعم. فكري في مواءمة محتوى الاختبار بشكل أقرب لموضوع درس الأسبوع." }
            },
            hasEvidence: true,
            evidenceType: "data"
        },
        {
            id: 9,
            name: { en: "Mr. Mohammed Ameen", ar: "أ. محمد أمين" },
            course: { en: "General English | Heavy Load (Samsung 11-15 & Wison 1-3)", ar: "اللغة الإنجليزية العامة | حمل ثقيل (سامسونج 11-15 وويسون 1-3)" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ 100% Submission Completeness", ar: "⭐ اكتمال التسليم 100%" },
                description: { en: "Comprehensive submission package with written status report and 4 video artifacts verifying student performance. Strong alignment between stated objectives and visible student output.", ar: "حزمة تسليم شاملة مع تقرير حالة مكتوب و4 أدلة فيديو تتحقق من أداء الطلاب. توافق قوي بين الأهداف المذكورة ومخرجات الطلاب المرئية." }
            },
            objectives: {
                en: [
                    "Sharing Personal Information: Name, Origin, Residence, Job",
                    "Module Completion: Day 10 of 10 (2-week unit closed on schedule)",
                    "Role-Play Assessment: 4 Video Artifacts of Student Pair Work",
                    "Gamification: Kahoot competition for multi-topic review"
                ],
                ar: [
                    "مشاركة المعلومات الشخصية: الاسم، الأصل، السكن، الوظيفة",
                    "إكمال الوحدة: اليوم 10 من 10 (وحدة أسبوعين أُنهيت في الموعد)",
                    "تقييم لعب الأدوار: 4 أدلة فيديو لعمل الطلاب الثنائي",
                    "التلعيب: مسابقة Kahoot لمراجعة متعددة المواضيع"
                ]
            },
            topics: {
                en: [
                    "Introduction → Name → Origin → Residence → Job (Flow Chart)",
                    "Pair Work Roleplays: Professional Introductions",
                    "Job Vocabulary: Welder, Mechanic (with pronunciation focus)",
                    "'Where are you from?' vs 'Where do you live?' distinction"
                ],
                ar: [
                    "المقدمة ← الاسم ← الأصل ← السكن ← الوظيفة (مخطط تدفق)",
                    "لعب الأدوار الثنائي: المقدمات المهنية",
                    "مفردات الوظائف: لحام، ميكانيكي (مع التركيز على النطق)",
                    "التمييز بين 'من أين أنت؟' و'أين تسكن؟'"
                ]
            },
            materials: {
                en: "Weekly Report, 4 Video Artifacts (sharing personal info.mp4, sharing personal info 2.mp4, sharing personal info 3.mp4, sam12-sharing personal info 4.mp4), PowerPoint with Bilingual Flow Chart, Kahoot Assessment",
                ar: "التقرير الأسبوعي، 4 أدلة فيديو، عرض تقديمي بمخطط تدفق ثنائي اللغة، تقييم Kahoot"
            },
            qualityNote: {
                title: { en: "The High-Volume Finisher (Upgraded)", ar: "المُنهي عالي الحجم (مُحدَّث)" },
                description: { en: "Video evidence shows effective use of smart screen with bilingual flow chart guiding students through dialogue steps. Students correctly identified job titles ('Welder', 'Mechanic') and successfully navigated 'Where from?' vs 'Where live?' distinction. Student-centered approach with teacher stepping back to let students produce language.", ar: "دليل الفيديو يظهر استخداماً فعالاً للشاشة الذكية مع مخطط تدفق ثنائي اللغة يوجه الطلاب خلال خطوات الحوار. الطلاب حددوا المسميات الوظيفية بشكل صحيح ('لحام'، 'ميكانيكي') ونجحوا في التمييز بين 'من أين أنت؟' و'أين تسكن؟'. نهج محوره الطالب مع تراجع المعلم للسماح للطلاب بإنتاج اللغة." }
            },
            strength: {
                title: { en: "💡 Active Learning & Assessment Variety", ar: "💡 التعلم النشط وتنوع التقييم" },
                description: { en: "Moved from lecture-based teaching to pair-work roleplays—excellent for language acquisition. Combined performance-based assessment (roleplays) with digital quizzes (Kahoot) for a well-rounded view of student progress. Visual aids on PowerPoint were distinct and helped lower-level students navigate conversation flow.", ar: "انتقل من التدريس بالمحاضرات إلى لعب الأدوار الثنائي—ممتاز لاكتساب اللغة. جمع بين التقييم القائم على الأداء (لعب الأدوار) والاختبارات الرقمية (Kahoot) لرؤية شاملة لتقدم الطلاب. الوسائل البصرية واضحة وساعدت الطلاب منخفضي المستوى في التنقل في تدفق المحادثة." }
            },
            encouragement: {
                title: { en: "� Next Steps", ar: "� الخطوات التالية" },
                description: { en: "Fade the Scaffolding: Encourage students to try dialogues without looking at the board to improve eye contact and memory. Implement pronunciation drills for job titles ('Mechanic', 'Welder') to boost confidence in professional identity.", ar: "تقليل السقالات: شجع الطلاب على تجربة الحوارات دون النظر للسبورة لتحسين التواصل البصري والذاكرة. طبق تدريبات النطق للمسميات الوظيفية ('ميكانيكي'، 'لحام') لتعزيز الثقة في الهوية المهنية." }
            },
            hasEvidence: true,
            evidenceType: "video"
        }
    ]
};
