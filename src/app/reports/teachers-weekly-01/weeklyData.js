// Teachers Weekly 01 Data - Week 1 (Dec 7-11, 2025)
// 8 Teachers Evaluated

export const weeklyData = {
    weekNumber: 1,
    dateRange: {
        en: "December 7-11, 2025",
        ar: "7 - 11 ديسمبر 2025"
    },
    stats: {
        teachersReviewed: 8,
        completeReports: 8,
        partialReports: 0,
        totalFiles: "+50"
    },
    driveLink: "https://drive.google.com/drive/folders/1MIcG7P2TQrUIWQ6ww6n7P-T8X6DWR82S?usp=sharing",
    teachers: [
        {
            id: 1,
            name: { en: "Dr. Sharaf El-Deen", ar: "د. شرف الدين (شرف الدين عثمان)" },
            course: { en: "Everyday English | Saipem, Group 8", ar: "اللغة الإنجليزية اليومية | سايبم، المجموعة 8" },
            status: "complete",
            objectives: {
                en: [
                    'Introduce basic greetings and farewells ("Hello", "Good morning", "Goodbye")',
                    "Teach English alphabet and basic phonics",
                    'Practice personal information Q&A ("What is your name?", "I am...")',
                    "Build confidence in listening and speaking through repetition and dialogues"
                ],
                ar: [
                    'تقديم التحيات الأساسية والوداع ("مرحباً"، "صباح الخير"، "وداعاً")',
                    "تعليم الأبجدية الإنجليزية والصوتيات الأساسية",
                    'ممارسة أسئلة وأجوبة المعلومات الشخصية ("ما اسمك؟"، "أنا...")',
                    "بناء الثقة في الاستماع والتحدث من خلال التكرار والحوارات"
                ]
            },
            topics: {
                en: ["Greetings and Introductions (Role Play)", "Alphabet and Sounds (Ph sound focus)", "Classroom vocabulary (book, pen, etc.)"],
                ar: ["التحيات والتقديمات (لعب الأدوار)", "الأبجدية والأصوات (التركيز على صوت Ph)", "مفردات الفصل (كتاب، قلم، إلخ)"]
            },
            metrics: [
                { value: "⭐", label: { en: "Engagement (High)", ar: "التفاعل (عالي)" } },
                { value: "⭐", label: { en: "Listening (Good)", ar: "الاستماع (جيد)" } },
                { value: "⭐", label: { en: "Speaking (Confident)", ar: "التحدث (واثق)" } },
                { value: "⚠️", label: { en: "Ph Sound (Needs Practice)", ar: "صوت Ph (يحتاج تدريب)" } }
            ],
            quote: {
                en: '"The first week was very successful in establishing a positive classroom atmosphere. Trainees are enthusiastic and ready to learn more."',
                ar: '"كان الأسبوع الأول ناجحاً جداً في تأسيس جو صفي إيجابي. المتدربون متحمسون ومستعدون لتعلم المزيد."'
            },
            imagePath: "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/01-Dr-Sharaf-El-Deen/Screenshot 2025-12-11 134835.png"
        },
        {
            id: 2,
            name: { en: "Mr. Ahmed El-Marhoom", ar: "أ. أحمد المرحوم" },
            course: { en: "Everyday English for Beginners | Class 7 (8 groups)", ar: "اللغة الإنجليزية اليومية للمبتدئين | الفصل 7 (8 مجموعات)" },
            status: "complete",
            objectives: {
                en: [
                    "Introduce basic greetings (Hello, Good morning, Good evening, Good night, Goodbye)",
                    "Teach and reinforce the English alphabet and basic phonics",
                    "Practice personal information Q&A (How are you? Where are you from? etc.)",
                    "Develop confidence in listening and speaking through repetition and dialogues"
                ],
                ar: [
                    "تقديم التحيات الأساسية (مرحباً، صباح الخير، مساء الخير، تصبح على خير، وداعاً)",
                    "تعليم وتعزيز الأبجدية الإنجليزية والصوتيات الأساسية",
                    "ممارسة أسئلة وأجوبة المعلومات الشخصية (كيف حالك؟ من أين أنت؟ إلخ)",
                    "تطوير الثقة في الاستماع والتحدث من خلال التكرار والحوارات"
                ]
            },
            topics: {
                en: ["Greetings and Introductions", "Letters and Sounds (b/p, th, z)", "Classroom vocabulary (computer, pencil, desk)"],
                ar: ["التحيات والتقديمات", "الحروف والأصوات (b/p, th, z)", "مفردات الفصل (حاسوب، قلم رصاص، مكتب)"]
            },
            challenge: {
                title: { en: "Sentence Dictation", ar: "إملاء الجمل" },
                description: { en: '"Sentence dictation was a difficult task - students haven\'t reached that level yet."', ar: '"إملاء الجمل كان مهمة صعبة - لم يصل الطلاب لهذا المستوى بعد."' },
                adjustment: { en: "Next week will include more repetition on simple sentence structures.", ar: "الأسبوع القادم سيتضمن المزيد من التكرار على تراكيب الجمل البسيطة." }
            },
            imagePath: "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/02-Mr-Ahmed-El-Marhoom/Screenshot 2025-12-17 091253.png"
        },
        {
            id: 3,
            name: { en: "Mr. Ali Abd El-Salam", ar: "أ. علي عبد السلام" },
            course: { en: "Conversation Scenarios and Role Play", ar: "سيناريوهات المحادثة ولعب الأدوار" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ Model Submission - \"Plan + Evidence\" Approach", ar: "⭐ تقديم نموذجي - نهج \"الخطة + الدليل\"" },
                description: { en: "Mr. Ali provided both instructional planning and visual evidence of classroom implementation. This should be highlighted as a model for other teachers.", ar: "قدم أ. علي كلاً من التخطيط التعليمي والأدلة المرئية لتنفيذ الفصل. يجب تسليط الضوء على هذا كنموذج للمعلمين الآخرين." }
            },
            scenarios: {
                en: [
                    "Airport check-in", "Borrowing a library book", "Buying train tickets",
                    "Losing wallet at bus station", "Restaurant ordering", "Doctor's appointment",
                    "Talking to flight attendants", "Helping a stranger", "Taxi conversations",
                    "Restaurant table requests", "Signing up for English course", "Dry cleaning complaints",
                    "Hotel room cleaning", "Sitting on crowded bus", "ATM/Bank problems",
                    "Missed train tickets", "Asking for discounts", "Opening bank account"
                ],
                ar: [
                    "تسجيل الوصول في المطار", "استعارة كتاب من المكتبة", "شراء تذاكر القطار",
                    "فقدان المحفظة في محطة الحافلات", "الطلب في المطعم", "موعد الطبيب",
                    "التحدث مع مضيفات الطيران", "مساعدة شخص غريب", "محادثات التاكسي",
                    "طلبات طاولة المطعم", "التسجيل في دورة إنجليزية", "شكاوى المغسلة",
                    "تنظيف غرفة الفندق", "الجلوس في حافلة مزدحمة", "مشاكل الصراف الآلي/البنك",
                    "تذاكر القطار الفائتة", "طلب الخصومات", "فتح حساب بنكي"
                ]
            },
            qualityTable: [
                { category: { en: "Proof of Work", ar: "دليل العمل" }, rating: "excellent", note: { en: "Videos show actual classroom implementation", ar: "الفيديوهات توضح التطبيق الفعلي في الفصل" } },
                { category: { en: "Alignment", ar: "التوافق" }, rating: "high", note: { en: "Visual evidence supports written curriculum", ar: "الأدلة المرئية تدعم المنهج المكتوب" } },
                { category: { en: "Engagement", ar: "التفاعل" }, rating: "high", note: { en: "Active student participation in role play", ar: "مشاركة نشطة للطلاب في لعب الأدوار" } }
            ],
            imagePaths: [
                "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/03-Mr-Ali-Abd-El-Salam/Screenshot 2025-12-11 135044.png",
                "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/03-Mr-Ali-Abd-El-Salam/Screenshot 2025-12-11 135120.png"
            ]
        },
        {
            id: 4,
            name: { en: "Mr. Mohammed Ameen", ar: "أ. محمد أمين" },
            course: { en: "Basic Phonics and Spelling", ar: "الصوتيات الأساسية والإملاء" },
            status: "datadriven",
            objectives: {
                en: [
                    "Master letter sounds and blends",
                    "Practice spelling common words",
                    "Build phonemic awareness through games",
                    "Introduce CVC word patterns"
                ],
                ar: [
                    "إتقان أصوات الحروف والمزج",
                    "ممارسة تهجئة الكلمات الشائعة",
                    "بناء الوعي الصوتي من خلال الألعاب",
                    "تقديم أنماط كلمات CVC"
                ]
            },
            topics: {
                en: ["Letter sounds A-Z", "Short vowel sounds", "CVC words (cat, dog, pen)", "Spelling games"],
                ar: ["أصوات الحروف A-Z", "أصوات الحروف المتحركة القصيرة", "كلمات CVC (cat, dog, pen)", "ألعاب الإملاء"]
            },
            imagePath: "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/04-Mr-Mohammed-Ameen/Screenshot 2025-12-11 135159.png"
        },
        {
            id: 5,
            name: { en: "Mr. Mohamed Abd El-Mo'ty", ar: "أ. محمد عبد المعطي" },
            course: { en: "Conversational English", ar: "اللغة الإنجليزية المحادثة" },
            status: "complete",
            objectives: {
                en: [
                    "Practice everyday dialogues",
                    "Learn common expressions",
                    "Build speaking fluency",
                    "Work on pronunciation clarity"
                ],
                ar: [
                    "ممارسة الحوارات اليومية",
                    "تعلم التعبيرات الشائعة",
                    "بناء طلاقة التحدث",
                    "العمل على وضوح النطق"
                ]
            },
            topics: {
                en: ["Daily conversations", "Common expressions", "Pronunciation practice", "Q&A sessions"],
                ar: ["المحادثات اليومية", "التعبيرات الشائعة", "ممارسة النطق", "جلسات الأسئلة والأجوبة"]
            },
            imagePath: "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/05-Mr-Mohamed-Abd-El-Moty/Screenshot 2025-12-11 135247.png"
        },
        {
            id: 6,
            name: { en: "Ms. Asmaa Sabry", ar: "أ. أسماء صبري" },
            course: { en: "Reading and Comprehension", ar: "القراءة والفهم" },
            status: "complete",
            objectives: {
                en: [
                    "Develop reading fluency",
                    "Practice comprehension questions",
                    "Expand vocabulary through reading",
                    "Build reading confidence"
                ],
                ar: [
                    "تطوير طلاقة القراءة",
                    "ممارسة أسئلة الفهم",
                    "توسيع المفردات من خلال القراءة",
                    "بناء الثقة في القراءة"
                ]
            },
            topics: {
                en: ["Short reading passages", "Comprehension questions", "Vocabulary building", "Silent reading practice"],
                ar: ["مقاطع قراءة قصيرة", "أسئلة الفهم", "بناء المفردات", "ممارسة القراءة الصامتة"]
            },
            imagePath: "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/06-Ms-Asmaa-Sabry/Screenshot 2025-12-11 135335.png"
        },
        {
            id: 7,
            name: { en: "Mr. Hatem Rashwan", ar: "أ. حاتم رشوان" },
            course: { en: "Grammar Foundations", ar: "أساسيات القواعد" },
            status: "complete",
            objectives: {
                en: [
                    "Introduce basic sentence structure",
                    "Teach subject-verb agreement",
                    "Practice simple present tense",
                    "Build grammar awareness"
                ],
                ar: [
                    "تقديم بنية الجملة الأساسية",
                    "تعليم اتفاق الفاعل والفعل",
                    "ممارسة المضارع البسيط",
                    "بناء الوعي القواعدي"
                ]
            },
            topics: {
                en: ["Sentence structure (S+V+O)", "Subject-verb agreement", "Simple present tense", "Grammar exercises"],
                ar: ["بنية الجملة (فاعل+فعل+مفعول)", "اتفاق الفاعل والفعل", "المضارع البسيط", "تمارين القواعد"]
            },
            imagePath: "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/07-Mr-Hatem-Rashwan/Screenshot 2025-12-11 135408.png"
        },
        {
            id: 8,
            name: { en: "Mr. Tawfeek Ibrahim", ar: "أ. توفيق إبراهيم" },
            course: { en: "Practical English Skills", ar: "المهارات الإنجليزية العملية" },
            status: "complete",
            objectives: {
                en: [
                    "Focus on practical vocabulary",
                    "Teach workplace English",
                    "Practice real-world scenarios",
                    "Build communication skills"
                ],
                ar: [
                    "التركيز على المفردات العملية",
                    "تعليم إنجليزية مكان العمل",
                    "ممارسة سيناريوهات الحياة الواقعية",
                    "بناء مهارات التواصل"
                ]
            },
            topics: {
                en: ["Workplace vocabulary", "Real-world scenarios", "Communication skills", "Practical exercises"],
                ar: ["مفردات مكان العمل", "سيناريوهات الحياة الواقعية", "مهارات التواصل", "تمارين عملية"]
            },
            imagePath: "/English-Portal/legacy/reports/teachers-weekly-01/week-01_7-11-Dec-2025/08-Mr-Tawfeek-Ibrahim/Screenshot 2025-12-11 135444.png"
        }
    ]
};
