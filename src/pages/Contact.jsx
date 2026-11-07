import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import EmailUsPanel from '../components/contact/EmailUsPanel.jsx'
import { CHAPTER_EMAIL } from '../config/contact.js'

export default function Contact() {
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

        /* ── Contact Panel ── */
        .contact-panel {
          background: linear-gradient(180deg, #ffffff 0%, #fff7ef 100%);
          border: 1px solid rgba(232, 125, 36, 0.12);
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 18px 50px rgba(232, 125, 36, 0.1), 0 2px 10px rgba(17, 17, 17, 0.04);
          position: relative;
          overflow: hidden;
        }

        .contact-panel::before {
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

        .contact-panel::after {
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

          .contact-panel {
            padding: 32px 24px;
            border-radius: 24px;
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

          {/* Left panel. To add a real form later, render it here in place of
              EmailUsPanel, and show success only after the form service confirms it. */}
          <div className="contact-panel">
            <EmailUsPanel />
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
                  <a href={`mailto:${CHAPTER_EMAIL}`}>{CHAPTER_EMAIL}</a>
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