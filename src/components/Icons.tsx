type P = { size?: number }
const base = (size = 18) => ({ width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true })

export const Arrow = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)
export const Mail = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)
export const Github = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)
export const Linkedin = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </svg>
)
export const Chat = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.3A8.5 8.5 0 1 1 21 12Z" />
  </svg>
)
export const Folder = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  </svg>
)
export const Sun = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)
export const Moon = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
  </svg>
)
export const Copy = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
)
export const Check = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="m5 12 5 5 9-10" />
  </svg>
)
export const Globe = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
)
export const User = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
)
export const Users = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
  </svg>
)
export const Grid = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
export const Briefcase = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
)
export const Send = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4Z" />
  </svg>
)
export const Calendar = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)
export const Pin = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)
export const Building = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4" />
  </svg>
)
export const Cap = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="m2 9 10-5 10 5-10 5ZM6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6" />
  </svg>
)
export const Trophy = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0ZM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8M9 18h6" />
  </svg>
)
export const Clock = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)
export const Server = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
)
export const Badge = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 13.8-1.5 7.2 5-3 5 3-1.5-7.2M10 9l1.5 1.5L14.5 7.5" />
  </svg>
)
export const Code = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
  </svg>
)
export const Database = ({ size }: P) => (
  <svg {...base(size)}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
)
export const Layers = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="m12 3 9 5-9 5-9-5ZM3 12.5l9 5 9-5M3 17l9 5 9-5" />
  </svg>
)
export const Wrench = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8ZM14.7 6.3 17 4a4 4 0 0 0-5.3 5.3L3 18" />
  </svg>
)
export const Compass = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5Z" />
  </svg>
)
export const Shield = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
export const Book = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M4 5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2ZM4 20a2 2 0 0 0 2 2h14v-4M9 8h7" />
  </svg>
)
export const Box = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9ZM3.5 7.5 12 12l8.5-4.5M12 12v9" />
  </svg>
)
export const Heart = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20Z" />
  </svg>
)
export const Leaf = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16ZM5 21l8-8" />
  </svg>
)
export const Cart = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M3 4h2l2.4 11h10.8L21 8H6.2" />
    <circle cx="9" cy="19.5" r="1.5" />
    <circle cx="17" cy="19.5" r="1.5" />
  </svg>
)
export const Ticket = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4ZM14 6v12" />
  </svg>
)
export const Bed = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M3 5v15M3 16h18v4M21 16v-4a3 3 0 0 0-3-3h-7v7" />
    <circle cx="7" cy="11.5" r="2" />
  </svg>
)
