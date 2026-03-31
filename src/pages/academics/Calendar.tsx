import { Link } from 'react-router-dom'

const semester1 = [
  { event: 'Application Opens', date: '1 March 2026', type: 'admissions' },
  { event: 'Early Application Deadline', date: '30 April 2026', type: 'admissions' },
  { event: 'Standard Application Deadline', date: '30 June 2026', type: 'admissions' },
  { event: 'Aptitude Tests', date: '10–25 July 2026', type: 'admissions' },
  { event: 'Interviews', date: '1–15 August 2026', type: 'admissions' },
  { event: 'Offer Letters Issued', date: '22 August 2026', type: 'admissions' },
  { event: 'Fee Payment & Acceptance', date: '5 September 2026', type: 'finance' },
  { event: 'Orientation Week', date: '15–19 September 2026', type: 'academic' },
  { event: 'Semester 1 Begins', date: '22 September 2026', type: 'academic' },
  { event: 'Midterm Assessments', date: '24–28 November 2026', type: 'exam' },
  { event: 'Continuous Assessment Deadline', date: '15 December 2026', type: 'academic' },
  { event: 'Christmas & New Year Break', date: '19 December 2026 – 4 January 2027', type: 'holiday' },
]
const semester2 = [
  { event: 'Semester 2 Begins', date: '11 January 2027', type: 'academic' },
  { event: 'Semester 2 Fees Due', date: '25 January 2027', type: 'finance' },
  { event: 'HELB Disbursement (Semester 2)', date: '30 January 2027', type: 'finance' },
  { event: 'Easter Break', date: '1–7 April 2027', type: 'holiday' },
  { event: 'End of Semester 2 Lectures', date: '23 April 2027', type: 'academic' },
  { event: 'Revision Week', date: '26–30 April 2027', type: 'exam' },
  { event: 'Final Examinations Begin', date: '5 May 2027', type: 'exam' },
  { event: 'Final Examinations End', date: '23 May 2027', type: 'exam' },
  { event: 'Results Release', date: '13 June 2027', type: 'academic' },
  { event: 'Supplementary Exams', date: '1–7 July 2027', type: 'exam' },
  { event: 'Long Vacation & Clinical Attachments', date: '10 July – 12 September 2027', type: 'holiday' },
]

type EventType = 'admissions' | 'academic' | 'exam' | 'finance' | 'holiday'
const typeColor: Record<EventType, string> = { admissions: '#2563c7', academic: '#c9a84c', exam: '#e11d48', finance: '#059669', holiday: '#7c3aed' }
const typeLabel: Record<EventType, string> = { admissions: 'Admissions', academic: 'Academic', exam: 'Examinations', finance: 'Finance', holiday: 'Holiday / Break' }

function CalTable({ data, title }: { data: typeof semester1; title: string }) {
  return (
    <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border-blue)', overflow: 'hidden' }}>
      <div style={{ background: 'linear-gradient(90deg, var(--navy-light), var(--cobalt))', padding: '1.25rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)' }}>{title}</h3>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {data.map(e => {
            const t = e.type as EventType
            return (
              <tr key={e.event} style={{ borderBottom: '1px solid var(--border-blue)', transition: 'background 0.2s' }}
                onMouseEnter={el => (el.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.04)'}
                onMouseLeave={el => (el.currentTarget as HTMLElement).style.background = 'transparent'}
              >
                <td style={{ padding: '0.85rem 2rem', width: '12px' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: typeColor[t] ?? '#888' }} />
                </td>
                <td style={{ padding: '0.85rem 1rem 0.85rem 0', fontSize: '0.82rem', color: 'var(--text)', fontWeight: 400 }}>{e.event}</td>
                <td style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--gold)', whiteSpace: 'nowrap', textAlign: 'right', fontWeight: 500 }}>{e.date}</td>
                <td style={{ padding: '0.85rem 2rem 0.85rem 0.5rem', textAlign: 'right' }}>
                  <span style={{ fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: typeColor[t] ?? '#888', background: `${typeColor[t]}22`, padding: '0.15rem 0.5rem', whiteSpace: 'nowrap' }}>{typeLabel[t]}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function CalendarPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(8,18,35,0.93) 40%,rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Academics</span><span>›</span><span>Academic Calendar</span></div>
          <h1 className="page-title">Academic <em>Calendar 2026/27</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>All key dates, semester schedules, examination periods, and holidays for the inaugural 2026/2027 academic year.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          {/* Legend */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {(Object.entries(typeLabel) as [EventType, string][]).map(([t, l]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', color: 'var(--muted)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: typeColor[t], display: 'inline-block', flexShrink: 0 }} />
                {l}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <CalTable data={semester1} title="Semester 1 — September 2026 to January 2027" />
            <CalTable data={semester2} title="Semester 2 — January 2027 to September 2027" />
          </div>

          <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', padding: '2rem', marginTop: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 300, color: 'var(--white)', marginBottom: '0.75rem' }}>Clinical Attachment Periods</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>MBChB, BNSc, and BPhysio students undertake clinical attachments during vacation periods at our partner facilities: <strong style={{ color: 'var(--text)' }}>Coast General Teaching & Referral Hospital (Mombasa)</strong>, Kilifi County Hospital, Malindi Sub-County Hospital, and Aga Khan Hospital Mombasa. Timetables are issued by the Clinical Training Coordinator in May each year.</p>
            <Link to="/contact" className="btn"><span>Contact Academic Registry</span></Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions/how-to-apply" className="btn btn-solid"><span>Apply for September 2026</span></Link>
            <Link to="/academics/catalog" className="btn"><span>Browse All Programmes</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
