import { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState(null)
    const [busy, setBusy] = useState(false)
    const [focused, setFocused] = useState(null)

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
            if (!phoneRegex.test(form.phone.trim()) || digitsOnly.length !== 12)
                return 'Please enter a valid phone number.'
        }
        if (!form.subject.trim()) return 'Please add a subject.'
        return null
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const err = validate()
        if (err) { setStatus({ ok: false, text: err }); return }
        setBusy(true); setStatus(null)
        await new Promise((r) => setTimeout(r, 600))
        setBusy(false)
        setStatus({ ok: true, text: 'Thanks! We received your message.' })
    }

    const inputStyle = (name) => ({
        width: '100%',
        padding: '18px 0',
        border: 'none',
        borderBottom: `2px solid ${focused === name ? '#FFA837' : 'rgba(255,255,255,0.2)'}`,
        background: 'transparent',
        color: '#fff',
        fontSize: '15px',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box',
    })

    return (
        <div style={{ background: '#111', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

            {/* ── TOP HERO BANNER ── */}
            <div style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                padding: '120px 60px 80px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
                {/* Decorative blobs */}
                <div style={{
                    position: 'absolute', top: '-100px', left: '-100px',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,168,55,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-80px', right: '-80px',
                    width: '350px', height: '350px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,100,0,0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                <p style={{
                    color: '#FFA837', fontSize: '13px', fontWeight: '700',
                    letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px',
                }}>
                    ✦ Let's Connect
                </p>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '800',
                    color: '#fff', margin: '0 0 24px',
                    lineHeight: '1.05', letterSpacing: '-2px',
                }}>
                    Get In <span style={{ color: '#FFA837' }}>Touch</span>
                </h1>
                <p style={{
                    color: 'rgba(255,255,255,0.5)', fontSize: '18px',
                    maxWidth: '500px', margin: '0 auto', lineHeight: '1.8',
                }}>
                    Have a question or want to collaborate? <br />
                    We'd love to hear from you.
                </p>
            </div>

            {/* ── SPLIT CONTENT ── */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '80vh',
            }}>

                {/* LEFT — Info Panel */}
                <div style={{
                    background: '#FFA837',
                    padding: '80px 60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Big watermark text */}
                    <div style={{
                        position: 'absolute', bottom: '-20px', left: '-10px',
                        fontSize: '180px', fontWeight: '900', color: 'rgba(0,0,0,0.06)',
                        lineHeight: '1', pointerEvents: 'none', userSelect: 'none',
                        letterSpacing: '-8px',
                    }}>
                        AIChE
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <p style={{
                            fontSize: '12px', fontWeight: '700', letterSpacing: '4px',
                            textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: '16px',
                        }}>
                            Contact Info
                        </p>
                        <h2 style={{
                            fontSize: '2.8rem', fontWeight: '800', color: '#111',
                            lineHeight: '1.1', marginBottom: '48px', letterSpacing: '-1px',
                        }}>
                            We're always<br />ready to help.
                        </h2>

                        {/* Info items */}
                        {[
                            { icon: <FaMapMarkerAlt />, label: 'Location', value: 'KFUPM, Dhahran, Saudi Arabia' },
                            { icon: <FaPhoneAlt />, label: 'Phone', value: '+1 555-555-5556' },
                            { icon: <FaEnvelope />, label: 'Email', value: 'aiche@kfupm.edu.sa' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '36px' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '50%',
                                    background: 'rgba(0,0,0,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#111', fontSize: '18px', flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: '4px' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#111' }}>
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social links */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: '16px' }}>
                            Follow Us
                        </div>
                        <div style={{ display: 'flex', gap: '14px' }}>
                            {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                                <div key={i} style={{
                                    width: '42px', height: '42px', borderRadius: '50%',
                                    background: 'rgba(0,0,0,0.12)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#111', fontSize: '17px', cursor: 'pointer',
                                    transition: 'background 0.2s',
                                }}>
                                    <Icon />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT — Form Panel */}
                <div style={{
                    background: '#1a1a1a',
                    padding: '80px 60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <p style={{
                        fontSize: '12px', fontWeight: '700', letterSpacing: '4px',
                        textTransform: 'uppercase', color: '#FFA837', marginBottom: '16px',
                    }}>
                        Send a Message
                    </p>
                    <h2 style={{
                        fontSize: '2.4rem', fontWeight: '800', color: '#fff',
                        lineHeight: '1.1', marginBottom: '48px', letterSpacing: '-1px',
                    }}>
                        Let's start a<br />conversation.
                    </h2>

                    <form onSubmit={onSubmit}>
                        {/* Two columns: name + phone */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px', marginBottom: '8px' }}>
                            {[
                                { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your name' },
                                { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+966 5XXXXXXXX' },
                            ].map(({ id, label, type, placeholder }) => (
                                <div key={id}>
                                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>
                                        {label}
                                    </label>
                                    <input
                                        id={id} name={id} type={type} placeholder={placeholder}
                                        value={form[id]} onChange={onChange}
                                        onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                                        style={inputStyle(id)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Email + Subject */}
                        {[
                            { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'yourname@domain.com' },
                            { id: 'subject', label: 'Subject *', type: 'text', placeholder: 'What is this about?' },
                        ].map(({ id, label, type, placeholder }) => (
                            <div key={id} style={{ marginBottom: '8px' }}>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>
                                    {label}
                                </label>
                                <input
                                    id={id} name={id} type={type} placeholder={placeholder}
                                    value={form[id]} onChange={onChange}
                                    onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                                    style={inputStyle(id)}
                                />
                            </div>
                        ))}

                        {/* Message */}
                        <div style={{ marginBottom: '40px' }}>
                            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>
                                Message
                            </label>
                            <textarea
                                id="message" name="message" rows={4}
                                placeholder="Write your message here..."
                                value={form.message} onChange={onChange}
                                onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                                style={{ ...inputStyle('message'), resize: 'none' }}
                            />
                        </div>

                        {/* Submit button — Bili style */}
                        <button
                            type="submit"
                            disabled={busy}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '14px',
                                background: 'transparent',
                                border: '2px solid #FFA837',
                                color: '#FFA837',
                                padding: '18px 40px',
                                borderRadius: '50px',
                                fontSize: '14px', fontWeight: '700',
                                letterSpacing: '2px', textTransform: 'uppercase',
                                cursor: busy ? 'not-allowed' : 'pointer',
                                opacity: busy ? 0.7 : 1,
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#FFA837'
                                e.currentTarget.style.color = '#111'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.color = '#FFA837'
                            }}
                        >
                            {busy ? 'Sending…' : 'Send Message'}
                            <span style={{
                                width: '32px', height: '32px', borderRadius: '50%',
                                background: '#FFA837', color: '#111',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '16px', fontWeight: '900',
                                transition: 'background 0.3s',
                            }}>→</span>
                        </button>

                        {status && (
                            <div style={{
                                marginTop: '20px', padding: '14px 18px', borderRadius: '10px',
                                background: status.ok ? 'rgba(100,200,100,0.1)' : 'rgba(255,80,80,0.1)',
                                border: `1px solid ${status.ok ? 'rgba(100,200,100,0.3)' : 'rgba(255,80,80,0.3)'}`,
                                color: status.ok ? '#7ddf7d' : '#ff8080',
                                fontSize: '14px',
                            }}>
                                {status.text}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* ── MAP STRIP ── */}
            <div style={{ height: '320px', overflow: 'hidden', filter: 'grayscale(0.3) contrast(1.1)' }}>
                <iframe
                    title="KFUPM Map"
                    src="https://www.google.com/maps?q=KFUPM&output=embed"
                    width="100%" height="320"
                    style={{ border: 0, display: 'block' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}