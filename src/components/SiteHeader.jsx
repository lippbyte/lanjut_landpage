import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BRAND_ASSETS } from '../data/lanjutData';

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda', href: '/' },
  { id: 'tentang', label: 'Tentang LANJUT', href: '/#tentang-lanjut' },
  { id: 'peta', label: 'Peta Jalur SMK', href: '/#peta-jalur-smk' },
  { id: 'panduan', label: 'Panduan', href: '/panduan' },
  { id: 'download', label: 'Download APK', badge: 'APK', href: '/download' },
];

export default function SiteHeader({
  currentView,
  activeLandingSection,
  onNavigate,
  onNavigateLandingSection,
  onOpenDocsChapter,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pillRef = useRef(null);
  const itemRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  // Determine which nav item is currently active
  const getActiveNavId = () => {
    if (currentView === 'panduan') return 'panduan';
    if (currentView === 'download') return 'download';
    if (currentView === 'landing') {
      if (
        activeLandingSection === 'peta-jalur-smk' ||
        activeLandingSection === 'tangga-perjalanan' ||
        activeLandingSection === 'cerita-lanjut'
      ) {
        return 'peta';
      }
      if (
        activeLandingSection === 'persimpangan' ||
        activeLandingSection === 'tentang-lanjut' ||
        activeLandingSection === 'cara-kerja' ||
        activeLandingSection === 'pembuatan-lanjut' ||
        activeLandingSection === 'privasi-faq-kontak' ||
        activeLandingSection === 'faq-beranda' ||
        activeLandingSection === 'kontak-repo'
      ) {
        return 'tentang';
      }
      return 'beranda';
    }
    return null;
  };

  const activeNavId = getActiveNavId();

  const updateIndicator = useCallback(() => {
    if (!activeNavId || !pillRef.current) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const activeEl = itemRefs.current[activeNavId];
    if (!activeEl) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    setIndicatorStyle({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      opacity: 1,
    });
  }, [activeNavId]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    updateIndicator();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateIndicator();
      });
    }
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [updateIndicator]);

  // Close mobile menu on Escape key or when switching to desktop viewport
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 820 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const triggerItemAction = (id) => {
    switch (id) {
      case 'beranda':
        onNavigate('landing');
        break;
      case 'panduan':
        onOpenDocsChapter('bab-1');
        break;
      case 'peta':
        onNavigateLandingSection('peta-jalur-smk');
        break;
      case 'tentang':
        onNavigateLandingSection('tentang-lanjut');
        break;
      case 'download':
        onNavigate('download');
        break;
      default:
        onNavigate('landing');
    }
  };

  const handleLinkClick = (e, callback) => {
    if (
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      setMobileMenuOpen(false);
      callback();
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Left on Desktop: Floating Pill Navbar + Sliding Active Indicator */}
        <nav
          ref={pillRef}
          className="header-nav-left header-nav-pill"
          aria-label="Navigasi Utama"
        >
          <span
            className="nav-sliding-indicator"
            aria-hidden="true"
            style={{
              width: `${indicatorStyle.width}px`,
              transform: `translate3d(${indicatorStyle.left}px, 0, 0)`,
              opacity: indicatorStyle.opacity,
            }}
          />

          {NAV_ITEMS.map((item) => {
            const isActive = activeNavId === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
                href={item.href}
                className={`nav-link ${isActive ? 'active-nav' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) =>
                  handleLinkClick(e, () => triggerItemAction(item.id))
                }
              >
                <span className="nav-link-dot" aria-hidden="true" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="nav-badge-apk">{item.badge}</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Compact Menu Trigger (Left on Mobile) */}
        <button
          type="button"
          className="mobile-menu-btn"
          id="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={
            mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'
          }
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="15" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
          <span>{mobileMenuOpen ? 'Tutup' : 'Menu'}</span>
        </button>

        {/* Right on Desktop & Mobile: Original LANJUT Wordmark */}
        <a
          href="/"
          className="header-logo-right"
          aria-label="Beranda LANJUT — Layanan Navigasi Jalur Untuk Kuliah"
          onClick={(e) => handleLinkClick(e, () => onNavigate('landing'))}
        >
          <img
            src={BRAND_ASSETS.wordmark}
            alt="Logo Wordmark LANJUT"
            className="wordmark-img"
            width="148"
            height="40"
          />
        </a>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        id="mobile-nav-drawer"
        aria-label="Navigasi Mobile"
        hidden={!mobileMenuOpen}
      >
        <a
          href="/"
          className={`mobile-nav-link ${
            activeNavId === 'beranda' ? 'active-nav' : ''
          }`}
          onClick={(e) => handleLinkClick(e, () => onNavigate('landing'))}
        >
          Beranda
        </a>
        <a
          href="/#tentang-lanjut"
          className={`mobile-nav-link ${
            activeNavId === 'tentang' ? 'active-nav' : ''
          }`}
          onClick={(e) =>
            handleLinkClick(e, () => onNavigateLandingSection('tentang-lanjut'))
          }
        >
          Tentang LANJUT &amp; Cara Kerja
        </a>
        <a
          href="/#peta-jalur-smk"
          className={`mobile-nav-link ${
            activeNavId === 'peta' ? 'active-nav' : ''
          }`}
          onClick={(e) =>
            handleLinkClick(e, () => onNavigateLandingSection('peta-jalur-smk'))
          }
        >
          Peta Jalur SMK &rarr; Prodi
        </a>
        <a
          href="/panduan"
          className={`mobile-nav-link ${
            activeNavId === 'panduan' ? 'active-nav' : ''
          }`}
          onClick={(e) => handleLinkClick(e, () => onOpenDocsChapter('bab-1'))}
        >
          Panduan Kuliah SMK
        </a>
        <a
          href="/#tangga-perjalanan"
          className="mobile-nav-link"
          onClick={(e) =>
            handleLinkClick(e, () =>
              onNavigateLandingSection('tangga-perjalanan')
            )
          }
        >
          Tangga Perjalanan Persiapan
        </a>
        <a
          href="/#privasi-faq-kontak"
          className="mobile-nav-link"
          onClick={(e) =>
            handleLinkClick(e, () =>
              onNavigateLandingSection('privasi-faq-kontak')
            )
          }
        >
          Privasi, FAQ &amp; Kontak
        </a>
        <a
          href="/download"
          className={`mobile-nav-link ${
            activeNavId === 'download' ? 'active-nav' : ''
          }`}
          onClick={(e) => handleLinkClick(e, () => onNavigate('download'))}
        >
          <span>Download APK (Android)</span>
          <span className="nav-badge-apk">APK</span>
        </a>
      </nav>
    </header>
  );
}
