import React from 'react';
import { Link } from 'react-router-dom';
import './Navgation.css';
function Navbar() {
  return (
    <nav>
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="leasetown">Lease To Own</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;