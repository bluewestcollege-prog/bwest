import { Link } from 'react-router-dom'

const accreditations = [
  { body: 'Kenya Medical Practitioners & Dentists Council (KMPDC)', scope: 'MBChB, Diploma in Clinical Medicine, all medical programmes', year: '1997 — Present', logo: '🏛️', status: 'Full Accreditation' },
  { body: 'Nursing Council of Kenya (NCK)', scope: 'Bachelor of Nursing Science, Diploma in Nursing, Midwifery programmes', year: '1989 — Present', logo: '🏥', status: 'Full Accreditation' },
  { body: 'Pharmacy & Poisons Board (PPB)', scope: 'Bachelor of Pharmacy and all pharmaceutical sciences programmes', year: '2002 — Present', logo: '💊', status: 'Full Accreditation' },
  { body: 'Kenya National Qualifications Authority (KNQA)', scope: 'All degree and diploma programmes — institutional recognition', year: '2016 — Present', logo: '📜', status: 'Recognised Institution' },
  { body: 'Commission for University Education (CUE)', scope: 'Institutional accreditation as a constituent college with degree-awarding authority', year: '2009 — Present', logo: '🎓', status: 'Accredited University College' },
  { body: 'ISO 9001:2015', scope: 'Quality management system — teaching, administration, research, and student services', year: '2017 — Present', logo: '✅', status: 'Certified' },
  { body: 'East African Community Health Profession Regulatory Bodies', scope: 'Graduates recognised across Uganda, Tanzania, Rwanda, Burundi, and South Sudan', year: '2018 — Present', logo: '🌍', status: 'Regional Recognition' },
  { body: 'World Federation for Medical Education (WFME)', scope: 'MBChB programme meets international standards for medical education', year: '2020 — Present', logo: '🌐', status: 'Standards Compliance' },
]

export default function Accreditations() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1532094349884-543559b8f9b7?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/about/mission">About</Link><span>›</span><span>Accreditations</span></div>
          <h1 className="page-title">Our <em>Accreditations</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Regulatory recognition and quality certifications that confirm our commitment to world-class health sciences education.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Regulatory Recognition</div>
            <h2 className="section-title">Accredited for <em>Excellence</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Blue West Medical Training College holds full accreditation from all relevant Kenyan and international regulatory bodies, giving our graduates internationally recognised qualifications.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {accreditations.map(a => (
              <div key={a.body} style={{ background: 'var(--navy-mid)', border: '1px solid var(--border-blue)', borderLeft: '4px solid var(--gold)', padding: '2rem', transition: 'border-color 0.3s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{a.logo}</span>
                  <span style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid var(--border)', padding: '0.2rem 0.6rem', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', borderRadius: 'var(--radius)' }}>{a.status}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{a.body}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}><strong style={{ color: 'var(--text)' }}>Scope:</strong> {a.scope}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.06em', color: 'var(--gold)' }}>📅 {a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="section section-mid-bg">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="tag">Quality Commitment</div>
          <h2 className="section-title">Our Quality <em>Statement</em></h2>
          <div className="divider divider-center" />
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>Blue West Medical Training College is committed to delivering health sciences education of the highest quality — meeting and exceeding the standards set by Kenyan and international regulatory bodies. Our continuous professional development programme, annual curriculum review process, and mandatory student satisfaction surveys ensure that we remain responsive to the evolving needs of the healthcare sector.</p>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2.5rem' }}>We publish our annual quality assurance report and accreditation status updates on this page. Any concerns about academic quality may be directed to our Quality Assurance Office.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-solid"><span>Quality Assurance Office</span></Link>
            <Link to="/faculty/research" className="btn"><span>Research Standards</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
