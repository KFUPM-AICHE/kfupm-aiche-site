import React, { useState, useEffect } from 'react';

const colors = {
  primaryOrange: '#FF8737',
  secondaryOrange: '#FFA837',
  darkGray: '#494949',
  white: '#FFFFFF',
};

const timelineEvents = [
  { 
    date: '8/9 - 11/9', 
    title: 'Green Guardians Hackathon', 
    description: 'Proud of our students\' achievement! Our team won first place in the Green Guardians Hackathon during the Energy and Climate Conference in Bahrain', 
    image: '/892.jpg'
  },
  { 
    date: '23/9', 
    title: 'National Day', 
    description: 'The homeland is our warm embrace and constant source of support. With great pride in belonging to our beloved country, we organized a booth to celebrate the National Day on September 23.', 
    image: '/239.jpg'
  },
  { 
    date: '29/09', 
    title: 'Machine Learning for Chemical Engineers', 
    description: 'Technology, especially artificial intelligence, is increasingly important in our modern era. Engineer Ahmed Alolaywi shared his expertise in Python, Machine Learning, and Data Science.', 
    image: '/299.jpg'
  },
  { 
    date: '30/09 - 02/10', 
    title: 'IDCE 2025', 
    description: 'We were delighted to participate in a conference focused on the field of refining and petrochemicals in the Bahrain region for three consecutive days.', 
    image: '/2910.jpg' 
  },
  { 
    date: '07/10', 
    title: 'Chemical Engineers Seminar', 
    description: 'We hosted Engineer Hanan Al-Quraish and Engineer Hussain Al-Hassan, who shared their amazing stories from university to professional world.', 
    image: '/710.jpg' 
  },
  { 
    date: '15/10', 
    title: 'COOP Experience', 
    description: 'Virtual session with industry professionals about training opportunities and career development.', 
    image: '/1510.jpg' 
  },
  { 
    date: '27/10', 
    title: 'Clubs Fusion Competition', 
    description: 'Inter-club competition promoting cooperation and team spirit among student organizations.', 
    image: '/2110.jpg' 
  },
  { 
    date: '10/11', 
    title: 'Research Competition', 
    description: 'Annual research competition showcasing innovative student projects and academic excellence.', 
    image: '/89.jpg' 
  },
  { 
    date: '19/11', 
    title: 'Letter Race for Members', 
    description: 'Fun team-building activity designed to strengthen bonds among chapter members.', 
    image: '/891.png' 
  },
  { 
    date: '26/11', 
    title: 'Shark Tank Presentation', 
    description: 'Students pitched innovative ideas to industry judges in an exciting entrepreneurship competition.', 
    image: '/239.jpg' 
  },
];

function Calendar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('timeline-container');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = element.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const start = elementTop - windowHeight / 2;
      const end = elementTop + elementHeight - windowHeight / 2;
      const progress = ((scrollTop - start) / (end - start)) * 100;
      
      setScrollProgress(Math.max(0, Math.min(100, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    container: {
      backgroundColor: colors.secondaryOrange,
      minHeight: '100vh',
      padding: '80px 20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '700',
      color: colors.darkGray,
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: colors.darkGray,
      maxWidth: '700px',
      margin: '0 auto',
    },
    timelineContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      paddingLeft: '60px',
    },
    
    // الخط المستقيم المركزي
    timelineLine: {
      position: 'absolute',
      left: '20px',
      top: '0',
      bottom: '0',
      width: '4px',
      backgroundColor: colors.darkGray,
      opacity: 0.3,
    },
    
    timelineLineActive: {
      position: 'absolute',
      left: '20px',
      top: '0',
      width: '4px',
      height: `${scrollProgress}%`,
      background: `linear-gradient(to bottom, ${colors.primaryOrange}, ${colors.primaryOrange})`,
      boxShadow: `0 0 20px ${colors.primaryOrange}, 0 0 30px ${colors.primaryOrange}`,
      transition: 'height 0.1s linear',
    },
    
    eventItem: {
      position: 'relative',
      marginBottom: '60px',
      paddingLeft: '40px',
    },
    
    dot: (index) => {
      const progress = (scrollProgress / 100) * timelineEvents.length;
      const isActive = index <= progress;
      
      return {
        position: 'absolute',
        left: '12px',
        top: '20px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: isActive ? colors.primaryOrange : colors.darkGray,
        border: `4px solid ${colors.white}`,
        boxShadow: isActive 
          ? `0 0 20px ${colors.primaryOrange}, 0 0 30px ${colors.primaryOrange}`
          : '0 0 5px rgba(0,0,0,0.2)',
        transition: 'all 0.5s ease',
        zIndex: 2,
      };
    },
    
    eventCard: (index) => {
      const progress = (scrollProgress / 100) * timelineEvents.length;
      const isActive = index <= progress;
      
      return {
        backgroundColor: colors.darkGray,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: isActive 
          ? `0 0 25px ${colors.primaryOrange}, 0 8px 30px rgba(0,0,0,0.3)`
          : '0 4px 15px rgba(0,0,0,0.2)',
        transition: 'all 0.5s ease',
        transform: isActive ? 'translateX(5px)' : 'translateX(0)',
        opacity: isActive ? 1 : 0.7,
      };
    },
    
    eventImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    
    eventContent: {
      padding: '30px',
    },
    
    eventDate: {
      fontSize: '0.9rem',
      color: colors.primaryOrange,
      fontWeight: '700',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    
    eventTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: colors.white,
      marginBottom: '15px',
      lineHeight: '1.3',
    },
    
    eventDescription: {
      fontSize: '1rem',
      color: '#E0E0E0',
      lineHeight: '1.7',
    },
    
    progressIndicator: {
      position: 'fixed',
      top: '100px',
      right: '20px',
      backgroundColor: colors.darkGray,
      color: colors.white,
      padding: '10px 20px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      zIndex: 100,
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Our Calendar</h1>
        <p style={styles.subtitle}>
          Follow our journey through the year's events and activities
        </p>
      </div>

      <div style={styles.progressIndicator}>
        Progress: {Math.round(scrollProgress)}%
      </div>

      <div id="timeline-container" style={styles.timelineContainer}>
        {/* الخط الخلفي */}
        <div style={styles.timelineLine}></div>
        
        {/* الخط المضيء */}
        <div style={styles.timelineLineActive}></div>
        
        {/* الفعاليات */}
        {timelineEvents.map((event, index) => (
          <div key={index} style={styles.eventItem}>
            {/* النقطة */}
            <div style={styles.dot(index)}></div>
            
            {/* البطاقة */}
            <div style={styles.eventCard(index)}>
              <img src={event.image} alt={event.title} style={styles.eventImage} />
              <div style={styles.eventContent}>
                <div style={styles.eventDate}>{event.date}</div>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventDescription}>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;