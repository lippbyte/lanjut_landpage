import React from 'react';
import { BRAND_ASSETS, VISUAL_SYSTEM_SWATCHES } from '../data/lanjutData';
import Reveal from '../components/Reveal';

export default function VisualSystemPage() {
  return (
    <div id="view-system" className="view-panel active">
      <section
        className="system-section"
        aria-label="Dokumentasi Sistem Visual LANJUT Blue"
      >
        <Reveal style={{ marginBottom: '2.25rem' }}>
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            <span>
              Art Direction &bull; Editorial Journey (LANJUT Blue Tone +
              Manrope)
            </span>
          </div>
          <h1 className="section-title">
            Sistem Identitas Visual &amp; Harmoni Warna Biru LANJUT
          </h1>
          <p className="section-lead" style={{ marginBottom: 0 }}>
            Seluruh palet warna diturunkan secara harmonis dari warna biru
            langit asli pada huruf <strong>&ldquo;L&rdquo;</strong> wordmark dan
            maskot kelinci LANJUT (<code>#78A4CB</code>), dipadukan dengan
            kanvas biru malam (<em>Deep Lanjut Navy</em> <code>#162B44</code>),
            kertas krem hangat (<code>#F6F4EF</code>), dan tipografi utama{' '}
            <strong>Manrope</strong> (Heading 700&ndash;800, Body 400&ndash;500,
            Navigasi/Tombol 600).
          </p>
        </Reveal>

        <div className="system-grid">
          {/* Color Palette Swatches */}
          <Reveal className="sys-card sys-col-7">
            <div className="section-eyebrow">
              1. Palet Warna Final (Zero Green &bull; WCAG AA/AAA Verified)
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.32rem',
                color: 'var(--bg-navy)',
              }}
            >
              Harmoni Biru LANJUT &amp; Kontras Keterbacaan
            </h2>
            <div className="swatch-grid">
              {VISUAL_SYSTEM_SWATCHES.map((swatch) => (
                <div key={swatch.hex} className="swatch-item">
                  <div
                    className="swatch-color"
                    style={{
                      background: swatch.hex,
                      color: swatch.textColor,
                      borderBottom: swatch.hasBorder
                        ? '1px solid rgba(0,0,0,0.08)'
                        : undefined,
                    }}
                  >
                    {swatch.hex}
                  </div>
                  <div className="swatch-meta">
                    <div className="swatch-name">{swatch.name}</div>
                    <div className="swatch-role">{swatch.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Original Brand Assets Pairing */}
          <Reveal className="sys-card sys-col-5" delay={80}>
            <div className="section-eyebrow">
              2. Audit &amp; Penempatan Aset Asli
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.32rem',
                color: 'var(--bg-navy)',
              }}
            >
              Aturan Latar Maskot Asli
            </h2>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-ink-muted)',
                marginTop: '0.35rem',
              }}
            >
              Seluruh aset menggunakan file PNG asli di folder{' '}
              <code>/assets/</code> tanpa digambar ulang:
            </p>
            <div className="mascot-comparison-grid">
              <div className="mascot-card-dark">
                <img
                  src={BRAND_ASSETS.mascotWhite}
                  alt="Spesimen mascot-white.png di atas latar Navy"
                  className="mascot-specimen-img"
                  width="115"
                  height="115"
                />
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    color: 'var(--accent-sun)',
                  }}
                >
                  mascot-white.png
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-cream-muted)',
                    marginTop: '0.2rem',
                  }}
                >
                  Hero Beranda &amp; Hero APK (#162B44)
                </div>
              </div>
              <div className="mascot-card-light">
                <img
                  src={BRAND_ASSETS.mascotBlue}
                  alt="Spesimen mascot-blue.png di atas latar biru terang"
                  className="mascot-specimen-img"
                  width="115"
                  height="115"
                />
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    color: 'var(--bg-navy)',
                  }}
                >
                  mascot-blue.png
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-ink-muted)',
                    marginTop: '0.2rem',
                  }}
                >
                  Intro Panduan &amp; Banner Bantuan (#E6EFF8)
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

