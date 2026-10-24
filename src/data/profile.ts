/**
 * Semua isi website ada di file ini. Ubah teks di sini tanpa perlu menyentuh komponen.
 * Teks yang diterjemahkan ditulis sebagai { en, id }; sisanya (nama, link, nama teknologi) sama di kedua bahasa.
 * Sumber: resume "mkhairulanwar_resume_" (Google Docs).
 */

export type Lang = 'en' | 'id'
export type Text = Record<Lang, string>

export const profile = {
  name: 'Muhammad Khairul Anwar',
  short: 'Khairul',
  initials: 'KA',
  role: 'Software Developer',
  roleAlt: 'Fullstack Developer',
  location: 'Semarang, Indonesia',
  org: 'Fakultas Farmasi · Universitas Islam Sultan Agung',
  tagline: {
    en: 'I build reliable web applications end to end — from intuitive interfaces to solid backend systems.',
    id: 'Saya membangun aplikasi web yang andal dari ujung ke ujung — dari antarmuka yang nyaman dipakai hingga sistem backend yang kokoh.',
  },
  /** {org} opsional: jika ditulis, diganti nama organisasi dengan huruf tebal. */
  intro: {
    en: 'Fullstack software developer working across frontend, backend, RESTful APIs, and system integration — turning requirements into applications that are efficient, scalable, and easy to maintain.',
    id: 'Fullstack software developer yang menangani frontend, backend, RESTful API, dan integrasi sistem — mengubah kebutuhan menjadi aplikasi yang efisien, skalabel, dan mudah dirawat.',
  },
  summary: [
    {
      en: 'A dedicated Software Developer with nearly 2 years of experience in web-based application development and digital system implementation. Focused on backend development, system analysis, and application integration using Golang, PostgreSQL, and RESTful APIs.',
      id: 'Software Developer dengan pengalaman hampir 2 tahun dalam pengembangan aplikasi berbasis web dan implementasi sistem digital. Berfokus pada pengembangan backend, analisis sistem, dan integrasi aplikasi menggunakan Golang, PostgreSQL, dan RESTful API.',
    },
    {
      en: 'Experienced in developing and maintaining academic systems, administrative platforms, Single Sign-On (SSO), asset management systems, and digital learning platforms within Universitas Islam Sultan Agung — working with stakeholders to turn business requirements into efficient, scalable, and maintainable applications.',
      id: 'Berpengalaman mengembangkan dan memelihara sistem akademik, platform administrasi, Single Sign-On (SSO), sistem manajemen aset, dan platform pembelajaran digital di Universitas Islam Sultan Agung — bekerja bersama stakeholder untuk mengubah kebutuhan bisnis menjadi aplikasi yang efisien, skalabel, dan mudah dirawat.',
    },
  ],
  interests: {
    en: 'Strongly interested in digital transformation, impactful system development, and continuous improvement aligned with industry best practices.',
    id: 'Sangat tertarik pada transformasi digital, pengembangan sistem yang berdampak, dan perbaikan berkelanjutan sesuai praktik terbaik industri.',
  },
  /** Area fokus, tampil sebagai chip di kartu profil hero. */
  focus: [
    { en: 'Frontend development', id: 'Pengembangan frontend' },
    { en: 'Backend development', id: 'Pengembangan backend' },
    { en: 'RESTful APIs', id: 'RESTful API' },
    { en: 'System integration', id: 'Integrasi sistem' },
  ],
  email: 'khairul240102@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammad-khairul-anwar/',
    github: 'https://github.com/khairulanwar24',
    whatsapp: 'https://wa.link/rnmi30',
    portfolio: 'https://drive.google.com/drive/folders/1Vt1BUELN_NXRnfKB5QE1Uh_7plL6ThMT?usp=sharing',
  },
}

export const stats: { icon: string; value: string; unit: Text; label: Text }[] = [
  { icon: 'clock', value: '~2', unit: { en: 'yrs', id: 'thn' }, label: { en: 'building production systems', id: 'membangun sistem produksi' } },
  { icon: 'server', value: '5', unit: { en: '', id: '' }, label: { en: 'live faculty platforms', id: 'platform fakultas yang aktif' } },
  { icon: 'badge', value: 'B9', unit: { en: '', id: '' }, label: { en: 'PIC, Pharmacist Professional Program system', id: 'PIC sistem Program Studi Profesi Apoteker' } },
]

/** `key` dipakai untuk class CSS dan ikon grup; nama item juga kunci ikon di SkillIcon. */
export const skills: { key: string; group: Text; items: string[] }[] = [
  { key: 'languages', group: { en: 'Languages', id: 'Bahasa' }, items: ['Golang', 'JavaScript', 'PHP', 'Python', 'Flutter / Dart'] },
  { key: 'databases', group: { en: 'Databases', id: 'Database' }, items: ['PostgreSQL', 'MariaDB', 'MySQL', 'Firebase', 'Supabase'] },
  { key: 'frameworks', group: { en: 'Frameworks', id: 'Framework' }, items: ['Fiber', 'Laravel', 'CodeIgniter', 'Bootstrap', 'Metronic'] },
  {
    key: 'tools-devops',
    group: { en: 'Tools & DevOps', id: 'Tools & DevOps' },
    items: ['Docker', 'Jenkins', 'GitLab', 'Git', 'Nginx Proxy Manager', 'Postman', 'DBeaver', 'DbSchema', 'Figma', 'VS Code', 'Android Studio', 'Trello'],
  },
  {
    key: 'practices',
    group: { en: 'Practices', id: 'Keahlian' },
    items: ['RESTful API design', 'Clean architecture', 'OOP', 'System analysis & design', 'Software testing', 'Documentation', 'UI/UX design', 'Project management'],
  },
]

/** Label terjemahan untuk item skill yang bukan nama produk. */
export const skillLabels: Record<string, Text> = {
  'RESTful API design': { en: 'RESTful API design', id: 'Desain RESTful API' },
  'Clean architecture': { en: 'Clean architecture', id: 'Clean architecture' },
  'System analysis & design': { en: 'System analysis & design', id: 'Analisis & desain sistem' },
  'Software testing': { en: 'Software testing', id: 'Pengujian perangkat lunak' },
  Documentation: { en: 'Documentation', id: 'Dokumentasi' },
  'UI/UX design': { en: 'UI/UX design', id: 'Desain UI/UX' },
  'Project management': { en: 'Project management', id: 'Manajemen proyek' },
}

export interface Experience {
  role: string
  type: Text
  company: string
  companyUrl?: string
  unit?: string
  period: Text
  current?: boolean
  intro: Text
  points: Text[]
  tags?: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Developer · IT Support',
    type: { en: 'Full-time · On-site', id: 'Penuh waktu · Di kantor' },
    company: 'Universitas Islam Sultan Agung (UNISSULA)',
    unit: 'Fakultas Farmasi',
    period: { en: 'Jun 2024 — Present', id: 'Jun 2024 — Sekarang' },
    current: true,
    intro: {
      en: 'Developing, maintaining, and optimizing the web applications behind the faculty’s academic and administrative operations — backend, frontend, system integration, and IT infrastructure.',
      id: 'Mengembangkan, memelihara, dan mengoptimalkan aplikasi web yang menopang operasional akademik dan administrasi fakultas — backend, frontend, integrasi sistem, dan infrastruktur IT.',
    },
    points: [
      {
        en: 'Design and build backend systems in Golang on PostgreSQL, with RESTful APIs connecting internal systems to university-wide platforms',
        id: 'Merancang dan membangun sistem backend dengan Golang dan PostgreSQL, dengan RESTful API yang menghubungkan sistem internal ke platform universitas',
      },
      {
        en: 'Ship business features such as letter management, attendance, student data management, and other academic services',
        id: 'Merilis fitur bisnis seperti manajemen surat, presensi, pengelolaan data mahasiswa, dan layanan akademik lainnya',
      },
      {
        en: 'PIC (Person in Charge) for the Pharmacist Professional Study Program System (Batch 9), keeping it stable and effective',
        id: 'PIC (Person in Charge) Sistem Program Studi Profesi Apoteker (Angkatan 9), menjaga sistem tetap stabil dan efektif',
      },
      {
        en: 'Translate requirements from study programs and administrative teams into working solutions, then present progress to stakeholders',
        id: 'Menerjemahkan kebutuhan program studi dan tim administrasi menjadi solusi yang berjalan, lalu mempresentasikan progres ke stakeholder',
      },
      {
        en: 'Debug, test, and optimize application performance; write technical documentation',
        id: 'Debugging, pengujian, dan optimasi performa aplikasi; menulis dokumentasi teknis',
      },
      {
        en: 'Maintain CBT Center systems, network infrastructure, and network monitoring',
        id: 'Memelihara sistem CBT Center, infrastruktur jaringan, dan monitoring jaringan',
      },
    ],
    tags: ['Golang', 'Fiber', 'PostgreSQL', 'REST API', 'Docker', 'Jenkins'],
  },
  {
    role: 'Flutter Developer Mentee',
    type: { en: 'Bootcamp · Remote', id: 'Bootcamp · Jarak jauh' },
    company: 'Android Enthusiast Jakarta',
    companyUrl: 'https://www.instagram.com/hightech.id',
    period: { en: 'Jan 2024 — Present', id: 'Jan 2024 — Sekarang' },
    intro: {
      en: 'Professional bootcamp to grow from developer toward proficient software engineering.',
      id: 'Bootcamp profesional untuk berkembang dari developer menuju software engineer yang mumpuni.',
    },
    points: [{ en: 'Completed the junior program: Dart, Flutter, Dio, Bloc, and Hive', id: 'Menyelesaikan program junior: Dart, Flutter, Dio, Bloc, dan Hive' }],
    tags: ['Flutter', 'Bloc', 'Dio', 'Hive'],
  },
  {
    role: 'Android Apps Developer Intern',
    type: { en: 'Internship · On-site', id: 'Magang · Di kantor' },
    company: 'INASTEK',
    companyUrl: 'https://www.inastek.com/id',
    period: { en: 'Aug — Dec 2023', id: 'Agu — Des 2023' },
    intro: {
      en: 'End-to-end product development company, from ideation and design to mass production.',
      id: 'Perusahaan pengembangan produk end-to-end, dari ide dan desain hingga produksi massal.',
    },
    points: [
      { en: 'Sliced UI/UX designs from Figma and translated them into app layouts', id: 'Slicing desain UI/UX dari Figma dan menerapkannya ke layout aplikasi' },
      { en: 'Integrated APIs and retrieved real-time data from an ESP32 microcontroller', id: 'Mengintegrasikan API dan mengambil data real-time dari mikrokontroler ESP32' },
      {
        en: 'Estimated project deadlines, reported weekly to a mentor, and presented the final project',
        id: 'Mengestimasi tenggat proyek, melapor mingguan ke mentor, dan mempresentasikan proyek akhir',
      },
    ],
    tags: ['Flutter', 'ESP32', 'Figma'],
  },
  {
    role: 'Front-End & Back-End Web Developer',
    type: { en: 'Studi Independen Kampus Merdeka · Online', id: 'Studi Independen Kampus Merdeka · Daring' },
    company: 'Dicoding Indonesia',
    companyUrl: 'https://www.dicoding.com/',
    period: { en: 'Aug — Dec 2022', id: 'Agu — Des 2022' },
    intro: {
      en: 'Kampus Merdeka Batch 3. Final project: a neighbourhood item-sharing web app integrated with Mapbox.',
      id: 'Kampus Merdeka Batch 3. Proyek akhir: aplikasi web berbagi barang antar tetangga yang terintegrasi dengan Mapbox.',
    },
    points: [
      { en: 'Fundamental Front-End Web and Fundamental Back-End Web — both at Expert level', id: 'Fundamental Front-End Web dan Fundamental Back-End Web — keduanya level Expert' },
      { en: 'Clean architecture, soft skills, and team management', id: 'Clean architecture, soft skill, dan manajemen tim' },
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'Postman'],
  },
]

export interface Project {
  name: string
  /** kunci ikon, lihat PROJECT_ICONS di App.tsx */
  icon: string
  kind: Text
  url?: string
  urls?: { label: Text; href: string }[]
  desc: Text
  features?: Text[]
  stack: string[]
  arch?: string
  featured?: boolean
  /** kartu unggulan selebar dua kolom */
  wide?: boolean
}

export const projects: Project[] = [
  {
    name: 'eFarm — Academic Information System',
    icon: 'cap',
    kind: { en: 'Academic information system', id: 'Sistem informasi akademik' },
    url: 'https://efarm.farmasiunissula.com',
    desc: {
      en: 'The Faculty of Pharmacy’s academic information system, covering curriculum and courses, course registration (KRS), class rosters, grading and remedials, and student billing. It runs as a REST API microservice with a separate admin frontend and signs users in through SSO.',
      id: 'Sistem informasi akademik Fakultas Farmasi yang mencakup kurikulum dan mata kuliah, KRS, peserta kelas, penilaian dan remedial, hingga tagihan mahasiswa. Dibangun sebagai microservice REST API dengan frontend admin terpisah serta login lewat SSO.',
    },
    features: [
      { en: 'Curriculum & course management', id: 'Manajemen kurikulum & mata kuliah' },
      { en: 'Course registration (KRS) & class rosters', id: 'KRS & peserta kelas' },
      { en: 'Grading, daily scores & remedials', id: 'Penilaian, nilai harian & remedial' },
      { en: 'Student & batch billing', id: 'Tagihan mahasiswa & angkatan' },
      { en: 'Student data & 30+ reference modules', id: 'Data mahasiswa & 30+ modul referensi' },
    ],
    stack: ['Golang', 'Fiber', 'PostgreSQL', 'GORM', 'gRPC', 'HTMX', 'Metronic', 'Docker Swarm', 'Jenkins'],
    arch: 'Microservice · REST API · gRPC auth via SSO',
    featured: true,
    wide: true,
  },
  {
    name: 'SSO Farmasi',
    icon: 'shield',
    kind: { en: 'Single Sign-On', id: 'Single Sign-On' },
    url: 'https://sso.farmasiunissula.com',
    desc: {
      en: 'One account for administrators, lecturers, students, and staff to reach every internal system of the faculty — centralized login, access control, and activity monitoring.',
      id: 'Satu akun bagi administrator, dosen, mahasiswa, dan staf untuk mengakses semua sistem internal fakultas — login terpusat, kontrol akses, dan monitoring aktivitas.',
    },
    features: [
      { en: 'Role & permission management (RBAC)', id: 'Manajemen role & hak akses (RBAC)' },
      { en: 'Centralized authentication', id: 'Autentikasi terpusat' },
      { en: 'Application integration', id: 'Integrasi aplikasi' },
      { en: 'User activity monitoring', id: 'Monitoring aktivitas pengguna' },
    ],
    stack: ['Golang', 'Fiber', 'PostgreSQL', 'Docker', 'Jenkins', 'Nginx Proxy Manager'],
    arch: 'MVC · Session-based auth · RBAC',
    featured: true,
  },
  {
    name: 'Digiclass',
    icon: 'book',
    kind: { en: 'Academic platform', id: 'Platform akademik' },
    url: 'https://digiclass.farmasiunissula.com',
    desc: {
      en: 'Digital classroom for the Faculty of Pharmacy: course materials, schedules, assignments, and learning management for lecturers, students, and administrators.',
      id: 'Kelas digital Fakultas Farmasi: materi kuliah, jadwal, tugas, dan manajemen pembelajaran untuk dosen, mahasiswa, dan administrator.',
    },
    features: [
      { en: 'User management', id: 'Manajemen pengguna' },
      { en: 'Course scheduling', id: 'Penjadwalan perkuliahan' },
      { en: 'Academic data management', id: 'Pengelolaan data akademik' },
      { en: 'Attendance system', id: 'Sistem presensi' },
    ],
    stack: ['Golang', 'Fiber', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'Metronic'],
    arch: 'MVC · Session-based auth',
    featured: true,
  },
  {
    name: 'UPHIC Conference',
    icon: 'globe',
    kind: { en: 'International conference', id: 'Konferensi internasional' },
    url: 'https://uphic.farmasiunissula.com',
    urls: [
      { label: { en: '2nd edition', id: 'Edisi ke-2' }, href: 'https://uphic-2nd.farmasiunissula.com/' },
      { label: { en: '3rd edition', id: 'Edisi ke-3' }, href: 'https://uphic-3rd.farmasiunissula.com/' },
    ],
    desc: {
      en: 'Conference platform for the faculty’s international seminar: registration, abstract and paper submission, payment verification, and certificates.',
      id: 'Platform konferensi untuk seminar internasional fakultas: pendaftaran, pengiriman abstrak dan paper, verifikasi pembayaran, dan sertifikat.',
    },
    features: [
      { en: 'Participant registration', id: 'Pendaftaran peserta' },
      { en: 'Abstract & paper submission', id: 'Pengiriman abstrak & paper' },
      { en: 'Payment verification', id: 'Verifikasi pembayaran' },
      { en: 'Certificate generation', id: 'Pembuatan sertifikat' },
    ],
    stack: ['PHP', 'CodeIgniter', 'JavaScript', 'Docker', 'Jenkins'],
    arch: 'MVC · Session-based auth',
    featured: true,
  },
  {
    name: 'Asset Management',
    icon: 'box',
    kind: { en: 'Inventory system', id: 'Sistem inventaris' },
    url: 'https://aset.farmasiunissula.com',
    desc: {
      en: 'Structured asset records for the faculty: inventory, borrowing and returns, item condition, usage history, and reporting.',
      id: 'Pencatatan aset fakultas yang terstruktur: inventaris, peminjaman dan pengembalian, kondisi barang, riwayat penggunaan, dan pelaporan.',
    },
    features: [
      { en: 'Asset & category management', id: 'Manajemen aset & kategori' },
      { en: 'Borrowing and returns', id: 'Peminjaman dan pengembalian' },
      { en: 'Condition monitoring', id: 'Monitoring kondisi' },
      { en: 'Asset reporting', id: 'Pelaporan aset' },
    ],
    stack: ['PHP', 'CodeIgniter', 'Docker', 'Jenkins'],
    arch: 'MVC',
    featured: true,
  },
  {
    name: 'Aljaar',
    icon: 'heart',
    kind: { en: 'Community web app', id: 'Web app komunitas' },
    url: 'https://aljaar.my.id/',
    desc: {
      en: 'Connects neighbours to share food and goods for free — “Aljaar” means neighbour in Arabic.',
      id: 'Menghubungkan tetangga untuk berbagi makanan dan barang secara gratis — “Aljaar” berarti tetangga dalam bahasa Arab.',
    },
    stack: ['JavaScript', 'HTML', 'CSS', 'Supabase'],
  },
  {
    name: 'Montana',
    icon: 'leaf',
    kind: { en: 'IoT mobile app', id: 'Aplikasi mobile IoT' },
    desc: {
      en: 'Real-time plant monitoring that reads parameters from an ESP32 microcontroller. Android developer and UI/UX designer.',
      id: 'Monitoring tanaman real-time yang membaca parameter dari mikrokontroler ESP32. Sebagai Android developer dan UI/UX designer.',
    },
    stack: ['Flutter', 'Firebase Realtime DB', 'Figma'],
  },
  {
    name: 'Shamo',
    icon: 'cart',
    kind: { en: 'E-commerce & chat', id: 'E-commerce & chat' },
    desc: {
      en: 'Cross-platform e-commerce with chat — Laravel backend and Flutter client.',
      id: 'E-commerce lintas platform dengan fitur chat — backend Laravel dan klien Flutter.',
    },
    stack: ['Flutter', 'Laravel', 'MySQL', 'Firebase'],
  },
  {
    name: 'FlixID',
    icon: 'ticket',
    kind: { en: 'Course project', id: 'Proyek kursus' },
    desc: {
      en: 'Cinema ticket booking simulation applying clean architecture and separation of concerns.',
      id: 'Simulasi pemesanan tiket bioskop dengan clean architecture dan separation of concerns.',
    },
    stack: ['Flutter', 'Firebase Auth', 'Riverpod'],
  },
  {
    name: 'Hotels App',
    icon: 'bed',
    kind: { en: 'Mobile app', id: 'Aplikasi mobile' },
    desc: {
      en: 'Hotel search app built from provided designs, with GetX state management and Firebase.',
      id: 'Aplikasi pencarian hotel dari desain yang disediakan, dengan state management GetX dan Firebase.',
    },
    stack: ['Flutter', 'Firestore', 'GetX'],
  },
]

export const education = {
  school: 'Universitas Islam Sultan Agung',
  place: 'Semarang, Jawa Tengah',
  degree: { en: 'Bachelor’s degree in Informatics', id: 'Sarjana Teknik Informatika' },
  period: { en: 'Jul 2020 — Jun 2024', id: 'Jul 2020 — Jun 2024' },
  orgs: ['BEM Fakultas Teknologi Industri', 'Himpunan Mahasiswa Teknik Informatika'],
}

export const awards: { title: Text; detail: string; project: Text; stack: string[] }[] = [
  {
    title: { en: 'PKM-KC funding winner', id: 'Penerima pendanaan PKM-KC' },
    detail: 'Program Kreativitas Mahasiswa — Karsa Cipta',
    project: {
      en: 'Thermos Tech: a portable multifunction thermos with LED display',
      id: 'Thermos Tech: termos portabel multifungsi dengan layar LED',
    },
    stack: ['Arduino', 'C++', 'Team management'],
  },
]
