# LANJUT Website --- Master Context for Antigravity

> **Tujuan dokumen:** Menjadi sumber konteks utama saat mengubah hasil
> export Argon (satu file HTML) menjadi website React yang bisa
> dijalankan lewat localhost, dengan animasi halus, responsif, dan
> ringan.
>
> **Cara pakai:** Letakkan file ini di root project sebagai
> `LANJUT-ANTIGRAVITY-CONTEXT.md`. Berikan ke Antigravity sebagai
> konteks utama. Dokumen ini menggabungkan tiga artefak: **PRD**,
> **design.md**, dan **agents.md**. Jika nanti dibutuhkan file terpisah,
> pecah berdasarkan heading yang sesuai tanpa mengubah isi kebijakan
> inti.

------------------------------------------------------------------------

# PART 1 --- PRD (Product Requirements Document)

## 1. Ringkasan Produk

**Nama:** LANJUT --- Layanan Navigasi Jalur Untuk Kuliah.

**Audiens utama:** Siswa kelas XII SMK yang sedang mencari arah setelah
lulus dan ingin melanjutkan pendidikan ke perguruan tinggi.

**Masalah utama:** Informasi pendidikan tinggi tersebar dan sering
terasa dibuat dengan asumsi bahwa siswa sudah memahami hubungan antara
jurusan SMK, program studi kuliah, jalur seleksi, mata pelajaran TKA,
jadwal, serta persyaratan. Siswa SMK bisa kesulitan memahami langkah
awal dan menyusun persiapan yang relevan dengan latar belakangnya.

**Janji produk:** Membantu siswa SMK memahami pilihan dan langkah
persiapan kuliah dengan lebih terarah. LANJUT adalah alat bantu navigasi
informasi, bukan penentu kelulusan, pemberi jaminan masuk, atau
pengganti informasi resmi kampus dan penyelenggara seleksi.

**Prinsip komunikasi:** Mengurangi kebingungan, bukan menambah tekanan.
Bahasa harus jelas, suportif, realistis, dan tidak menghakimi siswa yang
belum punya rencana.

## 2. Tujuan Website

1.  Membuat pengunjung langsung memahami LANJUT dan siapa yang dibantu.
2.  Menjelaskan bahwa siswa SMK memiliki beberapa jalur dan opsi untuk
    dieksplorasi, tanpa mengesankan bahwa semua jurusan SMK otomatis
    cocok dengan satu prodi tertentu.
3.  Mengarahkan pengguna ke panduan yang membantu mereka menelusuri
    pilihan, mempersiapkan seleksi, dan memeriksa langkah yang sudah
    dilakukan.
4.  Menyediakan halaman khusus untuk informasi dan unduhan APK **hanya
    jika file dan metadata resminya benar-benar tersedia**.
5.  Menghadirkan pengalaman visual yang menarik dan berkarakter melalui
    motion yang halus, tetapi tetap ringan dan nyaman digunakan.

## 3. Ruang Lingkup

### Termasuk

-   Landing page.
-   Halaman Panduan/Dokumentasi.
-   Halaman Download APK.
-   Navigasi antarhalaman yang berfungsi.
-   Responsif untuk desktop, tablet, dan mobile.
-   Animasi UI dan scroll yang terukur.
-   Penggunaan aset brand LANJUT yang sudah tersedia.
-   Konversi dari HTML hasil export menjadi komponen React tanpa
    kehilangan konten penting.
-   Validasi tautan, interaksi, aksesibilitas dasar, dan performa.

### Tidak termasuk kecuali diminta secara eksplisit

-   Mengubah atau membangun ulang backend aplikasi LANJUT yang sudah
    ada.
-   Mengarang fitur aplikasi yang belum diimplementasikan.
-   Mengarang tautan APK, versi, ukuran file, tanggal rilis, minimum
    Android, atau checksum.
-   Membuat sistem autentikasi baru.
-   Mengganti seluruh identitas visual tanpa alasan yang kuat.
-   Menambahkan animasi 3D/WebGL, video background berat, atau library
    besar hanya demi efek visual.

## 4. Struktur Informasi dan Halaman

### A. Beranda (`/`)

Struktur konten yang diharapkan:

1.  **Header / navigasi**
    -   Navigasi di sisi kiri dan wordmark/logo di sisi kanan untuk
        layout desktop, sesuai komposisi desain yang sudah dibuat.
    -   Tautan utama: Beranda, Panduan, Download APK.
    -   Menu mobile harus benar-benar bisa dibuka dan ditutup, termasuk
        setelah pengguna memilih tautan.
2.  **Hero**
    -   Hook wajib dipertahankan: **"Mau Lanjut Kuliah, Mulai dari
        Mana?"**
    -   Memperkenalkan LANJUT secara singkat sebagai panduan jalur
        kuliah yang dirancang dengan mempertimbangkan kebutuhan siswa
        SMK.
    -   Maskot kelinci sebagai elemen brand, bukan sekadar dekorasi
        acak.
    -   CTA utama menuju bagian Panduan yang relevan atau halaman
        Panduan.
    -   CTA sekunder boleh menuju Download APK jika status unduhan
        valid; jangan membuat CTA palsu.
3.  **Persimpangan / masalah pengguna**
    -   Gambarkan kebingungan yang nyata: belum tahu harus mulai dari
        mana, belum memahami pilihan prodi, atau kesulitan menyusun
        langkah persiapan.
    -   Hindari menakut-nakuti atau memberi kesan bahwa masa depan
        pengguna akan gagal jika tidak memakai LANJUT.
4.  **Cerita LANJUT / solusi**
    -   Jelaskan bagaimana LANJUT membantu pengguna memahami pilihan,
        informasi seleksi, dan persiapan.
    -   Prioritaskan section yang membantu pengunjung membayangkan
        penggunaan nyata, bukan sekadar daftar fitur dalam kartu
        generik.
    -   Jika konten peta jurusan SMK → prodi digunakan, jelaskan bahwa
        hubungan tersebut merupakan titik awal eksplorasi, bukan
        pemetaan yang menjamin kesesuaian atau penerimaan.
    -   Hindari pengulangan pesan yang sudah jelas di hero atau section
        lain.
5.  **Perjalanan persiapan**
    -   Bila sesuai dengan konten yang telah ada, gunakan alur sederhana
        seperti: Kenali pilihan → Petakan jalur → Persiapkan langkah.
    -   Gabungkan dengan section solusi bila membuat halaman terlalu
        panjang atau repetitif.
6.  **CTA penutup**
    -   Arahkan pengguna ke langkah berikutnya yang jelas, terutama
        Panduan.
    -   Download APK hanya ditonjolkan sebagai unduhan jika file resmi
        benar-benar tersedia.

### B. Panduan (`/panduan` atau rute yang sudah dipakai project)

Pertahankan struktur dan konten yang sudah dibuat Argon, kecuali ada
masalah usability atau konten yang tidak terverifikasi.

Elemen yang diharapkan:

-   Intro yang menjelaskan fungsi halaman.
-   Daftar isi/sticky TOC yang tetap nyaman digunakan, terutama di
    mobile.
-   Lebar kolom baca yang nyaman, sekitar 65 karakter per baris untuk
    teks panjang bila cocok dengan layout.
-   Penanda yang membedakan:
    -   **Informasi resmi/terverifikasi**
    -   **Tips atau strategi LANJUT**
    -   **Contoh/simulasi**
-   Eksplorasi jurusan SMK → opsi program studi untuk lima bidang umum
    jika konten tersebut memang tersedia.
-   Penjelasan jalur SNBP, SNBT, dan TKA berdasarkan informasi yang
    dapat diverifikasi.
-   Linimasa persiapan dan checklist interaktif jika sudah
    diimplementasikan.
-   FAQ dan sumber rujukan.
-   Maskot biru pada bagian pengantar bila asetnya tersedia dan
    komposisinya mendukung.

Jangan mengubah fakta resmi hanya demi menyederhanakan desain. Jika ada
informasi yang belum bisa diverifikasi, beri label yang jelas atau
tandai untuk ditinjau; jangan menyajikannya sebagai fakta pasti.

### C. Download APK (`/download` atau rute konsisten dengan project)

Halaman ini harus memiliki status unduhan yang jujur.

**Jika APK tersedia dan sumbernya terverifikasi:** - Hero yang
menjelaskan apa yang diunduh dan siapa yang dapat menggunakannya. - CTA
unduh yang menuju file resmi. - Tampilkan hanya metadata yang
benar-benar diketahui: versi, ukuran file, tanggal rilis, minimum
Android, sumber distribusi, dan checksum SHA-256 bila memang tersedia. -
Petunjuk instalasi Android yang ringkas. - Peringatan keamanan yang
wajar: pengguna hanya perlu mengunduh dari sumber resmi yang
ditentukan. - FAQ untuk pertanyaan yang relevan, misalnya cara memasang
atau apa yang perlu dilakukan jika instalasi diblokir. Jangan memberi
instruksi yang menurunkan keamanan perangkat tanpa konteks.

**Jika APK belum tersedia atau tautannya belum dapat diverifikasi:** -
Tampilkan status jelas: **"APK belum tersedia untuk diunduh."** - Jangan
menampilkan tombol unduh aktif yang mengarah ke `#`, URL rekaan, file
placeholder, atau file yang tidak diketahui. - CTA bisa diarahkan ke
versi web **hanya jika URL aplikasi web yang benar sudah ada dan telah
dikonfirmasi di project**. - Jangan menebak versi, ukuran file, tanggal,
atau persyaratan Android.

## 5. Persyaratan Fungsional

-   Semua tautan navigasi mengarah ke halaman/section yang benar.
-   Menu mobile dapat dibuka dan ditutup menggunakan klik, keyboard, dan
    tombol Escape bila relevan.
-   CTA tidak boleh menjadi dekorasi; setiap CTA memiliki tujuan yang
    nyata.
-   TOC Panduan menuju section yang benar dan tidak tertutup sticky
    header.
-   Checklist interaktif harus dapat dicentang dan statusnya terlihat.
    Jangan menjanjikan persistensi setelah refresh kecuali memang
    diimplementasikan.
-   Elemen eksplorasi jurusan, FAQ, accordion, atau tab (jika ada) harus
    memiliki state yang benar dan indikator interaksi yang jelas.
-   Tidak ada link `href="#"` yang dibiarkan tanpa fungsi.
-   Rute langsung ke setiap halaman harus berfungsi pada setup React
    yang dipilih.
-   Semua gambar memiliki ukuran/layout yang stabil agar tidak
    menyebabkan layout shift besar.

## 6. Persyaratan Nonfungsional

-   Mobile-first dan responsif.
-   Animasi tidak boleh menghambat navigasi atau membaca.
-   Mengutamakan animasi `transform` dan `opacity` untuk mengurangi
    layout/repaint.
-   Tidak menjalankan loop animasi terus-menerus jika tidak dibutuhkan.
-   Menghormati `prefers-reduced-motion`.
-   Kontras teks dan kontrol memadai.
-   Tidak ada horizontal overflow pada viewport kecil.
-   Gunakan dependensi seminimal mungkin.
-   Jangan mengorbankan konten, aksesibilitas, atau kecepatan demi efek
    visual.

## 7. Kriteria Penerimaan

Pekerjaan dianggap siap untuk ditinjau ketika:

-   [ ] Project berjalan di localhost dengan instruksi yang jelas.
-   [ ] Hasil HTML Argon telah diubah menjadi React components yang
    terstruktur.
-   [ ] Konten utama dari versi HTML dipertahankan; tidak ada section
    penting yang hilang tanpa alasan.
-   [ ] Beranda, Panduan, dan Download APK dapat diakses melalui
    navigasi dan direct URL.
-   [ ] Hero mempertahankan hook "Mau Lanjut Kuliah, Mulai dari Mana?"
-   [ ] Aset maskot dan wordmark asli dipakai bila tersedia.
-   [ ] Font Manrope benar-benar dimuat, bukan hanya dideklarasikan lalu
    jatuh ke fallback.
-   [ ] Motion terasa halus, tidak berlebihan, dan tetap ringan.
-   [ ] `prefers-reduced-motion` didukung.
-   [ ] Status unduhan APK tidak mengandung klaim atau tautan palsu.
-   [ ] Tidak ada tombol/link mati, error console yang diketahui, atau
    overflow mobile.
-   [ ] Ada ringkasan file yang diubah, keputusan teknis, dan tes yang
    benar-benar dilakukan.

------------------------------------------------------------------------

# PART 2 --- DESIGN.MD

## 1. Arah Kreatif

**Arah:** Editorial Journey --- website edukasi dengan rasa perjalanan
dan eksplorasi, bukan dashboard SaaS generik.

Website harus terasa: - Ramah bagi siswa kelas XII. - Terarah, tidak
menggurui. - Editorial dan punya hierarki visual kuat. - Memiliki
karakter melalui maskot dan motif rute. - Modern tanpa terlihat seperti
template startup yang penuh kartu. - Lapang dan mudah dipindai.

Motion dipakai untuk membantu pengguna memahami alur, bukan sebagai
hiasan tanpa fungsi.

## 2. Sistem Warna

Gunakan palet LANJUT Blue Tone yang sudah disepakati. Pertahankan
konsistensi; jangan kembali ke palet hijau awal tanpa instruksi.

  -----------------------------------------------------------------------
  Token                   Hex                     Penggunaan
  ----------------------- ----------------------- -----------------------
  Deep Lanjut Navy        `#162B44`               Warna utama, hero,
                                                  heading atau area gelap

  Deep Navy Dark          `#0F1E32`               Variasi area gelap,
                                                  hover/kontras

  Brand Sky Blue          `#78A4CB`               Aksen brand dan
                                                  ilustrasi

  Brand Blue Deep         `#2B5B84`               Tautan, aksen, kontrol
                                                  yang perlu kontras

  Warm Paper Cream        `#F6F4EF`               Latar hangat

  Warm Paper Light        `#FCFBF9`               Latar utama yang bersih

  Soft Cloud Blue         `#E6EFF8`               Panel/section lembut

  Soft Cloud Blue Light   `#F0F6FC`               Latar alternatif

  Warm Sun Gold           `#F4C95D`               Aksen kecil untuk
                                                  penanda atau sorotan
  -----------------------------------------------------------------------

Panduan: - Jangan memakai semua warna dengan intensitas sama pada setiap
section. - Navy untuk fondasi dan kontras; cream/putih untuk ruang baca;
biru untuk struktur dan interaksi; gold hanya sebagai aksen. - Pastikan
kontras teks, terutama teks kecil di atas biru muda. - Hindari glow/neon
dan gradient berlebihan.

## 3. Tipografi

**Font utama: Manrope.**

-   Heading besar: weight 700--800.
-   Heading section: weight 700--800.
-   Body: weight 400--500.
-   Navigasi, label, tombol: weight 600.
-   Gunakan line-height yang nyaman; jangan memadatkan paragraf demi
    membuat section terlihat pendek.
-   Pastikan font benar-benar tersedia secara lokal atau dimuat dengan
    cara yang sesuai project. Jangan menganggap font aktif hanya karena
    ditulis dalam `font-family`.
-   Pertahankan font fallback yang masuk akal.
-   Hindari mencampur banyak keluarga font. Jika HTML saat ini
    menggunakan serif display sebagai aksen, evaluasi apakah itu memang
    bagian desain yang disengaja; jangan menghapusnya secara membabi
    buta, tetapi prioritas tipografi brand yang telah disepakati adalah
    Manrope.

## 4. Brand Assets

Cari dan gunakan aset asli jika ada di project: -
`lanjut-wordmark-trimmed.png` - `mascot-white.png` - `mascot-blue.png`

Aturan: - Jangan menggambar ulang logo/mascot jika aset asli tersedia. -
Jangan mengubah proporsi atau warna aset secara tidak perlu. - Gunakan
varian putih pada background gelap dan varian biru pada background
terang sesuai kontras. - Jangan membuat gambar mockup aplikasi palsu
hanya untuk mengisi ruang. - Jika nama/path aset berbeda, audit folder
terlebih dahulu dan gunakan aset yang benar-benar ada.

## 5. Layout dan Komposisi

-   Pertahankan identitas layout hasil Argon yang sudah disetujui selama
    tidak mengganggu responsivitas atau keterbacaan.
-   Beranda sebaiknya memiliki variasi ritme: hero, section editorial,
    visual perjalanan, lalu CTA. Jangan membuat semua section dengan
    pola "teks kiri + kumpulan card kanan".
-   Gunakan whitespace secara sengaja.
-   Hindari card berlebihan. Gunakan card ketika informasi memang perlu
    dikelompokkan atau interaksinya perlu jelas.
-   Hindari grid background yang terlalu dominan atau dekorasi yang
    membuat halaman ramai.
-   Motif rute boleh berlanjut antarseksi sebagai benang visual, tetapi
    jangan sampai mengganggu teks atau membuat layout rapuh.
-   Hero mascot stage yang sudah ada dapat dipertahankan; jangan
    menambahkan bingkai/dekorasi tambahan jika membuat komposisi terasa
    sesak.
-   Jangan menghapus konten hanya demi mencapai tampilan minimalis.

## 6. Sistem Motion

### Tujuan Motion

Membantu pengguna memahami urutan, memberi respons terhadap interaksi,
dan membuat brand terasa hidup tanpa mengorbankan performa.

### Prinsip

1.  **Subtil dan bermakna.** Setiap animasi harus punya alasan.
2.  **Cepat.** Micro-interaction umumnya sekitar 140--220 ms; transisi
    section/reveal sekitar 250--500 ms sesuai kompleksitas.
3.  **Natural.** Gunakan easing lembut; hindari bounce berulang dan
    gerakan yang terlalu elastis.
4.  **Tidak mengunci pengguna.** Jangan menunda akses ke konten demi
    animasi masuk.
5.  **Tidak mengulang tanpa perlu.** Reveal scroll idealnya terjadi
    sekali per elemen, kecuali ada alasan interaksi.
6.  **Hemat properti.** Prioritaskan `transform` dan `opacity`; hindari
    animasi berulang pada `width`, `height`, `top`, `left`, `filter`,
    dan shadow besar.
7.  **Reduced motion.** Jika `prefers-reduced-motion: reduce`, matikan
    parallax, gerak dekoratif, smooth scroll yang tidak perlu, dan
    reveal yang menghalangi akses konten.

### Motion yang Direkomendasikan

-   **Hero:** teks masuk dengan fade + translate kecil; maskot dapat
    memakai gerak masuk ringan. Jangan menunggu semua animasi selesai
    sebelum CTA dapat digunakan.
-   **Living Route:** garis rute dapat digambar menggunakan SVG
    `stroke-dasharray`/`stroke-dashoffset` saat masuk viewport. Gunakan
    satu implementasi yang sederhana; jangan membuat animasi rute terus
    berjalan tanpa henti.
-   **Section reveal:** opacity + translateY kecil (sekitar 8--16 px),
    dipicu dengan `IntersectionObserver`. Unobserve setelah muncul agar
    tidak terus memproses elemen.
-   **Button/link:** perubahan warna dan translate kecil saat
    hover/active; hindari efek membesar secara berlebihan.
-   **Accordion/FAQ:** buka-tutup yang singkat dan tidak mengganggu
    pembacaan. Hindari menghitung tinggi layout secara terus-menerus.
-   **Mascot:** gerakan kecil sesekali hanya bila memberi karakter;
    hindari bobbing tanpa henti yang mengganggu fokus.
-   **Navigation:** transisi menu mobile yang singkat; menu harus tetap
    aksesibel dan tidak tertinggal dalam state terbuka.

### Pilihan Implementasi

Utamakan CSS transitions/keyframes dan `IntersectionObserver` bawaan
browser untuk kebutuhan dasar.

Jika project memang membutuhkan library motion: - Periksa dependency
yang sudah ada sebelum menambahkan package. - Gunakan library ringan
yang sesuai dengan React dan versi project. - Jangan menambahkan library
animasi kedua jika fungsi yang sama sudah tersedia. - Jangan menginstal
GSAP atau library 3D hanya untuk fade/slide sederhana. - Jangan mengunci
implementasi pada API library yang belum dipastikan terpasang.

## 7. Responsive Behavior

Periksa setidaknya: - Mobile kecil: 320--375 px. - Mobile umum: 390--430
px. - Tablet: sekitar 768 px. - Laptop: 1280 px ke atas. - Viewport
desktop pendek, untuk memastikan hero tidak terpotong.

Aturan: - Header tidak boleh overflow. - Hero boleh berubah dari dua
kolom menjadi satu kolom; urutan teks, CTA, dan maskot harus tetap masuk
akal. - Jangan mengecilkan font desktop secara proporsional tanpa batas;
atur breakpoint dan max-width. - Semua target sentuh harus cukup
nyaman. - Menu mobile tidak boleh tertutup overflow container. - TOC
Panduan dapat berubah menjadi select, collapsible list, atau pola lain
yang sesuai; jangan memaksakan sticky sidebar desktop ke layar kecil. -
Jangan menambahkan horizontal scrolling kecuali memang diperlukan dan
jelas.

## 8. Aksesibilitas dan UX

-   Gunakan elemen semantik (`header`, `nav`, `main`, `section`,
    `footer`, heading berurutan).
-   Tombol melakukan aksi; tautan melakukan navigasi.
-   Berikan focus-visible yang jelas.
-   Pastikan accordion/menubar punya state aksesibel (`aria-expanded`,
    label yang relevan).
-   Gambar informatif memiliki alt; gambar dekoratif menggunakan alt
    kosong.
-   Jangan mengandalkan warna saja untuk menyampaikan status.
-   Jangan membuat gerakan otomatis yang berkedip atau mengalihkan
    fokus.
-   Pastikan konten tetap bisa dipahami ketika animasi dinonaktifkan.

------------------------------------------------------------------------

# PART 3 --- AGENTS.MD

## 1. Peran Agent

Bertindak sebagai **React frontend engineer sekaligus UI motion
implementer** untuk website LANJUT.

Tugas utama bukan mendesain ulang dari nol. Tugasnya adalah: 1.
Memeriksa hasil export HTML dari Argon. 2. Memahami konten, aset,
layout, dan interaksi yang sudah ada. 3. Mengubahnya menjadi struktur
React yang rapi dan mudah dirawat. 4. Menambahkan motion yang halus dan
ringan. 5. Menjaga konsistensi brand dan memastikan seluruh halaman
berfungsi pada localhost.

## 2. Aturan Kerja Wajib

### Sebelum mengubah kode

-   Audit struktur project, `package.json`, file HTML, stylesheet, aset,
    font, serta route yang sudah ada.
-   Catat halaman dan section yang ditemukan.
-   Periksa apakah Manrope benar-benar dimuat.
-   Periksa apakah ada dependency motion yang sudah terpasang.
-   Identifikasi semua link, CTA, accordion, checklist, TOC, dan menu
    yang membutuhkan interaksi.
-   Cari file APK dan sumber unduhannya jika ada. Jangan berasumsi file
    tersebut tersedia hanya karena halaman Download APK diminta.
-   Jangan menimpa atau menghapus file penting sebelum memahami
    perannya.

### Saat mengubah HTML menjadi React

-   Pecah UI menjadi komponen berdasarkan tanggung jawab, bukan memecah
    setiap elemen kecil secara berlebihan.
-   Contoh struktur yang mungkin cocok:
    -   `App`
    -   `SiteHeader`
    -   `MobileNavigation`
    -   `HomePage`
    -   `HeroSection`
    -   `ProblemSection`
    -   `SolutionSection`
    -   `JourneySection`
    -   `ClosingCTA`
    -   `GuidePage`
    -   `DownloadPage`
    -   `SiteFooter`
    -   komponen motion/reveal yang reusable bila memang membantu.
-   Struktur di atas adalah saran, bukan kewajiban. Sesuaikan dengan isi
    HTML yang benar-benar ada.
-   Pisahkan data konten dari markup bila membuat konten lebih mudah
    diperbarui.
-   Gunakan class CSS yang konsisten dan mudah ditelusuri.
-   Jangan mengganti konten yang sudah benar dengan lorem ipsum atau
    copy generik.
-   Jangan menghapus sumber informasi, catatan verifikasi, atau
    disclaimer yang penting.
-   Jangan mengubah backend atau aplikasi LANJUT yang terpisah.

### Saat mengimplementasikan animasi

-   Mulai dengan animasi paling penting, lalu tambah hanya bila hasilnya
    memang memperbaiki pengalaman.
-   Utamakan CSS dan API browser bawaan.
-   Hindari state React yang berubah terus-menerus untuk animasi visual
    yang bisa ditangani CSS.
-   Hindari event listener scroll manual yang berjalan berat; gunakan
    `IntersectionObserver` bila sesuai.
-   Bersihkan observer/listener pada unmount.
-   Jangan memakai `setInterval` atau loop animasi JavaScript untuk
    gerakan dekoratif sederhana.
-   Pastikan animasi tidak menyebabkan content layout shift atau
    horizontal overflow.
-   Hormati `prefers-reduced-motion`.
-   Jangan mengaktifkan smooth scrolling global jika itu mengganggu
    pengguna reduced-motion atau navigasi anchor.

### Saat mengerjakan konten resmi

-   Bedakan fakta resmi, rekomendasi LANJUT, dan contoh simulasi.
-   Jangan membuat tanggal seleksi, kuota, aturan SNBP/SNBT, ketentuan
    TKA, persyaratan kampus, atau klaim kelayakan dari asumsi.
-   Jika konten HTML mengandung klaim yang belum jelas sumbernya, jangan
    diam-diam mengubahnya menjadi fakta. Tandai untuk verifikasi dan
    laporkan.
-   Jangan mengklaim semua prodi menerima semua jurusan SMK.
-   Jangan menjanjikan hasil seleksi atau peluang lolos.
-   Jangan membuat sumber, kutipan, URL, atau data verifikasi palsu.

### Saat mengerjakan Download APK

-   Cari file dan tautan nyata terlebih dahulu.
-   Jangan membuat link unduhan palsu atau CTA aktif ke `#`.
-   Jangan mengarang versi, ukuran, tanggal rilis, minimum Android, atau
    SHA-256.
-   Jika data tidak tersedia, tampilkan status belum tersedia dengan
    jelas.
-   Jangan menyatakan APK aman atau resmi kecuali sumbernya memang dapat
    dipastikan dari project/konteks yang diberikan.

## 3. Tooling dan Arsitektur

-   Gunakan React dan setup yang paling sesuai dengan project saat ini.
-   Jika project masih berupa file HTML statis tanpa setup React,
    gunakan Vite + React sebagai opsi default yang sederhana.
-   Jangan meng-upgrade major dependency tanpa kebutuhan.
-   Pertahankan TypeScript bila sudah digunakan; jangan menambahkan
    migrasi TypeScript hanya demi gaya jika itu memperbesar risiko tanpa
    manfaat.
-   Hindari menambahkan dependency yang tidak perlu.
-   Jangan memasukkan token/API key/secret ke source frontend.
-   Pastikan script untuk development tersedia dan tuliskan perintah
    menjalankan project.

## 4. Prioritas Implementasi

Urutkan pekerjaan:

1.  **Audit dan baseline**
    -   Pahami isi HTML, aset, route, dan interaksi.
    -   Jalankan project awal jika memungkinkan dan catat masalah yang
        ada.
2.  **Konversi React**
    -   Buat app bisa berjalan di localhost.
    -   Pertahankan konten, desain, warna, dan aset.
    -   Pastikan route halaman berfungsi.
3.  **Polish motion**
    -   Tambahkan reveal section, interaksi CTA, rute SVG, dan animasi
        mascot yang memang cocok.
    -   Jangan menambahkan semua efek sekaligus.
    -   Periksa reduced motion dan performa.
4.  **Responsiveness dan aksesibilitas**
    -   Uji mobile, tablet, desktop, keyboard, dan navigasi anchor.
5.  **Verifikasi konten dan APK**
    -   Periksa status data yang memerlukan sumber resmi.
    -   Periksa bahwa halaman Download APK menyatakan status dengan
        benar.
6.  **QA akhir**
    -   Periksa console, link, layout, dan direct URL.
    -   Berikan ringkasan hasil yang faktual.

## 5. QA Checklist

-   [ ] Aplikasi dapat dijalankan lewat localhost.
-   [ ] Tidak ada error build.
-   [ ] Tidak ada error runtime yang diketahui di console.
-   [ ] Beranda, Panduan, dan Download APK dapat diakses.
-   [ ] Navigasi desktop dan mobile berfungsi.
-   [ ] Semua CTA menuju tujuan yang benar.
-   [ ] Tidak ada link placeholder yang dibiarkan aktif.
-   [ ] Font Manrope dimuat dengan benar.
-   [ ] Wordmark dan maskot memakai aset asli bila tersedia.
-   [ ] Tidak ada horizontal overflow pada viewport mobile.
-   [ ] Anchor tidak tertutup sticky header.
-   [ ] Animasi tetap halus saat scroll dan tidak membuat konten
    terlambat muncul.
-   [ ] `prefers-reduced-motion` diuji atau implementasinya diperiksa.
-   [ ] Checklist/accordion/TOC berfungsi bila tersedia.
-   [ ] Metadata APK tidak direkayasa.
-   [ ] Konten penting dari HTML awal tetap ada.
-   [ ] Perubahan dan tes yang dilakukan dilaporkan.

## 6. Format Laporan Setelah Selesai

Laporkan secara ringkas:

1.  **Yang berubah:** halaman dan komponen yang diimplementasikan.
2.  **Animasi:** efek yang ditambahkan dan cara menjaga performa.
3.  **Responsive:** viewport yang diuji dan masalah yang ditemukan.
4.  **Konten:** klaim yang masih perlu diverifikasi.
5.  **APK:** status file/tautan dan metadata yang benar-benar tersedia.
6.  **QA:** tes yang benar-benar dijalankan, hasilnya, dan hal yang
    belum diuji.
7.  **Cara menjalankan:** perintah localhost yang digunakan.

Jangan mengklaim sebuah tes lolos jika belum benar-benar dijalankan.

------------------------------------------------------------------------

# PROMPT EKSEKUSI UNTUK ANTIGRAVITY

Baca seluruh dokumen ini sebelum mengubah kode. Mulailah dengan audit
project dan file HTML hasil export Argon. Setelah memahami struktur dan
konten yang ada, ubah website menjadi React yang berjalan di localhost.
Pertahankan identitas visual LANJUT, hook hero "Mau Lanjut Kuliah, Mulai
dari Mana?", palet LANJUT Blue Tone, font Manrope, wordmark, dan maskot
asli bila aset tersedia.

Fokus utama adalah struktur React yang terawat, responsivitas, dan
animasi yang halus tetapi ringan. Utamakan CSS transitions, SVG
sederhana, dan `IntersectionObserver`; gunakan library tambahan hanya
jika benar-benar diperlukan. Hormati `prefers-reduced-motion`. Jangan
membuat ulang website dari nol tanpa alasan, jangan menghapus konten
penting, jangan membuat klaim informasi seleksi yang tidak
terverifikasi, dan jangan mengarang tautan atau metadata APK.

Jangan berhenti setelah memberi rencana. Lakukan implementasi, jalankan
project, uji navigasi serta layout pada ukuran layar yang relevan,
perbaiki masalah yang ditemukan, lalu laporkan perubahan dan hasil tes
secara jujur. Jika ada keputusan yang tidak bisa ditentukan dari
project, pilih solusi paling aman yang tidak mengarang fakta dan tandai
hal yang perlu konfirmasi.
