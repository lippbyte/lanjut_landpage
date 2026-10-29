import React from 'react';
import { ABOUT_LANJUT_DATA } from '../../data/lanjutData';
import Reveal from '../Reveal';

export default function AboutPositioningSection() {
  return (
    <section
      className="about-lanjut-section"
      id="tentang-lanjut"
      aria-labelledby="about-lanjut-heading"
    >
      <div className="about-lanjut-container">
        <Reveal className="about-lanjut-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            <span>Identitas &amp; Positioning Produk</span>
          </div>
          <h2 className="section-title" id="about-lanjut-heading">
            Apa Itu LANJUT?
          </h2>
          <p className="about-lanjut-lead">
            <strong>{ABOUT_LANJUT_DATA.acronym}</strong> merupakan singkatan
            dari{' '}
            <strong className="about-acronym-highlight">
              {ABOUT_LANJUT_DATA.fullName}
            </strong>
            . Platform ini dirancang sebagai panduan navigasi informasi kuliah
            yang mempertimbangkan kebutuhan siswa SMK&mdash;membantu mereka
            memahami pilihan pendidikan tinggi (Vokasi D3/D4 maupun Akademik S1)
            dan menyusun langkah persiapan secara terarah.
          </p>
        </Reveal>

        {/* Acronym Expansion Strip: L.A.N.J.U.T. = Layanan Navigasi Jalur Untuk Kuliah */}
        <Reveal className="acronym-expansion-card" delay={60}>
          <div className="acronym-badge-row" aria-label="Singkatan LANJUT: Layanan Navigasi Jalur Untuk Kuliah">
            <span className="acronym-word-pill">
              <strong className="acronym-key">LA</strong>yanan
            </span>
            <span className="acronym-word-pill">
              <strong className="acronym-key">N</strong>avigasi
            </span>
            <span className="acronym-word-pill">
              <strong className="acronym-key">J</strong>alur
            </span>
            <span className="acronym-word-pill">
              <strong className="acronym-key">U</strong>ntuk
            </span>
            <span className="acronym-word-pill">
              <strong className="acronym-key">T</strong>ujuan Kuliah
              <span className="acronym-subnote">(Layanan Navigasi Jalur Untuk Kuliah)</span>
            </span>
          </div>

          <div className="positioning-pillars-grid">
            {ABOUT_LANJUT_DATA.positioningpillars.map((pillar) => (
              <div key={pillar.title} className="positioning-pillar-box">
                <span className="positioning-pillar-badge">{pillar.badge}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mandatory Non-Affiliation & Non-Guarantee Boundary Callout */}
        <Reveal className="boundaries-panel" delay={120}>
          <div className="boundaries-panel-header">
            <span className="boundaries-kicker">Batasan Peran Produk</span>
            <h3>{ABOUT_LANJUT_DATA.boundariesTitle}</h3>
          </div>
          <div className="boundaries-grid" role="list">
            {ABOUT_LANJUT_DATA.boundaries.map((item) => (
              <div
                key={item.label}
                className="boundary-card"
                role="listitem"
              >
                <strong>{item.label}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

