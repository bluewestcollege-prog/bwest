import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

interface ContactForm {
  first_name: string
  last_name: string
  email: string
  phone: string
  subject: string
  message: string
}

const INITIAL_FORM: ContactForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  subject: 'Admissions Enquiry',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function set(field: keyof ContactForm, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit() {
    if (!form.first_name || !form.last_name || !form.email || !form.message) {
      setErrorMsg('Please fill in all required fields.')
      setFormStatus('error')
      return
    }
    setFormStatus('submitting')
    const { error } = await supabase.from('contact_inquiries').insert([{
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      phone: form.phone || null,
      subject: form.subject,
      message: form.message,
    }])
    if (error) {
      setErrorMsg(error.message)
      setFormStatus('error')
    } else {
      setFormStatus('sent')
    }
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80&fit=crop" alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,18,35,0.93) 40%, rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Contact Us</span></div>
          <h1 className="page-title">We're Here <em>to Help</em></h1>
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>Whether you're a prospective student, parent, researcher, or community partner — our team responds within one working day.</p>
        </div>
      </div>

      <section className="section section-alt-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }} className="contact-grid-resp">
            <div>
              <div className="tag">Get In Touch</div>
              <h2 className="section-title">Contact <em>Information</em></h2>
              <div className="divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: '📍', label: 'Campus Address', val: 'Blue West Way, Gongoni, Malindi — Kilifi County, Kenya', link: null },
                  { icon: '📞', label: 'Main Switchboard', val: '+254 41 253 0100', link: 'tel:+254412530100' },
                  { icon: '📞', label: 'Admissions Office', val: '+254 41 253 0101', link: 'tel:+254412530101' },
                  { icon: '✉️', label: 'General Enquiries', val: 'info@bluewest.ac.ke', link: 'mailto:info@bluewest.ac.ke' },
                  { icon: '✉️', label: 'Admissions Email', val: 'admissions@bluewest.ac.ke', link: 'mailto:admissions@bluewest.ac.ke' },
                  { icon: '❤️', label: 'Donations Office', val: 'donate@bluewest.ac.ke', link: 'mailto:donate@bluewest.ac.ke' },
                  { icon: '🕐', label: 'Office Hours', val: 'Mon–Fri: 08:00–17:00 · Sat: 09:00–13:00', link: null },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.25rem', border: '1px solid var(--border-blue)', transition: 'border-color 0.25s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
                  >
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.2rem' }}>{c.label}</div>
                      {c.link ? <a href={c.link} style={{ fontSize: '0.85rem', color: 'var(--white)', transition: 'color 0.2s' }}>{c.val}</a> : <div style={{ fontSize: '0.85rem', color: 'var(--white)' }}>{c.val}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&fit=crop" alt="Campus location" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>

            {/* Contact Form */}
            <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '3rem' }}>
              {formStatus === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>Thank you for contacting Blue West Medical Training College. Our team will respond within one working day. For urgent enquiries, please call our main switchboard.</p>
                  <button onClick={() => { setFormStatus('idle'); setForm(INITIAL_FORM) }} className="btn"><span>Send Another Message</span></button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)', marginBottom: '0.5rem' }}>Send Us a Message</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '2rem' }}>We aim to respond within one working day.</p>

                  {formStatus === 'error' && (
                    <div style={{ background: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.4)', color: '#fca5a5', padding: '0.85rem 1rem', fontSize: '0.82rem', marginBottom: '1.5rem', borderRadius: 'var(--radius)' }}>
                      ⚠ {errorMsg}
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="form-row-resp">
                    {([['First Name', 'first_name', 'text', 'e.g. Kamau'], ['Last Name', 'last_name', 'text', 'e.g. Mwangi']] as const).map(([l, f, t, p]) => (
                      <div key={l}>
                        <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{l} *</label>
                        <input id={`contact-${f}`} type={t} placeholder={p} value={form[f]} onChange={e => set(f, e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1rem', outline: 'none', borderRadius: 'var(--radius)' }} />
                      </div>
                    ))}
                  </div>

                  {([['Email Address *', 'email', 'email', 'you@email.com'], ['Phone Number', 'phone', 'tel', '+254 7XX XXX XXX']] as const).map(([l, f, t, p]) => (
                    <div key={l} style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{l}</label>
                      <input id={`contact-${f}`} type={t} placeholder={p} value={form[f]} onChange={e => set(f, e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1rem', outline: 'none', borderRadius: 'var(--radius)' }} />
                    </div>
                  ))}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Enquiry Type</label>
                    <select id="contact-subject" value={form.subject} onChange={e => set('subject', e.target.value)} style={{ width: '100%', background: 'var(--navy-mid)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1rem', outline: 'none', borderRadius: 'var(--radius)' }}>
                      {['Admissions Enquiry', 'Academic Programmes', 'Fees & Financial Aid', 'Scholarship Application', 'International Admissions', 'Donations & Partnerships', 'Alumni Affairs', 'Research Collaboration', 'Media & Press', 'General Enquiry'].map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Message *</label>
                    <textarea id="contact-message" placeholder="Tell us how we can help you..." value={form.message} onChange={e => set('message', e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-blue)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', padding: '0.85rem 1rem', outline: 'none', borderRadius: 'var(--radius)', resize: 'vertical', minHeight: '140px' }} />
                  </div>

                  <button
                    id="contact-submit"
                    onClick={handleSubmit}
                    disabled={formStatus === 'submitting'}
                    className="btn btn-solid"
                    style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer', opacity: formStatus === 'submitting' ? 0.7 : 1 }}
                  >
                    <span>{formStatus === 'submitting' ? 'Sending…' : 'Send Message'}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.contact-grid-resp{grid-template-columns:1fr!important;gap:3rem!important;}.form-row-resp{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Departments */}
      <section className="section section-mid-bg">
        <div className="container">
          <div className="section-header-centered">
            <div className="tag">Direct Contacts</div>
            <h2 className="section-title">Reach the Right <em>Department</em></h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
            {[
              { dept: 'Admissions Office', email: 'admissions@bluewest.ac.ke', phone: '+254 41 253 0101', hours: 'Mon–Fri 08:00–17:00' },
              { dept: "Registrar's Office", email: 'registrar@bluewest.ac.ke', phone: '+254 41 253 0102', hours: 'Mon–Fri 08:00–16:30' },
              { dept: 'Finance & Fees', email: 'finance@bluewest.ac.ke', phone: '+254 41 253 0103', hours: 'Mon–Fri 08:00–16:00' },
              { dept: 'Student Affairs', email: 'studentaffairs@bluewest.ac.ke', phone: '+254 41 253 0104', hours: 'Mon–Fri 08:00–17:00' },
              { dept: 'Research & Postgraduate', email: 'research@bluewest.ac.ke', phone: '+254 41 253 0105', hours: 'Mon–Fri 08:00–17:00' },
              { dept: 'Donations & Partnerships', email: 'donate@bluewest.ac.ke', phone: '+254 41 253 0199', hours: 'Mon–Fri 09:00–16:00' },
            ].map(d => (
              <div key={d.dept} style={{ background: 'var(--section-bg)', border: '1px solid var(--border-blue)', padding: '1.5rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-blue)'}
              >
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{d.dept}</div>
                <a href={`mailto:${d.email}`} style={{ display: 'block', fontSize: '0.8rem', color: 'var(--sky)', marginBottom: '0.25rem' }}>✉ {d.email}</a>
                <a href={`tel:${d.phone.replace(/\s/g, '')}`} style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text)', marginBottom: '0.25rem' }}>📞 {d.phone}</a>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>🕐 {d.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
