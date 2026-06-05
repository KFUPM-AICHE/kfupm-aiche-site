import React, { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   SCROLL PROGRESS BAR
───────────────────────────────────────────── */
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, width: '100%', height: '3px', background: 'rgba(73,73,73,0.18)' }}>
      <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #FF8737, #ffb347)', transition: 'width 0.1s linear', borderRadius: '0 3px 3px 0', boxShadow: '0 0 8px rgba(255,135,55,0.7)' }} />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [state, setState] = useState('hidden-below');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) setState('visible');
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      setIsAnimating(true);
      if (entry.isIntersecting) {
        setState('visible');
      } else {
        setState(entry.boundingClientRect.top < 0 ? 'hidden-above' : 'hidden-below');
      }
    }, { threshold: 0.05 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const stateStyles = {
    'hidden-below': { opacity: 0, transform: 'translateY(44px)' },
    'visible':      { opacity: 1, transform: 'translateY(0px)' },
    'hidden-above': { opacity: 0, transform: 'translateY(-28px)' },
  };

  return (
    <div
      ref={ref}
      onTransitionEnd={() => setIsAnimating(false)}
      style={{
        transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)',
        willChange: isAnimating ? 'opacity, transform' : 'auto',
        transitionDelay: state === 'visible' ? `${delay}ms` : '0ms',
        ...stateStyles[state],
      }}
    >
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
function Sponsor() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const handleSponsorshipInquiry = (packageName) => {
    const recipient = "aiche@kfupm.edu.sa";
    const subject = `Sponsorship Inquiry - ${packageName} Package`;
    const body = `Dear KFUPM AIChE Student Chapter Team,

I hope this message finds you well.

I am writing to express my interest in the ${packageName} Sponsorship Package for the 2025-2026 term. After reviewing the proposal, I believe this partnership aligns well with our organization's goals and values.

Could you please provide more details on the next steps to formalize this sponsorship agreement?

Looking forward to your response.

Best regards,
[Your Name]
[Your Title / Organization]
[Your Contact Information]`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const sponsorshipPackages = [
    {
      id: "gold",
      name: "Gold",
      price: "25,000.00 SAR",
      priceUSD: "(6,600.91 USD)",
      color: "#D4AF37",
      benefits: [
        { title: "Premium logo placement", description: "Sponsor's logo will be prominently displayed on all event promotional materials, including social media posts and event banners" },
        { title: "Keynote Speaking Opportunity", description: "A prime opportunity for the sponsor to address attendees at one of our events, allowing them to share industry insights, showcase their brand, and engage directly with a significant audience of students and faculty." },
        { title: "VIP Event Access", description: "Receive up to 6 VIP tickets to attend all official chapter events, including major KFUPM events where the chapter participates with a booth or as a partner. Tickets offer premium seating and valuable networking opportunities." },
        { title: "Customized Engagement opportunities", description: "The flexibility for the sponsor to propose and develop a unique engagement activity or event that aligns with their objectives, such as sponsored research challenges, design competitions, or providing a creative way to engage with KFUPM students and faculty" },
        { title: "Global Competition Recognition", description: "Special recognition for the sponsor in the context of global competitions that our students participate and compete internationally in. The sponsor's logo will be on t-shirts, lab coats, scientific posters and promotional materials for our teams" }
      ]
    },
    {
      id: "silver",
      name: "Silver",
      price: "19,500.00 SAR",
      priceUSD: "(5,197.81 USD)",
      color: "#C0C0C0",
      benefits: [
        { title: "Premium logo placement", description: "Sponsor's logo will be prominently displayed on all event promotional materials, including social media posts and event banners" },
        { title: "Social Media Recognition", description: "Regular mentions and acknowledgments on our chapter's social media platforms, leading up to and during events, highlighting the sponsor's support and contributions" },
        { title: "Event Participation", description: "Opportunity for the sponsor to have a speaking slot at one of our smaller events or workshops, allowing them to interact directly with students and establish their presence" }
      ]
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFA837', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .noiseOverlay {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 1; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat; background-size: 200px 200px;
        }

        @keyframes pulseBadge {
          0%   { box-shadow: 0 0 0 0    rgba(255,135,55,0.5); }
          70%  { box-shadow: 0 0 0 10px rgba(255,135,55,0); }
          100% { box-shadow: 0 0 0 0    rgba(255,135,55,0); }
        }
        .pulseDot { animation: pulseBadge 2.4s ease-out infinite; }

        .pkgCard {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .pkgCard:hover { transform: translateY(-12px) scale(1.02); }

        .selectBtn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .selectBtn:hover { transform: scale(1.04); opacity: 0.92; }

        .benefitRow {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .benefitRow:hover {
          background: rgba(255,167,55,0.08) !important;
          transform: translateX(4px);
        }
      `}</style>

      <div className="noiseOverlay" />
      <ScrollProgressBar />

      {/* Top accent bar */}
      <div style={{ height: '6px', background: 'linear-gradient(90deg, #FF8737, #ffb347, #FF8737)', position: 'relative', zIndex: 2 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: 'clamp(32px, 5vw, 80px) clamp(16px, 4vw, 28px)' }}>

        {/* ── HERO HEADER ── */}
        <Reveal>
          <div style={{ marginBottom: '70px' }}>
            {/* Kicker */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#494949', color: '#FFA837', borderRadius: '99px', padding: '6px 18px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Sora', sans-serif", marginBottom: '18px' }}>
              <span className="pulseDot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF8737', display: 'inline-block' }} />
              2025 – 2026
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#494949', fontFamily: "'Sora', sans-serif", margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Sponsorship Proposal
            </h1>
            <div style={{ width: '90px', height: '5px', background: 'linear-gradient(90deg, #FF8737, #ffb347)', borderRadius: '4px', marginBottom: '18px' }} />
            <p style={{ fontSize: '1.05rem', color: '#494949', opacity: 0.75, maxWidth: '480px', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
              KFUPM AIChE Students Chapter
            </p>
          </div>
        </Reveal>

        {/* Divider */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '56px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(73,73,73,0.3))' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#494949', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Sora', sans-serif" }}>Choose your partner</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(73,73,73,0.3), transparent)' }} />
          </div>
        </Reveal>

        {/* ── PACKAGES GRID ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '28px', alignItems: 'start' }}>
          {sponsorshipPackages.map((pkg, index) => (
            <Reveal key={pkg.id} delay={index * 100}>
              <div
                className="pkgCard"
                style={{
                  backgroundColor: '#494949',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: hoveredCard === index
                    ? `0 24px 60px rgba(0,0,0,0.28), 0 0 0 2px ${pkg.color}80`
                    : '0 8px 32px rgba(0,0,0,0.18)',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* ── Card header ── */}
                <div style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}BB)`, padding: '32px 28px 28px', position: 'relative', overflow: 'hidden' }}>
                  {/* Subtle circle decoration */}
                  <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: '-50px', left: '-20px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

                  {/* Package name */}
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: '8px' }}>Package</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '20px' }}>{pkg.name}</div>

                  {/* Price */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: '18px' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: "'Sora', sans-serif", letterSpacing: '-0.01em' }}>{pkg.price}</div>
                    <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', fontFamily: "'DM Sans', sans-serif", marginTop: '3px' }}>{pkg.priceUSD}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', fontFamily: "'DM Sans', sans-serif", marginTop: '4px' }}>*Prices subject to VAT</div>
                  </div>
                </div>

                {/* ── Benefits ── */}
                <div style={{ padding: '28px 28px 0' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFA837', letterSpacing: '1.4px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: '6px' }}>What's included</div>
                  <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF8737, #ffb347)', borderRadius: '3px', marginBottom: '22px' }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {pkg.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="benefitRow"
                        style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '12px 10px', borderRadius: '12px', background: 'transparent' }}
                      >
                        {/* Number bubble */}
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF8737, #ffb347)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 800, flexShrink: 0, fontFamily: "'Sora', sans-serif", boxShadow: '0 3px 10px rgba(255,135,55,0.35)' }}>
                          {i + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFA837', marginBottom: '5px', fontFamily: "'Sora', sans-serif" }}>{benefit.title}</div>
                          <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.65', fontFamily: "'DM Sans', sans-serif" }}>{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── CTA button ── */}
                <div style={{ padding: '24px 28px 28px' }}>
                  <button
                    className="selectBtn"
                    onClick={() => handleSponsorshipInquiry(pkg.name)}
                    style={{
                      width: '100%', padding: '15px 30px', border: 'none',
                      borderRadius: '50px', fontSize: '0.88rem', fontWeight: 800,
                      color: pkg.id === 'gold' ? '#494949' : '#494949',
                      cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1.2px',
                      fontFamily: "'Sora', sans-serif",
                      background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)`,
                      boxShadow: `0 6px 20px ${pkg.color}50`,
                    }}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Sponsor;