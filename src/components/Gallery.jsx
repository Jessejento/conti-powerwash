import React from 'react';

const Gallery = () => {
  const images = [
    {
      before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      title: 'Driveway Cleaning'
    },
    {
      before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      title: 'House Exterior'
    },
    {
      before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      title: 'Deck Restoration'
    }
  ];

  return (
    <section className="gallery">
      <h2>Our Work</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <h3>{image.title}</h3>
            <div className="comparison">
              <div className="image-container">
                <img src={image.before} alt={`Before ${image.title}`} />
                <span className="label">Before</span>
              </div>
              <div className="image-container">
                <img src={image.after} alt={`After ${image.title}`} />
                <span className="label">After</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
