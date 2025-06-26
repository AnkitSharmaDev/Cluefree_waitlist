import React from 'react';
import './Navbar.css';

const Navbar = ({ onJoinWaitlistClick }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span className="logo-dot"></span>
      <span className="logo-text">Clufree</span>
      <span className="beta-tag">Beta</span>
    </div>
    <button className="join-waitlist-btn" onClick={onJoinWaitlistClick}>Join waitlist</button>
  </nav>
);

export default Navbar; 