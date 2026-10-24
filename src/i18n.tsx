import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang, Text } from './data/profile'
import { ui } from './data/ui'

/**
 * Bahasa: pilihan tersimpan → bahasa perangkat (id-*) → Inggris.
 * Pilihan disimpan di localStorage dan ditulis ke <html lang>.
 */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'id') return saved
  } catch {
    /* abaikan */
  }
  return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
}

type Ctx = { lang: Lang; toggle: () => void; t: (text: Text, vars?: Record<string, string | number>) => string }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = ui.title[lang]
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* abaikan */
    }
  }, [lang])

  const t: Ctx['t'] = (text, vars) => {
    let s = text[lang]
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v))
    return s
  }

  return <LangContext.Provider value={{ lang, toggle: () => setLang((l) => (l === 'en' ? 'id' : 'en')), t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang harus dipakai di dalam <LangProvider>')
  return ctx
}
