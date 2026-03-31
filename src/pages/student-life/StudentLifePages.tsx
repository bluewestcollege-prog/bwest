import { Link } from 'react-router-dom'
import { useStudentClubs } from '../../lib/hooks'

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

function InfoCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border-blue)', padding: '2rem', transition: 'border-color 0.3s' }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}>
      <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{title}</div>
      {children}
    </div>
  )
}

export function HealthWellness() {
  return (
    <>
      <PageHero title={<>Health & <em>Wellness</em></>} sub="Your wellbeing is our priority — from primary care and counselling to disability services and spiritual support." img="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80&fit=crop" crumbs={['Student Life', 'Health & Wellness']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">Student Wellbeing</div>
            <h2 className="section-title">Whole-Person <em>Healthcare</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>As a medical institution, we hold ourselves to the highest standards of student health support. Our on-campus health centre is staffed by qualified practitioners and open 7 days a week.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
            <InfoCard icon="🏥" title="Student Health Centre">
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>On-campus clinic with registered nurses and a resident medical officer. Handles primary care, medication, lab tests, and emergency referrals. Open 7 days: 07:00–22:00 weekdays, 08:00–18:00 weekends.</p>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)' }}>Free for all enrolled students · Walk-ins welcome</div>
            </InfoCard>
            <InfoCard icon="🧠" title="Counselling & Mental Health">
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>Three registered counsellors available for individual and group therapy. Specialties include academic stress, depression, grief, substance misuse, and trauma. All sessions strictly confidential.</p>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)' }}>6 free sessions/semester · Book via Student Affairs</div>
            </InfoCard>
            <InfoCard icon="♿" title="Disability & Inclusion">
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>Dedicated Disability Support Office providing learning accommodations, assistive technology, accessible campus facilities, and specialised exam arrangements in accordance with Kenya's PWDs Act.</p>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)' }}>Register at admission · All services are free</div>
            </InfoCard>
            <InfoCard icon="🍽️" title="Nutrition & Dietetics Clinic">
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>Students can book free consultations with a registered dietitian for nutrition planning, weight management, sports nutrition, and management of dietary conditions like diabetes and celiac disease.</p>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)' }}>By appointment · Tues & Thurs</div>
            </InfoCard>
            <InfoCard icon="🕌" title="Spiritual & Religious Support">
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>Multi-faith prayer rooms (Muslim, Christian, and non-denominational) on campus. Chaplaincy services available to all students regardless of faith. Interfaith dialogue events each semester.</p>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)' }}>Open 24 hours · Friday Juma prayers on campus</div>
            </InfoCard>
            <InfoCard icon="🚨" title="24-Hour Emergency Line">
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>A dedicated 24/7 crisis line staffed by trained student welfare officers. For mental health emergencies, physical safety concerns, or urgent welfare issues. Connect to support at any hour.</p>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)' }}>Call: 0800 223 300 (toll-free)</div>
            </InfoCard>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-solid"><span>Contact Student Wellness Centre</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function ClubsSocieties() {
  const { clubs, loading, error } = useStudentClubs()

  return (
    <>
      <PageHero title={<>Clubs & <em>Societies</em></>} sub="Over 30 clubs where friendships form, passions are discovered, and future healthcare leaders find their communities." img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&fit=crop" crumbs={['Student Life', 'Clubs & Societies']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">Campus Life</div>
            <h2 className="section-title">Find Your <em>Community</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Blue West clubs range from professional development societies to sports teams, cultural groups, and community service organisations. Any student can start a new club with 15+ members.</p>
          </div>

          {error && (
            <div style={{ background: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.4)', color: '#fca5a5', padding: '1rem 1.25rem', fontSize: '0.85rem', marginBottom: '2rem' }}>
              ⚠ Could not load clubs: {error}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
            {loading
              ? [...Array(6)].map((_, i) => (
                  <div key={i} style={{ border: '1px solid var(--border-blue)', padding: '1.75rem' }}>
                    <div style={{ height: '14px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginBottom: '0.75rem', width: '60%' }} />
                    <div style={{ height: '11px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', marginBottom: '0.5rem' }} />
                    <div style={{ height: '11px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', width: '80%' }} />
                  </div>
                ))
              : clubs.map(c => (
                  <div key={c.id} style={{ border: '1px solid var(--border-blue)', padding: '1.75rem', transition: 'border-color 0.3s, transform 0.3s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '1.8rem' }}>🏥</span>
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(201,168,76,0.1)', padding: '0.2rem 0.6rem' }}>{c.category}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{c.name}</div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{c.description}</p>
                    {c.meeting_schedule && <div style={{ fontSize: '0.65rem', color: 'var(--sky)', marginBottom: '0.4rem' }}>📅 {c.meeting_schedule}</div>}
                    {c.contact_email && <a href={`mailto:${c.contact_email}`} style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>✉ {c.contact_email}</a>}
                  </div>
                ))
            }
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-solid"><span>Contact Student Affairs to Join</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}


export function Sports() {
  const sports = [
    { icon: '🏃', name: 'Athletics', level: 'Competitive', facilities: 'Olympic-standard track, field', desc: 'Malindi is Kenya\'s Coast running hub. Our athletics team trains on our 400m all-weather track and competes in KUSA, national championships, and cross-country. Famous alumni: multiple Coast Provincial champions.' },
    { icon: '⚽', name: 'Football (Soccer)', level: 'Competitive', facilities: 'Full-size astroturf pitch', desc: 'Men\'s and women\'s football teams. Training 4× a week. Compete in the Kenya University Sports Association (KUSA) league and Kilifi County inter-institution cup.' },
    { icon: '🏐', name: 'Volleyball', level: 'Competitive', facilities: '2 indoor courts', desc: 'One of our strongest programmes. Blue West Volleyball has won two KUSA regional titles. Both men\'s and women\'s teams train daily and are open to all students via tryouts in September.' },
    { icon: '🏊', name: 'Swimming', level: 'Competitive', facilities: '25m pool', desc: 'Our coastal location makes swimming both practical and popular. Blue West\'s swimming team has produced national-level athletes. Recreational lanes open daily for all students.' },
    { icon: '🏀', name: 'Basketball', level: 'Recreational / Competitive', facilities: '2 outdoor courts', desc: 'Basketball court open 06:00–22:00 daily. Recreational games every evening. Competitive team competes in KUSA and city leagues.' },
    { icon: '🎾', name: 'Tennis', level: 'Recreational', facilities: '4 hard courts', desc: 'Tennis courts open to all students. Coaching clinics available on weekends for beginners. BW Open Tennis Tournament held each March.' },
    { icon: '🏋️', name: 'Gym & Fitness Centre', level: 'Open Access', facilities: '200+ equipment pieces, 600m²', desc: 'State-of-the-art fitness centre with cardio machines, free weights, functional training zone, and group fitness studio. Open 05:30–22:00 daily. Free for all enrolled students.' },
    { icon: '🌊', name: 'Water Sports (Malindi Beach)', level: 'Recreational', facilities: 'Equipment hire, beach access', desc: 'Unique to Blue West — our coastal location enables kayaking, snorkelling, and beach volleyball at Malindi Marine Park. Monthly student beach days organised by the Sports Council.' },
  ]
  return (
    <>
      <PageHero title={<>Sports & <em>Recreation</em></>} sub="A healthy body fuels a sharp mind. Blue West's sports facilities, coastal location, and competitive teams are unmatched in the region." img="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&fit=crop" crumbs={['Student Life', 'Sports']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">Sports & Fitness</div>
            <h2 className="section-title">The Coastal <em>Advantage</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Our Gongoni campus benefits from Malindi's coastal climate — year-round outdoor training, ocean access, and the inspiring athleticism of Kenya's Coast region.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>
            {sports.map(s => (
              <div key={s.name} style={{ border: '1px solid var(--border-blue)', padding: '2rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.25rem' }}>{s.name}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>{s.level}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sky)', marginBottom: '0.75rem' }}>📍 {s.facilities}</div>
                <p style={{ fontSize: '0.79rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function Dining() {
  return (
    <>
      <PageHero title={<>Dining & <em>Meal Plans</em></>} sub="Nutritious, diverse, and affordable meals — reflecting the rich culinary heritage of Kenya's Coast region." img="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1600&q=80&fit=crop" crumbs={['Student Life', 'Dining']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="dining-resp">
            <div>
              <div className="tag">Campus Dining</div>
              <h2 className="section-title">Fuelling <em>Future Healers</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>Our three dining facilities are managed by our in-house catering team, committed to fresh, nutritious meals that reflect Kilifi County's diverse food culture — coastal Swahili cuisine, upcountry staples, and vegetarian options, all freshly prepared daily.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>We work with local farms in Malindi and Kilifi County to source fresh produce, supporting coastal agriculture and reducing our food miles. Special dietary requirements — halal, vegetarian, vegan, gluten-free — are accommodated in all dining halls.</p>
              {[
                { name: 'The Karibu Hall (Main Dining)', hours: 'Mon–Fri: 07:00–21:00 · Weekends: 08:00–20:00', capacity: '600 seats', note: 'Breakfast, lunch & dinner buffet. Features local Swahili dishes, continental, and international cuisine.' },
                { name: 'The Mnazi Café', hours: 'Mon–Fri: 06:30–18:00', capacity: '120 seats', note: 'Coffee, snacks, light meals, and grab-and-go options. Wi-Fi lounge seating. Ocean-view terrace.' },
                { name: 'The Night Owl (Late-Night Canteen)', hours: 'Daily: 20:00–01:00', capacity: '80 seats', note: 'Hot meals, sandwiches, and drinks for late-studying students and overnight clinical shift workers.' },
              ].map(d => (
                <div key={d.name} style={{ borderLeft: '2px solid var(--gold)', padding: '1rem 1.25rem', marginBottom: '1.25rem', background: 'rgba(201,168,76,0.04)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.3rem' }}>{d.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gold)', marginBottom: '0.3rem' }}>{d.hours} · {d.capacity}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{d.note}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '2rem' }}>
                <div className="tag">Meal Plans 2026/27</div>
                {[
                  { plan: 'Full Board', desc: '21 meals/week (3 meals/day)', price: 'KSh 25,000/month' },
                  { plan: 'Half Board', desc: '14 meals/week (lunch + dinner)', price: 'KSh 17,000/month' },
                  { plan: 'Breakfast Only', desc: '7 meals/week (breakfast daily)', price: 'KSh 6,500/month' },
                  { plan: 'Pay As You Go', desc: 'Top-up dining card, no minimum', price: 'From KSh 200/meal' },
                ].map(m => (
                  <div key={m.plan} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', padding: '0.85rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--white)' }}>{m.plan}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.15rem' }}>{m.desc}</div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.85rem', fontWeight: 500, color: 'var(--gold)', paddingTop: '0.15rem' }}>{m.price}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--sky)', padding: '2rem' }}>
                <div className="tag">Dietary Accommodations</div>
                {['Halal-certified meat in all dining halls', 'Dedicated vegetarian & vegan station', 'Gluten-free options clearly labelled', 'Allergen lists updated weekly', 'Dietitian-approved meals for medical conditions', 'Fasting meal packs during Ramadan'].map(d => (
                  <div key={d} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--muted)', padding: '0.5rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                    <span style={{ color: 'var(--gold)' }}>✓</span>{d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.dining-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}

export function CareerCentre() {
  return (
    <>
      <PageHero title={<>Career <em>Centre</em></>} sub="97% of Blue West graduates are employed or in further study within 6 months of graduation. Here's how we make that happen." img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&fit=crop" crumbs={['Student Life', 'Career Centre']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">Career Development</div>
            <h2 className="section-title">Your Career Starts <em>Here</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>The Blue West Career Centre provides end-to-end support — from first-year CV workshops to final-year employer introductions and specialist job placement.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: '📄', t: 'CV & Cover Letter Workshops', d: 'Monthly workshops on healthcare-specific CV writing, medical personal statements, and cover letters for clinical rotations, internships, and job applications.' },
              { icon: '🎤', t: 'Interview Preparation', d: 'Panel mock interviews with clinical faculty and HR professionals from partner hospitals. Tailored preparation for KMPDC registration interviews, competitive healthcare roles.' },
              { icon: '💼', t: 'Healthcare Job Board', d: 'Exclusive job board with 200+ healthcare vacancies updated weekly from Coast General TRH, Ministry of Health, county hospitals, NGOs and private clinics across Kenya.' },
              { icon: '🤝', t: 'Employer Engagement', d: '15+ annual career fairs, hospital open days, and employer networking events on campus. Direct connections to our clinical placement partners and corporate sponsors.' },
              { icon: '🌍', t: 'International Opportunities', d: 'Support for applications to international licensing bodies (GMC UK, NCLEX USA, HPCSA South Africa). Partnerships with UK NHS and German hospital networks for diaspora students.' },
              { icon: '🎯', t: 'First-Job Guarantee', d: 'Blue West students committed to working in rural or underserved Kenyan communities benefit from a fast-track placement service funded by our NGO and Ministry of Health partnerships.' },
            ].map(s => (
              <div key={s.t} style={{ border: '1px solid var(--border-blue)', padding: '1.75rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{s.t}</div>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1rem' }}>Top Employer Partners</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.8 }}>Blue West graduates are sought by healthcare institutions across Kenya and East Africa. Our employer partners include Coast General TRH, Aga Khan Health Services, Kenya Ministry of Health, MSF Kenya, Médecins Sans Frontières, Kilifi County Government, and 60+ private hospitals.</p>
            <Link to="/contact" className="btn btn-solid"><span>Book a Career Appointment</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function Library() {
  return (
    <>
      <PageHero title={<>Makena Medical <em>Library</em></>} sub="85,000 volumes, 300+ research journals, and 24/7 digital access to the world's leading medical databases." img="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80&fit=crop" crumbs={['Student Life', 'Library']} />
      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="lib-resp">
            <div>
              <div className="tag">Library Services</div>
              <h2 className="section-title">Your Knowledge <em>Gateway</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>The Makena Medical Library — named after Blue West's founding patron — is the academic heart of our campus. It houses one of Kenya's most comprehensive medical literature collections, designed to support rigorous research and evidence-based clinical practice.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>Physical and digital resources are available to all enrolled students, with 24/7 online access for remote study. Our team of nine specialist medical librarians provide personalised research support and systematic review training.</p>
              {[
                { icon: '📚', stat: '85,000+', label: 'Physical Volumes' },
                { icon: '🖥️', stat: '300+', label: 'Online Journals' },
                { icon: '💾', stat: '15', label: 'Database Subscriptions' },
                { icon: '🪑', stat: '400+', label: 'Study Seats' },
                { icon: '🖨️', stat: '40', label: 'Computer Workstations' },
                { icon: '🔬', stat: '9', label: 'Specialist Librarians' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                  <span style={{ fontSize: '1.5rem', width: '36px', flexShrink: 0 }}>{s.icon}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)' }}>{s.stat}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '2rem' }}>
                <div className="tag">Database Access (24/7 Online)</div>
                {['PubMed / MEDLINE', 'HINARI (WHO research access)', 'UpToDate Clinical Decision Support', 'Cochrane Library', 'EBSCO Academic Health', 'ScienceDirect — Medical Sciences', 'Kenya Medical Journals Archive', 'African Journals Online (AJOL)', 'BMJ Best Practice', 'ClinicalKey by Elsevier', 'ProQuest Nursing & Allied Health', 'Scopus Research Analytics (faculty & PG)'].map(db => (
                  <div key={db} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--muted)', padding: '0.45rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                    <span style={{ color: 'var(--gold)' }}>◆</span>{db}
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--sky)', padding: '2rem' }}>
                <div className="tag">Library Hours</div>
                {[['Monday – Friday', '07:00 – 23:00'], ['Saturday', '08:00 – 22:00'], ['Sunday & Public Holidays', '09:00 – 18:00'], ['Online Portal', '24 / 7']].map(([d, h]) => (
                  <div key={d} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0.65rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{d}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 500, textAlign: 'right' }}>{h}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-solid" style={{ justifyContent: 'center' }}><span>Contact the Library</span></Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.lib-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}
