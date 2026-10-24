import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

/**
 * Kartu "API request" di hero: mengetik GET request lalu menampilkan respons JSON.
 * Menggambarkan fokus backend (Golang + REST) secara visual.
 */
const REQUEST = 'curl -s localhost:8080/v1/me'

const RESPONSE: [string, string][] = [
  ['name', `"${profile.name}"`],
  ['role', `"${profile.role}"`],
  ['focus', '["backend", "system integration"]'],
  ['stack', '["Go", "Fiber", "PostgreSQL"]'],
  ['ships', '["SSO", "Digiclass", "UPHIC", "Aset"]'],
  ['based_in', `"${profile.location}"`],
]

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function Terminal() {
  const { t } = useLang()
  const [typed, setTyped] = useState(() => (reduced() ? REQUEST.length : 0))
  const [lines, setLines] = useState(() => (reduced() ? RESPONSE.length : 0))

  useEffect(() => {
    if (typed < REQUEST.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), 45)
      return () => clearTimeout(t)
    }
    if (lines < RESPONSE.length) {
      const t = setTimeout(() => setLines((n) => n + 1), lines === 0 ? 420 : 130)
      return () => clearTimeout(t)
    }
  }, [typed, lines])

  const done = lines === RESPONSE.length

  return (
    <div className="term" aria-label={t(ui.termLabel)}>
      <div className="term-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="term-title">~/khairul — zsh</span>
      </div>
      <pre className="term-body" aria-hidden="true">
        <span className="t-prompt">$</span> {REQUEST.slice(0, typed)}
        {typed < REQUEST.length && <span className="caret" />}
        {lines > 0 && (
          <>
            {'\n'}
            <span className="t-meta">HTTP/1.1 </span>
            <span className="t-ok">200 OK</span>
            <span className="t-meta"> · 12ms</span>
            {'\n'}
            {'{'}
            {RESPONSE.slice(0, lines).map(([k, v], i) => (
              <span key={k}>
                {'\n  '}
                <span className="t-key">"{k}"</span>: <span className="t-val">{v}</span>
                {i < RESPONSE.length - 1 ? ',' : ''}
              </span>
            ))}
            {done && '\n}'}
            {done && (
              <>
                {'\n'}
                <span className="t-prompt">$</span> <span className="caret" />
              </>
            )}
          </>
        )}
      </pre>
      {/* versi teks untuk pembaca layar */}
      <p className="sr-only">
        {t(ui.termSr, { name: profile.name, role: profile.role, location: profile.location })}
      </p>
    </div>
  )
}
