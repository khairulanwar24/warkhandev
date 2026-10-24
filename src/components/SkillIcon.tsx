import {
  siAndroidstudio,
  siBootstrap,
  siCodeigniter,
  siDbeaver,
  siDocker,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGitlab,
  siGo,
  siJavascript,
  siJenkins,
  siLaravel,
  siMariadb,
  siMysql,
  siNginxproxymanager,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siSupabase,
  siTrello,
  type SimpleIcon,
} from 'simple-icons'

/** Logo brand dari simple-icons (fill). */
const BRANDS: Record<string, SimpleIcon> = {
  Golang: siGo,
  JavaScript: siJavascript,
  PHP: siPhp,
  Python: siPython,
  'Flutter / Dart': siFlutter,
  PostgreSQL: siPostgresql,
  MariaDB: siMariadb,
  MySQL: siMysql,
  Firebase: siFirebase,
  Supabase: siSupabase,
  Laravel: siLaravel,
  CodeIgniter: siCodeigniter,
  Bootstrap: siBootstrap,
  Docker: siDocker,
  Jenkins: siJenkins,
  GitLab: siGitlab,
  Git: siGit,
  'Nginx Proxy Manager': siNginxproxymanager,
  Postman: siPostman,
  DBeaver: siDbeaver,
  Figma: siFigma,
  'Android Studio': siAndroidstudio,
  Trello: siTrello,
}

/** Ikon garis untuk yang tidak punya logo di simple-icons, plus kolom Practices. */
const GLYPHS: Record<string, string> = {
  Fiber: 'M13 2 4 14h7l-1 8 9-12h-7Z',
  Metronic: 'M4 4h7v7H4ZM13 4h7v4h-7ZM13 10h7v10h-7ZM4 13h7v7H4Z',
  DbSchema: 'M3 4h7v6H3ZM14 14h7v6h-7ZM6.5 10v7H14M10 7h4.5v7',
  'VS Code': 'm8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  'RESTful API design': 'M4 8h13l-3-3M20 16H7l3 3',
  'Clean architecture': 'm12 3 9 5-9 5-9-5ZM3 12.5l9 5 9-5M3 17l9 5 9-5',
  OOP: 'M12 3 20 7.5v9L12 21l-8-4.5v-9ZM12 12l8-4.5M12 12 4 7.5M12 12v9',
  'System analysis & design': 'M3 4h6v5H3ZM15 15h6v5h-6ZM15 4h6v5h-6ZM9 6.5h6M18 9v6',
  'Software testing': 'M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10',
  Documentation: 'M6 3h9l4 4v14H6ZM14 3v5h5M9 12h7M9 16h7',
  'UI/UX design': 'M3 21l3-1 12-12-2-2L4 18ZM14 6l4 4M15 3l6 6',
  'Project management': 'M4 4h16v16H4ZM9.3 4v16M14.6 4v16M5.5 7h2.5M11 7h2.5M11 10h2.5M16 7h2.5',
}

/** Brand yang warnanya terlalu gelap/terang (luminans relatif) untuk tetap terbaca di kedua tema. */
function usable(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  const l = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return l > 0.06 && l < 0.85
}

export function skillColor(name: string): string | undefined {
  const b = BRANDS[name]
  return b && usable(b.hex) ? `#${b.hex}` : undefined
}

export default function SkillIcon({ name, size = 18 }: { name: string; size?: number }) {
  const brand = BRANDS[name]
  if (brand)
    return (
      <svg className="sk-ico" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d={brand.path} />
      </svg>
    )
  const d = GLYPHS[name]
  if (!d) return <span className="sk-ico sk-dot" aria-hidden />
  return (
    <svg
      className="sk-ico"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  )
}
