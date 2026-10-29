import React, { useState } from 'react';
import { LANDING_PATHWAY_SAMPLES } from '../../data/lanjutData';
import Reveal from '../Reveal';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const SAMPLE_KEYS = ['rpl', 'mesin', 'akuntansi'];

export default function SolutionSection({ onOpenDocsChapter }) {
  const [selectedKey, setSelectedKey] = useState('rpl');
  const [svgRef, svgVisible] = useRevealOnScroll({ threshold: 0.25 });

  const currentSample =
    LANDING_PATHWAY_SAMPLES[selectedKey] || LANDING_PATHWAY_SAMPLES.rpl;

  return (
    <section
      className="pathway-map-section"
      id="peta-jalur-smk"
      aria-labelledby="pathway-map-heading"
    >
      <div className="pathway-map-container">
        <Reveal className="pathway-top-bar">
          <div className="pathway-header-copy">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              <span>
                Pembeda Utama LANJUT &bull; Peta Jalur SMK &rarr; Prodi Kuliah
              </span>
            </div>
            <h2 className="section-title" id="pathway-map-heading">
              Satu Jurusan SMK, Beragam Rute Program Studi
            </h2>
            <p className="section-lead" style={{ marginBottom: 0 }}>
              Jurusan SMK tidak menguncimu pada satu pilihan tunggal. Lihat
              contoh bagaimana satu konsentrasi keahlian SMK dapat bercabang
              menuju jalur Vokasi Terapan maupun Sarjana Akademik.
            </p>
          </div>

          {/* Interactive Example Switcher (Starts with RPL/PPLG by Default) */}
          <div className="pathway-quick-switcher">
            <span className="pathway-switcher-label">
              Contoh Konsentrasi Keahlian SMK:
            </span>
            <div
              className="pathway-pill-group"
              role="tablist"
              aria-label="Pilih Contoh Jurusan SMK"
            >
              {SAMPLE_KEYS.map((key) => {
                const sample = LANDING_PATHWAY_SAMPLES[key];
                const isActive = selectedKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`pathway-sample-btn ${isActive ? 'active' : ''}`}
                    id={`sample-btn-${key}`}
                    onClick={() => setSelectedKey(key)}
                  >
                    {sample.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Single Focused Editorial Route Diagram */}
        <Reveal className="editorial-route-board" aria-live="polite" delay={80}>
          <div className="route-diagram-grid" ref={svgRef}>
            {/* Origin Node: SMK Major */}
            <div className="smk-origin-station">
              <span className="smk-origin-tag">
                <span className="route-node-dot" aria-hidden="true" />
                <span>Titik Berangkat SMK</span>
              </span>
              <h3 className="smk-origin-title" id="landing-origin-title">
                {currentSample.title}
              </h3>
              <p className="smk-origin-sub" id="landing-origin-desc">
                {currentSample.desc}
              </p>
              <div className="smk-origin-subjects" id="landing-origin-subjects">
                <strong>Mapel Pendukung Umum:</strong> {currentSample.subjects}
              </div>
            </div>

            {/* Middle SVG Branching Lines (The Living Route) */}
            <div
              className={`route-connector-col ${svgVisible ? 'route-drawn' : ''}`}
              aria-hidden="true"
            >
              <svg
                className="route-connector-svg"
                viewBox="0 0 90 290"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="connector-branch-dashed"
                  d="M 4 145 C 42 145, 44 35, 86 35"
                  stroke="#78A4CB"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                />
                <path
                  className="connector-branch-solid"
                  d="M 4 145 C 42 145, 44 108, 86 108"
                  stroke="#162B44"
                  strokeWidth="2.5"
                />
                <path
                  className="connector-branch-solid"
                  d="M 4 145 C 42 145, 44 182, 86 182"
                  stroke="#162B44"
                  strokeWidth="2.5"
                />
                <path
                  className="connector-branch-dashed"
                  d="M 4 145 C 42 145, 44 255, 86 255"
                  stroke="#78A4CB"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                />
                <circle
                  cx="6"
                  cy="145"
                  r="6"
                  fill="#F4C95D"
                  stroke="#162B44"
                  strokeWidth="2.5"
                />
                <circle cx="84" cy="35" r="4.5" fill="#2B5B84" />
                <circle cx="84" cy="108" r="4.5" fill="#162B44" />
                <circle cx="84" cy="182" r="4.5" fill="#162B44" />
                <circle cx="84" cy="255" r="4.5" fill="#2B5B84" />
              </svg>
            </div>

            {/* Right Nodes: 4 Alternative Higher-Ed Study Pathways */}
            <div className="prodi-branches-list" id="landing-prodi-branches">
              {currentSample.branches.map((branch) => (
                <div
                  key={`${selectedKey}-${branch.type}`}
                  className="prodi-branch-node branch-fade-in"
                >
                  <div className="prodi-pathway-type">
                    <span>{branch.type}</span>
                  </div>
                  <div className="prodi-pathway-detail">
                    <strong>{branch.title}</strong>
                    <span>{branch.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note & Mandatory CTA: "Jelajahi Peta Jalur ->" */}
          <div className="pathway-board-footer">
            <p className="pathway-disclaimer">
              <strong>Catatan Kesesuaian &amp; Regulasi:</strong> Contoh di atas
              merupakan titik awal eksplorasi, bukan pemetaan yang menjamin
              kesesuaian atau penerimaan. Kesesuaian pilihan, mata pelajaran
              pendukung SNBP, dan syarat portofolio bergantung pada kebijakan
              masing-masing program studi serta perguruan tinggi yang dituju.
            </p>

            <button
              type="button"
              className="btn-navy-solid"
              id="btn-jelajahi-peta-jalur"
              onClick={() => onOpenDocsChapter('bab-2')}
            >
              <span>Jelajahi Peta Jalur &rarr;</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

