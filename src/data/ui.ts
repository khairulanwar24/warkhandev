import type { Text } from './profile'

/** Teks antarmuka (navigasi, judul bagian, tombol) dalam dua bahasa. */
export const ui = {
  title: { en: 'Muhammad Khairul Anwar, S.Kom. — Software Developer', id: 'Muhammad Khairul Anwar, S.Kom. — Software Developer' },
  skip: { en: 'Skip to content', id: 'Langsung ke konten' },
  backToTop: { en: 'back to top', id: 'kembali ke atas' },
  mainNav: { en: 'Main', id: 'Utama' },
  nav: {
    about: { en: 'About', id: 'Tentang' },
    work: { en: 'Work', id: 'Karya' },
    experience: { en: 'Experience', id: 'Pengalaman' },
    contact: { en: 'Contact', id: 'Kontak' },
  },
  toLight: { en: 'Switch to light mode', id: 'Ganti ke mode terang' },
  toDark: { en: 'Switch to dark mode', id: 'Ganti ke mode gelap' },
  switchLang: { en: 'Ganti ke Bahasa Indonesia', id: 'Switch to English' },
  getInTouch: { en: 'Get in touch', id: 'Hubungi saya' },
  menu: { en: 'Menu', id: 'Menu' },
  seeWork: { en: 'See my work', id: 'Lihat karya saya' },

  aboutKicker: { en: 'About', id: 'Tentang' },
  aboutTitle: { en: 'Systems that quietly keep a faculty running.', id: 'Sistem yang diam-diam menjaga fakultas tetap berjalan.' },
  toolkit: { en: 'Toolkit', id: 'Perangkat' },
  skillsTotal: { en: '{n} technologies & practices', id: '{n} teknologi & keahlian' },

  workKicker: { en: 'Selected work', id: 'Karya pilihan' },
  workTitle: { en: 'Live in production at Fakultas Farmasi.', id: 'Berjalan di produksi Fakultas Farmasi.' },
  workSub: {
    en: 'Platforms used every day by lecturers, students, staff, and conference participants.',
    id: 'Platform yang dipakai setiap hari oleh dosen, mahasiswa, staf, dan peserta konferensi.',
  },
  visit: { en: 'Visit', id: 'Kunjungi' },
  visitName: { en: 'Visit {name}', id: 'Kunjungi {name}' },
  otherBuilds: { en: 'Other builds', id: 'Proyek lainnya' },
  portfolio: { en: 'Full portfolio folder', id: 'Folder portofolio lengkap' },
  codeOnGithub: { en: 'Code on GitHub', id: 'Kode di GitHub' },

  expKicker: { en: 'Experience', id: 'Pengalaman' },
  expTitle: { en: 'From bootcamps to owning production systems.', id: 'Dari bootcamp hingga memegang sistem produksi.' },
  current: { en: 'Current', id: 'Saat ini' },
  education: { en: 'Education', id: 'Pendidikan' },
  orgs: { en: 'Organizations', id: 'Organisasi' },
  award: { en: 'Award', id: 'Penghargaan' },

  contactKicker: { en: 'Contact', id: 'Kontak' },
  contactTitle: { en: 'Have a system that needs building', id: 'Punya sistem yang perlu dibangun' },
  contactEm: { en: '— or untangling?', id: '— atau dibenahi?' },
  contactLede: {
    en: 'Open to collaboration on web platforms, backend services, and system integration.',
    id: 'Terbuka untuk kolaborasi di platform web, layanan backend, dan integrasi sistem.',
  },
  copyEmail: { en: 'Copy email address', id: 'Salin alamat email' },
  copied: { en: 'Copied', id: 'Tersalin' },

  available: { en: 'Open to collaboration', id: 'Terbuka untuk kolaborasi' },
  focusAreas: { en: 'Focus areas', id: 'Area fokus' },
  termLabel: { en: 'Profile as an API response', id: 'Profil sebagai respons API' },
  termSr: {
    en: '{name}, {role}, focused on backend and system integration with Go, Fiber, and PostgreSQL. Based in {location}.',
    id: '{name}, {role}, berfokus pada backend dan integrasi sistem dengan Go, Fiber, dan PostgreSQL. Berdomisili di {location}.',
  },
} satisfies Record<string, Text | Record<string, Text>>
