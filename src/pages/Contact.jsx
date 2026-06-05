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
    await new Promise((r) => setTimeout(r, 700))
    setBusy(false)
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', interest: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          width: 100%;
          background: #F0A940;
          color: #1f1f1f;
          overflow-x: hidden;
          font-family: 'Segoe UI', system-ui, sans-serif;
          min-height: 100vh;
        }

        .contact-shell {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* ── Breadcrumb ── */
        .breadcrumb-bar {
          padding: 18px 0;
          border-bottom: 1px solid rgba(232, 125, 36, 0.12);
        }

        .breadcrumb-bar a {
          color: #9a8e88;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
        }

        .breadcrumb-bar a:hover { color: #e87d24; }

        .breadcrumb-bar span {
          color: #6a625d;
          font-size: 13px;
          font-weight: 600;
        }

        .breadcrumb-sep {
          color: #c9bfb9;
          margin: 0 8px;
          font-size: 13px;
        }

        /* ── Page Hero ── */
        .contact-hero {
          padding: 80px 0 64px;
          position: relative;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -60px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 125, 36, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border-radius: 999px;
          background: rgba(232, 125, 36, 0.12);
          color: #de7622;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 18px;
          border: 1px solid rgba(232, 125, 36, 0.14);
        }

        .contact-title {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #1f1f1f;
          margin-bottom: 16px;
          max-width: 640px;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #6a625d;
          line-height: 1.85;
          max-width: 560px;
        }

        /* ── Main Grid ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 48px;
          padding-bottom: 100px;
          align-items: start;
        }

        /* ── Form Card ── */
        .form-card {
          background: linear-gradient(180deg, #ffffff 0%, #fff7ef 100%);
          border: 1px solid rgba(232, 125, 36, 0.12);
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 18px 50px rgba(232, 125, 36, 0.1), 0 2px 10px rgba(17, 17, 17, 0.04);
          position: relative;
          overflow: hidden;
        }

        .form-card::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 125, 36, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .form-card::after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 191, 140, 0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        .form-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #1f1f1f;
          margin-bottom: 6px;
        }

        .form-card-sub {
          font-size: 0.92rem;
          color: #9a8e88;
          margin-bottom: 36px;
          line-height: 1.7;
        }

        /* ── Form Fields ── */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 28px;
        }

        .field-group {
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .field-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9a8e88;
          margin-bottom: 8px;
          margin-top: 26px;
        }

        .field-input,
        .field-select,
        .field-textarea {
          width: 100%;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.7);
          border: 1.5px solid rgba(232, 125, 36, 0.18);
          border-radius: 14px;
          padding: 13px 16px;
          font-family: inherit;
          font-size: 14.5px;
          color: #1f1f1f;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          backdrop-filter: blur(4px);
        }

        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          border-color: #e87d24;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(232, 125, 36, 0.1);
        }

        .field-input.has-error,
        .field-select.has-error {
          border-color: #e53935;
          box-shadow: 0 0 0 4px rgba(229, 57, 53, 0.08);
        }

        .field-input::placeholder,
        .field-textarea::placeholder {
          color: #c4bab5;
        }

        .field-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239a8e88' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          cursor: pointer;
        }

        .field-textarea {
          resize: none;
          min-height: 120px;
        }

        .field-error {
          font-size: 11.5px;
          color: #e53935;
          margin-top: 5px;
          min-height: 16px;
          font-weight: 500;
        }

        /* ── Submit Button ── */
        .submit-btn {
          margin-top: 32px;
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, #ff9c52 0%, #e87d24 100%);
          border: none;
          color: white;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          border-radius: 14px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.2s;
          box-shadow: 0 14px 30px rgba(232, 125, 36, 0.35);
          letter-spacing: 0.02em;
          position: relative;
          z-index: 1;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(232, 125, 36, 0.42);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-terms {
          font-size: 12px;
          color: #b0a8a3;
          margin-top: 14px;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .form-terms a {
          color: #b0a8a3;
          text-decoration: underline;
        }

        /* ── Success Banner ── */
        .success-banner {
          margin-top: 28px;
          padding: 22px 24px;
          border-radius: 18px;
          background: linear-gradient(135deg, #f0fdf7 0%, #ecfdf5 100%);
          border: 1.5px solid #34d399;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          position: relative;
          z-index: 1;
        }

        .success-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Right Column ── */
        .right-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── Info Card ── */
        .info-card {
          background: linear-gradient(180deg, #ffffff 0%, #fff7ef 100%);
          border: 1px solid rgba(232, 125, 36, 0.12);
          border-radius: 32px;
          padding: 36px 32px;
          box-shadow: 0 18px 50px rgba(232, 125, 36, 0.1), 0 2px 10px rgba(17, 17, 17, 0.04);
          position: relative;
          overflow: hidden;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 125, 36, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(232, 125, 36, 0.12);
          color: #de7622;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 16px;
          border: 1px solid rgba(232, 125, 36, 0.14);
        }

        .info-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #1f1f1f;
          line-height: 1.3;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .info-row {
          padding: 14px 0;
          border-bottom: 1px solid rgba(232, 125, 36, 0.1);
          position: relative;
          z-index: 1;
        }

        .info-row:last-of-type {
          border-bottom: none;
        }

        .info-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b0a8a3;
          margin-bottom: 4px;
        }

        .info-value {
          font-size: 14px;
          color: #1f1f1f;
          font-weight: 600;
        }

        .info-value a {
          color: #1f1f1f;
          text-decoration: none;
          transition: color 0.2s;
        }

        .info-value a:hover {
          color: #e87d24;
        }

        /* ── Socials ── */
        .socials-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b0a8a3;
          margin-top: 24px;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .socials-row {
          display: flex;
          gap: 10px;
          position: relative;
          z-index: 1;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          border: 1.5px solid rgba(232, 125, 36, 0.16);
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9a8e88;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(232, 125, 36, 0.06);
        }

        .social-btn:hover {
          border-color: #e87d24;
          background: rgba(232, 125, 36, 0.1);
          color: #e87d24;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(232, 125, 36, 0.18);
        }

        /* ── Map Card ── */
        .map-card {
          border-radius: 28px;
          overflow: hidden;
          height: 240px;
          border: 1px solid rgba(232, 125, 36, 0.1);
          box-shadow: 0 14px 36px rgba(232, 125, 36, 0.1);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .right-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .map-card {
            grid-column: 1 / -1;
          }

          .quick-links-card {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .contact-hero {
            padding: 60px 0 48px;
          }

          .form-card {
            padding: 32px 24px;
            border-radius: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .right-col {
            grid-template-columns: 1fr;
          }

          .map-card,
          .quick-links-card {
            grid-column: auto;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="contact-shell">
          <a href="/">AIChE KFUPM</a>
          <span className="breadcrumb-sep">›</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-shell">
          <div className="eyebrow">Get in Touch</div>
          <h1 className="contact-title">We'd love to hear from you.</h1>
          <p className="contact-subtitle">
            Ask us anything — about upcoming events, membership, research collaboration, or sponsorship opportunities. We're always happy to connect.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="contact-shell">
        <div className="contact-grid">

          {/* ── Left: Form ── */}
          <div className="form-card">
            <h2 className="form-card-title">Send us a message</h2>
            <p className="form-card-sub">Fill in the details below and we'll respond as soon as possible.</p>

            <form onSubmit={onSubmit} noValidate>

              <div className="form-row">
                <div className="field-group">
                  <label className="field-label">Your Name *</label>
                  <input
                    name="name" type="text" placeholder="Full name"
                    value={form.name} onChange={onChange}
                    className={`field-input${errors.name ? ' has-error' : ''}`}
                  />
                  <div className="field-error">{errors.name}</div>
                </div>
                <div className="field-group">
                  <label className="field-label">Phone Number</label>
                  <input
                    name="phone" type="tel" placeholder="+966 5XXXXXXXX"
                    value={form.phone} onChange={onChange}
                    className={`field-input${errors.phone ? ' has-error' : ''}`}
                  />
                  <div className="field-error">{errors.phone}</div>
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Email Address *</label>
                <input
                  name="email" type="email" placeholder="you@example.com"
                  value={form.email} onChange={onChange}
                  className={`field-input${errors.email ? ' has-error' : ''}`}
                />
                <div className="field-error">{errors.email}</div>
              </div>

              <div className="field-group">
                <label className="field-label">Interested In</label>
                <select
                  name="interest"
                  value={form.interest} onChange={onChange}
                  className="field-select"
                  style={{ color: form.interest ? '#1f1f1f' : '#c4bab5' }}
                >
                  <option value="" disabled>Select a topic…</option>
                  <option value="Membership">Membership</option>
                  <option value="Events">Events &amp; Workshops</option>
                  <option value="Research">Research Collaboration</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>

              <div className="field-group">
                <label className="field-label">Subject *</label>
                <input
                  name="subject" type="text" placeholder="What is this about?"
                  value={form.subject} onChange={onChange}
                  className={`field-input${errors.subject ? ' has-error' : ''}`}
                />
                <div className="field-error">{errors.subject}</div>
              </div>

              <div className="field-group">
                <label className="field-label">How Can We Help?</label>
                <textarea
                  name="message" rows={4} placeholder="Write your message here…"
                  value={form.message} onChange={onChange}
                  className="field-textarea"
                />
              </div>

              {!submitted && (
                <button type="submit" disabled={busy} className="submit-btn">
                  {busy ? 'Sending…' : 'Send Your Message →'}
                </button>
              )}

              <p className="form-terms">
                By clicking, you agree to our{' '}
                <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>.
              </p>

              {submitted && (
                <div className="success-banner">
                  <div className="success-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#065f46', marginBottom: '4px' }}>
                      Message sent!
                    </h4>
                    <p style={{ fontSize: '13px', color: '#059669', lineHeight: 1.5, margin: 0 }}>
                      Thanks for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* ── Right Column ── */}
          <div className="right-col">

            {/* Info Card */}
            <div className="info-card">
              <div className="info-badge">Saudi Arabia</div>
              <h3 className="info-card-title">
                Get in touch with<br />AIChE KFUPM
              </h3>

              <div className="info-row">
                <div className="info-label">Address</div>
                <div className="info-value">KFUPM, Dhahran 31261, Saudi Arabia</div>
              </div>
              <div className="info-row">
                <div className="info-label">Email Address</div>
                <div className="info-value">
                  <a href="mailto:aiche@kfupm.edu.sa">aiche@kfupm.edu.sa</a>
                </div>
              </div>
              <div className="info-row">
                <div className="info-label">Phone</div>
                <div className="info-value">
                  <a href="tel:+966538220595">+966 53 822 0595</a>
                </div>
              </div>

              <div className="socials-label">Follow Us</div>
              <div className="socials-row">
                {[
                  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/kfupm_aiche/' },
                  { Icon: FaXTwitter, label: 'X / Twitter', href: 'https://x.com/KFUPMAIChE?lang=ar' },
                  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/kfupm-aiche/?originalSubdomain=sa' },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} title={label} className="social-btn">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="map-card">
              <iframe
                title="KFUPM Map"
                src="https://www.google.com/maps?q=KFUPM,Dhahran,SaudiArabia&output=embed"
                width="100%" height="240"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}