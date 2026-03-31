import { Link } from 'react-router-dom'

export default function Undergraduate() {
  const programmes = [
    {
      icon: '🩺', code: 'MBChB', name: 'Bachelor of Medicine & Surgery', years: 6, intake: 120, fees: 'KSh 280,000/yr',
      desc: 'Kenya\'s most comprehensive medical degree programme, producing doctors who are clinically excellent and contextually aware. Years 1–3 cover basic sciences; Years 4–6 are dedicated clinical rotations at Moi Teaching & Referral Hospital and affiliated sites.',
      modules: ['Human Anatomy & Physiology', 'Biochemistry & Genetics', 'Pathology & Microbiology', 'Pharmacology', 'Clinical Medicine I–IV', 'Surgery', 'Obstetrics & Gynaecology', 'Paediatrics', 'Psychiatry', 'Community Medicine', 'Medical Ethics']
    },
    {
      icon: '💊', code: 'BPharm', name: 'Bachelor of Pharmacy', years: 4, intake: 80, fees: 'KSh 210,000/yr',
      desc: 'A rigorous four-year programme covering pharmaceutical sciences, pharmacokinetics, clinical pharmacy practice, and drug regulation. Graduates are equipped for roles in hospital pharmacy, community dispensing, pharmaceutical industry, and regulatory affairs.',
      modules: ['Pharmaceutical Chemistry', 'Pharmacognosy', 'Pharmacokinetics', 'Clinical Pharmacy', 'Drug Information Management', 'Pharmaceutical Microbiology', 'Hospital Pharmacy Practice', 'Drug Regulatory Affairs']
    },
    {
      icon: '🏥', code: 'BNSc', name: 'Bachelor of Nursing Science', years: 4, intake: 150, fees: 'KSh 175,000/yr',
      desc: 'A degree programme preparing nurses for leadership roles in hospitals, community health, and public health policy. Combines evidence-based nursing theory with extensive clinical placements across medical, surgical, paediatric, and community settings.',
      modules: ['Nursing Foundations', 'Anatomy & Physiology', 'Medical-Surgical Nursing', 'Paediatric Nursing', 'Midwifery & Obstetrics', 'Community Health Nursing', 'Mental Health Nursing', 'Nursing Research & Ethics']
    },
    {
      icon: '🦷', code: 'BDS', name: 'Bachelor of Dental Surgery', years: 5, intake: 40, fees: 'KSh 250,000/yr',
      desc: 'A comprehensive dental programme offered in partnership with Moi University Dental School. Covers oral medicine, surgery, orthodontics, and community dental health. Graduates are licensed by the KMPDC Dental Division.',
      modules: ['Oral Anatomy', 'Dental Materials', 'Periodontics', 'Oral Medicine & Surgery', 'Paediatric Dentistry', 'Orthodontics', 'Community Oral Health', 'Dental Radiology']
    },
    {
      icon: '🧪', code: 'BMLS', name: 'Bachelor of Medical Laboratory Sciences', years: 4, intake: 60, fees: 'KSh 190,000/yr',
      desc: 'Trains medical laboratory professionals for roles in diagnostic laboratories, blood banking, research, and health systems management. Strong practical component with 18 months of attachment across certified labs.',
      modules: ['Clinical Biochemistry', 'Haematology & Blood Transfusion', 'Medical Microbiology', 'Histopathology', 'Parasitology', 'Clinical Immunology', 'Medical Statistics', 'Lab Quality Management']
    },
    {
      icon: '🦽', code: 'BPhysio', name: 'Bachelor of Physiotherapy', years: 4, intake: 50, fees: 'KSh 185,000/yr',
      desc: 'Develops physiotherapists skilled in musculoskeletal, neurological, respiratory, and paediatric rehabilitation. Includes placements at Moi TRH, sports facilities, and specialised rehabilitation centres.',
      modules: ['Anatomy & Biomechanics', 'Exercise Physiology', 'Musculoskeletal Therapy', 'Neurological Rehabilitation', 'Respiratory Physiotherapy', 'Paediatric Physiotherapy', 'Sports Medicine', 'Research Methods']
    },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/academics/catalog">Academics</Link><span>›</span><span>Undergraduate</span></div>
          <h1 className="page-title">Undergraduate <em>Programmes</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Six world-class undergraduate programmes that lay the foundation for a transformative career in healthcare.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Undergraduate Programmes</div>
            <h2 className="section-title">Choose Your <em>Path to Healing</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>All programmes are accredited by the relevant Kenyan regulatory bodies and recognised by the East African Community health profession regulatory authorities.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
            {programmes.map((p, i) => (
              <div key={p.code} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', background: i % 2 === 0 ? 'var(--navy-mid)' : 'var(--section-bg)', border: '1px solid var(--border-blue)', padding: '2.5rem', alignItems: 'start' }} className="prog-detail-resp"
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{p.code} · Undergraduate</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.2 }}>{p.name}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {[['⏱', `${p.years} Years`, 'Duration'], ['👥', p.intake, 'Annual Intake'], ['💰', p.fees, 'Annual Tuition']].map(([icon, val, label]) => (
                      <div key={label} style={{ background: 'rgba(37,99,199,0.08)', border: '1px solid var(--border-blue)', padding: '0.75rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{icon}</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--sky)' }}>{val}</div>
                        <div style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply Now</span></Link>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Key Modules</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {p.modules.map(m => (
                      <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--muted)', padding: '0.4rem 0', borderBottom: '1px solid rgba(37,99,199,0.1)' }}>
                        <span style={{ width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }} />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Start Your Application</span></Link>
            <Link to="/admissions/fees" className="btn"><span>View Fees & Scholarships</span></Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.prog-detail-resp{grid-template-columns:1fr!important;gap:2rem!important;}}`}</style>
      </section>
    </>
  )
}
