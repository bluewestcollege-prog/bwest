import { Link } from 'react-router-dom'

const leadership = [
  { img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&q=80&fit=crop&crop=face', name: 'Prof. Grace Wambui, PhD', title: 'Principal & Vice Chancellor', bio: 'A celebrated epidemiologist and public health leader, Prof. Wambui has led Blue West since 2018, overseeing a 60% growth in enrolment and launching three new research centres. She holds a PhD from Johns Hopkins and an honorary doctorate from the University of Nairobi.', dept: 'Office of the Principal' },
  { img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&q=80&fit=crop&crop=face', name: 'Dr. Samuel Odhiambo', title: 'Dean of Clinical Sciences', bio: 'With 22 years of clinical and academic experience at Moi Teaching & Referral Hospital, Dr. Odhiambo is the architect of our acclaimed clinical training curriculum, which has been adopted by three other Kenyan medical schools.', dept: 'Faculty of Clinical Medicine' },
  { img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&q=80&fit=crop&crop=face', name: 'Prof. Amina Hassan', title: 'Dean of Research & Postgraduate Studies', bio: 'Prof. Hassan leads our research enterprise with over 140 peer-reviewed publications and active grants from WHO, Wellcome Trust, and the Kenya National Research Fund. Her work on malaria diagnostics is cited globally.', dept: 'School of Biomedical Sciences' },
  { img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&q=80&fit=crop&crop=face', name: 'Dr. Peter Mutembei', title: 'Dean of Student Affairs', bio: 'Dr. Mutembei champions student welfare, mental health, and community outreach at Blue West. Under his leadership, the college established Kenya\'s first medical student rural placement programme.', dept: 'Student Affairs Directorate' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&fit=crop&crop=face', name: 'Dr. John Kipkorir', title: 'Head of School of Pharmacy', bio: 'Dr. Kipkorir holds a PharmD from Strathmore and specialises in tropical medicine pharmacology. He has established key partnerships with Revital Healthcare and other Kenya-based pharma firms for student internships.', dept: 'School of Pharmacy & Pharmacology' },
  { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80&fit=crop&crop=face', name: 'Dr. Faith Achieng', title: 'Head of School of Nursing & Midwifery', bio: 'An award-winning nurse educator, Dr. Achieng led the redesign of the BNSc curriculum to integrate community health nursing, a critical need in rural Kenya. She is a WHO nursing expert panel member.', dept: 'School of Nursing & Midwifery' },
  { img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&q=80&fit=crop&crop=face', name: 'Ms. Caroline Njoroge', title: 'Registrar & Academic Affairs', bio: 'Ms. Njoroge oversees admissions, examinations, and all academic records. With 18 years in higher education administration, she has modernised the college\'s enrolment and records management systems.', dept: 'Academic Registrar\'s Office' },
  { img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&q=80&fit=crop&crop=face', name: 'Mr. David Rotich', title: 'Director of Finance & Strategy', bio: 'Mr. Rotich oversees the college\'s financial sustainability and strategic investments. He led the capital campaign that funded the new KSh 300M Waweru Simulation Centre and the growing scholarship endowment.', dept: 'Finance & Strategy' },
]

export default function Leadership() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/about/mission">About</Link><span>›</span><span>Leadership</span></div>
          <h1 className="page-title">Our <em>Leadership Team</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Experienced, visionary, and deeply committed to healthcare excellence in Kenya and East Africa.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Executive Leadership</div>
            <h2 className="section-title">The People <em>Behind the Mission</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Our leadership team brings together decades of clinical, academic, and administrative expertise dedicated to advancing medical education in Kenya.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {leadership.map(l => (
              <div key={l.name} style={{ border: '1px solid var(--border-blue)', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', padding: '2rem', borderBottom: '1px solid var(--border-blue)', alignItems: 'center' }}>
                  <img src={l.img} alt={l.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.25rem' }}>{l.name}</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>{l.title}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>{l.dept}</div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.75 }}>{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section section-mid-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="gov-resp">
            <div>
              <div className="tag">Governance</div>
              <h2 className="section-title">Council & <em>Oversight</em></h2>
              <div className="divider" />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>Blue West Medical Training College is governed by a Board of Trustees comprising distinguished professionals from medicine, academia, business, and public service. The Board oversees strategic direction, financial stewardship, and institutional policy.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem' }}>Our Academic Senate — comprising representatives from all faculties — oversees curriculum, research standards, and academic quality assurance, ensuring the college meets the highest educational benchmarks.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about/accreditations" className="btn"><span>Accreditations</span></Link>
                <Link to="/contact" className="btn btn-blue"><span>Contact Leadership</span></Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Board of Trustees (12 members)', 'Academic Senate (24 faculty representatives)', 'Finance & Audit Committee', 'Research Ethics Board', 'Student Representative Council', 'Community Advisory Panel', 'Alumni Board of Directors'].map(g => (
                <div key={g} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', border: '1px solid var(--border-blue)', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
                >
                  <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>◆</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.gov-resp{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
      </section>
    </>
  )
}
