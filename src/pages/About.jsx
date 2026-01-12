import React from 'react';

function About() {
  const stats = [
    { number: '110+', label: 'Total Active Members' },
    { number: '9', label: 'Competitions' },
    { number: '70+', label: 'Total Participants' },
    { number: '13', label: 'Seminars & Webinars' },
    { number: '410+', label: 'Students Benefited' },
    { number: '8', label: 'Industrial Visits' },
    { number: '107', label: 'Marketing Projects' },
    { number: '100+', label: 'Students Benefited' },
    { number: '1.7M+', label: 'Total Impressions' },
    { number: '6', label: 'Special Activities' },
    { number: '240+', label: 'Students Engaged' },
    { number: '20', label: 'Companies' },
    { number: '37', label: 'Guest Speakers' },
    { number: '9', label: 'Conferences' },
    { number: '120+', label: 'Students Represented' },
  ];

  // Organizational Structure
  const orgChart = {
    advisor: { name: 'Dr. Basim Abussaud', role: 'Advisor' },
    president: { name: 'Fatimah Almakinah', role: 'President' },
    vicePresident: { name: 'Anas Hakami', role: 'Vice President' },
    
    committeeHeads: [
      { name: 'Ghada Alghamidi', role: 'Events Committee Head' },
      { name: 'Laila Masah', role: 'Marketing Committee Head' },
      { name: 'Mohammed AlFakaoot', role: 'Marketing Vice Head' },
      { name: 'Nabaa Alasser', role: 'Outreach Committee Head' },
      { name: 'Lama Alharbi', role: 'Conferences Committee Head' },
      { name: 'Zahra Alsad', role: 'Conferences Vice Head' },
    ],
    
    specialists: [
      { name: 'Mohammed Almahboodi', role: 'HR Consultant' },
      { name: 'Monthal Alratzar', role: 'Sponsorship Specialist' },
      { name: 'Baama Aldahboul', role: 'Financial Officer' },
      { name: 'Soubah Alhayaz', role: 'Secretary' },
      { name: 'Abdullah Alomar', role: 'Advisory Consultant' },
      { name: 'Russel Alsahrani', role: 'Advisory Consultant' },
    ],
    
    qualityAdvisory: [
      { name: 'Alaa Alraad', role: 'Quality Advisory' },
      { name: 'Rashad Alrasa', role: 'Quality Advisory' },
      { name: 'Rann Alhaimas', role: 'Quality Advisory' },
      { name: 'Mahal Elsayee', role: 'Quality Advisory' },
      { name: 'Alma Zain', role: 'Quality Advisory' },
    ],
    
    teamLeaders: [
      { name: 'Zainab Aldrakhi', role: 'ESC & Partnerships Leader' },
      { name: 'Rawan Ratwa', role: 'Industrial Visits Leader' },
      { name: 'Radn Alsid', role: 'Activities Leader' },
      { name: 'Fatemah Alramadan', role: 'Seminars Coordinator' },
      { name: 'Batool Katna', role: 'Photographer Leader' },
      { name: 'Hania Almagboul', role: 'Designers Leader' },
      { name: 'Saba Aljohani', role: 'Web Developers Leader' },
      { name: 'Ridha Alhussain', role: 'Social Media Leader' },
    ],
    
    committees: {
      events: [
        'Rawan Badr-mustafa', 'Mayar Aljamiad', 'Mohammed Allwan',
        'Rabad Alharbi', 'Riid Alkhathlia', 'Lana Al-Abbasi',
        'Iqaiil Alsdhwar', 'Zaha Alheilan', 'Measa Alfarraj',
        'Deeasa Alhoustan', 'Nawaf Saeed Algahwari', 'Shoriq Almubilad'
      ],
      marketing: [
        'Mohammed Albaloshi', 'Fatimah Alhamadah', 'Joud Almarzoug',
        'Wejdan Alkassan', 'Hajir Alali', 'Noura Alqahtani',
        'Raghad Alsabia', 'Jana Mubaraki'
      ],
      designers: [
        'Fatemah Alzahrawi', 'Hisa Al-Kubash', 'Rasm Alzahlaf',
        'Maha Alnaamii', 'Muniran Alzahir', 'Haifa alharbi'
      ],
      photographers: [
        'Ali Al-Romaih', 'Zainab Alkhider', 'Nour Ali Albaseel',
        'Leen alkuhani', 'Nariyam Alkhataf', 'Alranloh Alraua',
        'Mohammed Alqahtaniadi'
      ],
      industrialVisits: [
        'Salem Baathur', 'Aseel Alkhawani', 'Quazi Alahdi',
        'Nora Alqatith', 'Mohammed Almajad', 'Tasnlia Alawani',
        'Hassan Albasil', 'Mariyam Alassam', 'Ward Ali Aloudaini',
        'Abdullah ALahmed', 'Amorah Alsabasil', 'Fatima Alarlaq'
      ],
      esc: [
        'Raghad Alsaba', 'Hajiah Alhamadbi', 'Fatimah Alzahaber',
        'Madi Albalotaj', 'Hasan Al-Mutairi'
      ],
      outreach: [
        'Shahad Alsarabi', 'Hussein Al-Qarni', 'Fatimah Almakinah',
        'Madi Albalotaj', 'Asseal Alzahrani'
      ],
      conferences: [
        'SALEM BAAHDI', 'Abdurhman alsade', 'Abdullah Alghamdii',
        'Ahmed Alshshii', 'Talal Al-Qabsani', 'Ali Sliyami',
        'Almuslim-Endegaii', 'Faisal Alzamarl'
      ],
    }
  };

  const styles = {
    container: {
      backgroundColor: '#FFA837',
      minHeight: '100vh',
      padding: '80px 20px',
    },
    hero: {
      textAlign: 'center',
      marginBottom: '80px',
      maxWidth: '900px',
      margin: '0 auto 80px',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '700',
      color: '#494949',
      marginBottom: '30px',
    },
    description: {
      fontSize: '1.2rem',
      color: '#494949',
      lineHeight: '1.8',
      marginBottom: '60px',
    },
    mvvSection: {
      maxWidth: '1200px',
      margin: '0 auto 80px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      padding: '0 40px',
    },
    mvvCard: {
      backgroundColor: '#494949',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    mvvTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#FF8737',
      marginBottom: '20px',
    },
    mvvText: {
      fontSize: '1.1rem',
      color: '#E0E0E0',
      lineHeight: '1.7',
    },
    achievementsSection: {
      backgroundColor: '#494949',
      padding: '80px 40px',
      marginBottom: '80px',
    },
    achievementsTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: '20px',
    },
    achievementsSubtitle: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#FFA837',
      marginBottom: '60px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '40px',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    statCard: {
      textAlign: 'center',
      padding: '20px',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#FF8737',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '1rem',
      color: '#E0E0E0',
      fontWeight: '600',
    },
    
    // Organizational Chart
    orgSection: {
      maxWidth: '1600px',
      margin: '0 auto 80px',
      padding: '0 40px',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#494949',
      marginBottom: '60px',
    },
    
    // Top Level (Advisor + President + VP)
    topLevel: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '40px',
      marginBottom: '80px',
      flexWrap: 'wrap',
    },
    
    // Member Card
    memberCard: {
      backgroundColor: '#494949',
      borderRadius: '12px',
      padding: '20px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s ease',
      position: 'relative',
    },
    imagePlaceholder: {
      width: '150px',
      height: '150px',
      backgroundColor: '#666',
      border: '3px dashed #999',
      borderRadius: '50%',
      margin: '0 auto 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      color: '#999',
    },
    memberName: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: '8px',
      lineHeight: '1.3',
    },
    memberRole: {
      fontSize: '0.85rem',
      color: '#FFA837',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    
    // Connecting Lines
    connector: {
      width: '2px',
      height: '60px',
      backgroundColor: '#494949',
      margin: '0 auto',
    },
    horizontalConnector: {
      height: '2px',
      backgroundColor: '#494949',
      margin: '30px 0',
    },
    
    // Grid Sections
    gridSection: {
      marginBottom: '60px',
    },
    gridTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#494949',
      marginBottom: '30px',
      textAlign: 'center',
    },
    membersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '30px',
      justifyItems: 'center',
    },
    
    // Small Cards for Committee Members
    smallCard: {
      backgroundColor: '#494949',
      borderRadius: '12px',
      padding: '15px',
      width: '180px',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s ease',
    },
    smallImagePlaceholder: {
      width: '100px',
      height: '100px',
      backgroundColor: '#666',
      border: '2px dashed #999',
      borderRadius: '50%',
      margin: '0 auto 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: '#999',
    },
    smallMemberName: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#FFFFFF',
      lineHeight: '1.2',
    },
    
    // Sponsors
    sponsorsSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
    },
    sponsorsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
    },
    sponsorCard: {
      backgroundColor: '#494949',
      padding: '40px',
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    sponsorLabel: {
      fontSize: '0.9rem',
      color: '#FFA837',
      fontWeight: '700',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    sponsorLogo: {
      width: '100%',
      height: '120px',
      objectFit: 'contain',
      filter: 'brightness(0) invert(1)',
      opacity: 0.8,
    },
  };

  const MemberCard = ({ member, large = false }) => (
    <div 
      style={large ? styles.memberCard : styles.smallCard}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={large ? styles.imagePlaceholder : styles.smallImagePlaceholder}>
        📷
      </div>
      <div style={large ? styles.memberName : styles.smallMemberName}>
        {member.name}
      </div>
      {member.role && (
        <div style={styles.memberRole}>{member.role}</div>
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.title}>About us</h1>
        <p style={styles.description}>
          The AIChE Students Chapter at KFUPM, founded in 2013, serves as a vital link between students and the chemical engineering industry empowering future engineers through hands-on experiences, professional development, and meaningful industry exposure.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div style={styles.mvvSection}>
        <div style={styles.mvvCard}>
          <h2 style={styles.mvvTitle}>Our Mission</h2>
          <p style={styles.mvvText}>
            Facilitating networking opportunities with industry professionals, alumni, and academia to bridge the gap between theoretical knowledge and practical application.
          </p>
        </div>
        <div style={styles.mvvCard}>
          <h2 style={styles.mvvTitle}>Our Vision</h2>
          <p style={styles.mvvText}>
            Our vision is to be recognized as the leading AIChE student chapter nationally and internationally, known for our contribution to the development of future chemical engineering leaders.
          </p>
        </div>
        <div style={styles.mvvCard}>
          <h2 style={styles.mvvTitle}>Our Values</h2>
          <p style={styles.mvvText}>
            Excellence, Innovation, Collaboration, and Professional Development drive everything we do as we prepare the next generation of chemical engineers.
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div style={styles.achievementsSection}>
        <h2 style={styles.achievementsTitle}>KFUPM-AIChE's Achievements</h2>
        <p style={styles.achievementsSubtitle}>for the Academic Year 2024-2025!</p>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Organizational Chart */}
      <div style={styles.orgSection}>
        <h2 style={styles.sectionTitle}>Our Team Structure</h2>
        
        {/* Top Level: Advisor, President, VP */}
        <div style={styles.topLevel}>
          <MemberCard member={orgChart.advisor} large />
          <MemberCard member={orgChart.president} large />
          <MemberCard member={orgChart.vicePresident} large />
        </div>
        
        <div style={styles.connector}></div>
        
        {/* Committee Heads */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Committee Heads</h3>
          <div style={styles.membersGrid}>
            {orgChart.committeeHeads.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
        
        {/* Specialists */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Specialists</h3>
          <div style={styles.membersGrid}>
            {orgChart.specialists.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
        
        {/* Quality Advisory */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Quality Advisory</h3>
          <div style={styles.membersGrid}>
            {orgChart.qualityAdvisory.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
        
        {/* Team Leaders */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Team Leaders</h3>
          <div style={styles.membersGrid}>
            {orgChart.teamLeaders.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
        
        {/* Events Committee */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Events - Activities Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.events.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
        
        {/* Marketing Committee */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Marketing - Social Media Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.marketing.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
        
        {/* Designers */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Marketing - Designers Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.designers.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
        
        {/* Photographers */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Marketing - Photographers Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.photographers.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
        
        {/* Industrial Visits */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Events - Industrial Visits Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.industrialVisits.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
        
        {/* ESC */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>ESC and Partnerships Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.esc.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
        
        {/* Outreach */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Outreach Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.outreach.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
        
        {/* Conferences */}
        <div style={styles.gridSection}>
          <h3 style={styles.gridTitle}>Conference & International Competition Committee</h3>
          <div style={styles.membersGrid}>
            {orgChart.committees.conferences.map((name, index) => (
              <MemberCard key={index} member={{ name }} />
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors */}
      <div style={styles.sponsorsSection}>
        <h2 style={styles.sectionTitle}>Our Sponsors</h2>
        <div style={styles.sponsorsGrid}>
          <div style={styles.sponsorCard}>
            <div style={styles.sponsorLabel}>GOLD SPONSOR</div>
            <img src="/logo.png" alt="Gold Sponsor" style={styles.sponsorLogo} />
          </div>
          <div style={styles.sponsorCard}>
            <div style={styles.sponsorLabel}>MEDIA PARTNER</div>
            <img src="/2110.jpg" alt="Media Partner" style={styles.sponsorLogo} />
          </div>
          <div style={styles.sponsorCard}>
            <div style={styles.sponsorLabel}>SILVER SPONSOR</div>
            <img src="/710.jpg" alt="Silver Sponsor" style={styles.sponsorLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;