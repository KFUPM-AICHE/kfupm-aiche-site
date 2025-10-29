import React from 'react';

// 🎨 Color Palette Definition
const colors = {
  primaryOrange: '#FF8737',  // Main Highlight Color
  secondaryOrange: '#FFA837', // Button Color
  darkGray: '#494949',      // Primary Background Color (Page)
  darkerFrame: '#3C3C3C',    // Color for the frame around the image (Brown Accent)
  white: '#FFFFFF',        // Text Color
  textGray: '#CCCCCC',     // Secondary Text Color
};

// 🔗 Media Links
const SECTION_IMAGE_1 = '/22.jpg';
const SECTION_IMAGE_2 = 'https://picsum.photos/600/400?random=2'; 
const SECTION_IMAGE_3 = 'https://picsum.photos/600/400?random=3'; 
const VIDEO_REACT_COURSE = 'https://youtu.be/Qisz8K2tKwM'; 

// 📝 Event Data (Video block has empty strings for text content)
const galleryContent = [
  // 1. VIDEO BLOCK (The text is now removed from this item)
  { 
    title: '', 
    subtitle: '', // EMPTY
    description: '', // EMPTY
    media: { type: 'video', url: VIDEO_REACT_COURSE },
    buttonText: '', // EMPTY
    isFullWidth: true 
  },
  // 2. First Marketing Block 
  { 
    title: 'Electric Driving', 
    subtitle: 'A greener lifestyle', 
    description: "Write one or two paragraphs describing your product or services. To be successful your content needs to be useful to your readers. Start with the customer – find out what they want and give it to them.", 
    media: { type: 'image', url: SECTION_IMAGE_1 },
    buttonText: 'Learn more',
    alignRight: true // Image Right, Text Left
  },
  // 3. Second Marketing Block
  { 
    title: 'No compromise', 
    subtitle: 'The world is yours', 
    description: "Performance and design were the key words during the conception of this super car. No compromises were made to keep the pleasure of driving despite those constraints. Take advantage of a free track trial to discover it.", 
    media: { type: 'image', url: SECTION_IMAGE_2 },
    buttonText: 'Learn more',
    alignRight: false // Image Left, Text Right
  },
  // 4. Third Marketing Block (Repeat)
  { 
    title: 'Electric Driving', 
    subtitle: 'A greener lifestyle', 
    description: "Write one or two paragraphs describing your product or services. To be successful your content needs to be useful to your readers. Start with the customer – find out what they want and give it to them.", 
    media: { type: 'image', url: SECTION_IMAGE_3 },
    buttonText: 'Learn more',
    alignRight: true // Image Right, Text Left
  },
];


// 🎥 Function to convert a standard YouTube URL to an Embed URL
const getEmbedUrl = (url) => {
  const videoIdMatch = url.match(/(?:v=|\/embed\/|youtu\.be\/|\/v\/|\/e\/|watch\?v=|\/watch\?v=)([^&?]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

// 🧱 The Reusable Section Block Component
const SectionBlock = ({ media, title, subtitle, description, buttonText, alignRight, isFullWidth }) => {
    
    // Determine layout based on isFullWidth flag
    const isTwoColumn = !isFullWidth;
    const order = alignRight ? { mediaOrder: 2, textOrder: 1 } : { mediaOrder: 1, textOrder: 2 };
    const textAlignment = alignRight ? 'right' : 'left';
    
    // Media content (Image or Iframe)
    const mediaContent = media.type === 'video' ? (
        <iframe
            title={title}
            src={getEmbedUrl(media.url)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            // Full width video uses a fixed height for visual stability
            style={isFullWidth ? { width: '100%', height: '500px' } : { width: '100%', height: '350px', borderRadius: '4px' }}
        ></iframe>
    ) : (
        <img 
            src={media.url} 
            alt={title} 
            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '350px', borderRadius: '4px' }}
        />
    );


    if (isFullWidth) {
        // --- Full-Width Video Layout (Media Only) ---
        return (
            <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
                {/* 1. Video Container (Full Width) */}
                <div className="full-width-video-container" style={{
                    marginBottom: '30px',
                    // Optional: Dark frame around the video itself
                    border: `5px solid ${colors.darkerFrame}` 
                }}>
                    {mediaContent}
                </div>
                
                {/* 2. Text Content (Only rendered if text exists, but we remove it in data) */}
                {(subtitle || title || description || buttonText) && (
                    <div className="full-width-text-content" style={{
                        textAlign: 'center',
                        padding: '0 10%',
                    }}>
                        {subtitle && <p className="section-subtitle" style={{ color: colors.primaryOrange, fontSize: '1.2em', marginBottom: '5px', fontWeight: 'bold' }}>{subtitle}</p>}
                        {title && <h2 className="section-main-title" style={{ color: colors.white, fontSize: '2.5em', marginBottom: '20px', fontWeight: 'bold' }}>{title}</h2>}
                        {description && <p className="section-description" style={{ color: colors.textGray, fontSize: '1em', lineHeight: '1.6', marginBottom: '30px' }}>{description}</p>}
                        {buttonText && <button className="section-button" style={{
                            backgroundColor: colors.secondaryOrange,
                            color: colors.darkGray,
                            border: 'none',
                            padding: '12px 25px',
                            borderRadius: '4px',
                            fontSize: '1em',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}>{buttonText}</button>}
                    </div>
                )}
            </div>
        );
    }
    
    // --- Two-Column Muted Layout (for marketing blocks) ---
    return (
        <div style={{
            maxWidth: '1200px',
            margin: '60px auto',
            display: 'flex',
            gap: '60px',
            alignItems: 'center',
            backgroundColor: colors.darkGray,
            flexDirection: 'row', 
            direction: 'ltr' 
        }}>
            
            {/* 1. Media Container (Image with Frame) */}
            <div className="section-media-wrapper" style={{ flex: '1', order: order.mediaOrder, position: 'relative' }}>
                <div className="section-image-frame" style={{ 
                    position: 'relative', 
                    padding: '25px', 
                    backgroundColor: colors.darkerFrame, 
                    borderRadius: '4px',
                    clipPath: alignRight 
                        ? 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' 
                        : 'polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)', 
                }}>
                    {mediaContent}

                    {/* Placeholder for the Small Dots Accent */}
                    <div style={{
                        position: 'absolute',
                        ...(alignRight ? { bottom: '15px', right: '40px' } : { bottom: '15px', left: '40px' }),
                        display: 'flex',
                        gap: '8px',
                    }}>
                        <span style={{width: '6px', height: '6px', backgroundColor: colors.secondaryOrange, borderRadius: '50%'}}></span>
                        <span style={{width: '6px', height: '6px', backgroundColor: colors.secondaryOrange, borderRadius: '50%'}}></span>
                        <span style={{width: '6px', height: '6px', backgroundColor: colors.secondaryOrange, borderRadius: '50%'}}></span>
                    </div>
                </div>
            </div>

            {/* 2. Text Content Container */}
            <div className="section-text-content" style={{
                flex: '1',
                order: order.textOrder,
                padding: '20px 0',
                textAlign: textAlignment,
            }}>
                {/* Subtitle */}
                <p className="section-subtitle" style={{ color: colors.primaryOrange, fontSize: '1.2em', marginBottom: '5px', fontWeight: 'bold' }}>
                    {subtitle}
                </p>
                
                {/* Main Title */}
                <h2 className="section-main-title" style={{ color: colors.white, fontSize: '2.5em', marginBottom: '20px', fontWeight: 'bold' }}>
                    {title}
                </h2>
                
                {/* Description */}
                <p className="section-description" style={{ color: colors.textGray, fontSize: '1em', lineHeight: '1.6', marginBottom: '30px' }}>
                    {description}
                </p>
                
                {/* Learn More Button */}
                <button className="section-button" style={{
                    backgroundColor: colors.secondaryOrange,
                    color: colors.darkGray,
                    border: 'none',
                    padding: '12px 25px',
                    borderRadius: '4px',
                    fontSize: '1em',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

// 🌐 Main Gallery Page (Putting all sections together)
function Gallery() {
    
    return (
        <div style={{ 
            backgroundColor: colors.darkGray, 
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif'
        }}>
            
            {/* 1. GALLERY TITLE */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 20px 20px',
                textAlign: 'left'
            }}>
                <h1 style={{
                    color: colors.white,
                    fontSize: '3em',
                    fontWeight: 'bold',
                    borderBottom: `3px solid ${colors.primaryOrange}`,
                    display: 'inline-block',
                    paddingBottom: '10px'
                }}>
                    Our Gallery
                </h1>
            </div>

            {/* 2. Render all content sections */}
            {galleryContent.map((item, index) => (
                <SectionBlock
                    key={index}
                    media={item.media}
                    subtitle={item.subtitle}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    alignRight={item.alignRight}
                    isFullWidth={item.isFullWidth}
                />
            ))}
        </div>
    );
}

export default Gallery;