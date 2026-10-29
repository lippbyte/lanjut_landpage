export const BRAND_ASSETS = {
  wordmark: '/assets/lanjut-wordmark-trimmed.png',
  mascotWhite: '/assets/mascot-white.png',
  mascotBlue: '/assets/mascot-blue.png',
};

export const CROSSROADS_NODES = [
  {
    marker: 'A',
    tag: 'Persimpangan 01 \u2022 Jurusan SMK ke Prodi',
    title: 'Kebingungan menghubungkan jurusan SMK dengan program studi',
    descBefore:
      'Banyak siswa SMK yang ingin kuliah merasa ragu saat memetakan konsentrasi keahlian mereka: apakah sebaiknya melanjutkan ke ',
    bold1: 'Pendidikan Vokasi (D3 / D4 Sarjana Terapan)',
    descMiddle: ' yang berfokus pada praktik terapan, atau memilih ',
    bold2: 'S1 Akademik',
    descAfter:
      ' di universitas. Tanpa pemetaan awal, pilihan studi kerap terasa sempit.',
  },
  {
    marker: 'B',
    tag: 'Persimpangan 02 \u2022 Aturan Jalur Seleksi',
    title: 'Memahami aturan jalur seleksi dan syarat spesifik',
    descBefore:
      'Setiap jalur masuk memiliki ketentuan berbeda—mulai dari perhitungan rapor semester 1\u20135 dan mata pelajaran pendukung pada ',
    bold1: 'SNBP',
    descMiddle: ', aturan kombinasi pilihan PTN pada ',
    bold2: 'UTBK-SNBT',
    descAfter:
      ', hingga jalur Seleksi Mandiri Vokasi yang dapat mempertimbangkan sertifikat kompetensi atau portofolio.',
  },
  {
    marker: 'C',
    tag: 'Persimpangan 03 \u2022 Langkah Persiapan Kelas XII',
    title: 'Menentukan langkah persiapan di tengah jadwal PKL & UKK',
    descBefore:
      'Padatnya agenda Praktik Kerja Lapangan (PKL) dan Uji Kompetensi Keahlian (UKK) membuat siswa membutuhkan panduan kapan harus menyiapkan berkas, memverifikasi NISN, serta memahami peran ',
    bold1: 'Tes Kemampuan Akademik (TKA)',
    descMiddle: '',
    bold2: '',
    descAfter: ' Kemendikdasmen dalam perencanaan studi mereka.',
  },
];

export const ABOUT_LANJUT_DATA = {
  acronym: 'LANJUT',
  fullName: 'Layanan Navigasi Jalur Untuk Kuliah',
  letters: [
    { char: 'L', word: 'Layanan', role: 'Pendamping informasi' },
    { char: 'A', word: 'Navigasi', role: 'Penunjuk arah studi' },
    { char: 'N', word: 'Jalur', role: 'Rute Vokasi & Akademik' },
    { char: 'J', word: 'Untuk', role: 'Relevan bagi siswa SMK' },
    { char: 'U', word: 'Kuliah', role: 'Persiapan pendidikan tinggi' },
  ],
  positioningLead:
    'LANJUT (singkatan dari Layanan Navigasi Jalur Untuk Kuliah) adalah panduan navigasi informasi kuliah yang dirancang dengan mempertimbangkan kebutuhan siswa SMK—membantu mereka memahami pilihan pendidikan tinggi dan menyusun langkah persiapan secara bertahap.',
  positioningpillars: [
    {
      badge: 'Fokus Kebutuhan SMK',
      title: 'Menjembatani Kurikulum Kejuruan dengan Pilihan Kampus',
      desc: 'Membantu siswa melihat keterkaitan antara konsentrasi keahlian di SMK dengan opsi D3, D4 (Sarjana Terapan), maupun S1 Akademik tanpa mengabaikan konteks PKL dan UKK.',
    },
    {
      badge: 'Penyusunan Langkah',
      title: 'Mengubah Aturan Kompleks Menjadi Urutan Persiapan',
      desc: 'Merangkum ketentuan dari sumber publik menjadi langkah persiapan yang terstruktur, mulai dari pengenalan jalur masuk hingga daftar periksa dokumen kelas XII.',
    },
  ],
  boundariesTitle: 'Batasan Peran & Transparansi Informasi',
  boundaries: [
    {
      label: 'Bukan Layanan Resmi SNPMB',
      text: 'LANJUT adalah platform panduan independen dan bukan merupakan layanan resmi milik Panitia Nasional SNPMB, Kemendikdasmen, maupun perguruan tinggi mana pun.',
    },
    {
      label: 'Tidak Menjamin Kelulusan',
      text: 'Penggunaan panduan maupun peta eksplorasi prodi di LANJUT tidak menjamin kelulusan atau penerimaan pada seleksi masuk perguruan tinggi.',
    },
    {
      label: 'Tidak Menggantikan Informasi Resmi Kampus',
      text: 'Ringkasan di website ini berfungsi sebagai pengantar navigasi dan tidak menggantikan buku panduan, pengumuman, atau syarat resmi dari masing-masing kampus tujuan.',
    },
  ],
};

export const HOW_IT_WORKS_STEPS = [
  {
    stepNum: '01',
    badge: 'Tahap Pertama \u2022 Rujukan Dasar',
    title: 'Mengacu pada Sumber Resmi',
    desc: 'Materi mengenai aturan jalur seleksi nasional dan asesmen akademik mengacu pada publikasi resmi penyelenggara, yaitu portal Panitia Nasional SNPMB (snpmb.id) dan Pusmendik BSKAP Kemendikdasmen (tka.kemendikdasmen.go.id).',
    metaNote: 'Rujukan: Dokumen publik SNPMB & Perka BSKAP Kemendikdasmen',
  },
  {
    stepNum: '02',
    badge: 'Tahap Kedua \u2022 Kontekstualisasi SMK',
    title: 'Memeriksa Informasi dan Konteksnya',
    desc: 'Informasi yang telah dihimpun diperiksa konteksnya terhadap kebutuhan siswa SMK—seperti bagaimana posisi nilai mata pelajaran kejuruan, perbedaan karakter studi D3/D4 dan S1, serta pemisahan tegas antara aturan resmi dan contoh eksplorasi.',
    metaNote: 'Pemisahan label: Ketentuan Resmi, Tips Strategis, & Contoh Eksplorasi',
  },
  {
    stepNum: '03',
    badge: 'Tahap Ketiga \u2022 Penyajian Terbuka',
    title: 'Menyajikan Ringkasan yang Mudah Dipahami',
    desc: 'Informasi disajikan dalam bahasa yang jernih lengkap dengan tautan ke sumber aslinya. Untuk bagian regulasi SNPMB dan TKA yang rujukannya telah dicatat dalam proyek ini, kami menyertakan tanggal pemeriksaan yang tercatat.',
    metaNote: 'Tercatat diperiksa: 28 Oktober 2026 (khusus rujukan regulasi SNPMB & TKA pada panduan)',
  },
];

export const HOW_IT_WORKS_NOTICE =
  'Catatan Kejujuran Verifikasi: Tanggal pemeriksaan 28 Oktober 2026 hanya berlaku pada ringkasan regulasi SNPMB dan TKA yang memiliki rujukan dokumen resmi di Halaman Panduan. Contoh pemetaan jurusan SMK ke program studi bersifat ilustratif sebagai titik awal eksplorasi dan belum diverifikasi untuk seluruh kebijakan spesifik tiap perguruan tinggi.';

export const RABBIT_STAIRS_STEPS = [
  {
    step: 1,
    code: 'Tangga 01',
    shortTitle: 'Kenali Kompetensi & Jenjang',
    title: 'Mengenali Titik Berangkat SMK & Karakter Studi',
    desc: 'Perjalanan dimulai dengan memahami keahlian yang sudah kamu pelajari di SMK, lalu mengenali perbedaan antara Pendidikan Vokasi (D3 / D4 Sarjana Terapan) dan Pendidikan Akademik (S1).',
    actionLabel: 'Pelajari Bab 01 Panduan',
    targetChapter: 'bab-1',
    stairHeight: 24,
  },
  {
    step: 2,
    code: 'Tangga 02',
    shortTitle: 'Petakan Rute Prodi',
    title: 'Menghubungkan Jurusan SMK dengan Opsi Program Studi',
    desc: 'Melangkah naik untuk memetakan program studi yang relevan maupun lintas disiplin, sambil mengecek mata pelajaran pendukung dan kebutuhan portofolio di kampus tujuan.',
    actionLabel: 'Lihat Peta Prodi di Bab 02',
    targetChapter: 'bab-2',
    stairHeight: 46,
  },
  {
    step: 3,
    code: 'Tangga 03',
    shortTitle: 'Pahami Seleksi & TKA',
    title: 'Memahami Ketentuan SNBP, UTBK-SNBT, Mandiri & TKA',
    desc: 'Mempelajari cara kerja seleksi berdasarkan rapor semester 1\u20135 (SNBP), ujian berbasis komputer (SNBT), serta fungsi Tes Kemampuan Akademik (TKA) Kemendikdasmen.',
    actionLabel: 'Baca Aturan Seleksi di Bab 03',
    targetChapter: 'bab-3',
    stairHeight: 68,
  },
  {
    step: 4,
    code: 'Tangga 04',
    shortTitle: 'Siapkan Berkas & Langkah',
    title: 'Menyusun Checklist Persiapan Kelas XII Menuju Kampus',
    desc: 'Di puncak tangga persiapan, kamu menyelaraskan jadwal PKL/UKK dengan verifikasi NISN, penyiapan sertifikat kompetensi/prestasi, dan pendaftaran di portal resmi.',
    actionLabel: 'Buka Checklist di Bab 05',
    targetChapter: 'bab-5',
    stairHeight: 90,
  },
];

export const HOW_ITS_MADE_DATA = {
  eyebrow: 'Transparansi Produk \u2022 Bagaimana LANJUT Dibuat',
  title: 'Dirancang sebagai Inisiatif Navigasi Edukasi dalam Konteks Portofolio EDILAKSO',
  lead: 'LANJUT dikembangkan untuk menjawab kebutuhan informasi pendidikan tinggi yang lebih ramah bagi siswa SMK, dengan mengedepankan desain editorial yang tenang dan batas informasi yang jujur.',
  cards: [
    {
      badge: '01 \u2022 Pengembangan Produk & Konteks EDILAKSO',
      title: 'Inisiatif Produk dalam Ekosistem Proyek EDILAKSO',
      desc: 'Proyek website LANJUT disusun dalam konteks pengembangan produk dan portofolio EDILAKSO (EDILAKSO Group). Fokus pengembangannya adalah membangun web panduan interaktif berbasis React yang ringan, responsif di perangkat mobile maupun desktop, dan mudah dipelihara.',
    },
    {
      badge: '02 \u2022 Peran Tim & Pengelolaan Konten',
      title: 'Perancangan Arsitektur Informasi & Sistem Visual',
      desc: 'Proses pengerjaan mencakup riset dokumen regulasi publik, penyusunan struktur informasi 6 bab panduan, perancangan identitas visual LANJUT Blue Tone bersama maskot kelinci asli, serta implementasi komponen aksesibel tanpa mengarang nama individu, jabatan, atau kredensial yang belum dipublikasikan.',
    },
    {
      badge: '03 \u2022 Proses Pemeriksaan Informasi',
      title: 'Pemisahan Ketentuan Resmi, Tips, dan Contoh Eksplorasi',
      desc: 'Setiap konten dikelola dengan membedakan tiga kategori secara eksplisit: (1) Ketentuan Resmi yang mengutip portal SNPMB/Kemendikdasmen, (2) Tips Strategis untuk persiapan belajar di SMK, dan (3) Contoh Eksplorasi sebagai referensi awal pemetaan jurusan.',
    },
  ],
  honestyStatement:
    'Catatan Keterbukaan: LANJUT merupakan proyek independen dan tidak mengklaim kerja sama resmi, kemitraan, maupun dukungan institusional dari kementerian, panitia seleksi nasional, atau perguruan tinggi.',
};

export const PRIVACY_SAFETY_DATA = {
  eyebrow: 'Kepercayaan & Perlindungan Pengguna',
  title: 'Ringkasan Privasi dan Keamanan Siswa',
  lead: 'Kami merancang website LANJUT agar siswa SMK dapat membaca panduan dan mengeksplorasi jalur kuliah tanpa perlu menyerahkan data pribadi sensitif.',
  items: [
    {
      label: 'Data yang Dikumpulkan',
      detail:
        'Website ini tidak memiliki formulir pendaftaran akun, tidak melacak identitas pribadi, dan tidak mengumpulkan nama, NISN, nilai rapor, alamat email, maupun kata sandi ke server.',
    },
    {
      label: 'Penyimpanan Lokal di Peramban',
      detail:
        'Fitur interaktif seperti Checklist Persiapan Kelas XII hanya menyimpan status centang pada penyimpanan lokal peramban (localStorage: lanjut_smk_checklist_v1) di perangkatmu sendiri dan dapat direset kapan saja.',
    },
    {
      label: 'Status Fitur AI & Persetujuan Orang Tua/Wali',
      detail:
        'Saat ini website LANJUT berjalan sebagai panduan dokumentasi statis dan belum mengaktifkan fitur asisten AI maupun mekanisme verifikasi persetujuan orang tua/wali di aplikasi web ini. Kami tidak mengklaim mekanisme persetujuan tersebut telah aktif sebelum benar-benar diterapkan dan diverifikasi.',
    },
    {
      label: 'Keamanan & Alur Bantuan Topik Sensitif',
      detail:
        'Tidak ada layanan digital yang dapat menjamin keamanan absolut; selalu jaga kerahasiaan akun resmi SNPMB-mu. Untuk kebimbangan memilih masa depan, kendala biaya kuliah, atau tekanan belajar yang bersifat sensitif, kami menyarankan siswa berkonsultasi langsung dengan Guru BK di sekolah serta Orang Tua/Wali.',
    },
  ],
};

export const HOME_TRUST_FAQS = [
  {
    id: 'home-faq-1',
    question: 'Apakah LANJUT merupakan layanan resmi SNPMB?',
    answer:
      'Bukan. LANJUT (Layanan Navigasi Jalur Untuk Kuliah) adalah panduan navigasi informasi kuliah independen yang dikembangkan dalam konteks proyek EDILAKSO. LANJUT tidak berafiliasi dengan Panitia Nasional SNPMB maupun Kemendikdasmen, dan seluruh proses pendaftaran seleksi tetap dilakukan langsung melalui portal resmi snpmb.id.',
  },
  {
    id: 'home-faq-2',
    question: 'Apakah LANJUT gratis?',
    answer:
      'Ya, akses ke seluruh panduan informasi, peta eksplorasi jurusan SMK ke program studi, dan daftar periksa persiapan di website LANJUT sepenuhnya gratis tanpa biaya berlangganan dan tanpa perlu membuat akun.',
  },
  {
    id: 'home-faq-3',
    question: 'Apakah data saya aman?',
    answer:
      'Website LANJUT tidak mengumpulkan atau menyimpan data pribadi seperti NISN, nilai rapor, nomor telepon, atau kata sandi di server mana pun. Pilihan pada checklist persiapan hanya tersimpan secara lokal di peramban perangkatmu (localStorage) dan bisa dihapus kapan saja. Meskipun demikian, kami tidak menjanjikan keamanan absolut—pastikan kamu tidak pernah membagikan kata sandi akun SNPMB kepada pihak mana pun.',
  },
  {
    id: 'home-faq-4',
    question: 'Kenapa ada fitur yang belum tersedia?',
    answer:
      'Beberapa komponen—seperti berkas instalasi aplikasi Android (.apk), fitur diskusi berbasis AI, serta mekanisme persetujuan orang tua/wali terintegrasi—masih berada dalam tahap pengembangan dan belum dirilis di repositori proyek. Kami memilih menyampaikan status sebenarnya secara jujur daripada menampilkan tautan palsu atau mengklaim fitur yang belum diverifikasi.',
  },
  {
    id: 'home-faq-5',
    question: 'Apakah eksplorasi prodi menjamin saya bisa masuk?',
    answer:
      'Tidak. Peta jurusan SMK ke program studi D3, D4, dan S1 di LANJUT disusun sebagai gambaran awal untuk membantu kamu mengenali opsi studi yang relevan. Keputusan penerimaan mahasiswa baru sepenuhnya ditentukan oleh hasil seleksi resmi dan kebijakan masing-masing perguruan tinggi tujuan.',
  },
  {
    id: 'home-faq-6',
    question: 'Bagaimana cara melaporkan informasi yang keliru?',
    answer:
      'Jika kamu menemukan ringkasan yang perlu diperbarui atau ketidaksesuaian dengan aturan terbaru, kamu dapat memeriksa rujukan utamanya di tabel Sumber Resmi pada Bab 06 Halaman Panduan. Saluran email umpan balik dan repository publik akan ditampilkan pada bagian Kontak segera setelah URL resminya dikonfirmasi.',
  },
];

export const CONTACT_REPO_DATA = {
  title: 'Kontak Umpan Balik & Status Repository',
  desc: 'Kami berkomitmen hanya menampilkan alamat kontak dan tautan repository yang telah dikonfirmasi secara resmi agar pengguna tidak diarahkan ke alamat yang keliru.',
  items: [
    {
      label: 'Kontak Pertanyaan & Umpan Balik',
      status: 'Belum dikonfirmasi di repositori proyek',
      note: 'Alamat email resmi dan formulir pelaporan koreksi konten belum ditetapkan dalam metadata proyek saat ini.',
    },
    {
      label: 'Repository Kode Sumber',
      status: 'Belum dikonfirmasi sebagai repository publik',
      note: 'URL repository publik belum tersedia di konfigurasi proyek; tautan akan ditambahkan setelah akses publik dikonfirmasi.',
    },
  ],
  verifiedPortals: [
    {
      label: 'Portal Resmi SNPMB',
      url: 'https://snpmb.id/',
    },
    {
      label: 'FAQ & Informasi Resmi SNPMB',
      url: 'https://snpmb.id/faq',
    },
    {
      label: 'Portal Resmi TKA Kemendikdasmen',
      url: 'https://tka.kemendikdasmen.go.id/',
    },
  ],
};

export const LANDING_PATHWAY_SAMPLES = {
  rpl: {
    key: 'rpl',
    shortLabel: 'RPL / PPLG',
    title: 'Rekayasa Perangkat Lunak (RPL / PPLG)',
    desc: 'Fokus SMK: Pemrograman aplikasi, basis data, rekayasa gim, dan pengujian perangkat lunak.',
    subjects: 'Matematika, Matematika Tingkat Lanjut / Fisika, & Produk Kreatif SMK.',
    branches: [
      {
        type: '01 \u2022 D4 Sarjana Terapan',
        title: 'D4 Teknologi Rekayasa Perangkat Lunak / Teknik Informatika',
        desc: 'Politeknik Negeri \u2022 ~60% rekayasa praktik industri & proyek sistem (Setara S1 / Level 6 KKNI).',
      },
      {
        type: '02 \u2022 S1 Akademik Linier',
        title: 'S1 Ilmu Komputer / S1 Informatika / Teknologi Informasi',
        desc: 'Universitas Negeri & Swasta \u2022 Fokus fondasi algoritma, kecerdasan buatan, dan arsitektur komputasi.',
      },
      {
        type: '03 \u2022 S1 Sistem & Bisnis',
        title: 'S1 Sistem Informasi / Bisnis Digital / Pendidikan TI',
        desc: 'Memadukan keahlian koding SMK dengan analisis proses bisnis, manajemen produk, atau edukasi.',
      },
      {
        type: '04 \u2022 D3 Vokasi Spesialis',
        title: 'D3 Sistem Informasi / Teknologi Komputer & Jaringan',
        desc: 'Masa studi 3 tahun (6 semester) dengan porsi ~70% praktik laboratorium untuk kesiapan kerja teknis.',
      },
    ],
  },
  mesin: {
    key: 'mesin',
    shortLabel: 'Teknik Mesin / Otomotif',
    title: 'Teknik Pemesinan & Teknik Otomotif',
    desc: 'Fokus SMK: Manufaktur presisi, gambar teknik CAD/CAM, perawatan mesin, dan sistem kelistrikan otomotif.',
    subjects: 'Fisika, Matematika Tingkat Lanjut, & Produk Kreatif SMK.',
    branches: [
      {
        type: '01 \u2022 D4 Sarjana Terapan',
        title: 'D4 Teknik Mesin Produksi & Perawatan / Rekayasa Otomotif',
        desc: 'Politeknik Negeri \u2022 Melanjutkan praktik bengkel/industri SMK ke rekayasa manufaktur terapan.',
      },
      {
        type: '02 \u2022 S1 Akademik Linier',
        title: 'S1 Teknik Mesin / S1 Teknik Industri / Teknik Perkapalan',
        desc: 'Fakultas Teknik \u2022 Pendalaman termodinamika, mekanika kekuatan material, dan optimasi sistem pabrik.',
      },
      {
        type: '03 \u2022 D4 / S1 Terapan Modern',
        title: 'D4 Teknologi Rekayasa Mekatronika / Robotika & Otomasi',
        desc: 'Menggabungkan mekanika mesin dengan kendali elektronik serta sensor otomasi industri.',
      },
      {
        type: '04 \u2022 S1 Kependidikan & Vokasi',
        title: 'S1 Pendidikan Teknik Mesin / Pendidikan Teknik Otomotif',
        desc: 'Jalur bagi lulusan SMK yang ingin menjadi pendidik kejuruan atau instruktur pelatihan industri.',
      },
    ],
  },
  akuntansi: {
    key: 'akuntansi',
    shortLabel: 'Akuntansi (AKL)',
    title: 'Akuntansi dan Keuangan Lembaga (AKL)',
    desc: 'Fokus SMK: Siklus akuntansi perusahaan, administrasi perpajakan, komputer akuntansi, dan pengelolaan kas.',
    subjects: 'Ekonomi, Matematika, & Produk/Projek Kreatif dan Kewirausahaan SMK.',
    branches: [
      {
        type: '01 \u2022 D4 Sarjana Terapan',
        title: 'D4 Akuntansi Manajerial / D4 Akuntansi Perpajakan',
        desc: 'Politeknik & Sekolah Vokasi \u2022 Sangat linier dengan praktik pembukuan dan pajak di SMK.',
      },
      {
        type: '02 \u2022 S1 Akademik Linier',
        title: 'S1 Akuntansi / S1 Ilmu Ekonomi / S1 Manajemen Keuangan',
        desc: 'Fakultas Ekonomi dan Bisnis (FEB) \u2022 Fokus audit, pasar modal, dan analisis laporan keuangan korporasi.',
      },
      {
        type: '03 \u2022 D4 / S1 Lintas Terapan',
        title: 'D4 Keuangan dan Perbankan / S1 Bisnis Digital & Fintech',
        desc: 'Memperluas keahlian finansial SMK ke layanan perbankan modern dan analisis bisnis berbasis data.',
      },
      {
        type: '04 \u2022 D3 Vokasi Spesialis',
        title: 'D3 Administrasi Perpajakan / D3 Akuntansi',
        desc: 'Jalur diploma 3 tahun yang fokus menyiapkan tenaga spesialis pajak dan auditor pratama.',
      },
    ],
  },
};

export const GUIDE_TOC = [
  { id: 'bab-1', num: '01', label: 'Mengenal LANJUT & Cara Pakai' },
  { id: 'bab-2', num: '02', label: 'Jurusan SMK \u2192 Program Studi' },
  { id: 'bab-3', num: '03', label: 'Jalur Masuk PTN (SNBP, SNBT, Mandiri)' },
  { id: 'bab-4', num: '04', label: 'Panduan TKA Kemendikdasmen' },
  { id: 'bab-5', num: '05', label: 'Linimasa & Checklist Kelas XII' },
  { id: 'bab-6', num: '06', label: 'FAQ & Sumber Resmi Terverifikasi' },
];

export const SMK_CLUSTERS = {
  ti: {
    key: 'ti',
    chipLabel: '1. Teknologi Informasi (RPL/TKJ/DKV)',
    title: 'Bidang Teknologi Informasi (RPL, PPLG, TKJ, SIJA, DKV)',
    badge: 'Sangat Linier di Vokasi & S1',
    vokasi: [
      'D4 Teknik Informatika / Teknologi Rekayasa Perangkat Lunak (Politeknik Negeri)',
      'D4 Teknologi Rekayasa Komputer & Jaringan',
      'D4 Teknologi Rekayasa Multimedia & Animasi',
      'D3 Sistem Informasi / Manajemen Informatika',
    ],
    s1Prodi:
      'Ilmu Komputer, Informatika, Sistem Informasi, Teknologi Informasi, Desain Komunikasi Visual (DKV).',
    s1Mapel:
      'Matematika Tingkat Lanjut, Fisika, atau Produk Kreatif SMK; khusus DKV wajib menyiapkan Portofolio Seni Rupa/Desain.',
  },
  rekayasa: {
    key: 'rekayasa',
    chipLabel: '2. Teknologi Manufaktur & Rekayasa',
    title: 'Bidang Teknologi Manufaktur, Mesin, Otomotif, Elektronika & Sipil',
    badge: 'Prioritas Utama Politeknik & Fakultas Teknik',
    vokasi: [
      'D4 Teknik Mesin Produksi & Perawatan / Rekayasa Manufaktur',
      'D4 Teknologi Rekayasa Otomotif / Mekatronika / Robotika',
      'D4 Teknik Otomasi Industri & Elektronika',
      'D4 Teknik Perancangan Jalan dan Jembatan / Konstruksi Gedung',
    ],
    s1Prodi:
      'Teknik Mesin, Teknik Elektro, Teknik Industri, Teknik Sipil, Arsitektur, Pendidikan Teknik Kejuruan.',
    s1Mapel:
      'Fisika dan Matematika Tingkat Lanjut (atau Kimia untuk Teknik Kimia/Material).',
  },
  bisnis: {
    key: 'bisnis',
    chipLabel: '3. Bisnis, Manajemen & Akuntansi',
    title: 'Bidang Bisnis, Manajemen, Akuntansi, Perbankan & Logistik',
    badge: 'Peluang Luas di FEB & Vokasi Bisnis',
    vokasi: [
      'D4 Akuntansi Manajerial / Akuntansi Perpajakan',
      'D4 Keuangan dan Perbankan Terapan',
      'D4 Administrasi Bisnis / Manajemen Pemasaran Internasional',
      'D4 Manajemen Bisnis Logistik & Perdagangan Internasional',
    ],
    s1Prodi:
      'Akuntansi, Manajemen, Ilmu Ekonomi, Bisnis Digital, Administrasi Niaga/Fiskal, Pendidikan Ekonomi.',
    s1Mapel:
      'Ekonomi dan Matematika (serta Bahasa Inggris/Sosiologi untuk Manajemen & Bisnis).',
  },
  pariwisata: {
    key: 'pariwisata',
    chipLabel: '4. Pariwisata, Kuliner & Seni Kreatif',
    title: 'Bidang Pariwisata, Perhotelan, Kuliner, Tata Busana & Seni Kreatif',
    badge: 'Kuat di Vokasi Pariwisata & Kampus Seni',
    vokasi: [
      'D4 Pengelolaan Perhotelan & Manajemen Pariwisata',
      'D4 Seni Kuliner & Pengelolaan Jasa Makanan (Tata Boga)',
      'D4 Desain Mode / Bisnis Kreatif / Produksi Media',
      'D3 Perjalanan Wisata (Tour & Travel) & Konvensi (MICE)',
    ],
    s1Prodi:
      'Pariwisata, Ilmu Komunikasi, Pendidikan Tata Boga/Tata Busana, Kriya Seni, Desain Produk, Film & Televisi.',
    s1Mapel:
      'Ekonomi, Bahasa Inggris, Sosiologi/Sejarah, serta Portofolio Karya untuk rumpun Seni/Desain.',
  },
  kesehatan: {
    key: 'kesehatan',
    chipLabel: '5. Kesehatan & Agribisnis',
    title: 'Bidang Kesehatan, Farmasi, Kimia Analisis & Agribisnis/Pertanian',
    badge: 'Spesialis Laboratorium & Sains Terapan',
    vokasi: [
      'D3 / D4 Teknologi Laboratorium Medis (Analis Kesehatan)',
      'D3 Farmasi & Analisis Farmasi dan Makanan',
      'D4 Analisis Kimia / Bioteknologi Terapan',
      'D4 Teknologi Produksi Tanaman Pangan / Agribisnis Perikanan',
    ],
    s1Prodi:
      'Farmasi, Kesehatan Masyarakat, Ilmu Gizi, Keperawatan, Kimia, Biologi, Agroteknologi, Teknologi Pangan.',
    s1Mapel:
      'Biologi dan Kimia (serta Matematika untuk analisis kuantitatif).',
  },
};

export const PREP_CHECKLIST_ITEMS = [
  {
    id: 0,
    title: 'Verifikasi NISN & Data Rapor Semester 1\u20135:',
    detail:
      'Memastikan tidak ada kesalahan penulisan nama, NIK, atau nilai mata pelajaran kejuruan bersama pihak sekolah.',
  },
  {
    id: 1,
    title: 'Menentukan Target Prodi Vokasi (D4/D3) vs. Akademik (S1):',
    detail:
      'Memilih maksimal 2 prodi untuk SNBP dan merencanakan cadangan prodi untuk UTBK-SNBT.',
  },
  {
    id: 2,
    title: 'Memilih 2 Mata Pelajaran Pilihan TKA:',
    detail:
      'Menyesuaikan mapel pilihan TKA dengan mata pelajaran pendukung program studi tujuan.',
  },
  {
    id: 3,
    title: 'Mencoba Simulasi TKA Daring Pusmendik:',
    detail:
      'Membiasakan diri dengan antarmuka soal Literasi Membaca, Bahasa Inggris, dan Numerasi Matematika.',
  },
  {
    id: 4,
    title: 'Menyiapkan Sertifikat Prestasi / Portofolio:',
    detail:
      'Mengumpulkan maksimal 3 bukti prestasi terbaik (seperti LKS SMK, lomba karya ilmiah/inovasi) atau portofolio karya.',
  },
  {
    id: 5,
    title: 'Registrasi & Simpan Permanen Akun SNPMB:',
    detail:
      'Membuat akun di portal resmi SNPMB sesuai tenggat jadwal yang berlaku.',
  },
];

export const GUIDE_FAQS = [
  {
    id: 'faq-1',
    defaultOpen: true,
    question:
      '1. Apakah lulusan SMK bisa mendaftar jurusan S1 di Universitas Negeri (bukan hanya Politeknik)?',
    answerPrefix: 'Sangat bisa.',
    answerBody:
      ' Berdasarkan regulasi resmi SNPMB, siswa SMA/MA/SMK yang memenuhi syarat berhak mendaftar ke PTN Akademik (S1), PTN Vokasi (D3/D4), maupun PTKIN baik melalui jalur SNBP maupun UTBK-SNBT.',
    linkText: 'SNPMB',
    linkUrl: 'https://snpmb.id/snbp/informasi-umum',
  },
  {
    id: 'faq-2',
    defaultOpen: false,
    question:
      '2. Apakah nilai Praktik Kerja Lapangan (PKL) dan Uji Kompetensi Keahlian (UKK) membantu saat daftar kuliah?',
    answerPrefix: '',
    answerBody:
      'Nilai mata pelajaran kejuruan di rapor semester 1 hingga 5 masuk dalam perhitungan rerata nilai seluruh mata pelajaran (bobot minimal 50% di SNBP). Selain itu, sertifikat uji kompetensi atau juara Lomba Kompetensi Siswa (LKS) dapat dilampirkan sebagai bukti prestasi tambahan (maksimal 3 prestasi terbaik) serta sangat dihargai di jalur Seleksi Mandiri Vokasi.',
  },
  {
    id: 'faq-3',
    defaultOpen: false,
    question:
      '3. Apakah TKA Kemendikdasmen wajib diikuti jika saya hanya ingin ikut UTBK-SNBT?',
    answerPrefix: '',
    answerBody:
      'Untuk jalur SNBP 2026, kepemilikan nilai TKA Kemendikdasmen tercantum sebagai salah satu ketentuan siswa pendaftar (Sumber: SNPMB). Sementara untuk UTBK-SNBT, penilaian utama didasarkan pada skor tes UTBK. Namun mengikuti TKA di sekolah tetap sangat disarankan karena sertifikat hasilnya (SHTKA) menjadi dokumen resmi capaian akademik nasionalmu.',
    linkText: 'Sumber: SNPMB',
    linkUrl: 'https://snpmb.id/snbp/informasi-umum',
  },
  {
    id: 'faq-4',
    defaultOpen: false,
    question: '4. Apa bedanya gelar D4 (Sarjana Terapan) dengan S1 (Sarjana)?',
    answerPrefix: 'Keduanya berada pada jenjang kualifikasi yang setara (Level 6 KKNI)',
    answerBody:
      ' dengan masa studi 4 tahun (8 semester), dan lulusan D4 juga dapat melanjutkan langsung ke jenjang Magister/S2. Perbedaannya terletak pada penekanan kurikulum: D4 berfokus pada keahlian terapan dan rekayasa industri, sedangkan S1 berfokus pada pendalaman teori dan riset keilmuan.',
  },
];

export const OFFICIAL_SOURCES = [
  {
    authority: 'Panitia Nasional SNPMB',
    doc: 'Informasi Umum & Ketentuan SNBP 2026',
    links: [
      { label: 'snpmb.id/snbp/informasi-umum', url: 'https://snpmb.id/snbp/informasi-umum' },
    ],
  },
  {
    authority: 'Panitia Nasional SNPMB',
    doc: 'Informasi Umum UTBK-SNBT 2026',
    links: [
      {
        label: 'snpmb.id/utbk-snbt/informasi-umum',
        url: 'https://snpmb.id/utbk-snbt/informasi-umum',
      },
    ],
  },
  {
    authority: 'Panitia Nasional SNPMB',
    doc: 'Jadwal Penting & FAQ Resmi SNPMB 2026',
    links: [
      { label: 'snpmb.id/jadwal-penting', url: 'https://snpmb.id/jadwal-penting' },
      { label: 'snpmb.id/faq', url: 'https://snpmb.id/faq' },
    ],
  },
  {
    authority: 'Kemendikdasmen RI (Pusmendik BSKAP)',
    doc: 'Portal Resmi Tes Kemampuan Akademik (TKA)',
    links: [
      { label: 'tka.kemendikdasmen.go.id', url: 'https://tka.kemendikdasmen.go.id/' },
    ],
  },
  {
    authority: 'BSKAP Kemendikdasmen RI',
    doc: 'Perka BSKAP Nomor 045/H/AN/2025 (Pedoman TKA) & Simulasi TKA',
    links: [
      {
        label: 'Unduh Regulasi TKA',
        url: 'https://pusmendik.kemendikdasmen.go.id/tka/page/download',
      },
      {
        label: 'Simulasi TKA',
        url: 'https://pusmendik.kemendikdasmen.go.id/tka/simulasi_tka',
      },
    ],
  },
];

export const APK_RELEASE_INFO = {
  isAvailable: false,
  apkUrl: null,
  statusBadge: 'APK belum tersedia untuk diunduh.',
  metaStrip: [
    {
      label: 'Platform & Format',
      value: 'Android (.apk)',
      isWarning: false,
    },
    {
      label: 'Status Unduhan Resmi',
      value: 'APK belum tersedia untuk diunduh.',
      isWarning: true,
    },
    {
      label: 'Versi, Ukuran & Checksum',
      value: 'Belum dirilis di repositori proyek',
      isWarning: false,
    },
  ],
  metadataTable: [
    {
      field: 'Status Ketersediaan',
      value: 'APK belum tersedia untuk diunduh (menunggu unggahan berkas .apk resmi)',
    },
    {
      field: 'Versi Rilis & Tanggal Rilis',
      value: 'Belum tersedia — Tidak ditampilkan sebelum file .apk resmi terverifikasi',
    },
    {
      field: 'Ukuran Berkas & Checksum SHA-256',
      value: 'Belum tersedia — Akan dihasilkan dari berkas biner .apk rilis resmi',
    },
    {
      field: 'Minimum Android & Spesifikasi',
      value: 'Belum diverifikasi (menunggu metadata manifest paket .apk resmi)',
    },
    {
      field: 'Akses Alternatif Saat Ini',
      value: '100% materi panduan, peta jalur SMK, dan checklist interaktif dapat diakses langsung melalui Halaman Panduan Web ini',
    },
  ],
  installSteps: [
    {
      num: '01',
      title: 'Unduh File APK Saat Tersedia',
      desc: 'Setelah paket rilis resmi tersedia di halaman ini, unduh berkas .apk langsung menggunakan peramban di ponsel Android-mu.',
    },
    {
      num: '02',
      title: 'Izinkan Instalasi dari Peramban',
      desc: 'Saat mengetuk file .apk yang diunduh dari luar Play Store, Android akan meminta izin pemasangan aplikasi. Buka Pengaturan (Settings) hanya jika sumber unduhan berasal dari domain resmi ini.',
    },
    {
      num: '03',
      title: 'Konfirmasi & Jalankan Instalasi',
      desc: 'Pastikan identitas aplikasi LANJUT sesuai dengan metadata resmi yang tertera, kemudian ketuk tombol “Instal” (Install) dan tunggu proses selesai.',
    },
    {
      num: '04',
      title: 'Buka Aplikasi & Mulai Persiapan',
      desc: 'Ketuk “Buka” (Open) untuk mengakses panduan jalur kuliah SMK, informasi TKA, dan checklist persiapan kelas XII.',
    },
  ],
  troubleshootingFaqs: [
    {
      id: 'apk-faq-1',
      defaultOpen: true,
      question: '1. Mengapa tombol unduh APK belum aktif di halaman ini?',
      answer:
        'Saat ini berkas biner .apk resmi LANJUT belum tersedia di direktori proyek. Sesuai prinsip transparansi dan keamanan LANJUT, kami tidak menampilkan tautan unduhan palsu, file placeholder, maupun menebak metadata ukuran/versi aplikasi. Seluruh fitur eksplorasi jurusan SMK, panduan SNBP/SNBT, informasi TKA, dan checklist persiapan sudah dapat kamu gunakan langsung melalui Halaman Panduan di website ini.',
    },
    {
      id: 'apk-faq-2',
      defaultOpen: false,
      question:
        '2. Apa yang perlu diperhatikan saat memasang aplikasi Android dari file .apk (sideloading)?',
      answer:
        'Peringatan izin instalasi adalah perlindungan bawaan Android untuk semua file .apk yang diunduh di luar Google Play Store. Pastikan kamu hanya mengizinkan instalasi untuk berkas yang diunduh dari sumber resmi yang telah diverifikasi, dan matikan kembali izin instalasi dari peramban setelah pemasangan selesai agar keamanan perangkatmu tetap terjaga.',
    },
    {
      id: 'apk-faq-3',
      defaultOpen: false,
      question:
        '3. Mengapa instalasi APK bisa gagal dengan pesan “Aplikasi tidak terpasang” (App not installed)?',
      answer:
        'Kendala tersebut umumnya disebabkan oleh tiga hal: (a) Ruang penyimpanan internal ponsel yang tidak mencukupi; (b) Adanya versi lama aplikasi dengan tanda tangan paket berbeda yang masih terpasang; atau (c) Berkas .apk belum terunduh secara utuh karena koneksi terputus.',
    },
    {
      id: 'apk-faq-4',
      defaultOpen: false,
      question:
        '4. Bagaimana jika saya menggunakan iPhone (iOS), laptop, atau memilih tidak menginstal APK?',
      answer:
        'Format berkas .apk dikhususkan untuk sistem operasi Android. Jika kamu menggunakan iPhone (iOS), iPad, laptop/komputer sekolah, atau sementara menunggu rilis APK resmi, kamu tetap dapat mengakses seluruh materi LANJUT melalui Halaman Panduan Web di peramban ini—termasuk simulasi pemetaan jurusan SMK dan checklist persiapan.',
    },
  ],
};

export const VISUAL_SYSTEM_SWATCHES = [
  {
    hex: '#162B44',
    textColor: '#F6F4EF',
    name: 'Deep Lanjut Navy',
    role: 'Kanvas Hero Beranda, Hero Unduh APK, Header, & Penutup (Kontras 13.4:1).',
  },
  {
    hex: '#0F1E32',
    textColor: '#F6F4EF',
    name: 'Deep Navy Dark',
    role: 'Variasi area gelap, top bar, footer, dan kontras hover.',
  },
  {
    hex: '#78A4CB',
    textColor: '#0F1E32',
    name: 'Lanjut Brand Sky Blue',
    role: 'Warna asli huruf "L" & maskot biru. Digunakan pada garis rute & aksen identitas.',
  },
  {
    hex: '#2B5B84',
    textColor: '#FFFFFF',
    name: 'Brand Blue Deep',
    role: 'Tautan, aksen, dan kontrol interaktif yang memerlukan kontras kuat.',
  },
  {
    hex: '#F6F4EF',
    textColor: '#182230',
    hasBorder: true,
    name: 'Warm Paper Cream',
    role: 'Kanvas bacaan utama pada Section Masalah, Peta Jalur, & Halaman Panduan.',
  },
  {
    hex: '#FCFBF9',
    textColor: '#182230',
    hasBorder: true,
    name: 'Warm Paper Light',
    role: 'Latar utama yang bersih untuk panel bacaan dan permukaan kartu.',
  },
  {
    hex: '#E6EFF8',
    textColor: '#162B44',
    name: 'Soft Cloud Blue',
    role: 'Latar transisi Perjalanan Kelas XII, Langkah Instalasi APK, & Callout Resmi.',
  },
  {
    hex: '#F0F6FC',
    textColor: '#162B44',
    hasBorder: true,
    name: 'Soft Cloud Blue Light',
    role: 'Latar alternatif lembut untuk tabel dan visualisasi konsep.',
  },
  {
    hex: '#F4C95D',
    textColor: '#0F1E32',
    name: 'Warm Sun Gold',
    role: 'Aksen CTA Utama (“Mulai Jelajahi”) dan titik fokus simpul rute aktif.',
  },
];

