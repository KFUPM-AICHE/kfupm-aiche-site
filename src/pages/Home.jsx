import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image: "/kick_off_meeting.JPG",
    tag: "Welcome to KFUPM AIChE",
    title: "Where student ideas become real impact.",
    description:
      "Our chapter connects ambitious chemical engineering students with meaningful events, industry exposure, and creative teamwork. Every initiative is designed to turn curiosity into experience and experience into confidence.",
  },
  {
    image: "/from_campus_to_career.JPG",
    tag: "Career Growth",
    title: "From campus moments to career milestones.",
    description:
      "We host sessions that help students grow beyond the classroom with practical guidance, inspiring speakers, and future-focused conversations. The goal is simple: help every member step into industry with clarity and momentum.",
  },
  {
    image: "/clubs.JPG",
    tag: "Community",
    title: "Built on collaboration, energy, and belonging.",
    description:
      "The chapter creates a space where members can lead, volunteer, and build friendships while working on purposeful activities. We believe the best student experience happens when professional growth meets a strong community.",
  },
  {
    image: "/the_sporting_event.jpg",
    tag: "Student Life",
    title: "A chapter experience that feels alive.",
    description:
      "Our calendar blends professional events with engaging activities that keep the chapter dynamic and memorable. From networking to friendly competitions, every event is designed to bring students together.",
  },
  {
    image: "/teachers_day_booth.jpg",
    tag: "Creative Experiences",
    title: "Thoughtful events with modern execution.",
    description:
      "We focus on details that make every activation feel polished, welcoming, and worth attending. The result is a modern chapter identity that reflects excellence in both content and presentation.",
  },
];

const achievements = [
  {
    value: "120+",
    title: "Students Represented",
    description:
      "A growing community of driven students connected through high-impact chapter initiatives and shared opportunities.",
  },
  {
    value: "20",
    title: "Partner Companies",
    description:
      "Strong industry exposure built through collaborations that enrich our events, workshops, and learning experiences.",
  },
  {
    value: "13",
    title: "Seminars & Webinars",
    description:
      "Insightful sessions that bring technical knowledge, career awareness, and real-world perspectives to our members.",
  },
];

const latestEvents = [
  {
    image: "/from_campus_to_career.JPG",
    title: "From Campus to Career",
    date: "Latest Event",
    description:
      "A practical session focused on helping students translate classroom learning into clear career steps and professional confidence.",
  },
  {
    image: "/national_day_celebration.jpg",
    title: "National Day Celebration",
    date: "Community Event",
    description:
      "A vibrant activation that brought together pride, student engagement, and a memorable chapter presence on campus.",
  },
  {
    image: "/the_sporting_event.jpg",
    title: "The Sporting Event",
    date: "Student Activity",
    description:
      "An energetic gathering that blended friendly competition with chapter spirit and a strong sense of belonging.",
  },
];

const partners = [
  "Industry Partners",
  "Academic Collaborators",
  "Event Sponsors",
  "Alumni Network",
  "Student Community",
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  return (
    <div className="home-page">
      <style>{`
        .home-page {
          width: 100%;
          background:
            radial-gradient(circle at top, rgba(232, 125, 36, 0.12), transparent 28%),
            linear-gradient(180deg, #fff8f1 0%, #fff5ec 35%, #ffffff 100%);
          color: #1f1f1f;
          overflow-x: hidden;
        }

        .home-shell {
          width: min(1200px, calc(100% - 32px));
          margin: 0 auto;
        }

        .section {
          padding: 96px 0;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.05;
          color: #1f1f1f;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
        }

        .section-subtitle {
          max-width: 760px;
          color: #6a625d;
          font-size: 1rem;
          line-height: 1.9;
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
          border: 1px solid rgba(232, 125, 36, 0.12);
        }

        .slider-wrap {
          position: relative;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0f0f0f;
        }

        .slider-track {
          position: absolute;
          inset: 0;
        }

        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 0.8s ease, transform 6s ease;
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .slide::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.78) 0%,
            rgba(0, 0, 0, 0.35) 42%,
            rgba(0, 0, 0, 0.55) 100%
          );
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-content {
          position: relative;
          z-index: 2;
          padding: 120px 0 90px;
          color: white;
        }

        .hero-panel {
          max-width: 720px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(14px);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .hero-title {
          font-size: clamp(2.8rem, 7vw, 5.4rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          margin-bottom: 22px;
          max-width: 10ch;
        }

        .hero-description {
          max-width: 640px;
          font-size: 1.08rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.84);
          margin-bottom: 34px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .button-primary,
        .button-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 160px;
          padding: 14px 24px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.98rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          text-decoration: none;
        }

        .button-primary {
          background: linear-gradient(135deg, #ff9c52 0%, #e87d24 100%);
          color: white;
          box-shadow: 0 14px 30px rgba(232, 125, 36, 0.35);
        }

        .button-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(12px);
        }

        .button-primary:hover,
        .button-secondary:hover {
          transform: translateY(-2px);
        }

        .slider-controls {
          position: absolute;
          inset: auto 0 34px;
          z-index: 3;
        }

        .slider-controls-inner {
          width: min(1200px, calc(100% - 32px));
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }

        .dots {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          border: none;
          background: rgba(255, 255, 255, 0.38);
          cursor: pointer;
          padding: 0;
          box-shadow: none;
          transform: none !important;
        }

        .dot.active {
          width: 36px;
          background: #e87d24;
        }

        .arrow-group {
          display: flex;
          gap: 10px;
        }

        .arrow-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(12px);
          font-size: 1.1rem;
          box-shadow: none;
          cursor: pointer;
        }

        .achievements-section {
          position: relative;
          padding-top: 110px;
          background:
            radial-gradient(circle at top right, rgba(232, 125, 36, 0.16), transparent 24%),
            linear-gradient(180deg, #fffaf5 0%, #ffffff 100%);
        }

        .achievements-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 15% 25%, rgba(255, 156, 82, 0.18), transparent 18%),
            radial-gradient(circle at 85% 35%, rgba(232, 125, 36, 0.14), transparent 20%),
            radial-gradient(circle at 50% 100%, rgba(255, 210, 170, 0.25), transparent 28%);
        }

        .achievements-head {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 26px;
          align-items: end;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .achievements-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 170px;
          min-height: 170px;
          border-radius: 36px;
          background: linear-gradient(135deg, #fff1e3 0%, #ffe0c2 100%);
          color: #da731f;
          box-shadow:
            0 18px 50px rgba(232, 125, 36, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(232, 125, 36, 0.12);
          animation: floatBadge 4s ease-in-out infinite;
        }

        .achievements-badge-inner {
          text-align: center;
        }

        .achievements-badge strong {
          display: block;
          font-size: 2.8rem;
          line-height: 1;
          letter-spacing: -0.07em;
          color: #1f1f1f;
        }

        .achievements-badge span {
          display: block;
          margin-top: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .achievement-card {
          position: relative;
          overflow: hidden;
          padding: 30px;
          border-radius: 30px;
          background: linear-gradient(180deg, #ffffff 0%, #fff7ef 100%);
          border: 1px solid rgba(232, 125, 36, 0.12);
          box-shadow:
            0 16px 40px rgba(232, 125, 36, 0.12),
            0 2px 10px rgba(17, 17, 17, 0.03);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          animation: cardReveal 0.8s ease both;
        }

        .achievement-card:nth-child(2) {
          animation-delay: 0.12s;
        }

        .achievement-card:nth-child(3) {
          animation-delay: 0.24s;
        }

        .achievement-card::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 125, 36, 0.16) 0%, rgba(232, 125, 36, 0) 72%);
        }

        .achievement-card::after {
          content: "";
          position: absolute;
          left: -20px;
          bottom: -20px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 191, 140, 0.18) 0%, rgba(255, 191, 140, 0) 72%);
        }

        .achievement-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 24px 55px rgba(232, 125, 36, 0.18),
            0 8px 20px rgba(17, 17, 17, 0.05);
        }

        .achievement-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }

        .achievement-value {
          font-size: 3.2rem;
          line-height: 1;
          letter-spacing: -0.07em;
          color: #1f1f1f;
        }

        .achievement-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: linear-gradient(135deg, #ffae71 0%, #e87d24 100%);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 800;
          box-shadow: 0 10px 24px rgba(232, 125, 36, 0.28);
          flex-shrink: 0;
        }

        .achievement-card h3 {
          font-size: 1.2rem;
          color: #1f1f1f;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .achievement-card p {
          color: #6e655f;
          font-size: 0.98rem;
          line-height: 1.9;
          position: relative;
          z-index: 1;
        }

        .events-section {
          background: linear-gradient(180deg, #fff6ed 0%, #fff1e3 100%);
        }

        .events-grid,
        .partners-grid {
          display: grid;
          gap: 24px;
          margin-top: 36px;
        }

        .events-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .event-card {
          overflow: hidden;
          border-radius: 28px;
          background: linear-gradient(180deg, #ffffff 0%, #fff7ef 100%);
          border: 1px solid rgba(232, 125, 36, 0.1);
          box-shadow: 0 18px 45px rgba(232, 125, 36, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 55px rgba(232, 125, 36, 0.16);
        }

        .event-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .event-content {
          padding: 24px;
        }

        .event-date {
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(232, 125, 36, 0.14);
          color: #de7622;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .event-card h3 {
          color: #1f1f1f;
          margin-bottom: 10px;
          font-size: 1.3rem;
        }

        .event-card p {
          color: #6e655f;
          font-size: 0.96rem;
          line-height: 1.8;
        }

        .member-card {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 30px;
          align-items: center;
          margin-top: 36px;
          padding: 28px;
          border-radius: 32px;
          background: linear-gradient(135deg, #ffffff 0%, #fff7ef 100%);
          box-shadow: 0 24px 60px rgba(232, 125, 36, 0.12);
          border: 1px solid rgba(232, 125, 36, 0.08);
        }

        .member-photo-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          min-height: 420px;
          background: #1d1d1d;
        }

        .member-photo-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.28) 100%);
        }

        .member-photo {
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
        }

        .member-copy {
          padding: 6px 8px 6px 4px;
        }

        .member-kicker {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(232, 125, 36, 0.12);
          color: #e87d24;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .member-copy h3 {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.05em;
          color: #1f1f1f;
          margin-bottom: 10px;
        }

        .member-role {
          display: block;
          color: #e87d24;
          font-weight: 700;
          margin-bottom: 18px;
          font-size: 1rem;
          letter-spacing: 0.02em;
        }

        .member-copy p {
          color: #6e655f;
          line-height: 1.9;
          margin-bottom: 24px;
        }

        .member-points {
          display: grid;
          gap: 12px;
        }

        .member-point {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 18px;
          background: white;
          border: 1px solid rgba(232, 125, 36, 0.08);
          box-shadow: 0 10px 24px rgba(232, 125, 36, 0.05);
        }

        .member-point span:first-child {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(232, 125, 36, 0.14);
          color: #e87d24;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .partners-section {
          background: linear-gradient(180deg, #fff7ef 0%, #ffffff 100%);
        }

        .partners-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .partner-chip {
          min-height: 118px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          border-radius: 22px;
          background: linear-gradient(180deg, #ffffff 0%, #fff7ef 100%);
          border: 1px solid rgba(232, 125, 36, 0.1);
          color: #2b2b2b;
          font-weight: 700;
          letter-spacing: -0.02em;
          box-shadow: 0 14px 32px rgba(232, 125, 36, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .partner-chip:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(232, 125, 36, 0.14);
        }

        .partner-note {
          margin-top: 22px;
          color: #766c66;
          font-size: 0.95rem;
        }

        @keyframes floatBadge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes cardReveal {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .achievements-head,
          .member-card,
          .achievements-grid,
          .events-grid,
          .partners-grid {
            grid-template-columns: 1fr;
          }

          .achievements-badge {
            min-width: 100%;
            min-height: 120px;
            border-radius: 26px;
          }

          .slider-wrap {
            min-height: 760px;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 72px 0;
          }

          .slider-content {
            padding-top: 110px;
            padding-bottom: 120px;
          }

          .hero-title {
            max-width: 100%;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .button-primary,
          .button-secondary {
            width: 100%;
          }

          .slider-controls-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .member-photo-wrap,
          .member-photo {
            min-height: 320px;
          }

          .achievement-card,
          .event-card,
          .partner-chip,
          .member-card {
            border-radius: 24px;
          }
        }
      `}</style>

      <section className="slider-wrap">
        <div className="slider-track">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`slide ${index === activeSlide ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>

        <div className="home-shell slider-content">
          <div className="hero-panel">
            <div className="hero-tag">{heroSlides[activeSlide].tag}</div>
            <h1 className="hero-title">{heroSlides[activeSlide].title}</h1>
            <p className="hero-description">
              {heroSlides[activeSlide].description}
            </p>

            <div className="hero-actions">
              <Link to="/calendar" className="button-primary">
                Explore Events
              </Link>
              <Link to="/gallery" className="button-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="slider-controls">
          <div className="slider-controls-inner">
            <div className="dots">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={`dot ${index === activeSlide ? "active" : ""}`}
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>

            <div className="arrow-group">
              <button
                type="button"
                className="arrow-btn"
                aria-label="Previous slide"
                onClick={previousSlide}
              >
                ←
              </button>
              <button
                type="button"
                className="arrow-btn"
                aria-label="Next slide"
                onClick={nextSlide}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section achievements-section">
        <div className="achievements-glow" />
        <div className="home-shell">
          <div className="achievements-head">
            <div>
              <div className="eyebrow">Our Achievements</div>
              <h2 className="section-title">
                Achievements that feel brighter, cleaner, and more alive.
              </h2>
              <p className="section-subtitle">
                This section now uses a warm orange-and-white identity with softer
                cards, better spacing, and subtle motion to make the metrics feel
                more premium without affecting the beauty of the hero slider.
              </p>
            </div>

            <div className="achievements-badge">
              <div className="achievements-badge-inner">
                <strong>3</strong>
                <span>Key Highlights</span>
              </div>
            </div>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <article key={achievement.title} className="achievement-card">
                <div className="achievement-top">
                  <div className="achievement-value">{achievement.value}</div>
                  <div className="achievement-icon">
                    {index === 0 ? "01" : index === 1 ? "02" : "03"}
                  </div>
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section events-section">
        <div className="home-shell">
          <div className="eyebrow">Latest Events</div>
          <h2 className="section-title">
            The latest experiences shaping our chapter culture.
          </h2>
          <p className="section-subtitle">
            A clean three-card layout keeps the newest activities visible while
            giving the page more rhythm and visual variety.
          </p>

          <div className="events-grid">
            {latestEvents.map((event) => (
              <article key={event.title} className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <span className="event-date">{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="home-shell">
          <div className="eyebrow">Member of the Month</div>
          <h2 className="section-title">
            Celebrating the people behind the chapter momentum.
          </h2>
          <p className="section-subtitle">
            A featured spotlight adds a personal touch to the homepage and makes
            the chapter feel more human and alive.
          </p>

          <div className="member-card">
            <div className="member-photo-wrap">
              <img
                src="/Ghada Alghamdi.jpg"
                alt="Ghada Alghamdi"
                className="member-photo"
              />
            </div>

            <div className="member-copy">
              <div className="member-kicker">Featured Member</div>
              <h3>Ghada Alghamdi</h3>
              <span className="member-role">Events Committee Head</span>
              <p>
                Ghada is recognized for her consistency, attention to detail, and
                the energy she brings to chapter execution. Her leadership helps
                transform ideas into well-organized experiences that members
                genuinely remember.
              </p>

              <div className="member-points">
                <div className="member-point">
                  <span>01</span>
                  <span>
                    Leads with structure while keeping every event student-centered.
                  </span>
                </div>
                <div className="member-point">
                  <span>02</span>
                  <span>
                    Balances creativity and planning to keep the chapter experience
                    polished.
                  </span>
                </div>
                <div className="member-point">
                  <span>03</span>
                  <span>
                    Represents the spirit of collaboration that defines KFUPM AIChE.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section partners-section">
        <div className="home-shell">
          <div className="eyebrow">Success Partners</div>
          <h2 className="section-title">
            Powered by the relationships that help us grow.
          </h2>
          <p className="section-subtitle">
            This final section closes the homepage with a premium,
            partnership-focused feel while staying aligned with the project theme.
          </p>

          <div className="partners-grid">
            {partners.map((partner) => (
              <div key={partner} className="partner-chip">
                {partner}
              </div>
            ))}
          </div>

          <p className="partner-note">
            You can replace these placeholders with actual partner names or logos
            anytime from the same array inside <strong>Home.jsx</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;