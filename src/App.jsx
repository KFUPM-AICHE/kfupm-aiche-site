import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Calendar from "./pages/Calendar.jsx";
import Contact from "./pages/Contact.jsx";
import Sponsor from "./pages/Sponsor.jsx";
import Gallery from "./pages/Gallery.jsx";
import YearBooklet from "./pages/YearBooklet.jsx";
import Newsletter from "./pages/Newsletter.jsx";

const logo = "/logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "15px 40px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      boxSizing: "border-box",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: "50px",
      cursor: "pointer",
    },
    navCenter: {
      display: "flex",
      gap: "30px",
      alignItems: "center",
    },
    link: {
      color: "#333",
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "15px",
      transition: "color 0.3s ease",
      position: "relative",
      padding: "5px 0",
    },
    linkHover: {
      color: "#e87d24",
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    cartIcon: {
      fontSize: "20px",
      cursor: "pointer",
      color: "#333",
    },
    socialText: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#333",
      marginRight: "10px",
    },
    main: {
      backgroundColor: "#000",
      color: "white",
      minHeight: "100vh",
      paddingTop: "80px",
    },
    footer: {
      backgroundColor: "#1a1a1a",
      padding: "60px 40px 30px",
      color: "#ccc",
    },
    footerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "40px",
      marginBottom: "40px",
    },
    footerLogo: {
      height: "60px",
      marginBottom: "20px",
    },
    footerLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    footerLink: {
      color: "#ccc",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
    },
    footerBottom: {
      textAlign: "center",
      paddingTop: "30px",
      borderTop: "1px solid #333",
      fontSize: "14px",
      color: "#999",
    },
    hamburger: {
      display: "none",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer",
      padding: "10px",
    },
    hamburgerLine: {
      width: "25px",
      height: "3px",
      backgroundColor: "#333",
      transition: "all 0.3s ease",
    },
    mobileMenu: {
      display: "none",
      position: "fixed",
      top: "80px",
      left: 0,
      width: "100%",
      backgroundColor: "#fff",
      padding: "20px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      flexDirection: "column",
      gap: "15px",
      zIndex: 999,
    },
  };

  // Media query handling
  const isMobile = window.innerWidth <= 768;

  return (
    <Router>
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="ALChE" style={styles.logo} />
          </Link>
        </div>

        {!isMobile && (
          <div style={styles.navCenter}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About us</Link>
            <Link to="/calendar" style={styles.link}>Our Calendar</Link>
            <Link to="/contact" style={styles.link}>Contact us</Link>
            <Link to="/sponsor" style={styles.link}>Be a sponsor</Link>
            <Link to="/gallery" style={styles.link}>Our gallery</Link>
            <Link to="/yearbooklet" style={styles.link}>Year Booklet</Link>
            <Link to="/newsletter" style={styles.link}>Newsletter</Link>
          </div>
        )}

        <div style={styles.navRight}>
          <span style={styles.cartIcon}>🛒 0</span>
          <span style={styles.socialText}>Follow us</span>
        </div>

        <div 
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={styles.hamburgerLine}></div>
          <div style={styles.hamburgerLine}></div>
          <div style={styles.hamburgerLine}></div>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ ...styles.mobileMenu, display: "flex" }}>
          <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" style={styles.link} onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to="/calendar" style={styles.link} onClick={() => setMenuOpen(false)}>Our Calendar</Link>
          <Link to="/contact" style={styles.link} onClick={() => setMenuOpen(false)}>Contact us</Link>
          <Link to="/sponsor" style={styles.link} onClick={() => setMenuOpen(false)}>Be a sponsor</Link>
          <Link to="/gallery" style={styles.link} onClick={() => setMenuOpen(false)}>Our gallery</Link>
          <Link to="/yearbooklet" style={styles.link} onClick={() => setMenuOpen(false)}>Year Booklet</Link>
          <Link to="/newsletter" style={styles.link} onClick={() => setMenuOpen(false)}>Newsletter</Link>
        </div>
      )}

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/yearbooklet" element={<YearBooklet />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div>
            <img src={logo} alt="ALChE" style={styles.footerLogo} />
          </div>
          <div>
            <h4 style={{ marginBottom: "15px", color: "#fff" }}>Quick Links</h4>
            <div style={styles.footerLinks}>
              <Link to="/" style={styles.footerLink}>Home</Link>
              <Link to="/about" style={styles.footerLink}>About us</Link>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: "15px", color: "#fff" }}>Follow us</h4>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>Facebook</a>
              <a href="#" style={styles.footerLink}>Twitter</a>
              <a href="#" style={styles.footerLink}>Instagram</a>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2025 ALChE. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
