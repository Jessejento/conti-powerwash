import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">PurePower Powerwashing</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
