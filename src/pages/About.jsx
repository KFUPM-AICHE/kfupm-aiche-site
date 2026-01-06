function About() {
  const styles = {
    container: {
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "80px 20px",
    },
    hero: {
      textAlign: "center",
      marginBottom: "80px",
      padding: "60px 20px",
      background: "linear-gradient(135deg, #1a1a1a 0%, #000 100%)",
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "700",
      marginBottom: "20px",
      color: "#fff",
    },
    subtitle: {
      fontSize: "1.3rem",
      color: "#ccc",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.8",
    },
    section: {
      maxWidth: "1200px",
      margin: "0 auto 80px",
      padding: "0 20px",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "30px",
      color: "#e87d24",
    },
    content: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "#ccc",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "40px",
      marginTop: "50px",
    },
    card: {
      backgroundColor: "#1a1a1a",
      padding: "40px",
      borderRadius: "10px",
      border: "2px solid #2a2a2a",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.8rem",
      fontWeight: "600",
      marginBottom: "15px",
      color: "#e87d24",
    },
    cardText: {
      fontSize: "1rem",
      lineHeight: "1.7",
      color: "#ccc",
    },
    highlight: {
      color: "#e87d24",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Learn more about KFUPM AIChE, our mission, vision, and the incredible
          journey we've embarked on to inspire and empower future chemical engineers.
        </p>
      </div>

      {/* Mission Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.content}>
          At <span style={styles.highlight}>KFUPM AIChE</span>, our mission is to
          foster a community of passionate chemical engineering students who are
          committed to excellence, innovation, and professional development. We strive
          to bridge the gap between academic knowledge and industry practice through
          engaging events, workshops, and networking opportunities.
        </p>
        <p style={styles.content}>
          We believe in empowering students to become leaders in their field, equipped
          with the skills, knowledge, and connections needed to make a meaningful impact
          in the world of chemical engineering.
        </p>
      </div>

      {/* Vision Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Vision</h2>
        <p style={styles.content}>
          Our vision is to be the leading student chapter in the region, recognized for
          our commitment to academic excellence, professional development, and community
          engagement. We aim to create a platform where students can explore their
          potential, develop their skills, and build lasting relationships with industry
          professionals and peers.
        </p>
      </div>

      {/* What We Do Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Do</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🎓 Educational Events</h3>
            <p style={styles.cardText}>
              We organize workshops, seminars, and guest lectures featuring industry
              experts and academic leaders to enhance technical knowledge and skills.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🏭 Industrial Visits</h3>
            <p style={styles.cardText}>
              Regular visits to leading petrochemical companies and industrial plants
              provide hands-on exposure to real-world applications.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🤝 Networking</h3>
            <p style={styles.cardText}>
              Connect with professionals, alumni, and peers through our events and
              build relationships that last a lifetime.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🏆 Competitions</h3>
            <p style={styles.cardText}>
              Participate in national and international competitions, hackathons, and
              challenges to test your skills and win recognition.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📚 Resources</h3>
            <p style={styles.cardText}>
              Access to study materials, research papers, and exclusive content to
              support your academic journey.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🌟 Leadership</h3>
            <p style={styles.cardText}>
              Develop leadership skills through active participation in organizing
              events and managing chapter activities.
            </p>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div style={{ ...styles.section, textAlign: "center", marginTop: "100px" }}>
        <h2 style={styles.sectionTitle}>Join Our Community</h2>
        <p style={{ ...styles.content, maxWidth: "700px", margin: "0 auto 30px" }}>
          Whether you're a first-year student or a senior, there's a place for you in
          our community. Join us and be part of something bigger!
        </p>
        <a
          href="/contact"
          style={{
            backgroundColor: "#e87d24",
            color: "#000",
            padding: "15px 40px",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderRadius: "5px",
            textDecoration: "none",
            display: "inline-block",
            transition: "all 0.3s ease",
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default About;
