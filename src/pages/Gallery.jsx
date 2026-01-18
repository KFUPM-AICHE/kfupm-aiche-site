import React, { useState } from 'react';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // الأقسام الأربعة مع صور الغلاف
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
    
    // Categories View
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 40px',
    },
    categoryCard: {
      position: 'relative',
      height: '350px',
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    coverImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
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
    
    // Slider View
    sliderContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
    },
    backButton: {
      backgroundColor: '#494949',
      color: '#FFFFFF',
      border: 'none',
      padding: '12px 30px',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '8px',
      cursor: 'pointer',
      marginBottom: '40px',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
    sliderWrapper: {
      position: 'relative',
      backgroundColor: '#494949',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
    },
    slideImage: {
      width: '100%',
      height: '600px',
      objectFit: 'cover',
    },
    sliderButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 135, 55, 0.9)',
      color: '#FFFFFF',
      border: 'none',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      fontSize: '1.5rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderButtonLeft: {
      left: '20px',
    },
    sliderButtonRight: {
      right: '20px',
    },
    slideInfo: {
      padding: '40px',
      backgroundColor: '#494949',
      color: '#FFFFFF',
    },
    slideDate: {
      fontSize: '0.9rem',
      color: '#FF8737',
      fontWeight: '700',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    slideTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: '20px',
      lineHeight: '1.3',
    },
    slideDescription: {
      fontSize: '1.1rem',
      color: '#E0E0E0',
      lineHeight: '1.8',
      marginBottom: '30px',
    },
    slideCounter: {
      fontSize: '1rem',
      color: '#FFA837',
      fontWeight: '600',
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

        <div style={styles.categoriesGrid}>
          {categories.map((category) => (
            <div
              key={category.id}
              style={styles.categoryCard}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 135, 55, 0.4)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img src={category.coverImage} alt={category.name} style={styles.coverImage} />
              <div style={styles.categoryOverlay}>
                <h2 style={styles.categoryName}>{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // عرض الـ Slider
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

        <div style={styles.sliderWrapper}>
          {/* الصورة */}
          <img 
            src={currentSlideData.image} 
            alt={currentSlideData.title} 
            style={styles.slideImage}
          />
          
          {/* أزرار Previous/Next */}
          <button
            style={{ ...styles.sliderButton, ...styles.sliderButtonLeft }}
            onClick={prevSlide}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 135, 55, 1)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 135, 55, 0.9)'}
          >
            ‹
          </button>
          <button
            style={{ ...styles.sliderButton, ...styles.sliderButtonRight }}
            onClick={nextSlide}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 135, 55, 1)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 135, 55, 0.9)'}
          >
            ›
          </button>
          
          {/* المعلومات تحت الصورة */}
          <div style={styles.slideInfo}>
            <div style={styles.slideDate}>{currentSlideData.date}</div>
            <h2 style={styles.slideTitle}>{currentSlideData.title}</h2>
            <p style={styles.slideDescription}>{currentSlideData.description}</p>
            <div style={styles.slideCounter}>
              {currentSlide + 1} / {selectedCategory.slides.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;