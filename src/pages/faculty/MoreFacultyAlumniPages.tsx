import { Link } from 'react-router-dom'

function PageHero({ title, sub, img, crumbs }: { title: React.ReactNode; sub?: string; img: string; crumbs: string[] }) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg">
        <img src={img} alt="" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(8,18,35,0.93) 40%,rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
      </div>
      <div className="page-hero-content container-wide">
        <div className="breadcrumb"><Link to="/">Home</Link>{crumbs.map((c, i) => <span key={i}><span style={{ margin: '0 0.35rem' }}>›</span>{c}</span>)}</div>
        <h1 className="page-title">{title}</h1>
        {sub && <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>{sub}</p>}
      </div>
    </div>
  )
}

export function Publications() {
  const pubs = [
    { year: 2026, title: 'Malaria Prevalence and Seasonal Variation Along Kenya\'s Coast: A Longitudinal Study in Kilifi County', authors: 'Kariuki J, Hassan A, Otieno E', journal: 'The Lancet Infectious Diseases', doi: '10.1016/S1473-3099(26)00XXX-X', centre: 'Centre for Infectious Disease Research' },
    { year: 2026, title: 'Machine Learning Diagnostics for Tuberculosis Detection in Resource-Limited Coastal Settings', authors: 'Otieno E, Wambui G, Birech S', journal: 'PLOS Medicine', doi: '10.1371/journal.pmed.00XXXXX', centre: 'AI & Digital Health Lab' },
    { year: 2026, title: 'Maternal Mortality in Kenya\'s Coast Province: A 5-Year Retrospective Analysis', authors: 'Chesang R, Njoro M, Achieng\' F', journal: 'BMJ Global Health', doi: '10.1136/bmjgh-2026-XXXXX', centre: 'Maternal & Child Health Institute' },
    { year: 2026, title: 'One Health Approach to Zoonotic Disease Surveillance in Kilifi and Kwale Counties', authors: 'Hassan A, Kariuki J, Rono D', journal: 'EcoHealth', doi: '10.1007/s10393-026-XXXXX', centre: 'One Health Research Unit' },
    { year: 2026, title: 'Cervical Cancer Screening Uptake in Coastal Kenya: Community Barriers and Enablers', authors: 'Wambui G, Kerubo M', journal: 'Journal of Cancer Policy', doi: '10.1016/j.jcpo.2026.XXXXXX', centre: 'Oncology Research Centre' },
    { year: 2026, title: 'Mental Health Burden Among Fishing Communities in Kilifi County: A Cross-Sectional Survey', authors: 'Njoro M, Achieng\' F', journal: 'International Journal of Mental Health Systems', doi: '10.1186/s13033-026-XXXXX', centre: 'Mental Health & Psychosocial Research Centre' },
    { year: 2026, title: 'Drug Resistance Patterns in Plasmodium Falciparum Isolates from the Kenyan Coast', authors: 'Kipkorir J, Kariuki J', journal: 'Antimicrobial Agents and Chemotherapy', doi: '10.1128/AAC.0XXXX-26', centre: 'Centre for Infectious Disease Research' },
    { year: 2026, title: 'Coastal Community Health Worker Effectiveness: A Randomised Controlled Trial in Malindi', authors: 'Rono D, Chesang R, Mutembei P', journal: 'Health Policy and Planning', doi: '10.1093/heapol/czXXXXX', centre: 'Maternal & Child Health Institute' },
  ]

  return (
    <>
      <PageHero title={<>Research <em>Publications</em></>} sub="Peer-reviewed research from Blue West academics driving evidence-based policy and clinical practice across Kenya and East Africa." img="https://images.unsplash.com/photo-1614308457932-e16f87ca15c7?w=1600&q=80&fit=crop" crumbs={['Faculty & Research', 'Publications']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">2026 Publications</div>
            <h2 className="section-title">Research That <em>Shapes Practice</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>As a newly established institution, Blue West has hit the ground running — publishing in leading international journals within our first year of operation.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {pubs.map((p, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? 'var(--navy-mid)' : 'var(--section-bg)', border: '1px solid var(--border-blue)', padding: '2rem', display: 'grid', gridTemplateColumns: '60px 1fr', gap: '1.5rem', alignItems: 'start', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--gold)' }}>{p.year}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.4rem', lineHeight: 1.4 }}>{p.title}</h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.3rem' }}>{p.authors}</div>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--sky)', fontStyle: 'italic' }}>{p.journal}</span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--muted)', background: 'rgba(37,99,199,0.1)', padding: '0.15rem 0.5rem', border: '1px solid var(--border-blue)' }}>{p.centre}</span>
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.4rem' }}>DOI: {p.doi}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/faculty/research" className="btn btn-solid"><span>View Research Centres</span></Link>
            <Link to="/contact" className="btn"><span>Research Collaboration Enquiry</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function EthicsBoard() {
  return (
    <>
      <PageHero title={<>Research <em>Ethics Board</em></>} sub="Ensuring all research at Blue West meets the highest ethical standards for human subjects, animal welfare, and data protection." img="https://images.unsplash.com/photo-1532094349884-543559b8f9b7?w=1600&q=80&fit=crop" crumbs={['Faculty & Research', 'Ethics Board']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'start' }} className="ethics-resp">
            <div>
              <div className="tag">Institutional Review Board</div>
              <h2 className="section-title">Research Ethics at <em>Blue West</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>The Blue West Institutional Review Board (BWIRB) is an independent body constituted in accordance with Kenya's National Commission for Science, Technology and Innovation (NACOSTI) requirements and international standards, including the Declaration of Helsinki and ICH-GCP guidelines.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>All research involving human participants, patient data, biological samples, or sensitive community information conducted at or by Blue West requires BWIRB review and approval before commencement. This applies to undergraduate projects, postgraduate research, and staff-led studies.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { icon: '👥', t: 'Human Subjects Research', d: 'Research involving patients, healthy volunteers, community members, or existing personal health data requires full board review.' },
                  { icon: '🧬', t: 'Biological Samples & Biobanking', d: 'Studies using human tissue, blood, saliva, or other biological materials are reviewed for informed consent, storage, and future use protocols.' },
                  { icon: '🔐', t: 'Data Privacy & KDPA Compliance', d: 'All research handling personal health data must demonstrate compliance with Kenya\'s Data Protection Act 2019 and relevant health data regulations.' },
                  { icon: '🐾', t: 'Animal Research', d: 'Any research using animals, including One Health and pharmaceutical studies, undergoes animal ethical review by the BWIRB\'s Animal Care Committee.' },
                ].map(item => (
                  <div key={item.t} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border-blue)' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.25rem' }}>{item.t}</div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '2rem' }}>
                <div className="tag">Application Process</div>
                {['1. Download BWIRB Protocol Form (Form REC-01)', '2. Complete research protocol with consent forms', '3. Submit via email: ethics@bluewest.ac.ke', '4. Initial screening within 5 working days', '5. Full board review meeting (monthly)', '6. Receive written decision with conditions', '7. Begin research; submit annual progress reports'].map(s => (
                  <div key={s} style={{ fontSize: '0.8rem', color: 'var(--muted)', padding: '0.5rem 0', borderBottom: '1px solid var(--border-blue)', lineHeight: 1.5 }}>{s}</div>
                ))}
              </div>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--sky)', padding: '2rem' }}>
                <div className="tag">Review Timeline</div>
                {[['Expedited Review (low-risk)', '10 working days'], ['Standard Review', '4–6 weeks'], ['Full Board (high-risk)', '6–8 weeks'], ['Amendment Review', '2–3 weeks'], ['Annual Renewal', '3 weeks']].map(([t, d]) => (
                  <div key={t} style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '0.65rem 0', borderBottom: '1px solid var(--border-blue)', gap: '1rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{t}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 500, whiteSpace: 'nowrap' }}>{d}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:ethics@bluewest.ac.ke" className="btn btn-solid" style={{ justifyContent: 'center' }}><span>Submit Ethics Application</span></a>
              <Link to="/contact" className="btn" style={{ justifyContent: 'center' }}><span>Contact Ethics Board Secretary</span></Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.ethics-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}

export function AlumniMentorship() {
  return (
    <>
      <PageHero title={<>Mentorship <em>Programme</em></>} sub="Connecting current students with distinguished alumni who guide, inspire, and open doors to your healthcare career." img="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80&fit=crop" crumbs={['Alumni', 'Mentorship']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="mentor-resp">
            <div>
              <div className="tag">Alumni Mentorship</div>
              <h2 className="section-title">Wisdom Passed <em>Forward</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>The Blue West Mentorship Programme pairs first and second-year students with experienced alumni working across healthcare in Kenya and internationally. The structured, year-long mentorship covers academic support, specialty choice, clinical skills, and career development.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { icon: '🎯', t: 'How Matching Works', d: 'Students complete a preference form indicating specialty interest, career goals, and preferred mentor location. Matching is algorithmic, with a compatibility interview before confirmation.' },
                  { icon: '📅', t: 'Duration & Commitment', d: 'One academic year. Monthly one-on-one sessions (video or in-person), plus two formal reviews. Estimated time: 2 hours/month for both mentor and mentee.' },
                  { icon: '💼', t: 'What Mentors Provide', d: 'Career guidance, department introductions, CV review, interview coaching, clinical rotation recommendations, and networking introductions at their institutions.' },
                  { icon: '📊', t: 'Programme Outcomes', d: 'Mentees see 40% higher internship placement rates, 3× more competitive residency applications, and significantly higher career confidence scores.' },
                ].map(item => (
                  <div key={item.t} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: '2px solid var(--gold)', padding: '0.75rem 1rem', background: 'rgba(201,168,76,0.04)' }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.2rem' }}>{item.t}</div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-solid"><span>Join as Mentor or Mentee</span></Link>
            </div>
            <div>
              <div className="tag">Featured Mentors</div>
              {[
                { name: 'Dr. Wanjiku Muthoni', role: 'WHO Regional Advisor, Nairobi', spec: 'Global Health & Epidemiology', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&fit=crop&crop=face' },
                { name: 'Dr. Peter Ngugi', role: 'Chief Medical Officer, Moi TRH', spec: 'Internal Medicine', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80&fit=crop&crop=face' },
                { name: 'Dr. Grace Aloo', role: 'Head of Pharmacovigilance, KEBS', spec: 'Clinical Pharmacology', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80&fit=crop&crop=face' },
                { name: 'Prof. Samuel Birech', role: 'Professor of Surgery, Harvard', spec: 'Colorectal Surgery', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80&fit=crop&crop=face' },
              ].map(m => (
                <div key={m.name} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem', border: '1px solid var(--border-blue)', marginBottom: '1rem', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
                >
                  <img src={m.img} alt={m.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.2rem' }}>{m.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '0.2rem' }}>{m.role}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.06em' }}>Specialty: {m.spec}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.mentor-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}

export function AlumniEvents() {
  const events = [
    { date: 'May 2027', name: 'Blue West Inaugural Alumni Gala', location: 'Sarova Whitesands Beach Resort, Mombasa', desc: 'An elegant evening celebrating the first graduating class and formally launching the alumni association. Featuring keynote from WHO Kenya, awards, and fundraising auction for student scholarships.', type: 'Flagship Event' },
    { date: 'March 2027', name: 'Coast Region Alumni Networking Evening', location: 'Coral Key Beach Resort, Malindi', desc: 'Informal networking evening for alumni working in Malindi, Kilifi, Kwale, and Mombasa. Guest speaker from Kilifi County Health Department discussing career opportunities in devolved health systems.', type: 'Regional Event' },
    { date: 'June 2027', name: 'Nairobi Chapter Launch', location: 'Radisson Blu Hotel, Nairobi', desc: 'Formal launch of the Blue West Nairobi Alumni Chapter — for graduates working in the capital. Connecting students with a thriving network of healthcare professionals across Nairobi\'s hospitals and policy institutions.', type: 'Regional Event' },
    { date: 'September 2027', name: 'Annual Research Symposium (Alumni Track)', location: 'Blue West Campus, Gongoni', desc: 'Alumni researchers present work alongside current faculty at our annual research symposium. Open to all alumni working in research, academia, or clinical practice with publishable work.', type: 'Academic Event' },
    { date: 'November 2027', name: 'UK/Germany Diaspora Reunion', location: 'London & Nairobi (Hybrid)', desc: 'Annual gathering for Blue West alumni living and working abroad. Featuring career sessions on international licensing, return-to-Kenya pathways, and remote mentorship programme.', type: 'International Event' },
  ]
  const typeColor: Record<string, string> = { 'Flagship Event': '#c9a84c', 'Regional Event': '#2563c7', 'Academic Event': '#7c3aed', 'International Event': '#059669' }

  return (
    <>
      <PageHero title={<>Alumni Events & <em>Reunions</em></>} sub="Reconnect, celebrate, and grow — Blue West alumni events bring our global community together across Kenya and beyond." img="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80&fit=crop" crumbs={['Alumni', 'Events & Reunions']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">Alumni Calendar 2027</div>
            <h2 className="section-title">Meet Your <em>Blue West Family</em></h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {events.map(e => (
              <div key={e.name} style={{ background: 'var(--navy-mid)', border: '1px solid var(--border-blue)', display: 'grid', gridTemplateColumns: '100px 1fr', overflow: 'hidden', transition: 'border-color 0.3s' }} className="ev-resp"
                onMouseEnter={el => (el.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={el => (el.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                <div style={{ background: `${typeColor[e.type]}22`, borderRight: `3px solid ${typeColor[e.type]}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 0.5rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 400, color: typeColor[e.type], lineHeight: 1.3 }}>{e.date}</div>
                </div>
                <div style={{ padding: '1.5rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.2 }}>{e.name}</div>
                    <span style={{ fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: typeColor[e.type], background: `${typeColor[e.type]}22`, padding: '0.2rem 0.6rem', whiteSpace: 'nowrap', border: `1px solid ${typeColor[e.type]}44` }}>{e.type}</span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--sky)', marginBottom: '0.75rem' }}>📍 {e.location}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-solid"><span>RSVP or Register for Events</span></Link>
            <Link to="/alumni/network" className="btn"><span>Join the Alumni Network</span></Link>
          </div>
        </div>
        <style>{`@media(max-width:700px){.ev-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  )
}

export function AlumniMagazine() {
  const issues = [
    { issue: 'Vol 1 No 1', period: 'Inaugural Issue — March 2027', cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80&fit=crop', headline: 'Blue West\'s First Graduates: Where Are They Now?', stories: ['Exclusive interview with Dr. Wanjiku Muthoni, now at WHO', 'Campus construction update: Phase 2 begins', 'Research spotlight: AI diagnostics in Kilifi clinics', 'Alumni directory: Connect with your cohort'] },
    { issue: 'Vol 1 No 2', period: 'Mid-Year Edition — July 2027', cover: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80&fit=crop', headline: 'Coastal Healthcare Heroes: Alumni on the Frontline', stories: ['Graduate spotlight: Nursing Kenya\'s fishing communities', 'Research: Malaria in coastal Kenya — breakthroughs', 'Career opportunities: Ministry of Health bursary placements', 'Scholarship appeal: Help us fund 50 more students'] },
  ]
  return (
    <>
      <PageHero title={<>Alumni <em>Magazine</em></>} sub="Stories of impact, innovation, and inspiration from the Blue West community. Published quarterly." img="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80&fit=crop" crumbs={['Alumni', 'Magazine']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">The Blue West Alumni Journal</div>
            <h2 className="section-title">Our Stories. <em>Our Community.</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>A quarterly publication for and by the Blue West community — graduate profiles, research news, career opportunities, and updates from our campus and alumni chapters worldwide.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: '2.5rem' }}>
            {issues.map(iss => (
              <div key={iss.issue} style={{ border: '1px solid var(--border-blue)', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <img src={iss.cover} alt={iss.headline} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>{iss.issue}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '1rem' }}>{iss.period}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.3 }}>{iss.headline}</h3>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>In This Issue</div>
                  {iss.stories.map(s => (
                    <div key={s} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.4rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>◆</span>{s}
                    </div>
                  ))}
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link to="/contact" className="btn" style={{ fontSize: '0.7rem', padding: '0.6rem 1.25rem' }}><span>Request a Copy</span></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-solid"><span>Submit a Story or Profile</span></Link>
            <Link to="/alumni/network" className="btn"><span>Rejoin the Alumni Network</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
