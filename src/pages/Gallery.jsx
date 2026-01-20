import React, { useState } from 'react';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      id: 1,
      name: 'Social Events',
      coverImage: '/the_sporting_event.jpg',
      slides: [
        { image: '/kick_off_meeting.JPG', title: 'Kick-off Meeting', description: 'The Kick-off Meeting marked an inspiring beginning to the 25/26 academic year, setting the stage for a journey filled with ambition, collaboration, and purpose.', date: 'September 2024' },
        { image: '/national_day_celebration.jpg', title: 'National Day Celebration', description: 'From a land of pride, we celebrated our Kingdom of Saudi Arabia.', date: '23 September' },
        { image: '/the_sporting_event.jpg', title: 'The Sporting Event', description: 'Chapter members enjoyed an energetic padel session filled with fun.', date: 'October 2024' },
        { image: '/football_match.jpg', title: 'Football Match', description: 'We proudly supported our team participating in the Sports Event alongside the Sports Club. A big thank you to the team for their outstanding performance!', date: 'October 2024' },
        { image: '/teachers_day_booth.jpg', title: 'Teachers Day Booth', description: 'Through our teachers, dreams take shape and excellence becomes achievable.', date: 'October 2024' },
        { image: '/the_pink.jpg', title: 'Think Pink', description: 'In October We Think Pink!', date: 'October 2024' },
      ]
    },
    {
      id: 2,
      name: 'Seminars and Workshops',
      coverImage: '/eng101.JPG',
      slides: [
        { image: '/ml.jpg', title: 'Machine Learning for Chemical Engineers', description: 'Shedding light on the growing role of artificial intelligence in chemical engineering.', date: '29 September' },
        { image: '/from_campus_to_career.JPG', title: 'From Campus to Career', description: 'Eng. Hussain Alhassan and Eng. Hanan Quraish shared valuable insights about the transition from student life to professional careers.', date: '7 October' },
        { image: '/eng101.JPG', title: 'English 101 Help session', description: 'The English 101 Final Exam Workshop was successfully concluded with excellent attendance and active engagement.', date: 'November 2024' },
        { image: '/procces.jpg', title: 'Process Safety Seminar', description: 'A Meaningful Conclusion to the Process Safety Seminar presented by Dr. Christos Argyropoulos.', date: '3 December' },
      ]
    },
    {
      id: 3,
      name: 'Industrial Visits',
      coverImage: '/bhig.png',
      slides: [
        { image: '/bhig.png', title: 'BHIG Visit', description: 'An enriching visit to BHIG – Jubail, where academic knowledge met real-world industrial practice.', date: 'October 2024' },
      ]
    },
    {
      id: 4,
      name: 'Conferences and Competitions',
      coverImage: '/shark.JPG',
      slides: [
        { image: '/892.jpg', title: 'Green Guardians Hackathon', description: 'We are proud of our team who secured first place at the Green Guardians Hackathon during the GWECCC in Bahrain out of 15 universities across GCC.', date: '8-11 September' },
        { image: '/clubs.JPG', title: 'Clubs Fusion', description: 'Clubs Fusion concluded successfully, filled with enthusiasm and friendly competition among student clubs. Congrats to the winners!', date: '27 October' },
        { image: '/shark.JPG', title: 'The Shark Tank', description: 'Aligning with Saudi Vision 2030, the event showcased innovative student solutions focused on the Net-Zero Waste Circular Economy!', date: '26 November' },
        { image: '/res.JPG', title: 'The Research Competition', description: 'The competition showcased student engagement in research, and foster a positive, collaborative academic environment.', date: 'December 2024' },
      ]
    },
    {
      id: 5,
      name: 'Production',
      coverImage: '/kick_off_meeting.JPG',
      isVideo: true,
      slides: [
        { 
          videoId: 'QeaLUNhj-5A', 
          title: 'KFUPM AIChE Production 1', 
          description: 'Chapter video production showcasing our events and activities.',
          date: '2024'
        },
        { 
          videoId: '9ZZP5v7QnOk', 
          title: 'KFUPM AIChE Production 2', 
          description: 'Chapter video production showcasing our events and activities.',
          date: '2024'
        },
        { 
          videoId: 'e2Xac9HAh9M', 
          title: 'KFUPM AIChE Production 3', 
          description: 'Chapter video production showcasing our events and activities.',
          date: '2024'
        },
        { 
          videoId: 'a2P6vqqW1rE', 
          title: 'KFUPM AIChE Production 4', 
          description: 'Chapter video production showcasing our events and activities.',
          date: '2024'
        },
      ]
    },
  ];

  const styles = {
    container: {
      backgroundColor: '#FFA837',
      minHeight: '100vh',
      padding: '80px 20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '700',
      color: '#494949',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#494949',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.7',
    },
    
    // Categories Layout
    categoriesContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    
    row1: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '30px',
    },
    
    row2: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: '30px',
    },
    
    row3: {
      maxWidth: '1100px',
      margin: '0 auto',
      width: '100%',
    },
    
    categoryCard: {
      position: 'relative',
      height: '280px',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      transform: 'perspective(1000px) rotateY(0deg)',
    },
    coverImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease',
    },
    categoryOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '30px',
    },
    categoryName: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#FFFFFF',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    
    // Creative Slider View
    sliderContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
    },
    backButton: {
      backgroundColor: '#494949',
      color: '#FFFFFF',
      border: 'none',
      padding: '12px 30px',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      marginBottom: '40px',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
    
    // Creative Content Layout
    contentLayout: {
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '40px',
      alignItems: 'start',
    },
    
    // Main Content Area
    mainContent: {
      position: 'relative',
      backgroundColor: '#494949',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    },
    
    slideImage: {
      width: '100%',
      height: '600px',
      objectFit: 'cover',
    },
    videoContainer: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
      backgroundColor: '#000',
    },
    videoIframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    
    // Sidebar with thumbnails
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      position: 'sticky',
      top: '20px',
    },
    
    slideInfo: {
      padding: '25px',
      backgroundColor: '#494949',
      borderRadius: '15px',
      color: '#FFFFFF',
    },
    slideDate: {
      fontSize: '0.85rem',
      color: '#FF8737',
      fontWeight: '700',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    slideTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: '15px',
      lineHeight: '1.3',
    },
    slideDescription: {
      fontSize: '1rem',
      color: '#E0E0E0',
      lineHeight: '1.7',
      marginBottom: '20px',
    },
    slideCounter: {
      fontSize: '0.9rem',
      color: '#FFA837',
      fontWeight: '600',
    },
    
    // Thumbnails
    thumbnailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxHeight: '500px',
      overflowY: 'auto',
      padding: '10px',
      backgroundColor: '#494949',
      borderRadius: '15px',
    },
    thumbnail: {
      position: 'relative',
      height: '100px',
      borderRadius: '10px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '3px solid transparent',
    },
    thumbnailActive: {
      border: '3px solid #FF8737',
      transform: 'scale(1.05)',
    },
    thumbnailImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    thumbnailOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    thumbnailNumber: {
      color: '#FFFFFF',
      fontSize: '1.5rem',
      fontWeight: '700',
    },
  };

  const nextSlide = () => {
    if (selectedCategory) {
      setCurrentSlide((prev) => (prev + 1) % selectedCategory.slides.length);
    }
  };

  const prevSlide = () => {
    if (selectedCategory) {
      setCurrentSlide((prev) => (prev - 1 + selectedCategory.slides.length) % selectedCategory.slides.length);
    }
  };

  // عرض الأقسام
  if (!selectedCategory) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Our Gallery</h1>
          <p style={styles.subtitle}>
            Select a category to explore our events and activities
          </p>
        </div>

        <div style={styles.categoriesContainer}>
          <div style={styles.row1}>
            <div
              style={styles.categoryCard}
              onClick={() => {
                setSelectedCategory(categories[0]);
                setCurrentSlide(0);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 135, 55, 0.4)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img src={categories[0].coverImage} alt={categories[0].name} style={styles.coverImage} />
              <div style={styles.categoryOverlay}>
                <h2 style={styles.categoryName}>{categories[0].name}</h2>
              </div>
            </div>

            <div
              style={styles.categoryCard}
              onClick={() => {
                setSelectedCategory(categories[1]);
                setCurrentSlide(0);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 135, 55, 0.4)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img src={categories[1].coverImage} alt={categories[1].name} style={styles.coverImage} />
              <div style={styles.categoryOverlay}>
                <h2 style={styles.categoryName}>{categories[1].name}</h2>
              </div>
            </div>
          </div>

          <div style={styles.row2}>
            <div
              style={styles.categoryCard}
              onClick={() => {
                setSelectedCategory(categories[2]);
                setCurrentSlide(0);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 135, 55, 0.4)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img src={categories[2].coverImage} alt={categories[2].name} style={styles.coverImage} />
              <div style={styles.categoryOverlay}>
                <h2 style={styles.categoryName}>{categories[2].name}</h2>
              </div>
            </div>

            <div
              style={styles.categoryCard}
              onClick={() => {
                setSelectedCategory(categories[3]);
                setCurrentSlide(0);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 135, 55, 0.4)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img src={categories[3].coverImage} alt={categories[3].name} style={styles.coverImage} />
              <div style={styles.categoryOverlay}>
                <h2 style={styles.categoryName}>{categories[3].name}</h2>
              </div>
            </div>
          </div>

          <div style={styles.row3}>
            <div
              style={{...styles.categoryCard, width: '100%'}}
              onClick={() => {
                setSelectedCategory(categories[4]);
                setCurrentSlide(0);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 135, 55, 0.5)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img src={categories[4].coverImage} alt={categories[4].name} style={styles.coverImage} />
              <div style={styles.categoryOverlay}>
                <h2 style={styles.categoryName}>{categories[4].name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // عرض الـ Slider بتصميم جديد
  const currentSlideData = selectedCategory.slides[currentSlide];

  return (
    <div style={styles.container}>
      <div style={styles.sliderContainer}>
        <button
          style={styles.backButton}
          onClick={() => setSelectedCategory(null)}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#FF8737';
            e.target.style.transform = 'translateX(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#494949';
            e.target.style.transform = 'translateX(0)';
          }}
        >
          ← Back to Categories
        </button>

        <div style={styles.header}>
          <h1 style={styles.title}>{selectedCategory.name}</h1>
        </div>

        <div style={styles.contentLayout}>
          {/* Main Content */}
          <div style={styles.mainContent}>
            {currentSlideData.videoId ? (
              <div style={styles.videoContainer}>
                <iframe
                  style={styles.videoIframe}
                  src={`https://www.youtube.com/embed/${currentSlideData.videoId}`}
                  title={currentSlideData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img 
                src={currentSlideData.image} 
                alt={currentSlideData.title} 
                style={styles.slideImage}
              />
            )}
          </div>

          {/* Sidebar */}
          <div style={styles.sidebar}>
            {/* Current Slide Info */}
            <div style={styles.slideInfo}>
              <div style={styles.slideDate}>{currentSlideData.date}</div>
              <h2 style={styles.slideTitle}>{currentSlideData.title}</h2>
              <p style={styles.slideDescription}>{currentSlideData.description}</p>
              <div style={styles.slideCounter}>
                {currentSlide + 1} / {selectedCategory.slides.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div style={styles.thumbnailsContainer}>
              {selectedCategory.slides.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.thumbnail,
                    ...(index === currentSlide ? styles.thumbnailActive : {})
                  }}
                  onClick={() => setCurrentSlide(index)}
                  onMouseEnter={(e) => {
                    if (index !== currentSlide) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      const overlay = e.currentTarget.querySelector('.thumbnail-overlay');
                      if (overlay) overlay.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentSlide) {
                      e.currentTarget.style.transform = 'scale(1)';
                      const overlay = e.currentTarget.querySelector('.thumbnail-overlay');
                      if (overlay) overlay.style.opacity = '0';
                    }
                  }}
                >
                  <img 
                    src={slide.image || categories[4].coverImage} 
                    alt={slide.title} 
                    style={styles.thumbnailImage}
                  />
                  <div className="thumbnail-overlay" style={styles.thumbnailOverlay}>
                    <div style={styles.thumbnailNumber}>{index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
