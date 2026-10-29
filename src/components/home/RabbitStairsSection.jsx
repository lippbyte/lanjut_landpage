import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BRAND_ASSETS, RABBIT_STAIRS_STEPS } from '../../data/lanjutData';
import Reveal from '../Reveal';

const STEP_COORDS = [
  { leftPct: 8, bottomPct: 16, tilt: -2 },
  { leftPct: 33, bottomPct: 36, tilt: 2 },
  { leftPct: 58, bottomPct: 56, tilt: -1.5 },
  { leftPct: 82, bottomPct: 76, tilt: 0 },
];

export default function RabbitStairsSection({ onOpenDocsChapter }) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Starts at Tangga 01 (index 0) — never auto-plays on load or scroll
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isHopping, setIsHopping] = useState(false);

  const timersRef = useRef([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  // Listen to prefers-reduced-motion changes & clean up timers on unmount
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return () => clearAllTimers();
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        clearAllTimers();
        setIsHopping(false);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      clearAllTimers();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, [clearAllTimers]);

  const handleSelectStep = (idx) => {
    clearAllTimers();
    if (!reducedMotion && idx !== currentStepIdx) {
      setIsHopping(true);
      const settleTimer = setTimeout(() => setIsHopping(false), 360);
      timersRef.current.push(settleTimer);
    } else {
      setIsHopping(false);
    }
    setCurrentStepIdx(idx);
  };

  const handleRabbitStepForward = () => {
    const nextIdx = (currentStepIdx + 1) % RABBIT_STAIRS_STEPS.length;
    handleSelectStep(nextIdx);
  };

  const activeStepData =
    RABBIT_STAIRS_STEPS[currentStepIdx] || RABBIT_STAIRS_STEPS[0];
  const activeCoord = STEP_COORDS[currentStepIdx] || STEP_COORDS[0];

  return (
    <section
      className="rabbit-stairs-section"
      id="tangga-perjalanan"
      aria-labelledby="rabbit-stairs-heading"
    >
      {/* Keep #cerita-lanjut anchor target available for backward-compatible deep links */}
      <span id="cerita-lanjut" className="sr-anchor-alias" aria-hidden="true" />

      <div className="rabbit-stairs-container">
        <Reveal className="rabbit-stairs-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            <span>Metafora Perjalanan &bull; Langkah Demi Langkah</span>
          </div>
          <h2 className="section-title" id="rabbit-stairs-heading">
            Menaiki Tangga Persiapan Menuju Perguruan Tinggi
          </h2>
          <p className="section-lead" style={{ marginBottom: 0 }}>
            Melanjutkan kuliah setelah SMK bukan lompatan instan, melainkan
            anak tangga yang dinaiki satu per satu. Pilih anak tangga untuk
            melihat tahapan persiapan yang perlu kamu susun.
          </p>
        </Reveal>

        <div className="rabbit-stairs-layout">
          {/* Left / Main Visual: Staircase Stage with Original LANJUT Rabbit Mascot */}
          <div
            className="staircase-visual-stage"
            aria-label="Visualisasi maskot kelinci LANJUT menaiki empat anak tangga persiapan kuliah"
          >
            <div className="staircase-stage-topbar">
              <span className="staircase-stage-kicker">
                Posisi Saat Ini: <strong>{activeStepData.code}</strong> &mdash;{' '}
                {activeStepData.shortTitle}
              </span>
              <span className="staircase-stage-hint">
                Klik anak tangga untuk berpindah tahap
              </span>
            </div>

            <div className="staircase-canvas">
              {/* SVG Trajectory Arc behind the stairs */}
              <svg
                className="staircase-arc-svg"
                viewBox="0 0 600 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 55 255 Q 130 175 198 195 Q 275 110 348 135 Q 425 50 495 75"
                  stroke="#78A4CB"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  opacity="0.7"
                />
                <circle cx="55" cy="255" r="5" fill="#78A4CB" />
                <circle cx="198" cy="195" r="5" fill="#78A4CB" />
                <circle cx="348" cy="135" r="5" fill="#78A4CB" />
                <circle cx="495" cy="75" r="7" fill="#F4C95D" />
              </svg>

              {/* Whole-Mascot Sprite (Moves only when user selects a step or clicks the mascot) */}
              <button
                type="button"
                className={`staircase-rabbit-actor ${
                  isHopping ? 'is-hopping' : ''
                } ${reducedMotion ? 'is-reduced-motion' : ''}`}
                data-step={currentStepIdx + 1}
                onClick={handleRabbitStepForward}
                aria-label={`Maskot Kelinci LANJUT di ${activeStepData.code}. Klik untuk melangkah ke tangga berikutnya`}
                style={{
                  left: `${activeCoord.leftPct}%`,
                  bottom: `${activeCoord.bottomPct}%`,
                  '--rabbit-tilt': `${activeCoord.tilt}deg`,
                }}
              >
                <div className="staircase-rabbit-hop-inner">
                  <img
                    src={BRAND_ASSETS.mascotWhite}
                    alt={`Maskot Kelinci LANJUT berada di ${activeStepData.code}: ${activeStepData.shortTitle}`}
                    className="staircase-rabbit-img"
                    width="96"
                    height="96"
                  />
                </div>
                <span className="staircase-rabbit-shadow" aria-hidden="true" />
              </button>

              {/* 4 Architectural Stair Blocks */}
              <div
                className="staircase-blocks-row"
                role="tablist"
                aria-label="Pilih anak tangga persiapan"
              >
                {RABBIT_STAIRS_STEPS.map((item, idx) => {
                  const isCurrent = idx === currentStepIdx;
                  const isReached = idx <= currentStepIdx;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      className={`stair-block-btn ${
                        isCurrent ? 'is-current' : ''
                      } ${isReached ? 'is-reached' : ''}`}
                      style={{ height: `${item.stairHeight}%` }}
                      onClick={() => handleSelectStep(idx)}
                    >
                      <span className="stair-step-code">{item.code}</span>
                      <span className="stair-step-name">{item.shortTitle}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Active Step Explanation & Direct Action to Guide */}
          <div className="staircase-detail-panel" aria-live="polite">
            <div className="staircase-detail-badge-row">
              <span className="staircase-step-pill">{activeStepData.code}</span>
              <span className="staircase-progress-text">
                Tahap {activeStepData.step} dari {RABBIT_STAIRS_STEPS.length}
              </span>
            </div>

            <h3 className="staircase-detail-title">{activeStepData.title}</h3>
            <p className="staircase-detail-desc">{activeStepData.desc}</p>

            <div
              className="staircase-step-selector"
              aria-label="Navigasi cepat anak tangga"
            >
              {RABBIT_STAIRS_STEPS.map((item, idx) => (
                <button
                  key={item.code}
                  type="button"
                  className={`staircase-mini-tab ${
                    idx === currentStepIdx ? 'active' : ''
                  }`}
                  onClick={() => handleSelectStep(idx)}
                >
                  0{item.step}. {item.shortTitle}
                </button>
              ))}
            </div>

            <div className="staircase-detail-footer">
              <button
                type="button"
                className="btn-navy-solid"
                onClick={() => onOpenDocsChapter(activeStepData.targetChapter)}
              >
                <span>{activeStepData.actionLabel} &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
