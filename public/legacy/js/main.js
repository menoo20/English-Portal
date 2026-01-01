/* ============================================
   Main JavaScript
   English Portal - Blackgold High Institute
   ============================================ */

/**
 * Toggle sidebar on mobile
 */
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    sidebar.classList.toggle('open');

    if (overlay) {
        overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
    }
}

/**
 * Close sidebar when clicking overlay
 */
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    sidebar.classList.remove('open');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

/**
 * Set active navigation item based on current page
 */
function setActiveNavItem() {
    const currentPath = window.location.pathname;

    document.querySelectorAll('.nav-item').forEach(item => {
        const href = item.getAttribute('href');

        if (href) {
            // Check if current path matches or starts with the nav item's href
            const isActive = currentPath.endsWith(href) ||
                (href !== 'index.html' && currentPath.includes(href.replace('index.html', '')));

            item.classList.toggle('active', isActive);
        }
    });
}

/**
 * Animate elements on scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-card, .section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

/**
 * Add animation class styles
 */
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
    document.head.appendChild(style);
}

/**
 * Format date for display
 * @param {string} dateStr - Date string
 * @param {string} lang - Language code
 * @returns {string} - Formatted date
 */
function formatDate(dateStr, lang = 'ar') {
    const date = new Date(dateStr);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', options);
}

/**
 * Load content cards dynamically (for future use)
 * @param {string} containerId - Container element ID
 * @param {Array} items - Array of content items
 */
function loadContentCards(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <h3 class="empty-title" data-i18n="empty.reports"></h3>
        <p class="empty-text" data-i18n="empty.description"></p>
      </div>
    `;
        return;
    }

    container.innerHTML = items.map(item => `
    <a href="${item.url}" class="content-card">
      ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-image">` : ''}
      <div class="card-content">
        <span class="card-category">${item.category}</span>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-excerpt">${item.excerpt}</p>
        <div class="card-meta">
          <span class="card-date">${formatDate(item.date)}</span>
          <span class="card-arrow">→</span>
        </div>
      </div>
    </a>
  `).join('');
}

/**
 * Print current page (for reports)
 */
function printPage() {
    window.print();
}

/**
 * Share page URL
 */
async function sharePage() {
    const shareData = {
        title: document.title,
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}

/**
 * Initialize all functionality
 */
function init() {
    // Set active nav item
    setActiveNavItem();

    // Add animation styles
    addAnimationStyles();

    // Initialize scroll animations
    initScrollAnimations();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }

    // Sidebar overlay click
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    // Close sidebar on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeSidebar();
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
