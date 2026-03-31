import { Link } from 'react-router-dom'

const tickerItems = [
  'Applications for 2026/2027 intake now open — Apply by 30 June 2026',
  'Blue West Medical Training College officially launches in Malindi, Kilifi County — 2026',
  'New Health Informatics & Digital Medicine programme launching September 2026',
  'Simulation Centre inaugurated in Block A — state-of-the-art clinical training for Coast region',
  'Annual Medical Open Day — Gongoni Campus, 15 May 2026',
  'Blue West partners with Coast General Teaching & Referral Hospital for student placements',
]

const quickLinks = [
  { icon: '📋', label: 'Apply Now', to: '/admissions/how-to-apply' },
  { icon: '📚', label: 'Course Catalog', to: '/academics/catalog' },
  { icon: '🎓', label: 'Student Portal', to: '#' },
  { icon: '📅', label: 'Academic Calendar', to: '/academics/calendar' },
  { icon: '🏥', label: 'Clinical Training', to: '/academics/undergraduate' },
  { icon: '💰', label: 'Financial Aid', to: '/admissions/fees' },
  { icon: '🔬', label: 'Research', to: '/faculty/research' },
  { icon: '❤️', label: 'Donate', to: '/donations' },
]

const programs = [
  { num: '01', icon: '🩺', name: 'Bachelor of Medicine & Surgery', type: 'Undergraduate · MBChB', desc: 'A rigorous six-year programme combining foundational sciences, clinical rotations, and community health placements in Kenya\'s leading hospitals. Accredited by the Kenya Medical Practitioners & Dentists Council.', meta: ['6 Years', 'Full-time', 'Clinical Rotations'], to: '/academics/undergraduate' },
  { num: '02', icon: '💊', name: 'Bachelor of Pharmacy', type: 'Undergraduate · BPharm', desc: 'Comprehensive four-year degree covering pharmacology, clinical pharmacy, pharmaceutical sciences, and community dispensing practice with hospital attachments.', meta: ['4 Years', 'Full-time', 'Industry Placements'], to: '/academics/undergraduate' },
  { num: '03', icon: '🏥', name: 'Bachelor of Nursing Science', type: 'Undergraduate · BNSc', desc: 'Trains compassionate, evidence-based nurses with strong clinical skills across general nursing, midwifery, and community health nursing for Kenya and East Africa.', meta: ['4 Years', 'Full-time', 'Hospital Placements'], to: '/academics/undergraduate' },
  { num: '04', icon: '🔬', name: 'MSc Medical Sciences', type: 'Postgraduate · Master\'s', desc: 'Advanced research-led degree in biomedical sciences, epidemiology, or clinical research methodology, with thesis component and journal publication requirement.', meta: ['2 Years', 'Research', 'Thesis Required'], to: '/academics/postgraduate' },
  { num: '05', icon: '🩻', name: 'Diploma in Radiography', type: 'Diploma · Allied Health', desc: 'Specialist diagnostic and therapeutic radiography training using modern imaging technology and simulation environments — one of the few programmes in Western Kenya.', meta: ['3 Years', 'Full-time', 'Practical Focus'], to: '/academics/diplomas' },
  { num: '06', icon: '🧬', name: 'PhD in Health Sciences', type: 'Doctoral · Research', desc: 'A rigorous doctoral programme for advanced scholars contributing original research to medical knowledge, policy, and practice in the African context.', meta: ['3–5 Years', 'Research', 'Supervision'], to: '/academics/phd' },
]

const faculties = [
  { img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=80&fit=crop', name: 'Faculty of Clinical Medicine', desc: 'Home to our flagship MBChB programme and specialist clinical training streams. Partners with Moi Teaching & Referral Hospital and 10+ affiliated teaching hospitals.', to: '/academics/undergraduate' },
  { img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80&fit=crop', name: 'School of Nursing & Midwifery', desc: 'Producing highly skilled nursing professionals equipped for both hospital and community health settings across Kenya and East Africa.', to: '/academics/undergraduate' },
  { img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80&fit=crop', name: 'School of Biomedical Sciences', desc: 'Cutting-edge research and teaching in anatomy, physiology, biochemistry, microbiology, and pathological sciences.', to: '/academics/postgraduate' },
  { img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=700&q=80&fit=crop', name: 'School of Pharmacy & Pharmacology', desc: 'Internationally recognised pharmaceutical sciences programme with strong industry links and impactful research output.', to: '/academics/undergraduate' },
  { img: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=700&q=80&fit=crop', name: 'School of Public & Community Health', desc: 'Epidemiology, health policy, environmental health and community medicine — tackling population-level health challenges in rural Kenya.', to: '/academics/postgraduate' },
  { img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&q=80&fit=crop', name: 'School of Allied Health Sciences', desc: 'Radiography, physiotherapy, occupational therapy, speech-language pathology, and medical laboratory sciences.', to: '/academics/diplomas' },
]

const stats = [
  { num: '450', unit: '+', label: 'Enrolled Students' },
  { num: '60', unit: '+', label: 'Academic Staff' },
  { num: '2026', unit: '', label: 'Year Founded' },
  { num: '97', unit: '%', label: 'Course Completion Rate' },
]

const alumni = [
  { quote: 'My training at Blue West gave me the clinical confidence to work in challenging environments across East Africa. The standard is simply world-class.', name: 'Dr. Wanjiku Muthoni', cohort: 'MBChB 2016 · WHO Regional Advisor, Nairobi', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&q=80&fit=crop&crop=face' },
  { quote: 'The research culture at Blue West is unmatched. I published my first paper in my second year — something I never imagined possible as a first-generation university student.', name: 'Dr. Odhiambo Kipchoge', cohort: 'MSc Biomedical 2019 · Kenyatta University Researcher', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop&crop=face' },
  { quote: 'Graduating as a nurse from Blue West opened doors I didn\'t know existed. I now lead a primary care programme for 30,000 patients in rural Turkana County.', name: 'Nurse Amina Otieno', cohort: 'BNSc 2018 · Primary Health Programme Lead, Turkana', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&q=80&fit=crop&crop=face' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--section-alt)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1800&q=80&fit=crop" alt="Medical students in clinical setting" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, padding: '6rem 2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            Kenya's Coast Region Premier Medical Training Institution
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h1 className="fade-in" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6.5vw, 6rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--white)', maxWidth: '700px', marginBottom: '1.5rem' }}>
            Shaping the<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)', display: 'block' }}>Next Generation</em>of Healers
          </h1>
          <p className="fade-in fade-in-d1" style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.75)', maxWidth: '460px', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            Blue West Medical Training College — Kenya's Coast region's first dedicated health sciences institution — offers world-class medical education right at home in Malindi, Gongoni, Kilifi County.
          </p>
          <div className="fade-in fade-in-d2" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/academics/catalog" className="btn btn-solid"><span>Explore Programmes</span></Link>
            <Link to="/about/campus" className="btn"><span>Virtual Campus Tour</span></Link>
          </div>
        </div>
        {/* Stats (hidden on mobile) */}
        <div className="hero-stats-panel">
          {stats.slice(0, 3).map(s => (
            <div key={s.label} style={{ background: 'rgba(10,22,40,0.75)', backdropFilter: 'blur(10px)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', padding: '1rem 1.5rem', minWidth: '160px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{s.num}<span style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>{s.unit}</span></div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'scrollPulse 2s ease infinite' }} />
          <span>Scroll</span>
        </div>
        <style>{`.hero-stats-panel { position: absolute; right: 4rem; bottom: 4rem; display: flex; flex-direction: column; gap: 0.5rem; z-index: 2; } @media(max-width:900px){.hero-stats-panel{display:none;}}`}</style>
      </section>

      {/* News Ticker */}
      <div style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '0.7rem 0', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ flexShrink: 0, background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 1rem', marginRight: '2rem', zIndex: 2, whiteSpace: 'nowrap' }}>Latest</div>
        <div style={{ display: 'flex', gap: '3rem', animation: 'ticker 35s linear infinite', whiteSpace: 'nowrap' }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '0.5rem', marginRight: '0.3rem' }}>◆</span>{item}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
            {quickLinks.map(ql => (
              <Link key={ql.label} to={ql.to} style={{ background: 'var(--navy-mid)', padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', textAlign: 'center', transition: 'background 0.25s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.07)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--navy-mid)'}
              >
                <div style={{ width: '44px', height: '44px', border: '1px solid var(--border-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: 'var(--sky)', transition: 'all 0.25s' }}>{ql.icon}</div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--muted)' }}>{ql.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid-home">
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80&fit=crop" alt="Medical college campus" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80&fit=crop" alt="Medical laboratory" style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', width: '240px', height: '200px', objectFit: 'cover', border: '4px solid var(--navy)' }} />
              <div style={{ position: 'absolute', top: '2rem', left: '-1.5rem', background: 'var(--gold)', color: 'var(--navy)', padding: '1.5rem 1.25rem', textAlign: 'center', boxShadow: 'var(--shadow-gold)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 500, lineHeight: 1 }}>Est.</div>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>2026<br />Founded</div>
              </div>
            </div>
            <div>
              <div className="tag">About Us</div>
              <h2 className="section-title">A Legacy of <em>Medical Excellence</em></h2>
              <div className="divider" />
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>Founded in 2026, Blue West Medical Training College is Kenya Coast region's first dedicated health sciences institution. Located in Malindi, Gongoni — Kilifi County — our campus is being built with cutting-edge simulation centres, research laboratories, and a strategic partnership with Coast General Teaching & Referral Hospital in Mombasa, bringing world-class medical training to the Coast.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>We nurture compassionate, competent, and ethically grounded healthcare professionals — doctors, nurses, pharmacists, and allied health workers — who serve communities across Kenya's Coast region and East Africa. Our founding mission: to make quality medical education accessible to all, including those from coastal and rural communities who have long been underserved.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { t: 'KMPDC Accredited', s: 'Recognised by the Kenya Medical Practitioners & Dentists Council.' },
                  { t: 'World-Class Facilities', s: 'State-of-the-art simulation labs, digital libraries, and anatomy suites.' },
                  { t: 'Hospital Partnership', s: 'Affiliated with Coast General Teaching & Referral Hospital, Mombasa.' },
                  { t: 'Coastal Community Focus', s: 'Dedicated outreach reaching coastal and rural Kilifi County communities.' },
                ].map(f => (
                  <div key={f.t} style={{ borderLeft: '2px solid var(--border-blue)', padding: '0.75rem 1rem', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--border-blue)'}
                  >
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.25rem' }}>{f.t}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.6 }}>{f.s}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about/history" className="btn"><span>Our History</span></Link>
                <Link to="/about/leadership" className="btn btn-blue"><span>Leadership Team</span></Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.about-grid-home{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>

      {/* Stats Band */}
      <div style={{ background: 'linear-gradient(135deg, var(--navy-light), var(--cobalt))', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="stats-band-resp">
            {stats.map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '1.5rem', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{s.num}<span style={{ fontSize: '1.5rem', color: 'var(--gold)' }}>{s.unit}</span></div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:700px){.stats-band-resp{grid-template-columns:1fr 1fr!important;}}`}</style>
      </div>

      {/* Programmes */}
      <section className="section section-mid-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="tag">Academic Programmes</div>
            <h2 className="section-title">What Would You<br /><em>Like to Study?</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>From undergraduate degrees to specialist postgraduate qualifications — a comprehensive suite of health sciences programmes designed for Kenya's modern healthcare landscape.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5px', background: 'var(--border-blue)', border: '1px solid var(--border-blue)' }}>
            {programs.map(p => (
              <Link key={p.num} to={p.to} style={{ background: 'var(--section-bg)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', transition: 'background 0.3s', display: 'block', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--navy-mid)'; (e.currentTarget.querySelector('.prog-bar') as HTMLElement).style.transform = 'scaleX(1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--section-bg)'; (e.currentTarget.querySelector('.prog-bar') as HTMLElement).style.transform = 'scaleX(0)' }}
              >
                <div className="prog-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), var(--blue))', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s ease' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 300, color: 'rgba(37,99,199,0.15)', lineHeight: 1, position: 'absolute', top: '1rem', right: '1.5rem' }}>{p.num}</div>
                <div style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{p.name}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{p.type}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.68rem', color: 'var(--muted)', flexWrap: 'wrap' }}>
                  {p.meta.map(m => <span key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span style={{ display: 'inline-block', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%' }} />{m}</span>)}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/academics/catalog" className="btn"><span>View All Programmes & Course Catalog</span></Link>
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Faculties & Schools</div>
            <h2 className="section-title">Our Academic <em>Schools</em></h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="faculties-resp">
            {faculties.map(f => (
              <Link key={f.name} to={f.to} style={{ border: '1px solid var(--border-blue)', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s', display: 'block' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <img src={f.img} alt={f.name} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{f.name}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{f.desc}</p>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Explore School →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.faculties-resp{grid-template-columns:1fr 1fr!important;}} @media(max-width:600px){.faculties-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Donations CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d1e38, #122040)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="tag">Our Mission</div>
          <h2 className="section-title">Educating Rural Kenya <em>One Student at a Time</em></h2>
          <div className="divider divider-center" />
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.85 }}>Thousands of talented young Kenyans in rural areas are unable to access quality medical education due to financial hardship. Your donation funds scholarships, provides equipment, and builds the healthcare workforce our communities desperately need.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/donations" className="btn btn-solid"><span>Make a Donation</span></Link>
            <Link to="/about/mission" className="btn"><span>Our Mission & Impact</span></Link>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80&fit=crop" alt="Alumni graduation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,18,35,0.88)', zIndex: 1 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-centered">
            <div className="tag">Alumni</div>
            <h2 className="section-title">12,000 Healers. <em>One Family.</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Our graduates lead hospitals, head research institutions, and serve communities across 30+ countries. Becoming part of Blue West means joining a lifelong network of excellence.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }} className="alumni-resp">
            {alumni.map(a => (
              <div key={a.name} style={{ background: 'rgba(10,22,40,0.6)', backdropFilter: 'blur(10px)', border: '1px solid var(--border)', padding: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 0, verticalAlign: '-0.5rem', marginRight: '0.25rem' }}>&#x201C;</span>{a.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={a.img} alt={a.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--white)' }}>{a.name}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.06em' }}>{a.cohort}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/alumni/network" className="btn"><span>Join the Alumni Network</span></Link>
            <Link to="/donations" className="btn btn-blue"><span>Support Blue West</span></Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.alumni-resp{grid-template-columns:1fr 1fr!important;}} @media(max-width:600px){.alumni-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Contact CTA */}
      <section className="section section-mid-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="tag">Get Started</div>
          <h2 className="section-title">Ready to Begin Your <em>Medical Journey?</em></h2>
          <div className="divider divider-center" />
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.85 }}>Whether you're a prospective student, parent, or healthcare partner — our team is ready to answer your questions and guide you forward.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply Now</span></Link>
            <Link to="/contact" className="btn"><span>Contact Admissions</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
