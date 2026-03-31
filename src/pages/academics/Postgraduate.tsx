import { Link } from 'react-router-dom'

const programmes = [
  {
    icon: '🧬', code: 'MSc', name: 'MSc Clinical Medicine', duration: '2 Years', intake: 30, mode: 'Full-time / Part-time',
    desc: 'An advanced clinical degree for medical officers and general practitioners seeking specialist depth in internal medicine, diagnostics, and clinical research. Structured rotations through Coast General Teaching & Referral Hospital.',
    modules: ['Advanced Pathophysiology', 'Clinical Pharmacology', 'Evidence-Based Medicine', 'Medical Research Methodology', 'Clinical Attachment (500 hrs)', 'Dissertation'],
    entry: 'MBChB or equivalent; min 2 years clinical experience',
  },
  {
    icon: '🩺', code: 'MMed', name: 'Master of Medicine — Surgery', duration: '3 Years', intake: 15, mode: 'Full-time',
    desc: 'Kenya Medical Practitioners & Dentists Council recognised specialist surgical training programme. Emphasis on general surgery, trauma, and surgical management of tropical conditions common to coastal Kenya.',
    modules: ['Surgical Anatomy & Pathology', 'Perioperative Care', 'Trauma Surgery', 'Laparoscopic Techniques', 'Paediatric Surgery Principles', 'Research Project'],
    entry: 'MBChB; registered with KMPDC; 3 years post-internship',
  },
  {
    icon: '👶', code: 'MMed', name: 'Master of Medicine — Obstetrics & Gynaecology', duration: '3 Years', intake: 12, mode: 'Full-time',
    desc: 'A specialist programme addressing Kenya\'s high maternal mortality rates, with focus on high-risk pregnancy, emergency obstetrics, fistula repair, and reproductive health policy.',
    modules: ['High-Risk Obstetrics', 'Emergency Gynaecology', 'Reproductive Endocrinology', 'Foetal Medicine & Ultrasonography', 'Community Maternal Health', 'Research Thesis'],
    entry: 'MBChB; KMPDC registered; 2 years clinical post-internship',
  },
  {
    icon: '🔬', code: 'MSc', name: 'MSc Biomedical Sciences', duration: '2 Years', intake: 25, mode: 'Full-time / Part-time',
    desc: 'Research-intensive programme in laboratory sciences, molecular biology, and translational medicine. Strong links to our six research centres and Coast General Hospital diagnostic laboratories.',
    modules: ['Molecular Diagnostics', 'Immunology & Infectious Disease', 'Medical Genetics', 'Biostatistics & Epidemiology', 'Laboratory Management', 'Dissertation'],
    entry: 'BSc Biomedical Sciences, BMLS, or equivalent; min Lower Second',
  },
  {
    icon: '💊', code: 'MSc', name: 'MSc Clinical Pharmacology', duration: '2 Years', intake: 20, mode: 'Full-time',
    desc: 'Specialised training for pharmacists and clinicians in drug development, therapeutic drug monitoring, pharmacovigilance, and regulation — aligned with Pharmacy & Poisons Board Kenya standards.',
    modules: ['Rational Drug Use', 'Drug Safety & Pharmacovigilance', 'Clinical Trials Methodology', 'Pharmaceutical Policy', 'Hospital Pharmacy Practice', 'Research Project'],
    entry: 'BPharm or MBChB; min Second Class Honours',
  },
  {
    icon: '🏥', code: 'MPH', name: 'Master of Public Health', duration: '2 Years', intake: 40, mode: 'Full-time / Part-time / Online',
    desc: 'A versatile public health programme open to all health profession graduates. Covers epidemiology, health systems, environmental health, and health policy — with a strong focus on coastal and rural Kenya.',
    modules: ['Epidemiology & Disease Surveillance', 'Health Systems & Policy', 'Biostatistics', 'Environmental & Occupational Health', 'Health Promotion', 'Applied Research Project'],
    entry: 'Any undergraduate health degree; min Second Class; relevant work experience preferred',
  },
]

export default function Postgraduate() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1532094349884-543559b8f9b7?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(8,18,35,0.93) 40%,rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/academics/undergraduate">Academics</Link><span>›</span><span>Postgraduate</span></div>
          <h1 className="page-title">Postgraduate <em>Programmes</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Advanced degrees and specialist training for healthcare professionals ready to lead, specialise, and innovate in Kenya's health system.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">Postgraduate Studies</div>
            <h2 className="section-title">Deepen Your <em>Expertise</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Six specialist and research-based postgraduate programmes, designed for working health professionals and full-time students alike.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {programmes.map((p, i) => (
              <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '3rem', background: i % 2 === 0 ? 'var(--navy-mid)' : 'var(--section-bg)', border: '1px solid var(--border-blue)', padding: '2.5rem', transition: 'border-color 0.3s' }} className="pg-resp"
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>{p.code}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.2 }}>{p.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                    {[['Duration', p.duration], ['Annual Intake', String(p.intake)], ['Mode', p.mode]].map(([l, v]) => (
                      <div key={l} style={{ background: 'rgba(0,0,0,0.2)', padding: '0.75rem', border: '1px solid var(--border-blue)' }}>
                        <div style={{ fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.2rem' }}>{l}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--white)', fontWeight: 500 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Core Modules</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {p.modules.map(m => (
                      <div key={m} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.5rem 0', borderBottom: '1px solid rgba(37,99,199,0.1)' }}>
                        <span style={{ color: 'var(--gold)', flexShrink: 0 }}>◆</span>{m}
                      </div>
                    ))}
                  </div>
                  <div style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid var(--border)', padding: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>Entry Requirements</div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{p.entry}</p>
                  </div>
                  <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply to This Programme</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.pg-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  )
}
