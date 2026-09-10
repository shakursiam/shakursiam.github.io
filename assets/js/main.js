/**
 * Antigravity Academic Portfolio - Core Client Logic
 * Candidate: Md. Abdus Shakur Siam (shakursiam.github.io)
 */

(function () {
  'use strict';

  // --- Theme Management ---
  const THEME_STORAGE_KEY = 'shakursiam_theme_preference';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) return stored;
    return 'light'; // Default Light Theme as specified
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
      const iconLight = btn.querySelector('.icon-sun');
      const iconDark = btn.querySelector('.icon-moon');
      if (iconLight && iconDark) {
        if (theme === 'dark') {
          iconLight.style.display = 'inline-block';
          iconDark.style.display = 'none';
        } else {
          iconLight.style.display = 'none';
          iconDark.style.display = 'inline-block';
        }
      }
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  }

  // --- Toast Notification ---
  function showToast(message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // --- BibTeX Modal Handler ---
  function initBibtexModal() {
    const modal = document.getElementById('bibtex-modal');
    if (!modal) return;

    const modalCode = document.getElementById('bibtex-code');
    const closeBtn = modal.querySelector('.modal-close-btn');
    const copyBtn = document.getElementById('modal-copy-btn');

    document.querySelectorAll('.open-bibtex-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bibtexId = btn.getAttribute('data-bibtex-target');
        const bibtexEl = document.getElementById(bibtexId);
        if (bibtexEl && modalCode) {
          modalCode.textContent = bibtexEl.textContent.trim();
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        if (modalCode) {
          navigator.clipboard.writeText(modalCode.textContent).then(() => {
            showToast('✓ BibTeX copied to clipboard');
            closeModal();
          }).catch(() => {
            showToast('Press Ctrl+C to copy');
          });
        }
      });
    }
  }

  // --- Project Filtering ---
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const tags = card.getAttribute('data-tags') || '';
          if (filter === 'all' || tags.split(',').map(t => t.trim()).includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Mobile Drawer Menu ---
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
      toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        const isOpen = links.classList.contains('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });

      // Close menu on navigation click
      links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // --- Image Fallback Placeholder Generator ---
  function initImageFallbacks() {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', function () {
        // Prevent broken image icon, replace with high-tech academic placeholder
        const alt = this.getAttribute('alt') || 'System Diagram / Hardware Photograph';
        const parent = this.parentElement;
        if (parent && (parent.classList.contains('project-img-wrapper') || parent.classList.contains('figure-img-wrapper'))) {
          this.style.display = 'none';
          const placeholder = document.createElement('div');
          placeholder.className = 'img-placeholder-tag';
          placeholder.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 8px; opacity: 0.6;">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <div style="font-weight: 500; margin-bottom: 4px;">[Hardware Asset Spec]</div>
            <div style="font-size: 0.76rem; opacity: 0.85;">${alt}</div>
          `;
          parent.appendChild(placeholder);
        }
      });
    });
  }

  // --- DOM Ready Hook ---
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    initMobileMenu();
    initBibtexModal();
    initProjectFilters();
    initImageFallbacks();
  });
})();
