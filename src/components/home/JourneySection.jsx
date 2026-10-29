import React from 'react';
import Reveal from '../Reveal';

export default function JourneySection({ onOpenDocsChapter }) {
  return (
    <section
      className="journey-section"
      id="cerita-lanjut"
      aria-labelledby="journey-heading"
    >
      <div className="journey-container">
        <Reveal className="journey-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            <span>Perjalanan Persiapan Kelas XII &bull; The Living Route</span>
          </div>
          <h2 className="section-title" id="journey-heading">
            Tiga Tahap Menyusun Langkah Menuju Kampus
          </h2>
          <p className="section-lead" style={{ marginBottom: 0 }}>
            Tak perlu menghafal seluruh aturan sekaligus. Ikuti alur{' '}
            <strong>Kenali &rarr; Petakan &rarr; Persiapkan</strong> yang
            menghubungkan langkah belajarmu di kelas XII dengan ketentuan resmi
            SNPMB dan Kemendikdasmen.
          </p>
        </Reveal>

        <div className="stations-timeline">
          {/* Tahap 01: KENALI */}
          <Reveal as="article" className="station-row" delay={0}>
            <div className="station-number-col">
              <span className="station-num">01</span>
              <span className="station-label">Kenali</span>
            </div>
            <div className="station-copy-col">
              <h3>Kenali Minat, Pilihan Prodi &amp; Alternatif Pendidikan</h3>
              <p>
                Pahami perbedaan kurikulum{' '}
                <strong>Pendidikan Vokasi (D3 / D4 Sarjana Terapan)</strong> dan{' '}
                <strong>Pendidikan Akademik (S1)</strong>, lalu kenali program
                studi yang selaras dengan kompetensi keahlian SMK maupun minat
                pengembangan kariermu.
              </p>
              <button
                type="button"
                className="station-jump-btn"
                onClick={() => onOpenDocsChapter('bab-2')}
              >
                <span>Buka Peta Jurusan SMK &rarr; Prodi</span>
              </button>
            </div>
            <div className="station-visual-col">
              <div className="visual-mini-title">
                <span>Perbandingan Karakter Studi</span>
                <span>Bab 02 Panduan</span>
              </div>
              <div className="route-pill-pair">
                <div className="route-pill-box">
                  <strong>Vokasi (D3 / D4 Terapan)</strong>
                  <span>
                    Porsi sekitar 60&ndash;70% praktik laboratorium/industri;
                    selaras langsung dengan keahlian SMK.
                  </span>
                </div>
                <div className="route-pill-box">
                  <strong>Akademik (S1 Sarjana)</strong>
                  <span>
                    Fokus penguasaan fondasi keilmuan, analisis konseptual, dan
                    riset lintas disiplin.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tahap 02: PETAKAN */}
          <Reveal as="article" className="station-row" delay={80}>
            <div className="station-number-col">
              <span className="station-num">02</span>
              <span className="station-label">Petakan</span>
            </div>
            <div className="station-copy-col">
              <h3>Petakan Jalur Seleksi, Persyaratan &amp; Sumber Resmi</h3>
              <p>
                Pelajari aturan penilaian rapor semester 1&ndash;5 pada SNBP,
                ketentuan kombinasi prodi di UTBK-SNBT, fungsi sertifikat{' '}
                <strong>TKA Kemendikdasmen</strong>, serta rujukan portal resmi
                agar tidak terjebak kabar simpang siur.
              </p>
              <button
                type="button"
                className="station-jump-btn"
                onClick={() => onOpenDocsChapter('bab-3')}
              >
                <span>Pelajari Aturan Seleksi &amp; TKA</span>
              </button>
            </div>
            <div className="station-visual-col">
              <div className="visual-mini-title">
                <span>Komponen Seleksi SNBP + Validator TKA</span>
                <span>SNPMB &amp; BSKAP</span>
              </div>
              <div className="snbp-bar-diagram">
                <div className="snbp-split-track">
                  <div className="snbp-half-a">
                    Min. 50% Rerata Rapor Seluruh Mapel
                  </div>
                  <div className="snbp-half-b">
                    Maks. 50% Mapel Pendukung + Prestasi
                  </div>
                </div>
                <div className="snbp-tka-note">
                  <strong>Plus Nilai TKA Kemendikdasmen:</strong> Mapel Wajib
                  (B. Indonesia, B. Inggris, Matematika) + 2 Mapel Pilihan
                  sesuai prodi.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tahap 03: PERSIAPKAN */}
          <Reveal as="article" className="station-row" delay={140}>
            <div className="station-number-col">
              <span className="station-num">03</span>
              <span className="station-label">Persiapkan</span>
            </div>
            <div className="station-copy-col">
              <h3>Persiapkan Checklist Berkas &amp; Pantau Linimasa Resmi</h3>
              <p>
                Susun daftar periksa verifikasi NISN, portofolio
                kejuruan/sertifikat LKS, dan jadwal simulasi ujian sejak awal
                semester agar persiapan kuliah berjalan beriringan dengan agenda
                PKL maupun UKK SMK.
              </p>
              <button
                type="button"
                className="station-jump-btn"
                onClick={() => onOpenDocsChapter('bab-5')}
              >
                <span>Cek Linimasa &amp; Checklist Kelas XII</span>
              </button>
            </div>
            <div className="station-visual-col">
              <div className="visual-mini-title">
                <span>Siklus Jadwal Resmi Tahun Ajaran 2026</span>
                <span>Sumber: SNPMB &amp; Pusmendik 2026</span>
              </div>
              <div className="timeline-mini-steps">
                <div className="timeline-mini-node">
                  <strong>Jan &ndash; Feb 2026</strong>
                  <span>Registrasi Akun SNPMB &amp; Pendaftaran SNBP</span>
                </div>
                <div className="timeline-mini-node">
                  <strong>Mar &ndash; Mei 2026</strong>
                  <span>Pengumuman SNBP &amp; Pelaksanaan UTBK-SNBT</span>
                </div>
                <div className="timeline-mini-node">
                  <strong>Okt &ndash; Nov 2026</strong>
                  <span>Pelaksanaan TKA SMA/SMK Kemendikdasmen</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

