import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e87d24",
      padding: "10px 0",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    logoContainer: {
      position: "absolute",
      left: "30px",
    },
    logo: {
      height: "35px",
    },
    links: {
      display: "flex",
      gap: "25px",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "16px",
      transition: "color 0.3s",
    },
    main: {
      backgroundColor: "#1d1d1d",
      color: "white",
      minHeight: "100vh",
      paddingTop: "80px", // عشان المحتوى ما يختفي خلف الشريط
      textAlign: "center",
    },
  };

  return (
    <Router>
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="KFUPM AIChE" style={styles.logo} />
        </div>

        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/calendar" style={styles.link}>Our Calendar</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
          <Link to="/sponsor" style={styles.link}>Be a Sponsor</Link>
          <Link to="/gallery" style={styles.link}>Our Gallery</Link>
          <Link to="/yearbooklet" style={styles.link}>Year Booklet</Link>
          <Link to="/newsletter" style={styles.link}>Newsletter</Link>
        </div>
      </nav>

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
    </Router>
  );
}

export default App;
