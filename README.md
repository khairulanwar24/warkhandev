# Web Personal Branding — Muhammad Khairul Anwar

React 18 + Vite + TypeScript. Satu halaman: hero dengan kartu profil, About + skills, karya live, pengalaman, pendidikan & penghargaan, kontak. Mendukung mode terang/gelap (otomatis mengikuti perangkat) dan responsif untuk HP. Font sudah dibundel, jadi tidak bergantung ke CDN.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil statis di folder dist/
npm run preview  # cek hasil build
```

## Mengubah isi

Semua isi ada di **`src/data/profile.ts`**: nama, tagline, ringkasan, skill, pengalaman, proyek, pendidikan, penghargaan, dan link. Teks antarmuka (menu, judul bagian, tombol) ada di **`src/data/ui.ts`**. Komponen tidak perlu disentuh.

- Situs dwibahasa (English / Indonesia) lewat tombol **EN / ID** di navbar. Teks yang diterjemahkan ditulis `{ en: '...', id: '...' }`. Bahasa awal mengikuti bahasa perangkat, lalu pilihan pengunjung disimpan.
- Ikon proyek dipilih lewat field `icon` (lihat `PROJECT_ICONS` di `src/App.tsx`).

- Proyek dengan `featured: true` tampil sebagai kartu besar; sisanya di daftar "Other builds".
- Warna dan font ada di bagian `:root` paling atas `src/styles.css`.

## Deploy

Isi folder `dist/` adalah file statis biasa (`base: './'`), jadi bisa ditaruh di mana saja:

- **Server sendiri / Nginx Proxy Manager**: salin `dist/` ke web root, misalnya untuk subdomain `khairul.farmasiunissula.com`.
- **GitHub Pages**: push `dist/` ke branch `gh-pages` repo `khairulanwar24.github.io`.
- **Netlify / Vercel**: build command `npm run build`, publish directory `dist`.
