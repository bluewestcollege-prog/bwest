import { Link } from 'react-router-dom'

function PageHeroSimple({ title, sub, img, crumbs }: { title: React.ReactNode; sub?: string; img: string; crumbs: string[] }) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg">
        <img src={img} alt="" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
      </div>
      <div className="page-hero-content container-wide">
        <div className="breadcrumb"><Link to="/">Home</Link>{crumbs.map((c, i) => <><span key={`s${i}`}>›</span><span key={i}>{c}</span></>)}</div>
        <h1 className="page-title">{title}</h1>
        {sub && <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>{sub}</p>}
      </div>
    </div>
  )
}

export function AlumniNetwork() {
  const alumni = [
    { name: 'Dr. Wanjiku Muthoni', class: 'MBChB 2016', role: 'WHO Regional Advisor, Nairobi', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80&fit=crop&crop=face' },
    { name: 'Dr. Odhiambo Kipchoge', class: 'MSc Biomedical 2019', role: 'Researcher, Kenyatta University', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&fit=crop&crop=face' },
    { name: 'Nurse Amina Otieno', class: 'BNSc 2018', role: 'Primary Health Lead, Turkana County', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&q=80&fit=crop&crop=face' },
    { name: 'Dr. Peter Ngugi', class: 'MBChB 2013', role: 'Chief Medical Officer, Moi Teaching Hospital', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&q=80&fit=crop&crop=face' },
    { name: 'Dr. Grace Aloo', class: 'BPharm 2015', role: 'Head of Pharmacovigilance, KEBS', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&q=80&fit=crop&crop=face' },
    { name: 'Dr. James Mutai', class: 'PhD Health Sciences 2020', role: 'Senior Lecturer, University of Nairobi', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&q=80&fit=crop&crop=face' },
    { name: 'Dr. Faith Chebet', class: 'BNSc 2017', role: 'Community Health Director, Iten', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80&fit=crop&crop=face' },
    { name: 'Prof. Samuel Birech', class: 'MBChB 1998', role: 'Professor of Surgery, Harvard Medical', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&q=80&fit=crop&crop=face' },
  ]

  return (
    <>
      <PageHeroSimple title={<>Alumni <em>Network</em></>} sub="12,000 Blue West healers working across 30 countries — all connected by a shared commitment to health excellence and community service." img="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80&fit=crop" crumbs={['Alumni', 'Alumni Network']} />
      <section className="section section-alt-bg">
        <div className="container">
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '5rem' }} className="alumni-stats-resp">
            {[['12,000+', 'Global Alumni'], ['30+', 'Countries Represented'], ['1987', 'First Graduating Class'], ['97%', 'Graduate Employment Rate']].map(([n, l]) => (
              <div key={l} style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.5rem' }}>{l}</div>
              </div>
            ))}
          </div>

          <div className="section-header-centered">
            <div className="tag">Distinguished Alumni</div>
            <h2 className="section-title">Leaders in <em>Healthcare</em></h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {alumni.map(a => (
              <div key={a.name} style={{ textAlign: 'center', padding: '1.5rem 1rem', border: '1px solid var(--border-blue)', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <img src={a.img} alt={a.name} style={{ width: '85px', height: '85px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', border: '2px solid var(--gold)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.2rem' }}>{a.name}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>{a.class}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{a.role}</div>
              </div>
            ))}
          </div>

          {/* Alumni Benefits */}
          <div style={{ marginTop: '5rem' }}>
            <div className="section-header-centered">
              <div className="tag">Alumni Benefits</div>
              <h2 className="section-title">Benefits of the <em>Blue West Network</em></h2>
              <div className="divider divider-center" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: '🤝', title: 'Global Network Access', desc: 'Connect with 12,000+ alumni across 30 countries via our private digital platform, annual reunions, and regional chapter events in Nairobi, Mombasa, UK, and USA.' },
                { icon: '📚', title: 'Continuing Education', desc: 'Alumni receive 30% discounts on all CPD courses, postgraduate programmes, and online professional development offered by Blue West.' },
                { icon: '💼', title: 'Career Support', desc: 'Exclusive job board for Blue West alumni, mentorship pairing with senior graduates, and HR partner connections at Kenya\'s leading health institutions.' },
                { icon: '📰', title: 'Alumni Magazine', desc: 'Receive the quarterly "Blue West Alumni Journal" — featuring graduate profiles, research highlights, institutional news, and career opportunities.' },
                { icon: '🏆', title: 'Alumni Awards', desc: 'Annual recognition of outstanding alumni in clinical excellence, research impact, community service, and entrepreneurship at the Blue West alumni gala.' },
                { icon: '❤️', title: 'Give Back', desc: 'Join the Alumni Giving Circle and invest in the next generation of healers through scholarship donations, mentorship, and career guidance.' },
              ].map(b => (
                <div key={b.title} style={{ border: '1px solid var(--border-blue)', padding: '1.75rem', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{b.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{b.title}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-solid"><span>Join the Alumni Network</span></Link>
            <Link to="/donations" className="btn"><span>Give Back — Donate</span></Link>
          </div>
        </div>
        <style>{`@media(max-width:700px){.alumni-stats-resp{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>
    </>
  )
}

export function StudentLifeHousing() {
  return (
    <>
      <PageHeroSimple title={<>Housing & <em>Residences</em></>} sub="Modern, secure, and purpose-built student residences — making Blue West a true home away from home." img="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1600&q=80&fit=crop" crumbs={['Student Life', 'Housing']} />
      <section className="section section-alt-bg">
        <div className="container">
          {[
            { name: 'Waweru House (Block A)', capacity: 250, type: 'Mixed gender, ensuite rooms', amenities: ['High-speed Wi-Fi', 'Common room with TV', '24/7 security', 'Laundry services', 'Catered dining (optional)', 'Study lounge'], img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700&q=80&fit=crop', fee: 'KSh 35,000/semester' },
            { name: 'Makena Hall (Block B)', capacity: 200, type: 'Female-only, single rooms', amenities: ['Ensuite bathroom', 'Kitchenette', 'Female-only gym', 'Prayer room', 'Study pods', 'CCTV monitoring'], img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&fit=crop', fee: 'KSh 40,000/semester' },
            { name: 'Pioneers\' Lodge (Block C)', capacity: 180, type: 'Male-only, studio rooms', amenities: ['WiFi & power outlets', 'Bicycle storage', 'Common lounge', 'Monthly cleaning', 'Noticeboard & events space', 'Sports equipment locker'], img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80&fit=crop', fee: 'KSh 32,000/semester' },
          ].map((res, i) => (
            <div key={res.name} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: '3rem', marginBottom: '4rem', alignItems: 'start' }} className="housing-resp">
              {i % 2 === 0 ? (
                <>
                  <img src={res.img} alt={res.name} style={{ width: '100%', height: '340px', objectFit: 'cover' }} />
                  <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', padding: '2.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{res.name}</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{res.type} · Capacity: {res.capacity}</div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>{res.fee}</p>
                    {res.amenities.map(am => <div key={am} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.82rem', color: 'var(--muted)', padding: '0.5rem 0', borderBottom: '1px solid rgba(37,99,199,0.1)' }}><span style={{ color: 'var(--gold)' }}>✓</span>{am}</div>)}
                    <div style={{ marginTop: '1.5rem' }}>
                      <Link to="/contact" className="btn"><span>Apply for Accommodation</span></Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', padding: '2.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{res.name}</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{res.type} · Capacity: {res.capacity}</div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>{res.fee}</p>
                    {res.amenities.map(am => <div key={am} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.82rem', color: 'var(--muted)', padding: '0.5rem 0', borderBottom: '1px solid rgba(37,99,199,0.1)' }}><span style={{ color: 'var(--gold)' }}>✓</span>{am}</div>)}
                    <div style={{ marginTop: '1.5rem' }}>
                      <Link to="/contact" className="btn"><span>Apply for Accommodation</span></Link>
                    </div>
                  </div>
                  <img src={res.img} alt={res.name} style={{ width: '100%', height: '340px', objectFit: 'cover' }} />
                </>
              )}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){.housing-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  )
}
