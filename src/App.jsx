import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Sponsor from "./pages/Sponsor.jsx";
import Gallery from "./pages/Gallery.jsx";
import Newsletter from "./pages/Newsletter.jsx";

const logo = "/logo.png";

const navLinks = [
  { to: "/",           label: "Home" },
  { to: "/about",      label: "About us" },
  { to: "/sponsor",    label: "Be a sponsor" },
  { to: "/gallery",    label: "Our gallery" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/contact",    label: "Contact us" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* ── Navbar ─────────────────────────────────── */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          padding: 0 40px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          z-index: 1000;
          box-sizing: border-box;
          transition: box-shadow 0.3s ease;
        }
        .navbar.scrolled {
          box-shadow: 0 2px 20px rgba(0,0,0,0.10);
        }

        /* Logo */
        .nav-logo { height: 46px; display: block; }

        /* Desktop links */
        .nav-desktop {
          display: flex;
          gap: 28px;
          align-items: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.25s;
          white-space: nowrap;
        }
        .nav-link:hover, .nav-link.active {
          color: #e87d24;
        }

        /* Hamburger button */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          background: none;
          border: none;
          z-index: 1100;
        }
        .hamburger-line {
          width: 26px;
          height: 2.5px;
          background: #333;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          display: block;
        }
        /* Animate into X when open */
        .hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7.5px) rotate(45deg);
        }
        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* Mobile drawer */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          flex-direction: column;
          padding: 32px 28px;
          gap: 6px;
          z-index: 999;
          overflow-y: auto;
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .mobile-menu.open { display: flex; }
        .mobile-nav-link {
          display: block;
          color: #222;
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 600;
          padding: 14px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: #e87d24;
          padding-left: 8px;
        }

        /* ── Responsive breakpoint ───────────────────── */
        @media (max-width: 860px) {
          .navbar { padding: 0 20px; }
          .nav-desktop { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="AIChE KFUPM" className="nav-logo" />
        </Link>

        {/* Desktop links (hidden on mobile via CSS) */}
        <div className="nav-desktop">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${location.pathname === to ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger (shown on mobile via CSS) */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-label="Navigation menu">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`mobile-nav-link${location.pathname === to ? " active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar />

      <main style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
        paddingTop: "72px",
      }}>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="/sponsor"    element={<Sponsor />} />
          <Route path="/gallery"    element={<Gallery />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </main>

      <footer style={{
        backgroundColor: "#1a1a1a",
        padding: "60px 40px 30px",
        color: "#ccc",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}>
          <div>
            <img src={logo} alt="AIChE" style={{ height: "60px", marginBottom: "20px" }} />
          </div>
          <div>
            <h4 style={{ marginBottom: "15px", color: "#fff" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link to="/"      style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Home</Link>
              <Link to="/about" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>About us</Link>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: "15px", color: "#fff" }}>Follow us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Facebook</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Twitter</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Instagram</a>
            </div>
          </div>
        </div>
        <div style={{
          textAlign: "center",
          paddingTop: "30px",
          borderTop: "1px solid #333",
          fontSize: "14px",
          color: "#999",
        }}>
          <p>© 2025 AIChE KFUPM. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;