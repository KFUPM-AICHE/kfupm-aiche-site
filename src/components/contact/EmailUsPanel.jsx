import { FaEnvelope } from 'react-icons/fa'
import { CHAPTER_EMAIL } from '../../config/contact.js'

// Opens the visitor's email app. It sends nothing itself, so it never reports
// a message as delivered.
export default function EmailUsPanel() {
  const mailto = `mailto:${CHAPTER_EMAIL}`

  return (
    <div className="email-us">
      <style>{`
        .email-us {
          position: relative;
          z-index: 1;
        }

        .email-us-title {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #1f1f1f;
          margin-bottom: 6px;
        }

        .email-us-text {
          font-size: 0.98rem;
          color: #5f5650;
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 56ch;
        }

        .email-us-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding-block: 14px;
          padding-inline: 32px;
          border-radius: 14px;
          background: linear-gradient(90deg, #FFA837 0%, #FF8737 100%);
          color: #1B1611;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
          box-shadow: 0 14px 30px rgba(255, 135, 55, 0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .email-us-btn:hover {
          color: #1B1611;
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(255, 135, 55, 0.4);
        }

        .email-us-direct {
          margin-top: 20px;
          font-size: 0.92rem;
          color: #5f5650;
          line-height: 1.7;
        }

        .email-us-direct a {
          color: #1f1f1f;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        .email-us-direct a:hover {
          color: #1f1f1f;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .email-us-btn {
            display: flex;
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .email-us-btn,
          .email-us-btn:hover {
            transition: none;
            transform: none;
          }
        }
      `}</style>

      <h2 className="email-us-title">Email us</h2>
      <p className="email-us-text">
        Write to the chapter team about events, membership, research
        collaboration, or sponsorship.
      </p>

      <a href={mailto} className="email-us-btn">
        <FaEnvelope aria-hidden="true" />
        Email Us
      </a>

      <p className="email-us-direct">
        Or write to us directly at <a href={mailto}>{CHAPTER_EMAIL}</a>
      </p>
    </div>
  )
}
