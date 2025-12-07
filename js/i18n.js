/* ============================================
   Internationalization (i18n) - Language Switching
   English Portal - Blackgold High Institute
   ============================================ */

const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.reports": "التقارير الأسبوعية",
    "nav.blog": "المقالات",
    "nav.resources": "الموارد",
    "nav.about": "حول",

    // Section titles
    "section.main": "القائمة الرئيسية",
    "section.content": "المحتوى",
    "section.latest": "آخر الإضافات",
    "section.reports": "التقارير الأسبوعية",
    "section.articles": "المقالات والمدونة",

    // Actions
    "action.viewAll": "عرض الكل",
    "action.readMore": "اقرأ المزيد",
    "action.back": "العودة",
    "action.print": "طباعة",
    "action.share": "مشاركة",

    // Empty states
    "empty.reports": "لا توجد تقارير حتى الآن",
    "empty.articles": "لا توجد مقالات حتى الآن",
    "empty.description": "سيتم إضافة محتوى جديد قريباً",

    // Page titles
    "page.reports.title": "التقارير الأسبوعية",
    "page.reports.description": "أرشيف التقارير الأسبوعية لقسم اللغة الإنجليزية",
    "page.blog.title": "المقالات والمدونة",
    "page.blog.description": "مقالات ومشاركات حول التعليم والإشراف",

    // Filters
    "filter.all": "الكل",
    "filter.recent": "الأحدث",
    "filter.oldest": "الأقدم",

    // Misc
    "brand.name": "قسم اللغة الإنجليزية",
    "brand.subtitle": "معهد الذهب الأسود العالي",
    "footer.rights": "جميع الحقوق محفوظة",

    // Meeting 01 Report
    "meeting01.category": "الاجتماع الأول",
    "meeting01.title": "محضر اجتماع قسم اللغة الإنجليزية",
    "meeting01.date": "12 ديسمبر 2025",
    "meeting01.author": "قسم اللغة الإنجليزية",

    "meeting01.section1.title": "📚 منهجية التدريس الجديدة",
    "meeting01.section1.content": "تم إبلاغ المعلمين بمنهجية التدريس الجديدة التي تشجع على اللغة الإنجليزية المحادثية والتدريس التفاعلي. يهدف هذا النهج إلى تعزيز مهارات التواصل لدى الطلاب من خلال الحوار والتفاعل المباشر في الفصل الدراسي.",

    "meeting01.section2.title": "📝 التقارير الأسبوعية",
    "meeting01.section2.content": "يجب على كل معلم في قسم اللغة الإنجليزية تقديم تقرير أسبوعي عن عمله وتقدم طلابه. يتم حفظ جميع التقارير في مجلد واحد يمكن الوصول إليه عبر Google Drive.",

    "meeting01.section3.title": "🎯 مواد الفصل الدراسي",
    "meeting01.section3.intro": "طُلب من المعلمين الإبلاغ عن أي نقص في مواد الفصل الدراسي مثل:",
    "meeting01.section3.item1": "السبورات البيضاء",
    "meeting01.section3.item2": "الشاشات",
    "meeting01.section3.item3": "لوحات الإعلانات",
    "meeting01.section3.item4": "الأقلام",
    "meeting01.section3.item5": "وغيرها من المستلزمات...",

    "meeting01.section4.title": "💬 مشاركة المعلمين",
    "meeting01.section4.content": "تم تشجيع المعلمين على المشاركة بآرائهم حول منهجية التدريس الجديدة وتوقعاتهم لكيفية استجابة طلابهم لهذا النهج الجديد.",

    "meeting01.questions.title": "❓ أسئلة تحتاج إجابة",
    "meeting01.questions.q1": "في الأشهر الثلاثة الأولى: هل يجب أن نُدرِّس نفس المنهج، أم يجب على كل منا تعليم الأطفال التحدث من خلال محادثات يجدها مناسبة لاحتياجات طلابه؟"
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.reports": "Weekly Reports",
    "nav.blog": "Articles",
    "nav.resources": "Resources",
    "nav.about": "About",

    // Section titles
    "section.main": "Main Menu",
    "section.content": "Content",
    "section.latest": "Latest Additions",
    "section.reports": "Weekly Reports",
    "section.articles": "Articles & Blog",

    // Actions
    "action.viewAll": "View All",
    "action.readMore": "Read More",
    "action.back": "Back",
    "action.print": "Print",
    "action.share": "Share",

    // Empty states
    "empty.reports": "No reports yet",
    "empty.articles": "No articles yet",
    "empty.description": "New content will be added soon",

    // Page titles
    "page.reports.title": "Weekly Reports",
    "page.reports.description": "Archive of weekly reports for the English Department",
    "page.blog.title": "Articles & Blog",
    "page.blog.description": "Articles and posts about teaching and supervision",

    // Filters
    "filter.all": "All",
    "filter.recent": "Recent",
    "filter.oldest": "Oldest",

    // Misc
    "brand.name": "English Department",
    "brand.subtitle": "Blackgold High Institute",
    "footer.rights": "All rights reserved",

    // Meeting 01 Report
    "meeting01.category": "Meeting 1",
    "meeting01.title": "English Department Meeting Minutes",
    "meeting01.date": "December 12, 2025",
    "meeting01.author": "English Department",

    "meeting01.section1.title": "📚 New Teaching Methodology",
    "meeting01.section1.content": "Teachers were informed about the new teaching method which encourages conversational English and interactive teaching. This approach aims to enhance students' communication skills through dialogue and direct interaction in the classroom.",

    "meeting01.section2.title": "📝 Weekly Reports",
    "meeting01.section2.content": "Each teacher in the English department should submit a weekly report about their work and students' progress. All reports are saved in one folder that can be accessed through Google Drive.",

    "meeting01.section3.title": "🎯 Classroom Materials",
    "meeting01.section3.intro": "Teachers were asked to report any shortage of classroom materials such as:",
    "meeting01.section3.item1": "Whiteboards",
    "meeting01.section3.item2": "Monitors",
    "meeting01.section3.item3": "Pinboards",
    "meeting01.section3.item4": "Markers",
    "meeting01.section3.item5": "And other supplies...",

    "meeting01.section4.title": "💬 Teacher Participation",
    "meeting01.section4.content": "Teachers were encouraged to participate with their opinions about the new teaching approach and how they expect their students to respond.",

    "meeting01.questions.title": "❓ Questions That Need Answers",
    "meeting01.questions.q1": "In the first three months: Should we teach the same curriculum, or should each one of us teach children to talk through conversations he finds suitable for his students' needs?"
  }
};

// Current language (default: Arabic)
let currentLang = localStorage.getItem('portal-lang') || 'ar';

/**
 * Get translated text for a key
 * @param {string} key - Translation key
 * @returns {string} - Translated text
 */
function t(key) {
  return translations[currentLang]?.[key] || translations['en']?.[key] || key;
}

/**
 * Set the current language and update the page
 * @param {string} lang - Language code ('ar' or 'en')
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portal-lang', lang);

  // Update document direction
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Update all translatable elements
  updateTranslations();

  // Update language toggle buttons
  updateLanguageToggle();
}

/**
 * Update all elements with data-i18n attribute
 */
function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });

  // Update title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    element.title = t(key);
  });
}

/**
 * Update language toggle button states
 */
function updateLanguageToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', btnLang === currentLang);
  });
}

/**
 * Toggle between Arabic and English
 */
function toggleLanguage() {
  setLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

/**
 * Initialize i18n on page load
 */
function initI18n() {
  // Set initial language
  setLanguage(currentLang);

  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initI18n);
