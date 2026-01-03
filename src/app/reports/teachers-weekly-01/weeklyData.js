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
            imagePath: null,  // No image available
            evidenceIcon: "🔤",  // Phonics & Spelling
            evidenceLabel: { en: "Phonics & Spelling Report", ar: "تقرير الصوتيات والإملاء" }
        },
        {
            id: 5,
            name: { en: "Mr. Mostafa", ar: "أ. مصطفى" },
            course: { en: "Self-Introduction & Public Speaking | Samsung Cohort", ar: "تقديم النفس والتحدث أمام الجمهور | مجموعة سامسونج" },
            status: "complete",
            objectives: {
                en: [
                    "Help students overcome fear of public speaking",
                    "Self-introduction: 'Hi, my name is...', 'I come from...'",
                    "Vocational context: Identifying majors (Welding, IT, Electrician)",
                    "Building confidence through scaffolded sentence starters"
                ],
                ar: [
                    "مساعدة الطلاب على التغلب على الخوف من التحدث أمام الجمهور",
                    "تقديم النفس: 'مرحباً، اسمي...'، 'أنا من...'",
                    "السياق المهني: تحديد التخصصات (لحام، تقنية معلومات، كهربائي)",
                    "بناء الثقة من خلال بدايات جمل مدعومة"
                ]
            },
            topics: {
                en: ["Self-introduction with sentence starters", "Vocational identity (Welder, IT, Electrician)", "Peer-to-peer conversation simulation", "Overcoming public speaking fear"],
                ar: ["تقديم النفس مع بدايات الجمل", "الهوية المهنية (لحام، تقنية معلومات، كهربائي)", "محاكاة المحادثة بين الأقران", "التغلب على الخوف من التحدث"]
            },
            materials: {
                en: "Weekly Report (PDF with classroom photo), 5 Video Files (student presentations), Smart board slides visible in videos",
                ar: "التقرير الأسبوعي (PDF مع صورة الفصل)، 5 ملفات فيديو (عروض الطلاب)، شرائح السبورة الذكية مرئية في الفيديوهات"
            },
            qualityNote: {
                title: { en: "Confidence Building Success", ar: "نجاح بناء الثقة" },
                description: { en: "Goal was to help students 'overcome their fear' of public speaking. Videos show success—while some students are naturally nervous, all successfully completed the task in front of peers. Scaffolding template on screen allows focus on pronunciation.", ar: "الهدف كان مساعدة الطلاب على 'التغلب على خوفهم' من التحدث أمام الجمهور. الفيديوهات تظهر نجاحاً—رغم توتر بعض الطلاب طبيعياً، الجميع أكمل المهمة بنجاح أمام أقرانهم. قالب السقالة على الشاشة يسمح بالتركيز على النطق." }
            },
            strength: {
                title: { en: "💡 Differentiated Performance", ar: "💡 أداء متمايز" },
                description: { en: "Allows students to perform at their own comfort level while maintaining baseline standard. Some rely heavily on screen, others add variations ('My city is Al Qatif', hobbies like 'video games'). Peer-to-peer simulation adds realistic interaction.", ar: "يسمح للطلاب بالأداء حسب مستوى راحتهم مع الحفاظ على المعيار الأساسي. البعض يعتمد بشكل كبير على الشاشة، والبعض يضيف تنويعات. المحاكاة بين الأقران تضيف تفاعلاً واقعياً." }
            },
            encouragement: {
                title: { en: "🚀 Administrative Organization", ar: "🚀 التنظيم الإداري" },
                description: { en: "Teaching delivery is effective and clear. For next week, please: (1) Use descriptive file names instead of raw IMG numbers, (2) Add reflection on student struggles/successes in the report, not just bullet points.", ar: "تقديم التدريس فعال وواضح. للأسبوع القادم: (1) استخدم أسماء ملفات وصفية بدلاً من أرقام IMG، (2) أضف تأملات عن صعوبات/نجاحات الطلاب في التقرير، وليس مجرد نقاط." }
            },
            imagePath: null,  // No image available
            evidenceIcon: "🎤",  // Public Speaking
            evidenceLabel: { en: "Student Presentation Videos", ar: "فيديوهات عروض الطلاب" }
        },
        {
            id: 6,
            name: { en: "Ms. Balsam Benaoun", ar: "أ. بلسم بن عون" },
            course: { en: "Spoken English | Unit 1: Introductions, Greetings & Farewells", ar: "اللغة الإنجليزية المحكية | الوحدة 1: التعريف والتحيات والوداع" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ Complete Portfolio Submission", ar: "⭐ تقديم محفظة كاملة" },
                description: { en: "Comprehensive package: curriculum planning documents, instructional slides, student performance videos, and reflective weekly report. Excellent alignment between lesson plan and classroom outcomes.", ar: "حزمة شاملة: مستندات تخطيط المنهج، شرائح تعليمية، فيديوهات أداء الطلاب، وتقرير أسبوعي تأملي. توافق ممتاز بين خطة الدرس ونتائج الفصل." }
            },
            objectives: {
                en: [
                    "Introducing yourself: 'Hello, my name is...'",
                    "Greetings: 'Hello', 'Good morning', 'How are you?'",
                    "Farewells: 'Goodbye', 'See you later', 'Take care'",
                    "Building speaking confidence through scaffolded practice"
                ],
                ar: [
                    "تقديم النفس: 'مرحباً، اسمي...'",
                    "التحيات: 'مرحباً'، 'صباح الخير'، 'كيف حالك؟'",
                    "الوداع: 'مع السلامة'، 'أراك لاحقاً'، 'اعتني بنفسك'",
                    "بناء ثقة التحدث من خلال التدريب المدعوم"
                ]
            },
            topics: {
                en: ["Self-introduction dialogues", "Greeting expressions", "Farewell expressions", "Whiteboard group activities"],
                ar: ["حوارات تقديم النفس", "عبارات التحية", "عبارات الوداع", "أنشطة جماعية على السبورة"]
            },
            materials: {
                en: "Spoken English 1s Unit.pptx, Topics.pdf, Farewell.pdf, 5 Student Videos, Weekly Report (Dec 10)",
                ar: "عرض تقديمي الوحدة 1، ملف المواضيع، ملف الوداع، 5 فيديوهات طلاب، تقرير أسبوعي (10 ديسمبر)"
            },
            qualityNote: {
                title: { en: "Instructional Alignment Excellence", ar: "تميز التوافق التعليمي" },
                description: { en: "Direct correlation between planning and performance. Topics.pdf lists 'Introducing yourself' as priority → PPT provides script → Student videos show exact structure with personal substitutions ('Hello, my name is Fayan... I am from Saudi Arabia').", ar: "ارتباط مباشر بين التخطيط والأداء. ملف المواضيع يضع 'تقديم النفس' كأولوية ← العرض يوفر النص ← فيديوهات الطلاب تظهر البنية بالضبط مع استبدالات شخصية." }
            },
            strength: {
                title: { en: "💡 Active Learning & Privacy Ethics", ar: "💡 التعلم النشط وأخلاقيات الخصوصية" },
                description: { en: "Students actively writing on whiteboard, not passive listening. Competitive group games for recall. Privacy ethics: smiley face stickers used to obscure student faces in videos—demonstrates strong professional standards.", ar: "الطلاب يكتبون بنشاط على السبورة، وليس الاستماع السلبي. ألعاب جماعية تنافسية للتذكر. أخلاقيات الخصوصية: استخدام ملصقات الوجوه المبتسمة لإخفاء وجوه الطلاب—يظهر معايير مهنية قوية." }
            },
            encouragement: {
                title: { en: "🚀 Shyness Support", ar: "🚀 دعم الخجل" },
                description: { en: "Great observation that 'students are still a bit shy.' Videos show pair support (Fayan & Reem) and gentle prompting—fostering a supportive environment. Continue this approach.", ar: "ملاحظة رائعة أن 'الطلاب لا يزالون خجولين قليلاً.' الفيديوهات تظهر دعم الأزواج وتوجيه لطيف—تعزيز بيئة داعمة. استمري في هذا النهج." }
            },
            imagePath: null,  // No image available
            evidenceIcon: "👋",  // Greetings & Farewells
            evidenceLabel: { en: "Student Videos & PPT", ar: "فيديوهات الطلاب والعروض" }
        },
        {
            id: 7,
            name: { en: "Mrs. Khadija Tahir", ar: "أ. خديجة طاهر" },
            course: { en: "Situational English | Hybrid (1 F2F + 6 Online Groups)", ar: "الإنجليزية المواقفية | هجين (1 حضوري + 6 مجموعات أونلاين)" },
            status: "exemplary",
            isExemplary: true,
            exemplaryNote: {
                title: { en: "⭐ Outstanding Documentation & CEFR Alignment", ar: "⭐ توثيق متميز وتوافق مع CEFR" },
                description: { en: "The only teacher to explicitly label vocabulary as 'A1 (Foundation)' vs 'A2 (Expansion)'. Provides best practice curriculum planning with detailed breakdown of student progress by mode (F2F vs Online).", ar: "المعلمة الوحيدة التي صنفت المفردات صراحةً كـ 'A1 (تأسيس)' مقابل 'A2 (توسع)'. تقدم أفضل ممارسات تخطيط المنهج مع تفصيل تقدم الطلاب حسب الوضع." }
            },
            objectives: {
                en: [
                    "Self-introduction with CEFR A1-A2 alignment",
                    "Formal scenario: Job Interview dialogues",
                    "Informal scenario: Friend's Wedding introductions",
                    "Managing hybrid instruction (1 Face-to-Face + 6 Zoom groups)"
                ],
                ar: [
                    "تقديم النفس مع توافق CEFR A1-A2",
                    "سيناريو رسمي: حوارات مقابلة العمل",
                    "سيناريو غير رسمي: تعريفات حفل زفاف صديق",
                    "إدارة التدريس الهجين (1 حضوري + 6 مجموعات زووم)"
                ]
            },
            topics: {
                en: ["Self-introduction (A1 vs A2 levels)", "Job Interview dialogues (Formal)", "Wedding scenario (Informal)", "Zoom breakout pair work"],
                ar: ["تقديم النفس (مستويات A1 مقابل A2)", "حوارات مقابلة العمل (رسمي)", "سيناريو الزفاف (غير رسمي)", "عمل ثنائي في غرف زووم"]
            },
            materials: {
                en: "Self Introduction.pptx, Basic Greetings Handout (with Dammam Dialect Arabic), CEFR Vocabulary PDF, Examples of Dialogues PDF, 2 Zoom Recording Videos, Detailed Weekly Report",
                ar: "عرض تقديم النفس، نشرة التحيات الأساسية (مع اللهجة الدمامية)، ملف مفردات CEFR، ملف أمثلة الحوارات، 2 فيديو تسجيل زووم، تقرير أسبوعي مفصل"
            },
            qualityNote: {
                title: { en: "Localization Excellence", ar: "تميز التوطين" },
                description: { en: "Handout includes 'Arabic (Dammam Dialect)' column—translating 'How are you?' to both 'كيف حالك؟' and 'كيفك؟'. Tailoring materials specifically to local demographic. Cultural relevance: Wedding scenario engagement.", ar: "النشرة تتضمن عمود 'العربية (اللهجة الدمامية)'—ترجمة 'كيف حالك؟' إلى الفصحى واللهجة. تخصيص المواد للديموغرافية المحلية. الصلة الثقافية: تفاعل سيناريو الزفاف." }
            },
            strength: {
                title: { en: "💡 CEFR-Aligned Scaffolding", ar: "💡 سقالات متوافقة مع CEFR" },
                description: { en: "Contrasts 'Simplified A1' interview with more complex 'A2' interview, allowing students of different abilities to succeed. Separates progress by mode: F2F had 'strong participation', Online showed 'gradual confidence building'.", ar: "تقارن مقابلة 'A1 مبسطة' بمقابلة 'A2' أكثر تعقيداً، مما يسمح لطلاب بقدرات مختلفة بالنجاح. تفصل التقدم حسب الوضع: الحضوري بـ 'مشاركة قوية'، الأونلاين بـ 'بناء ثقة تدريجي'." }
            },
            encouragement: {
                title: { en: "🚀 Online Focus Challenge", ar: "🚀 تحدي التركيز أونلاين" },
                description: { en: "Honest reporting: 'Online trainees face distractions at home and find it difficult to focus.' Video shows all cameras off. Continue encouraging camera-on policy where possible.", ar: "تقارير صادقة: 'المتدربون أونلاين يواجهون إلهاءات في المنزل ويجدون صعوبة في التركيز.' الفيديو يظهر جميع الكاميرات مغلقة. استمري في تشجيع سياسة تشغيل الكاميرا حيث أمكن." }
            },
            imagePath: null,  // No image available
            evidenceIcon: "💻",  // Hybrid/Online Teaching
            evidenceLabel: { en: "Zoom Recordings & CEFR Docs", ar: "تسجيلات زووم ومستندات CEFR" }
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
            imagePath: null,  // No image available
            evidenceIcon: "🛠️",  // Practical Skills
            evidenceLabel: { en: "Workplace English Report", ar: "تقرير إنجليزية مكان العمل" }
        }
    ]
};
