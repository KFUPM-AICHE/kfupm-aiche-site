import React from 'react';

// Color Palette Definition
const colors = {
  primaryOrange: '#FF8737',  // Main Headings Color
  secondaryOrange: '#FFA837', // Timeline Line and Dots Color
  darkGray: '#494949',      // Primary Background Color
  white: '#FFFFFF',        // Primary Text Color
  accentBlue: '#37AFFF',    // Tags Color (Unused in final style)
};

// Image Links (Extracted from the provided URL)
const IMAGE_HACKATHON_COOP = '/logo.png'; 
const IMAGE_NATIONAL_DAY_SEMINAR = '/logo.png'; 

// Text with <br /> for new lines and bullet points
const aiSeminarDescriptionHTML = "Technology, especially artificial intelligence, is increasingly important in our modern era, and there is no doubt that it is a skill that adds value to chemical engineers. Therefore, we hosted Engineer Ahmed Alolaywi to share his expertise in:<br />&bull; Introduction to Python<br />&bull; Supervised Learning<br />&bull; Hybrid Modelling<br />&bull; Data-Driven Optimization<br />&bull; Reinforcement Learning<br />&bull; Unsupervised Learning<br /><br />It was a day full of excitement, learning, and valuable insights.";

// Event Data Array (UPDATED DESCRIPTIONS AND IMAGES)
const timelineEvents = [
  { 
    date: '8/9 - 11/9', 
    title: 'Green Guardians Hackathon', 
    description: 'Proud of our students’ achievement! Our team won first place in the Green Guardians Hackathon during the Energy and Climate Conference in Bahrain', 
    image: '/892.jpg'
  },
  { 
    date: '23/9', 
    title: 'National Day', 
    description: 'The homeland is our warm embrace and constant source of support. With great pride in belonging to our beloved country, we organized a booth to celebrate the National Day on September 23.', 
    image: '/239.jpg', 
    special: true 
  },
  { 
    date: '29/09', 
    title: 'IDCE 2025 visits + Machine Learning for Chemical Engineers', 
    description: aiSeminarDescriptionHTML, 
    image: '/299.jpg'
  },
  { 
    date: '30/09 - 02/10', 
    title: 'IDCE 2025', 
    description: 'We were delighted to participate in a conference focused on the field of refining and petrochemicals in the Bahrain region for three consecutive days.', 
    image: '2910.jpg' 
  },
  { 
    date: '07/10', 
    title: 'Chemical engineers seminar', 
    description: 'Each of us has a story that inspires and motivates us to move forward on our university journey, giving us hope and excitement for the professional world. We hosted Engineer Hanan Al-Quraish and Engineer Hussain Al-Hassan, who shared their amazing stories — from why they chose their university majors to how they entered the world of employment. We hope we’ve added a spark of inspiration and motivation that shines in the mind whenever waves of discouragement appear.', 
    image: '710.jpg' 
  },
  { 
    date: '15/10', 
    title: 'SCW: COOP EXPERIENCE', 
    description: 'Through Microsoft Teams, we hosted three outstanding individuals in the world of industrial training and cooperation with global companies — Malak Omair, Zachary Velasquez, and Collen Mesina. They generously shared their valuable time with us in an engaging discussion session on Teams, offering insightful experiences that will undoubtedly inspire a strong desire to pursue training opportunities in the world of industrial collaboration!', 
    image: '/1510.jpg'
  },
  { 
    date: '27/10', 
    title: 'Clubs fusion', 
    description: 'Competitions help renew energy and inspire cooperation among students toward achieving a common goal. Therefore, we organized the Clubs Fusion competition, in which many different clubs participated.', 
    image: '/2110.jpg' 
  },
  { date: '10/11', title: 'Research comp EXPERIENCE', description: '', image: '/logo.png' },
  { date: '19/11', title: 'letter race for members', description: '', image: '/logo.png' },
  { date: '26/11', title: 'shark tank presentation EXPERIENCE', description: '', image: '/logo.png' },
  { date: '30/11', title: 'Hydrotreating seminar', description: '', image: '/logo.png' },
  { date: '03/12', title: 'Process safety seminar', description: '', image: '/logo.png' },
  { date: '08/12', title: 'Sporting events', description: '', image: '/logo.png' },
  { date: '09/12', title: 'Linkedin seminar', description: '', image: '/logo.png' },
  { date: '14/12', title: 'ChemE car presentation', description: '', image: '/logo.png' },
];

// Main Calendar Component
function Calendar() {
  return (
    <div style={{
      backgroundColor: colors.darkGray,
      color: colors.white,
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      // Set the overall text direction to LTR
      direction: 'ltr',
    }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ color: colors.white, fontSize: '2.5em', borderBottom: `3px solid ${colors.secondaryOrange}`, paddingBottom: '10px', display: 'inline-block' }}>
          251 ACTIVITIES CALENDAR 
        </h1>
        <p style={{ color: colors.primaryOrange, marginTop: '15px', maxWidth: '600px', margin: '15px auto 0' }}>
          A chronological overview of our important events and activities.
        </p>
      </div>

      {/* Timeline Container */}
      <div style={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Central Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          width: '4px',
          backgroundColor: colors.secondaryOrange,
          top: 0,
          bottom: 0,
          transform: 'translateX(-50%)',
          borderRadius: '2px',
        }}></div>

        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0; // Alternating: Left then Right
          const dotColor = event.special ? colors.primaryOrange : colors.secondaryOrange;
          // Setting alignment to consistent LEFT for all content blocks
          const contentAlignment = 'left'; 

          return (
            <div key={index} style={{
              display: 'flex',
              // Use justify-content to place content on the right or left of the center line
              justifyContent: isLeft ? 'flex-start' : 'flex-end',
              width: '100%',
              marginBottom: '40px',
              position: 'relative',
            }}>
              {/* Event Card Content */}
              <div style={{
                width: '45%',
                padding: '10px 0',
                position: 'relative',
                // Adjusting padding/margin to pull content away from the center line
                ...(isLeft 
                    ? { marginRight: '5%', paddingRight: '20px' } 
                    : { marginLeft: '5%', paddingLeft: '20px' }),
                textAlign: contentAlignment, // All text aligned LEFT
              }}>
                {/* Title */}
                <h3 style={{
                  color: colors.white, 
                  marginBottom: '5px',
                  fontSize: '1.2em',
                  lineHeight: '1.4',
                }}>
                  {event.title}
                </h3>
                {/* Date */}
                <p style={{
                  color: colors.secondaryOrange,
                  fontSize: '0.95em',
                  marginBottom: '10px',
                  fontWeight: 'bold',
                }}>
                  {event.date}
                </p>
                
                {/* Image */}
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '3px',
                      marginBottom: '10px',
                      objectFit: 'cover',
                      maxHeight: '300px',
                      // Removed border: `2px solid ${colors.secondaryOrange}`, 
                    }}
                  />
                )}
                
                {/* Description (using dangerouslySetInnerHTML) */}
                <p style={{ marginBottom: '10px', color: colors.white, fontSize: '1.2em', lineHeight: '1.6' }}
                   dangerouslySetInnerHTML={{ __html: event.description }}>
                </p>
              </div>
              
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                top: '0px', 
                left: '50%',
                width: '16px',
                height: '16px',
                backgroundColor: dotColor,
                borderRadius: '50%',
                transform: 'translate(-50%, 0)', 
                zIndex: 2,
                border: `3px solid ${colors.darkGray}`, // Border matches background
                boxShadow: `0 0 0 1px ${colors.white}`,
              }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;