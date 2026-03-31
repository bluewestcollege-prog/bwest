import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCourses, levelLabel, levelRoute, formatFeeKsh } from '../../lib/hooks'
import type { CourseLevel } from '../../lib/hooks'

const LEVELS = ['All', 'undergraduate', 'postgraduate', 'phd', 'diploma'] as const
const levelColors: Record<string, string> = {
  undergraduate: '#2563c7', postgraduate: '#c9a84c', phd: '#7c3aed', diploma: '#059669',
}

function LoadingRows() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <tr key={i} style={{ borderBottom: '1px solid var(--border-blue)' }}>
          {[...Array(6)].map((_, j) => (
            <td key={j} style={{ padding: '0.9rem 1rem' }}>
              <div style={{ height: '14px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', width: j === 2 ? '180px' : '80px' }} />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default function Catalog() {
  const [filter, setFilter] = useState<string>('All')
  const [search, setSearch] = useState('')
  const { courses, loading, error } = useCourses(
    filter !== 'All' ? { level: filter as CourseLevel } : undefined
  )

  const filtered = courses.filter(c =>
    search === '' ||
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.department.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1521521241765-43aec32da3ad?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(8,18,35,0.93) 40%,rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Academics</span><span>›</span><span>Course Catalog</span></div>
          <h1 className="page-title">Course <em>Catalog</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>
            Browse all programmes offered at Blue West Medical Training College — from one-year certificates to doctoral research tracks.
          </p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          {/* Search & Filter */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search programmes…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ flex: 1, minWidth: '200px', background: 'var(--navy-mid)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1.25rem', outline: 'none' }}
            />
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {LEVELS.map(l => (
                <button key={l} onClick={() => setFilter(l)}
                  style={{ padding: '0.55rem 1.1rem', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: `1px solid ${filter === l ? 'var(--gold)' : 'var(--border-blue)'}`, background: filter === l ? 'var(--gold)' : 'transparent', color: filter === l ? 'var(--navy)' : 'var(--muted)', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'all 0.2s' }}>
                  {l === 'All' ? 'All' : levelLabel(l as CourseLevel)}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div style={{ background: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.4)', color: '#fca5a5', padding: '1rem 1.25rem', fontSize: '0.85rem', marginBottom: '2rem' }}>
              ⚠ Could not load courses: {error}
            </div>
          )}

          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
            {loading ? 'Loading programmes…' : `Showing ${filtered.length} programme${filtered.length !== 1 ? 's' : ''}`}
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Level', 'Department', 'Programme', 'Duration', 'Annual Fee (Local)', ''].map(h => (
                  <th key={h} style={{ padding: '0.75rem 1rem', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'left', fontWeight: 400 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? <LoadingRows /> : filtered.map(c => (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--border-blue)', transition: 'background 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.04)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                >
                  <td style={{ padding: '0.9rem 1rem' }}>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.2rem 0.6rem', background: `${levelColors[c.level] || '#555'}22`, color: levelColors[c.level] || 'var(--muted)', border: `1px solid ${levelColors[c.level] || '#555'}55`, whiteSpace: 'nowrap' }}>
                      {levelLabel(c.level)}
                    </span>
                  </td>
                  <td style={{ padding: '0.9rem 1rem', fontSize: '0.72rem', color: 'var(--muted)', maxWidth: '160px' }}>{c.department}</td>
                  <td style={{ padding: '0.9rem 1rem', fontSize: '0.85rem', color: 'var(--text)', fontWeight: 400 }}>{c.title}{c.is_new && <span style={{ marginLeft: '0.5rem', fontSize: '0.55rem', background: 'var(--gold)', color: 'var(--navy)', padding: '0.1rem 0.4rem', fontWeight: 600, letterSpacing: '0.08em' }}>NEW</span>}</td>
                  <td style={{ padding: '0.9rem 1rem', fontSize: '0.78rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{c.duration ?? '—'}</td>
                  <td style={{ padding: '0.9rem 1rem', fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 500, whiteSpace: 'nowrap' }}>{formatFeeKsh(c.fee_local)}</td>
                  <td style={{ padding: '0.9rem 1rem' }}>
                    <Link to={levelRoute(c.level)} style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sky)', whiteSpace: 'nowrap' }}>View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!loading && filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--muted)', fontSize: '0.88rem' }}>
              No programmes match your search. <button onClick={() => { setSearch(''); setFilter('All') }} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', textDecoration: 'underline' }}>Reset filters</button>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://bluew-g.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-solid"><span>Apply Now</span></a>
            <Link to="/admissions/fees" className="btn"><span>Fees & Financial Aid</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
