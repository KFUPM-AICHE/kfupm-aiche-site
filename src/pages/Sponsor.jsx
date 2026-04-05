import React, { useState } from "react";

function Sponsor() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSponsorshipInquiry = (packageName) => {
    const recipient = "aiche@kfupm.edu.sa";
    const subject = `Sponsorship Inquiry - ${packageName} Package`;
    const body = `Dear KFUPM AIChE Student Chapter Team,

I hope this message finds you well.

I am writing to express my interest in the ${packageName} Sponsorship Package for the 2025-2026 term. After reviewing the proposal, I believe this partnership aligns well with our organization's goals and values.

Could you please provide more details on the next steps to formalize this sponsorship agreement?

Looking forward to your response.

Best regards,
[Your Name]
[Your Title / Organization]
[Your Contact Information]`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const sponsorshipPackages = [
    {
      id: "gold",
      name: "Gold",
      price: "25,000.00 SAR",
      priceUSD: "(6,600.91 USD)",
      color: "#D4AF37",
      benefits: [
        { title: "Premium logo placement", description: "Sponsor's logo will be prominently displayed on all event promotional materials, including social media posts and event banners" },
        { title: "Keynote Speaking Opportunity", description: "A prime opportunity for the sponsor to address attendees at one of our events, allowing them to share industry insights, showcase their brand, and engage directly with a significant audience of students and faculty." },
        { title: "VIP Event Access", description: "Receive up to 6 VIP tickets to attend all official chapter events, including major KFUPM events where the chapter participates with a booth or as a partner. Tickets offer premium seating and valuable networking opportunities." },
        { title: "Customized Engagement opportunities", description: "The flexibility for the sponsor to propose and develop a unique engagement activity or event that aligns with their objectives, such as sponsored research challenges, design competitions, or providing a creative way to engage with KFUPM students and faculty" },
        { title: "Global Competition Recognition", description: "Special recognition for the sponsor in the context of global competitions that our students participate and compete internationally in. The sponsor's logo will be on t-shirts, lab coats, scientific posters and promotional materials for our teams" }
      ]
    },
    {
      id: "silver",
      name: "Silver",
      price: "19,500.00 SAR",
      priceUSD: "(5,197.81 USD)",
      color: "#C0C0C0",
      benefits: [
        { title: "Premium logo placement", description: "Sponsor's logo will be prominently displayed on all event promotional materials, including social media posts and event banners" },
        { title: "Social Media Recognition", description: "Regular mentions and acknowledgments on our chapter's social media platforms, leading up to and during events, highlighting the sponsor's support and contributions" },
        { title: "Event Participation", description: "Opportunity for the sponsor to have a speaking slot at one of our smaller events or workshops, allowing them to interact directly with students and establish their presence" }
      ]
    }
  ];

  const styles = {
    container: { width: '100%', minHeight: '100vh', backgroundColor: '#FFA837', padding: '40px 20px' },
    content: { maxWidth: '1200px', margin: '0 auto' },
    header: { textAlign: 'center', marginBottom: '30px' },
    yearLabel: { display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(73,73,73,0.1)', border: '1px solid rgba(73,73,73,0.2)', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600', color: '#494949', letterSpacing: '1px', marginBottom: '15px' },
    mainTitle: { fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '700', color: '#494949', marginBottom: '8px', letterSpacing: '-0.5px' },
    subtitle: { fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: '#494949', fontWeight: '400', opacity: 0.8, marginBottom: '25px' },
    chooseText: { fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: '600', color: '#494949', marginBottom: '30px' },
    packagesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' },
    packageCard: { backgroundColor: '#494949', borderRadius: '20px', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', position: 'relative' },
    cardGlow: { position: 'absolute', top: '-3px', left: '-3px', right: '-3px', bottom: '-3px', borderRadius: '20px', zIndex: -1, transition: 'opacity 0.4s ease', filter: 'blur(15px)', opacity: 0 },
    packageHeader: { padding: '25px 20px', textAlign: 'center', position: 'relative', color: '#FFFFFF' },
    packageName: { fontSize: '2rem', fontWeight: '700', marginBottom: '15px', position: 'relative', zIndex: 2, color: '#FFFFFF', letterSpacing: '2px' },
    priceMain: { fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '5px', position: 'relative', zIndex: 2 },
    priceUSD: { fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '8px', position: 'relative', zIndex: 2, opacity: 0.9 },
    priceVat: { fontSize: '0.75rem', color: '#FFFFFF', fontStyle: 'italic', position: 'relative', zIndex: 2, opacity: 0.8 },
    packageBody: { padding: '25px 20px', backgroundColor: '#FFFFFF' },
    benefitsTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#494949', marginBottom: '20px', position: 'relative', paddingBottom: '10px' },
    benefitsLine: { position: 'absolute', bottom: 0, left: 0, width: '60px', height: '3px', backgroundColor: '#FFA837' },
    benefitItem: { marginBottom: '18px', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px', borderRadius: '8px', transition: 'all 0.3s ease' },
    benefitNumber: { width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#FFA837', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '700', flexShrink: 0 },
    benefitContent: { flex: 1 },
    benefitTitle: { fontSize: '0.95rem', fontWeight: '700', color: '#494949', marginBottom: '6px' },
    benefitDesc: { fontSize: '0.85rem', color: '#6B6B6B', lineHeight: '1.6' },
    packageFooter: { padding: '20px', backgroundColor: '#F8F8F8', textAlign: 'center' },
    selectButton: { width: '100%', padding: '14px 30px', border: 'none', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', cursor: 'pointer', transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '1px', position: 'relative', overflow: 'hidden' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.yearLabel}>2025-2026</div>
          <h1 style={styles.mainTitle}>Sponsorship Proposal</h1>
          <p style={styles.subtitle}>KFUPM AIChE Students Chapter</p>
          <div style={styles.chooseText}>Choose your partner</div>
        </div>

        <div style={styles.packagesGrid}>
          {sponsorshipPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              style={{
                ...styles.packageCard,
                transform: hoveredCard === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredCard === index ? `0 15px 40px ${pkg.color}40` : '0 4px 15px rgba(0,0,0,0.08)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ ...styles.cardGlow, background: `linear-gradient(135deg, ${pkg.color}60, ${pkg.color}20)`, opacity: hoveredCard === index ? 1 : 0 }} />

              <div style={{ ...styles.packageHeader, background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)` }}>
                <div style={styles.packageName}>{pkg.name}</div>
                <div style={styles.priceMain}>{pkg.price}</div>
                <div style={styles.priceUSD}>{pkg.priceUSD}</div>
                <div style={styles.priceVat}>*Prices subject to VAT</div>
              </div>

              <div style={styles.packageBody}>
                <div style={styles.benefitsTitle}>
                  Benefits
                  <div style={styles.benefitsLine} />
                </div>
                {pkg.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    style={styles.benefitItem}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F8F8F8'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <div style={styles.benefitNumber}>{i + 1}</div>
                    <div style={styles.benefitContent}>
                      <div style={styles.benefitTitle}>{benefit.title}</div>
                      <div style={styles.benefitDesc}>{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={styles.packageFooter}>
                <button
                  onClick={() => handleSponsorshipInquiry(pkg.name)}
                  style={{ ...styles.selectButton, background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}DD)`, boxShadow: `0 5px 15px ${pkg.color}30` }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = `0 8px 20px ${pkg.color}50`; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = `0 5px 15px ${pkg.color}30`; }}
                >
                  Select {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsor;