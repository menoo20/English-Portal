// Schedule data for the 3-month Conversational Program
// 12 weeks across 3 months

export const scheduleData = {
    months: [
        {
            id: 1,
            titleEn: "🗓️ Month 1: Foundation Topics (January 2026)",
            titleAr: "🗓️ الشهر الأول: المواضيع الأساسية (يناير 2026)",
            durationEn: "Weeks 1-4 | 20 Days | Jan 4 - Feb 5",
            durationAr: "الأسابيع 1-4 | 20 يوم | 4 يناير - 5 فبراير",
            weeks: [
                {
                    week: 1,
                    topic: "🍔 How to Order Food at a Restaurant",
                    topicAr: "🍔 كيف تطلب الطعام في المطعم",
                    dates: "Jan 4-8",
                    datesAr: "4-8 يناير",
                    days: 5,
                    schedule: [
                        { date: "Jan 4", day: "Sun", focus: "Vocabulary", objectives: "Learn: menu, order, waiter, table, check" },
                        { date: "Jan 5", day: "Mon", focus: "Phrases", objectives: 'Say: "Can I have...?" / "I want..."' },
                        { date: "Jan 6", day: "Tue", focus: "Numbers", objectives: "Count 1-20, understand prices" },
                        { date: "Jan 7", day: "Wed", focus: "Role Play", objectives: "Practice ordering with a partner" },
                        { date: "Jan 8", day: "Thu", focus: "Review", objectives: "Review all vocabulary and phrases" }
                    ]
                },
                {
                    week: 2,
                    topic: "📅 Talk About Daily Routine",
                    topicAr: "📅 تحدث عن روتينك اليومي",
                    dates: "Jan 11-14",
                    datesAr: "11-14 يناير",
                    days: 4,
                    schedule: [
                        { date: "Jan 11", day: "Sun", focus: "Time Words", objectives: "Learn: morning, afternoon, evening, night" },
                        { date: "Jan 12", day: "Mon", focus: "Verbs", objectives: "Learn: wake up, eat, go, sleep, work" },
                        { date: "Jan 13", day: "Tue", focus: "Sentences", objectives: 'Say: "I wake up at 7" / "I eat breakfast"' },
                        { date: "Jan 14", day: "Wed", focus: "Practice", objectives: "Describe your daily routine" }
                    ]
                },
                {
                    week: 3,
                    topic: "🏙️ Talk About Your Country and City",
                    topicAr: "🏙️ تحدث عن بلدك ومدينتك",
                    dates: "Jan 15-18",
                    datesAr: "15-18 يناير",
                    days: 4,
                    schedule: [
                        { date: "Jan 15", day: "Thu", focus: "Places", objectives: "Learn: country, city, street, building" },
                        { date: "Jan 18", day: "Sun", focus: "Descriptions", objectives: 'Learn: big, small, beautiful, old, new' },
                        { date: "Jan 19", day: "Mon", focus: "Sentences", objectives: 'Say: "I live in..." / "My city is..."' },
                        { date: "Jan 20", day: "Tue", focus: "Speaking", objectives: "Describe your hometown" }
                    ]
                },
                {
                    week: 4,
                    topic: "🛠️ Technical Tools (Specialization English)",
                    topicAr: "🛠️ الأدوات التقنية (إنجليزي تخصصي)",
                    dates: "Jan 21 - Feb 5",
                    datesAr: "21 يناير - 5 فبراير",
                    days: 7,
                    schedule: [
                        { date: "Jan 21", day: "Wed", focus: "Tools Vocab", objectives: "Learn: hammer, drill, wrench, saw" },
                        { date: "Jan 22", day: "Thu", focus: "Actions", objectives: "Learn: fix, build, measure, cut" },
                        { date: "Jan 25", day: "Sun", focus: "Safety", objectives: "Learn: careful, danger, protect, wear" },
                        { date: "Jan 26", day: "Mon", focus: "Instructions", objectives: 'Say: "Use the..." / "Be careful with..."' },
                        { date: "Jan 27", day: "Tue", focus: "Workplace", objectives: "Learn workplace vocabulary" },
                        { date: "Jan 28", day: "Wed", focus: "Practice", objectives: "Role play: giving instructions" },
                        { date: "Feb 5", day: "Thu", focus: "Review", objectives: "Review all technical vocabulary" }
                    ]
                }
            ]
        },
        {
            id: 2,
            titleEn: "🗓️ Month 2: Practical Skills (February 2026)",
            titleAr: "🗓️ الشهر الثاني: المهارات العملية (فبراير 2026)",
            durationEn: "Weeks 5-8 | 22 Days | Feb 8 - Mar 11",
            durationAr: "الأسابيع 5-8 | 22 يوم | 8 فبراير - 11 مارس",
            weeks: [
                {
                    week: 5,
                    topic: "🍕 What's Your Favorite Food",
                    topicAr: "🍕 ما هو طعامك المفضل",
                    dates: "Feb 8-10",
                    datesAr: "8-10 فبراير",
                    days: 3,
                    schedule: [
                        { date: "Feb 8", day: "Sun", focus: "Food Types", objectives: "Learn: pizza, rice, chicken, salad" },
                        { date: "Feb 9", day: "Mon", focus: "Taste Words", objectives: "Learn: delicious, spicy, sweet, salty" },
                        { date: "Feb 10", day: "Tue", focus: "Opinions", objectives: 'Say: "I like..." / "I don\'t like..."' }
                    ]
                },
                {
                    week: 6,
                    topic: "🚑 Emergency Phrases (Medical)",
                    topicAr: "🚑 عبارات الطوارئ (طبية)",
                    dates: "Feb 11-18",
                    datesAr: "11-18 فبراير",
                    days: 6,
                    schedule: [
                        { date: "Feb 11", day: "Wed", focus: "Body Parts", objectives: "Learn: head, arm, leg, stomach" },
                        { date: "Feb 12", day: "Thu", focus: "Pain Words", objectives: "Learn: hurt, pain, sick, fever" },
                        { date: "Feb 15", day: "Sun", focus: "Help Phrases", objectives: 'Say: "I need help" / "Call a doctor"' },
                        { date: "Feb 16", day: "Mon", focus: "Emergency", objectives: 'Say: "It\'s an emergency" / "Where is the hospital?"' },
                        { date: "Feb 17", day: "Tue", focus: "Practice", objectives: "Role play: emergency situations" },
                        { date: "Feb 18", day: "Wed", focus: "Review", objectives: "Review all emergency vocabulary" }
                    ]
                },
                {
                    week: 7,
                    topic: "✈️ How to Book a Room/Ticket (Travel)",
                    topicAr: "✈️ كيف تحجز غرفة/تذكرة (سفر)",
                    dates: "Feb 19-26",
                    datesAr: "19-26 فبراير",
                    days: 6,
                    schedule: [
                        { date: "Feb 19", day: "Thu", focus: "Travel Words", objectives: "Learn: airport, hotel, ticket, passport" },
                        { date: "Feb 22", day: "Sun", focus: "Booking", objectives: 'Say: "I want to book..." / "Is there a room?"' },
                        { date: "Feb 23", day: "Mon", focus: "Dates", objectives: "Learn: check-in, check-out, reservation" },
                        { date: "Feb 24", day: "Tue", focus: "Questions", objectives: 'Ask: "How much?" / "What time?"' },
                        { date: "Feb 25", day: "Wed", focus: "Practice", objectives: "Role play: booking a hotel" },
                        { date: "Feb 26", day: "Thu", focus: "Review", objectives: "Review all travel vocabulary" }
                    ]
                },
                {
                    week: 8,
                    topic: "💼 Prepare for an Interview",
                    topicAr: "💼 استعد لمقابلة عمل",
                    dates: "Mar 1-11",
                    datesAr: "1-11 مارس",
                    days: 7,
                    schedule: [
                        { date: "Mar 1", day: "Sun", focus: "Job Words", objectives: "Learn: job, work, experience, salary" },
                        { date: "Mar 2", day: "Mon", focus: "Introduction", objectives: 'Say: "My name is..." / "I work as..."' },
                        { date: "Mar 3", day: "Tue", focus: "Skills", objectives: 'Say: "I can..." / "I know how to..."' },
                        { date: "Mar 4", day: "Wed", focus: "Questions", objectives: "Learn common interview questions" },
                        { date: "Mar 8", day: "Sun", focus: "Answers", objectives: "Practice answering questions" },
                        { date: "Mar 9", day: "Mon", focus: "Practice", objectives: "Mock interview practice" },
                        { date: "Mar 11", day: "Wed", focus: "Review", objectives: "Review all interview vocabulary" }
                    ]
                }
            ]
        },
        {
            id: 3,
            titleEn: "🗓️ Month 3: Life Skills (March 2026)",
            titleAr: "🗓️ الشهر الثالث: مهارات الحياة (مارس 2026)",
            durationEn: "Weeks 9-12 | 20 Days | Mar 12 - Apr 2",
            durationAr: "الأسابيع 9-12 | 20 يوم | 12 مارس - 2 أبريل",
            weeks: [
                {
                    week: 9,
                    topic: "👕 How to Buy Clothes in a Shop",
                    topicAr: "👕 كيف تشتري ملابس من المتجر",
                    dates: "Mar 12-18",
                    datesAr: "12-18 مارس",
                    days: 5,
                    schedule: [
                        { date: "Mar 12", day: "Thu", focus: "Clothes", objectives: "Learn: shirt, pants, shoes, size" },
                        { date: "Mar 15", day: "Sun", focus: "Colors", objectives: "Learn: red, blue, black, white" },
                        { date: "Mar 16", day: "Mon", focus: "Shopping", objectives: 'Say: "Can I try this?" / "Do you have...?"' },
                        { date: "Mar 17", day: "Tue", focus: "Payment", objectives: 'Say: "How much?" / "I\'ll take this"' },
                        { date: "Mar 18", day: "Wed", focus: "Practice", objectives: "Role play: shopping for clothes" }
                    ]
                },
                {
                    week: 10,
                    topic: "👨‍👩‍👧‍👦 Talk About Your Family",
                    topicAr: "👨‍👩‍👧‍👦 تحدث عن عائلتك",
                    dates: "Mar 19-24",
                    datesAr: "19-24 مارس",
                    days: 4,
                    schedule: [
                        { date: "Mar 19", day: "Thu", focus: "Family", objectives: "Learn: father, mother, brother, sister" },
                        { date: "Mar 22", day: "Sun", focus: "Relatives", objectives: "Learn: uncle, aunt, cousin, grandparents" },
                        { date: "Mar 23", day: "Mon", focus: "Descriptions", objectives: 'Say: "My father is..." / "I have..."' },
                        { date: "Mar 24", day: "Tue", focus: "Practice", objectives: "Describe your family" }
                    ]
                },
                {
                    week: 11,
                    topic: "🚗 Understand Your Car (Car Phrases)",
                    topicAr: "🚗 افهم سيارتك (عبارات السيارة)",
                    dates: "Mar 25-31",
                    datesAr: "25-31 مارس",
                    days: 5,
                    schedule: [
                        { date: "Mar 25", day: "Wed", focus: "Car Parts", objectives: "Learn: engine, wheel, door, window" },
                        { date: "Mar 26", day: "Thu", focus: "Problems", objectives: "Learn: broken, flat tire, empty, full" },
                        { date: "Mar 29", day: "Sun", focus: "Gas Station", objectives: 'Say: "Fill it up" / "Check the..."' },
                        { date: "Mar 30", day: "Mon", focus: "Mechanics", objectives: 'Say: "My car won\'t start" / "Can you fix...?"' },
                        { date: "Mar 31", day: "Tue", focus: "Practice", objectives: "Role play: at the mechanic" }
                    ]
                },
                {
                    week: 12,
                    topic: "📸 Describe a Photo + 👗 Bonus: Describe Your Outfit",
                    topicAr: "📸 وصف صورة + 👗 إضافي: صف ملابسك",
                    dates: "Apr 1-2",
                    datesAr: "1-2 أبريل",
                    days: 6,
                    schedule: [
                        { date: "Apr 1", day: "Wed", focus: "Photo Words", objectives: "Learn: picture, person, place, thing" },
                        { date: "Apr 2", day: "Thu", focus: "Describing", objectives: 'Say: "In this photo..." / "I can see..."' },
                        { date: "Apr 5", day: "Sun", focus: "Positions", objectives: "Learn: left, right, front, back, next to" },
                        { date: "Apr 6", day: "Mon", focus: "Outfit", objectives: 'Bonus: "I\'m wearing..." / "He/She is wearing..."' },
                        { date: "Apr 7", day: "Tue", focus: "Practice", objectives: "Describe photos and outfits" },
                        { date: "Apr 8", day: "Wed", focus: "Final Review", objectives: "Review all 12 weeks of content" }
                    ]
                }
            ]
        }
    ],
    quickReference: [
        { num: 1, topic: "Restaurant", phrase: "Can I have the menu?" },
        { num: 2, topic: "Routine", phrase: "I wake up at 7 AM" },
        { num: 3, topic: "City", phrase: "I live in Riyadh" },
        { num: 4, topic: "Technical", phrase: "Use the drill carefully" },
        { num: 5, topic: "Food", phrase: "I like spicy food" },
        { num: 6, topic: "Emergency", phrase: "Call an ambulance!" },
        { num: 7, topic: "Travel", phrase: "I want to book a room" },
        { num: 8, topic: "Interview", phrase: "I have 5 years experience" },
        { num: 9, topic: "Shopping", phrase: "Do you have size large?" },
        { num: 10, topic: "Family", phrase: "I have two brothers" },
        { num: 11, topic: "Car", phrase: "My tire is flat" },
        { num: 12, topic: "Photo", phrase: "In this picture, I can see..." }
    ],
    teacherNotes: {
        en: [
            "Adjust pace based on student level - some topics may need more time",
            "Use real pictures, videos, and role-play to make lessons engaging",
            "Encourage students to practice outside class (restaurants, shops, etc.)",
            "Focus on speaking confidence, not perfect grammar",
            "Review previous topics regularly to reinforce learning"
        ],
        ar: [
            "اضبط السرعة حسب مستوى الطالب - بعض المواضيع قد تحتاج وقتاً أكثر",
            "استخدم صوراً حقيقية وفيديوهات ولعب أدوار لجعل الدروس ممتعة",
            "شجع الطلاب على الممارسة خارج الفصل (مطاعم، متاجر، إلخ)",
            "ركز على الثقة في التحدث وليس القواعد المثالية",
            "راجع المواضيع السابقة بانتظام لتعزيز التعلم"
        ]
    }
};
