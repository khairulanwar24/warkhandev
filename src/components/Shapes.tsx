import type { CSSProperties } from 'react'

/**
 * Bentuk ala Material 3 Expressive (cookie, clover, sunny, pill, sparkle) yang sering
 * dipakai Google I/O & Android. Semua di viewBox 0 0 100 100, warna lewat prop `fill`.
 */

/** Kurva tertutup dari fungsi jari-jari r(θ) di sekitar titik tengah (50, 50). */
function polar(r: (t: number) => number, steps = 180) {
  let d = ''
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const v = r(t)
    d += `${i ? 'L' : 'M'}${(50 + v * Math.cos(t)).toFixed(1)} ${(50 + v * Math.sin(t)).toFixed(1)}`
  }
  return d + 'Z'
}

const PATHS = {
  cookie12: polar((t) => 46 + 4 * Math.cos(12 * t)),
  cookie7: polar((t) => 44 + 6 * Math.cos(7 * t + Math.PI / 2)),
  cookie4: polar((t) => 42 + 8 * Math.cos(4 * t)),
  clover: polar((t) => 30 + 20 * Math.abs(Math.cos(2 * t)) ** 0.6),
  sunny: polar((t) => 47 + 3 * Math.cos(16 * t), 240),
  sparkle: 'M50 0C53 36 64 47 100 50C64 53 53 64 50 100C47 64 36 53 0 50C36 47 47 36 50 0Z',
  pill: 'M30 20H70A30 30 0 0 1 70 80H30A30 30 0 0 1 30 20Z',
  half: 'M0 75A50 50 0 0 1 100 75Z',
  circle: 'M50 0A50 50 0 1 1 50 100A50 50 0 1 1 50 0Z',
} as const

export type ShapeKind = keyof typeof PATHS

type Props = {
  kind: ShapeKind
  /** Tanpa prop ini warna diambil dari CSS `fill` pada <svg>. */
  fill?: string
  size?: number
  className?: string
  style?: CSSProperties
}

export default function Shape({ kind, fill, size, className, style }: Props) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[kind]} fill={fill} />
    </svg>
  )
}

/** Empat titik warna Google, dipakai sebagai penanda kecil. */
export function GoogleDots({ className = '' }: { className?: string }) {
  return (
    <span className={`g-dots ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  )
}
