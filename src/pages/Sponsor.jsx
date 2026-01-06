import React from "react";

function Sponsor() {
  const sponsorshipPackages = [
    {
      name: "Platinum",
      price: "SR 50,000",
      color: "#e5e7eb",
      benefits: [
        "Logo on all event materials",
        "Exclusive booth at all events",
        "Social media mentions (20+ posts)",
        "Speaking opportunity at major event",
        "Direct access to student database",
        "Priority in all communications",
      ],
    },
    {
      name: "Gold",
      price: "SR 30,000",
      color: "#fbbf24",
      benefits: [
        "Logo on event materials",
        "Booth at 3 major events",
        "Social media mentions (10+ posts)",
        "Company presentation opportunity",
        "Resume database access",
      ],
    },
    {
      name: "Silver",
      price: "SR 15,000",
      color: "#9ca3af",
      benefits: [
        "Logo on selected materials",
        "Booth at 1 major event",
        "Social media mentions (5+ posts)",
        "Job posting privileges",
      ],
    },
  ];

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
    },
    subtitle: {
      fontSize: "1.3rem",
      color: "#ccc",
      maxWidth: "800px",
      margin: "0 auto 30px",
      lineHeight: "1.8",
    },
    packagesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto 80px",
      padding: "0 20px",
    },
    packageCard: {
      backgroundColor: "#1a1a1a",
      padding: "40px",
      borderRadius: "15px",
      border: "2px solid #2a2a2a",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textAlign: "center",
    },
    packageName: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "15px",
    },
    packagePrice: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#e87d24",
      marginBottom: "30px",
    },
    benefitsList: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 30px 0",
      textAlign: "left",
    },
    benefitItem: {
      fontSize: "1rem",
      color: "#ccc",
      marginBottom: "12px",
      paddingLeft: "25px",
      position: "relative",
      lineHeight: "1.6",
    },
    checkmark: {
      position: "absolute",
      left: 0,
      color: "#e87d24",
      fontWeight: "700",
    },
    btn: {
      backgroundColor: "#e87d24",
      color: "#000",
      padding: "14px 35px",
      fontSize: "1.1rem",
      fontWeight: "600",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
    },
    whySection: {
      maxWidth: "1000px",
      margin: "0 auto 80px",
      padding: "60px 40px",
      backgroundColor: "#1a1a1a",
      borderRadius: "15px",
      textAlign: "center",
    },
    whyTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "30px",
      color: "#e87d24",
    },
    whyGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      marginTop: "40px",
    },
    whyCard: {
      padding: "20px",
    },
    whyIcon: {
      fontSize: "3rem",
      marginBottom: "15px",
    },
    whyCardTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      marginBottom: "10px",
    },
    whyCardText: {
      fontSize: "1rem",
      color: "#ccc",
      lineHeight: "1.6",
    },
    contactSection: {
      textAlign: "center",
      padding: "60px 20px",
    },
    contactTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "20px",
    },
    contactText: {
      fontSize: "1.2rem",
      color: "#ccc",
      marginBottom: "30px",
      maxWidth: "600px",
      margin: "0 auto 30px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Be a Sponsor</h1>
        <p style={styles.subtitle}>
          Partner with us to make a lasting impact on the next generation of chemical engineers.
          Your support helps us create opportunities, inspire innovation, and build a stronger community.
        </p>
      </div>

      {/* Why Sponsor Section */}
      <div style={styles.whySection}>
        <h2 style={styles.whyTitle}>Why Sponsor KFUPM AIChE?</h2>
        <div style={styles.whyGrid}>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>🎓</div>
            <h3 style={styles.whyCardTitle}>Top Talent</h3>
            <p style={styles.whyCardText}>
              Direct access to the brightest chemical engineering students in the region.
            </p>
          </div>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>🚀</div>
            <h3 style={styles.whyCardTitle}>Brand Visibility</h3>
            <p style={styles.whyCardText}>
              Showcase your brand to thousands of students and industry professionals.
            </p>
          </div>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>🤝</div>
            <h3 style={styles.whyCardTitle}>Industry Leadership</h3>
            <p style={styles.whyCardText}>
              Position your company as a leader in supporting education and innovation.
            </p>
          </div>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>💼</div>
            <h3 style={styles.whyCardTitle}>Recruitment Pipeline</h3>
            <p style={styles.whyCardText}>
              Build relationships with future engineers before they enter the job market.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsorship Packages */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", textAlign: "center", marginBottom: "50px" }}>
          Sponsorship Packages
        </h2>
        <div style={styles.packagesGrid}>
          {sponsorshipPackages.map((pkg, index) => (
            <div
              key={index}
              style={styles.packageCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(232, 125, 36, 0.3)";
                e.currentTarget.style.borderColor = "#e87d24";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#2a2a2a";
              }}
            >
              <h3 style={styles.packageName}>{pkg.name}</h3>
              <div style={styles.packagePrice}>{pkg.price}</div>
              <ul style={styles.benefitsList}>
                {pkg.benefits.map((benefit, i) => (
                  <li key={i} style={styles.benefitItem}>
                    <span style={styles.checkmark}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button
                style={styles.btn}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 5px 15px rgba(232, 125, 36, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Ready to Partner with Us?</h2>
        <p style={styles.contactText}>
          Contact us today to discuss custom sponsorship opportunities tailored to your company's goals.
        </p>
        <a
          href="/contact"
          style={{
            ...styles.btn,
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Sponsor;
