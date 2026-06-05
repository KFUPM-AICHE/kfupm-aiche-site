import { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', interest: '', subject: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  const validatePhone = (v) => {
    if (!v.trim()) return true
    const digits = v.replace(/\D/g, '')
    return /^[0-9+\-\s()]{7,20}$/.test(v.trim()) && digits.length >= 7 && digits.length <= 15
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    // Live validation
    if (name === 'email') {
      setErrors((err) => ({ ...err, email: value && !validateEmail(value) ? 'Please enter a valid email address.' : '' }))
    }
    if (name === 'phone') {
      setErrors((err) => ({ ...err, phone: value && !validatePhone(value) ? 'Enter a valid phone number (e.g. +966 512345678).' : '' }))
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!form.email.trim() || !validateEmail(form.email)) newErrors.email = 'Please enter a valid email address.'
    if (form.phone && !validatePhone(form.phone)) newErrors.phone = 'Enter a valid phone number.'
    if (!form.subject.trim()) newErrors.subject = 'Please add a subject.'
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setBusy(true)
    // TODO: replace with your real API call
    // e.g. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 700))
    setBusy(false)
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', interest: '', subject: '', message: '' })
  }

  const inputStyle = (name) => ({
    width: '100%',
    border: 'none',
    borderBottom: `1.5px solid ${errors[name] ? '#e53935' : '#ddd'}`,
    padding: '10px 0',
    fontFamily: 'inherit',
    fontSize: '15px',
    color: '#1a1a1a',
    background: 'transparent',
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    color: '#888',
    fontWeight: 400,
    marginBottom: '6px',
    marginTop: '28px',
  }

  const errStyle = {
    fontSize: '12px',
    color: '#e53935',
    marginTop: '4px',
    minHeight: '16px',
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#fff', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ padding: '18px 60px', fontSize: '13px', color: '#888', borderBottom: '1px solid #f0f0f0' }}>
        <a href="/" style={{ color: '#888', textDecoration: 'none' }}>AIChE KFUPM</a>
        {' '}›{' '}
        <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Contact us</span>
      </div>

      {/* Main two-column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: 0,
        padding: '64px 60px 80px',
        maxWidth: '1100px',
        alignItems: 'start',
      }}>

        {/* ── LEFT: Heading + Form ── */}
        <div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            marginBottom: '18px',
          }}>
            Contact us
          </h1>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.75, maxWidth: '480px', marginBottom: '44px' }}>
            Get in touch and ask us anything — about upcoming events, membership,
            research collaboration, or anything else. We're always happy to hear from you.
          </p>

          <form onSubmit={onSubmit} style={{ maxWidth: '480px' }} noValidate>

            {/* Name + Phone row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
              <div>
                <label style={labelStyle}>Your name *</label>
                <input
                  name="name" type="text" placeholder="Full name"
                  value={form.name} onChange={onChange}
                  style={inputStyle('name')}
                />
                <div style={errStyle}>{errors.name}</div>
              </div>
              <div>
                <label style={labelStyle}>Phone number</label>
                <input
                  name="phone" type="tel" placeholder="+966 5XXXXXXXX"
                  value={form.phone} onChange={onChange}
                  style={inputStyle('phone')}
                />
                <div style={errStyle}>{errors.phone}</div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email address *</label>
              <input
                name="email" type="email" placeholder="you@example.com"
                value={form.email} onChange={onChange}
                style={inputStyle('email')}
              />
              <div style={errStyle}>{errors.email}</div>
            </div>

            {/* Interested In */}
            <div>
              <label style={labelStyle}>Interested in</label>
              <select
                name="interest"
                value={form.interest} onChange={onChange}
                style={{
                  ...inputStyle('interest'),
                  cursor: 'pointer',
                  color: form.interest ? '#1a1a1a' : '#bbb',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                }}
              >
                <option value="" disabled>Select a topic…</option>
                <option value="Membership">Membership</option>
                <option value="Events">Events &amp; Workshops</option>
                <option value="Research">Research Collaboration</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="General">General Inquiry</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label style={labelStyle}>Subject *</label>
              <input
                name="subject" type="text" placeholder="What is this about?"
                value={form.subject} onChange={onChange}
                style={inputStyle('subject')}
              />
              <div style={errStyle}>{errors.subject}</div>
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>How can we help?</label>
              <textarea
                name="message" rows={4} placeholder="Write your message here…"
                value={form.message} onChange={onChange}
                style={{ ...inputStyle('message'), resize: 'none' }}
              />
            </div>

            {/* Submit button */}
            {!submitted && (
              <button
                type="submit"
                disabled={busy}
                style={{
                  marginTop: '28px',
                  width: '100%',
                  padding: '15px 24px',
                  background: busy ? '#f0b060' : '#FFA837',
                  border: 'none',
                  color: '#fff',
                  fontFamily: 'inherit',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: busy ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { if (!busy) e.currentTarget.style.background = '#e8952a' }}
                onMouseLeave={(e) => { if (!busy) e.currentTarget.style.background = '#FFA837' }}
              >
                {busy ? 'Sending…' : 'Send your message'}
              </button>
            )}

            {/* Terms */}
            <p style={{ fontSize: '12px', color: '#999', marginTop: '16px', lineHeight: 1.6 }}>
              By clicking, you agree to our{' '}
              <a href="#" style={{ color: '#999', textDecoration: 'underline' }}>Terms &amp; Conditions</a>
              {' '}and{' '}
              <a href="#" style={{ color: '#999', textDecoration: 'underline' }}>Privacy Policy</a>.
            </p>

            {/* Success banner */}
            {submitted && (
              <div style={{
                marginTop: '28px',
                padding: '22px 24px',
                borderRadius: '10px',
                background: '#f0fdf7',
                border: '1.5px solid #34d399',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: '#10b981', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0, marginTop: '1px',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#065f46', marginBottom: '4px' }}>
                    Message sent!
                  </h4>
                  <p style={{ fontSize: '13px', color: '#059669', lineHeight: 1.5 }}>
                    Thanks for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* ── RIGHT: Info Card + Map ── */}
        <div style={{ paddingLeft: '60px', paddingTop: '8px' }}>

          {/* Info card */}
          <div style={{ background: '#f9f8f6', borderRadius: '14px', padding: '36px 32px' }}>
            <div style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#888', marginBottom: '16px',
            }}>
              Saudi Arabia
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '28px', lineHeight: 1.3 }}>
              Get in touch with<br />AIChE KFUPM
            </h3>

            {[
              { label: 'Address', value: 'KFUPM, Dhahran 31261, Saudi Arabia' },
              {
                label: 'Email address',
                value: <a href="mailto:aiche@kfupm.edu.sa" style={{ color: '#1a1a1a', textDecoration: 'none' }}>aiche@kfupm.edu.sa</a>,
              },
              {
                label: 'Phone',
                value: <a href="tel:+966538220595" style={{ color: '#1a1a1a', textDecoration: 'none' }}>+966 53 822 0595</a>,
              },
            ].map((item, i, arr) => (
              <div key={i} style={{
                padding: '14px 0',
                borderBottom: i < arr.length - 1 ? '1px solid #ebe9e4' : 'none',
              }}>
                <div style={{ fontSize: '12px', color: '#999', marginBottom: '3px' }}>{item.label}</div>
                <div style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ marginTop: '28px' }}>
              <div style={{ fontSize: '12px', color: '#999', marginBottom: '12px' }}>Follow us</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/kfupm_aiche/' },
                  { Icon: FaXTwitter, label: 'X / Twitter', href: 'https://x.com/KFUPMAIChE?lang=ar' },
                  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/kfupm-aiche/?originalSubdomain=sa' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label} href={href} title={label}
                    style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      border: '1.5px solid #e0e0e0', background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#555', fontSize: '15px', textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FFA837'
                      e.currentTarget.style.background = '#fff8f0'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0'
                      e.currentTarget.style.background = '#fff'
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{
            marginTop: '20px', borderRadius: '14px', overflow: 'hidden',
            height: '260px', border: '1px solid #f0f0f0',
          }}>
            <iframe
              title="KFUPM Map"
              src="https://www.google.com/maps?q=KFUPM,Dhahran,SaudiArabia&output=embed"
              width="100%" height="260"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.1) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
