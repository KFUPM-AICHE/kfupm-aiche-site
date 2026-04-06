import React, { useState, useEffect, useRef } from 'react';
import Lottie from "lottie-react";

export default function About() {
  const [activeCommittee, setActiveCommittee] = useState('Events');
  const [alchemyAnim, setAlchemyAnim] = useState(null);
  const [hovered, setHovered] = useState(null);
  

  useEffect(() => {
    fetch("/Alchemy_liquid_FF8737.json")
      .then(r => r.json())
      .then(setAlchemyAnim);
  }, []);

  const stats = [
    { number: 110, suffix: '+', label: 'Total Active Members' },
    { number: 120, suffix: '+', label: 'Students Represented' },
    { number: 240, suffix: '+', label: 'Students Engaged' },
    { number: 410, suffix: '+', label: 'Students Benefited' },
    { number: 100, suffix: '+', label: 'Students Benefited' },
    { number: 70, suffix: '+', label: 'Total Participants' },
    { number: 37, suffix: '', label: 'Guest Speakers' },
    { number: 20, suffix: '', label: 'Companies' },
    { number: 13, suffix: '', label: 'Seminars & Webinars' },
    { number: 9, suffix: '', label: 'Competitions' },
    { number: 9, suffix: '', label: 'Conferences' },
    { number: 8, suffix: '', label: 'Industrial Visits' },
    { number: 6, suffix: '', label: 'Special Activities' },
    { number: 107, suffix: '', label: 'Marketing Projects' },
    { number: 1.7, suffix: 'M+', label: 'Total Impressions', decimal: true },
  ];

  const committees = {
    Events: [
      { name: 'Ghada Alghamdi', role: 'Committee Head', img: '/Ghada Alghamdi.jpg' },
      { name: 'Rawan Batwa', role: 'Industrial Visits Leader', img: '/Female Charecter.jpg' },
      { name: 'Reda Aleid', role: 'Activities Leader', img: '/Male Charecter.jpg' },
      { name: 'Fatemah Alramadan', role: 'Seminars Coordinator', img: '/Female Charecter.jpg' },
    ],
    Marketing: [
      { name: 'Laila Maeshi', role: 'Committee Head', img: '/Female Charecter.jpg' },
      { name: 'Mohammed Algadheeb', role: 'Committee Vice Head', img: '/Mohammed Al-Gadheeb.jpg' },
      { name: 'Ridha Alhussain', role: 'Social Media Leader', img: '/Male Charecter.jpg' },
      { name: 'Zainab Alkhater', role: 'Photographers Leader', img: '/Female Charecter.jpg' },
      { name: 'Rama Almaqbool', role: 'Designers Leader', img: '/Female Charecter.jpg' },
      { name: 'Saba Aljohani', role: 'Web Developers Leader', img: '/Female Charecter.jpg' },
    ],
    Outreach: [
      { name: 'Fatimah Almahfoudh', role: 'Committee Head', img: '/Female Charecter.jpg' },
      { name: 'Zainab Aldukhi', role: 'ESC & Partnerships Leader', img: '/Female Charecter.jpg' },
    ],
    Conferences: [
      { name: 'Alqasem Sodagar', role: 'Committee Head', img: '/AlqasemSodagar.jpg' },
      { name: 'Ali Alyami', role: 'Committee Vice Head', img: '/Ali Alyami.jpg' },
    ],
    Officers: [
      { name: 'Meshal Alrefaei', role: 'Sponsorship Specialist', img: '/Meshal Alrefaei.PNG' },
      { name: 'Reema Aldakheeli', role: 'Financial Officer', img: '/Female Charecter.jpg' },
      { name: 'Hatim Almuatairi', role: 'Secretary', img: '/Male Charecter.jpg' },
    ],
    Consultants: [
      { name: 'Mohammed Almahasnah', role: 'Consultant', img: '/Mohammed Almahasnah.jpg' },
      { name: 'Abdullah Alomar', role: 'Consultant', img: '/Male Charecter.jpg' },
      { name: 'Asseel Alzahrani', role: 'Consultant', img: '/AsseelPic.jpg' },
    ],
    'Executive Officers': [
      { name: 'Reem Almomen', role: 'Executive Officer', img: '/Female Charecter.jpg' },
      { name: 'Anas Hakami', role: 'Executive Officer', img: '/Male Charecter.jpg' },
    ],
  };

  const heroImages = [
    { src: '/20250925_085858.jpg', caption: 'Festival', floatClass: 'floatA' },
    { src: '/EFF026EF-74B4-46C9-BB3A-861FE86B508B_1_201_a.jpeg', caption: 'Global Flags', floatClass: 'floatB' },
    { src: '/IMG_4885.jpg', caption: 'Cultural Heritage', floatClass: 'floatC', wide: true },
  ];

  return (
    <div style={styles.page}>
      <style>{`
  @keyframes floatA {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  @keyframes floatB {
    0% { transform: translateY(0); }
    50% { transform: translateY(-16px); }
    100% { transform: translateY(0); }
  }

  @keyframes floatC {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }

  .floatA {
    animation: floatA 4.8s ease-in-out infinite;
  }

  .floatB {
    animation: floatB 6.2s ease-in-out infinite;
  }

  .floatC {
    animation: floatC 5.4s ease-in-out infinite;
  }
`}</style>
      <div style={styles.container}>

        {/* ===== HERO ===== */}
        <Reveal>
          <div style={styles.heroWrap}>
            <div style={styles.heroPanel}>
              <div style={styles.heroGrid}>
                <div style={styles.heroLeft}>
                  <div style={styles.heroKickerLeft}>Get To Know Us</div>
                  {heroImages.map((img, i) => (
                    <div key={i} className={img.floatClass} style={{ ...styles.photoCard, ...(img.wide ? styles.photoWide : {}) }}>
                      <div style={styles.photoInner}>
                        <img src={img.src} alt={img.caption} style={styles.photoImg} />
                      </div>
                      <div style={styles.photoCaption}>{img.caption}</div>
                    </div>
                  ))}
                </div>

                <div style={styles.heroRight}>
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
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===== VISION & VALUES ===== */}
        <Reveal>
          <div style={styles.visionRow}>
            <div style={styles.visionText}>
              <h2 style={styles.heroSubTitle}>Our Vision</h2>
              <div style={styles.heroUnderline} />
              <p style={styles.heroText}>
                Our vision is to be recognized as the leading AIChE student chapter nationally and internationally, known for our contribution to the development of future chemical engineering leaders.
              </p>

              <h2 style={styles.heroSubTitle}>Our Values</h2>
              <div style={styles.heroUnderline} />
              <p style={styles.heroText}>
                Excellence, Innovation, Collaboration, and Professional Development drive everything we do as we prepare the next generation of chemical engineers.
              </p>
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

        {/* ===== ACHIEVEMENTS (ACTUAL PYRAMID) ===== */}
        <Reveal>
          <div style={styles.achievementsSection}>
            <h2 style={styles.achievementsTitle}>KFUPM-AIChE Achievements</h2>
            <div style={styles.achievementsSubTitle}>for the Academic Year 2024-2025!</div>
            <div style={styles.divider} />

            <div style={styles.pyramidWrap}>
  {buildPyramid(stats).map((row, rowIndex) => (
    <Reveal key={rowIndex}>
      <div style={styles.pyramidRow}>
        {row.map((s, i) => (
          <div
  key={i}
  style={{
  ...styles.pyramidBlock,
  borderColor:
    hovered === `${rowIndex}-${i}` ? '#FF8737' : 'transparent',
  transform:
    hovered === `${rowIndex}-${i}` ? 'translateY(-4px)' : 'none',
}}
  onMouseEnter={() => setHovered(`${rowIndex}-${i}`)}
onMouseLeave={() => setHovered(null)}
onMouseDown={(e) => e.preventDefault()}
>
            <div style={styles.pyramidTopLine} />
            <AnimatedNumber
              value={s.number}
              suffix={s.suffix}
              decimal={s.decimal}
            />
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  ))}
</div>
          </div>
        </Reveal>

        {/* ===== LEADERSHIP ===== */}
        <Reveal>
          <h2 style={styles.sectionTitle}>Our Leadership</h2>
          <div style={styles.row}>
            <Leader name="Dr. Basim Abussaud" role="Advisor" img="/Bassim.JPG" size={170} />
            <Leader name="Fatimah Almakinah" role="President" img="/Fatimah Almakinah .jpg" />
            <Leader name="Lama Alharbi" role="Vice President" img="/Lama Alharbi.png" />
          </div>
        </Reveal>

        {/* ===== COMMITTEES / MEMBERS ===== */}
        <Reveal>
          <h2 style={styles.sectionTitle}>Committees</h2>

          <div style={styles.buttonRow}>
            {Object.keys(committees).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCommittee(key)}
                style={{ ...styles.button, ...(activeCommittee === key ? styles.activeButton : {}) }}
              >
                {key}
              </button>
            ))}
          </div>

          <div style={styles.centerGrid}>
            {committees[activeCommittee].map((m, i) => (
              <Member key={i} {...m} />
            ))}
          </div>
        </Reveal>

      </div>
    </div>
  );
}

/* ===== Helpers ===== */
function buildPyramid(items) {
  const sorted = [...items].sort((a, b) => {
    const av = a.decimal ? a.number * 1_000_000 : a.number;
    const bv = b.decimal ? b.number * 1_000_000 : b.number;
    return bv - av;
  });

  const rows = [];
  let i = 0;
  let rowSize = 1;
  while (i < sorted.length) {
    rows.push(sorted.slice(i, i + rowSize));
    i += rowSize;
    rowSize += 1;
  }
  return rows;
}

/* ===== Scroll reveal wrapper ===== */
const Reveal = ({ children }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.18 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        ...styles.revealBase,
        ...(show ? styles.revealShow : styles.revealHide),
      }}
    >
      {children}
    </div>
  );
};

/* ===== Components unchanged (except hover effect via HoverCard) ===== */

const AnimatedNumber = ({ value, suffix = '', decimal = false }) => {
  const [display, setDisplay] = useState(decimal ? 0.0 : 0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = performance.now();
        const duration = 1200;

        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);

          if (decimal) {
            const v = (value * p);
            setDisplay(v.toFixed(1));
          } else {
            setDisplay(Math.floor(value * p));
          }

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

const Leader = ({ name, role, img, size = 160 }) => (
  <HoverCard>
    <Avatar size={size} img={img} />
    <div style={styles.name}>{name}</div>
    <div style={styles.role}>{role}</div>
  </HoverCard>
);

const Member = ({ name, role, img }) => (
  <HoverCard>
    <Avatar size={120} img={img} />
    <div style={styles.name}>{name}</div>
    <div style={styles.role}>{role}</div>
  </HoverCard>
);

const Avatar = ({ size, img }) => (
  <div style={{ ...styles.avatar, width: size, height: size }}>
    <img src={img} alt="" style={styles.avatarImg} />
  </div>
);

const HoverCard = ({ children }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : styles.cardNoHover),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
};

/* ===== Styles ===== */

const styles = {
  page: { backgroundColor: '#FFA837', minHeight: '100vh' },
  container: { maxWidth: '1400px', margin: '0 auto', padding: '80px 20px' },

  heroWrap: { marginBottom: '120px' },
  heroPanel: { padding: '20px' },
  heroGrid: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '100px' },

  heroLeft: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px' },
  heroRight: { textAlign: 'left', marginTop: '170px' },

  heroKickerLeft: { gridColumn: '1 / span 2', fontSize: '2.4rem', fontWeight: 800, color: '#494949' },

  heroTitle: { fontSize: '2.8rem', color: '#494949' },
  heroSubTitle: { fontSize: '2rem', color: '#494949', marginTop: '36px' },
  heroUnderline: { width: '80px', height: '4px', backgroundColor: '#FF8737', margin: '10px 0 18px' },
  heroText: { fontSize: '1.05rem', color: '#494949', lineHeight: 1.85, maxWidth: '520px' },

  photoCard: { background: '#F7F7F7', borderRadius: '14px', padding: '14px' },
  photoInner: { height: '220px', overflow: 'hidden', borderRadius: '10px' },
  photoImg: { width: '100%', height: '100%', objectFit: 'cover' },
  photoCaption: { marginTop: '8px', fontStyle: 'italic', color: '#494949' },
  photoWide: { gridColumn: '1 / span 2' },

  visionRow: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '100px',
    marginBottom: '140px',
    alignItems: 'center',
  },
  visionText: {
    paddingLeft: '90px',
  },
  visionAnim: {
    maxWidth: '420px',
    marginTop: '-20px',
    marginLeft: '-110px',
    justifySelf: 'center',
  },

  animWrap: {
    position: 'relative',
    width: '100%',
  },
  animCloud: {
    position: 'absolute',
    inset: '-28px -34px -28px -34px',
    background: 'rgba(255, 255, 255, 0.72)',
    borderRadius: '999px',
    filter: 'blur(18px)',
    zIndex: 0,
  },
  animLottie: {
    position: 'relative',
    zIndex: 1,
  },

  achievementsSection: {
    backgroundColor: 'transparent',
    padding: '90px 40px',
    borderRadius: '0px',
  },
  achievementsTitle: { fontSize: '2.6rem', color: '#494949', textAlign: 'center' },
  achievementsSubTitle: { fontSize: '1.15rem', fontWeight: 700, color: '#494949', textAlign: 'center', marginTop: '8px' },
  divider: { width: '90px', height: '4px', backgroundColor: '#FF8737', margin: '20px auto 46px' },

  pyramidWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
  },
  pyramidRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '18px',
    flexWrap: 'nowrap',
    width: '100%',
  },
  pyramidBlock: {
  backgroundColor: '#494949',
  borderRadius: '14px',
  padding: '18px 16px',
  minWidth: '180px',
  maxWidth: '220px',
  textAlign: 'center',
  border: '2px solid transparent',
  transition: 'transform 160ms ease, border-color 160ms ease',
  outline: 'none',        // ← ADD THIS
  
},
  pyramidTopLine: {
    width: '46px',
    height: '3px',
    backgroundColor: '#FF8737',
    margin: '0 auto 12px',
    borderRadius: '3px',
  },

  statNumber: { fontSize: '2.7rem', fontWeight: 900, color: '#FFA837', letterSpacing: '0.5px' },
  statLabel: { fontSize: '0.95rem', fontWeight: 700, color: '#FFA837', marginTop: '6px' },

  sectionTitle: { fontSize: '2.4rem', color: '#494949', margin: '90px 0 40px', textAlign: 'center' },
  row: { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' },
  centerGrid: { display: 'flex', justifyContent: 'center', gap: '34px', flexWrap: 'wrap', marginTop: '40px' },

  card: {
  backgroundColor: '#3f3f3f',
  padding: '26px',
  width: '230px',
  borderRadius: '14px',
  border: '2px solid transparent',
  outline: 'none',        // ← REQUIRED
  boxShadow: 'none',
  transition: 'transform 180ms ease, border-color 180ms ease',
},
  cardHover: {
  transform: 'translateY(-8px)',
  borderColor: '#FF8737',
  outline: 'none',
  boxShadow: '0 0 0 1px rgba(255, 135, 55, 0.25)',
},
  cardNoHover: {
    borderColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
  },

  name: { marginTop: '10px', fontWeight: 600, color: '#FFA837', textAlign: 'center' },
  role: { fontSize: '0.8rem', textTransform: 'uppercase', color: '#FFA837', textAlign: 'center' },
  avatar: { borderRadius: '50%', overflow: 'hidden', border: '2px solid #FF8737', margin: '0 auto 12px' },
  avatarImg: { width: '100%', height: '100%', objectFit: 'cover' },

  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '18px',
    flexWrap: 'wrap',
  },
  button: {
  background: '#494949',
  color: '#FFA837',
  border: '6px solid #494949',
  padding: '14px 32px',   // slightly smaller
  borderRadius: '50px',
  fontWeight: 800,
  fontSize: '0.95rem',   // very subtle reduction
},
  activeButton: { background: '#FF8737', color: '#494949', border: '2px solid #FF8737' },

  revealBase: {
    transition: 'opacity 420ms ease, transform 420ms ease',
    willChange: 'opacity, transform',
  },
  revealHide: {
    opacity: 0,
    transform: 'translateY(18px)',
  },
  revealShow: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
};
