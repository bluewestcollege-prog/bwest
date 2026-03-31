import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'About',
    children: [
      { label: 'Mission & Vision', to: '/about/mission' },
      { label: 'History & Milestones', to: '/about/history' },
      { label: 'Leadership', to: '/about/leadership' },
      { label: 'Campus & Facilities', to: '/about/campus' },
      { label: 'Accreditations', to: '/about/accreditations' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Undergraduate', to: '/academics/undergraduate' },
      { label: 'Postgraduate', to: '/academics/postgraduate' },
      { label: 'PhD & Doctoral', to: '/academics/phd' },
      { label: 'Diplomas & Certificates', to: '/academics/diplomas' },
      { label: 'Course Catalog', to: '/academics/catalog' },
      { label: 'Academic Calendar', to: '/academics/calendar' },
      { label: 'Research', to: '/academics/research' },
      { label: '✦ New Courses', to: '/academics/new-courses' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'How to Apply', to: '/admissions/how-to-apply' },
      { label: 'Undergraduate Entry', to: '/admissions/undergraduate' },
      { label: 'Postgraduate Entry', to: '/admissions/postgraduate' },
      { label: 'International Students', to: '/admissions/international' },
      { label: 'Fees & Financial Aid', to: '/admissions/fees' },
      { label: 'Scholarships', to: '/admissions/scholarships' },
    ],
  },
  {
    label: 'Student Life',
    children: [
      { label: 'Housing', to: '/student-life/housing' },
      { label: 'Health & Wellness', to: '/student-life/health' },
      { label: 'Clubs & Societies', to: '/student-life/clubs' },
      { label: 'Sports & Recreation', to: '/student-life/sports' },
      { label: 'Dining', to: '/student-life/dining' },
      { label: 'Career Centre', to: '/student-life/careers' },
    ],
  },
  {
    label: 'Faculty & Research',
    children: [
      { label: 'Faculty Directory', to: '/faculty/directory' },
      { label: 'Research Centres', to: '/faculty/research' },
      { label: 'Publications', to: '/faculty/publications' },
      { label: 'Ethics Board', to: '/faculty/ethics' },
    ],
  },
  {
    label: 'Alumni',
    children: [
      { label: 'Alumni Network', to: '/alumni/network' },
      { label: 'Mentorship Programme', to: '/alumni/mentorship' },
      { label: 'Events & Reunions', to: '/alumni/events' },
      { label: 'Alumni Magazine', to: '/alumni/magazine' },
    ],
  },
]

function Dropdown({ items, visible }: { items: { label: string; to: string }[]; visible: boolean }) {
  return (
    <div style={{
      position: 'absolute',
      top: 'calc(100% + 1rem)',
      left: 0,
      minWidth: '220px',
      background: 'var(--navy-mid)',
      border: '1px solid var(--border)',
      borderTop: '2px solid var(--gold)',
      padding: '0.75rem 0',
      opacity: visible ? 1 : 0,
      visibility: visible ? 'visible' : 'hidden',
      transform: visible ? 'translateY(0)' : 'translateY(-8px)',
      transition: 'all 0.25s ease',
      zIndex: 200,
      boxShadow: 'var(--shadow)',
    }}>
      {items.map(item => (
        <Link key={item.to} to={item.to} style={{
          display: 'block',
          padding: '0.55rem 1.25rem',
          fontSize: '0.72rem',
          color: 'var(--muted)',
          letterSpacing: '0.04em',
          transition: 'all 0.2s',
          borderLeft: '2px solid transparent',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.color = 'var(--gold)'
          ;(e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.05)'
          ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--gold)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
          ;(e.currentTarget as HTMLElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'
        }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileExpanded(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Alert Bar */}
      <div style={{
        background: 'linear-gradient(90deg,#7f1d1d,#991b1b)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '0.5rem 0',
        textAlign: 'center',
        fontSize: '0.72rem',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
      }}>
        <span style={{ background: 'rgba(255,255,255,0.15)', padding: '0.15rem 0.6rem', borderRadius: '2px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.65rem' }}>⚠ Notice</span>
        <span>Applications for 2026/2027 intake are now open. Deadline: 30 June 2026 — <Link to="/admissions/how-to-apply" style={{ color: '#fca5a5', textDecoration: 'underline' }}>Apply Now</Link></span>
      </div>

      {/* Top Bar */}
      <div style={{ background: 'var(--section-alt)', borderBottom: '1px solid var(--border)', padding: '0.45rem 0', fontSize: '0.7rem', letterSpacing: '0.06em', color: 'var(--muted)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <span>📍 Malindi, Gongoni — Kilifi County, Kenya</span>
            <span>📞 +254 41 253 0100</span>
            <a href="mailto:info@bluewest.ac.ke" style={{ transition: 'color 0.2s' }}>✉ info@bluewest.ac.ke</a>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#" style={{ transition: 'color 0.2s' }}>Staff Portal</a>
            <a href="#" style={{ transition: 'color 0.2s' }}>LMS</a>
            <Link to="/student-life/library" style={{ transition: 'color 0.2s' }}>Library</Link>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {['f','in','tw','yt'].map(s => (
                <a key={s} href="#" style={{ width: '24px', height: '24px', border: '1px solid var(--border-blue)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', transition: 'all 0.2s' }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header / Nav */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,22,40,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', maxWidth: '1400px', margin: '0 auto', gap: '2rem' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            <div style={{ width: '50px', height: '50px', border: '1.5px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, var(--navy-light) 0%, var(--navy) 100%)', flexShrink: 0, position: 'relative' }}>
              <span style={{ fontSize: '1.6rem', color: 'var(--gold)', fontWeight: 200, lineHeight: 1 }}>+</span>
              <div style={{ position: 'absolute', width: '38px', height: '38px', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%' }} />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 500, letterSpacing: '0.05em', color: 'var(--white)', whiteSpace: 'nowrap' }}>Blue West Medical Training College</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', whiteSpace: 'nowrap' }}>Excellence in Medical Education · Est. 2026</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 0 }} className="desktop-nav">
            {navItems.map(item => (
              <div
                key={item.label}
                style={{ position: 'relative', padding: '0.5rem 0.9rem', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: activeDropdown === item.label ? 'var(--white)' : 'var(--muted)', transition: 'color 0.2s', cursor: 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.label}
                <ChevronDown size={10} />
                <Dropdown items={item.children} visible={activeDropdown === item.label} />
              </div>
            ))}
            <Link to="/contact" style={{ marginLeft: '0.5rem', padding: '0.5rem 0.9rem', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', transition: 'color 0.2s', whiteSpace: 'nowrap' }}>Contact</Link>
            <Link to="/donations" style={{ marginLeft: '0.25rem', padding: '0.5rem 0.9rem', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', transition: 'color 0.2s', whiteSpace: 'nowrap' }}>Give ❤</Link>
            <Link to="/admissions/how-to-apply" style={{ marginLeft: '0.5rem', padding: '0.6rem 1.5rem', background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--gold)', transition: 'all 0.3s', whiteSpace: 'nowrap' }}>Apply Now</Link>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: '1px solid var(--border-blue)', color: 'var(--text)', padding: '0.5rem', cursor: 'pointer', borderRadius: 'var(--radius)' }} className="mobile-menu-btn">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', maxHeight: '80vh', overflowY: 'auto', paddingBottom: '2rem' }}>
            {navItems.map(item => (
              <div key={item.label}>
                <div
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)', cursor: 'pointer', borderBottom: '1px solid var(--border-blue)' }}
                >
                  {item.label}
                  <ChevronDown size={14} style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
                {mobileExpanded === item.label && (
                  <div style={{ background: 'var(--navy)', paddingLeft: '1rem' }}>
                    {item.children.map(child => (
                      <Link key={child.to} to={child.to} style={{ display: 'block', padding: '0.75rem 2rem', fontSize: '0.78rem', color: 'var(--muted)', borderBottom: '1px solid rgba(37,99,199,0.1)', transition: 'color 0.2s' }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/contact" style={{ padding: '0.75rem 1rem', textAlign: 'center', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border-blue)', color: 'var(--text)' }}>Contact</Link>
              <Link to="/donations" style={{ padding: '0.75rem 1rem', textAlign: 'center', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--gold)', color: 'var(--gold)' }}>Give / Donate ❤</Link>
              <Link to="/admissions/how-to-apply" style={{ padding: '0.75rem 1rem', textAlign: 'center', background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Apply Now</Link>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border)', padding: '5rem 0 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
            {/* Brand col */}
            <div>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', border: '1.5px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, var(--navy-light), var(--navy))' }}>
                  <span style={{ fontSize: '1.4rem', color: 'var(--gold)', fontWeight: 200 }}>+</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: 'var(--white)' }}>Blue West Medical<br />Training College</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>Est. 2026 · Malindi, Kenya</div>
                </div>
              </Link>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '260px' }}>Shaping compassionate, competent healthcare professionals serving Kenya's Coast region and the wider East African community.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                {['Kenya Medical Practitioners Board Accredited', 'KNQA Recognised Institution', 'ISO 9001:2015 Certified', 'Commission for University Education Approved'].map(b => (
                  <div key={b} style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)', padding: '0.6rem 0.8rem', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--gold)' }}>✓</span>{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Academics */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Academics</div>
              <div>
                {[['Undergraduate Programmes', '/academics/undergraduate'], ['Postgraduate Programmes', '/academics/postgraduate'], ['PhD & Doctoral', '/academics/phd'], ['Diplomas & Certificates', '/academics/diplomas'], ['Course Catalog', '/academics/catalog'], ['Academic Calendar', '/academics/calendar'], ['Research Centres', '/faculty/research'], ['New Courses', '/academics/new-courses']].map(([l, t]) => (
                  <Link key={t} to={t} style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.3rem 0', transition: 'color 0.2s' }}>{l}</Link>
                ))}
              </div>
            </div>

            {/* Admissions */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Admissions</div>
              <div>
                {[['How to Apply', '/admissions/how-to-apply'], ['Entry Requirements', '/admissions/undergraduate'], ['International Students', '/admissions/international'], ['Fees & Scholarships', '/admissions/fees'], ['Financial Aid', '/admissions/fees'], ['Download Prospectus', '/admissions/how-to-apply']].map(([l, t]) => (
                  <Link key={l} to={t} style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.3rem 0', transition: 'color 0.2s' }}>{l}</Link>
                ))}
              </div>
            </div>

            {/* Student Life */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Student Life</div>
              <div>
                {[['Student Portal', '#'], ['Housing & Residences', '/student-life/housing'], ['Health & Wellness', '/student-life/health'], ['Clubs & Societies', '/student-life/clubs'], ['Career Centre', '/student-life/careers'], ['Library', '/student-life/library'], ['Dining & Meal Plans', '/student-life/dining']].map(([l, t]) => (
                  <Link key={l} to={t} style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.3rem 0', transition: 'color 0.2s' }}>{l}</Link>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>About & Info</div>
              <div>
                {[['About Blue West', '/about/mission'], ['Leadership', '/about/leadership'], ['Campus & Facilities', '/about/campus'], ['News & Events', '/contact'], ['Alumni Network', '/alumni/network'], ['Give & Support', '/donations'], ['Contact Us', '/contact']].map(([l, t]) => (
                  <Link key={l} to={t} style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.3rem 0', transition: 'color 0.2s' }}>{l}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.68rem', color: 'var(--muted)' }}>
            <span>© 2026 Blue West Medical Training College. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Use', 'Accessibility', 'Sitemap'].map(l => (
                <a key={l} href="#" style={{ transition: 'color 0.2s' }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        footer > div > div:first-child {
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
