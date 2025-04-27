import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1>PurePower Powerwashing</h1>
      <p className="tagline">Professional Power Washing Services</p>
      <div className="cta-buttons">
        <a href="tel:1234567890" className="cta-button">
          Call Now: (123) 456-7890
        </a>
        <a href="mailto:contact@contipowerwash.com" className="cta-button">
          Email Us
        </a>
      </div>
    </div>
  </header>
);

export default Header;
