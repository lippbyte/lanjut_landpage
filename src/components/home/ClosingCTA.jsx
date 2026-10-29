import React from 'react';
import Reveal from '../Reveal';

export default function ClosingCTA({ onOpenDocsChapter, onNavigate }) {
  return (
    <section
      className="closing-cta-section"
      id="panduan-preview"
      aria-labelledby="closing-heading"
    >
      <Reveal className="closing-cta-inner">
        <h2 className="closing-cta-title" id="closing-heading">
          Siap Menyusun Rute Kuliahmu Setelah SMK?
        </h2>
        <p className="closing-cta-desc">
          Telusuri dokumentasi lengkap langsung di web sebagai panduan utama
          eksplorasi informasi, atau cek halaman informasi aplikasi Android
          LANJUT (APK).
        </p>
        <div
          className="hero-cta-group"
          style={{ justifyContent: 'center' }}
        >
          {/* Destination 1 (Primary): Full Documentation Guide */}
          <button
            type="button"
            className="btn-primary"
            onClick={() => onOpenDocsChapter('bab-1')}
          >
            <span>Buka Halaman Panduan Lengkap</span>
            <svg
              className="btn-arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* Destination 2 (Alternative): Android APK Status & Info Page */}
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate('download')}
          >
            <span>Info &amp; Status Aplikasi Android (APK)</span>
          </button>
        </div>
      </Reveal>
    </section>
  );
}

