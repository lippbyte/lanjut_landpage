import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BRAND_ASSETS } from '../../data/lanjutData';

// 4 Stair Steps in viewBox="0 0 520 430" starting from the bottom-left (Step 1)
const HERO_CLIMB_STEPS = [
  {
    step: 1,
    label: 'Lulus SMK',
    nodeX: 60,
    nodeY: 375,
    rabbitX: 82,
    rabbitY: 375,
    tilt: -2,
    dashOffset: 435,
    toast:
      'Tahap 01 (Lulus SMK): Titik awal perjalanan! Kenali kompetensi keahlian SMK-mu sebelum memilih prodi.',
  },
  {
    step: 2,
    label: 'Petakan Prodi',
    nodeX: 185,
    nodeY: 285,
    rabbitX: 205,
    rabbitY: 285,
    tilt: 2,
    dashOffset: 290,
    toast:
      'Tahap 02 (Petakan Prodi): Hubungkan jurusan SMK-mu dengan pilihan Vokasi (D3/D4) maupun S1 Akademik!',
  },
  {
    step: 3,
    label: 'Pilih Jalur & TKA',
    nodeX: 315,
    nodeY: 195,
    rabbitX: 332,
    rabbitY: 195,
    tilt: -1.5,
    dashOffset: 145,
    toast:
      'Tahap 03 (Pilih Jalur & TKA): Pahami aturan SNBP, UTBK-SNBT, Mandiri, dan TKA Kemendikdasmen!',
  },
  {
    step: 4,
    label: 'Kampus Tujuan',
    nodeX: 445,
    nodeY: 105,
    rabbitX: 445,
    rabbitY: 105,
    tilt: 0,
    dashOffset: 0,
    toast:
      'Tahap 04 (Kampus Tujuan): Siapkan berkas kelas XII dan wujudkan langkahmu di kampus impian!',
  },
];

export default function HeroSection({
  onOpenDocsChapter,
  onNavigateLandingSection,
  onShowToast,
}) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Start at index 0 (Anak Tangga Pertama dari bawah: Lulus SMK)
  const [heroStepIdx, setHeroStepIdx] = useState(0);
  const [hopActive, setHopActive] = useState(false);
  const hopTimerRef = useRef(null);

  const clearHopTimer = useCallback(() => {
    if (hopTimerRef.current) {
      clearTimeout(hopTimerRef.current);
      hopTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return () => clearHopTimer();
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        clearHopTimer();
        setHopActive(false);
      }
    };
    if (mq.addEventListener) {
      mq.addEventListener('change', onChange);
    } else if (mq.addListener) {
      mq.addListener(onChange);
    }
    return () => {
      clearHopTimer();
      if (mq.removeEventListener) {
        mq.removeEventListener('change', onChange);
      } else if (mq.removeListener) {
        mq.removeListener(onChange);
      }
    };
  }, [clearHopTimer]);

  const moveHeroRabbitToStep = (nextIdx) => {
    clearHopTimer();
    const targetStep = HERO_CLIMB_STEPS[nextIdx] || HERO_CLIMB_STEPS[0];
    setHeroStepIdx(nextIdx);

    if (!reducedMotion) {
      setHopActive(false);
      requestAnimationFrame(() => {
        setHopActive(true);
      });
      hopTimerRef.current = setTimeout(() => {
        setHopActive(false);
      }, 460);
    } else {
      setHopActive(false);
    }

    onShowToast(targetStep.toast);
  };

  const handleMascotHop = () => {
    const nextIdx = (heroStepIdx + 1) % HERO_CLIMB_STEPS.length;
    moveHeroRabbitToStep(nextIdx);
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
      callback();
    }
  };

  const currentHeroStep =
    HERO_CLIMB_STEPS[heroStepIdx] || HERO_CLIMB_STEPS[0];

  // Percentage coordinates inside the 520x430 stage board so the rabbit's feet sit directly on each stair tread
  const leftPct = (currentHeroStep.rabbitX / 520) * 100;
  const topPct = (currentHeroStep.rabbitY / 430) * 100;

  return (
    <section
      className="hero-section"
      id="hero-top"
      aria-labelledby="hero-heading"
    >
      <div className="hero-container">
        {/* Left Column: Headline -> Concise Description -> 2 CTAs */}
        <div className="hero-editorial-col">
          <h1 className="hero-headline" id="hero-heading">
            Mau Lanjut Kuliah,{' '}
            <span className="hero-headline-highlight">Mulai dari Mana?</span>
          </h1>

          <p className="hero-description">
            Temukan pilihan studi yang selaras dengan jurusanmu, pahami aturan
            jalur masuk perguruan tinggi, dan persiapkan langkahmu setelah SMK
            bersama LANJUT.
          </p>

          <div className="hero-cta-group">
            <a
              href="/panduan#bab-1"
              className="btn-primary"
              onClick={(e) =>
                handleLinkClick(e, () => onOpenDocsChapter('bab-1'))
              }
            >
              <span>Mulai Jelajahi</span>
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
            </a>

            <a
              href="/#tentang-lanjut"
              className="btn-secondary"
              onClick={(e) =>
                handleLinkClick(e, () =>
                  onNavigateLandingSection('tentang-lanjut')
                )
              }
            >
              <span>Kenali LANJUT</span>
            </a>
          </div>
        </div>

        {/* Right Column: Original White Mascot Climbing from Step 1 (Bottom-Left) to Step 4 (Top-Right) */}
        <div className="hero-mascot-stage">
          <div className="hero-stage-board">
            <svg
              className="hero-route-svg"
              viewBox="0 0 520 430"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* 4 Architectural Stair Treads & Risers rising from bottom-left (Step 1) to top-right (Step 4) */}
              <path
                className="hero-stair-steps-line"
                d="M 35 375 L 160 375 L 160 285 L 285 285 L 285 195 L 410 195 L 410 105 L 485 105"
                stroke="rgba(120, 164, 203, 0.34)"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />

              {/* Highlighted Active Stair Tread under the Rabbit */}
              {heroStepIdx === 0 && (
                <line
                  x1="35"
                  y1="375"
                  x2="160"
                  y2="375"
                  stroke="#F4C95D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              )}
              {heroStepIdx === 1 && (
                <line
                  x1="160"
                  y1="285"
                  x2="285"
                  y2="285"
                  stroke="#F4C95D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              )}
              {heroStepIdx === 2 && (
                <line
                  x1="285"
                  y1="195"
                  x2="410"
                  y2="195"
                  stroke="#F4C95D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              )}
              {heroStepIdx === 3 && (
                <line
                  x1="410"
                  y1="105"
                  x2="485"
                  y2="105"
                  stroke="#F4C95D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              )}

              {/* Full Dashed Route Trajectory passing through all 4 steps */}
              <path
                className="hero-route-path"
                d="M 60 375 C 115 365, 135 295, 185 285 C 240 275, 265 205, 315 195 C 370 185, 395 115, 445 105"
              />

              {/* Progressive Golden Solid Path that grows from Step 1 as the rabbit climbs */}
              <path
                className="hero-route-solid-full"
                d="M 60 375 C 115 365, 135 295, 185 285 C 240 275, 265 205, 315 195 C 370 185, 395 115, 445 105"
                style={{
                  strokeDasharray: 460,
                  strokeDashoffset: currentHeroStep.dashOffset,
                }}
              />

              {/* Step 1 Node (Bottom-Left): Lulus SMK */}
              <circle
                cx="60"
                cy="375"
                r={heroStepIdx === 0 ? '8.5' : '6.5'}
                fill={heroStepIdx >= 0 ? '#F4C95D' : '#78A4CB'}
                stroke="#162B44"
                strokeWidth="2.5"
              />
              {/* Step 2 Node: Petakan Prodi */}
              <circle
                cx="185"
                cy="285"
                r={heroStepIdx === 1 ? '8.5' : '6.5'}
                fill={heroStepIdx >= 1 ? '#F4C95D' : '#162B44'}
                stroke={heroStepIdx >= 1 ? '#F4C95D' : '#78A4CB'}
                strokeWidth="2.5"
              />
              {/* Step 3 Node: Pilih Jalur & TKA */}
              <circle
                cx="315"
                cy="195"
                r={heroStepIdx === 2 ? '8.5' : '6.5'}
                fill={heroStepIdx >= 2 ? '#F4C95D' : '#162B44'}
                stroke={heroStepIdx >= 2 ? '#F4C95D' : '#78A4CB'}
                strokeWidth="2.5"
              />
              {/* Step 4 Node (Top-Right): Kampus Tujuan */}
              <circle
                cx="445"
                cy="105"
                r={heroStepIdx === 3 ? '9.5' : '7.5'}
                fill={heroStepIdx >= 3 ? '#F4C95D' : '#162B44'}
                stroke="#F4C95D"
                strokeWidth="2.5"
              />

              {/* Step Labels */}
              <text
                x="52"
                y="402"
                fill={heroStepIdx === 0 ? '#F4C95D' : '#C2D4E8'}
                fontSize="11.5"
                fontWeight={heroStepIdx === 0 ? '700' : '600'}
              >
                01. Lulus SMK
              </text>
              <text
                x="168"
                y="312"
                fill={heroStepIdx === 1 ? '#F4C95D' : '#C2D4E8'}
                fontSize="11.5"
                fontWeight={heroStepIdx === 1 ? '700' : '600'}
              >
                02. Petakan Prodi
              </text>
              <text
                x="298"
                y="222"
                fill={heroStepIdx === 2 ? '#F4C95D' : '#C2D4E8'}
                fontSize="11.5"
                fontWeight={heroStepIdx === 2 ? '700' : '600'}
              >
                03. Pilih Jalur &amp; TKA
              </text>
              <text
                x="382"
                y="84"
                fill="#F4C95D"
                fontSize="11.5"
                fontWeight="700"
              >
                04. Kampus Tujuan
              </text>
            </svg>

            {/* Whole-Mascot Rabbit Actor positioned directly on the active stair tread */}
            <button
              type="button"
              className={`mascot-pedestal hero-stair-rabbit ${
                hopActive ? 'hop-active' : ''
              } ${reducedMotion ? 'is-reduced-motion' : ''}`}
              id="mascot-trigger"
              data-hero-step={currentHeroStep.step}
              onClick={handleMascotHop}
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                '--hero-tilt': `${currentHeroStep.tilt}deg`,
              }}
              aria-label={`Maskot kelinci LANJUT di anak tangga ${currentHeroStep.step} (${currentHeroStep.label}). Klik untuk menaiki tangga berikutnya`}
            >
              <div className="hero-mascot-hop-arc">
                <img
                  src={BRAND_ASSETS.mascotWhite}
                  alt="Maskot Kelinci Putih LANJUT — Pemandu Navigasi Kuliah Siswa SMK"
                  className="mascot-hero-img"
                  width="138"
                  height="138"
                />
              </div>
            </button>
          </div>

          <button
            type="button"
            className="mascot-station-badge"
            onClick={handleMascotHop}
          >
            <span className="route-node-dot" aria-hidden="true" />
            <span>
              Tahap 0{currentHeroStep.step}/04: {currentHeroStep.label} &bull;
              Klik kelinci untuk naik tangga
            </span>
          </button>
        </div>
      </div>

      <div className="hero-transition-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path
            d="M0,48 L1440,48 L1440,0 C1180,42 820,46 0,12 Z"
            fill="#F6F4EF"
          />
        </svg>
      </div>
    </section>
  );
}
