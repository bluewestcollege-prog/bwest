import { Link } from 'react-router-dom'

export default function NewCourses() {
  const newCourses = [
    {
      icon: '🤖', badge: 'PIONEERING', name: 'BSc Health Informatics & Artificial Intelligence in Medicine', code: 'HIAM', level: 'Undergraduate · 4 Years', intake: 2025,
      desc: 'The first of its kind in Kenya and one of very few in East Africa. This programme trains the next generation of healthcare professionals who can harness artificial intelligence, machine learning, and data science to transform clinical diagnosis, health system management, and patient outcomes.',
      highlights: ['AI-Assisted Diagnostics training using real clinical datasets', 'Electronic Health Records (EHR) systems management', 'Natural Language Processing for clinical text analysis', 'Digital health entrepreneurship module', 'Partnership with Safaricom M-Health initiative', 'Internship pathways at Malindi-based health tech startups'],
      why: 'Kenya\'s healthcare system generates millions of data points daily but lacks professionals who can analyse and act on them. This programme fills that critical gap.'
    },
    {
      icon: '🌿', badge: 'UNIQUE IN KENYA', name: 'BSc Traditional Medicine & Integrative Health Sciences', code: 'TMIH', level: 'Undergraduate · 4 Years', intake: 2025,
      desc: 'The only degree-level programme in traditional medicine integrated with modern biomedical science in Kenya. Designed to scientifically validate, standardise, and integrate indigenous Kenyan and East African healing practices into formal healthcare. Combines ethnobotany, pharmacognosy, and conventional medicine with cultural competency.',
      highlights: ['Ethnobotany & African herbal medicine', 'Phytopharmacology & medicinal plant research', 'WHO Traditional Medicine Strategy alignment', 'Field studies with traditional healers in rural Kenya', 'Natural products chemistry', 'Regulatory pathways for traditional medicine products'],
      why: 'Over 80% of Kenyans use traditional medicine at some point. Training professionals who bridge traditional and modern healthcare is essential for community health.'
    },
    {
      icon: '🌍', badge: 'RARE IN AFRICA', name: 'MSc One Health: Human, Animal & Environmental Medicine', code: 'OHEM', level: 'Postgraduate · 2 Years', intake: 2025,
      desc: 'A cutting-edge postgraduate programme addressing health at the intersection of humans, animals, and ecosystems — a concept of profound relevance in Kenya\'s diverse ecological context. Covers zoonotic diseases, antimicrobial resistance, climate health, and community surveillance.',
      highlights: ['Zoonotic disease surveillance & outbreak response', 'Antimicrobial resistance (AMR) management', 'Climate change and its impact on vector-borne diseases', 'Wildlife-livestock-human interface health', 'Community-based surveillance systems', 'Field placements at Kenya Wildlife Service & KEMRI'],
      why: 'COVID-19, Mpox, Rift Valley Fever — most pandemic threats emerge at the human-animal-environment interface in Africa. Kenya urgently needs One Health specialists.'
    },
    {
      icon: '🧠', badge: 'FIRST IN WESTERN KENYA', name: 'Diploma in Mental Health Nursing & Psychosocial Support', code: 'MHPSS', level: 'Diploma · 3 Years', intake: 2025,
      desc: 'A specialist nursing diploma addressing Kenya\'s severe mental health workforce gap. Only 1 psychiatrist per 1 million Kenyans exists nationwide. This programme trains mental health nurses and psychosocial support workers who can operate in community settings, schools, and primary care facilities.',
      highlights: ['Community mental health first response', 'Psychosocial support for trauma and GBV survivors', 'Substance abuse & addiction management', 'Child & adolescent mental health', 'Cultural dimensions of mental illness in Kenya', 'School mental health programme delivery'],
      why: 'WHO estimates 1 in 4 Kenyans will experience a mental health condition. There are fewer than 100 psychiatrists in the entire country. This programme is urgently needed.'
    },
    {
      icon: '🏃', badge: 'UNIQUE IN RIFT VALLEY', name: 'BSc Sports Medicine & Exercise Science', code: 'SMES', level: 'Undergraduate · 4 Years', intake: 2026,
      desc: 'Eldoret is the world\'s greatest athletics hub — home to dozens of world-record holders and Olympic champions. This programme, developed in partnership with Athletics Kenya, trains sports medicine professionals and exercise scientists to support Kenya\'s elite athletic culture and the growing sports industry.',
      highlights: ['Sports injury prevention and rehabilitation', 'Performance physiology & biomechanics', 'Nutrition for elite athletes', 'Altitude training medicine (specialised for Eldoret context)', 'Anti-doping & sports governance', 'Partnership with Kenyan Olympic athletes for practical training'],
      why: 'Kenya produces more world-class athletes than anywhere on Earth. There are virtually no sports medicine specialists based in Eldoret to support them.'
    },
    {
      icon: '🌾', badge: 'COMMUNITY-FOCUSED', name: 'Certificate in Rural & Community Health Practice', code: 'RCHP', level: 'Certificate · 1 Year', intake: 2025,
      desc: 'A practical, community-facing certificate programme targeting health workers already operating in rural Kenya — CHWs, dispensary assistants, and community volunteers — and formalising their training. Fully subsidised for students from villages and rural areas. Delivered in hybrid format.',
      highlights: ['Primary healthcare delivery in low-resource settings', 'Maternal & newborn care at community level', 'Disease surveillance and outbreak reporting', 'Community health education methodologies', 'Basic emergency first response', 'Referral pathways & healthcare system navigation'],
      why: 'Millions of rural Kenyans rely on community health workers. Formalising and upgrading their training saves lives and strengthens the national health system.'
    },
    {
      icon: '🧬', badge: 'EMERGING FIELD', name: 'MSc Genomics & Precision Medicine in Africa', code: 'GPMA', level: 'Postgraduate · 2 Years', intake: 2026,
      desc: 'A pioneering postgraduate programme in applied genomics for African disease contexts. With Africa home to the world\'s greatest genetic diversity, and precision medicine revolutionising cancer care and drug development, this programme trains the scientists who will lead genomics research in Kenya and across the continent.',
      highlights: ['Next-generation sequencing & bioinformatics', 'African genetic diversity & disease susceptibility', 'Pharmacogenomics — African drug metabolism pathways', 'Cancer genomics & precision oncology', 'Infectious disease genomics (malaria, TB, HIV)', 'Bioethics of genetic research in African populations'],
      why: 'Most precision medicine research ignores African genetic diversity. This programme trains Africans to lead genomics research on African diseases for African populations.'
    },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.95) 40%, rgba(8,18,35,0.6) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/academics/catalog">Academics</Link><span>›</span><span>New Courses</span></div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />New for 2025–2026<span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h1 className="page-title">Pioneering <em>Programmes</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '580px', lineHeight: 1.8, marginTop: '0.75rem' }}>New and innovative courses addressing Kenya's most urgent health system gaps — many offered nowhere else in Kenya or East Africa. Be among the first to study where medicine meets the future.</p>
        </div>
      </div>

      {/* New Courses Banner */}
      <div style={{ background: 'linear-gradient(90deg, var(--navy-light), var(--cobalt))', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[['7', 'New Programmes'], ['2025', 'First Intake Year'], ['4', 'Unique in Kenya'], ['Hybrid', 'Learning Available']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* New Courses List */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">New Courses 2025–2026</div>
            <h2 className="section-title">Medicine Meets <em>The Future</em></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>These programmes were developed following extensive consultation with Kenya's Ministry of Health, healthcare employers, community health leaders, and international academic partners — to address the skills gaps that matter most.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '3rem' }}>
            {newCourses.map((c, i) => (
              <div key={c.code} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="nc-resp">
                {i % 2 === 0 ? (
                  <>
                    <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '4px solid var(--gold)', padding: '2.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '2.5rem' }}>{c.icon}</span>
                        <div>
                          <div style={{ display: 'inline-flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <span style={{ background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.1em', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius)' }}>{c.badge}</span>
                          </div>
                          <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{c.code} · {c.level}</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.25 }}>{c.name}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>{c.desc}</p>
                      <div style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid var(--border)', padding: '1rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--gold)' }}>
                        <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Why This Programme?</div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, fontStyle: 'italic' }}>{c.why}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply for {c.intake}</span></Link>
                        <Link to="/contact" className="btn"><span>Programme Enquiry</span></Link>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Programme Highlights</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {c.highlights.map((h, j) => (
                          <div key={j} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border-blue)', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
                          >
                            <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }}>✦</span>
                            <span style={{ fontSize: '0.82rem', color: 'var(--text)', lineHeight: 1.6 }}>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Programme Highlights</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {c.highlights.map((h, j) => (
                          <div key={j} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border-blue)', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
                          >
                            <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }}>✦</span>
                            <span style={{ fontSize: '0.82rem', color: 'var(--text)', lineHeight: 1.6 }}>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '4px solid var(--sky)', padding: '2.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '2.5rem' }}>{c.icon}</span>
                        <div>
                          <div style={{ display: 'inline-flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <span style={{ background: 'var(--sky)', color: 'var(--navy)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.1em', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius)' }}>{c.badge}</span>
                          </div>
                          <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{c.code} · {c.level}</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.25 }}>{c.name}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>{c.desc}</p>
                      <div style={{ background: 'rgba(59,130,232,0.07)', border: '1px solid var(--border-blue)', padding: '1rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--sky)' }}>
                        <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: '0.5rem' }}>Why This Programme?</div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, fontStyle: 'italic' }}>{c.why}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply for {c.intake}</span></Link>
                        <Link to="/contact" className="btn btn-blue"><span>Programme Enquiry</span></Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.nc-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Expression of Interest */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy-light), var(--cobalt))', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="tag">Express Interest</div>
          <h2 className="section-title">Be Among the <em>First</em></h2>
          <div className="divider divider-center" />
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.85 }}>Submit an expression of interest for any of our new programmes and receive updates on application opening dates, programme details, and early-bird scholarship opportunities.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Submit Expression of Interest</span></Link>
            <Link to="/contact" className="btn" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--white)' }}><span>Speak to an Advisor</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
