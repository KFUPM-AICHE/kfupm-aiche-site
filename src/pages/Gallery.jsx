import React, { useState } from 'react';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // الأقسام الخمسة مع صور الغلاف
  const categories = [
    {
      id: 1,
      name: 'Conferences and Competitions',
      coverImage: '/892.jpg',
      slides: [
        { image: '/892.jpg', title: 'Green Guardians Hackathon', description: 'Our team won first place in the Green Guardians Hackathon during the Energy and Climate Conference in Bahrain', date: '8-11 September' },
        { image: '/239.jpg', title: 'ChemE Jeopardy Competition', description: 'Exciting competition testing chemical engineering knowledge', date: 'October 2024' },
        { image: '/299.jpg', title: 'Research Conference Presentation', description: 'Students presented their research findings', date: 'November 2024' },
        { image: '/2910.jpg', title: 'IDCE 2025 Conference', description: 'Three-day conference on refining and petrochemicals in Bahrain', date: '30 Sep - 2 Oct' },
        { image: '/89.jpg', title: 'Innovation Competition', description: 'Showcasing innovative solutions to industry challenges', date: 'October 2024' },
        { image: '/891.png', title: 'Regional Engineering Contest', description: 'Competing with universities across the region', date: 'November 2024' },
        { image: '/710.jpg', title: 'Shark Tank Presentation', description: 'Students pitched innovative ideas to industry judges', date: '26 November' },
        { image: '/1510.jpg', title: 'Design Competition Final', description: 'Final round of the chemical process design competition', date: 'December 2024' },
        { image: '/2110.jpg', title: 'Academic Excellence Awards', description: 'Celebrating outstanding academic achievements', date: 'December 2024' },
        { image: '/892.jpg', title: 'Year-End Conference', description: 'Annual conference showcasing student projects', date: 'December 2024' },
      ]
    },
    {
      id: 2,
      name: 'Seminars and Workshops',
      coverImage: '/299.jpg',
      slides: [
        { image: '/299.jpg', title: 'Machine Learning for Chemical Engineers', description: 'Engineer Ahmed Alolaywi shared expertise in AI and Machine Learning', date: '29 September' },
        { image: '/710.jpg', title: 'Chemical Engineers Career Seminar', description: 'Engineers Hanan Al-Quraish and Hussain Al-Hassan shared their career journey', date: '7 October' },
        { image: '/1510.jpg', title: 'COOP Experience Workshop', description: 'Virtual session with industry professionals about training opportunities', date: '15 October' },
        { image: '/89.jpg', title: 'Process Safety Training', description: 'Essential training on safety protocols in chemical processes', date: '3 December' },
        { image: '/891.png', title: 'LinkedIn Professional Development', description: 'Workshop on networking and personal branding', date: '9 December' },
        { image: '/239.jpg', title: 'Hydrotreating Technology Seminar', description: 'Technical seminar on hydrotreating processes in industry', date: '30 November' },
        { image: '/2910.jpg', title: 'Data Science Workshop', description: 'Hands-on workshop on data analysis for engineers', date: 'November 2024' },
        { image: '/2110.jpg', title: 'Industry 4.0 Seminar', description: 'Exploring digital transformation in chemical industry', date: 'November 2024' },
        { image: '/710.jpg', title: 'Sustainability in Engineering', description: 'Workshop on sustainable practices in chemical engineering', date: 'December 2024' },
        { image: '/892.jpg', title: 'Leadership Skills Development', description: 'Developing leadership capabilities for future engineers', date: 'December 2024' },
      ]
    },
    {
      id: 3,
      name: 'Industrial Visits',
      coverImage: '/2910.jpg',
      slides: [
        { image: '/2910.jpg', title: 'S-CHEM Company Visit', description: 'Students explored production processes and advanced manufacturing technologies', date: 'October 2024' },
        { image: '/299.jpg', title: 'Petrochemical Plant Tour', description: 'Visit to major petrochemical facility in the Eastern Province', date: 'September 2024' },
        { image: '/892.jpg', title: 'Oil Refinery Visit', description: 'Comprehensive tour of refining operations and processes', date: 'October 2024' },
        { image: '/710.jpg', title: 'Water Treatment Facility', description: 'Learning about industrial water treatment technologies', date: 'November 2024' },
        { image: '/239.jpg', title: 'Manufacturing Excellence Tour', description: 'Visiting world-class manufacturing facility', date: 'November 2024' },
        { image: '/1510.jpg', title: 'Research Center Visit', description: 'Exploring cutting-edge research facilities', date: 'October 2024' },
        { image: '/2110.jpg', title: 'Quality Control Laboratory', description: 'Understanding quality assurance in chemical production', date: 'November 2024' },
        { image: '/89.jpg', title: 'Polymer Production Plant', description: 'Tour of advanced polymer manufacturing facility', date: 'December 2024' },
        { image: '/891.png', title: 'Energy Company Visit', description: 'Learning about energy production and distribution', date: 'December 2024' },
        { image: '/892.jpg', title: 'Pharmaceutical Manufacturing', description: 'Visit to pharmaceutical production facility', date: 'December 2024' },
      ]
    },
    {
      id: 4,
      name: 'Social Events',
      coverImage: '/239.jpg',
      slides: [
        { image: '/239.jpg', title: 'National Day Celebration', description: 'Celebrating the 94th Saudi National Day with pride and enthusiasm', date: '23 September' },
        { image: '/2110.jpg', title: 'Clubs Fusion Competition', description: 'Inter-club competition promoting cooperation and team spirit', date: '27 October' },
        { image: '/89.jpg', title: 'Letter Race for Members', description: 'Fun team-building activity for chapter members', date: '19 November' },
        { image: '/891.png', title: 'Sporting Events Day', description: 'Annual sports day promoting health and teamwork', date: '8 December' },
        { image: '/710.jpg', title: 'Member Appreciation Event', description: 'Recognizing outstanding contributions from chapter members', date: 'December 2024' },
        { image: '/1510.jpg', title: 'Year-End Celebration', description: 'Celebrating achievements and milestones of the academic year', date: 'December 2024' },
        { image: '/239.jpg', title: 'Welcome Week Activities', description: 'Welcoming new members to the AIChE family', date: 'September 2024' },
        { image: '/892.jpg', title: 'Cultural Exchange Event', description: 'Celebrating diversity and cultural exchange', date: 'October 2024' },
        { image: '/2910.jpg', title: 'Community Service Day', description: 'Giving back to our community through volunteer work', date: 'November 2024' },
        { image: '/299.jpg', title: 'Annual Gala Dinner', description: 'Formal celebration of the year\'s achievements', date: 'December 2024' },
      ]
    },
    {
      id: 5,
      name: 'Productions',
      coverImage: '/891.png',
      slides: [
        { image: '/891.png', title: 'ChemE Car Project', description: 'Student-designed chemical engineering car demonstration', date: '14 December' },
        { image: '/89.jpg', title: 'Process Simulation Project', description: 'Advanced simulation of chemical processes', date: 'November 2024' },
        { image: '/892.jpg', title: 'Research Poster Exhibition', description: 'Showcasing student research through professional posters', date: 'October 2024' },
        { image: '/239.jpg', title: 'Product Development Showcase', description: 'Presenting innovative product developments', date: 'November 2024' },
        { image: '/710.jpg', title: 'Safety Video Production', description: 'Creating educational safety training videos', date: 'October 2024' },
        { image: '/2910.jpg', title: 'Documentary Project', description: 'Documentary on chemical engineering careers', date: 'December 2024' },
        { image: '/1510.jpg', title: 'Technical Publication', description: 'Student contributions to technical publications', date: 'November 2024' },
        { image: '/2110.jpg', title: 'Digital Content Creation', description: 'Creating educational digital content for social media', date: 'October 2024' },
        { image: '/299.jpg', title: 'Promotional Materials', description: 'Designing promotional materials for chapter events', date: 'September 2024' },
        { image: '/891.png', title: 'Annual Yearbook', description: 'Producing the chapter\'s annual yearbook', date: 'December 2024' },
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