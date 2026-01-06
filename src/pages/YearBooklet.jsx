import React from "react";

function YearBooklet() {
  const styles = {
    container: {
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "80px 20px 20px",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      padding: "40px 20px",
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
      margin: "0 auto",
      lineHeight: "1.8",
    },
    iframeContainer: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 20px",
      backgroundColor: "#1a1a1a",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
    },
    iframe: {
      width: "100%",
      height: "800px",
      border: "none",
      display: "block",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Year Booklet</h1>
        <p style={styles.subtitle}>
          Discover our annual highlights and achievements through our interactive digital booklet.
          Explore the moments that made this year unforgettable.
        </p>
      </div>
      
      <div style={styles.iframeContainer}>
        <iframe
          src="https://online.fliphtml5.com/kslxc/zrfq/"
          style={styles.iframe}
          title="Year Booklet"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default YearBooklet;
