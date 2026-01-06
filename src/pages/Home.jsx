import React from "react";

function Home() {
  const styles = {
    container: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      color: "#494949",
    },
    
    // Hero Section - Miraillet Festival
    heroSection: {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/891.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "100px 20px",
      position: "relative",
    },
    heroTitle: {
      fontSize: "3.5rem",
      fontWeight: "700",
      marginBottom: "25px",
      color: "#FFFFFF",
      textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
      letterSpacing: "-0.5px",
    },
    heroSubtitle: {
      fontSize: "1.1rem",
      marginBottom: "35px",
      maxWidth: "650px",
      lineHeight: "1.7",
      color: "#FFFFFF",
      fontWeight: "400",
    },
    
    // Buttons
    btnPrimary: {
      backgroundColor: "#FF8737",
      color: "#FFFFFF",
      padding: "12px 32px",
      fontSize: "1rem",
      fontWeight: "600",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
      textTransform: "none",
    },
    
    // White Section
    sectionWhite: {
      backgroundColor: "#FFFFFF",
      padding: "80px 20px",
    },
    
    // Light Gray Section  
    sectionLightGray: {
      backgroundColor: "#F5F5F5",
      padding: "80px 20px",
    },
    
    // Dark Gray Section
    sectionDarkGray: {
      backgroundColor: "#494949",
      padding: "80px 20px",
      color: "#FFFFFF",
    },
    
    sectionTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "20px",
      textAlign: "center",
      color: "#494949",
      letterSpacing: "-0.5px",
    },
    
    sectionTitleWhite: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "20px",
      textAlign: "center",
      color: "#FFFFFF",
      letterSpacing: "-0.5px",
    },
    
    sectionSubtitle: {
      fontSize: "1.05rem",
      color: "#6B6B6B",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto 40px",
      lineHeight: "1.7",
      fontWeight: "400",
    },
    
    sectionSubtitleWhite: {
      fontSize: "1.05rem",
      color: "#E0E0E0",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto 40px",
      lineHeight: "1.7",
      fontWeight: "400",
    },
    
    contentContainer: {
      maxWidth: "1140px",
      margin: "0 auto",
      padding: "0 15px",
    },
    
    // Key Metrics
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "50px",
      maxWidth: "1000px",
      margin: "50px auto 0",
      textAlign: "center",
    },
    metricNumber: {
      fontSize: "3.8rem",
      fontWeight: "700",
      color: "#FF8737",
      marginBottom: "20px",
      lineHeight: "1",
    },
    metricText: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#6B6B6B",
      fontWeight: "400",
    },
    
    // Upcoming Concerts Cards
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px",
      marginTop: "50px",
    },
    card: {
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    cardImg: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      display: "block",
    },
    cardContent: {
      padding: "28px 24px",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "8px",
      color: "#494949",
      lineHeight: "1.3",
    },
    cardDate: {
      color: "#FF8737",
      fontSize: "0.95rem",
      marginBottom: "16px",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    cardText: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      color: "#6B6B6B",
      marginBottom: "24px",
    },
    
    // Yearly Booklet
    bookletGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
      gap: "40px",
      marginTop: "50px",
    },
    bookletCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    },
    bookletImg: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      display: "block",
    },
    bookletContent: {
      padding: "32px 28px",
    },
    bookletTitle: {
      fontSize: "1.6rem",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#494949",
      lineHeight: "1.3",
    },
    bookletText: {
      fontSize: "0.95rem",
      lineHeight: "1.7",
      color: "#6B6B6B",
      marginBottom: "24px",
    },
    
    // Member of the Month
    memberSection: {
      backgroundColor: "#F5F5F5",
      padding: "80px 20px",
      textAlign: "center",
    },
    memberLabel: {
      fontSize: "0.9rem",
      color: "#FF8737",
      marginBottom: "15px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    memberCard: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
    },
    memberImg: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0 auto 25px",
      display: "block",
      border: "4px solid #FFFFFF",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    memberName: {
      fontSize: "2.2rem",
      fontWeight: "700",
      marginBottom: "30px",
      color: "#494949",
    },
    
    // Trusted References
    referencesSection: {
      backgroundColor: "#FFFFFF",
      padding: "80px 20px",
      textAlign: "center",
    },
    sponsorLogos: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "60px",
      flexWrap: "wrap",
      marginTop: "50px",
    },
    sponsorLogo: {
      height: "50px",
      width: "auto",
      opacity: "0.6",
      transition: "all 0.3s ease",
      cursor: "pointer",
      filter: "grayscale(100%)",
    },
    
    // Divider
    divider: {
      height: "1px",
      backgroundColor: "#E0E0E0",
      margin: "60px auto",
      maxWidth: "1140px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section - Miraillet Festival */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Miraillet Festival</h1>
        <p style={styles.heroSubtitle}>
          From the 12th to the 17th of August, come and enjoy the atmosphere at the Miraillet Festival. Discover the line up below.
        </p>
        <a href="/contactus" style={styles.btnPrimary}>
          More Info
        </a>
      </section>

      {/* 6 Days Pass Section - White Background */}
      <section style={styles.sectionWhite}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>6 Days Pass</h2>
          <p style={styles.sectionSubtitle}>
            Tickets will be on sale soon. Do not miss our 6 Days Pass. Free camping!
          </p>
          <div style={{ textAlign: "center" }}>
            <a href="/" style={styles.btnPrimary}>
              More Info
            </a>
          </div>
        </div>
      </section>

      {/* Recent Editions Section - Light Gray Background */}
      <section style={styles.sectionLightGray}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Recent Editions</h2>
          <p style={styles.sectionSubtitle}>
            Discover what makes the reputation of the Miraillet festival through these after-movies.
          </p>
          <div style={{ textAlign: "center" }}>
            <a href="/" style={styles.btnPrimary}>
              More Info
            </a>
          </div>
        </div>
      </section>

      {/* Key Metrics Section - White Background */}
      <section style={styles.sectionWhite}>
        <div style={styles.contentContainer}>
          <h3 style={{ ...styles.sectionTitle, fontSize: "1.8rem", marginBottom: "15px" }}>
            Key Metrics of Company's Achievements
          </h3>
          <p style={styles.sectionSubtitle}>
            Our key metrics, from revenue growth to customer retention and market expansion, highlight our strategic prowess and commitment to sustainable business success.
          </p>
          <div style={styles.metricsGrid}>
            <div>
              <div style={styles.metricNumber}>$ 32M</div>
              <p style={styles.metricText}>
                Clients saved $32 million with our services.
              </p>
            </div>
            <div>
              <div style={styles.metricNumber}>+25.000</div>
              <p style={styles.metricText}>
                We proudly serves over 25,000 clients.
              </p>
            </div>
            <div>
              <div style={styles.metricNumber}>75%</div>
              <p style={styles.metricText}>
                75% of clients have been using the service for over a decade consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Concerts Section - Dark Gray Background */}
      <section style={styles.sectionDarkGray}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitleWhite}>Upcoming concerts</h2>
          <div style={styles.cardsGrid}>
            <div 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
              }}
            >
              <img src="/89.jpg" alt="Belgium Tour" style={styles.cardImg} />
              <div style={styles.cardContent}>
                <h4 style={styles.cardTitle}>Belgium Tour</h4>
                <p style={styles.cardDate}>24th AUGUST</p>
                <p style={styles.cardText}>Discover the new album live.</p>
                <a href="#" style={styles.btnPrimary}>Get your tickets</a>
              </div>
            </div>
            
            <div 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
              }}
            >
              <img src="/892.jpg" alt="Barcelona Night" style={styles.cardImg} />
              <div style={styles.cardContent}>
                <h4 style={styles.cardTitle}>Barcelona Night</h4>
                <p style={styles.cardDate}>27th AUGUST</p>
                <p style={styles.cardText}>Get up close with the artists.</p>
                <a href="#" style={styles.btnPrimary}>Get your tickets</a>
              </div>
            </div>
            
            <div 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
              }}
            >
              <img src="/2910.jpg" alt="Amsterdam Tour" style={styles.cardImg} />
              <div style={styles.cardContent}>
                <h4 style={styles.cardTitle}>Amsterdam Tour</h4>
                <p style={styles.cardDate}>9th SEPTEMBER</p>
                <p style={styles.cardText}>Tour Grand Final.</p>
                <a href="#" style={styles.btnPrimary}>Get your tickets</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Yearly Booklet Section - White Background */}
      <section style={{ ...styles.sectionWhite, paddingTop: "60px" }}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>our yearly Booklet</h2>
          <div style={styles.bookletGrid}>
            <div style={styles.bookletCard}>
              <img src="/239.jpg" alt="TecShift Hackathon 2024" style={styles.bookletImg} />
              <div style={styles.bookletContent}>
                <h3 style={styles.bookletTitle}>TecShift Hackathon 2024</h3>
                <p style={styles.bookletText}>
                  In the TecShift hackathon, our team participated in the hydrogen track and offer a solution for hydrogen transportation using LOHC as a promising technique for transportation.
                </p>
                <a href="/newsletter" style={styles.btnPrimary}>Continue reading</a>
              </div>
            </div>
            
            <div style={styles.bookletCard}>
              <img src="/299.jpg" alt="INDUSTRIAL VISIT TO S-CHEM" style={styles.bookletImg} />
              <div style={styles.bookletContent}>
                <h3 style={styles.bookletTitle}>INDUSTRIAL VISIT TO S-CHEM</h3>
                <p style={styles.bookletText}>
                  Our students had the valuable opportunity to visit S-Chem, a leading petrochemical company in the Kingdom. They explored the company's production processes, gained insights into its products, and learned about the advanced technologies used in manufacturing.
                </p>
                <a href="/newsletter" style={styles.btnPrimary}>Continue reading</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member of the Month Section - Light Gray Background */}
      <section style={styles.memberSection}>
        <p style={styles.memberLabel}>Member of The Month</p>
        <div style={styles.memberCard}>
          <img src="/1510.jpg" alt="Rinad Saeed" style={styles.memberImg} />
          <h1 style={styles.memberName}>Rinad Saeed</h1>
          <a href="#" style={styles.btnPrimary}>Learn more</a>
        </div>
      </section>

      {/* Trusted References Section - White Background */}
      <section style={styles.referencesSection}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Trusted references</h2>
          <p style={styles.sectionSubtitle}>
            We are in good company.
          </p>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <a href="#" style={styles.btnPrimary}>See our case studies</a>
          </div>
          <div style={styles.sponsorLogos}>
            <img 
              src="/2110.jpg" 
              alt="Sponsor 1" 
              style={styles.sponsorLogo}
              onMouseEnter={(e) => {
                e.target.style.opacity = "1";
                e.target.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "0.6";
                e.target.style.filter = "grayscale(100%)";
              }}
            />
            <img 
              src="/710.jpg" 
              alt="Sponsor 2" 
              style={styles.sponsorLogo}
              onMouseEnter={(e) => {
                e.target.style.opacity = "1";
                e.target.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "0.6";
                e.target.style.filter = "grayscale(100%)";
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;