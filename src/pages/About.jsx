import React, { useState, useEffect, useRef } from 'react';
import Lottie from "lottie-react";

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
    <div style={{
      position: 'fixed', top: 0, left: 0, zIndex: 9999,
      width: '100%', height: '3px',
      background: 'rgba(73,73,73,0.18)',
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #FF8737, #ffb347)',
        transition: 'width 0.1s linear',
        borderRadius: '0 3px 3px 0',
        boxShadow: '0 0 8px rgba(255,135,55,0.7)',
      }} />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SCROLL REVEAL WRAPPER — fixed version
   
   Key fixes:
   1. transitionDelay only applies when entering
      (state → 'visible'), never on exit.
   2. Initial state is determined synchronously
      via getBoundingClientRect so above-fold
      elements start fully visible with no flash.
   3. No rootMargin — we observe the real
      viewport boundary so boundingClientRect
      direction checks are always accurate.
   4. willChange only set while animating to
      avoid stacking-context side effects.
───────────────────────────────────────────── */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  // Determine correct initial state synchronously
  // so there's never a flash on first render.
  const getInitialState = () => {
    if (typeof window === 'undefined') return 'hidden-below';
    const node = ref.current;
    if (!node) return 'hidden-below';
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return 'visible';
    if (rect.bottom <= 0) return 'hidden-above';
    return 'hidden-below';
  };

  const [state, setState] = useState('hidden-below');
  const [isAnimating, setIsAnimating] = useState(false);
  const prevState = useRef('hidden-below');

  // Run initial state check after first paint
  useEffect(() => {
    const initial = getInitialState();
    setState(initial);
    prevState.current = initial;
  }, []); // eslint-disable-line

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Coming into view — trigger animation + delay
          setIsAnimating(true);
          setState('visible');
          prevState.current = 'visible';
        } else {
          // Leaving — NO delay, instant style swap so
          // the exit transition starts immediately.
          setIsAnimating(true);
          const next = entry.boundingClientRect.top < 0
            ? 'hidden-above'
            : 'hidden-below';
          setState(next);
          prevState.current = next;
        }
      },
      {
        // No rootMargin — observe exact viewport edges
        // so direction detection is always correct.
        threshold: 0.05,
      }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Stop willChange after transition completes
  const handleTransitionEnd = () => setIsAnimating(false);

  const stateStyles = {
    'hidden-below': styles.revealHideBelow,
    'visible':      styles.revealShow,
    'hidden-above': styles.revealHideAbove,
  };

  const isEntering = state === 'visible';

  return (
    <div
      ref={ref}
      onTransitionEnd={handleTransitionEnd}
      style={{
        ...styles.revealBase,
        // willChange only while animating — avoids
        // stacking context bugs and GPU memory waste
        willChange: isAnimating ? 'opacity, transform' : 'auto',
        ...stateStyles[state],
        // Delay ONLY on enter, never on exit
        transitionDelay: isEntering ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────
   PYRAMID BLOCK
   Both states use gradients → smooth transition,
   no flicker. Box-shadow uses transparent zero
   instead of 'none' → always interpolatable.
───────────────────────────────────────────── */
const PyramidBlock = React.memo(({ s }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="pyramidBlockGlow"
      style={{
        ...styles.pyramidBlock,
        borderColor: hovered ? '#FF8737' : 'transparent',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0px)',
        background: hovered
          ? 'linear-gradient(160deg, #525252 0%, #3a3a3a 100%)'
          : 'linear-gradient(160deg, #494949 0%, #494949 100%)',
        boxShadow: hovered
          ? '0 0 22px rgba(255,135,55,0.35), 0 4px 20px rgba(0,0,0,0.3)'
          : '0 0 0px rgba(255,135,55,0), 0 0px 0px rgba(0,0,0,0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.pyramidTopLine} />
      <AnimatedNumber value={s.number} suffix={s.suffix} decimal={s.decimal} />
      <div style={styles.statLabel}>{s.label}</div>
    </div>
  );
});

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function About() {
  const [activeCommittee, setActiveCommittee] = useState('Events');
  const [alchemyAnim, setAlchemyAnim] = useState(null);

  useEffect(() => {
    fetch("/Alchemy_liquid_FF8737.json")
      .then(r => r.json())
      .then(setAlchemyAnim);
  }, []);

  const stats = [
    { number: 110,  suffix: '+',  label: 'Total Active Members' },
    { number: 120,  suffix: '+',  label: 'Students Represented' },
    { number: 240,  suffix: '+',  label: 'Students Engaged' },
    { number: 410,  suffix: '+',  label: 'Students Benefited' },
    { number: 100,  suffix: '+',  label: 'Students Benefited' },
    { number: 70,   suffix: '+',  label: 'Total Participants' },
    { number: 37,   suffix: '',   label: 'Guest Speakers' },
    { number: 20,   suffix: '',   label: 'Companies' },
    { number: 13,   suffix: '',   label: 'Seminars & Webinars' },
    { number: 9,    suffix: '',   label: 'Competitions' },
    { number: 9,    suffix: '',   label: 'Conferences' },
    { number: 8,    suffix: '',   label: 'Industrial Visits' },
    { number: 6,    suffix: '',   label: 'Special Activities' },
    { number: 107,  suffix: '',   label: 'Marketing Projects' },
    { number: 1.7,  suffix: 'M+', label: 'Total Impressions', decimal: true },
  ];

  const committees = {
    Events: [
      { name: 'Ghada Alghamdi',    role: 'Committee Head',           img: '/Ghada Alghamdi.jpg' },
      { name: 'Faisal Alasmari',   role: 'Industrial Visits Leader', img: '/Male Charecter.jpg' },
      { name: 'Sajidah Alhayez',   role: 'Activities Leader',        img: '/Female Charecter.jpg' },
      { name: 'Fatemah Alramadan', role: 'Seminars Coordinator',     img: '/Female Charecter.jpg' },
    ],
    Marketing: [
      { name: 'Laila Maeshi',       role: 'Committee Head',          img: '/Female Charecter.jpg' },
      { name: 'Mohammed Algadheeb', role: 'Committee Vice Head',     img: '/Mohammed Al-Gadheeb.jpg' },
      { name: 'Ridha Alhussain',    role: 'Social Media Leader',     img: '/Male Charecter.jpg' },
      { name: 'Zainab Alkhater',    role: 'Photographers Leader',    img: '/Female Charecter.jpg' },
      { name: 'Rama Almaqbool',     role: 'Designers Leader',        img: '/Female Charecter.jpg' },
      { name: 'Saba Aljohani',      role: 'Web Developers Leader',   img: '/Female Charecter.jpg' },
    ],
    Outreach: [
      { name: 'Fatimah Almahfoudh', role: 'Committee Head',             img: '/Female Charecter.jpg' },
      { name: 'Zainab Aldukhi',     role: 'ESC & Partnerships Leader',  img: '/Female Charecter.jpg' },
    ],
    Conferences: [
      { name: 'Alqasem Sodagar', role: 'Committee Head',      img: '/AlqasemSodagar.jpg' },
      { name: 'Ali Alyami',      role: 'Committee Vice Head', img: '/Ali Alyami.jpg' },
    ],
    Officers: [
      { name: 'Meshal Alrefaei',  role: 'Sponsorship Specialist', img: '/Meshal Alrefaei.PNG' },
      { name: 'Reema Aldakheeli', role: 'Financial Officer',       img: '/Female Charecter.jpg' },
      { name: 'Hatim Almuatairi', role: 'Secretary',               img: '/Male Charecter.jpg' },
    ],
    Consultants: [
      { name: 'Mohammed Almahasnah', role: 'Consultant', img: '/Mohammed Almahasnah.jpg' },
      { name: 'Abdullah Alomar',     role: 'Consultant', img: '/Male Charecter.jpg' },
      { name: 'Asseel Alzahrani',    role: 'Consultant', img: '/AsseelPic.jpg' },
    ],
    'Executive Officers': [
      { name: 'Reem Almomen', role: 'Executive Officer', img: '/Female Charecter.jpg' },
      { name: 'Anas Hakami',  role: 'Executive Officer', img: '/Male Charecter.jpg' },
    ],
  };

  const heroImages = [
    { src: '/20250925_085858.jpg',                               caption: 'Tradition', floatClass: 'floatA' },
    { src: '/EFF026EF-74B4-46C9-BB3A-861FE86B508B_1_201_a.jpeg', caption: 'Vision',    floatClass: 'floatB' },
    { src: '/IMG_4885.jpg',                                      caption: 'Impact',    floatClass: 'floatC', wide: true },
  ];

  const values = [
    { icon: '⚡', label: 'Excellence' },
    { icon: '💡', label: 'Innovation' },
    { icon: '🤝', label: 'Collaboration' },
    { icon: '📈', label: 'Professional Dev' },
  ];

  return (
    <div style={styles.page}>
      <ScrollProgressBar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3, .heroKicker { font-family: 'Sora', sans-serif !important; }

        @keyframes floatA {
          0%   { transform: translateY(0) rotate(-1deg); }
          50%  { transform: translateY(-10px) rotate(0deg); }
          100% { transform: translateY(0) rotate(-1deg); }
        }
        @keyframes floatB {
          0%   { transform: translateY(0) rotate(1deg); }
          50%  { transform: translateY(-16px) rotate(0deg); }
          100% { transform: translateY(0) rotate(1deg); }
        }
        @keyframes floatC {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .floatA { animation: floatA 4.8s ease-in-out infinite; }
        .floatB { animation: floatB 6.2s ease-in-out infinite; }
        .floatC { animation: floatC 5.4s ease-in-out infinite; }

        .photoCardInner { position: relative; overflow: hidden; }
        .photoCardInner::after {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.32) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
          opacity: 0;
        }
        .photoCardWrap:hover .photoCardInner::after {
          animation: shimmer 0.65s ease forwards;
        }
        @keyframes shimmer {
          0%   { left: -75%; opacity: 1; }
          100% { left: 125%; opacity: 1; }
        }
        .photoCardWrap:hover .photoCardInner img { transform: scale(1.05); }
        .photoCardInner img { transition: transform 0.5s ease; }

        .pyramidBlockGlow {
          transition:
            transform    200ms ease,
            border-color 200ms ease,
            background   200ms ease,
            box-shadow   200ms ease !important;
        }

        .tabBtn { position: relative; overflow: hidden; }
        .tabBtn::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%;
          width: 0; height: 2px;
          background: #FF8737;
          border-radius: 2px;
          transition: width 0.25s ease, left 0.25s ease;
        }
        .tabBtn:hover::after { width: 60%; left: 20%; }

        .valuePill {
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          cursor: default;
        }
        .valuePill:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
        }

        .noiseOverlay {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 1; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
        .scrollCue { animation: bounceDown 1.6s ease-in-out infinite; }

        .countBadge {
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(255,135,55,0.22); color: #FF8737;
          border-radius: 99px; font-size: 0.68rem; font-weight: 800;
          padding: 1px 7px; margin-left: 6px; vertical-align: middle;
          line-height: 1.6; border: 1px solid rgba(255,135,55,0.35);
        }
        .countBadgeActive {
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(73,73,73,0.25); color: #494949;
          border-radius: 99px; font-size: 0.68rem; font-weight: 800;
          padding: 1px 7px; margin-left: 6px; vertical-align: middle;
          line-height: 1.6; border: 1px solid rgba(73,73,73,0.35);
        }

        .leaderRoleBadge {
          display: inline-block; padding: 3px 12px; border-radius: 99px;
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.06em; background: rgba(255,135,55,0.18);
          color: #FF8737; margin-top: 4px; border: 1px solid rgba(255,135,55,0.3);
        }

        @keyframes pulseBadge {
          0%   { box-shadow: 0 0 0 0    rgba(255,135,55,0.5); }
          70%  { box-shadow: 0 0 0 10px rgba(255,135,55,0); }
          100% { box-shadow: 0 0 0 0    rgba(255,135,55,0); }
        }
        .foundBadge { animation: pulseBadge 2.4s ease-out infinite; }

        .gradLine {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(73,73,73,0.28), transparent);
          margin: 60px 0;
        }

        /* ── Mobile responsive ───────────────── */
        @media (max-width: 860px) {
          /* Hero: stack columns */
          [style*="gridTemplateColumns: '1.1fr 1fr'"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          /* Vision row: stack */
          [style*="gridTemplateColumns: '1.1fr 0.9fr'"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          /* Pyramid rows: wrap */
          [style*="flexWrap: 'nowrap'"] {
            flex-wrap: wrap !important;
          }
        }
      `}</style>

      <div className="noiseOverlay" />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={styles.container}>

          {/* ===== HERO ===== */}
          <Reveal>
            <div style={styles.heroWrap}>
              <div style={styles.heroPanel}>
                <div style={styles.heroGrid}>
                  <div style={styles.heroLeft}>
                    <div className="heroKicker" style={styles.heroKickerLeft}>
                      Get To Know Us
                      <span className="foundBadge" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        marginLeft: '16px', background: '#494949', color: '#FFA837',
                        fontSize: '0.78rem', fontWeight: 700, padding: '4px 14px',
                        borderRadius: '99px', verticalAlign: 'middle',
                        border: '1.5px solid #FF8737', fontFamily: "'Sora', sans-serif",
                      }}>
                        ✦ Est. 2013
                      </span>
                    </div>

                    {heroImages.map((img, i) => (
                      <div
                        key={i}
                        className={`${img.floatClass} photoCardWrap`}
                        style={{ ...styles.photoCard, ...(img.wide ? styles.photoWide : {}) }}
                      >
                        <div className="photoCardInner" style={styles.photoInner}>
                          <img src={img.src} alt={img.caption} style={styles.photoImg} />
                        </div>
                        <div style={styles.photoCaption}>
                          <span style={{
                            display: 'inline-block', width: '6px', height: '6px',
                            borderRadius: '50%', background: '#FF8737',
                            marginRight: '6px', verticalAlign: 'middle',
                          }} />
                          {img.caption}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={styles.heroRight}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '7px',
                      background: 'rgba(73,73,73,0.09)', border: '1.5px solid rgba(73,73,73,0.18)',
                      borderRadius: '99px', padding: '5px 14px', fontSize: '0.78rem',
                      fontWeight: 700, color: '#494949', marginBottom: '14px',
                      fontFamily: "'Sora', sans-serif", letterSpacing: '0.04em',
                    }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF8737', display: 'inline-block' }} />
                      AIChE · KFUPM
                    </div>

                    <h1 style={styles.heroTitle}>About Us</h1>
                    <div style={styles.heroUnderline} />
                    <p style={styles.heroText}>
                      The AIChE Students Chapter at KFUPM, founded in 2013, serves as a vital link
                      between students and the chemical engineering industry—empowering future
                      engineers through hands-on experiences, professional development, and
                      meaningful industry exposure.
                    </p>

                    <h2 style={styles.heroSubTitle}>Our Mission</h2>
                    <div style={styles.heroUnderline} />
                    <p style={styles.heroText}>
                      Facilitating networking opportunities with industry professionals, alumni,
                      and academia to bridge the gap between theoretical knowledge and practical
                      application.
                    </p>

                    <div className="scrollCue" style={{
                      marginTop: '38px', display: 'flex', alignItems: 'center',
                      gap: '8px', color: '#494949', fontSize: '0.82rem',
                      fontWeight: 600, opacity: 0.6,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2v12M4 10l4 4 4-4" stroke="#494949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Scroll to explore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal><div className="gradLine" /></Reveal>

          {/* ===== VISION & VALUES ===== */}
          <Reveal>
            <div style={styles.visionRow}>
              <div style={styles.visionText}>
                <h2 style={styles.heroSubTitle}>Our Vision</h2>
                <div style={styles.heroUnderline} />
                <p style={styles.heroText}>
                  Our vision is to be recognized as the leading AIChE student chapter nationally and
                  internationally, known for our contribution to the development of future chemical
                  engineering leaders.
                </p>

                <h2 style={styles.heroSubTitle}>Our Values</h2>
                <div style={styles.heroUnderline} />
                <p style={{ ...styles.heroText, marginBottom: '20px' }}>
                  Excellence, Innovation, Collaboration, and Professional Development drive
                  everything we do as we prepare the next generation of chemical engineers.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
                  {values.map((v, i) => (
                    <div key={i} className="valuePill" style={{
                      display: 'flex', alignItems: 'center', gap: '7px',
                      background: '#494949', color: '#FFA837', borderRadius: '99px',
                      padding: '8px 18px', fontSize: '0.88rem', fontWeight: 700,
                      border: '1.5px solid rgba(255,135,55,0.25)',
                      fontFamily: "'Sora', sans-serif",
                    }}>
                      <span style={{ fontSize: '1rem' }}>{v.icon}</span>
                      {v.label}
                    </div>
                  ))}
                </div>
              </div>

              <div style={styles.visionAnim}>
                <div style={styles.animWrap}>
                  <div style={styles.animCloud} />
                  <div style={styles.animLottie}>
                    {alchemyAnim && <Lottie animationData={alchemyAnim} loop />}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal><div className="gradLine" /></Reveal>

          {/* ===== ACHIEVEMENTS PYRAMID ===== */}
          <Reveal>
            <div style={styles.achievementsSection}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
                <span style={{
                  background: '#494949', color: '#FFA837', borderRadius: '99px',
                  padding: '5px 18px', fontSize: '0.75rem', fontWeight: 800,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  fontFamily: "'Sora', sans-serif",
                }}>
                  2024 – 2025 Academic Year
                </span>
              </div>

              <h2 style={styles.achievementsTitle}>KFUPM-AIChE Achievements</h2>
              <div style={styles.achievementsSubTitle}>for the Academic Year 2024-2025!</div>
              <div style={styles.divider} />

              <div style={styles.pyramidWrap}>
                {buildPyramid(stats).map((row, rowIndex) => (
                  <div key={rowIndex} style={styles.pyramidRow}>
                    {row.map((s, i) => (
                      <PyramidBlock key={`${rowIndex}-${i}`} s={s} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal><div className="gradLine" /></Reveal>

          {/* ===== LEADERSHIP ===== */}
          <Reveal>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '18px',
              margin: '90px 0 40px',
            }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(73,73,73,0.3))' }} />
              <h2 style={{ ...styles.sectionTitle, margin: 0 }}>Our Leadership</h2>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(73,73,73,0.3), transparent)' }} />
            </div>
            <div style={styles.row}>
              <Leader name="Dr. Basim Abussaud" role="Advisor"        img="/Bassim.JPG"             size={170} isAdvisor />
              <Leader name="Fatimah Almakinah"  role="President"      img="/Fatimah Almakinah .jpg" />
              <Leader name="Lama Alharbi"        role="Vice President" img="/Lama Alharbi.png" />
            </div>
          </Reveal>

          <Reveal><div className="gradLine" /></Reveal>

          {/* ===== COMMITTEES ===== */}
          <Reveal>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '18px',
              margin: '90px 0 40px',
            }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(73,73,73,0.3))' }} />
              <h2 style={{ ...styles.sectionTitle, margin: 0 }}>Committees</h2>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(73,73,73,0.3), transparent)' }} />
            </div>

            <div style={styles.buttonRow}>
              {Object.keys(committees).map((key) => {
                const isActive = activeCommittee === key;
                return (
                  <button
                    key={key}
                    className="tabBtn"
                    onClick={() => setActiveCommittee(key)}
                    style={{
                      ...styles.button,
                      ...(isActive ? styles.activeButton : {}),
                      cursor: 'pointer',
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {key}
                    <span className={isActive ? 'countBadgeActive' : 'countBadge'}>
                      {committees[key].length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div style={styles.centerGrid}>
              {committees[activeCommittee].map((m, i) => (
                <Member key={i} {...m} />
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function buildPyramid(items) {
  const sorted = [...items].sort((a, b) => {
    const av = a.decimal ? a.number * 1_000_000 : a.number;
    const bv = b.decimal ? b.number * 1_000_000 : b.number;
    return bv - av;
  });
  const rows = [];
  let i = 0, rowSize = 1;
  while (i < sorted.length) {
    rows.push(sorted.slice(i, i + rowSize));
    i += rowSize;
    rowSize += 1;
  }
  return rows;
}

/* ─────────────────────────────────────────────
   ANIMATED NUMBER
───────────────────────────────────────────── */
const AnimatedNumber = ({ value, suffix = '', decimal = false }) => {
  const [display, setDisplay] = useState(decimal ? '0.0' : 0);
  const ref      = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        const start    = performance.now();
        const duration = 1200;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(decimal ? (value * p).toFixed(1) : Math.floor(value * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.35 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, decimal]);

  return <div ref={ref} style={styles.statNumber}>{display}{suffix}</div>;
};

/* ─────────────────────────────────────────────
   LEADER
───────────────────────────────────────────── */
const Leader = ({ name, role, img, size = 160, isAdvisor = false }) => (
  <HoverCard>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {isAdvisor && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%',
          transform: 'translateX(-50%)',
          background: '#FF8737', borderRadius: '99px',
          padding: '2px 10px', fontSize: '0.65rem', fontWeight: 800,
          color: '#fff', letterSpacing: '0.07em', textTransform: 'uppercase',
          fontFamily: "'Sora', sans-serif", zIndex: 2, whiteSpace: 'nowrap',
        }}>
          ★ Faculty Advisor
        </div>
      )}
      <Avatar size={size} img={img} />
    </div>
    <div style={styles.name}>{name}</div>
    <div className="leaderRoleBadge">{role}</div>
  </HoverCard>
);

/* ─────────────────────────────────────────────
   MEMBER
───────────────────────────────────────────── */
const Member = ({ name, role, img }) => (
  <HoverCard>
    <Avatar size={120} img={img} />
    <div style={styles.name}>{name}</div>
    <div style={styles.role}>{role}</div>
  </HoverCard>
);

/* ─────────────────────────────────────────────
   AVATAR
───────────────────────────────────────────── */
const Avatar = ({ size, img }) => (
  <div style={{ ...styles.avatar, width: size, height: size }}>
    <img src={img} alt="" style={styles.avatarImg} />
  </div>
);

/* ─────────────────────────────────────────────
   HOVER CARD
───────────────────────────────────────────── */
const HoverCard = ({ children }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{ ...styles.card, ...(hover ? styles.cardHover : styles.cardNoHover) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */
const styles = {
  page: {
    backgroundColor: '#FFA837',
    minHeight: '100vh',
    fontFamily: "'DM Sans', sans-serif",
  },
  container: { maxWidth: '1400px', margin: '0 auto', padding: 'clamp(32px, 5vw, 80px) clamp(16px, 4vw, 40px)' },

  heroWrap:  { marginBottom: '120px' },
  heroPanel: { padding: '20px' },
  heroGrid:  { display: 'grid', gridTemplateColumns: 'clamp(1fr, 50%, 1.1fr) 1fr', gap: 'clamp(30px, 6vw, 100px)' },
  heroLeft:  { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px' },
  heroRight: { textAlign: 'left', marginTop: 'clamp(20px, 8vw, 170px)' },

  heroKickerLeft: {
    gridColumn: '1 / span 2',
    fontSize: '2.4rem', fontWeight: 800,
    color: '#494949', fontFamily: "'Sora', sans-serif",
    letterSpacing: '-0.01em',
  },
  heroTitle: {
    fontSize: '2.8rem', color: '#494949',
    fontFamily: "'Sora', sans-serif", fontWeight: 800,
    letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 4px',
  },
  heroSubTitle: {
    fontSize: '2rem', color: '#494949', marginTop: '36px',
    fontFamily: "'Sora', sans-serif", fontWeight: 700, letterSpacing: '-0.01em',
  },
  heroUnderline: {
    width: '80px', height: '4px',
    background: 'linear-gradient(90deg, #FF8737, #ffb347)',
    margin: '10px 0 18px', borderRadius: '4px',
  },
  heroText: {
    fontSize: '1.05rem', color: '#494949', lineHeight: 1.85,
    maxWidth: '520px', fontFamily: "'DM Sans', sans-serif",
  },

  photoCard: {
    background: '#F7F7F7', borderRadius: '16px',
    padding: '12px', boxShadow: '0 4px 18px rgba(0,0,0,0.10)',
  },
  photoInner:   { height: '220px', overflow: 'hidden', borderRadius: '10px' },
  photoImg:     { width: '100%', height: '100%', objectFit: 'cover' },
  photoCaption: {
    marginTop: '8px', fontStyle: 'italic', color: '#494949',
    fontSize: '0.88rem', fontWeight: 500,
    display: 'flex', alignItems: 'center',
  },
  photoWide: { gridColumn: '1 / span 2' },

  visionRow: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(30px, 6vw, 100px)', marginBottom: '140px', alignItems: 'center',
  },
  visionText: { paddingLeft: 'clamp(0px, 4vw, 90px)' },
  visionAnim: {
    maxWidth: '420px', marginTop: '-20px',
    marginLeft: '-110px', justifySelf: 'center',
  },
  animWrap:  { position: 'relative', width: '100%' },
  animCloud: {
  position: 'absolute',
  inset: '-28px -34px -28px -34px',
  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 75%)',
  borderRadius: '999px',
  // No filter: blur needed — the radial gradient already soft-edges itself
  zIndex: 0,
},
  animLottie: { position: 'relative', zIndex: 1 },

  achievementsSection: { backgroundColor: 'transparent', padding: '90px 40px' },
  achievementsTitle: {
    fontSize: '2.6rem', color: '#494949', textAlign: 'center',
    fontFamily: "'Sora', sans-serif", fontWeight: 800, letterSpacing: '-0.02em',
  },
  achievementsSubTitle: {
    fontSize: '1.15rem', fontWeight: 700, color: '#494949',
    textAlign: 'center', marginTop: '8px',
    fontFamily: "'DM Sans', sans-serif", opacity: 0.72,
  },
  divider: {
    width: '90px', height: '4px',
    background: 'linear-gradient(90deg, #FF8737, #ffb347)',
    margin: '20px auto 46px', borderRadius: '4px',
  },

  pyramidWrap: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: '18px',
  },
  pyramidRow: {
    display: 'flex', justifyContent: 'center',
    gap: '18px', flexWrap: 'wrap', width: '100%',
  },
  pyramidBlock: {
    borderRadius: '16px', padding: '18px 16px',
    minWidth: '180px', maxWidth: '220px',
    textAlign: 'center', border: '2px solid transparent',
    cursor: 'default',
  },
  pyramidTopLine: {
    width: '46px', height: '3px',
    background: 'linear-gradient(90deg, #FF8737, #ffb347)',
    margin: '0 auto 12px', borderRadius: '3px',
  },

  statNumber: {
    fontSize: '2.7rem', fontWeight: 900, color: '#FFA837',
    letterSpacing: '0.5px', fontFamily: "'Sora', sans-serif",
  },
  statLabel: {
    fontSize: '0.95rem', fontWeight: 700, color: '#FFA837',
    marginTop: '6px', fontFamily: "'DM Sans', sans-serif", opacity: 0.85,
  },

  sectionTitle: {
    fontSize: '2.4rem', color: '#494949', margin: '90px 0 40px',
    textAlign: 'center', fontFamily: "'Sora', sans-serif",
    fontWeight: 800, letterSpacing: '-0.02em',
  },
  row:        { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' },
  centerGrid: {
    display: 'flex', justifyContent: 'center',
    gap: '34px', flexWrap: 'wrap', marginTop: '40px',
  },

  card: {
    backgroundColor: '#3f3f3f', padding: '26px', width: '230px',
    borderRadius: '16px', border: '2px solid transparent', outline: 'none',
    transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
  },
  cardHover: {
    transform: 'translateY(-8px)', borderColor: '#FF8737', outline: 'none',
    boxShadow: '0 12px 32px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,135,55,0.25)',
  },
  cardNoHover: { borderColor: 'transparent', outline: 'none', boxShadow: 'none' },

  name: {
    marginTop: '10px', fontWeight: 700, color: '#FFA837',
    textAlign: 'center', fontFamily: "'Sora', sans-serif", fontSize: '0.95rem',
  },
  role: {
    fontSize: '0.75rem', textTransform: 'uppercase', color: '#FFA837',
    textAlign: 'center', opacity: 0.65, marginTop: '4px',
    letterSpacing: '0.05em', fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
  },
  avatar: {
    borderRadius: '50%', overflow: 'hidden',
    border: '2.5px solid #FF8737', margin: '0 auto 12px',
    boxShadow: '0 0 0 4px rgba(255,135,55,0.15)',
  },
  avatarImg: { width: '100%', height: '100%', objectFit: 'cover' },

  buttonRow: { display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' },
  button: {
    background: '#494949', color: '#FFA837',
    border: '2px solid transparent', padding: '12px 26px',
    borderRadius: '50px', fontWeight: 800, fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background 180ms ease, color 180ms ease, transform 120ms ease',
    fontFamily: "'Sora', sans-serif",
    display: 'inline-flex', alignItems: 'center',
  },
  activeButton: {
    background: '#FF8737', color: '#494949',
    border: '2px solid #FF8737',
    boxShadow: '0 4px 16px rgba(255,135,55,0.35)',
  },

  /* ── Reveal animation states ── */
  revealBase: {
    // duration + easing — spring-like deceleration
    transition: 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
    // delay is applied inline so it can be 0 on exit, non-zero on enter
  },
  revealHideBelow: {
    opacity: 0,
    transform: 'translateY(44px)',
  },
  revealHideAbove: {
    opacity: 0,
    transform: 'translateY(-28px)',
  },
  revealShow: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
};