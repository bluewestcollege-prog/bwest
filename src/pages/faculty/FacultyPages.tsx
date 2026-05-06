import React from 'react'
import { Link } from 'react-router-dom'
import { useFaculty } from '../../lib/hooks'

// Generic wrapper
function PageHeroSimple({ title, subTitle, img, crumbs }: { title: React.ReactNode; subTitle?: string; img: string; crumbs: string[] }) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg">
        <img src={img} alt="" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
      </div>
      <div className="page-hero-content container-wide">
        <div className="breadcrumb"><Link to="/">Home</Link>{crumbs.map((c, i) => <React.Fragment key={i}><span>›</span><span>{c}</span></React.Fragment>)}</div>
        <h1 className="page-title">{title}</h1>
        {subTitle && <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>{subTitle}</p>}
      </div>
    </div>
  )
}

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&q=80&fit=crop&crop=face'

export function FacultyDirectory() {
  const { faculty, loading, error } = useFaculty()

  return (
    <>
      <PageHeroSimple title={<>Faculty <em>Directory</em></>} subTitle="Meet the expert educators, clinicians, and researchers who make Blue West one of Kenya's leading medical training institutions." img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&fit=crop" crumbs={['Faculty & Research', 'Faculty Directory']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Our People</div>
            <h2 className="section-title">{loading ? '…' : `${faculty.length}+`} <em>Dedicated Academics</em></h2>
            <div className="divider divider-center" />
          </div>

          {error && (
            <div style={{ background: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.4)', color: '#fca5a5', padding: '1rem 1.25rem', fontSize: '0.85rem', margin: '2rem 0' }}>
              ⚠ Could not load faculty: {error}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {loading
              ? [...Array(8)].map((_, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '1.75rem 1rem', border: '1px solid var(--border-blue)' }}>
                    <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', margin: '0 auto 1rem' }} />
                    <div style={{ height: '14px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginBottom: '0.5rem' }} />
                    <div style={{ height: '11px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', width: '70%', margin: '0 auto' }} />
                  </div>
                ))
              : faculty.map(f => (
                  <div key={f.id} style={{ textAlign: 'center', padding: '1.75rem 1rem', border: '1px solid var(--border-blue)', transition: 'border-color 0.3s, transform 0.3s', cursor: 'pointer' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
                  >
                    <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1rem', border: '2px solid var(--border-blue)' }}>
                      <img src={f.image_url ?? FALLBACK_IMG} alt={`${f.first_name} ${f.last_name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.25rem' }}>{f.title} {f.first_name} {f.last_name}</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>{f.designation}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>{f.department}</div>
                    {f.email && <a href={`mailto:${f.email}`} style={{ fontSize: '0.65rem', color: 'var(--sky)' }}>✉ {f.email}</a>}
                  </div>
                ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export function ResearchCentres() {
  const centres = [
    {
      icon: '🔬️',
      name: 'Centre for Infectious Disease Research',
      lead: 'Prof. James Kariuki',
      focus: 'HIV/AIDS, Tuberculosis, Malaria, Emerging Pathogens',
      grant: '--',
      pubs: '--',
      desc: 'Our flagship research centre focuses on infectious diseases that disproportionately affect East Africa.'
    },
    {
      icon: '👶',
      name: 'Maternal & Child Health Institute',
      lead: 'Dr. Robert Chesang',
      focus: 'Maternal mortality, Neonatal care, Child nutrition',
      grant: '--',
      pubs: '--',
      desc: 'Dedicated to reducing Kenya\'s maternal and infant mortality rates — particularly in rural areas where rates remain 3 times higher than urban settings. Research informs national obstetric protocols.'
    },
    {
      icon: '🤖',
      name: 'AI & Digital Health Lab',
      lead: 'Dr. Emmanuel Otieno',
      focus: 'Machine learning diagnostics, Digital health, Health informatics',
      grant: '--',
      pubs: '--',
      desc: 'East Africa\'s most active academic AI-in-healthcare lab. Developing AI diagnostic tools for resource-limited settings.'
    },
    {
      icon: '🎗️',
      name: 'Oncology Research Centre',
      lead: 'Prof. Grace Wambui',
      focus: 'Cancer prevention, Palliative care, Cervical cancer',
      grant: '--',
      pubs: '--',
      desc: 'Cancer is Kenya\'s third leading cause of death. Our centre researches cancer prevention, early diagnosis, and affordable treatment options.'
    },
    {
      icon: '🌿',
      name: 'One Health Research Unit',
      lead: 'Prof. Amina Hassan',
      focus: 'Zoonotic diseases, AMR, Environmental health',
      grant: '--',
      pubs: '--',
      desc: 'One of the few dedicated One Health research units in Kenya, studying the intersections between human health, animal health, and environment.'
    },
    {
      icon: '🧠',
      name: 'Mental Health & Psychosocial Research Centre',
      lead: 'Dr. Maria Njoro',
      focus: 'Community mental health, Trauma, Substance abuse',
      grant: '--',
      pubs: '--',
      desc: 'Addressing Kenya\'s silent mental health crisis through community-based research, treatment model development, and advocacy for increased mental health investment in the national health budget.'
    }
  ]

  return (
    <>
      <PageHeroSimple title={<>Research <em>Centres</em></>} subTitle="Six dedicated research centres tackling Kenya's and East Africa's most pressing health challenges with rigour, innovation, and community impact." img="https://images.unsplash.com/photo-1614308457932-e16f87ca15c7?w=1600&q=80&fit=crop" crumbs={['Faculty & Research', 'Research Centres']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {centres.map((c, i) => (
              <div key={c.name} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr', gap: '3rem', background: i % 2 === 0 ? 'var(--navy-mid)' : 'var(--section-bg)', border: '1px solid var(--border-blue)', padding: '2.5rem', alignItems: 'start', transition: 'border-color 0.3s' }} className="rc-resp"
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{c.name}</div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Lead: {c.lead}</div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8 }}>{c.desc}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[['🎯 Focus Areas', c.focus], ['💰 Latest Grant', c.grant], ['📄 Publications', c.pubs]].map(([l, v]) => (
                        <div key={l} style={{ padding: '1rem', border: '1px solid var(--border-blue)', background: 'rgba(0,0,0,0.2)' }}>
                          <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' }}>{l}</div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[['🎯 Focus Areas', c.focus], ['💰 Latest Grant', c.grant], ['📄 Publications', c.pubs]].map(([l, v]) => (
                        <div key={l} style={{ padding: '1rem', border: '1px solid var(--border-blue)', background: 'rgba(0,0,0,0.2)' }}>
                          <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' }}>{l}</div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{c.name}</div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Lead: {c.lead}</div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8 }}>{c.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-solid"><span>Research Collaboration Enquiry</span></Link>
            <Link to="/faculty/directory" className="btn"><span>Meet Our Researchers</span></Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.rc-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  )
}
