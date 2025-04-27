import React from 'react';
import './Services.css';

const services = [
  {
    name: 'Residential Power Washing',
    desc: 'Transform your home with our professional cleaning for driveways, siding, decks, and more.'
  },
  {
    name: 'Commercial Services',
    desc: 'Keep your business looking its best with our exterior cleaning, parking lot, and storefront services.'
  },
  {
    name: 'Specialty Cleaning',
    desc: 'We handle graffiti removal, oil stains, paver restoration, and tough jobs others can\'t.'
  }
];

const Services = () => (
  <section className="services-section" id="services">
    <h2 className="section-title">About Our Services</h2>
    <div className="services-cards">
      {services.map((s, i) => (
        <div className="service-card" key={i}>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
