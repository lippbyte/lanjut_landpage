import React from 'react';
import { HOW_IT_WORKS_NOTICE, HOW_IT_WORKS_STEPS } from '../../data/lanjutData';
import Reveal from '../Reveal';

export default function HowItWorksSection() {
  return (
    <section
      className="how-it-works-section"
      id="cara-kerja"
      aria-labelledby="how-it-works-heading"
    >
      <div className="how-it-works-container">
        <Reveal className="how-it-works-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            <span>Alur Penyusunan Informasi &bull; 3 Tahap</span>
          </div>
          <h2 className="section-title" id="how-it-works-heading">
            Bagaimana Cara Kerja LANJUT?
          </h2>
          <p className="section-lead">
            Agar siswa SMK dapat memahami informasi seleksi perguruan tinggi
            dengan tenang tanpa tercampur opini yang membingungkan, LANJUT
            menyusun materi melalui tiga tahapan berikut:
          </p>
        </Reveal>

        {/* Visual Tiga Tahap */}
        <div
          className="how-steps-visual-grid"
          role="list"
          aria-label="Tiga tahap cara kerja LANJUT"
        >
          {HOW_IT_WORKS_STEPS.map((stage, index) => (
            <Reveal
              key={stage.stepNum}
              as="article"
              className="how-stage-card"
              role="listitem"
              delay={index * 90}
            >
              <div className="how-stage-top">
                <span className="how-stage-num" aria-hidden="true">
                  {stage.stepNum}
                </span>
                <span className="how-stage-badge">{stage.badge}</span>
              </div>

              <h3 className="how-stage-title">{stage.title}</h3>
              <p className="how-stage-desc">{stage.desc}</p>

              <div className="how-stage-meta">
                <span>{stage.metaNote}</span>
              </div>

              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="how-stage-connector" aria-hidden="true">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Honest Verification Boundary Notice */}
        <Reveal className="how-verification-notice" delay={180}>
          <div className="verification-badge-pill">
            Status Pemeriksaan Konten
          </div>
          <p>{HOW_IT_WORKS_NOTICE}</p>
        </Reveal>
      </div>
    </section>
  );
}

