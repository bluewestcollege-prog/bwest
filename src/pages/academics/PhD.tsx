import { Link } from 'react-router-dom'

export default function PhD() {
  const tracks = [
    { icon: '🧬', name: 'PhD in Biomedical Sciences', focus: 'Molecular biology, infectious disease, cancer biology, genomics', supervisor: 'Prof. Amina Hassan / Prof. James Kariuki', funding: 'Wellcome Trust, NIH, KEMRI grants available', desc: 'Our flagship doctoral programme tackles the molecular and cellular basis of diseases prevalent in Kenya and East Africa — HIV/AIDS, TB, malaria, cancer, and emerging zoonotic diseases. Candidates publish in international peer-reviewed journals and present at global conferences.' },
    { icon: '🏥', name: 'PhD in Public Health & Epidemiology', focus: 'Disease surveillance, health systems, community interventions', supervisor: 'Prof. Daniel Rono / Prof. Grace Wambui', funding: 'WHO Kenya, USAID, Gates Foundation partnerships', desc: 'Population-level research addressing Kenya\'s disease burden, health inequities, and intervention strategies. Candidates work embedded in Kilifi County health systems, providing real-world policy impact.' },
    { icon: '🤖', name: 'PhD in Health Informatics & AI', focus: 'Machine learning in diagnostics, digital health systems, data science', supervisor: 'Dr. Emmanuel Otieno', funding: 'Google Kenya, IDRC, African Development Bank', desc: 'An interdisciplinary doctorate at the frontier of technology and medicine. Candidates develop AI tools for resource-limited settings — diagnostic algorithms, predictive models, and telemedicine platforms suited to coastal Kenya.' },
    { icon: '💊', name: 'PhD in Pharmacology & Pharmaceutical Sciences', focus: 'Drug discovery, pharmacovigilance, ethnopharmacology', supervisor: 'Dr. John Kipkorir / Dr. Monica Kerubo', funding: 'Pharmacy & Poisons Board research fund, DAAD', desc: 'Doctoral research spanning drug discovery, traditional medicine validation, pharmacovigilance systems, and pharmaceutical policy. Unique focus on developing affordable medicines for tropical and coastal diseases.' },
    { icon: '🧠', name: 'PhD in Nursing & Health Sciences', focus: 'Community nursing models, mental health, patient outcomes research', supervisor: 'Dr. Faith Achieng\'', funding: 'Nursing Council of Kenya, WHO, East Africa research funds', desc: 'Kenya\'s first nursing-specific doctoral programme. Generates evidence for community-based nursing models appropriate for the Coast\'s diverse communities, including fishing communities, pastoralists, and coastal urban populations.' },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1614308457932-e16f87ca15c7?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(8,18,35,0.93) 40%,rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Academics</span><span>›</span><span>PhD & Doctoral</span></div>
          <h1 className="page-title">PhD & <em>Doctoral Research</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Contribute original research that changes healthcare in Kenya. Join a vibrant doctoral community supported by world-class supervision and international funding.</p>
        </div>
      </div>

      {/* Why PhD at Blue West */}
      <section className="section section-mid-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="phd-why-resp">
            <div>
              <div className="tag">Why Blue West for Research</div>
              <h2 className="section-title">Research That <em>Changes Lives</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>Blue West's doctoral programme is designed for intellectually curious, driven individuals who want to produce research with real-world impact. As a new institution on Kenya's Coast, we are uniquely positioned to address health challenges that have been academically under-studied: coastal disease ecology, marine-related illness, health of fishing communities, and the unique epidemiology of Kilifi County.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>Our supervisors have cumulatively published over 900 peer-reviewed papers, secured KSh 150M+ in research grants, and hold affiliations with Wellcome Trust, NIH, WHO, and East African academic consortia.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '🏆', t: 'International Supervision', s: 'Co-supervision available with partner universities in UK, Germany, and the US.' },
                  { icon: '💰', t: 'Funded Research Places', s: 'Up to 60% of PhD students receive full funding through grants and institutional bursaries.' },
                  { icon: '🔬', t: 'World-Class Labs', s: 'Access to BSL-2 labs, genomics sequencing, AI computing cluster, and GIS health mapping.' },
                  { icon: '🌍', t: 'Field Research Access', s: 'Embedded partnerships with Kilifi County health facilities, village health units, and Coast General Hospital.' },
                  { icon: '📄', t: 'Publication Support', s: 'Structured publication mentorship — 90% of our doctoral graduates publish before defence.' },
                ].map(w => (
                  <div key={w.t} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{w.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.2rem' }}>{w.t}</div>
                      <p style={{ fontSize: '0.77rem', color: 'var(--muted)', lineHeight: 1.65 }}>{w.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '2rem' }}>
                <div className="tag">Programme Structure</div>
                {[['Duration', '3–5 years (minimum 3 years full-time)'], ['Admission', 'Relevant Master\'s degree; min Upper Second Class Honours'], ['Mode', 'Full-time or part-time (subject to supervisor approval)'], ['Language', 'English (thesis and viva voce)'], ['Annual Fees', 'KSh 85,000 (tuition only)'], ['Intake', 'March and September each year']].map(([l, v]) => (
                  <div key={l} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '0.65rem 0', borderBottom: '1px solid var(--border-blue)', gap: '1rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{l}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--sky)', padding: '2rem' }}>
                <div className="tag">Process</div>
                {['Write a research proposal (2,000–3,000 words)', 'Identify a potential supervisor from our directory', 'Apply online with proposal, transcripts & references', 'Attend supervisory panel interview', 'Receive admission with conditions', 'Enrol, register research topic with Senate'].map((s, i) => (
                  <div key={s} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: '1px solid var(--border-blue)' }}>
                    <span style={{ width: '24px', height: '24px', background: 'var(--gold)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{s}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-solid" style={{ justifyContent: 'center' }}><span>Contact Research Office</span></Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.phd-why-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>

      {/* PhD Tracks */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Research Tracks</div>
            <h2 className="section-title">Five Doctoral <em>Research Areas</em></h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {tracks.map(t => (
              <div key={t.name} style={{ border: '1px solid var(--border-blue)', padding: '2rem', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{t.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{t.name}</h3>
                <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Focus: {t.focus}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{t.desc}</p>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '0.25rem' }}><strong style={{ color: 'var(--text)' }}>Supervisors:</strong> {t.supervisor}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}><strong style={{ color: 'var(--text)' }}>Funding:</strong> {t.funding}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply for PhD</span></Link>
            <Link to="/faculty/directory" className="btn"><span>Find a Supervisor</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
