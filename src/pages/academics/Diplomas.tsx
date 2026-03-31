import { Link } from 'react-router-dom'

const programmes = [
  { icon: '🩻', name: 'Diploma in Diagnostic Radiography', code: 'DipRad', duration: '3 yrs', intake: 30, fee: 'KSh 95,000/yr', desc: 'Trains skilled diagnostic radiographers to operate X-ray, ultrasound, CT, and MRI equipment. Practical placements at Coast General TRH and affiliated hospitals in Kilifi County.', modules: ['Radiation Physics', 'Anatomy for Imaging', 'Radiographic Techniques', 'Ultrasound Imaging', 'CT Scanning Principles', 'Radiation Protection'] },
  { icon: '💉', name: 'Diploma in Clinical Medicine', code: 'DipClinMed', duration: '3 yrs', intake: 50, fee: 'KSh 85,000/yr', desc: 'Produces clinical officers competent in primary care, emergency medicine, and community health. One of Kenya\'s most important healthcare cadres, especially for rural and coastal communities.', modules: ['Clinical Assessment', 'Internal Medicine', 'Surgery & Orthopaedics', 'Paediatrics', 'Obstetrics & Gynaecology', 'Community Health'] },
  { icon: '🦷', name: 'Diploma in Dental Technology', code: 'DipDentTech', duration: '3 yrs', intake: 20, fee: 'KSh 90,000/yr', desc: 'Specialist training in fabrication of dental prostheses, orthodontic appliances, and crowns. Partners with Mombasa Dental Centre for clinical placements.', modules: ['Dental Materials Science', 'Fixed Prosthetics', 'Removable Prosthetics', 'Orthodontic Appliances', 'Dental Ceramics', 'Quality Control'] },
  { icon: '🚑', name: 'Diploma in Emergency Medical Technology', code: 'DEMT', duration: '3 yrs', intake: 25, fee: 'KSh 90,000/yr', desc: 'Kenya\'s first coastal emergency paramedic programme. Trains advanced life support technicians for ambulance services, disaster response, and remote rescue — vital for Kilifi County\'s busy coastal roads.', modules: ['Basic & Advanced Life Support', 'Trauma Management', 'Cardiac Emergency Care', 'Emergency Obstetrics', 'Disaster Medicine', 'Ambulance Operations'] },
  { icon: '🦴', name: 'Diploma in Physiotherapy', code: 'DipPhysio', duration: '3 yrs', intake: 25, fee: 'KSh 88,000/yr', desc: 'Allied health programme producing physiotherapists for coastal rehabilitation centres, orthopaedic wards, neurology units, and sports medicine. Placed in Blue West\'s own sports rehab facility.', modules: ['Musculoskeletal Physiotherapy', 'Neurological Rehabilitation', 'Paediatric Physiotherapy', 'Sports Medicine', 'Electrotherapy', 'Community Rehabilitation'] },
  { icon: '🔬', name: 'Diploma in Medical Laboratory Sciences', code: 'DipMLS', duration: '3 yrs', intake: 35, fee: 'KSh 88,000/yr', desc: 'Practical training in clinical chemistry, haematology, microbiology, and blood transfusion services. Supports Kenya\'s chronic shortage of laboratory professionals in rural hospitals.', modules: ['Medical Microbiology', 'Clinical Chemistry', 'Haematology & Blood Banking', 'Histopathology', 'Parasitology', 'Laboratory Management'] },
  { icon: '🌿', name: 'Certificate in Community Health', code: 'CertCH', duration: '1 yr', intake: 60, fee: 'KSh 45,000/yr', desc: 'Accelerated programme for community health workers and volunteers seeking formal recognition. Covers preventive health, health promotion, maternal/child health referrals, and basic first aid.', modules: ['Primary Health Care Principles', 'Maternal & Child Health', 'Disease Prevention', 'Health Promotion', 'Community Mobilisation', 'First Aid & Emergency Response'] },
  { icon: '🧪', name: 'Certificate in Medical Records Management', code: 'CertMRM', duration: '1 yr', intake: 40, fee: 'KSh 42,000/yr', desc: 'Short programme for hospital administrators and records officers. Covers health information systems, patient data management, coding, and NHIF/insurance processing.', modules: ['Health Records Systems', 'Medical Coding (ICD-10)', 'Patient Data Privacy (KDPA)', 'NHIF & Insurance Processing', 'Digital Health Records', 'Health Facility Administration'] },
]

export default function Diplomas() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(8,18,35,0.93) 40%,rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Academics</span><span>›</span><span>Diplomas & Certificates</span></div>
          <h1 className="page-title">Diplomas & <em>Certificates</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '540px', lineHeight: 1.8, marginTop: '0.75rem' }}>Practical, career-focused qualifications for allied health professionals — producing the frontline workforce Kenya's health system urgently needs.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '3rem' }}>
            <div className="tag">Allied Health</div>
            <h2 className="section-title">Build Your Career in <em>Healthcare</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Six diplomas and two certificate programmes offering practical, hands-on training across every major allied health discipline. These graduates form the backbone of Kenya's health system.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>
            {programmes.map(p => (
              <div key={p.name} style={{ border: '1px solid var(--border-blue)', background: 'var(--section-bg)', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                <div style={{ background: 'linear-gradient(135deg, var(--navy-mid), var(--navy-light))', padding: '1.75rem', borderBottom: '1px solid var(--border-blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{p.icon}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.2 }}>{p.name}</div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.3rem' }}>{p.code}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--muted)', marginBottom: '0.2rem' }}>{p.duration}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 500 }}>{p.fee}</div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{p.desc}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>Key Modules</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem 1rem' }}>
                    {p.modules.map(m => <div key={m} style={{ fontSize: '0.72rem', color: 'var(--muted)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>◆</span>{m}</div>)}
                  </div>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Link to="/admissions/how-to-apply" className="btn" style={{ fontSize: '0.68rem', padding: '0.6rem 1.25rem' }}><span>Apply Now</span></Link>
                    <span style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>Intake: {p.intake} students/year</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', padding: '2rem', marginTop: '4rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)', marginBottom: '0.75rem' }}>A Note on Entry Requirements</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '800px' }}>All diploma programmes require a minimum KCSE Grade C (minus) with at least Grade C in Biology and one other science subject. Certificate programmes require KCSE Grade D+ overall and relevant work experience. Alternative entry (bridging programmes) is available for applicants who completed relevant vocational training. Our admissions team assesses each application holistically — financial hardship alone should never disqualify a talented candidate.</p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Start Your Application</span></Link>
              <Link to="/admissions/scholarships" className="btn"><span>View Scholarship Options</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
