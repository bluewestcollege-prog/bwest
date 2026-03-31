import { Link } from 'react-router-dom'

// Generic page template for sub-pages not built individually
function GenericPage({ title, hero, breadcrumb, children }: { title: React.ReactNode; hero: string; breadcrumb: string[]; children: React.ReactNode }) {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src={hero} alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumb.map((b, i) => <><span>›</span><span key={i}>{b}</span></>)}
          </div>
          <h1 className="page-title">{title}</h1>
        </div>
      </div>
      <section className="section section-alt-bg">
        <div className="container">{children}</div>
      </section>
    </>
  )
}

export function FeesPage() {
  return (
    <GenericPage title={<>Fees & <em>Financial Aid</em></>} hero="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&fit=crop" breadcrumb={['Admissions', 'Fees & Financial Aid']}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="fees-resp">
        <div>
          <div className="tag">2025/2026 Tuition Fees</div>
          <h2 className="section-title">Transparent, <em>Affordable</em> Education</h2>
          <div className="divider" />
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>We believe cost should never be the reason a talented Kenyan cannot access medical education. Our fees are among the most competitive for accredited medical programmes in Kenya, and our financial aid offering is the most comprehensive in the Rift Valley.</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Programme', 'Duration', 'Annual Fee'].map(h => <th key={h} style={{ padding: '0.75rem 0', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'left', fontWeight: 400 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['MBChB', '6 years', 'KSh 280,000'], ['BPharm', '4 years', 'KSh 210,000'], ['BNSc', '4 years', 'KSh 175,000'], ['BMLS', '4 years', 'KSh 190,000'], ['BPhysio', '4 years', 'KSh 185,000'], ['MSc Programmes', '2 years', 'KSh 120,000'], ['Diplomas', '3 years', 'KSh 95,000'], ['PhD', '3–5 years', 'KSh 85,000'], ['Certificate Programmes', '1 year', 'KSh 45,000']].map(([p, d, f]) => (
                <tr key={p}>
                  <td style={{ padding: '0.75rem 0', fontSize: '0.82rem', color: 'var(--text)', borderBottom: '1px solid var(--border-blue)' }}>{p}</td>
                  <td style={{ padding: '0.75rem 0', fontSize: '0.82rem', color: 'var(--muted)', borderBottom: '1px solid var(--border-blue)' }}>{d}</td>
                  <td style={{ padding: '0.75rem 0', fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 500, textAlign: 'right', borderBottom: '1px solid var(--border-blue)' }}>{f}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '2rem' }}>* Fees are inclusive of tuition, registration, and library access. Separate charges apply for accommodation, meals, and clinical placement transport. Subject to annual review.</p>
          <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply Now</span></Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '2rem' }}>
            <div className="tag">Financial Aid</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1.25rem' }}>Support Available</h3>
            {[
              { icon: '🎓', title: 'HELB Loans', desc: 'Higher Education Loans Board funding available to all eligible Kenyan students. Apply at helb.ac.ke alongside your Blue West application.' },
              { icon: '🏡', title: 'Blue West Rural Scholarship', desc: 'Full tuition scholarships for students from rural Kenya with exceptional need and academic potential. 120+ awarded annually.' },
              { icon: '💊', title: 'Ministry of Health Bursary', desc: 'Government bursaries for top-performing students committed to working in public health facilities post-graduation.' },
              { icon: '🤝', title: 'Corporate Bursaries', desc: 'Partnerships with Equity Bank, Safaricom, Kenyatta National Hospital, and 10 other organisations providing 60+ annual bursaries.' },
            ].map(fa => (
              <div key={fa.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{fa.icon}</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.25rem' }}>{fa.title}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{fa.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/admissions/scholarships" className="btn" style={{ justifyContent: 'center' }}><span>View All Scholarship Opportunities</span></Link>
          <Link to="/donations" className="btn btn-blue" style={{ justifyContent: 'center' }}><span>Donate to Our Scholarship Fund</span></Link>
        </div>
      </div>
      <style>{`@media(max-width:900px){.fees-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
    </GenericPage>
  )
}

export function ScholarshipsPage() {
  return (
    <GenericPage title={<>Scholarships & <em>Bursaries</em></>} hero="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&fit=crop" breadcrumb={['Admissions', 'Scholarships']}>
      <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
        <div className="tag">Financial Support</div>
        <h2 className="section-title">Your Dream. <em>Our Investment.</em></h2>
        <div className="divider divider-center" />
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Over KSh 150 million in scholarships and bursaries is awarded annually to Blue West students from all 47 Kenyan counties.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {[
          { icon: '🏡', name: 'Blue West Rural Health Scholarship', value: 'Full Tuition + Stipend', eligibility: 'Students from rural/remote counties demonstrating financial need and academic merit. Priority to Turkana, Mandera, Wajir, Marsabit, West Pokot, Samburu.', deadline: 'February 15 each year', funded: 'Alumni & community donations', num: '120+ scholarships/year' },
          { icon: '🌟', name: 'Founders\' Merit Scholarship', value: '75% Tuition Waiver', eligibility: 'Top 5% of admitted students in each programme. Automatically considered based on application performance and KCSE grades.', deadline: 'Automatic — no separate application', funded: 'Blue West endowment fund', num: '40 scholarships/year' },
          { icon: '👩', name: 'Women in Medicine Bursary', value: '50% Tuition Waiver', eligibility: 'Female students from counties with below-average gender parity in healthcare education — northern and coastal Kenya prioritised.', deadline: 'March 31 each year', funded: 'Corporate partners & NGOs', num: '60 bursaries/year' },
          { icon: '♿', name: 'Disability Inclusion Bursary', value: 'Full Tuition + Accessibility Fund', eligibility: 'Students living with disabilities who demonstrate academic potential and commitment to inclusive healthcare practice.', deadline: 'Ongoing — apply at admission', funded: 'Kenya National Commission on Human Rights', num: '15 bursaries/year' },
          { icon: '🏆', name: 'Athletic Excellence Bursary', value: '30% Tuition Waiver', eligibility: 'Nationally or internationally competitive athletes who maintain academic good standing. Unique to Blue West\'s Eldoret context.', deadline: 'June 1 each year', funded: 'Athletics Kenya & Sports Fund', num: '20 bursaries/year' },
          { icon: '📖', name: 'HELB Student Loan', value: 'Up to KSh 60,000/year', eligibility: 'All Kenyan citizens enrolled full-time at Blue West. Apply directly through the Higher Education Loans Board portal.', deadline: 'Apply during registration', funded: 'Government of Kenya', num: 'Unlimited eligible students' },
        ].map(s => (
          <div key={s.name} style={{ background: 'var(--section-bg)', border: '1px solid var(--border-blue)', padding: '2rem', transition: 'border-color 0.3s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{s.name}</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{s.value} · {s.num}</div>
            <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}><strong style={{ color: 'var(--text)' }}>Eligibility:</strong> {s.eligibility}</p>
            <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}><strong style={{ color: 'var(--text)' }}>Deadline:</strong> {s.deadline}</p>
            <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.25rem' }}><strong style={{ color: 'var(--text)' }}>Funded by:</strong> {s.funded}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply & Request Scholarship</span></Link>
        <Link to="/donations" className="btn"><span>Donate to Scholarship Fund</span></Link>
      </div>
    </GenericPage>
  )
}

export function InternationalPage() {
  return (
    <GenericPage title={<>International <em>Students</em></>} hero="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=80&fit=crop" breadcrumb={['Admissions', 'International Students']}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="intl-resp">
        <div>
          <div className="tag">International Admissions</div>
          <h2 className="section-title">Kenya's Gateway to <em>African Medicine</em></h2>
          <div className="divider" />
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>Blue West Medical Training College welcomes students from across Africa and beyond. Our multicultural environment — with students from 15+ countries — enriches the learning experience and mirrors the collaborative nature of modern healthcare.</p>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>Eldoret is easily accessible from Uganda, Tanzania, South Sudan, Rwanda, and Ethiopia. Our programmes are taught in English and our qualifications are recognised by East African Community health profession bodies.</p>
          {[
            { title: 'East African Students (EAC)', desc: 'Students from Uganda, Tanzania, Rwanda, Burundi, South Sudan, and DRC pay same fees as Kenyan students and require no student visa.' },
            { title: 'Other African Countries', desc: 'Students from all AU member states are eligible for our programmes. African student fees apply. Student pass required from Kenyan Immigration.' },
            { title: 'Diaspora & International', desc: 'Kenyan diaspora and fully international students welcome. International fee structure applies. We provide visa assistance letters and accommodation support.' },
          ].map(g => (
            <div key={g.title} style={{ borderLeft: '2px solid var(--gold)', padding: '0.75rem 1rem', marginBottom: '1rem', background: 'rgba(201,168,76,0.04)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.25rem' }}>{g.title}</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{g.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { icon: '📋', title: 'Application Requirements', items: ['Equivalent of KCSE for undergraduate entry (IGCSE, WAEC, NECO, etc.)', 'Proof of English language proficiency (IELTS 6.0 or equivalent)', 'Translated & certified transcripts (English)', 'Valid passport', 'Student visa or pass from Kenyan Immigration'] },
            { icon: '🏠', title: 'International Student Support', items: ['Airport pick-up service from Eldoret Airport', 'International student orientation week', 'Dedicated International Students\' Office', 'Cross-cultural peer mentorship', 'On-campus accommodation guaranteed (Year 1)', 'Health insurance assistance'] },
            { icon: '🌍', title: 'Countries We Welcome', items: ['All 54 African Union member states', 'UK, USA, Canada — Kenyan diaspora preferred', 'India — exchange programme available', 'China — Confucius Institute partnership', 'Germany — DAAD alumni network referrals'] },
          ].map(s => (
            <div key={s.title} style={{ background: 'var(--navy-mid)', border: '1px solid var(--border-blue)', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--white)' }}>{s.title}</div>
              </div>
              {s.items.map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.4rem 0', borderBottom: '1px solid rgba(37,99,199,0.1)' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }}>◆</span>{item}
                </div>
              ))}
            </div>
          ))}
          <Link to="/contact" className="btn btn-solid" style={{ justifyContent: 'center' }}><span>Contact International Admissions</span></Link>
        </div>
      </div>
      <style>{`@media(max-width:900px){.intl-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
    </GenericPage>
  )
}
