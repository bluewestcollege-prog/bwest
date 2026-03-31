import React from 'react'
import { Link } from 'react-router-dom'

function PageHero({ title, subtitle, img, breadcrumb }: { title: React.ReactNode; subtitle?: string; img: string; breadcrumb: { label: string; to?: string }[] }) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg">
        <img src={img} alt="" />
      </div>
      <div className="page-hero-content container-wide">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumb.map((b, i) => (
            <React.Fragment key={i}><span>›</span>{b.to ? <Link to={b.to}>{b.label}</Link> : <span>{b.label}</span>}</React.Fragment>
          ))}
        </div>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>{subtitle}</p>}
      </div>
    </div>
  )
}

export default function MissionVision() {
  return (
    <>
      <PageHero
        title={<>Our Mission <em>& Vision</em></>}
        subtitle="Guided by purpose, driven by compassion — the founding principles of Blue West Medical Training College"
        img="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&q=80&fit=crop"
        breadcrumb={[{ label: 'About', to: '/about/mission' }, { label: 'Mission & Vision' }]}
      />

      {/* Mission & Vision */}
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="mv-grid">
            <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '4px solid var(--gold)', padding: '3rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎯</div>
              <div className="tag">Our Mission</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1.5rem', lineHeight: 1.2 }}>To Transform Healthcare Through <em>Education</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>Blue West Medical Training College exists to provide world-class, accessible health sciences education that empowers individuals — particularly those from coastal and underserved communities of Kenya — to become skilled, compassionate, and ethically grounded healthcare professionals.</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.9 }}>We believe that geography and economic circumstance should never be barriers to medical education. Through scholarships, distance-learning initiatives, and community outreach, we actively work to democratise access to quality healthcare training across Kenya's Coast region and beyond.</p>
            </div>
            <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '4px solid var(--sky)', padding: '3rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🔭</div>
              <div className="tag">Our Vision</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Africa's Most <em>Impactful</em> Medical Institution</h2>
              <div className="divider" style={{ background: 'linear-gradient(90deg, var(--sky), transparent)' }} />
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>To be recognised as the most impactful medical training college in Africa — measured not by rankings alone, but by the lives transformed, the communities healed, and the healthcare systems strengthened by our graduates.</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.9 }}>We envision a Kenya where every person, regardless of their location or economic background, has access to high-quality healthcare delivered by well-trained, locally-educated professionals who understand their communities' needs.</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.mv-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Core Values */}
      <section className="section section-mid-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Core Values</div>
            <h2 className="section-title">What We <em>Stand For</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Seven guiding principles that govern every decision, every curriculum, and every interaction at Blue West.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { icon: '💙', val: 'Compassion', desc: 'We train healers who see the full humanity in every patient — never just a diagnosis or a case number. Empathy is the foundation of excellent clinical care.' },
              { icon: '🏆', val: 'Excellence', desc: 'We hold ourselves to the highest academic and clinical standards, producing graduates who are well-prepared for the complex realities of modern healthcare.' },
              { icon: '🤝', val: 'Integrity', desc: 'Everything we do is guided by honesty, transparency, and ethical responsibility — in research, in teaching, and in patient care.' },
              { icon: '🌍', val: 'Inclusion', desc: 'We actively recruit and support students from rural areas, minority communities, and underserved populations, recognising that healthcare needs a diverse workforce.' },
              { icon: '🔬', val: 'Innovation', desc: 'We embrace cutting-edge research, new pedagogical methods, and emerging technologies to keep our programmes at the frontier of health sciences education.' },
              { icon: '🌿', val: 'Community', desc: 'Our college is deeply embedded in the community. We train students not just for careers, but for service to the people of Kenya and East Africa.' },
              { icon: '⚖️', val: 'Accountability', desc: 'We are accountable to our students, our patients, our donors, and the communities we serve — measuring success by impact, not just metrics.' },
            ].map(v => (
              <div key={v.val} style={{ border: '1px solid var(--border-blue)', padding: '2rem', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.75rem' }}>{v.val}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start' }} className="strat-resp">
            <div>
              <div className="tag">Strategic Plan 2025–2030</div>
              <h2 className="section-title">Our Five-Year <em>Roadmap</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>Blue West's 2025–2030 strategic plan charts an ambitious course for institutional growth, expanded community impact, and academic innovation — positioning us as a leader in African health sciences education.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about/history" className="btn"><span>Our History</span></Link>
                <Link to="/donations" className="btn btn-blue"><span>Support Our Mission</span></Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { num: '01', title: 'Expand Rural Access', desc: 'Launch satellite campuses in Kisumu, Garissa, and Lodwar to bring medical training closer to underserved populations. Target: 500 new rural students enrolled by 2027.' },
                { num: '02', title: 'Research Excellence', desc: 'Triple our research output with a focus on tropical diseases, maternal health, mental health, and community medicine. Establish the Kenya Centre for Rural Health Research.' },
                { num: '03', title: 'Digital Learning', desc: 'Implement a hybrid learning model allowing students in remote areas to complete foundational coursework online, reducing travel and accommodation costs.' },
                { num: '04', title: 'Scholarship Fund Growth', desc: 'Grow our scholarship endowment to KSh 200M, fully funding 300+ students per year from rural and underprivileged backgrounds.' },
                { num: '05', title: 'Global Partnerships', desc: 'Establish formal academic partnerships with 5 international medical schools for student exchange, joint research, and faculty development programmes.' },
              ].map(g => (
                <div key={g.num} style={{ display: 'grid', gridTemplateColumns: '50px 1fr', gap: '1.5rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{g.num}</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.35rem' }}>{g.title}</div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.strat-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}
