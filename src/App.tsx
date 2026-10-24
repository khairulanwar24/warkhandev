import { useEffect, useRef, useState, type CSSProperties, type FC } from 'react'
import SkillIcon, { skillColor } from './components/SkillIcon'
import {
  Arrow,
  Badge,
  Bed,
  Book,
  Box,
  Briefcase,
  Building,
  Calendar,
  Cap,
  Cart,
  Chat,
  Check,
  Clock,
  Code,
  Compass,
  Copy,
  Database,
  Folder,
  Github,
  Globe,
  Grid,
  Heart,
  Layers,
  Leaf,
  Linkedin,
  Mail,
  Moon,
  Pin,
  Send,
  Server,
  Shield,
  Sun,
  Ticket,
  Trophy,
  User,
  Users,
  Wrench,
} from './components/Icons'
import { awards, education, experience, profile, projects, skillLabels, skills, stats } from './data/profile'
import { ui } from './data/ui'
import { useLang } from './i18n'

type IconCmp = FC<{ size?: number }>

type Theme = 'light' | 'dark'

const systemDark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false

/**
 * Tema: tanpa pilihan, halaman mengikuti pengaturan perangkat (CSS prefers-color-scheme).
 * Setelah tombol ditekan, pilihan disimpan dan ditulis ke <html data-theme>.
 */
function useTheme(): [Theme, () => void] {
  const [choice, setChoice] = useState<Theme | null>(() => {
    const attr = document.documentElement.dataset.theme
    if (attr === 'light' || attr === 'dark') return attr
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      /* abaikan */
    }
    return null
  })
  const [sysDark, setSysDark] = useState(systemDark)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    const on = () => setSysDark(mq.matches)
    mq?.addEventListener?.('change', on)
    return () => mq?.removeEventListener?.('change', on)
  }, [])

  useEffect(() => {
    if (!choice) return
    document.documentElement.dataset.theme = choice
    try {
      localStorage.setItem('theme', choice)
    } catch {
      /* abaikan */
    }
  }, [choice])

  const effective: Theme = choice ?? (sysDark ? 'dark' : 'light')
  return [effective, () => setChoice(effective === 'dark' ? 'light' : 'dark')]
}

/** Tandai elemen dengan class "in" saat pertama kali masuk viewport. */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setInView(true)
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView] as const
}

const NAV = [
  ['about', User],
  ['work', Grid],
  ['experience', Briefcase],
  ['contact', Send],
] as const

const STAT_ICONS: Record<string, IconCmp> = { clock: Clock, server: Server, badge: Badge }

const GROUP_ICONS: Record<string, IconCmp> = {
  languages: Code,
  databases: Database,
  frameworks: Layers,
  'tools-devops': Wrench,
  practices: Compass,
}

const PROJECT_ICONS: Record<string, IconCmp> = {
  cap: Cap,
  shield: Shield,
  book: Book,
  globe: Globe,
  box: Box,
  heart: Heart,
  leaf: Leaf,
  cart: Cart,
  ticket: Ticket,
  bed: Bed,
}

function host(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export default function App() {
  const [theme, toggle] = useTheme()
  const { lang, toggle: toggleLang, t } = useLang()
  const [copied, setCopied] = useState(false)
  const [menu, setMenu] = useState(false)
  const [skillsRef, skillsIn] = useInView<HTMLDivElement>()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard ditolak: pilih teks email supaya bisa disalin manual
      const el = document.querySelector('.email')
      if (el) {
        const r = document.createRange()
        r.selectNodeContents(el)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(r)
      }
    }
  }

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const [introBefore, introAfter] = t(profile.intro).split('{org}')

  return (
    <>
      <a className="skip" href="#main">
        {t(ui.skip)}
      </a>

      {/* ---------- navigasi ---------- */}
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="brand" aria-label={`${profile.name}, ${t(ui.backToTop)}`}>
            <span className="avatar sm">{profile.initials}</span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <nav className={`nav-links ${menu ? 'open' : ''}`} aria-label={t(ui.mainNav)}>
            {NAV.map(([id, Icon]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                <Icon size={15} /> {t(ui.nav[id])}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="lang-btn" onClick={toggleLang} aria-label={t(ui.switchLang)} title={t(ui.switchLang)}>
              <Globe size={16} />
              <span className={lang === 'en' ? 'on' : ''}>EN</span>
              <span className={lang === 'id' ? 'on' : ''}>ID</span>
            </button>
            <button className="icon-btn" onClick={toggle} aria-label={t(theme === 'dark' ? ui.toLight : ui.toDark)}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <a className="btn btn-sm" href={`mailto:${profile.email}`}>
              <Mail size={15} /> {t(ui.getInTouch)}
            </a>
            <button className="icon-btn menu-btn" aria-expanded={menu} aria-label={t(ui.menu)} onClick={() => setMenu((m) => !m)}>
              <span className="burger" />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* ---------- hero ---------- */}
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                {profile.role} · {profile.roleAlt}
              </p>
              <h1>{profile.name}</h1>
              <p className="lede">{t(profile.tagline)}</p>
              <p className="sub">
                {introBefore}
                {introAfter !== undefined && (
                  <>
                    <strong>{profile.org}</strong>
                    {introAfter}
                  </>
                )}
              </p>
              <div className="cta">
                <a className="btn" href="#work">
                  {t(ui.seeWork)} <Arrow size={16} />
                </a>
                <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
                <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
            <aside className="hero-card">
              <div className="hc-head">
                <span className="avatar lg">{profile.initials}</span>
                <div>
                  <p className="hc-name">{profile.name}</p>
                  <p className="hc-role">{profile.role}</p>
                </div>
              </div>
              <ul className="hc-rows">
                <li>
                  <Building size={18} /> {profile.org}
                </li>
                <li>
                  <Pin size={18} /> {profile.location}
                </li>
                <li>
                  <Mail size={18} />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
              </ul>
              <p className="hc-label">{t(ui.focusAreas)}</p>
              <ul className="chips">
                {profile.focus.map((f) => (
                  <li key={f.en}>{t(f)}</li>
                ))}
              </ul>
              <p className="hc-status">
                <span className="status-dot" /> {t(ui.available)}
              </p>
            </aside>
          </div>

          <div className="wrap">
            <dl className="stats">
              {stats.map((s) => {
                const Icon = STAT_ICONS[s.icon]
                return (
                  <div key={s.icon}>
                    <span className="stat-ico">
                      <Icon size={18} />
                    </span>
                    <dt>
                      {s.value}
                      {t(s.unit) && <small>{t(s.unit)}</small>}
                    </dt>
                    <dd>{t(s.label)}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </section>

        {/* ---------- tentang + skill ---------- */}
        <section className="section" id="about">
          <div className="wrap two-col">
            <div className="reveal">
              <p className="kicker">
                <User size={14} /> {t(ui.aboutKicker)}
              </p>
              <h2>{t(ui.aboutTitle)}</h2>
            </div>
            <div className="reveal prose">
              {profile.summary.map((p, i) => (
                <p key={i}>{t(p)}</p>
              ))}
              <p className="muted">{t(profile.interests)}</p>
            </div>
          </div>

          <div className="wrap">
            <div ref={skillsRef} className={`skills ${skillsIn ? 'in' : ''}`}>
              <div className="skills-head">
                <p className="kicker">
                  <Wrench size={14} /> {t(ui.toolkit)}
                </p>
                <span className="skills-total">{t(ui.skillsTotal, { n: skills.reduce((n, g) => n + g.items.length, 0) })}</span>
              </div>
              <div className="sk-grid">
                {skills.map((g, gi) => {
                  const Icon = GROUP_ICONS[g.key]
                  return (
                    <div className={`sk-card sk-${g.key}`} key={g.key} style={{ '--g': gi } as CSSProperties}>
                      <div className="sk-card-head">
                        <span className="sk-group-ico">
                          <Icon size={15} />
                        </span>
                        <h3>{t(g.group)}</h3>
                        <span className="sk-count">{g.items.length}</span>
                      </div>
                      <ul className="sk-chips">
                        {g.items.map((s, i) => (
                          <li key={s} style={{ '--i': i, '--c': skillColor(s) } as CSSProperties}>
                            <span className="sk-tile">
                              <SkillIcon name={s} size={16} />
                            </span>
                            {skillLabels[s] ? t(skillLabels[s]) : s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- proyek ---------- */}
        <section className="section alt" id="work">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">
                <Grid size={14} /> {t(ui.workKicker)}
              </p>
              <h2>{t(ui.workTitle)}</h2>
              <p className="muted">{t(ui.workSub)}</p>
            </div>

            <div className="featured">
              {featured.map((p, i) => {
                const primary = p.url ?? p.urls?.[0].href
                const Icon = PROJECT_ICONS[p.icon]
                return (
                  <article className={`proj reveal ${p.wide ? 'wide' : ''}`} key={p.name} style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                    <div className="proj-body">
                      <div className="proj-top">
                        <span className="proj-ico">
                          <Icon size={20} />
                        </span>
                        <div>
                          <span className="tag">{t(p.kind)}</span>
                          {primary && <span className="url">{host(primary)}</span>}
                        </div>
                      </div>
                      <h3>{p.name}</h3>
                      <p>{t(p.desc)}</p>
                      {p.features && (
                        <ul className="feat">
                          {p.features.map((f) => (
                            <li key={f.en}>
                              <Check size={14} /> {t(f)}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="stack">
                        {p.stack.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                      <div className="proj-foot">
                        {p.arch && (
                          <span className="arch">
                            <Layers size={14} /> {p.arch}
                          </span>
                        )}
                        <div className="proj-links">
                          {p.url && (
                            <a href={p.url} target="_blank" rel="noreferrer">
                              {t(ui.visit)} <Arrow size={14} />
                            </a>
                          )}
                          {p.urls?.map((u) => (
                            <a key={u.href} href={u.href} target="_blank" rel="noreferrer">
                              {t(u.label)} <Arrow size={14} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <h3 className="sub-head reveal">{t(ui.otherBuilds)}</h3>
            <ul className="others reveal">
              {others.map((p) => {
                const Icon = PROJECT_ICONS[p.icon]
                return (
                  <li key={p.name}>
                    <div className="o-main">
                      <b>
                        <span className="o-ico">
                          <Icon size={16} />
                        </span>
                        {p.name}
                      </b>
                      <span className="o-kind">{t(p.kind)}</span>
                    </div>
                    <p>{t(p.desc)}</p>
                    <div className="o-stack">{p.stack.join(' · ')}</div>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer" aria-label={t(ui.visitName, { name: p.name })} className="o-link">
                        <Arrow size={16} />
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="reveal more">
              <a href={profile.links.portfolio} target="_blank" rel="noreferrer">
                <Folder size={16} /> {t(ui.portfolio)}
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github size={16} /> {t(ui.codeOnGithub)}
              </a>
            </p>
          </div>
        </section>

        {/* ---------- pengalaman ---------- */}
        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">
                <Briefcase size={14} /> {t(ui.expKicker)}
              </p>
              <h2>{t(ui.expTitle)}</h2>
            </div>
            <ol className="timeline">
              {experience.map((e) => (
                <li className="reveal" key={e.company + e.period.en}>
                  <div className="t-when">
                    <span className={`t-dot ${e.current ? 'now' : ''}`} />
                    <span className="period">
                      <Calendar size={14} /> {t(e.period)}
                    </span>
                    {e.current && <span className="now-badge">{t(ui.current)}</span>}
                  </div>
                  <div className="t-card">
                    <h3>{e.role}</h3>
                    <p className="t-co">
                      <Building size={15} />
                      <span>
                        {e.companyUrl ? (
                          <a href={e.companyUrl} target="_blank" rel="noreferrer">
                            {e.company}
                          </a>
                        ) : (
                          e.company
                        )}
                        {e.unit && <> · {e.unit}</>}
                      </span>
                    </p>
                    <p className="t-type">
                      <Briefcase size={13} /> {t(e.type)}
                    </p>
                    <p className="t-intro">{t(e.intro)}</p>
                    <ul>
                      {e.points.map((p) => (
                        <li key={p.en}>{t(p)}</li>
                      ))}
                    </ul>
                    {e.tags && (
                      <div className="stack">
                        {e.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="edu-grid">
              <div className="edu reveal">
                <p className="kicker">
                  <Cap size={14} /> {t(ui.education)}
                </p>
                <h3>{education.school}</h3>
                <p>
                  {t(education.degree)} · {t(education.period)}
                </p>
                <p className="muted with-ico">
                  <Pin size={14} /> {education.place}
                </p>
                <p className="muted small with-ico">
                  <Users size={14} /> {t(ui.orgs)}: {education.orgs.join(', ')}
                </p>
              </div>
              {awards.map((a) => (
                <div className="edu award reveal" key={a.title.en}>
                  <p className="kicker">
                    <Trophy size={14} /> {t(ui.award)}
                  </p>
                  <h3>{t(a.title)}</h3>
                  <p>{a.detail}</p>
                  <p className="muted">{t(a.project)}</p>
                  <p className="muted small">{a.stack.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- kontak ---------- */}
        <section className="contact" id="contact">
          <div className="wrap reveal">
            <p className="kicker">
              <Send size={14} /> {t(ui.contactKicker)}
            </p>
            <h2>
              {t(ui.contactTitle)} <em>{t(ui.contactEm)}</em>
            </h2>
            <p className="lede">{t(ui.contactLede)}</p>
            <div className="email-row">
              <a className="email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button className="icon-btn copy" onClick={copyEmail} aria-label={t(ui.copyEmail)}>
                {copied ? <Check /> : <Copy />}
              </button>
              <span className="copied" role="status">
                {copied ? t(ui.copied) : ''}
              </span>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail /> Email
              </a>
              <a href={profile.links.whatsapp} target="_blank" rel="noreferrer">
                <Chat /> WhatsApp
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="muted foot-meta">
            <span>
              <Pin size={14} /> {profile.location}
            </span>
          </span>
        </div>
      </footer>
    </>
  )
}
