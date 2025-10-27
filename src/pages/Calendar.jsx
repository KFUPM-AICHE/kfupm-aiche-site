import React from 'react';

// Color Palette Definition
const colors = {
  primaryOrange: '#FF8737',  // Main Headings Color
  secondaryOrange: '#FFA837', // Timeline Line and Dots Color
  darkGray: '#494949',      // Primary Background Color
  white: '#FFFFFF',        // Primary Text Color
  accentBlue: '#37AFFF',    // Tags Color (Unused in final style)
};

// Image Links (Extracted from the provided URL)
const BASE_URL = 'https://alche1.odoo.com';
const IMAGE_HACKATHON_COOP = BASE_URL + '/web/image/1420-740b7f2f/Screenshot%202025-09-14%20101950.webp';
const IMAGE_NATIONAL_DAY_SEMINAR = BASE_URL + '/web/image/1385-3ab18b4f/Screenshot%202025-09-14%20093906.webp';

// Event Data Array
const timelineEvents = [
  { date: '8/9 - 11/9', title: 'Green Guardians Hackathon', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_HACKATHON_COOP },
  { date: '23/9', title: 'National Day', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR, special: true },
  { date: '29/09', title: 'IDCE 2025 visits + Machine Learning for Chemical Engineers', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR },
  { date: '30/09 - 02/10', title: 'IDCE 2025', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_HACKATHON_COOP },
  { date: '07/10', title: 'Chemical engineers seminar', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR },
  { date: '15/10', title: 'SCW: COOP EXPERIENCE', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_HACKATHON_COOP },
  { date: '27/10', title: 'Clubs fusion', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR },
  { date: '10/11', title: 'Research comp EXPERIENCE', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_HACKATHON_COOP },
  { date: '19/11', title: 'letter race for members', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR },
  { date: '26/11', title: 'shark tank presentation EXPERIENCE', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_HACKATHON_COOP },
  { date: '30/11', title: 'Hydrotreating seminar', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR },
  { date: '03/12', title: 'Process safety seminar', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_HACKATHON_COOP },
  { date: '08/12', title: 'Sporting events', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR },
  { date: '09/12', title: 'Linkedin seminar', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_HACKATHON_COOP },
  { date: '14/12', title: 'ChemE car presentation', description: 'A timeline is a graphical representation on which important events are marked.', image: IMAGE_NATIONAL_DAY_SEMINAR },
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
          // Determine text alignment based on position
          const contentAlignment = isLeft ? 'left' : 'right';

          return (
            <div key={index} style={{
              display: 'flex',
              justifyContent: isLeft ? 'flex-start' : 'flex-end',
              width: '100%',
              marginBottom: '40px',
              position: 'relative',
            }}>
              {/* Event Card Content*/}
              <div style={{
                width: '45%',
                padding: '10px 0',
                position: 'relative',
                // Margin to create gap from the center line
                ...(isLeft 
                    ? { marginRight: '5%', paddingRight: '20px' } 
                    : { marginLeft: '5%', paddingLeft: '20px' }),
                textAlign: contentAlignment, // Align all content towards the center line
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
                      borderRadius: '4px',
                      marginBottom: '10px',
                      objectFit: 'cover',
                      maxHeight: '180px',
                      border: `2px solid ${colors.secondaryOrange}`, 
                    }}
                  />
                )}
                
                {/* Description */}
                <p style={{ marginBottom: '10px', color: colors.white, fontSize: '0.9em' }}>
                  {event.description}
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