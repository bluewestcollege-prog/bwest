import { Link } from 'react-router-dom'

export default function HowToApply() {
  const steps = [
    { num: '01', title: 'Check Entry Requirements', desc: 'Review the academic prerequisites for your chosen programme. Undergraduate programmes require KCSE with minimum C+ overall and specific subject grades. Postgraduate programmes require an undergraduate degree in a relevant health science.' },
    { num: '02', title: 'Gather Your Documents', desc: 'Prepare certified copies of KCSE Result Slip or Certificate, National ID or Passport, two passport photos, transcripts, a personal statement (500 words), and two reference letters from teachers or employers.' },
    { num: '03', title: 'Complete Online Application', desc: 'Submit your application via our secure online portal. All programmes can be applied to online. You can save a draft and return before submission. Application fee: KSh 2,000 (waived for applicants from rural counties).' },
    { num: '04', title: 'Written Assessment & Interview', desc: 'Shortlisted applicants are invited for a cognitive aptitude test and motivational interview. These are designed to assess your commitment to healthcare, not just academic performance. Interviews may be conducted in-person or via video call.' },
    { num: '05', title: 'Receive Your Offer Letter', desc: 'Successful applicants receive a formal offer within 4 weeks of their interview. Conditional offers are issued pending verification of results. Accept your offer and pay the KSh 10,000 acceptance deposit to secure your place.' },
    { num: '06', title: 'Enrol & Begin', desc: 'Attend orientation week in late August/September. Complete registration, collect your student ID, get your residence assignment, and meet your academic advisor. Your journey begins here.' },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/admissions/how-to-apply">Admissions</Link><span>›</span><span>How to Apply</span></div>
          <h1 className="page-title">How to <em>Apply</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Your journey to becoming a healthcare professional starts here. We've made the application process as clear and accessible as possible.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="apply-resp">
            <div>
              <div className="tag">Application Process</div>
              <h2 className="section-title">Six Steps to <em>Your Future</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>We welcome applications from all talented, motivated students across Kenya and internationally. Our process is competitive but holistic — we look for students with genuine passion for healthcare, not just academic grades.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {steps.map(s => (
                  <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '50px 1fr', gap: '1.5rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, paddingTop: '0.1rem' }}>{s.num}</div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.35rem' }}>{s.title}</div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a href="https://bluew-g.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-solid"><span>Start Your Application Online →</span></a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Key Dates */}
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '2rem' }}>
                <div className="tag">2025 Key Dates</div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[['Applications Open', 'March 1, 2025'], ['Early Application Deadline', 'April 30, 2025 ★'], ['Standard Deadline', 'June 30, 2025'], ['Aptitude Tests', 'July 10–25, 2025'], ['Interviews', 'August 1–15, 2025'], ['Offer Letters Issued', 'August 22, 2025'], ['Acceptance Deadline', 'September 5, 2025'], ['Orientation Week', 'September 15–19, 2025'], ['Classes Begin', 'September 22, 2025']].map(([event, date]) => (
                      <tr key={event}>
                        <td style={{ padding: '0.65rem 0', fontSize: '0.8rem', color: 'var(--text)', borderBottom: '1px solid var(--border-blue)' }}>{event}</td>
                        <td style={{ padding: '0.65rem 0', fontSize: '0.8rem', color: event.includes('★') || date.includes('★') ? 'var(--gold)' : 'var(--gold)', fontWeight: 500, textAlign: 'right', borderBottom: '1px solid var(--border-blue)' }}>{date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Entry Requirements */}
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--sky)', padding: '2rem' }}>
                <div className="tag">Entry Requirements</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { prog: 'MBChB', req: 'KCSE Grade B+ (min). Biology A-, Chemistry B+, Physics/Maths B' },
                    { prog: 'BPharm', req: 'KCSE Grade B (min). Chemistry B+, Biology B, Maths B' },
                    { prog: 'BNSc', req: 'KCSE Grade C+ (min). Biology C+, English C+' },
                    { prog: 'BMLS', req: 'KCSE Grade B- (min). Biology B, Chemistry B' },
                    { prog: 'Diplomas', req: 'KCSE Grade C (min) with relevant science subjects' },
                    { prog: 'Postgraduate', req: 'Relevant undergraduate degree, min Second Class Honours' },
                  ].map(r => (
                    <div key={r.prog} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-blue)' }}>
                      <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sky)', fontWeight: 500 }}>{r.prog}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>{r.req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/admissions/fees" className="btn btn-blue" style={{ textAlign: 'center', justifyContent: 'center' }}><span>View Fees & Financial Aid</span></Link>
              <Link to="/admissions/scholarships" className="btn" style={{ textAlign: 'center', justifyContent: 'center' }}><span>Scholarship Opportunities</span></Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.apply-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}
