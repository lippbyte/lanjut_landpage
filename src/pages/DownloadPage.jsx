import React from 'react';
import { APK_RELEASE_INFO, BRAND_ASSETS } from '../data/lanjutData';
import Reveal from '../components/Reveal';

export default function DownloadPage({ onOpenDocsChapter }) {
  const scrollToApkSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div id="view-download" className="view-panel active">
      <main id="unduh-aplikasi">
        {/* A. HERO DOWNLOAD */}
        <section
          className="apk-hero-section"
          aria-labelledby="apk-hero-heading"
        >
          <div className="apk-hero-container">
            <div className="hero-editorial-col">
              <div className="hero-context-pill">
                <span className="route-node-dot" aria-hidden="true" />
                <span>
                  Aplikasi Pendamping Android &bull; Status Distribusi APK
                </span>
              </div>

              <h1 className="hero-headline" id="apk-hero-heading">
                LANJUT,{' '}
                <span className="hero-headline-highlight">
                  siap menemani langkahmu.
                </span>
              </h1>

              <p className="hero-description">
                Halaman ini disediakan untuk informasi dan unduhan paket
                aplikasi Android LANJUT. Saat ini berkas <code>.apk</code>{' '}
                resmi belum dirilis, sehingga seluruh materi panduan, peta jalur
                SMK, dan checklist persiapan dapat diakses langsung melalui
                website ini.
              </p>

              {/* Honest Status Badge + Functional Web Guide CTA */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  className="btn-apk-disabled"
                  id="btn-unduh-apk-utama"
                  disabled
                  aria-disabled="true"
                >
                  <svg
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>APK belum tersedia untuk diunduh.</span>
                </button>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenDocsChapter('bab-1')}
                >
                  <span>Buka Panduan Web Lengkap</span>
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

                <a
                  href="#langkah-instalasi-apk"
                  className="btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToApkSection('langkah-instalasi-apk');
                  }}
                >
                  <span>Panduan Instalasi &darr;</span>
                </a>
              </div>

              {/* Platform & Honest Package Status Strip */}
              <div
                className="apk-meta-strip"
                aria-label="Informasi Platform dan Status Paket Aplikasi"
              >
                {APK_RELEASE_INFO.metaStrip.map((item) => (
                  <div key={item.label} className="apk-meta-item">
                    <span className="apk-meta-label">{item.label}</span>
                    <span
                      className="apk-meta-val"
                      style={
                        item.isWarning
                          ? { color: 'var(--accent-sun)' }
                          : undefined
                      }
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Illustration with Original White Mascot & The Living Route */}
            <div className="apk-illustration-stage">
              <img
                src={BRAND_ASSETS.mascotWhite}
                alt="Maskot Kelinci Putih LANJUT"
                className="apk-stage-mascot"
                width="195"
                height="195"
              />
              <div className="apk-stage-title">
                Kompas Persiapan Kuliah Siswa SMK
              </div>
              <p className="apk-stage-desc">
                Dirancang fokus membantu siswa kelas XII menavigasi pilihan
                program studi serta memahami aturan seleksi resmi.
              </p>
              <div className="apk-route-mini-nodes" aria-hidden="true">
                <span className="apk-route-step-pill">01. Kenali Pilihan</span>
                <span style={{ color: 'var(--accent-sun)', fontWeight: 800 }}>
                  &rarr;
                </span>
                <span className="apk-route-step-pill">02. Petakan Jalur</span>
                <span style={{ color: 'var(--accent-sun)', fontWeight: 800 }}>
                  &rarr;
                </span>
                <span className="apk-route-step-pill">
                  03. Persiapkan Langkah
                </span>
              </div>
            </div>
          </div>

          {/* Always-Visible Honest APK Package Status Notice */}
          <div
            className="apk-status-drawer open"
            id="apk-status-drawer"
            role="region"
            aria-label="Status Ketersediaan Paket APK"
          >
            <div className="apk-status-drawer-inner">
              <div style={{ maxWidth: '72ch' }}>
                <div className="apk-status-kicker">
                  [Status Ketersediaan Paket Unduhan]
                </div>
                <h2 className="apk-status-heading">
                  APK belum tersedia untuk diunduh.
                </h2>
                <p className="apk-status-body">
                  Saat ini berkas biner <code>.apk</code> maupun tautan rilis
                  resmi belum tersedia di dalam proyek. Sesuai prinsip kejujuran
                  informasi LANJUT, halaman ini tidak menyediakan tautan
                  placeholder maupun mengarang nomor versi, ukuran file, tanggal
                  rilis, persyaratan Android, atau checksum SHA-256. Kamu dapat
                  menggunakan seluruh panduan jalur kuliah SMK dan checklist
                  persiapan langsung di website ini.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B. STATUS METADATA PAKET & KEAMANAN SUMBER TEPERCAYA */}
        <section
          className="apk-specs-section"
          id="spesifikasi-apk"
          aria-labelledby="apk-specs-heading"
        >
          <div className="apk-specs-grid">
            <Reveal className="apk-editorial-box">
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>Transparansi Metadata Paket</span>
              </div>
              <h2
                className="section-title"
                id="apk-specs-heading"
                style={{ fontSize: '1.65rem' }}
              >
                Status Informasi Berkas &amp; Spesifikasi APK
              </h2>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-ink-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                Hanya metadata yang benar-benar terverifikasi dari berkas rilis
                resmi yang akan ditampilkan pada tabel ini:
              </p>
              <div className="docs-table-wrap" style={{ margin: 0 }}>
                <table className="docs-table">
                  <tbody>
                    {APK_RELEASE_INFO.metadataTable.map((row) => (
                      <tr key={row.field}>
                        <td>
                          <strong>{row.field}</strong>
                        </td>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal
              className="apk-editorial-box"
              style={{ backgroundColor: 'var(--bg-sky-surface)' }}
              delay={90}
            >
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>Keamanan &amp; Verifikasi Sumber Resmi</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '1.65rem' }}>
                Panduan Keamanan Mengunduh File APK
              </h2>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-ink-muted)',
                  marginBottom: '1rem',
                }}
              >
                Ketika paket instalasi Android (<code>.apk</code>) resmi telah
                dirilis, pastikan prinsip keamanan berikut selalu diperhatikan:
              </p>
              <ul
                className="docs-list"
                style={{ fontSize: '0.92rem', marginBottom: '1rem' }}
              >
                <li>
                  <strong>Hanya Unduh dari Sumber Resmi yang Ditentukan:</strong>{' '}
                  Hindari mengunduh file APK yang mengatasnamakan LANJUT dari
                  tautan pesan berantai atau situs berbagi berkas pihak ketiga
                  yang tidak terverifikasi.
                </li>
                <li>
                  <strong>Periksa Ekstensi &amp; Checksum Berkas:</strong> File
                  instalasi Android selalu berekstensi <code>.apk</code>, bukan{' '}
                  <code>.exe</code> atau arsip mencurigakan.
                </li>
                <li>
                  <strong>Bebas Permintaan Kredensial SNPMB:</strong> LANJUT
                  adalah alat bantu navigasi informasi dan{' '}
                  <strong>tidak pernah</strong> meminta kata sandi akun SNPMB
                  pribadimu. Pendaftaran resmi hanya dilakukan melalui{' '}
                  <a
                    href="https://portal.snpmb.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ext-source-link"
                  >
                    portal.snpmb.id
                  </a>
                  .
                </li>
              </ul>
              <div className="doc-callout official" style={{ margin: 0 }}>
                <div className="doc-callout-header">
                  [Kebijakan Anti-Tautan Palsu]
                </div>
                <div style={{ fontSize: '0.86rem' }}>
                  Nomor versi rilis, ukuran berkas, tanggal rilis, minimum
                  Android, dan <em>checksum SHA-256</em> hanya akan dipublikasikan
                  apabila file <code>.apk</code> resmi telah tersedia dan
                  terverifikasi.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* C. LANGKAH INSTALASI APK (THE LIVING ROUTE 4 STATIONS) */}
        <section
          className="apk-install-section"
          id="langkah-instalasi-apk"
          aria-labelledby="apk-install-heading"
        >
          <div className="apk-install-container">
            <Reveal style={{ maxWidth: '680px' }}>
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>Gambaran Umum Pemasangan Android &bull; 4 Langkah</span>
              </div>
              <h2 className="section-title" id="apk-install-heading">
                Panduan Ringkas Instalasi APK di Android
              </h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                Sebagai referensi saat file <code>.apk</code> resmi nantinya
                tersedia, berikut tahapan pemasangan paket aplikasi di perangkat
                Android dengan tetap menjaga keamanan perangkat:
              </p>
            </Reveal>

            <div className="apk-steps-route" role="list">
              {APK_RELEASE_INFO.installSteps.map((step, idx) => (
                <Reveal
                  key={step.num}
                  as="article"
                  className="apk-step-station"
                  role="listitem"
                  delay={idx * 70}
                >
                  <span className="apk-step-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* D. FAQ INSTALASI & ALTERNATIF WEB */}
        <section
          className="apk-troubleshoot-section"
          id="bantuan-instalasi-apk"
          aria-labelledby="apk-troubleshoot-heading"
        >
          <div className="apk-troubleshoot-container">
            <Reveal>
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>Tanya Jawab &amp; Informasi Penggunaan</span>
              </div>
              <h2 className="section-title" id="apk-troubleshoot-heading">
                FAQ Status Unduhan &amp; Instalasi Android
              </h2>
              <p className="section-lead">
                Jawaban atas pertanyaan seputar status ketersediaan file{' '}
                <code>.apk</code>, pemasangan aplikasi di Android, dan cara
                mengakses panduan LANJUT melalui peramban web:
              </p>
            </Reveal>

            <Reveal className="faq-list" delay={60}>
              {APK_RELEASE_INFO.troubleshootingFaqs.map((faq) => (
                <details
                  key={faq.id}
                  className="faq-details"
                  open={faq.defaultOpen}
                >
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      &#9662;
                    </span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </Reveal>

            {/* Editorial Companion Box Routing Back to Web Guide */}
            <Reveal
              className="docs-intro-banner"
              style={{ marginTop: '2.5rem', marginBottom: 0 }}
              delay={100}
            >
              <div>
                <span className="chapter-kicker">
                  Akses Langsung Tanpa Instalasi
                </span>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--bg-navy)',
                    margin: '0.25rem 0 0.5rem',
                  }}
                >
                  Mulai Pelajari Materi Sekarang di Halaman Panduan Web
                </h3>
                <p style={{ marginBottom: '1.15rem' }}>
                  Seluruh panduan pemetaan jurusan SMK &rarr; Prodi Kuliah,
                  aturan resmi SNBP/SNBT, materi TKA Kemendikdasmen, dan
                  checklist interaktif tersedia lengkap di Halaman Panduan Web.
                </p>
                <button
                  type="button"
                  className="btn-navy-solid"
                  onClick={() => onOpenDocsChapter('bab-1')}
                >
                  <span>Buka Halaman Panduan Lengkap &rarr;</span>
                </button>
              </div>
              <div className="docs-mascot-blue-wrap">
                <img
                  src={BRAND_ASSETS.mascotBlue}
                  alt="Maskot Kelinci Biru LANJUT"
                  className="docs-mascot-blue-img"
                  width="105"
                  height="105"
                />
                <span className="docs-mascot-caption">Siap di Web &amp; HP</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}

