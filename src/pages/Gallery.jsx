import React, { useState, useEffect, useRef } from 'react';

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
   MAIN GALLERY
───────────────────────────────────────────── */
function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      id: 1,
      name: 'Social Events',
      coverImage: '/the_sporting_event.jpg',
      count: 6,
      slides: [
        { image: '/kick_off_meeting.JPG', title: 'Kick-off Meeting', description: 'The Kick-off Meeting marked an inspiring beginning to the 25/26 academic year, setting the stage for a journey filled with ambition, collaboration, and purpose.', date: 'September 2024' },
        { image: '/national_day_celebration.jpg', title: 'National Day Celebration', description: 'From a land of pride, we celebrated our Kingdom of Saudi Arabia.', date: '23 September' },
        { image: '/the_sporting_event.jpg', title: 'The Sporting Event', description: 'Chapter members enjoyed an energetic padel session filled with fun.', date: 'October 2024' },
        { image: '/football_match.jpg', title: 'Football Match', description: 'We proudly supported our team participating in the Sports Event alongside the Sports Club.', date: 'October 2024' },
        { image: '/teachers_day_booth.jpg', title: 'Teachers Day Booth', description: 'Through our teachers, dreams take shape and excellence becomes achievable.', date: 'October 2024' },
        { image: '/the_pink.jpg', title: 'Think Pink', description: 'In October We Think Pink!', date: 'October 2024' },
      ]
    },
    {
      id: 2,
      name: 'Seminars & Workshops',
      coverImage: '/procces.jpg',
      count: 4,
      slides: [
        { image: '/ml.jpg', title: 'Machine Learning for Chemical Engineers', description: 'Shedding light on the growing role of artificial intelligence in chemical engineering.', date: '29 September' },
        { image: '/from_campus_to_career.JPG', title: 'From Campus to Career', description: 'Eng. Hussain Alhassan and Eng. Hanan Quraish shared valuable insights about the transition from student life to professional careers.', date: '7 October' },
        { image: '/eng101.JPG', title: 'English 101 Help Session', description: 'The English 101 Final Exam Workshop was successfully concluded with excellent attendance and active engagement.', date: 'November 2024' },
        { image: '/procces.jpg', title: 'Process Safety Seminar', description: 'A meaningful conclusion to the Process Safety Seminar presented by Dr. Christos Argyropoulos.', date: '3 December' },
      ]
    },
    {
      id: 3,
      name: 'Industrial Visits',
      coverImage: '/bhig.png',
      count: 1,
      slides: [
        { image: '/bhig.png', title: 'BHIG Visit', description: 'An enriching visit to BHIG – Jubail, where academic knowledge met real-world industrial practice.', date: 'October 2024' },
      ]
    },
    {
      id: 4,
      name: 'Conferences & Competitions',
      coverImage: '/clubs.png',
      count: 4,
      slides: [
        { image: '/892.jpg', title: 'Green Guardians Hackathon', description: 'We are proud of our team who secured first place at the Green Guardians Hackathon during the GWECCC in Bahrain out of 15 universities across GCC.', date: '8–11 September' },
        { image: '/clubs.png', title: 'Clubs Fusion', description: 'Clubs Fusion concluded successfully, filled with enthusiasm and friendly competition among student clubs.', date: '27 October' },
        { image: '/sharkk.png', title: 'The Shark Tank', description: 'Aligning with Saudi Vision 2030, the event showcased innovative student solutions focused on the Net-Zero Waste Circular Economy!', date: '26 November' },
        { image: '/res.png', title: 'The Research Competition', description: 'The competition showcased student engagement in research and fostered a positive, collaborative academic environment.', date: 'December 2024' },
      ]
    },
    {
      id: 5,
      name: 'Production',
      coverImage: '/kick_off_meeting.JPG',
      count: 5,
      isVideo: true,
      slides: [
        { videoId: 'QeaLUNhj-5A', title: 'ChemE Cube', description: 'Discover the KFUPM Team global experience at the ChemE Cube Competition', date: '2026' },
        { videoId: '9ZZP5v7QnOk', title: 'ChemE Car Day2', description: 'Discover the KFUPM Team global experience at the ChemE Car Competition', date: '2025' },
        { videoId: 'e2Xac9HAh9M', title: 'Chemical Engineers Embrace AI in Digital Transformation', description: 'Learn more about how AI can be related to Chemical Engineering!', date: '2025' },
        { videoId: 'a2P6vqqW1rE', title: 'شرح تخصص الهندسة الكيميائية', description: 'Learn more about Chemical Engineering!', date: '2023' },
        { videoId: 'cmH6SvJsOnI', title: 'Show and Tell', description: 'Who are we?', date: '2026' },
      ]
    },
  ];

  const nextSlide = () => setCurrentSlide(p => (p + 1) % selectedCategory.slides.length);
  const prevSlide = () => setCurrentSlide(p => (p - 1 + selectedCategory.slides.length) % selectedCategory.slides.length);

  /* ── SLIDER VIEW ── */
  if (selectedCategory) {
    const slide = selectedCategory.slides[currentSlide];
    return (
      <div style={{ backgroundColor: '#FFA837', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
          .backBtnGal:hover { background: #FF8737 !important; transform: translateX(-4px) !important; }
          .navBtnGal:hover  { background: rgba(255,167,55,0.3) !important; }
          .sliderThumb { transition: all 0.25s ease; }
        `}</style>
        <ScrollProgressBar />

        <div style={{ height: '6px', background: 'linear-gradient(90deg, #FF8737, #ffb347, #FF8737)' }} />

        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: 'clamp(24px, 4vw, 50px) clamp(16px, 4vw, 28px)' }}>

          {/* Back + breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
            <button
              className="backBtnGal"
              onClick={() => setSelectedCategory(null)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#494949', color: '#fff', border: 'none', padding: '11px 26px', borderRadius: '50px', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s, transform 0.2s', fontFamily: "'Sora', sans-serif" }}
            >
              ← Back
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#494949', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif", opacity: 0.7 }}>
              <span>Our Gallery</span>
              <span>›</span>
              <span style={{ fontWeight: 700, opacity: 1 }}>{selectedCategory.name}</span>
            </div>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '42px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#494949', color: '#FFA837', borderRadius: '99px', padding: '5px 18px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Sora', sans-serif", marginBottom: '14px' }}>
              {selectedCategory.count} {selectedCategory.isVideo ? 'videos' : 'photos'}
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#494949', fontFamily: "'Sora', sans-serif", margin: '0 0 10px', letterSpacing: '-0.02em' }}>
              {selectedCategory.name}
            </h2>
            <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, #FF8737, #ffb347)', borderRadius: '4px' }} />
          </div>

          {/* Main layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '32px', alignItems: 'start' }}>

            {/* Main media */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', backgroundColor: '#494949', boxShadow: '0 12px 50px rgba(73,73,73,0.35)', position: 'relative' }}>
              {slide.videoId ? (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={`https://www.youtube.com/embed/${slide.videoId}`} title={slide.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              ) : (
                <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '540px', objectFit: 'cover', display: 'block' }} />
              )}
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(73,73,73,0.85)', backdropFilter: 'blur(8px)', color: '#FFA837', borderRadius: '99px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 700, fontFamily: "'Sora', sans-serif" }}>
                {currentSlide + 1} / {selectedCategory.slides.length}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ backgroundColor: '#494949', borderRadius: '20px', padding: '26px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFA837', letterSpacing: '1.4px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: "'DM Sans', sans-serif" }}>{slide.date}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: '1.3', fontFamily: "'Sora', sans-serif" }}>{slide.title}</div>
                <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.75', marginBottom: '20px', fontFamily: "'DM Sans', sans-serif" }}>{slide.description}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="navBtnGal" onClick={prevSlide} style={{ flex: 1, padding: '11px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,167,55,0.15)', color: '#FFA837', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s', fontFamily: "'Sora', sans-serif" }}>← Prev</button>
                  <button className="navBtnGal" onClick={nextSlide} style={{ flex: 1, padding: '11px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,167,55,0.15)', color: '#FFA837', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s', fontFamily: "'Sora', sans-serif" }}>Next →</button>
                </div>
              </div>

              <div style={{ backgroundColor: '#494949', borderRadius: '20px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '380px', overflowY: 'auto' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FFA837', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: '4px', paddingLeft: '4px' }}>
                  All {selectedCategory.isVideo ? 'Videos' : 'Photos'}
                </div>
                {selectedCategory.slides.map((s, i) => (
                  <div
                    key={i}
                    className="sliderThumb"
                    onClick={() => setCurrentSlide(i)}
                    style={{ position: 'relative', height: '78px', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', border: i === currentSlide ? '2.5px solid #FF8737' : '2.5px solid transparent', boxShadow: i === currentSlide ? '0 0 14px rgba(255,135,55,0.4)' : 'none', flexShrink: 0 }}
                  >
                    <img src={s.image || categories[4].coverImage} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    {s.videoId && (
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,167,55,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#fff' }}>▶</div>
                    )}
                    <div style={{ position: 'absolute', inset: 0, background: i === currentSlide ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'flex-end', padding: '6px 8px' }}>
                      <span style={{ fontSize: '0.68rem', color: '#fff', fontWeight: 600, lineHeight: '1.2', fontFamily: "'DM Sans', sans-serif" }}>{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── GALLERY HOME VIEW ── */
  return (
    <div style={{ backgroundColor: '#FFA837', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .noiseOverlay {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 1; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat; background-size: 200px 200px;
        }

        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
        .scrollCue { animation: bounceDown 1.6s ease-in-out infinite; }

        @keyframes pulseBadge {
          0%   { box-shadow: 0 0 0 0    rgba(255,135,55,0.5); }
          70%  { box-shadow: 0 0 0 10px rgba(255,135,55,0); }
          100% { box-shadow: 0 0 0 0    rgba(255,135,55,0); }
        }
        .pulseDot { animation: pulseBadge 2.4s ease-out infinite; }

        .catCardGal {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
          box-shadow: 0 6px 24px rgba(0,0,0,0.18);
          border: 2.5px solid transparent;
        }
        .catCardGal:hover {
          transform: translateY(-10px) scale(1.025);
          box-shadow: 0 22px 55px rgba(73,73,73,0.38);
          border-color: rgba(255,167,55,0.5);
        }
        .catCardGal:hover .catImgGal { transform: scale(1.08); }
        .catCardGal:hover .catArrowGal { opacity: 1 !important; transform: translateX(0) !important; }
        .catCardGal:hover .catBadgeGal { background: rgba(255,167,55,0.22) !important; }

        .catImgGal { transition: transform 0.5s ease; }

        .catCardGal::after {
          content: '';
          position: absolute; top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg); pointer-events: none; opacity: 0;
        }
        .catCardGal:hover::after { animation: shimmer 0.7s ease forwards; }
        @keyframes shimmer {
          0%   { left: -75%; opacity: 1; }
          100% { left: 125%; opacity: 1; }
        }
      `}</style>

      <div className="noiseOverlay" />
      <ScrollProgressBar />

      <div style={{ height: '6px', background: 'linear-gradient(90deg, #FF8737, #ffb347, #FF8737)', position: 'relative', zIndex: 2 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1300px', margin: '0 auto', padding: 'clamp(32px, 5vw, 80px) clamp(16px, 4vw, 28px)' }}>

        {/* ── HERO HEADER ── */}
        <Reveal>
          <div style={{ marginBottom: '70px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#494949', color: '#FFA837', borderRadius: '99px', padding: '6px 18px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Sora', sans-serif", marginBottom: '18px' }}>
              <span className="pulseDot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF8737', display: 'inline-block' }} />
              AIChE · KFUPM
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#494949', fontFamily: "'Sora', sans-serif", margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Our Gallery
            </h1>
            <div style={{ width: '90px', height: '5px', background: 'linear-gradient(90deg, #FF8737, #ffb347)', borderRadius: '4px', marginBottom: '20px' }} />
            <p style={{ fontSize: '1.05rem', color: '#494949', opacity: 0.75, maxWidth: '500px', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
              Select a category to explore our events and activities
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '50px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(73,73,73,0.3))' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#494949', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Sora', sans-serif" }}>Browse Categories</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(73,73,73,0.3), transparent)' }} />
          </div>
        </Reveal>

        {/* ── BENTO GRID ROW 1 ── */}
        <Reveal delay={80}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: '20px', marginBottom: '20px' }}>

            {/* Cat 0 — Featured large */}
            <div
              className="catCardGal"
              style={{ height: '420px' }}
              onClick={() => { setSelectedCategory(categories[0]); setCurrentSlide(0); }}
            >
              <img src={categories[0].coverImage} alt={categories[0].name} className="catImgGal" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.78) 100%)' }} />
              <div className="catBadgeGal" style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,167,55,0.15)', border: '1.5px solid rgba(255,167,55,0.4)', borderRadius: '99px', padding: '4px 14px', fontSize: '0.72rem', fontWeight: 700, color: '#FFA837', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", transition: 'background 0.2s', backdropFilter: 'blur(6px)' }}>
                {categories[0].count} photos
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 26px' }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em', lineHeight: 1.1 }}>{categories[0].name}</div>
              </div>
              <div className="catArrowGal" style={{ position: 'absolute', top: '20px', right: '20px', width: '42px', height: '42px', borderRadius: '50%', background: '#FF8737', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#fff', opacity: 0, transform: 'translateX(8px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>›</div>
            </div>

            {/* Right col: Cat 1 + Cat 2 stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[categories[1], categories[2]].map((cat, idx) => (
                <div
                  key={cat.id}
                  className="catCardGal"
                  style={{ height: idx === 0 ? '280px' : '120px' }}
                  onClick={() => { setSelectedCategory(cat); setCurrentSlide(0); }}
                >
                  <img src={cat.coverImage} alt={cat.name} className="catImgGal" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.78) 100%)' }} />
                  <div className="catBadgeGal" style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255,167,55,0.15)', border: '1.5px solid rgba(255,167,55,0.4)', borderRadius: '99px', padding: '3px 12px', fontSize: '0.68rem', fontWeight: 700, color: '#FFA837', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", transition: 'background 0.2s', backdropFilter: 'blur(6px)' }}>
                    {cat.count} {cat.isVideo ? 'videos' : 'photos'}
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 22px 16px' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>{cat.name}</div>
                  </div>
                  <div className="catArrowGal" style={{ position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '50%', background: '#FF8737', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#fff', opacity: 0, transform: 'translateX(8px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>›</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── BENTO GRID ROW 2 ── */}
        <Reveal delay={140}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '20px' }}>
            {[categories[3], categories[4]].map((cat) => (
              <div
                key={cat.id}
                className="catCardGal"
                style={{ height: '300px' }}
                onClick={() => { setSelectedCategory(cat); setCurrentSlide(0); }}
              >
                <img src={cat.coverImage} alt={cat.name} className="catImgGal" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.78) 100%)' }} />
                <div className="catBadgeGal" style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,167,55,0.15)', border: '1.5px solid rgba(255,167,55,0.4)', borderRadius: '99px', padding: '4px 14px', fontSize: '0.72rem', fontWeight: 700, color: '#FFA837', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", transition: 'background 0.2s', backdropFilter: 'blur(6px)' }}>
                  {cat.count} {cat.isVideo ? 'videos' : 'photos'}
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '26px 26px 24px' }}>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>{cat.name}</div>
                </div>
                <div className="catArrowGal" style={{ position: 'absolute', top: '20px', right: '20px', width: '42px', height: '42px', borderRadius: '50%', background: '#FF8737', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#fff', opacity: 0, transform: 'translateX(8px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>›</div>
              </div>
            ))}
          </div>
        </Reveal>

       
      </div>
    </div>
  );
}

export default Gallery;