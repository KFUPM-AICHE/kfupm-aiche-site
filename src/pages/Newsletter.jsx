import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const newsletters = [
    {
      date: "December 2024",
      title: "Year in Review: Our Greatest Achievements",
      description: "Reflecting on an incredible year of events, competitions, and community building.",
      image: "/239.jpg",
    },
    {
      date: "November 2024",
      title: "Industry Insights: Petrochemical Innovations",
      description: "Exclusive interviews with leading industry professionals and latest trends.",
      image: "/299.jpg",
    },
    {
      date: "October 2024",
      title: "Student Spotlight: Success Stories",
      description: "Celebrating our members' achievements in research, competitions, and internships.",
      image: "/1510.jpg",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

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
      borderRadius: "15px",
      maxWidth: "1000px",
      margin: "0 auto 80px",
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "700",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.3rem",
      color: "#ccc",
      maxWidth: "700px",
      margin: "0 auto 40px",
      lineHeight: "1.8",
    },
    subscribeForm: {
      display: "flex",
      gap: "15px",
      maxWidth: "600px",
      margin: "0 auto",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    input: {
      flex: 1,
      minWidth: "250px",
      padding: "15px 20px",
      fontSize: "1rem",
      border: "2px solid #2a2a2a",
      borderRadius: "8px",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      outline: "none",
      transition: "border-color 0.3s ease",
    },
    btn: {
      backgroundColor: "#e87d24",
      color: "#000",
      padding: "15px 40px",
      fontSize: "1.1rem",
      fontWeight: "600",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    successMsg: {
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      border: "1px solid #22c55e",
      borderRadius: "8px",
      color: "#22c55e",
      fontSize: "1.1rem",
    },
    newslettersGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    newsletterCard: {
      backgroundColor: "#1a1a1a",
      borderRadius: "15px",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "2px solid #2a2a2a",
    },
    newsletterImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },
    newsletterContent: {
      padding: "30px",
    },
    newsletterDate: {
      color: "#e87d24",
      fontSize: "0.95rem",
      fontWeight: "600",
      marginBottom: "10px",
    },
    newsletterTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "15px",
      lineHeight: "1.3",
    },
    newsletterDescription: {
      fontSize: "1rem",
      color: "#ccc",
      lineHeight: "1.7",
      marginBottom: "20px",
    },
    readMoreBtn: {
      color: "#e87d24",
      fontSize: "1rem",
      fontWeight: "600",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      transition: "gap 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Newsletter</h1>
        <p style={styles.subtitle}>
          Stay updated with our latest news, events, and exclusive insights from the world
          of chemical engineering. Subscribe to never miss an update!
        </p>
        <form onSubmit={handleSubscribe} style={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => {
              e.target.style.borderColor = "#e87d24";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#2a2a2a";
            }}
          />
          <button
            type="submit"
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
            Subscribe
          </button>
        </form>
        {subscribed && (
          <div style={styles.successMsg}>
            ✓ Thank you for subscribing! Check your email for confirmation.
          </div>
        )}
      </div>

      {/* Past Newsletters */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Past Editions
        </h2>
        <div style={styles.newslettersGrid}>
          {newsletters.map((newsletter, index) => (
            <div
              key={index}
              style={styles.newsletterCard}
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
              <img
                src={newsletter.image}
                alt={newsletter.title}
                style={styles.newsletterImage}
              />
              <div style={styles.newsletterContent}>
                <div style={styles.newsletterDate}>{newsletter.date}</div>
                <h3 style={styles.newsletterTitle}>{newsletter.title}</h3>
                <p style={styles.newsletterDescription}>{newsletter.description}</p>
                <a
                  href="#"
                  style={styles.readMoreBtn}
                  onMouseEnter={(e) => {
                    e.target.style.gap = "12px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.gap = "8px";
                  }}
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
