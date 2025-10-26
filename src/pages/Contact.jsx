/*function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to our team anytime.</p>
    </div>
  );
}

export default Contact; */

import { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.'
    if (form.phone.trim()) {
    const digitsOnly = form.phone.replace(/\D/g, '')
    const phoneRegex = /^[0-9+\-\s()]{7,20}$/
    if (!phoneRegex.test(form.phone.trim()) || (digitsOnly.length != 12))
      return 'Please enter a valid phone number.'
  }
    if (!form.subject.trim()) return 'Please add a subject.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setStatus({ ok: false, text: err })
      return
    }
    setBusy(true)
    setStatus(null)
    // Frontend-only demo: simulate a send
    await new Promise((r) => setTimeout(r, 600))
    setBusy(false)
    setStatus({ ok: true, text: 'Thanks! We received your message.' })
    // TODO: later wire to Formspree/EmailJS/your API
  }
  

  return (
    <div style={wrap}>
      <h1>Contact Us</h1>
      <p style={lead}>
        Contact us about anything related to our chapter. <br />
        We'll do our best to get back to you as soon as possible.
      </p>



      <div style={grid}>
        <form onSubmit={onSubmit} style={card}>
          <div style={row}>
            <label style={label} htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={onChange}
              required
              style={input}
            />
          </div>

          <div style={row}>
            <label style={label} htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="+966 5XXXXXXXX"
              value={form.phone}
              onChange={onChange}
              style={input}
            />
          </div>

          <div style={row}>
            <label style={label} htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. yourname@kfupm.edu.sa"
              value={form.email}
              onChange={onChange}
              required
              style={input}
            />
          </div>

          <div style={row}>
            <label style={label} htmlFor="subject">Subject *</label>
            <input
              id="subject"
              name="subject"
              placeholder="Type your subject here"
              value={form.subject}
              onChange={onChange}
              required
              style={input}
            />
          </div>

          <div style={row}>
            <label style={label} htmlFor="message">Question *</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your question here..."
              value={form.message}
              onChange={onChange}
              required
              style={textarea}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <button type="submit" disabled={busy} style={{ ...btn, opacity: busy ? 0.8 : 1 }}>
            {busy ? 'Sending…' : 'Submit'}
          </button>
        </div>

          {status && (
            <div
              role="status"
              style={{
                marginTop: 12,
                padding: '10px 12px',
                borderRadius: 10,
                background: status.ok ? '#e8f5e9' : '#fdecea',
                color: status.ok ? '#1b5e20' : '#b71c1c',
                fontSize: 14,
              }}
            >
              {status.text}
            </div>
          )}
        </form>

        <aside style={{ ...card, padding: 16, textAlign: 'left', marginLeft: 200 }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 28 }}>KFUPM AIChE</div>

            <div style={{ color: '#fff', marginTop: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaMapMarkerAlt color = '#fff' />
              <span>KFUPM, Dhahran, Saudi Arabia</span>
              </div>

            <div style={{ color: '#fff', marginTop: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaPhoneAlt color = '#fff' />
              <span>+1 555-555-5556</span>
              </div>

            <div style={{ color: '#fff', marginTop: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
      <FaEnvelope color="#fff" />
      <a
        href="mailto:aiche@kfupm.edu.sa"
        style={{ color: '#FFA837', textDecoration: 'none' }}
      >
        aiche@kfupm.edu.sa
      </a>
    </div>
  </div>

          <div style={{ overflow: 'hidden', borderRadius: 12 }}>
            <iframe
              title="KFUPM Map"
              src="https://www.google.com/maps?q=KFUPM&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </div>
  )
}

/* ------- inline styles (simple, no CSS deps) ------- */
const wrap = { maxWidth: 2000, margin: '0 auto', padding: '32px 16px', background: 'transparent' }
const h1 = { fontSize: 32, margin: '0 0 8px' }
const lead = { color: '#fff', marginBottom: 20, textAlign: 'left', marginLeft: 20 }
const grid = { display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48 }
const card = { border: 'none', borderRadius: 12, padding: 20, background: 'transparent' }
const row = { marginBottom: 12 }
const label = { display: 'block', fontSize: 14, color: '#fff', marginBottom: 6, fontWeight: 600 }
const input = { width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: 10, outline: 'none', background: 'transparent' }
const textarea = { ...input, resize: 'vertical' }
const btn = {
  background: '#FF8737',
  color: '#494949',
  border: 'none',
  padding: '10px 16px',
  borderRadius: 10,
  cursor: 'pointer',
  fontWeight: 500
}

