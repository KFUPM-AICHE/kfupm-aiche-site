import React from "react";

function Sponsor() {
  const sponsorshipPackages = [
    {
      id: "gold",
      name: "GOLD SPONSOR",
      price: "25,000.00 SAR",
      priceUSD: "(6,620.91 USD)",
      color: "#C9A961",
      accentColor: "#F4E5C2",
      benefits: [
        {
          title: "Premium logo placement",
          description: "Sponsor's logo will be prominently displayed on all event promotional materials, including social media posts and event banners."
        },
        {
          title: "Keynote Speaking Opportunity",
          description: "A prime opportunity for the sponsor to address attendees at one of our events, allowing them to share industry insights, showcase their brand, and engage directly with a significant audience of students and faculty."
        },
        {
          title: "VIP Event Access",
          description: "Receive up to 6 VIP tickets to attend all official chapter events, including major KFUPM events where the chapter participates with a booth or as a partner. Tickets offer premium seating and valuable networking opportunities."
        },
        {
          title: "Customized Engagement opportunities",
          description: "The flexibility for the sponsor to propose and develop a unique engagement activity or event that aligns with their objectives, such as sponsored research challenges, design competitions, or providing a creative way to engage with KFUPM students and faculty."
        },
        {
          title: "Global Competition Recognition",
          description: "Special recognition for the sponsor in the context of global competitions that our students participate and compete internationally in. The sponsor's logo will be on t-shirts, lab coats, scientific posters and promotional materials for our teams."
        }
      ]
    },
    {
      id: "silver",
      name: "SILVER SPONSOR",
      price: "19,500.00 SAR",
      priceUSD: "(5,157.08 USD)",
      color: "#A8A8A8",
      accentColor: "#E8E8E8",
      benefits: [
        {
          title: "Premium logo placement",
          description: "Sponsor's logo will be prominently displayed on all event promotional materials, including social media posts and event banners."
        },
        {
          title: "Social Media Recognition",
          description: "Regular mentions and acknowledgments on our chapter's social media platforms, leading up to and during events, highlighting the sponsor's support and contributions."
        },
        {
          title: "Event Participation",
          description: "Opportunity for the sponsor to have a speaking slot at one of our smaller events or workshops, providing direct engagement with students and faculty."
        }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Annual Events" },
    { number: "15+", label: "Industry Partners" },
    { number: "10+", label: "Years of Excellence" }
  ];

  const styles = {
    container: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      minHeight: "100vh",
    },
    
    // Hero Section
    heroSection: {
      position: "relative",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
      overflow: "hidden",
    },
    
    heroBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('/892.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.15,
      filter: "blur(2px)",
    },
    
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(45,45,45,0.9) 50%, rgba(26,26,26,0.95) 100%)",
    },
    
    heroContent: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      maxWidth: "1000px",
      padding: "0 20px",
    },
    
    heroLabel: {
      display: "inline-block",
      padding: "8px 24px",
      background: "rgba(255, 135, 55, 0.15)",
      border: "1px solid rgba(255, 135, 55, 0.3)",
      borderRadius: "50px",
      color: "#FF8737",
      fontSize: "0.9rem",
      fontWeight: "600",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "30px",
    },
    
    heroTitle: {
      fontSize: "clamp(3rem, 8vw, 5.5rem)",
      fontWeight: "800",
      color: "#FFFFFF",
      marginBottom: "25px",
      letterSpacing: "-3px",
      lineHeight: "1.1",
    },
    
    heroTitleAccent: {
      background: "linear-gradient(135deg, #FF8737 0%, #FFA837 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
      color: "rgba(255, 255, 255, 0.8)",
      marginBottom: "40px",
      lineHeight: "1.7",
      fontWeight: "300",
    },
    
    heroStats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: 40,
      maxWidth: "800px",
      margin: "50px auto 0",
    },
    
    statItem: {
      textAlign: "center",
    },
    
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#FF8737",
      marginBottom: "8px",
    },
    
    statLabel: {
      fontSize: "0.9rem",
      color: "rgba(255, 255, 255, 0.6)",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: "500",
    },
    
    // Packages Section
    packagesSection: {
      padding: "120px 20px",
      background: "linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)",
      position: "relative",
    },
    
    packagesPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(30deg, rgba(255,135,55,0.03) 12%, transparent 12.5%, transparent 87%, rgba(255,135,55,0.03) 87.5%, rgba(255,135,55,0.03)),
        linear-gradient(150deg, rgba(255,135,55,0.03) 12%, transparent 12.5%, transparent 87%, rgba(255,135,55,0.03) 87.5%, rgba(255,135,55,0.03)),
        linear-gradient(30deg, rgba(255,135,55,0.03) 12%, transparent 12.5%, transparent 87%, rgba(255,135,55,0.03) 87.5%, rgba(255,135,55,0.03)),
        linear-gradient(150deg, rgba(255,135,55,0.03) 12%, transparent 12.5%, transparent 87%, rgba(255,135,55,0.03) 87.5%, rgba(255,135,55,0.03))
      `,
      backgroundSize: "80px 140px",
      backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
      opacity: 0.5,
    },
    
    packagesContainer: {
      maxWidth: "1300px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },
    
    sectionHeader: {
      textAlign: "center",
      marginBottom: "80px",
    },
    
    sectionTitle: {
      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
      fontWeight: "700",
      color: "#FFFFFF",
      marginBottom: "20px",
      letterSpacing: "-1px",
    },
    
    sectionSubtitle: {
      fontSize: "1.2rem",
      color: "rgba(255, 255, 255, 0.7)",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.7",
    },
    
    packagesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
      gap: 50,
    },
    
    packageCard: {
      background: "#FFFFFF",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    
    packageHeader: {
      padding: "50px 40px",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    },
    
    packageName: {
      fontSize: "2rem",
      fontWeight: "800",
      color: "#FFFFFF",
      marginBottom: "30px",
      letterSpacing: "3px",
      textTransform: "uppercase",
    },
    
    packagePriceContainer: {
      marginBottom: "15px",
    },
    
    packagePrice: {
      fontSize: "2.8rem",
      fontWeight: "800",
      color: "#FFFFFF",
      lineHeight: 1,
      marginBottom: "8px",
    },
    
    packagePriceUSD: {
      fontSize: "1.1rem",
      color: "rgba(255, 255, 255, 0.8)",
      fontWeight: "400",
    },
    
    packageVat: {
      fontSize: "0.85rem",
      color: "rgba(255, 255, 255, 0.7)",
      fontStyle: "italic",
      marginTop: "10px",
    },
    
    packageBody: {
      padding: "50px 40px",
    },
    
    benefitsTitle: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#494949",
      marginBottom: "35px",
    },
    
    benefitsList: {
      display: "flex",
      flexDirection: "column",
      gap: 30,
    },
    
    benefitItem: {
      paddingBottom: "30px",
      borderBottom: "1px solid #E8E8E8",
    },
    
    benefitItemLast: {
      borderBottom: "none",
      paddingBottom: 0,
    },
    
    benefitTitle: {
      fontSize: "1.1rem",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "10px",
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
    },
    
    benefitBullet: {
      color: "#FF8737",
      fontSize: "1.5rem",
      lineHeight: 1,
      marginTop: "-2px",
      flexShrink: 0,
    },
    
    benefitDescription: {
      fontSize: "1rem",
      color: "#6B6B6B",
      lineHeight: "1.8",
      paddingLeft: "27px",
    },
    
    packageFooter: {
      padding: "0 40px 50px",
    },
    
    ctaButton: {
      width: "100%",
      padding: "18px",
      background: "linear-gradient(135deg, #FF8737 0%, #FFA837 100%)",
      border: "none",
      borderRadius: "12px",
      color: "#FFFFFF",
      fontSize: "1.1rem",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 30px rgba(255, 135, 55, 0.3)",
    },
    
    // Contact Section
    contactSection: {
      padding: "120px 20px",
      background: "linear-gradient(135deg, #FF8737 0%, #FFA837 100%)",
      position: "relative",
      overflow: "hidden",
    },
    
    contactPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
      backgroundSize: "40px 40px",
    },
    
    contactContainer: {
      maxWidth: "1000px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
      textAlign: "center",
    },
    
    contactTitle: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: "800",
      color: "#FFFFFF",
      marginBottom: "20px",
      letterSpacing: "-2px",
    },
    
    contactSubtitle: {
      fontSize: "1.3rem",
      color: "rgba(255, 255, 255, 0.9)",
      marginBottom: "60px",
      fontWeight: "300",
    },
    
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 30,
      marginBottom: "60px",
    },
    
    contactCard: {
      padding: "30px",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(20px)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
    },
    
    contactIcon: {
      fontSize: "2rem",
      marginBottom: "15px",
    },
    
    contactLabel: {
      fontSize: "0.85rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: "rgba(255, 255, 255, 0.8)",
      marginBottom: "10px",
      fontWeight: "600",
    },
    
    contactLink: {
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: "1.1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    
    socialBar: {
      display: "flex",
      justifyContent: "center",
      gap: 15,
      paddingTop: "40px",
      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    },
    
    socialButton: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#FFFFFF",
      fontSize: "1.2rem",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroOverlay}></div>
        
        <div style={styles.heroContent}>
          <div style={styles.heroLabel}>For 2025-2026 (Full Academic Year)</div>
          
          <h1 style={styles.heroTitle}>
            Sponsorship <span style={styles.heroTitleAccent}>Proposal</span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            For the KFUPM AIChE Students Chapter
          </p>
          
          <div style={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statItem}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div style={styles.packagesSection}>
        <div style={styles.packagesPattern}></div>
        
        <div style={styles.packagesContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Sponsor packages
            </h2>
            <p style={styles.sectionSubtitle}>
              Choose the partnership level that aligns with your organization's goals
            </p>
          </div>
          
          <div style={styles.packagesGrid}>
            {sponsorshipPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                style={styles.packageCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px)";
                  e.currentTarget.style.boxShadow = "0 30px 80px rgba(255, 135, 55, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.2)";
                }}
              >
                <div style={{
                  ...styles.packageHeader,
                  background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.accentColor} 100%)`
                }}>
                  <h3 style={styles.packageName}>{pkg.name}</h3>
                  <div style={styles.packagePriceContainer}>
                    <div style={styles.packagePrice}>Price: {pkg.price}</div>
                    <div style={styles.packagePriceUSD}>{pkg.priceUSD}</div>
                    <div style={styles.packageVat}>*Prices subject to VAT</div>
                  </div>
                </div>
                
                <div style={styles.packageBody}>
                  <h4 style={styles.benefitsTitle}>Benefits:</h4>
                  <div style={styles.benefitsList}>
                    {pkg.benefits.map((benefit, i) => (
                      <div 
                        key={i} 
                        style={{
                          ...styles.benefitItem,
                          ...(i === pkg.benefits.length - 1 ? styles.benefitItemLast : {})
                        }}
                      >
                        <div style={styles.benefitTitle}>
                          <span style={styles.benefitBullet}>•</span>
                          <span>{benefit.title}</span>
                        </div>
                        <p style={styles.benefitDescription}>{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={styles.packageFooter}>
                  <button
                    style={styles.ctaButton}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 15px 40px rgba(255, 135, 55, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 10px 30px rgba(255, 135, 55, 0.3)";
                    }}
                  >
                    Choose {pkg.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <div style={styles.contactPattern}></div>
        
        <div style={styles.contactContainer}>
          <h2 style={styles.contactTitle}>Let's Get In Touch!</h2>
          <p style={styles.contactSubtitle}>
            WE HOPE TO HEAR FROM YOU SOON.
          </p>
          
          <div style={styles.contactGrid}>
            <div 
              style={styles.contactCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.contactIcon}>✉️</div>
              <div style={styles.contactLabel}>Email</div>
              <a 
                href="mailto:aiche@kfupm.edu.sa" 
                style={styles.contactLink}
                onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
              >
                aiche@kfupm.edu.sa
              </a>
            </div>
            
            <div 
              style={styles.contactCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.contactIcon}>📞</div>
              <div style={styles.contactLabel}>Phone</div>
              <a 
                href="tel:+966538220595" 
                style={styles.contactLink}
                onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
              >
                +966 53 822 0595
              </a>
            </div>
          </div>
          
          <div style={styles.socialBar}>
            <p style={{ 
              color: "#FFFFFF", 
              fontSize: "1rem", 
              marginBottom: "20px",
              width: "100%",
              fontWeight: "500"
            }}>
              Visit Our Social media Pages
            </p>
          </div>
          
          <div style={styles.socialBar}>
            {[
              { icon: "𝕏", url: "https://twitter.com/KFUPM_AIChE", label: "KFUPM_AIChE" },
              { icon: "♪", url: "https://www.tiktok.com/@KFUPM_AIChE", label: "KFUPM_AIChE" },
              { icon: "in", url: "https://www.linkedin.com/company/kfupm-aiche", label: "KFUPM AIChE" },
              { icon: "📷", url: "https://www.instagram.com/KFUPM.AIChE", label: "KFUPM.AIChE" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                style={styles.socialButton}
                title={social.label}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.25)";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
