---
target: src/components/Hero.astro
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-09-06T09-51-53Z
slug: src-components-hero-astro
---
# Design Critique: Hero Section (src/components/Hero.astro)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Status pill live, namun tombol unduh resume tidak menampilkan ukuran/format file. |
| 2 | Match System / Real World | 2 | Sandbox memuat token eksternal (`Claude Editorial Design System Tokens`); baris stats memaksakan teks panjang ke wadah angka. |
| 3 | User Control and Freedom | 3 | Tab switcher dan navigasi anchor berfungsi mulus; sandbox tidak memiliki opsi reset/collapse. |
| 4 | Consistency and Standards | 2 | Disonansi visual antara editorial cream di kiri dan terminal obsidian di kanan; 14 pelanggaran ukuran teks sub-12px. |
| 5 | Error Prevention | 4 | Tampilan statis & sandbox client-side aman tanpa potensi input error. |
| 6 | Recognition Rather Than Recall | 3 | CTA jelas terbaca, namun deretan statistik menampilkan teks kampus/kantor di slot yang biasa dibaca sebagai angka. |
| 7 | Flexibility and Efficiency | n/a | Persuade / Portfolio landing mode (akselerator keyboard tidak aplikatif). |
| 8 | Aesthetic and Minimalist Design | 2 | Overload elemen dalam satu viewport: 3 tombol CTA berdampingan + 4 slot statistik + studio terminal 3 tab dengan kontrol mikro. |
| 9 | Error Recovery | n/a | Tidak ada form input pada hero section. |
| 10 | Help and Documentation | n/a | Portfolio surface, navigasi mandiri. |
| **Total** | | **19/28** | **Acceptable (68%)** |

---

#### Design Specificity Verdict

- **LLM Assessment**: Hero section ini memiliki eksekusi visual dasar yang rapi dan elegan, namun mengalami **krisis identitas dan spesifisitas**. Headline utama hanyalah pengulangan jabatan (*"Frontend Developer & UI/UX Designer"*) yang identik dengan badge di atasnya—kehilangan kesempatan untuk menyampaikan *value proposition* personal Umam. Lebih kritis lagi, panel interaktif di sebelah kanan memuat teks mentah `// Claude Editorial Design System Tokens` dan tombol counter sederhana (*"Interactive CTA · X clicks"*), bukannya memamerkan komponen nyata dari proyek autentik Umam (seperti Pentadosen atau C-Tech ERP).
- **Deterministic Scan**:
  - `src/components/Hero.astro`: 1 advisory (`52px` font-size berada di luar ramp desain `DESIGN.md`).
  - `src/components/ui/HeroInteractiveStudio.tsx`: 14 advisories pada teks mikro (`10px`, `10.5px`, `11px`), menyulitkan legibilitas pada layar kecil.
- **Visual Overlays**: Tidak ada overlay browser aktif pada sesi ini (evaluasi statis & heuristik).

---

#### Overall Impression
Secara tampilan sepintas (*first glance*), kombinasi warna cream hangat (`#faf9f5`) dan terakota (`#cc785c`) terasa premium dan berkelas. Namun, Hero section ini terbelah menjadi dua dunia yang belum menyatu: sisi kiri berkarakter *editorial publication*, sedangkan sisi kanan adalah *terminal playground* yang terasa seperti prototipe generik dengan token Claude yang belum diganti dan teks yang terlalu kecil.

---

#### What's Working
1. **Palet Warna & Nuansa Editorial**: Warna kanvas cream hangat, aksen terakota, dan tipografi display Newsreader/Copernicus memberikan impresi jauh lebih berkelas dibandingkan template portofolio gelap generik.
2. **Ambisi Interactive Studio**: Kehadiran komponen interaktif di kolom kanan menunjukkan intensi kuat bahwa Umam bukan sekadar desainer grafis, melainkan *design engineer* yang paham kode (React + TypeScript).
3. **Struktur Grid Responsif**: Pembagian 12-kolom (`lg:grid-cols-12`) sudah rapi dan siap adaptif saat mengecil ke mobile.

---

#### Priority Issues

- **[P1] Copy & Hierarki Headline yang Redundan**
  - **Why it matters**: Headline adalah hal pertama yang dibaca dalam 3 detik pertama. Menuliskan *"Frontend Developer & UI/UX Designer"* tepat di bawah pill badge yang sudah bertuliskan *"Muhammad Syafi'ul Umam · Frontend Developer & UI/UX Designer"* adalah pemborosan ruang kognitif tanpa diferensiasi nilai.
  - **Fix**: Ubah headline menjadi *value statement* yang kuat (misal: fokus pada *crafting responsive design systems & production-ready web apps*), atau gunakan headline personal dari `portfolioData.personal.headline`.
  - **Suggested command**: `$impeccable clarify` atau `$impeccable bolder`

- **[P1] Disonansi & Token Placeholder di Interactive Studio**
  - **Why it matters**: Tab `Tokens.ts` di kolom kanan masih secara eksplisit menuliskan komentar `// Claude Editorial Design System Tokens`. Bagi recruiter atau klien teknis, ini langsung terbaca sebagai kode *copy-paste* dari template luar, bukan sistem desain orisinal milik Umam. Selain itu, tombol *"Interactive CTA · X clicks"* terasa seperti mainan ketimbang portofolio teknis.
  - **Fix**: Ganti token tersebut menjadi token identitas Umam (`Umam Design Tokens`), dan ubah isi preview sandbox menjadi demonstrasi komponen nyata (misal: kartu proyek interaktif Pentadosen, status selector real-world, atau toggle tema).
  - **Suggested command**: `$impeccable shape` atau `$impeccable distill`

- **[P2] Format Statistik Tidak Konsisten dengan Ekspektasi Metrik**
  - **Why it matters**: Bagian bawah hero menampilkan 4 kolom angka besar (`text-2xl font-display`). Namun isinya adalah teks panjang: *"Frontend & UI/UX"*, *"Universitas YARSI"*, *"C-Tech Indonesia"*, *"Jakarta, ID"*. Pengunjung secara naluriah membaca slot angka besar sebagai metrik terukur. Memasukkan nama universitas di slot angka membuat tipografi display serif tampak canggung dan terpotong di layar sempit.
  - **Fix**: Pisahkan antara metrik kuantitatif (misal: *"3+ Projects Delivered"*, *"100% Lighthouse"*, *"2+ Years Exp"*) dengan metadata profil (pendidikan/lokasi), atau ubah format penyajian menjadi *meta pills / info cards*.
  - **Suggested command**: `$impeccable layout`

- **[P2] Pelanggaran Aksesibilitas Tipografi Mikro (14x Sub-12px)**
  - **Why it matters**: HeroInteractiveStudio menggunakan font `10px`, `10.5px`, dan `11px` secara masif (terdeteksi 14 kali oleh scan mekanikal). Ini melanggar standar WCAG untuk legibilitas teks dan membuat pengguna di perangkat mobile atau dengan ketajaman mata rendah sulit membaca kontrol.
  - **Fix**: Standardisasi ukuran teks minimum ke `12px` (`text-xs`) atau `13-14px` (`text-sm`), serta perbesar touch target tombol kontrol ke minimal 36–40px.
  - **Suggested command**: `$impeccable typeset`

- **[P2] Kepadatan Aksi (3 CTA yang Saling Bersaing)**
  - **Why it matters**: Tiga tombol sekaligus (*View Projects*, *Download Resume*, *Contact Me*) di bawah paragraf pembuka membingungkan pengunjung: mana aksi utama yang paling diharapkan?
  - **Fix**: Terapkan hierarki tegas: 1 Primary CTA (*View Projects*), 1 Secondary CTA (*Download Resume*), dan pindahkan *Contact Me* ke navigasi atau buat sebagai teks tautan inline.
  - **Suggested command**: `$impeccable distill`

---

#### Persona Red Flags

- **Alex (Tech Recruiter / Lead Dev)**: Membuka portofolio untuk mengevaluasi kemampuan teknis. Saat mengklik tab `Tokens.ts` di studio interaktif, Alex melihat `// Claude Editorial Design System Tokens` dan tombol klik counter `Interactive CTA · 1 clicks`. Alex mengira ini template kloningan Anthropic alih-alih karya orisinal.
- **Jordan (Klien / HR Non-Teknis)**: Masuk melalui ponsel. Kolom kanan berupa terminal hitam dengan baris kode TypeScript dan tombol CLI membingungkan dan mendorong konten proyek sebenarnya jauh ke bawah. Jordan tidak menemukan foto wajah Umam untuk membangun rasa percaya (*human connection*).
- **Sam (Pengguna Aksesibilitas / Low Vision)**: Membaca teks ukuran 10px dan 10.5px pada latar belakang gelap `#181715` di studio interaktif dengan kontras rendah. Tidak menemukan aria-label informatif pada tombol toggle dan slider radius.

---

#### Minor Observations
- **Ketiadaan Foto / Avatar Profil**: Seluruh hero section tidak menampilkan foto diri Umam, hanya ada inisial "U" di dalam kartu studio kecil. Portofolio personal membutuhkan kedekatan visual personal.
- **Ukuran Display Heading**: Penggunaan kelas `text-[52px]` memicu peringatan advisory karena berada di luar tangga ramp tipografi standar sistem.

---

#### Questions to Consider
1. *Bagaimana jika kolom kanan menampilkan miniatur interaktif dari proyek nyata (seperti modul verifikasi Pentadosen atau widget ERP) daripada sekadar slider radius dan tombol hitung klik?*
2. *Apakah headline utama lebih berdampak jika menceritakan masalah yang Umam selesaikan ("Bridging thoughtful design systems with scalable frontend architecture") daripada hanya mengulang jabatan?*
3. *Apakah deretan statistik lebih meyakinkan jika menampilkan metrik nyata pencapaian (skor Lighthouse, jumlah proyek, jam riset) dibanding nama kampus dan kota?*
