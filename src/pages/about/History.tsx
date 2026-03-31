import { Link } from 'react-router-dom'

export default function History() {
  const milestones = [
    {
      year: '2020',
      title: 'The Seed of an Idea',
      icon: '💡',
      desc: 'After years of working as a physician in Kilifi County and witnessing the chronic shortage of trained health workers, Dr. Albert Mwenda begins conversations with community leaders, educators, and county health officials about the possibility of a dedicated medical training institution on Kenya\'s Coast.' ,
    },
    {
      year: '2022',
      title: 'Feasibility & Community Consultation',
      icon: '📋',
      desc: 'A 12-month feasibility study — covering population health needs, funding modelling, land acquisition, and stakeholder engagement — is commissioned. Overwhelmingly, coastal communities affirm the urgent need: Kilifi County has one of Kenya\'s lowest doctor-to-population ratios at 1:8,400.',
    },
    {
      year: '2023',
      title: 'Regulatory Engagement Begins',
      icon: '🏛️',
      desc: 'Formal engagement with the Kenya Medical Practitioners & Dentists Council (KMPDC), Commission for University Education (CUE), and Kenya National Qualifications Authority (KNQA). A rigorous self-study and institutional readiness report is submitted for provisional licensing review.',
    },
    {
      year: '2023',
      title: 'Land Secured in Gongoni',
      icon: '🌿',
      desc: 'A 12-acre parcel of land in Gongoni, just north of Malindi town, is acquired through a public-private partnership with Kilifi County Government. Site surveys, environmental impact assessments, and architectural planning begin — a coastal campus designed to harmonise with Malindi\'s natural beauty.',
    },
    {
      year: '2024',
      title: 'KMPDC Provisional Accreditation',
      icon: '✅',
      desc: 'Blue West receives provisional accreditation from the Kenya Medical Practitioners & Dentists Council — a landmark achievement. The Commission for University Education grants Letter of Interim Authority to offer health sciences programmes. Construction of Blocks A and B commences.',
    },
    {
      year: '2024',
      title: 'Coast General Hospital Partnership',
      icon: '🏥',
      desc: 'A Memorandum of Understanding is signed with Coast General Teaching & Referral Hospital in Mombasa — Blue West\'s primary clinical training partner. Additionally, letters of support are received from Kilifi County Hospital, Malindi Sub-County Hospital, and Aga Khan Hospital Mombasa.',
    },
    {
      year: '2024',
      title: 'Inaugural Scholarship Fund',
      icon: '🎓',
      desc: 'The Blue West Access Fund is established, seeded with KSh 15M from founding donors and diaspora supporters. The fund\'s goal: ensure no student from coastal fishing, farming, or nomadic communities is excluded from medical training purely due to financial hardship.',
    },
    {
      year: '2025',
      title: 'Campus Construction Completed',
      icon: '🏗️',
      desc: 'Phase 1 construction completes on schedule: two academic blocks, a 250-seat anatomy and simulation suite, a digital resource centre, student residences for 300 students, and the Makena Medical Library — named after the founding patron\'s late mother, a nurse who served Kilifi for 40 years.',
    },
    {
      year: '2025',
      title: 'Faculty Recruited',
      icon: '👨‍🏫',
      desc: 'An internationally competitive recruitment process brings 62 academic staff to Blue West — specialists, lecturers, and clinical tutors drawn from Kenyan universities, NHS in the UK, and East African teaching hospitals. The Faculty Senate holds its inaugural meeting in October 2025.',
    },
    {
      year: '2026',
      title: 'Doors Open — Blue West Is Born',
      icon: '🎉',
      desc: 'Blue West Medical Training College officially opens its doors in March 2026. The inaugural cohort of 450 students from 24 Kenyan counties and 3 East African nations begin orientation week. The Governor of Kilifi County, the Cabinet Secretary for Health, and the KMPDC Registrar officiate the opening ceremony.',
    },
    {
      year: '2026',
      title: 'Simulation Centre Inaugurated',
      icon: '🔬',
      desc: 'Block A\'s state-of-the-art Simulation & Clinical Skills Centre is inaugurated — the most advanced simulation facility on the Kenyan Coast. Features high-fidelity patient simulators, a mock emergency department, operating theatre simulation suite, and a birthing simulation lab.',
    },
    {
      year: '2026',
      title: 'Research Goes Live',
      icon: '📄',
      desc: 'Blue West\'s research programme launches with eight peer-reviewed submissions in the first six months — spanning malaria epidemiology, AI-assisted diagnostics, maternal mortality, and One Health research. The college is formally registered with NACOSTI as a research institution.',
    },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&fit=crop" alt="Blue West campus morning light" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/about/mission">About</Link><span>›</span><span>History & Milestones</span></div>
          <h1 className="page-title">Our Story & <em>Milestones</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>
            From a physician's dream in Kilifi County to Kenya's newest health sciences institution — the story of Blue West Medical Training College, Malindi.
          </p>
        </div>
      </div>

      {/* Stats band */}
      <div style={{ background: 'linear-gradient(135deg, var(--navy-light), var(--cobalt))', borderBottom: '1px solid var(--border)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="hist-stats-resp">
            {[
              { num: '2026', label: 'Year Founded' },
              { num: '450+', label: 'Inaugural Students' },
              { num: '62', label: 'Academic Staff' },
              { num: '4', label: 'Hospital Partners' },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '1.5rem', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:700px){.hist-stats-resp{grid-template-columns:1fr 1fr!important;}}`}</style>
      </div>

      {/* Timeline */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">2020 — 2026</div>
            <h2 className="section-title">A Timeline of <em>Purpose & Progress</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Six years from vision to reality. From a physician's notebook to a fully operational medical college on the shores of Kenya's Indian Ocean Coast.
            </p>
          </div>

          <div style={{ position: 'relative', maxWidth: '860px', margin: '4rem auto 0' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '88px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--gold), var(--blue) 70%, transparent)', zIndex: 0 }} className="timeline-line-hide" />

            {milestones.map((m, i) => (
              <div key={`${m.year}-${m.title}`} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: '2.5rem', marginBottom: '2.5rem', alignItems: 'start', position: 'relative', zIndex: 1 }}>
                {/* Year column */}
                <div style={{ textAlign: 'right', paddingRight: '2rem', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 300, color: i >= milestones.length - 3 ? 'var(--gold)' : 'rgba(201,168,76,0.55)', lineHeight: 1, whiteSpace: 'nowrap' }}>{m.year}</div>
                  {/* Dot */}
                  <div style={{ position: 'absolute', right: '-6px', top: '5px', width: '12px', height: '12px', background: i >= milestones.length - 3 ? 'var(--gold)' : 'var(--blue)', borderRadius: '50%', border: '2px solid var(--navy)', boxShadow: i >= milestones.length - 3 ? 'var(--shadow-gold)' : 'none' }} />
                </div>

                {/* Content card */}
                <div style={{ background: i % 2 === 0 ? 'var(--navy-mid)' : 'var(--section-bg)', border: `1px solid ${i >= milestones.length - 3 ? 'rgba(201,168,76,0.3)' : 'var(--border-blue)'}`, padding: '1.5rem 1.75rem', transition: 'border-color 0.3s, transform 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = i >= milestones.length - 3 ? 'rgba(201,168,76,0.3)' : 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{m.icon}</span>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: i >= milestones.length - 3 ? 'var(--gold)' : 'var(--sky)' }}>{m.title}</div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){.timeline-line-hide{display:none!important;} .timeline-line-hide+div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Founder's Story */}
      <section className="section section-mid-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="founders-resp">
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80&fit=crop" alt="Dr. Albert Mwenda, Founder" style={{ width: '100%', height: '460px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', background: 'var(--gold)', color: 'var(--navy)', padding: '1.25rem 1.5rem', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontStyle: 'italic', maxWidth: '200px', lineHeight: 1.5 }}>
                "Heal with your hands.<br />Lead with your heart."
                <div style={{ fontSize: '0.6rem', fontStyle: 'normal', marginTop: '0.5rem', letterSpacing: '0.06em' }}>— Dr. Albert Mwenda, Founder</div>
              </div>
            </div>
            <div>
              <div className="tag">The Founding Story</div>
              <h2 className="section-title">A Vision Born <em>From Necessity</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Dr. Albert Mwenda spent over a decade as a general physician in Kilifi County, serving communities from Malindi to Watamu, Gongoni to Mambrui. He watched mothers die in childbirth for want of a skilled attendant. He watched fishermen lose limbs to untreated injuries. He watched children succumb to malaria because the nearest clinic was half a day's walk away — and understaffed when you got there.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Kenya's Coast region — despite its tourism wealth — has long been medically underserved. Kilifi County's doctor-to-population ratio is among the lowest in the country. Young people with the talent and passion to serve in healthcare have had to leave home entirely to train in Nairobi or Eldoret, and many never came back.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2rem' }}>
                Dr. Mwenda decided that had to change. He gathered community elders, county officials, diaspora supporters, and fellow clinicians around a simple idea: <em style={{ color: 'var(--gold-light)' }}>bring the training to the people who need it most</em>. Blue West Medical Training College is that idea — made real, made permanent, made theirs.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about/leadership" className="btn"><span>Meet Our Leadership</span></Link>
                <Link to="/about/mission" className="btn btn-blue"><span>Our Mission & Vision</span></Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.founders-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>

      {/* Future Milestones */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Looking Ahead</div>
            <h2 className="section-title">The Road <em>Ahead</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>Our milestones don't stop at 2026. These are the goals driving Blue West forward into the next decade.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { year: '2027', icon: '🎓', title: 'First Graduating Class', desc: 'Our diploma and certificate students complete their programmes — the first Blue West graduates take their place in Kenya\'s health workforce, many serving Kilifi and the Coast region.' },
              { year: '2028', icon: '🏗️', title: 'Phase 2 Campus Expansion', desc: 'A KSh 280M Phase 2 build: sports facilities, expanded student residences (capacity 800), a specialist pharmacy research lab, and an outpatient teaching clinic open to the Gongoni community.' },
              { year: '2029', icon: '🌍', title: 'Regional Research Hub', desc: 'Blue West designated as the East Africa Coastal Health Research Centre, attracting WHO, NIH, and Wellcome Trust-funded researchers studying ocean-related diseases, tropical health, and coastal epidemiology.' },
              { year: '2030', icon: '🏆', title: '1,000 Graduates in Service', desc: 'Target: 1,000 Blue West alumni working in Kenya\'s health system — with at least 60% serving in the Coast region\'s public hospitals, clinics, and community health programmes.' },
            ].map(f => (
              <div key={f.year} style={{ border: '1px solid var(--border-blue)', padding: '2rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'rgba(37,99,199,0.12)', lineHeight: 1 }}>{f.year}</div>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>{f.year}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.2 }}>{f.title}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/about/mission" className="btn btn-solid"><span>Our Mission & Vision</span></Link>
            <Link to="/donations" className="btn"><span>Support Our Journey</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
