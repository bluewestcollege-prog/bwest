import { Link } from 'react-router-dom'

export default function Campus() {
  const facilities = [
    { icon: '🏥', name: 'Waweru Simulation & Skills Centre', desc: 'Our KSh 300M flagship facility houses 14 fully equipped simulation suites including high-fidelity mannequins for trauma care, obstetrics, surgery, and paediatrics. Students log over 2,000 simulation hours before their first clinical rotation.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80&fit=crop' },
    { icon: '🔬', name: 'Research Laboratories', desc: 'Six purpose-built research labs supporting work in molecular biology, microbiology, biochemistry, pharmacology, and immunology. Equipped with PCR machines, flow cytometers, mass spectrometers, and biosafety level 3 containment.', img: 'https://images.unsplash.com/photo-1614308457932-e16f87ca15c7?w=700&q=80&fit=crop' },
    { icon: '📚', name: 'Makena Medical Library', desc: 'Housing 85,000+ volumes, 300+ journal subscriptions, and full digital access to PubMed, Cochrane, MEDLINE, and 10 specialist databases. Includes 50 private study pods, 8 group study rooms, and a 24/7 digital reading room.', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=700&q=80&fit=crop' },
    { icon: '🩻', name: 'Diagnostic Imaging Suite', desc: 'Fully equipped with digital X-ray, CT scan, MRI simulator, ultrasound units, and mammography equipment. Students train in radiography interpretation under specialist radiologists.', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80&fit=crop' },
    { icon: '🧬', name: 'Anatomy & Pathology Suite', desc: 'A world-class anatomy facility with 24 dissection stations, virtual anatomy tables (Anatomage), plastinated specimens, and a pathology museum housing over 2,000 specimens for histology training.', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&q=80&fit=crop' },
    { icon: '💻', name: 'Digital Learning Centres', desc: 'Three computer labs with 240 high-spec workstations running medical software suites including Visible Body, SimMan, and Doctrina. High-speed fibre internet across all campus buildings.', img: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80&fit=crop' },
    { icon: '🏃', name: 'Sports & Recreation Complex', desc: 'Olympic-size swimming pool, fully equipped gym, basketball courts, football pitch, tennis courts, and a dedicated student wellness garden. Home to 12 competitive sports clubs.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80&fit=crop' },
    { icon: '🏠', name: 'Student Residences', desc: 'Three modern residence halls accommodating 800+ students, with ensuite rooms, catering, security personnel, high-speed Wi-Fi, and 24/7 health monitoring — designed to support the demanding academic schedule.', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700&q=80&fit=crop' },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/about/mission">About</Link><span>›</span><span>Campus & Facilities</span></div>
          <h1 className="page-title">Our <em>Campus</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Located in Eldoret, the sporting capital of Kenya — a vibrant, modern campus built for the healthcare professionals of tomorrow.</p>
        </div>
      </div>

      {/* Campus Overview */}
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', marginBottom: '5rem' }} className="campus-intro-resp">
            <div>
              <div className="tag">Campus Overview</div>
              <h2 className="section-title">Built for <em>Excellence</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>Our 40-acre campus in Eldoret is a purpose-built medical educational environment — combining world-class facilities with the warmth and energy of a close-knit learning community. Situated 15 minutes from Moi Teaching & Referral Hospital, students have unparalleled access to clinical training.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>The campus has been developed over three decades with a sustained focus on expanding clinical training capacity, research infrastructure, and student wellbeing — all while maintaining the affordability that makes Blue West accessible to students from all of Kenya's 47 counties.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[['40', 'Acres of Campus'], ['8', 'Faculty Buildings'], ['2', 'Teaching Hospitals'], ['800+', 'Residential Capacity']].map(([n, l]) => (
                  <div key={l} style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.25rem' }}>{l}</div>
                  </div>
                ))}
              </div>
              <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Plan a Campus Visit</span></Link>
            </div>
            <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80&fit=crop" alt="Campus" style={{ width: '100%', height: '460px', objectFit: 'cover' }} />
          </div>

          {/* Facilities Grid */}
          <div className="section-header-centered">
            <div className="tag">World-Class Facilities</div>
            <h2 className="section-title">Where Learning <em>Comes to Life</em></h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {facilities.map(f => (
              <div key={f.name} style={{ border: '1px solid var(--border-blue)', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <img src={f.img} alt={f.name} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.75rem' }}>{f.name}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.75 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.campus-intro-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>

      {/* Location */}
      <section className="section section-mid-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="loc-resp">
            <div>
              <div className="tag">Location</div>
              <h2 className="section-title">Eldoret, <em>Kenya</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>Eldoret is Kenya's fifth-largest city and the capital of Uasin Gishu County. Known as the sporting capital of Kenya and home to world-champion athletes, it's also becoming a powerhouse for healthcare and education in the Rift Valley and Western Kenya regions.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[['📍', 'Campus Address', 'Blue West Way, Off Uganda Road, Eldoret, Uasin Gishu County, Kenya'], ['🚌', 'From Eldoret Town', '15 minutes by matatu or taxi'], ['✈️', 'From Eldoret Airport', '25 minutes by road'], ['🏥', 'Moi Teaching & Referral Hospital', '10 minutes — our primary teaching hospital']].map(([icon, label, val]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', border: '1px solid var(--border-blue)' }}>
                    <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.2rem' }}>{label}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--white)' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn"><span>Get Directions</span></Link>
            </div>
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&fit=crop" alt="Eldoret location" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        </div>
        <style>{`@media(max-width:900px){.loc-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}
