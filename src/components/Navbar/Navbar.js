import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Images/Official_Logo_29.webp';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={logo} alt="Marvel Rivals" className="logo" />
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* Updated to use Link for routing */}
        <li><Link to="/characters">Characters</Link></li>
        <li><a href="/news">News</a></li>
        <li><a href="/forum">Forum</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
