import React, { useState, useEffect, useRef } from 'react';

export default function About() {
  const [activeCommittee, setActiveCommittee] = useState('Events');

  const stats = [
    { number: 110, suffix: '+', label: 'Active Members' },
    { number: 9, suffix: '', label: 'Competitions Participated' },
    { number: 70, suffix: '+', label: 'Competition Participants' },
    { number: 13, suffix: '', label: 'Seminars & Webinars' },
    { number: 410, suffix: '+', label: 'Students Impacted' },
    { number: 8, suffix: '', label: 'Industrial Visits' },
    { number: 107, suffix: '', label: 'Marketing Projects Delivered' },
    { number: 100, suffix: '+', label: 'Volunteers Engaged' },
    { number: 1.7, suffix: 'M+', label: 'Total Media Impressions', decimal: true },
    { number: 6, suffix: '', label: 'Special Chapter Activities' },
    { number: 240, suffix: '+', label: 'Students Engaged' },
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

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heroTitle}>About Us</h1>

        <p style={styles.aboutText}>
          The AIChE Students Chapter at KFUPM, founded in 2013, serves as a vital link
          between students and the chemical engineering industry, empowering future
          engineers through hands-on experiences, professional development, and
          meaningful industry exposure.
        </p>

        <div style={styles.mvvSection}>
          <div style={styles.mvvCard}>
            <div style={styles.content}>
              <h3 style={styles.mvvTitle}>🎯 Our Mission</h3>
              <div style={styles.titleUnderline} />
              <p style={styles.mvvText}>
                Facilitating networking opportunities with industry professionals, alumni,
                and academia to bridge the gap between theoretical knowledge and practical application.
              </p>
            </div>
          </div>

          <div style={styles.mvvCard}>
            <div style={styles.content}>
              <h3 style={styles.mvvTitle}>🌟 Our Vision</h3>
              <div style={styles.titleUnderline} />
              <p style={styles.mvvText}>
                To be recognized as a leading AIChE student chapter nationally and internationally,
                shaping future chemical engineering leaders.
              </p>

              <h4 style={styles.mvvSubtitle}>💎 Our Values</h4>
              <p style={styles.mvvText}>
                Excellence, Innovation, Collaboration, and Professional Development guide everything we do.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.achievementsSection}>
          <h2 style={styles.achievementsTitle}>KFUPM-AIChE Achievements</h2>
          <div style={styles.divider} />

          <div style={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} style={styles.statCard}>
                <AnimatedNumber value={s.number} suffix={s.suffix} decimal={s.decimal} />
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={styles.sectionTitle}>Our Leadership</h2>
        <div style={styles.row}>
          <Leader name="Dr. Basim Abussaud" role="Advisor" img="/Bassim.JPG" size={170} />
          <Leader name="Fatimah Almakinah" role="President" img="/Fatimah Almakinah .jpg" />
          <Leader name="Lama Alharbi" role="Vice President" img="/Lama Alharbi.png" />
        </div>

        <h2 style={styles.sectionTitle}>Committees</h2>

        <div style={styles.buttonRow}>
          {Object.keys(committees).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCommittee(key)}
              style={{
                ...styles.button,
                ...(activeCommittee === key ? styles.activeButton : {}),
              }}
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

      </div>
    </div>
  );
}

/* ===== Components ===== */

const AnimatedNumber = ({ value, suffix = '', decimal = false }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1200, 1);
          setDisplay(decimal ? (value * p).toFixed(1) : Math.floor(value * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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

const HoverCard = ({ children }) => (
  <div style={styles.card}>{children}</div>
);

/* ===== Styles ===== */

const styles = {
  page: { backgroundColor: '#FFA837', minHeight: '100vh' },
  container: { maxWidth: '1400px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' },

  heroTitle: { fontSize: '3rem', color: '#494949', marginBottom: '24px' },
  aboutText: { maxWidth: '720px', margin: '0 auto 80px', fontSize: '1.15rem', lineHeight: 1.85, color: '#494949' },

  sectionTitle: { fontSize: '2.4rem', color: '#494949', margin: '90px 0 40px' },

  row: { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' },
  centerGrid: { display: 'flex', justifyContent: 'center', gap: '34px', flexWrap: 'wrap', marginTop: '40px' },

  card: { backgroundColor: '#3f3f3f', padding: '26px', width: '230px', borderRadius: '14px' },

  name: { marginTop: '10px', fontWeight: 600, color: '#FFA837' },
  role: { fontSize: '0.8rem', textTransform: 'uppercase', color: '#FFA837' },

  avatar: { borderRadius: '50%', overflow: 'hidden', border: '2px solid #FF8737', margin: '0 auto 12px' },
  avatarImg: { width: '100%', height: '100%', objectFit: 'cover' },

  buttonRow: { display: 'flex', justifyContent: 'center', gap: '14px', overflowX: 'auto' },
  button: {
    background: '#494949',
    color: '#FFA837',
    border: '6px solid #494949',
    padding: '16px 34px',
    borderRadius: '50px',
    fontWeight: 800,
    fontSize: '1.1rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  activeButton: { background: '#FF8737', color: '#494949', border: '2px solid #FF8737' },

  mvvSection: { maxWidth: '900px', margin: '0 auto 100px' },
  mvvCard: {
    backgroundColor: '#494949',
    borderRadius: '16px',
    padding: '50px 60px',
    marginBottom: '40px',
  },
  content: { textAlign: 'left' },
  mvvTitle: { fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '8px' },
  mvvSubtitle: { fontSize: '1.6rem', color: '#FFFFFF', marginTop: '32px' },
  titleUnderline: { width: '80px', height: '3px', backgroundColor: '#FF8737', marginBottom: '24px' },
  mvvText: { fontSize: '1.1rem', color: '#E0E0E0', lineHeight: 1.8 },

  achievementsSection: { backgroundColor: '#494949', padding: '90px 40px', margin: '100px 0', borderRadius: '22px' },
  achievementsTitle: { fontSize: '2.6rem', color: '#FFA837' },

  divider: { width: '80px', height: '4px', backgroundColor: '#FF8737', margin: '20px auto 40px' },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '44px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  statCard: { textAlign: 'center' },
  statNumber: { fontSize: '3.2rem', fontWeight: 800, color: '#FF8737' },
  statLabel: { fontSize: '1rem', fontWeight: 600, color: '#EAEAEA' },
};