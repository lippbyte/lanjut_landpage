import React, { useCallback, useEffect, useRef, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import RouteToast from './components/RouteToast';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import DownloadPage from './pages/DownloadPage';
import VisualSystemPage from './pages/VisualSystemPage';

function resolveRouteFromLocation() {
  if (typeof window === 'undefined') {
    return { view: 'landing', chapter: null, section: null };
  }

  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const hash = window.location.hash.replace(/^#/, '');

  if (path === '/panduan' || path === '/docs') {
    const validChapter = /^bab-[1-6]$/.test(hash) ? hash : null;
    return { view: 'panduan', chapter: validChapter, section: null };
  }

  if (
    path === '/download' ||
    path === '/unduh' ||
    path === '/unduh-aplikasi' ||
    path === '/apk'
  ) {
    return { view: 'download', chapter: null, section: hash || null };
  }

  if (path === '/sistem-visual' || path === '/system') {
    return { view: 'system', chapter: null, section: null };
  }

  // Also check hash-based deep links on root path
  if (hash === 'panduan-lengkap' || /^bab-[1-6]$/.test(hash)) {
    return {
      view: 'panduan',
      chapter: /^bab-[1-6]$/.test(hash) ? hash : 'bab-1',
      section: null,
    };
  }

  if (hash === 'unduh-aplikasi') {
    return { view: 'download', chapter: null, section: null };
  }

  const landingSections = [
    'hero-top',
    'persimpangan',
    'tentang-lanjut',
    'cara-kerja',
    'tangga-perjalanan',
    'cerita-lanjut',
    'peta-jalur-smk',
    'pembuatan-lanjut',
    'privasi-faq-kontak',
    'faq-beranda',
    'kontak-repo',
    'panduan-preview',
  ];

  if (landingSections.includes(hash)) {
    return { view: 'landing', chapter: null, section: hash };
  }

  return { view: 'landing', chapter: null, section: null };
}

function viewToPath(viewName) {
  switch (viewName) {
    case 'panduan':
      return '/panduan';
    case 'download':
      return '/download';
    case 'system':
      return '/sistem-visual';
    case 'landing':
    default:
      return '/';
  }
}

export default function App() {
  const initialRoute = resolveRouteFromLocation();
  const [currentView, setCurrentView] = useState(initialRoute.view);
  const [targetChapter, setTargetChapter] = useState(initialRoute.chapter);
  const [activeLandingSection, setActiveLandingSection] = useState(
    initialRoute.section
  );

  const [toastMessage, setToastMessage] = useState('Navigasi aktif');
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef(null);
  const landingScrollLockRef = useRef(0);

  const showRouteToast = useCallback((msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  }, []);

  // Ensure Manrope font is loaded and marked on documentElement
  useEffect(() => {
    if (document.fonts && document.fonts.load) {
      Promise.all([
        document.fonts.load('400 16px "Manrope"'),
        document.fonts.load('500 16px "Manrope"'),
        document.fonts.load('600 16px "Manrope"'),
        document.fonts.load('700 16px "Manrope"'),
        document.fonts.load('800 16px "Manrope"'),
      ])
        .then(() => {
          document.documentElement.setAttribute('data-font-loaded', 'Manrope');
        })
        .catch(() => {});
    }
  }, []);

  // Handle initial section scroll if loaded with a hash on landing
  useEffect(() => {
    if (initialRoute.view === 'landing' && initialRoute.section) {
      const timer = setTimeout(() => {
        const el = document.getElementById(initialRoute.section);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  // Observe landing page sections to smoothly update the navbar Sliding Active Indicator
  useEffect(() => {
    if (
      currentView !== 'landing' ||
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return undefined;
    }

    const sectionIds = [
      'hero-top',
      'persimpangan',
      'tentang-lanjut',
      'cara-kerja',
      'tangga-perjalanan',
      'peta-jalur-smk',
      'pembuatan-lanjut',
      'privasi-faq-kontak',
    ];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < landingScrollLockRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const topId = visible[0].target.id;
          setActiveLandingSection(topId === 'hero-top' ? null : topId);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0, 0.2],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [currentView]);

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const next = resolveRouteFromLocation();
      setCurrentView(next.view);
      setTargetChapter(next.chapter);
      setActiveLandingSection(next.section);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleNavigate = useCallback((viewName) => {
    landingScrollLockRef.current = Date.now() + 700;
    setCurrentView(viewName);
    setActiveLandingSection(null);
    const nextPath = viewToPath(viewName);
    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState({}, '', nextPath);
    }
    scrollToTop();
  }, []);

  const handleNavigateLandingSection = useCallback((sectionId) => {
    landingScrollLockRef.current = Date.now() + 700;
    setCurrentView('landing');
    setActiveLandingSection(sectionId);
    const nextUrl = `/#${sectionId}`;
    if (window.location.pathname !== '/' || window.location.hash !== `#${sectionId}`) {
      window.history.pushState({}, '', nextUrl);
    }
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        const prefersReducedMotion =
          window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    }, 50);
  }, []);

  const handleOpenDocsChapter = useCallback((chapterId = 'bab-1') => {
    setCurrentView('panduan');
    setActiveLandingSection(null);
    setTargetChapter(chapterId);
    const nextUrl = chapterId ? `/panduan#${chapterId}` : '/panduan';
    if (
      window.location.pathname !== '/panduan' ||
      window.location.hash !== `#${chapterId}`
    ) {
      window.history.pushState({}, '', nextUrl);
    }
  }, []);

  return (
    <div className="app-shell">
      <SiteHeader
        currentView={currentView}
        activeLandingSection={activeLandingSection}
        onNavigate={handleNavigate}
        onNavigateLandingSection={handleNavigateLandingSection}
        onOpenDocsChapter={handleOpenDocsChapter}
      />

      {currentView === 'landing' && (
        <HomePage
          onOpenDocsChapter={handleOpenDocsChapter}
          onNavigateLandingSection={handleNavigateLandingSection}
          onNavigate={handleNavigate}
          onShowToast={showRouteToast}
        />
      )}

      {currentView === 'panduan' && (
        <GuidePage
          targetChapter={targetChapter}
          onClearTargetChapter={() => setTargetChapter(null)}
          onNavigate={handleNavigate}
          onShowToast={showRouteToast}
        />
      )}

      {currentView === 'download' && (
        <DownloadPage onOpenDocsChapter={handleOpenDocsChapter} />
      )}

      {currentView === 'system' && <VisualSystemPage />}

      <SiteFooter
        onNavigate={handleNavigate}
        onNavigateLandingSection={handleNavigateLandingSection}
        onOpenDocsChapter={handleOpenDocsChapter}
      />

      <RouteToast message={toastMessage} visible={toastVisible} />
    </div>
  );
}

