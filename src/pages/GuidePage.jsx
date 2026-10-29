import React, { useEffect, useMemo, useState } from 'react';
import {
  BRAND_ASSETS,
  GUIDE_FAQS,
  GUIDE_TOC,
  OFFICIAL_SOURCES,
  PREP_CHECKLIST_ITEMS,
  SMK_CLUSTERS,
} from '../data/lanjutData';
import { useActiveSection } from '../hooks/useActiveSection';
import Reveal from '../components/Reveal';

const CHECKLIST_STORAGE_KEY = 'lanjut_smk_checklist_v1';
const CLUSTER_KEYS = ['ti', 'rekayasa', 'bisnis', 'pariwisata', 'kesehatan'];

export default function GuidePage({
  targetChapter,
  onClearTargetChapter,
  onNavigate,
  onShowToast,
}) {
  const sectionIds = useMemo(() => GUIDE_TOC.map((item) => item.id), []);
  const [activeChapter, setActiveChapter] = useActiveSection(
    sectionIds,
    targetChapter || 'bab-1'
  );
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [selectedClusterKey, setSelectedClusterKey] = useState('ti');

  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const raw = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === PREP_CHECKLIST_ITEMS.length) {
          return parsed.map(Boolean);
        }
      }
    } catch {
      // Ignore storage errors
    }
    return new Array(PREP_CHECKLIST_ITEMS.length).fill(false);
  });

  useEffect(() => {
    try {
      const serialized = checkedItems.map((v) => (v ? 1 : 0));
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(serialized));
    } catch {
      // Ignore storage errors
    }
  }, [checkedItems]);

  const scrollToChapter = (chapterId) => {
    setActiveChapter(chapterId);
    setMobileTocOpen(false);
    const el = document.getElementById(chapterId);
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

  useEffect(() => {
    if (targetChapter) {
      const timer = setTimeout(() => {
        scrollToChapter(targetChapter);
        if (onClearTargetChapter) onClearTargetChapter();
      }, 60);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [targetChapter]);

  const handleToggleCheck = (index) => {
    setCheckedItems((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleResetChecklist = () => {
    setCheckedItems(new Array(PREP_CHECKLIST_ITEMS.length).fill(false));
    if (onShowToast) {
      onShowToast('Checklist persiapan telah diatur ulang.');
    }
  };

  const completedCount = checkedItems.filter(Boolean).length;
  const totalCount = PREP_CHECKLIST_ITEMS.length;
  const currentCluster = SMK_CLUSTERS[selectedClusterKey] || SMK_CLUSTERS.ti;
  const activeTocObj =
    GUIDE_TOC.find((t) => t.id === activeChapter) || GUIDE_TOC[0];

  return (
    <div id="view-panduan" className="view-panel active">
      <div className="docs-page-wrapper" id="panduan-lengkap">
        {/* Mobile Collapsible Quick-Jump TOC */}
        <div className="docs-mobile-toc-wrapper">
          <button
            type="button"
            className="docs-mobile-toc-trigger"
            aria-expanded={mobileTocOpen}
            aria-controls="docs-mobile-toc-panel"
            onClick={() => setMobileTocOpen((prev) => !prev)}
          >
            <span className="docs-mobile-toc-current">
              <span className="docs-toc-num">{activeTocObj.num}</span>
              <span>Daftar Isi: {activeTocObj.label}</span>
            </span>
            <span className="docs-mobile-toc-chevron" aria-hidden="true">
              {mobileTocOpen ? '\u25B4' : '\u25BE'}
            </span>
          </button>

          {mobileTocOpen && (
            <div
              className="docs-mobile-toc-panel"
              id="docs-mobile-toc-panel"
              role="navigation"
              aria-label="Daftar Isi Panduan Mobile"
            >
              <ul className="docs-toc-list">
                {GUIDE_TOC.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`docs-toc-link ${
                        activeChapter === item.id ? 'active' : ''
                      }`}
                      onClick={() => scrollToChapter(item.id)}
                    >
                      <span className="docs-toc-num">{item.num}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="docs-layout-grid">
          {/* Sticky Left Table of Contents Sidebar */}
          <aside
            className="docs-sidebar"
            aria-label="Daftar Isi Panduan LANJUT"
          >
            <div className="docs-sidebar-title">Daftar Isi Panduan</div>
            <ul className="docs-toc-list">
              {GUIDE_TOC.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`docs-toc-link ${
                      activeChapter === item.id ? 'active' : ''
                    }`}
                    id={`toc-${item.id}`}
                    onClick={() => scrollToChapter(item.id)}
                  >
                    <span className="docs-toc-num">{item.num}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="docs-sidebar-meta">
              <strong>Status Verifikasi Data:</strong>
              <br />
              Diverifikasi pada <strong>28 Oktober 2026</strong> merujuk portal
              resmi SNPMB &amp; Pusmendik Kemendikdasmen.
              <div className="docs-sidebar-actions">
                <button
                  type="button"
                  className="station-jump-btn docs-sidebar-btn"
                  onClick={() => onNavigate('landing')}
                >
                  <span>&larr; Kembali ke Beranda</span>
                </button>
                <button
                  type="button"
                  className="station-jump-btn docs-sidebar-btn"
                  onClick={() => onNavigate('download')}
                >
                  <span>Halaman Info APK &rarr;</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Semiformal Documentation Content */}
          <main className="docs-main-content">
            {/* Documentation Intro Banner with Original Blue Mascot (mascot-blue.png) */}
            <Reveal className="docs-intro-banner">
              <div>
                <span className="chapter-kicker">
                  Dokumentasi &amp; Panduan Resmi LANJUT
                </span>
                <h1>Buku Navigasi Kuliah untuk Siswa SMK</h1>
                <p>
                  Disusun dengan bahasa yang lugas, semiformal, dan terstruktur
                  agar kamu bisa membedakan mana{' '}
                  <strong>ketentuan resmi pemerintah</strong>, mana{' '}
                  <strong>tips strategi</strong>, dan mana{' '}
                  <strong>contoh praktis</strong>.
                </p>
              </div>
              <div className="docs-mascot-blue-wrap">
                <img
                  src={BRAND_ASSETS.mascotBlue}
                  alt="Maskot Kelinci Biru LANJUT — Teman Baca Panduan"
                  className="docs-mascot-blue-img"
                  width="105"
                  height="105"
                />
                <span className="docs-mascot-caption">
                  Teman Baca Panduanmu
                </span>
              </div>
            </Reveal>

            {/* BAB 1: MENGENAL LANJUT & CARA PAKAI */}
            <Reveal as="section" className="docs-chapter" id="bab-1">
              <span className="chapter-kicker">
                Bab 01 &bull; Pengenalan Platform
              </span>
              <h2>Apa Itu LANJUT dan Bagaimana Cara Menggunakannya?</h2>
              <p>
                <strong>LANJUT</strong> (
                <em>Layanan Navigasi Jalur Untuk Kuliah</em>) adalah panduan
                informasi terpadu yang dirancang khusus untuk membantu siswa
                Sekolah Menengah Kejuruan (SMK), terutama kelas XII, dalam
                memetakan pilihan pendidikan tinggi dan mempersiapkan syarat
                seleksi masuk perguruan tinggi secara terarah.
              </p>
              <p>
                Berbeda dengan portal berita umum yang informasinya tersebar di
                ratusan artikel terpisah, LANJUT menyatukan alur persiapan dari
                hulu ke hilir: mulai dari mengenali kesesuaian jurusan SMK
                dengan program studi kampus, memahami mekanisme seleksi
                nasional, hingga menyiapkan Tes Kemampuan Akademik (TKA).
              </p>

              <h3>Siapa yang Dapat Menggunakan Panduan Ini?</h3>
              <ul className="docs-list">
                <li>
                  <strong>Siswa SMK Kelas XII:</strong> Sebagai kompas utama
                  dalam memilih jalur SNBP, UTBK-SNBT, maupun Seleksi Mandiri
                  Vokasi/Politeknik.
                </li>
                <li>
                  <strong>Siswa SMK Kelas X &amp; XI:</strong> Untuk
                  merencanakan portofolio karya kejuruan dan menjaga grafik
                  nilai rapor sejak semester awal.
                </li>
                <li>
                  <strong>Guru BK &amp; Orang Tua:</strong> Sebagai rujukan
                  terverifikasi saat mendampingi siswa berdiskusi mengenai studi
                  lanjut.
                </li>
              </ul>

              <h3>Keterangan Penanda Informasi di Halaman Ini</h3>
              <div className="doc-callout official">
                <div className="doc-callout-header">
                  [Informasi Resmi Terverifikasi]
                </div>
                <div>
                  Berisi aturan baku, kuota, komponen penilaian, dan tanggal
                  yang dikutip langsung dari regulasi resmi SNPMB atau
                  Kemendikdasmen.
                </div>
              </div>
              <div className="doc-callout tip">
                <div className="doc-callout-header">[Tips Strategi LANJUT]</div>
                <div>
                  Berisi saran praktis pengelolaan waktu belajar, pemilihan
                  prodi, dan persiapan berkas khusus untuk kondisi siswa SMK
                  yang menjalani PKL.
                </div>
              </div>
              <div className="doc-callout example">
                <div className="doc-callout-header">
                  [Contoh Simulasi Kasus]
                </div>
                <div>
                  Ilustrasi penerapan aturan pada kasus nyata jurusan SMK agar
                  regulasi lebih mudah dipahami.
                </div>
              </div>
            </Reveal>

            {/* BAB 2: EKSPLORASI JURUSAN SMK -> PROGRAM STUDI */}
            <Reveal as="section" className="docs-chapter" id="bab-2">
              <span className="chapter-kicker">
                Bab 02 &bull; Pemetaan Studi
              </span>
              <h2>
                Eksplorasi Hubungan Jurusan SMK dengan Program Studi Kuliah
              </h2>
              <p>
                Lulusan SMK memiliki fleksibilitas unik: kamu dapat memilih
                jalur{' '}
                <strong>
                  Pendidikan Vokasi (D3 atau D4/Sarjana Terapan)
                </strong>{' '}
                yang meneruskan keahlian praktikmu, atau memilih jalur{' '}
                <strong>Pendidikan Akademik (S1)</strong> baik di rumpun yang
                linier maupun lintas bidang. Kesesuaian akhir dan mata pelajaran
                pendukung mengacu pada ketentuan masing-masing program studi dan
                perguruan tinggi tujuan.
              </p>

              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Aspek Perbandingan</th>
                      <th>Vokasi: Diploma Tiga (D3)</th>
                      <th>Vokasi: Sarjana Terapan (D4)</th>
                      <th>Akademik: Sarjana (S1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Masa Studi Umum</strong>
                      </td>
                      <td>3 Tahun (6 Semester)</td>
                      <td>4 Tahun (8 Semester)</td>
                      <td>4 Tahun (8 Semester)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Gelar Lulusan</strong>
                      </td>
                      <td>Ahli Madya (A.Md.)</td>
                      <td>Sarjana Terapan (S.Tr.)</td>
                      <td>Sarjana (S.Kom., S.T., S.E., dll.)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Komposisi Kurikulum</strong>
                      </td>
                      <td>~70% Praktik &amp; Magang, 30% Teori</td>
                      <td>~60% Praktik Terapan, 40% Teori</td>
                      <td>~60&ndash;70% Teori &amp; Riset, 30&ndash;40% Praktik</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Kecocokan bagi Siswa SMK</strong>
                      </td>
                      <td>Siap kerja teknis cepat dengan keahlian spesifik</td>
                      <td>
                        Setara S1 (jenjang KKNI Level 6) dengan keahlian terapan
                        mendalam
                      </td>
                      <td>
                        Mendalami konsep keilmuan, analisis sistem, dan
                        pengembangan riset
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Simulasi Interaktif: Pilih Bidang Keahlian SMK-mu</h3>
              <p style={{ marginBottom: '0.5rem' }}>
                Klik salah satu bidang keahlian SMK di bawah ini untuk melihat
                contoh program studi D3/D4 Vokasi, S1 Akademik, dan mata
                pelajaran pendukung yang relevan:
              </p>

              <div
                className="smk-filter-bar"
                role="tablist"
                aria-label="Filter Bidang Keahlian SMK"
              >
                {CLUSTER_KEYS.map((key) => {
                  const cluster = SMK_CLUSTERS[key];
                  const isActive = selectedClusterKey === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`smk-chip-btn ${isActive ? 'active' : ''}`}
                      id={`chip-${key}`}
                      onClick={() => setSelectedClusterKey(key)}
                    >
                      {cluster.chipLabel}
                    </button>
                  );
                })}
              </div>

              <div
                className="smk-mapping-panel"
                id="smk-mapping-display"
                aria-live="polite"
              >
                <div className="smk-mapping-header">
                  <h3 id="cluster-title" style={{ margin: 0 }}>
                    {currentCluster.title}
                  </h3>
                  <span
                    className="checkpoint-pill"
                    id="cluster-badge"
                    style={{
                      background: 'var(--bg-sky-tint)',
                      color: 'var(--bg-navy)',
                    }}
                  >
                    {currentCluster.badge}
                  </span>
                </div>
                <div className="smk-mapping-grid">
                  <div className="smk-mapping-col">
                    <h4>Opsi Prodi Vokasi (D3 / D4 Sarjana Terapan)</h4>
                    <ul
                      className="docs-list"
                      id="cluster-vokasi-list"
                      style={{ marginBottom: 0, fontSize: '0.9rem' }}
                    >
                      {currentCluster.vokasi.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="smk-mapping-col">
                    <h4>Opsi Prodi Akademik (S1) &amp; Mapel Pendukung</h4>
                    <ul
                      className="docs-list"
                      id="cluster-s1-list"
                      style={{ marginBottom: 0, fontSize: '0.9rem' }}
                    >
                      <li>
                        <strong>Prodi S1:</strong> {currentCluster.s1Prodi}
                      </li>
                      <li>
                        <strong>Mapel Pendukung &amp; Pilihan TKA:</strong>{' '}
                        {currentCluster.s1Mapel}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* BAB 3: JALUR MASUK PERGURUAN TINGGI NEGERI */}
            <Reveal as="section" className="docs-chapter" id="bab-3">
              <span className="chapter-kicker">
                Bab 03 &bull; Regulasi Seleksi Nasional
              </span>
              <h2>
                Informasi Jalur Masuk Perguruan Tinggi Negeri (SNBP, UTBK-SNBT,
                &amp; Mandiri)
              </h2>
              <p>
                Berdasarkan ketentuan resmi{' '}
                <a
                  href="https://snpmb.id/snbp/informasi-umum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-source-link"
                >
                  SNPMB (Seleksi Nasional Penerimaan Mahasiswa Baru)
                </a>
                , siswa SMK memiliki hak yang setara untuk mendaftar ke
                Perguruan Tinggi Negeri (PTN) Akademik, PTN Vokasi (Politeknik
                Negeri), maupun PTKIN melalui tiga jalur utama:
              </p>

              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Jalur Seleksi</th>
                      <th>Basis Penilaian Utama</th>
                      <th>Ketentuan Pilihan Prodi &amp; PTN</th>
                      <th>Kuota Minimum PTN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>1. SNBP</strong>
                        <br />
                        <span
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-ink-muted)',
                          }}
                        >
                          Seleksi Nasional Berdasarkan Prestasi
                        </span>
                      </td>
                      <td>
                        &bull; Min. 50% rerata nilai rapor seluruh mapel (Sem.
                        1&ndash;5)
                        <br />
                        &bull; Maks. 50% nilai mapel pendukung prodi, prestasi,
                        &amp; portofolio
                        <br />
                        &bull; Memiliki nilai{' '}
                        <strong>TKA Kemendikdasmen</strong>
                      </td>
                      <td>
                        Maksimal <strong>2 program studi</strong> dari 1 atau 2
                        PTN.
                        <br />
                        <em>Aturan Provinsi:</em> Jika memilih 1 prodi, bebas
                        memilih PTN di provinsi mana pun. Jika memilih 2 prodi,
                        salah satu PTN wajib berada di provinsi yang sama dengan
                        SMK asal.
                      </td>
                      <td>
                        Min. <strong>20%</strong> dari daya tampung setiap prodi
                        di PTN
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>2. UTBK-SNBT</strong>
                        <br />
                        <span
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-ink-muted)',
                          }}
                        >
                          Seleksi Nasional Berdasarkan Tes
                        </span>
                      </td>
                      <td>
                        Skor Ujian Tulis Berbasis Komputer (Tes Potensi
                        Skolastik, Literasi Bahasa Indonesia &amp; Inggris,
                        serta Penalaran Matematika) + Portofolio
                        (Olahraga/Seni).
                      </td>
                      <td>
                        Dapat memilih hingga{' '}
                        <strong>4 pilihan program studi</strong> dengan
                        ketentuan kombinasi antara Program Akademik (S1) dan
                        Program Vokasi (D3 dan D4/Sarjana Terapan).
                      </td>
                      <td>
                        Min. <strong>40%</strong> (Min. 30% untuk PTN Badan
                        Hukum)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          3. Seleksi Mandiri &amp; Konsorsium Politeknik
                        </strong>
                      </td>
                      <td>
                        Nilai UTBK-SNBT, nilai rapor/TKA, ujian tulis mandiri
                        PTN, atau jalur prestasi kejuaraan vokasi (seperti LKS
                        Tingkat Nasional).
                      </td>
                      <td>
                        Mengikuti regulasi masing-masing PTN atau jalur seleksi
                        bersama Politeknik Negeri se-Indonesia.
                      </td>
                      <td>
                        Maks. <strong>30%</strong> (Maks. 50% untuk PTN Badan
                        Hukum)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="doc-callout official">
                <div className="doc-callout-header">
                  [Informasi Resmi Terverifikasi &bull; Aturan Penguncian
                  Kelulusan SNBP]
                </div>
                <div>
                  Merujuk{' '}
                  <a
                    href="https://snpmb.id/snbp/informasi-umum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ext-source-link"
                  >
                    Informasi Umum SNBP 2026
                  </a>
                  , siswa yang telah dinyatakan <strong>Lulus SNBP 2026</strong>{' '}
                  (maupun lulus SNBP 2024 dan 2025){' '}
                  <strong>tidak dapat mendaftar UTBK-SNBT 2026</strong> dan
                  tidak dapat mendaftar Seleksi Mandiri di PTN mana pun pada
                  tahun 2026. Karena itu, pastikan pilihan pertama dan kedua di
                  SNBP benar-benar prodi yang akan kamu ambil.
                </div>
              </div>

              <div className="doc-callout example">
                <div className="doc-callout-header">
                  [Contoh Simulasi Kasus Pilihan PTN Siswa SMK]
                </div>
                <div>
                  Budi adalah siswa SMKN di Bandung (Jawa Barat). Jika di SNBP
                  Budi memilih 2 prodi&mdash;misalnya Pilihan 1 D4 Teknik
                  Informatika Politeknik Negeri Bandung (Jawa Barat) dan Pilihan
                  2 S1 Teknologi Informasi UGM (DI Yogyakarta)&mdash;kombinasi
                  ini <strong>sah</strong> karena salah satu PTN berada di Jawa
                  Barat.
                </div>
              </div>
            </Reveal>

            {/* BAB 4: INFORMASI TKA KEMENDIKDASMEN & PERSIAPAN */}
            <Reveal as="section" className="docs-chapter" id="bab-4">
              <span className="chapter-kicker">
                Bab 04 &bull; Tes Kemampuan Akademik
              </span>
              <h2>
                Panduan TKA (Tes Kemampuan Akademik) Kemendikdasmen untuk Siswa
                SMK
              </h2>
              <p>
                Apa itu <strong>TKA</strong>? Merujuk laman resmi{' '}
                <a
                  href="https://tka.kemendikdasmen.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-source-link"
                >
                  TKA Kemendikdasmen
                </a>{' '}
                dan regulasi{' '}
                <a
                  href="https://pusmendik.kemendikdasmen.go.id/tka/page/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-source-link"
                >
                  Perka BSKAP Kemendikdasmen Nomor 045/H/AN/2025
                </a>
                , Tes Kemampuan Akademik adalah asesmen terstandar nasional
                untuk mengukur capaian akademik individu murid secara objektif.
              </p>

              <h3>3 Fakta Penting TKA bagi Siswa SMK Kelas XII</h3>
              <ul className="docs-list">
                <li>
                  <strong>Bukan Penentu Kelulusan Sekolah:</strong> Kelulusan
                  dari SMK tetap ditentukan oleh satuan pendidikan. TKA bersifat
                  tidak wajib bagi siswa yang tidak memerlukannya, namun{' '}
                  <strong>sangat krusial bagi siswa yang ingin lanjut kuliah</strong>.
                </li>
                <li>
                  <strong>
                    Syarat &amp; Validator Objektif Nilai Rapor di SNBP:
                  </strong>{' '}
                  Panitia SNPMB menetapkan kepemilikan nilai TKA Kemendikdasmen
                  sebagai syarat bagi siswa <em>eligible</em> SNBP 2026 untuk
                  memvalidasi kesetaraan nilai rapor antarsekolah.
                </li>
                <li>
                  <strong>Sertifikat Hasil TKA (SHTKA):</strong> Hasil TKA
                  dilaporkan dalam rentang nilai dan kategori capaian nasional
                  yang dapat digunakan untuk seleksi perguruan tinggi maupun
                  pemetaan kompetensi dunia kerja.
                </li>
              </ul>

              <h3>Struktur Mata Uji TKA Jenjang SMA/SMK</h3>
              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Kelompok Mata Uji</th>
                      <th>Rincian Mata Pelajaran</th>
                      <th>Pola Pelaksanaan &amp; Tujuan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>1. Mata Pelajaran Wajib</strong>
                        <br />
                        (Diujikan untuk seluruh murid)
                      </td>
                      <td>
                        1. Bahasa Indonesia (Literasi Membaca)
                        <br />
                        2. Bahasa Inggris
                        <br />
                        3. Matematika (Numerasi)
                      </td>
                      <td>
                        Diujikan 1 mata pelajaran wajib per hari untuk mengukur
                        kemampuan bernalar, memahami teks informasi, dan
                        pemecahan masalah kuantitatif.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>2. Mata Pelajaran Pilihan</strong>
                        <br />
                        (Memilih <strong>2 Mata Pelajaran</strong>)
                      </td>
                      <td>
                        Fisika, Kimia, Biologi, Matematika Tingkat Lanjut,
                        Ekonomi, Sosiologi, Geografi, Sejarah, PPKn, Bahasa
                        Asing, atau{' '}
                        <strong>
                          Produk/Projek Kreatif dan Kewirausahaan SMK
                        </strong>
                        .
                      </td>
                      <td>
                        Siswa memilih 2 mapel yang{' '}
                        <strong>
                          paling relevan dengan program studi kuliah
                        </strong>{' '}
                        yang dituju pada SNBP/PTN.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="doc-callout tip">
                <div className="doc-callout-header">
                  [Tips Strategi LANJUT &bull; Cara Latihan TKA Tanpa Mengganggu
                  PKL]
                </div>
                <div>
                  Gunakan fitur resmi{' '}
                  <a
                    href="https://pusmendik.kemendikdasmen.go.id/tka/simulasi_tka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ext-source-link"
                  >
                    Simulasi TKA Pusmendik Kemendikdasmen
                  </a>{' '}
                  selama 30&ndash;45 menit setiap akhir pekan. Pilih 2 mata
                  pelajaran pilihan yang selaras dengan komponen pendukung prodi
                  incaranmu di SNBP agar persiapanmu berlaku ganda!
                </div>
              </div>
            </Reveal>

            {/* BAB 5: LINIMASA & CHECKLIST PERSIAPAN KELAS XII */}
            <Reveal as="section" className="docs-chapter" id="bab-5">
              <span className="chapter-kicker">
                Bab 05 &bull; Jadwal &amp; Rencana Aksi
              </span>
              <h2>Linimasa Resmi &amp; Checklist Persiapan Kuliah Siswa SMK</h2>
              <p>
                Berikut adalah rangkuman jadwal penting merujuk{' '}
                <a
                  href="https://snpmb.id/jadwal-penting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-source-link"
                >
                  Jadwal Resmi SNPMB 2026
                </a>{' '}
                dan jadwal pelaksanaan TKA SMA/SMK Kemendikdasmen:
              </p>

              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Tahapan Seleksi / Kegiatan</th>
                      <th>Rentang Tanggal Resmi (2026)</th>
                      <th>Catatan untuk Siswa SMK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Pengumuman Kuota Sekolah &amp; PDSS</strong>
                      </td>
                      <td>29 Desember 2025 &ndash; 2 Februari 2026</td>
                      <td>
                        Koordinasi dengan Guru BK untuk memastikan NISN, data
                        jurusan SMK, dan nilai rapor Sem. 1&ndash;5 sudah masuk
                        PDSS.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Registrasi Akun SNPMB Siswa</strong>
                      </td>
                      <td>
                        12 Januari &ndash; 18 Februari 2026 (SNBP)
                        <br />
                        12 Januari &ndash; 7 April 2026 (SNBT)
                      </td>
                      <td>
                        Wajib dilakukan oleh seluruh siswa lulusan 2026 di laman{' '}
                        <a
                          href="https://portal.snpmb.id/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ext-source-link"
                        >
                          portal.snpmb.id
                        </a>
                        .
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Pendaftaran SNBP</strong>
                      </td>
                      <td>3 &ndash; 18 Februari 2026</td>
                      <td>
                        Pemilihan prodi (maks. 2 prodi) dan unggah portofolio
                        bagi peminat prodi Seni/Olahraga.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Pengumuman Hasil SNBP</strong>
                      </td>
                      <td>31 Maret 2026</td>
                      <td>
                        Pengumuman kelulusan jalur prestasi pukul 15.00 WIB.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Pendaftaran &amp; Pelaksanaan UTBK-SNBT
                        </strong>
                      </td>
                      <td>
                        Maret &ndash; April 2026 (Pengumuman: 25 Mei 2026)
                      </td>
                      <td>
                        Masa unduh kartu peserta berlangsung 3 Februari &ndash;
                        30 April 2026.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Pelaksanaan Utama TKA SMA/SMK</strong>
                      </td>
                      <td>
                        26 Oktober &ndash; 8 November 2026
                        <br />
                        <span style={{ fontSize: '0.78rem' }}>
                          (Gel. 1: 26&ndash;29 Okt &bull; Gel. 2: 2&ndash;5 Nov
                          2026)
                        </span>
                      </td>
                      <td>
                        Pastikan telah mengikuti gladi bersih di sekolah dan
                        menetapkan 2 mapel pilihan sesuai target prodi.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Checklist Interaktif Persiapan Siswa SMK Kelas XII</h3>
              <p style={{ marginBottom: '0.5rem' }}>
                Centang langkah-langkah yang sudah kamu selesaikan. Progresmu
                tersimpan otomatis di peramban ini:
              </p>

              <div className="checklist-box">
                <div className="checklist-header">
                  <strong style={{ color: 'var(--bg-navy)' }}>
                    Daftar Periksa Kesiapan Kuliah SMK
                  </strong>
                  <div className="checklist-header-right">
                    {completedCount > 0 && (
                      <button
                        type="button"
                        className="checklist-reset-btn"
                        onClick={handleResetChecklist}
                      >
                        Reset
                      </button>
                    )}
                    <span
                      className="checklist-progress-pill"
                      id="checklist-progress-text"
                    >
                      {completedCount} / {totalCount} Selesai
                    </span>
                  </div>
                </div>

                {PREP_CHECKLIST_ITEMS.map((item, idx) => {
                  const isChecked = Boolean(checkedItems[idx]);
                  return (
                    <label
                      key={item.id}
                      className={`checklist-item ${
                        isChecked ? 'checked-row' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="prep-checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleCheck(idx)}
                      />
                      <span>
                        <strong>{item.title}</strong> {item.detail}
                      </span>
                    </label>
                  );
                })}
              </div>
            </Reveal>

            {/* BAB 6: FAQ & DAFTAR SUMBER RESMI TERVERIFIKASI */}
            <Reveal as="section" className="docs-chapter" id="bab-6">
              <span className="chapter-kicker">
                Bab 06 &bull; Tanya Jawab &amp; Referensi
              </span>
              <h2>Pertanyaan yang Sering Diajukan (FAQ) &amp; Sumber Resmi</h2>

              <div className="faq-list">
                {GUIDE_FAQS.map((faq) => (
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
                    <p>
                      {faq.answerPrefix && <strong>{faq.answerPrefix}</strong>}
                      {faq.answerBody}
                      {faq.linkUrl && (
                        <>
                          {' '}
                          (
                          <a
                            href={faq.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ext-source-link"
                          >
                            {faq.linkText}
                          </a>
                          ).
                        </>
                      )}
                    </p>
                  </details>
                ))}
              </div>

              <h3>Daftar Sumber Resmi &amp; Tanggal Pemeriksaan</h3>
              <p>
                Ringkasan ketentuan seleksi nasional, struktur mata uji TKA, dan
                jadwal pada dokumentasi ini mengacu pada dokumen publik yang
                diperiksa pada <strong>28 Oktober 2026</strong> melalui portal
                resmi berikut (sedangkan contoh pemetaan program studi pada Bab
                02 merupakan titik awal eksplorasi dan perlu diperiksa kembali
                pada kebijakan masing-masing perguruan tinggi tujuan):
              </p>
              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Lembaga / Otoritas Resmi</th>
                      <th>Dokumen / Laman Rujukan</th>
                      <th>Tautan Resmi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OFFICIAL_SOURCES.map((source) => (
                      <tr key={source.doc}>
                        <td>
                          <strong>{source.authority}</strong>
                        </td>
                        <td>{source.doc}</td>
                        <td>
                          {source.links.map((link, idx) => (
                            <React.Fragment key={link.url}>
                              {idx > 0 && ' \u2022 '}
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ext-source-link"
                              >
                                {link.label}
                              </a>
                            </React.Fragment>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3>Ketentuan Privasi, Penyimpanan Data, &amp; Perlindungan Siswa</h3>
              <p>
                Sebagai panduan informasi publik, website LANJUT menerapkan
                prinsip minimisasi data dan transparansi fitur:
              </p>
              <ul className="docs-list">
                <li>
                  <strong>Tidak Ada Pengumpulan Data Pribadi di Server:</strong>{' '}
                  Website ini berjalan di sisi peramban (<em>client-side</em>)
                  dan tidak meminta maupun menyimpan nama lengkap, NISN, nilai
                  rapor, nomor telepon, alamat email, atau kata sandi akun
                  SNPMB.
                </li>
                <li>
                  <strong>Penyimpanan Lokal Peramban (localStorage):</strong>{' '}
                  Status centang pada <em>Checklist Persiapan Kelas XII</em> di
                  Bab 05 hanya disimpan di penyimpanan lokal peramban perangkat
                  pengguna (<code>lanjut_smk_checklist_v1</code>) dan dapat
                  dihapus kapan saja melalui tombol <strong>Reset</strong>.
                </li>
                <li>
                  <strong>Status Fitur AI &amp; Persetujuan Orang Tua/Wali:</strong>{' '}
                  Saat ini aplikasi web LANJUT tidak menjalankan fitur asisten
                  percakapan AI maupun mekanisme verifikasi persetujuan orang
                  tua/wali. Kami tidak menyatakan mekanisme tersebut aktif
                  sebelum benar-benar diimplementasikan dan diverifikasi.
                </li>
                <li>
                  <strong>Pendampingan untuk Topik Sensitif:</strong> Untuk
                  keputusan pendidikan yang berdampak besar, kendala biaya,
                  maupun tekanan belajar, siswa sangat disarankan berdiskusi
                  dengan <strong>Guru Bimbingan Konseling (BK)</strong> di
                  sekolah dan <strong>Orang Tua/Wali</strong>.
                </li>
              </ul>
            </Reveal>
          </main>
        </div>
      </div>
    </div>
  );
}

