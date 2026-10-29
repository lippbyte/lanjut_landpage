import React, { useRef, useState } from 'react';
import {
  CONTACT_REPO_DATA,
  HOME_TRUST_FAQS,
  PRIVACY_SAFETY_DATA,
} from '../../data/lanjutData';
import Reveal from '../Reveal';

export default function TrustFaqContactSection({ onOpenDocsChapter }) {
  const [openFaqId, setOpenFaqId] = useState(HOME_TRUST_FAQS[0].id);
  const faqBtnRefs = useRef([]);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleFaqKeyDown = (e, index) => {
    const total = HOME_TRUST_FAQS.length;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % total;
      faqBtnRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + total) % total;
      faqBtnRefs.current[prevIndex]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      faqBtnRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      faqBtnRefs.current[total - 1]?.focus();
    }
  };

  return (
    <section
      className="trust-faq-contact-section"
      id="privasi-faq-kontak"
      aria-labelledby="trust-privacy-heading"
    >
      <div className="trust-faq-contact-container">
        {/* Part 6: Privasi & Keamanan Siswa */}
        <Reveal className="privacy-summary-panel">
          <div className="privacy-panel-header">
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>{PRIVACY_SAFETY_DATA.eyebrow}</span>
              </div>
              <h2 className="section-title" id="trust-privacy-heading">
                {PRIVACY_SAFETY_DATA.title}
              </h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                {PRIVACY_SAFETY_DATA.lead}
              </p>
            </div>
            <button
              type="button"
              className="station-jump-btn"
              onClick={() => onOpenDocsChapter('bab-6')}
            >
              <span>Lihat Rujukan &amp; Detail di Bab 06 &rarr;</span>
            </button>
          </div>

          <div className="privacy-audit-grid" role="list">
            {PRIVACY_SAFETY_DATA.items.map((item) => (
              <div
                key={item.label}
                className="privacy-audit-card"
                role="listitem"
              >
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Part 7 & 8: FAQ Beranda (Left) + Kontak & Repository (Right) */}
        <div className="faq-contact-split-grid">
          {/* Part 7: Keyboard-Accessible FAQ Accordion */}
          <Reveal className="home-faq-column" id="faq-beranda">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
            </div>
            <h2 className="section-title" style={{ fontSize: 'var(--text-h3)' }}>
              Hal Penting yang Perlu Kamu Ketahui
            </h2>

            <div
              className="home-faq-accordion"
              role="region"
              aria-label="Daftar Pertanyaan Umum LANJUT"
            >
              {HOME_TRUST_FAQS.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                const panelId = `${faq.id}-panel`;
                const btnId = `${faq.id}-trigger`;
                return (
                  <div
                    key={faq.id}
                    className={`home-faq-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <h3 className="home-faq-heading">
                      <button
                        ref={(el) => {
                          faqBtnRefs.current[index] = el;
                        }}
                        type="button"
                        id={btnId}
                        className="home-faq-trigger"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleFaq(faq.id)}
                        onKeyDown={(e) => handleFaqKeyDown(e, index)}
                      >
                        <span>{faq.question}</span>
                        <svg
                          className="home-faq-chevron"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className="home-faq-panel"
                      hidden={!isOpen}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Part 8: Kontak & Repository */}
          <Reveal className="contact-repo-column" id="kontak-repo" delay={90}>
            <div className="contact-repo-card">
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>Kontak &amp; Kode Sumber</span>
              </div>
              <h2
                className="section-title"
                style={{ fontSize: 'var(--text-h3)' }}
              >
                {CONTACT_REPO_DATA.title}
              </h2>
              <p className="contact-repo-lead">{CONTACT_REPO_DATA.desc}</p>

              <div className="contact-status-list">
                {CONTACT_REPO_DATA.items.map((item) => (
                  <div key={item.label} className="contact-status-box">
                    <div className="contact-status-top">
                      <strong>{item.label}</strong>
                      <span className="contact-unconfirmed-pill">
                        {item.status}
                      </span>
                    </div>
                    <p>{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="verified-portals-box">
                <h3>Portal Rujukan Resmi yang Terkonfirmasi</h3>
                <p>
                  Untuk pertanyaan terkait akun pendaftaran seleksi nasional
                  atau jadwal resmi, gunakan kanal penyelenggara berikut:
                </p>
                <ul className="verified-portals-list">
                  {CONTACT_REPO_DATA.verifiedPortals.map((portal) => (
                    <li key={portal.url}>
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="verified-portal-link"
                      >
                        <span>{portal.label}</span>
                        <span className="portal-url-code">{portal.url}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

