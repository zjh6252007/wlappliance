import React from 'react';
import { Link } from 'react-router-dom';
import './Navgation.css';
function Navbar() {
  return (
    <nav>
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><a href="https://snapfinance.com/" target="_blank" rel="noopener noreferrer">Lease To Own</a></li>
        <li><Link to="/repair">Reapir Service</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;