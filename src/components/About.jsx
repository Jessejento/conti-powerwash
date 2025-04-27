import React from 'react';

const About = () => (
  <section className="about">
    <h2>About Our Services</h2>
    <div className="services-grid">
      <div className="service-card">
        <h3>Residential Power Washing</h3>
        <p>Transform your home's exterior with our professional power washing services. We clean driveways, sidewalks, decks, and house exteriors.</p>
      </div>
      <div className="service-card">
        <h3>Commercial Services</h3>
        <p>Keep your business looking its best with our commercial power washing solutions. Perfect for storefronts, parking lots, and building exteriors.</p>
      </div>
      <div className="service-card">
        <h3>Specialty Cleaning</h3>
        <p>We handle tough jobs like graffiti removal, oil stain removal, and deep cleaning of outdoor surfaces.</p>
      </div>
    </div>
  </section>
);

export default About;
